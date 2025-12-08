const axios = require("axios");
const path = require("path");
const fs = require("fs");
const jwt = require("jsonwebtoken");
const config = require("../config");

// Configuration
const MODELS = {
	FLASH: "gemini-2.5-flash-lite",
	PRO: "gemini-pro-latest",
};

const DEFAULT_MODEL = MODELS.FLASH;
const API_VERSION = "v1beta";

// Cache for access token (valid for 1 hour)
let tokenCache = {
	token: null,
	expiresAt: 0,
};

/**
 * Get access token using service account credentials
 */
const getServiceAccountToken = async () => {
	// ... (Existing token logic)
	try {
		const now = Date.now();
		if (tokenCache.token && tokenCache.expiresAt > now + 5 * 60 * 1000) {
			return tokenCache.token;
		}

		let keyFile;
		if (config.google.keyFilePath) {
			// Try multiple path resolution strategies
			const pathsToTry = [
				config.google.keyFilePath, // Original path (relative to CWD)
				path.resolve(__dirname, "../../", config.google.keyFilePath), // Relative to module
				path.resolve(process.cwd(), config.google.keyFilePath), // Relative to process CWD
				path.resolve(config.google.keyFilePath), // Absolute path if provided
			];

			console.log(`[Gemini] Attempting to load credentials from: ${config.google.keyFilePath}`);
			console.log(`[Gemini] Trying paths: ${pathsToTry.join(", ")}`);

			let foundPath = null;
			for (const tryPath of pathsToTry) {
				if (fs.existsSync(tryPath)) {
					foundPath = tryPath;
					console.log(`[Gemini] Found credentials file at: ${foundPath}`);
					break;
				}
			}

			if (foundPath) {
				keyFile = JSON.parse(fs.readFileSync(foundPath, "utf8"));
			} else {
				// Last resort: try parsing as JSON string
				try {
					keyFile = JSON.parse(config.google.keyFilePath);
					console.log(`[Gemini] Parsed credentials as JSON string`);
				} catch (e) {
					throw new Error(
						`Google Credentials file not found. Tried paths: ${pathsToTry.join(", ")}. ` +
							`Original path: ${config.google.keyFilePath}. ` +
							`Current working directory: ${process.cwd()}. ` +
							`Module directory: ${__dirname}`
					);
				}
			}
		} else {
			throw new Error(
				`Google Credentials not configured. ` +
					`GOOGLE_APPLICATION_CREDENTIALS env var is: ${process.env.GOOGLE_APPLICATION_CREDENTIALS || "undefined"}. ` +
					`Config value: ${config.google.keyFilePath || "undefined"}`
			);
		}

		const nowSeconds = Math.floor(now / 1000);
		const jwtPayload = {
			iss: keyFile.client_email,
			sub: keyFile.client_email,
			aud: "https://oauth2.googleapis.com/token",
			iat: nowSeconds,
			exp: nowSeconds + 3600,
			scope: "https://www.googleapis.com/auth/generative-language",
		};

		const signedJWT = jwt.sign(jwtPayload, keyFile.private_key, { algorithm: "RS256" });

		const tokenResponse = await axios.post("https://oauth2.googleapis.com/token", null, {
			params: {
				grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
				assertion: signedJWT,
			},
		});

		const accessToken = tokenResponse.data.access_token;
		const expiresIn = tokenResponse.data.expires_in || 3600;

		tokenCache = {
			token: accessToken,
			expiresAt: now + expiresIn * 1000,
		};

		return accessToken;
	} catch (error) {
		console.error("Error getting access token:", error);
		throw new Error(`Failed to authenticate with Google service account: ${error.message}`);
	}
};

/**
 * Extract mime type and clean base64 data
 */
const parseBase64 = (base64String) => {
	if (!base64String) return { mimeType: "image/jpeg", data: "" };
	const match = base64String.match(/^data:([a-zA-Z0-9]+\/[a-zA-Z0-9-.+]+);base64,(.+)$/);
	if (match) {
		return { mimeType: match[1], data: match[2] };
	}
	return {
		mimeType: "image/jpeg",
		data: base64String.replace(/^data:image\/[a-z]+;base64,/, ""),
	};
};

const createGeminiHeaders = (accessToken) => {
	return {
		"Content-Type": "application/json",
		Authorization: `Bearer ${accessToken}`,
	};
};

