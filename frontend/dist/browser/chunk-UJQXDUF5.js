// src/app/modules/smart-batch/step-result-display.util.ts
var DEFAULT_MAX_DEPTH = 14;
var DEFAULT_MAX_ROWS = 500;
var DEFAULT_MAX_CELL_CHARS = 2e4;
var LABEL_JOINER = " \u203A ";
var BLOB_KEY_PATTERN = /base64|pdfbytes|pdfdata/i;
var humanizeApiSegment = (key) => {
  if (!key)
    return "";
  const withSpaces = key.replace(/_/g, " ").replace(/([a-z])([A-Z])/g, "$1 $2").replace(/([A-Z])([A-Z][a-z])/g, "$1 $2").trim();
  return withSpaces.replace(/^./, (c) => c.toUpperCase());
};
var joinPathLabel = (segments) => {
  const humanized = segments.map(humanizeApiSegment).filter(Boolean);
  const deduped = [];
  for (const h of humanized) {
    if (deduped.length > 0 && deduped[deduped.length - 1] === h)
      continue;
    deduped.push(h);
  }
  return deduped.join(LABEL_JOINER);
};
var stepDisplayLabelFromSegments = (segments) => joinPathLabel(segments);
var shouldOmitKey = (key) => {
  if (!key)
    return false;
  if (BLOB_KEY_PATTERN.test(key))
    return true;
  return false;
};
var truncateCell = (s, maxCellChars) => {
  if (s.length <= maxCellChars)
    return s;
  return s.slice(0, maxCellChars) + "\n\u2026";
};
var isCodeDescriptionObject = (v) => {
  if (!v || typeof v !== "object" || Array.isArray(v))
    return false;
  const o = v;
  const code = o.code ?? o.codigo ?? o.Code;
  const desc = o.description ?? o.descripcion ?? o.Description;
  return (typeof code === "string" || typeof code === "number") && typeof desc === "string";
};
var formatCodeDescriptionLine = (item) => {
  const code = item.code ?? item.codigo ?? item.Code;
  const desc = item.description ?? item.descripcion ?? item.Description;
  const c = code != null ? String(code) : "";
  const d = desc != null ? String(desc) : "";
  if (c && d)
    return `${c} \u2014 ${d}`;
  return c || d || "\u2014";
};
var flattenStepResultDisplay = (data, options = {}) => {
  const maxDepth = options.maxDepth ?? DEFAULT_MAX_DEPTH;
  const maxRows = options.maxRows ?? DEFAULT_MAX_ROWS;
  const maxCellChars = options.maxCellChars ?? DEFAULT_MAX_CELL_CHARS;
  const rows = [];
  const seenObjects = /* @__PURE__ */ new WeakSet();
  const flushTruncationRow = () => {
    if (rows.some((r) => r.label === "\u2026truncated"))
      return;
    rows.push({ label: "\u2026truncated", value: "Additional fields omitted" });
  };
  const walk = (value, segments, depth) => {
    if (rows.length >= maxRows) {
      flushTruncationRow();
      return;
    }
    if (value === null || value === void 0) {
      rows.push({ label: joinPathLabel(segments) || "Result", value: "\u2014" });
      return;
    }
    if (typeof value === "string" || typeof value === "number" || typeof value === "boolean") {
      rows.push({
        label: joinPathLabel(segments) || "Result",
        value: truncateCell(String(value), maxCellChars)
      });
      return;
    }
    if (typeof value === "bigint") {
      rows.push({
        label: joinPathLabel(segments) || "Result",
        value: truncateCell(String(value), maxCellChars)
      });
      return;
    }
    if (value instanceof Date) {
      rows.push({
        label: joinPathLabel(segments) || "Result",
        value: value.toISOString()
      });
      return;
    }
    if (typeof value !== "object") {
      rows.push({
        label: joinPathLabel(segments) || "Result",
        value: truncateCell(String(value), maxCellChars)
      });
      return;
    }
    if (seenObjects.has(value)) {
      rows.push({
        label: joinPathLabel(segments) || "Result",
        value: "[Circular]"
      });
      return;
    }
    seenObjects.add(value);
    if (depth > maxDepth) {
      rows.push({
        label: joinPathLabel(segments) || "Result",
        value: "[Max depth]"
      });
      seenObjects.delete(value);
      return;
    }
    if (Array.isArray(value)) {
      if (value.length === 0) {
        rows.push({
          label: joinPathLabel(segments) || "Result",
          value: "\u2014"
        });
        seenObjects.delete(value);
        return;
      }
      const allCodeDesc = value.every((el) => el && typeof el === "object" && !Array.isArray(el) && isCodeDescriptionObject(el));
      if (allCodeDesc) {
        value.forEach((el, i) => {
          if (rows.length >= maxRows) {
            flushTruncationRow();
            return;
          }
          const line = formatCodeDescriptionLine(el);
          const leafSeg = segments.length > 0 ? [...segments, String(i + 1)] : [String(i + 1)];
          rows.push({
            label: joinPathLabel(leafSeg),
            value: truncateCell(line, maxCellChars)
          });
        });
        seenObjects.delete(value);
        return;
      }
      const primitivesOnly = value.every((el) => el === null || el === void 0 || typeof el === "string" || typeof el === "number" || typeof el === "boolean" || typeof el === "bigint");
      if (primitivesOnly) {
        rows.push({
          label: joinPathLabel(segments) || "Result",
          value: truncateCell(value.map((v) => v == null ? "\u2014" : String(v)).join(", "), maxCellChars)
        });
        seenObjects.delete(value);
        return;
      }
      value.forEach((el, i) => {
        const nextSeg = [...segments, String(i + 1)];
        walk(el, nextSeg, depth + 1);
      });
      seenObjects.delete(value);
      return;
    }
    const allKeys = Object.keys(value);
    if (allKeys.length === 0) {
      rows.push({
        label: joinPathLabel(segments) || "Result",
        value: "\u2014"
      });
      seenObjects.delete(value);
      return;
    }
    for (const key of allKeys) {
      if (rows.length >= maxRows) {
        flushTruncationRow();
        break;
      }
      if (shouldOmitKey(key)) {
        rows.push({
          label: joinPathLabel([...segments, key]),
          value: "[omitted]"
        });
        continue;
      }
      const raw = value[key];
      walk(raw, [...segments, key], depth + 1);
    }
    seenObjects.delete(value);
  };
  walk(data, [], 0);
  return rows;
};
var FIXED_INPUT_LABELS = ["Document Number", "Document Type"];
var truncatedSortKey = (label) => label === "\u2026truncated" || label.startsWith("\u2026");
var topLevelSegment = (label) => {
  const sep = " \u203A ";
  const i = label.indexOf(sep);
  return i === -1 ? label : label.slice(0, i);
};
var sortStepExportFieldLabels = (labels) => {
  const uniq = [...new Set(labels)];
  const fixedAvailable = FIXED_INPUT_LABELS.filter((f) => uniq.includes(f));
  const rest = uniq.filter((l) => !FIXED_INPUT_LABELS.includes(l));
  const bucket = (label) => {
    if (truncatedSortKey(label))
      return 9999;
    const t = topLevelSegment(label).toLowerCase();
    if (t.startsWith("commercial registry"))
      return 10;
    if (t.startsWith("establishment owner"))
      return 20;
    if (t.startsWith("economic activities"))
      return 30;
    return 100;
  };
  rest.sort((a, b) => {
    const ba = bucket(a);
    const bb = bucket(b);
    if (ba !== bb)
      return ba - bb;
    const ta = topLevelSegment(a).toLocaleLowerCase();
    const tb = topLevelSegment(b).toLocaleLowerCase();
    if (ta !== tb)
      return ta.localeCompare(tb);
    return a.localeCompare(b, void 0, { numeric: true });
  });
  return [...fixedAvailable, ...rest];
};

