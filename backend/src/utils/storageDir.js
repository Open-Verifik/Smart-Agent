const fs = require("fs");
const os = require("os");
const path = require("path");

/**
 * Returns true when running in a read-only serverless environment
 * such as Vercel Functions or AWS Lambda.
 *
 * @returns {boolean}
 */
const isServerlessRuntime = () => Boolean(process.env.VERCEL || process.env.AWS_LAMBDA_FUNCTION_NAME);

/**
 * Resolves the writable root directory for runtime state.
 * Uses `os.tmpdir()` in serverless environments where the bundle tree is read-only.
 *
 * @returns {string}
 */
const getStorageRoot = () => {
	if (isServerlessRuntime()) {
		return path.join(os.tmpdir(), "verifik-smart-agent");
	}
	return path.resolve(__dirname, "../../data");
};

/**
 * Resolves a subdirectory path under the active storage root without performing I/O.
 *
 * @param {...string} segments
 * @returns {string}
 */
const getStorageDir = (...segments) => path.join(getStorageRoot(), ...segments);

/**
 * Lazily ensures a storage subdirectory exists, returning its path or `null` on failure.
 *
 * @param {...string} segments
 * @returns {string | null}
 */
const ensureStorageDir = (...segments) => {
	const dir = getStorageDir(...segments);
	try {
		if (!fs.existsSync(dir)) {
			fs.mkdirSync(dir, { recursive: true });
		}
		return dir;
	} catch (err) {
		console.warn(`[StorageDir] Failed to prepare ${dir}:`, err.message);
		return null;
	}
};

module.exports = {
	isServerlessRuntime,
	getStorageRoot,
	getStorageDir,
	ensureStorageDir,
};