const parseGeminiResponse = (response) => {
	const responseText = response.data?.candidates?.[0]?.content?.parts?.[0]?.text;
	if (!responseText) throw new Error("No response content from Gemini API");

	try {
		return JSON.parse(responseText);
	} catch (parseError) {
		const jsonMatch = responseText.match(/```json\s*([\s\S]*?)\s*```/) || responseText.match(/```\s*([\s\S]*?)\s*```/);
		if (jsonMatch) {
			try {
				return JSON.parse(jsonMatch[1]);
			} catch (e) {
				return responseText;
			}
		}
		return responseText;
	}
};

const executeGeminiRequest = async (imageObject, prompt, modelName, config) => {
	const accessToken = await getServiceAccountToken();
	const { mimeType, data } = imageObject;
	if (!data) throw new Error("Invalid or missing image data");

	const finalPrompt =
		prompt ||
		`
		Analyze this document image and extract all visible text and data fields.
		Return the result as a structured JSON object.
		If the document type is recognizable (e.g., ID card, Invoice, Passport), structure the JSON accordingly.
		Include a 'documentType' field in the response.
	`;

	const headers = createGeminiHeaders(accessToken);
	const geminiUrl = `https://generativelanguage.googleapis.com/${API_VERSION}/models/${modelName}:generateContent`;

	const payload = {
		contents: [
			{
				parts: [{ text: finalPrompt }, { inline_data: { mime_type: mimeType, data: data } }],
			},
		],
		generationConfig: {
			temperature: config.temperature,
			topK: config.topK || 32,
			topP: config.topP || 0.95,
			maxOutputTokens: config.maxOutputTokens || 8192,
			responseMimeType: "application/json",
		},
		safetySettings: [
			{ category: "HARM_CATEGORY_HARASSMENT", threshold: "BLOCK_NONE" },
			{ category: "HARM_CATEGORY_HATE_SPEECH", threshold: "BLOCK_NONE" },
			{ category: "HARM_CATEGORY_SEXUALLY_EXPLICIT", threshold: "BLOCK_NONE" },
			{ category: "HARM_CATEGORY_DANGEROUS_CONTENT", threshold: "BLOCK_NONE" },
		],
	};

	try {
		const response = await axios.post(geminiUrl, payload, { headers });
		return parseGeminiResponse(response);
	} catch (error) {
		if (error.response) {
			console.error("Gemini API Error Details:", JSON.stringify(error.response.data, null, 2));
		}
		throw error;
	}
};

const downloadImageAsBase64 = async (url) => {
	try {
		const response = await axios.get(url, { responseType: "arraybuffer" });
		const buffer = Buffer.from(response.data, "binary");
		let mimeType = response.headers["content-type"] || "image/jpeg";
		if (mimeType && !mimeType.includes("/")) mimeType = `image/${mimeType}`;
		return { mimeType, data: buffer.toString("base64") };
	} catch (error) {
		throw new Error(`Failed to download image from URL: ${error.message}`);
	}
};

const scanDocument = async (imageInput, prompt = null, config = {}) => {
	const { model = DEFAULT_MODEL, useFallback = true, temperature = 0 } = config;
	try {
		let imageObject;
		if (typeof imageInput === "string") {
			if (imageInput.startsWith("http://") || imageInput.startsWith("https://")) {
				imageObject = await downloadImageAsBase64(imageInput);
			} else {
				imageObject = parseBase64(imageInput);
			}
		} else {
			throw new Error("Invalid image input format. Expected URL or Base64 string.");
		}
		return await executeGeminiRequest(imageObject, prompt, model, { ...config, temperature });
	} catch (error) {
		if (model === MODELS.FLASH && useFallback) {
			console.warn(`Gemini Flash failed, retrying with Pro model... (${error.message})`);
			return await scanDocument(imageInput, prompt, { ...config, model: MODELS.PRO, useFallback: false });
		}
		throw error;
	}
};

const listAvailableModels = async () => {
	try {
		const accessToken = await getServiceAccountToken();
		const headers = createGeminiHeaders(accessToken);
		const listUrl = `https://generativelanguage.googleapis.com/${API_VERSION}/models`;
		const response = await axios.get(listUrl, { headers });
		return response.data?.models || [];
	} catch (error) {
		throw error;
	}
};

module.exports = {
	scanDocument,
	listAvailableModels,
	getServiceAccountToken,
};