// src/app/modules/smart-batch/colombia-vehicle-report/colombia-vehicle-report.utils.ts
var formatCop = (value) => {
  if (value == null || value === "")
    return "\u2014";
  const n = typeof value === "number" ? value : Number(String(value).replace(/[^\d.-]/g, ""));
  if (Number.isNaN(n))
    return String(value);
  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    maximumFractionDigits: 0
  }).format(n);
};
var formatYesNo = (value) => {
  if (value == null || value === "")
    return "\u2014";
  if (typeof value === "boolean")
    return value ? "S\xED" : "No";
  const s = String(value).trim().toUpperCase();
  if (s === "SI" || s === "S\xCD" || s === "YES" || s === "TRUE")
    return "S\xED";
  if (s === "NO" || s === "FALSE")
    return "No";
  return String(value);
};
var pickVigenteSoat = (items) => {
  if (!items?.length)
    return void 0;
  return items.find((s) => String(s.estado ?? "").toUpperCase() === "VIGENTE") ?? items[0];
};
var pickVigenteRtm = (items) => {
  if (!items?.length)
    return void 0;
  return items.find((r) => String(r.vigente ?? "").toUpperCase() === "SI");
};
var pickLatestRtm = (items) => {
  if (!items?.length)
    return void 0;
  const parse = (raw) => {
    const s = String(raw ?? "");
    const m = s.match(/(\d{2})\/(\d{2})\/(\d{4})/);
    if (!m)
      return 0;
    return new Date(Number(m[3]), Number(m[2]) - 1, Number(m[1])).getTime();
  };
  return [...items].sort((a, b) => parse(b.fechaExpedicion) - parse(a.fechaExpedicion))[0];
};
var pickRtmForReport = (items) => {
  const vigente = pickVigenteRtm(items);
  if (vigente) {
    return { row: vigente, isVigente: true };
  }
  const latest = pickLatestRtm(items);
  if (latest) {
    return { row: latest, isVigente: false };
  }
  return void 0;
};
var getSimitAgreementsList = (data) => {
  if (!data || typeof data !== "object" || Array.isArray(data))
    return [];
  const o = data;
  const list = o.acuerdosPago ?? o.acuerdosPagos;
  return Array.isArray(list) ? list : [];
};
var isBenignNoRecord = (data) => {
  if (!data || typeof data !== "object" || Array.isArray(data))
    return false;
  return data.smartBatchInterpretation === "no_record";
};
var colombiaVehicleStepErrorKey = (error) => {
  const message = error?.message?.trim() ?? "";
  const code = error?.code?.trim() ?? "";
  if (message === "current_owners_dont_match")
    return message;
  if (code === "InternalServerError")
    return code;
  if (message && !/^Request failed with status code/i.test(message))
    return message;
  return code || message;
};
var humanizeColombiaVehicleError = (message) => {
  if (!message?.trim())
    return "\u2014";
  const code = message.trim();
  if (code === "current_owners_dont_match") {
    return "The queried document does not match the registered owner for this plate in RUNT.";
  }
  if (code === "NotFound" || code === "404") {
    return "No record found for the supplied parameters.";
  }
  if (code === "InternalServerError") {
    return "The valuation service returned a temporary error. Retry later.";
  }
  if (/record not found/i.test(code)) {
    return "No record found for the supplied parameters.";
  }
  return code;
};
var filterValueModelByYear = (valueModel, year, window = 1) => {
  if (!Array.isArray(valueModel))
    return [];
  const y = Number(year);
  if (Number.isNaN(y))
    return valueModel;
  return valueModel.filter((row6) => {
    const m = Number(row6.modelo);
    return !Number.isNaN(m) && m >= y - window && m <= y + window;
  });
};
var formatInfractorLine = (infractor) => {
  if (!infractor || typeof infractor !== "object" || Array.isArray(infractor))
    return "\u2014";
  const i = infractor;
  const parts = [i.nombre, i.apellido, i.tipoDocumento, i.numeroDocumento].filter((p) => p != null && String(p).trim() !== "").map((p) => String(p).trim());
  return parts.length > 0 ? parts.join(" \xB7 ") : "\u2014";
};

