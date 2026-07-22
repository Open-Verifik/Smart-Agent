/**
 * Maps UI / natural-language sexo values to Registraduría SCCRC API values.
 * @param {unknown} value
 * @returns {string}
 */
const normalizeSexoValue = (value) => {
	const trimmed = String(value ?? "").trim();

	if (!trimmed) {
		return "";
	}

	const upper = trimmed.toUpperCase();

	if (["F", "FEMENINO", "FEMALE", "MUJER", "FEMININO"].includes(upper)) {
		return "FEMENINO";
	}

	if (["M", "MASCULINO", "MALE", "HOMBRE", "MASCULINE"].includes(upper)) {
		return "MASCULINO";
	}

	return trimmed;
};

/**
 * Normalizes `sexo` on tool args before calling Verifik.
 * @param {Record<string, unknown>|null|undefined} args
 * @returns {Record<string, unknown>}
 */
const normalizeToolArgsSexo = (args) => {
	if (!args || typeof args !== "object") {
		return args || {};
	}

	if (args.sexo === undefined || args.sexo === null || args.sexo === "") {
		return { ...args };
	}

	return {
		...args,
		sexo: normalizeSexoValue(args.sexo),
	};
};

module.exports = {
	normalizeSexoValue,
	normalizeToolArgsSexo,
};
