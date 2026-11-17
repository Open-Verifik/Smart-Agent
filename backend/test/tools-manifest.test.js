const { describe, it } = require("node:test");
const assert = require("node:assert/strict");
const path = require("node:path");

const manifest = require("../src/config/tools-manifest.json");
const buildOpenApiFromManifest = require("../src/utils/buildOpenApiFromManifest");

describe("Smart-Agent Tools Manifest & OpenAPI Verification", () => {
	it("registers human_id_encrypt with typed schema and accurate description", () => {
		const tool = manifest.endpoints.find((e) => e.id === "human_id_encrypt");
		assert.ok(tool, "human_id_encrypt tool must exist in endpoints");
		assert.equal(tool.method, "POST");
		assert.equal(tool.verifikPath, "/v2/human-id/encrypt");
		assert.match(tool.description, /HumanAuthn/);
		assert.match(tool.description, /humanId/);
		assert.equal(tool.deprecated, undefined);

		// Parameters validation
		assert.equal(tool.parameters.type, "object");
		assert.deepEqual(tool.parameters.required, [
			"faceBase64",
			"identifier",
			"publicData",
			"metadata",
			"os",
			"requireLiveness",
		]);
		assert.equal(tool.parameters.properties.faceBase64.type, "string");
		assert.equal(tool.parameters.properties.identifier.type, "string");
		assert.equal(tool.parameters.properties.publicData.type, "object");
		assert.equal(tool.parameters.properties.metadata.type, "object");
		assert.equal(tool.parameters.properties.os.type, "string");
		assert.deepEqual(tool.parameters.properties.os.enum, ["DESKTOP", "ANDROID", "IOS"]);
		assert.equal(tool.parameters.properties.os.default, "DESKTOP");
		assert.equal(tool.parameters.properties.requireLiveness.type, "boolean");
		assert.equal(tool.parameters.properties.requireLiveness.default, true);
	});

	it("registers human_id_decrypt with typed schema and accurate description", () => {
		const tool = manifest.endpoints.find((e) => e.id === "human_id_decrypt");
		assert.ok(tool, "human_id_decrypt tool must exist in endpoints");
		assert.equal(tool.method, "POST");
		assert.equal(tool.verifikPath, "/v2/human-id/decrypt");
		assert.match(tool.description, /Decrypts and validates a biometric humanId/);
		assert.equal(tool.deprecated, undefined);

		// Parameters validation
		assert.equal(tool.parameters.type, "object");
		assert.deepEqual(tool.parameters.required, ["faceBase64", "humanID", "os"]);
		assert.equal(tool.parameters.properties.faceBase64.type, "string");
		assert.equal(tool.parameters.properties.humanID.type, "string");
		assert.equal(tool.parameters.properties.os.type, "string");
		assert.deepEqual(tool.parameters.properties.os.enum, ["DESKTOP", "ANDROID", "IOS"]);
		assert.equal(tool.parameters.properties.os.default, "DESKTOP");
	});

	it("marks all legacy OpenCV face_recognition_* tools as deprecated", () => {
		const faceTools = manifest.endpoints.filter((e) => e.id.startsWith("face_recognition_"));
		assert.ok(faceTools.length >= 11, `Expected at least 11 face_recognition tools, found ${faceTools.length}`);

		for (const tool of faceTools) {
			assert.equal(tool.deprecated, true, `Tool ${tool.id} should have deprecated: true`);
			assert.match(
				tool.description,
				/DEPRECATED/,
				`Tool ${tool.id} description should indicate deprecation`
			);
			assert.match(
				tool.description,
				/human_id_\*|biometrics_\*/,
				`Tool ${tool.id} description should advise upgrading to modern tools`
			);
		}
	});

	it("generates valid OpenAPI specification with deprecated operations and typed schemas", () => {
		const openapi = buildOpenApiFromManifest(manifest, { publicOrigin: "https://ai.verifik.co" });
		assert.equal(openapi.openapi, "3.0.3");
		assert.ok(openapi.paths, "paths object must be populated");

		// Encrypt route
		const encryptOp = openapi.paths["/api/human-id/encrypt"]?.post;
		assert.ok(encryptOp, "POST /api/human-id/encrypt must exist");
		assert.equal(encryptOp.operationId, "human_id_encrypt");
		assert.equal(encryptOp.deprecated, undefined);
		const encryptSchema = encryptOp.requestBody.content["application/json"].schema;
		assert.deepEqual(encryptSchema.required, [
			"faceBase64",
			"identifier",
			"publicData",
			"metadata",
			"os",
			"requireLiveness",
		]);
		assert.equal(encryptSchema.properties.faceBase64.type, "string");
		assert.equal(encryptSchema.properties.identifier.type, "string");
		assert.equal(encryptSchema.properties.publicData.type, "object");
		assert.equal(encryptSchema.properties.metadata.type, "object");
		assert.deepEqual(encryptSchema.properties.os.enum, ["DESKTOP", "ANDROID", "IOS"]);
		assert.equal(encryptSchema.properties.requireLiveness.type, "boolean");

		// Decrypt route
		const decryptOp = openapi.paths["/api/human-id/decrypt"]?.post;
		assert.ok(decryptOp, "POST /api/human-id/decrypt must exist");
		assert.equal(decryptOp.operationId, "human_id_decrypt");
		assert.equal(decryptOp.deprecated, undefined);
		const decryptSchema = decryptOp.requestBody.content["application/json"].schema;
		assert.deepEqual(decryptSchema.required, ["faceBase64", "humanID", "os"]);
		assert.equal(decryptSchema.properties.faceBase64.type, "string");
		assert.equal(decryptSchema.properties.humanID.type, "string");
		assert.deepEqual(decryptSchema.properties.os.enum, ["DESKTOP", "ANDROID", "IOS"]);

		// Deprecated compare route
		const compareOp = openapi.paths["/api/face-recognition/compare"]?.post;
		assert.ok(compareOp, "POST /api/face-recognition/compare must exist");
		assert.equal(compareOp.deprecated, true, "compare operation must have deprecated: true");
	});
});