// src/app/modules/smart-batch/step-result-presenters/presenters/colombia-fasecolda-sinister.ts
var row = (label, value) => ({
  label,
  value: value == null || value === "" ? "\u2014" : String(value)
});
var presentColombiaFasecoldaSinister = (data) => {
  if (!data || typeof data !== "object" || Array.isArray(data))
    return null;
  const o = data;
  const claims = o.sinister ?? o.siniestros ?? o.claims;
  if (isBenignNoRecord(data)) {
    return [row("Historial de siniestros", "Sin historial registrado")];
  }
  if (!Array.isArray(claims) || claims.length === 0) {
    return [
      row("Placa", o.plate),
      row("Historial de siniestros", "Sin siniestros registrados")
    ];
  }
  const rows = [row("Placa", o.plate), row("Total siniestros", claims.length)];
  claims.forEach((claim, i) => {
    const c = claim ?? {};
    rows.push({
      label: stepDisplayLabelFromSegments(["Siniestro", String(i + 1)]),
      value: [
        c.accidentDate ?? c.fechaAccidente ?? c.fecha,
        c.protection ?? c.proteccion ?? c.tipo,
        c.id
      ].filter((p) => p != null && String(p).trim() !== "").join(" \xB7 ")
    });
  });
  return rows;
};
var extractColombiaFasecoldaSinisterTables = (data) => {
  if (!data || typeof data !== "object" || Array.isArray(data))
    return [];
  if (isBenignNoRecord(data))
    return [];
  const claims = data.sinister;
  if (!Array.isArray(claims) || claims.length === 0)
    return [];
  return [
    {
      id: "fasecolda-claims",
      title: "Historial de siniestros",
      columns: [
        { key: "id", label: "ID" },
        { key: "fecha", label: "Fecha accidente" },
        { key: "proteccion", label: "Protecci\xF3n" }
      ],
      rows: claims.map((claim) => {
        const c = claim ?? {};
        return {
          id: String(c.id ?? "\u2014"),
          fecha: String(c.accidentDate ?? c.fechaAccidente ?? "\u2014"),
          proteccion: String(c.protection ?? c.proteccion ?? "\u2014")
        };
      })
    }
  ];
};

