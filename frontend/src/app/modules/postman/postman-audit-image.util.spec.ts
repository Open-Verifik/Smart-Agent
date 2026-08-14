import {
	AUDIT_IMAGE_OMITTED_PLACEHOLDER,
	extractFirstAuditImageDeep,
	isTinyAuditPlaceholder,
	looksLikeImageBase64,
	normalizeImageDataUrl,
	redactAuditImages,
} from './postman-audit-image.util';

const PNG_1X1 =
	'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==';

describe('postman-audit-image.util', () => {
	it('finds data.audit.screenshotBase64', () => {
		expect(
			extractFirstAuditImageDeep({
				data: { audit: { screenshotBase64: PNG_1X1 } },
			})
		).toBe(PNG_1X1);
	});

	it('normalizes raw PNG bytes to a data URL', () => {
		expect(normalizeImageDataUrl(PNG_1X1)).toBe(`data:image/png;base64,${PNG_1X1}`);
		expect(normalizeImageDataUrl(`data:image/jpeg;base64,abc`)).toBe('data:image/jpeg;base64,abc');
	});

	it('treats the sandbox 1×1 PNG as a tiny placeholder', () => {
		expect(isTinyAuditPlaceholder(PNG_1X1)).toBe(true);
		expect(isTinyAuditPlaceholder(`${'A'.repeat(400)}`)).toBe(false);
	});

	it('redacts screenshot fields for on-screen JSON', () => {
		const redacted = redactAuditImages({
			data: { plate: 'AFJ286', audit: { screenshotBase64: PNG_1X1 } },
		}) as { data: { plate: string; audit: { screenshotBase64: string } } };

		expect(redacted.data.plate).toBe('AFJ286');
		expect(redacted.data.audit.screenshotBase64).toBe(AUDIT_IMAGE_OMITTED_PLACEHOLDER);
	});

	it('does not treat short non-image strings as images', () => {
		expect(looksLikeImageBase64('AFJ286')).toBe(false);
		expect(looksLikeImageBase64(PNG_1X1)).toBe(true);
	});
});