// src/app/modules/smart-batch/step-result-presenters/presenters/colombia-fasecolda-values.ts
var row2 = (label, value) => ({
  label,
  value: value == null || value === "" ? "\u2014" : String(value)
});
var presentColombiaFasecoldaValues = (data) => {
  if (!data || typeof data !== "object" || Array.isArray(data))
    return null;
  const o = data;
  const rows = [
    row2("Placa", o.plate),
    row2("Marca", o.marke ?? o.marca),
    row2("A\xF1o", o.year),
    row2("C\xF3digo Fasecolda", o.code),
    row2("Clase", o.class),
    row2("Tipolog\xEDa", o.typology),
    row2("Combustible", o.fuel),
    row2("Servicio", o.service),
    row2("L\xEDnea 1", o.line1),
    row2("L\xEDnea 2", o.line2),
    row2("L\xEDnea 3", o.line3),
    row2("BCPP", formatCop(o.bcpp)),
    row2("Transmisi\xF3n", o.transmission),
    row2("Frenos", o.brakes)
  ];
  const filtered = filterValueModelByYear(o.valueModel, o.year);
  if (filtered.length === 0) {
    rows.push(row2("Valores por modelo", "\u2014"));
    return rows;
  }
  filtered.forEach((vm, i) => {
    const v = vm;
    rows.push({
      label: stepDisplayLabelFromSegments(["Valor", String(i + 1)]),
      value: `${v.estado} ${v.modelo}: ${formatCop(v.valor)}`
    });
  });
  return rows;
};
var extractColombiaFasecoldaValuesTables = (data) => {
  if (!data || typeof data !== "object" || Array.isArray(data))
    return [];
  const o = data;
  const filtered = filterValueModelByYear(o.valueModel, o.year);
  if (filtered.length === 0)
    return [];
  return [
    {
      id: "fasecolda-valuation",
      title: "Valores Fasecolda",
      columns: [
        { key: "modelo", label: "Modelo" },
        { key: "estado", label: "Estado" },
        { key: "valor", label: "Valor" }
      ],
      rows: filtered.map((vm) => {
        const v = vm;
        return {
          modelo: String(v.modelo ?? "\u2014"),
          estado: String(v.estado ?? "\u2014"),
          valor: formatCop(v.valor)
        };
      })
    }
  ];
};

// src/app/modules/smart-batch/step-result-presenters/presenters/colombia-runt-vehicle-by-plate.ts
var row3 = (label, value) => ({
  label,
  value: value == null || value === "" ? "\u2014" : String(value)
});
var buildLiensTable = (items) => {
  if (!Array.isArray(items) || items.length === 0)
    return void 0;
  return {
    id: "runt-liens",
    title: "Garant\xEDas a favor de",
    columns: [
      { key: "acreedor", label: "Acreedor" },
      { key: "numeroDocumentoAcreedor", label: "Documento" },
      { key: "fechaInscripcion", label: "Fecha inscripci\xF3n" }
    ],
    rows: items.map((item) => {
      const g = item ?? {};
      return {
        acreedor: String(g.acreedor ?? "\u2014"),
        numeroDocumentoAcreedor: String(g.numeroDocumentoAcreedor ?? "\u2014"),
        fechaInscripcion: String(g.fechaInscripcion ?? "\u2014")
      };
    })
  };
};
var buildProceduresTable = (items) => {
  if (!Array.isArray(items) || items.length === 0)
    return void 0;
  return {
    id: "runt-procedures",
    title: "Solicitudes",
    columns: [
      { key: "fechaSolicitud", label: "Fecha" },
      { key: "estado", label: "Estado" },
      { key: "tramitesRealizados", label: "Tr\xE1mites" },
      { key: "entidad", label: "Entidad" }
    ],
    rows: items.map((item) => {
      const s = item ?? {};
      return {
        fechaSolicitud: String(s.fechaSolicitud ?? "\u2014"),
        estado: String(s.estado ?? "\u2014"),
        tramitesRealizados: String(s.tramitesRealizados ?? "\u2014"),
        entidad: String(s.entidad ?? "\u2014")
      };
    })
  };
};
var buildSoatTable = (items) => {
  if (!Array.isArray(items) || items.length === 0)
    return void 0;
  return {
    id: "runt-soat",
    title: "Historial SOAT",
    columns: [
      { key: "noPoliza", label: "P\xF3liza" },
      { key: "estado", label: "Estado" },
      { key: "fechaVigencia", label: "Vigencia desde" },
      { key: "fechaVencimiento", label: "Vence" },
      { key: "entidadExpideSoat", label: "Aseguradora" }
    ],
    rows: items.map((item) => {
      const policy = item ?? {};
      return {
        noPoliza: String(policy.noPoliza ?? "\u2014"),
        estado: String(policy.estado ?? "\u2014"),
        fechaVigencia: String(policy.fechaVigencia ?? "\u2014"),
        fechaVencimiento: String(policy.fechaVencimiento ?? "\u2014"),
        entidadExpideSoat: String(policy.entidadExpideSoat ?? "\u2014")
      };
    })
  };
};
var buildRtmTable = (items) => {
  if (!Array.isArray(items) || items.length === 0)
    return void 0;
  return {
    id: "runt-rtm",
    title: "Historial RTM",
    columns: [
      { key: "nroCertificado", label: "Certificado" },
      { key: "estado", label: "Estado" },
      { key: "vigente", label: "Vigente" },
      { key: "fechaExpedicion", label: "Expedida" },
      { key: "fechaVencimiento", label: "Vence" },
      { key: "cdaExpide", label: "CDA" }
    ],
    rows: items.map((item) => {
      const certificate = item ?? {};
      return {
        nroCertificado: String(certificate.nroCertificado ?? "\u2014"),
        estado: String(certificate.estado ?? "\u2014"),
        vigente: formatYesNo(certificate.vigente),
        fechaExpedicion: String(certificate.fechaExpedicion ?? "\u2014"),
        fechaVencimiento: String(certificate.fechaVencimiento ?? "\u2014"),
        cdaExpide: String(certificate.cdaExpide ?? "\u2014")
      };
    })
  };
};
var presentColombiaRuntVehicleByPlate = (data) => {
  if (!data || typeof data !== "object" || Array.isArray(data))
    return null;
  const o = data;
  const info = o.informacionGeneral ?? {};
  const blindaje = o.informacionBlindaje ?? {};
  const soat = pickVigenteSoat(o.soat);
  const rtmPick = pickRtmForReport(o.tecnoMecanica);
  const rtm = rtmPick?.row;
  const rows = [
    row3("Placa", info.noPlaca ?? o.plate),
    row3("VIN", o.vin ?? info.noVin),
    row3("Marca", info.marca),
    row3("Modelo", info.modelo),
    row3("L\xEDnea", info.linea),
    row3("Color", info.color),
    row3("Clase", info.claseVehiculo),
    row3("Carrocer\xEDa", info.tipoCarroceria),
    row3("Combustible", info.tipoCombustible),
    row3("Servicio", info.tipoServicio),
    row3("Estado veh\xEDculo", info.estadoDelVehiculo),
    row3("Organismo tr\xE1nsito", info.organismoTransito),
    row3("Motor", info.noMotor),
    row3("Chasis", info.noChasis),
    row3("Fecha matr\xEDcula", info.fechaMatricula),
    row3("Prendas", info.prendas),
    row3("Grav\xE1menes", formatYesNo(info.tieneGravamenes)),
    row3("Blindado", formatYesNo(blindaje.blindado)),
    row3("Validaci\xF3n DIAN", info.validacionDIAN)
  ];
  if (soat) {
    rows.push(row3("SOAT \u2014 P\xF3liza", soat.noPoliza), row3("SOAT \u2014 Estado", soat.estado), row3("SOAT \u2014 Vigencia", soat.fechaVigencia), row3("SOAT \u2014 Vencimiento", soat.fechaVencimiento), row3("SOAT \u2014 Aseguradora", soat.entidadExpideSoat));
  }
  if (rtm) {
    rows.push(row3("RTM \u2014 Certificado", rtm.nroCertificado), row3("RTM \u2014 Estado", rtm.estado), row3("RTM \u2014 Vigente", rtmPick?.isVigente ? "S\xED" : "No (vencida o \xFAltima registrada)"), row3("RTM \u2014 Vencimiento", rtm.fechaVencimiento), row3("RTM \u2014 CDA", rtm.cdaExpide));
  }
  const liens = buildLiensTable(o.garantiasFavorDe);
  if (liens?.rows.length) {
    liens.rows.forEach((line, i) => {
      rows.push({
        label: stepDisplayLabelFromSegments(["Garant\xEDas", String(i + 1)]),
        value: `${line.acreedor} \xB7 ${line.numeroDocumentoAcreedor} \xB7 ${line.fechaInscripcion}`
      });
    });
  }
  const procedures = buildProceduresTable(o.solicitudes);
  if (procedures?.rows.length) {
    procedures.rows.forEach((line, i) => {
      rows.push({
        label: stepDisplayLabelFromSegments(["Solicitudes", String(i + 1)]),
        value: `${line.fechaSolicitud} \xB7 ${line.estado} \xB7 ${line.tramitesRealizados}`
      });
    });
  }
  return rows;
};
var extractColombiaRuntTables = (data) => {
  if (!data || typeof data !== "object" || Array.isArray(data))
    return [];
  const o = data;
  return [
    buildSoatTable(o.soat),
    buildRtmTable(o.tecnoMecanica),
    buildLiensTable(o.garantiasFavorDe),
    buildProceduresTable(o.solicitudes)
  ].filter((t) => !!t);
};

// src/app/modules/smart-batch/step-result-presenters/presenters/colombia-simit-agreements.ts
var row4 = (label, value) => ({
  label,
  value: value == null || value === "" ? "\u2014" : String(value)
});
var presentColombiaSimitAgreements = (data) => {
  if (!data || typeof data !== "object" || Array.isArray(data))
    return null;
  const o = data;
  const rows = [
    row4("Documento", o.documentNumber),
    row4("Tipo documento", o.documentType),
    row4("Total acuerdos", o.totalAp ?? o.cantAcuerdosPagar),
    row4("Total general", formatCop(o.totalGeneral))
  ];
  const acuerdos = getSimitAgreementsList(o);
  if (acuerdos.length === 0) {
    rows.push(row4("Acuerdos de pago", "Sin acuerdos registrados"));
    return rows;
  }
  acuerdos.forEach((item, i) => {
    const a = item ?? {};
    rows.push({
      label: stepDisplayLabelFromSegments(["Acuerdo", String(i + 1)]),
      value: [
        a.numeroResolucion,
        a.organismoTransito,
        formatCop(a.valorPagar ?? a.valor)
      ].filter((p) => p != null && String(p).trim() !== "").join(" \xB7 ")
    });
  });
  return rows;
};
var extractColombiaSimitAgreementsTables = (data) => {
  const acuerdos = getSimitAgreementsList(data);
  if (acuerdos.length === 0)
    return [];
  return [
    {
      id: "simit-agreements",
      title: "Acuerdos de pago SIMIT",
      columns: [
        { key: "resolucion", label: "Resoluci\xF3n" },
        { key: "organismo", label: "Organismo" },
        { key: "valor", label: "Valor" }
      ],
      rows: acuerdos.map((item) => {
        const a = item ?? {};
        return {
          resolucion: String(a.numeroResolucion ?? "\u2014"),
          organismo: String(a.organismoTransito ?? "\u2014"),
          valor: formatCop(a.valorPagar ?? a.valor)
        };
      })
    }
  ];
};

// src/app/modules/smart-batch/step-result-presenters/presenters/colombia-simit-plate.ts
var row5 = (label, value) => ({
  label,
  value: value == null || value === "" ? "\u2014" : String(value)
});
var presentColombiaSimitPlate = (data) => {
  if (!data || typeof data !== "object" || Array.isArray(data))
    return null;
  const o = data;
  const rows = [
    row5("Placa", o.plate),
    row5("Total general", formatCop(o.totalGeneral)),
    row5("Multas a pagar", o.totalMultasPagar),
    row5("Paz y salvo", formatYesNo(o.pazSalvo)),
    row5("Suspendida", formatYesNo(o.suspendida)),
    row5("Cancelada", formatYesNo(o.cancelada))
  ];
  const totalMultasConsulta = o.totalMultasPagar ?? o.cantMultasPagar;
  if (totalMultasConsulta != null && String(totalMultasConsulta) !== "0") {
    rows.push(row5("Multas en consulta", totalMultasConsulta));
  }
  const multas = o.multas;
  if (!Array.isArray(multas) || multas.length === 0) {
    rows.push(row5("Multas", "Sin multas registradas"));
    if (o.pazSalvo === false) {
      rows.push(row5("Nota", "Sin multas en consulta por placa; paz y salvo no confirmado en esta consulta"));
    }
    return rows;
  }
  multas.forEach((multa, index) => {
    const m = multa ?? {};
    const prefix = `Multa ${index + 1}`;
    rows.push(row5(`${prefix} \u2014 Resoluci\xF3n`, m.numeroResolucion), row5(`${prefix} \u2014 Organismo`, m.organismoTransito), row5(`${prefix} \u2014 Fecha comparendo`, m.fechaComparendo), row5(`${prefix} \u2014 Estado cartera`, m.estadoCartera), row5(`${prefix} \u2014 Valor a pagar`, formatCop(m.valorPagar ?? m.valor)), row5(`${prefix} \u2014 Infractor`, formatInfractorLine(m.infractor)));
    const infracciones = m.infracciones;
    if (Array.isArray(infracciones)) {
      infracciones.forEach((inf, j) => {
        const item = inf ?? {};
        const code = item.codigoInfraccion ?? "";
        const desc = item.descripcionInfraccion ?? "";
        rows.push({
          label: stepDisplayLabelFromSegments([prefix, "Infracci\xF3n", String(j + 1)]),
          value: `${code} \u2014 ${desc} (${formatCop(item.valorInfraccion)})`
        });
      });
    }
  });
  return rows;
};
var extractColombiaSimitPlateTables = (data) => {
  if (!data || typeof data !== "object" || Array.isArray(data))
    return [];
  const multas = data.multas;
  if (!Array.isArray(multas) || multas.length === 0)
    return [];
  return [
    {
      id: "simit-fines",
      title: "Multas SIMIT",
      columns: [
        { key: "resolucion", label: "Resoluci\xF3n" },
        { key: "organismo", label: "Organismo" },
        { key: "fecha", label: "Fecha" },
        { key: "valorPagar", label: "Valor a pagar" },
        { key: "estado", label: "Estado" }
      ],
      rows: multas.map((multa) => {
        const m = multa ?? {};
        return {
          resolucion: String(m.numeroResolucion ?? "\u2014"),
          organismo: String(m.organismoTransito ?? "\u2014"),
          fecha: String(m.fechaComparendo ?? m.fechaResolucion ?? "\u2014"),
          valorPagar: formatCop(m.valorPagar ?? m.valor),
          estado: String(m.estadoCartera ?? "\u2014")
        };
      })
    }
  ];
};

export {
  stepDisplayLabelFromSegments,
  flattenStepResultDisplay,
  sortStepExportFieldLabels,
  formatCop,
  formatYesNo,
  pickVigenteSoat,
  pickRtmForReport,
  getSimitAgreementsList,
  isBenignNoRecord,
  colombiaVehicleStepErrorKey,
  humanizeColombiaVehicleError,
  presentColombiaFasecoldaSinister,
  extractColombiaFasecoldaSinisterTables,
  presentColombiaFasecoldaValues,
  extractColombiaFasecoldaValuesTables,
  presentColombiaRuntVehicleByPlate,
  extractColombiaRuntTables,
  presentColombiaSimitAgreements,
  extractColombiaSimitAgreementsTables,
  presentColombiaSimitPlate,
  extractColombiaSimitPlateTables
};
//# sourceMappingURL=chunk-UJQXDUF5.js.map
