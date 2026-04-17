import {
  AuthModalComponent
} from "./chunk-3W2P7LZN.js";
import "./chunk-GFJLSNKF.js";
import "./chunk-E7LVUBZB.js";
import {
  MatRadioButton,
  MatRadioGroup,
  MatRadioModule
} from "./chunk-LTXJQKAS.js";
import "./chunk-ZWSCRV34.js";
import "./chunk-LPSMXQSY.js";
import "./chunk-B4CPLDBC.js";
import "./chunk-MJXNRHWH.js";
import "./chunk-346ISJSG.js";
import "./chunk-HZKTYM3F.js";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-EL6Z63TT.js";
import {
  AgentWalletService
} from "./chunk-LH4KI4FV.js";
import "./chunk-H3UX3NVF.js";
import {
  MatTooltip,
  MatTooltipModule
} from "./chunk-6KHU2J3U.js";
import "./chunk-WDYBDDAV.js";
import "./chunk-OVR3OJIF.js";
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogModule,
  MatDialogRef
} from "./chunk-KCV7S453.js";
import "./chunk-Y5VEUI6L.js";
import "./chunk-LHOHCIQM.js";
import "./chunk-AY2HQ4EH.js";
import "./chunk-SYP4RNRN.js";
import "./chunk-3YVZWUPK.js";
import "./chunk-L4JZMXIC.js";
import "./chunk-2W5F3UIW.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-TX3AVWPC.js";
import "./chunk-OIBNGD5S.js";
import {
  TranslocoModule,
  TranslocoPipe
} from "./chunk-VHMFS3U6.js";
import "./chunk-R4RYJRMO.js";
import {
  environment
} from "./chunk-32YYYLAD.js";
import {
  MatIcon,
  MatIconModule
} from "./chunk-SE37W2G4.js";
import {
  CommonModule,
  Component,
  DatePipe,
  DecimalPipe,
  DomSanitizer,
  HttpClient,
  Inject,
  Input,
  JsonPipe,
  MatButton,
  MatButtonModule,
  MatIconButton,
  NgIf,
  Pipe,
  SlicePipe,
  ViewChild,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdefinePipe,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵpipeBind3,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-YTOBX75K.js";
import {
  __async,
  __commonJS,
  __spreadProps,
  __spreadValues,
  __toESM
} from "./chunk-KTESVR3Q.js";

// node_modules/qrcode/lib/can-promise.js
var require_can_promise = __commonJS({
  "node_modules/qrcode/lib/can-promise.js"(exports, module) {
    module.exports = function() {
      return typeof Promise === "function" && Promise.prototype && Promise.prototype.then;
    };
  }
});

// node_modules/qrcode/lib/core/utils.js
var require_utils = __commonJS({
  "node_modules/qrcode/lib/core/utils.js"(exports) {
    var toSJISFunction;
    var CODEWORDS_COUNT = [
      0,
      // Not used
      26,
      44,
      70,
      100,
      134,
      172,
      196,
      242,
      292,
      346,
      404,
      466,
      532,
      581,
      655,
      733,
      815,
      901,
      991,
      1085,
      1156,
      1258,
      1364,
      1474,
      1588,
      1706,
      1828,
      1921,
      2051,
      2185,
      2323,
      2465,
      2611,
      2761,
      2876,
      3034,
      3196,
      3362,
      3532,
      3706
    ];
    exports.getSymbolSize = function getSymbolSize(version) {
      if (!version) throw new Error('"version" cannot be null or undefined');
      if (version < 1 || version > 40) throw new Error('"version" should be in range from 1 to 40');
      return version * 4 + 17;
    };
    exports.getSymbolTotalCodewords = function getSymbolTotalCodewords(version) {
      return CODEWORDS_COUNT[version];
    };
    exports.getBCHDigit = function(data) {
      let digit = 0;
      while (data !== 0) {
        digit++;
        data >>>= 1;
      }
      return digit;
    };
    exports.setToSJISFunction = function setToSJISFunction(f) {
      if (typeof f !== "function") {
        throw new Error('"toSJISFunc" is not a valid function.');
      }
      toSJISFunction = f;
    };
    exports.isKanjiModeEnabled = function() {
      return typeof toSJISFunction !== "undefined";
    };
    exports.toSJIS = function toSJIS(kanji) {
      return toSJISFunction(kanji);
    };
  }
});

// node_modules/qrcode/lib/core/error-correction-level.js
var require_error_correction_level = __commonJS({
  "node_modules/qrcode/lib/core/error-correction-level.js"(exports) {
    exports.L = {
      bit: 1
    };
    exports.M = {
      bit: 0
    };
    exports.Q = {
      bit: 3
    };
    exports.H = {
      bit: 2
    };
    function fromString(string) {
      if (typeof string !== "string") {
        throw new Error("Param is not a string");
      }
      const lcStr = string.toLowerCase();
      switch (lcStr) {
        case "l":
        case "low":
          return exports.L;
        case "m":
        case "medium":
          return exports.M;
        case "q":
        case "quartile":
          return exports.Q;
        case "h":
        case "high":
          return exports.H;
        default:
          throw new Error("Unknown EC Level: " + string);
      }
    }
    exports.isValid = function isValid(level) {
      return level && typeof level.bit !== "undefined" && level.bit >= 0 && level.bit < 4;
    };
    exports.from = function from(value, defaultValue) {
      if (exports.isValid(value)) {
        return value;
      }
      try {
        return fromString(value);
      } catch (e) {
        return defaultValue;
      }
    };
  }
});

// node_modules/qrcode/lib/core/bit-buffer.js
var require_bit_buffer = __commonJS({
  "node_modules/qrcode/lib/core/bit-buffer.js"(exports, module) {
    function BitBuffer() {
      this.buffer = [];
      this.length = 0;
    }
    BitBuffer.prototype = {
      get: function(index) {
        const bufIndex = Math.floor(index / 8);
        return (this.buffer[bufIndex] >>> 7 - index % 8 & 1) === 1;
      },
      put: function(num, length) {
        for (let i = 0; i < length; i++) {
          this.putBit((num >>> length - i - 1 & 1) === 1);
        }
      },
      getLengthInBits: function() {
        return this.length;
      },
      putBit: function(bit) {
        const bufIndex = Math.floor(this.length / 8);
        if (this.buffer.length <= bufIndex) {
          this.buffer.push(0);
        }
        if (bit) {
          this.buffer[bufIndex] |= 128 >>> this.length % 8;
        }
        this.length++;
      }
    };
    module.exports = BitBuffer;
  }
});

// node_modules/qrcode/lib/core/bit-matrix.js
var require_bit_matrix = __commonJS({
  "node_modules/qrcode/lib/core/bit-matrix.js"(exports, module) {
    function BitMatrix(size) {
      if (!size || size < 1) {
        throw new Error("BitMatrix size must be defined and greater than 0");
      }
      this.size = size;
      this.data = new Uint8Array(size * size);
      this.reservedBit = new Uint8Array(size * size);
    }
    BitMatrix.prototype.set = function(row, col, value, reserved) {
      const index = row * this.size + col;
      this.data[index] = value;
      if (reserved) this.reservedBit[index] = true;
    };
    BitMatrix.prototype.get = function(row, col) {
      return this.data[row * this.size + col];
    };
    BitMatrix.prototype.xor = function(row, col, value) {
      this.data[row * this.size + col] ^= value;
    };
    BitMatrix.prototype.isReserved = function(row, col) {
      return this.reservedBit[row * this.size + col];
    };
    module.exports = BitMatrix;
  }
});

// node_modules/qrcode/lib/core/alignment-pattern.js
var require_alignment_pattern = __commonJS({
  "node_modules/qrcode/lib/core/alignment-pattern.js"(exports) {
    var getSymbolSize = require_utils().getSymbolSize;
    exports.getRowColCoords = function getRowColCoords(version) {
      if (version === 1) return [];
      const posCount = Math.floor(version / 7) + 2;
      const size = getSymbolSize(version);
      const intervals = size === 145 ? 26 : Math.ceil((size - 13) / (2 * posCount - 2)) * 2;
      const positions = [size - 7];
      for (let i = 1; i < posCount - 1; i++) {
        positions[i] = positions[i - 1] - intervals;
      }
      positions.push(6);
      return positions.reverse();
    };
    exports.getPositions = function getPositions(version) {
      const coords = [];
      const pos = exports.getRowColCoords(version);
      const posLength = pos.length;
      for (let i = 0; i < posLength; i++) {
        for (let j2 = 0; j2 < posLength; j2++) {
          if (i === 0 && j2 === 0 || // top-left
          i === 0 && j2 === posLength - 1 || // bottom-left
          i === posLength - 1 && j2 === 0) {
            continue;
          }
          coords.push([pos[i], pos[j2]]);
        }
      }
      return coords;
    };
  }
});

// node_modules/qrcode/lib/core/finder-pattern.js
var require_finder_pattern = __commonJS({
  "node_modules/qrcode/lib/core/finder-pattern.js"(exports) {
    var getSymbolSize = require_utils().getSymbolSize;
    var FINDER_PATTERN_SIZE = 7;
    exports.getPositions = function getPositions(version) {
      const size = getSymbolSize(version);
      return [
        // top-left
        [0, 0],
        // top-right
        [size - FINDER_PATTERN_SIZE, 0],
        // bottom-left
        [0, size - FINDER_PATTERN_SIZE]
      ];
    };
  }
});

// node_modules/qrcode/lib/core/mask-pattern.js
var require_mask_pattern = __commonJS({
  "node_modules/qrcode/lib/core/mask-pattern.js"(exports) {
    exports.Patterns = {
      PATTERN000: 0,
      PATTERN001: 1,
      PATTERN010: 2,
      PATTERN011: 3,
      PATTERN100: 4,
      PATTERN101: 5,
      PATTERN110: 6,
      PATTERN111: 7
    };
    var PenaltyScores = {
      N1: 3,
      N2: 3,
      N3: 40,
      N4: 10
    };
    exports.isValid = function isValid(mask) {
      return mask != null && mask !== "" && !isNaN(mask) && mask >= 0 && mask <= 7;
    };
    exports.from = function from(value) {
      return exports.isValid(value) ? parseInt(value, 10) : void 0;
    };
    exports.getPenaltyN1 = function getPenaltyN1(data) {
      const size = data.size;
      let points = 0;
      let sameCountCol = 0;
      let sameCountRow = 0;
      let lastCol = null;
      let lastRow = null;
      for (let row = 0; row < size; row++) {
        sameCountCol = sameCountRow = 0;
        lastCol = lastRow = null;
        for (let col = 0; col < size; col++) {
          let module2 = data.get(row, col);
          if (module2 === lastCol) {
            sameCountCol++;
          } else {
            if (sameCountCol >= 5) points += PenaltyScores.N1 + (sameCountCol - 5);
            lastCol = module2;
            sameCountCol = 1;
          }
          module2 = data.get(col, row);
          if (module2 === lastRow) {
            sameCountRow++;
          } else {
            if (sameCountRow >= 5) points += PenaltyScores.N1 + (sameCountRow - 5);
            lastRow = module2;
            sameCountRow = 1;
          }
        }
        if (sameCountCol >= 5) points += PenaltyScores.N1 + (sameCountCol - 5);
        if (sameCountRow >= 5) points += PenaltyScores.N1 + (sameCountRow - 5);
      }
      return points;
    };
    exports.getPenaltyN2 = function getPenaltyN2(data) {
      const size = data.size;
      let points = 0;
      for (let row = 0; row < size - 1; row++) {
        for (let col = 0; col < size - 1; col++) {
          const last = data.get(row, col) + data.get(row, col + 1) + data.get(row + 1, col) + data.get(row + 1, col + 1);
          if (last === 4 || last === 0) points++;
        }
      }
      return points * PenaltyScores.N2;
    };
    exports.getPenaltyN3 = function getPenaltyN3(data) {
      const size = data.size;
      let points = 0;
      let bitsCol = 0;
      let bitsRow = 0;
      for (let row = 0; row < size; row++) {
        bitsCol = bitsRow = 0;
        for (let col = 0; col < size; col++) {
          bitsCol = bitsCol << 1 & 2047 | data.get(row, col);
          if (col >= 10 && (bitsCol === 1488 || bitsCol === 93)) points++;
          bitsRow = bitsRow << 1 & 2047 | data.get(col, row);
          if (col >= 10 && (bitsRow === 1488 || bitsRow === 93)) points++;
        }
      }
      return points * PenaltyScores.N3;
    };
    exports.getPenaltyN4 = function getPenaltyN4(data) {
      let darkCount = 0;
      const modulesCount = data.data.length;
      for (let i = 0; i < modulesCount; i++) darkCount += data.data[i];
      const k2 = Math.abs(Math.ceil(darkCount * 100 / modulesCount / 5) - 10);
      return k2 * PenaltyScores.N4;
    };
    function getMaskAt(maskPattern, i, j2) {
      switch (maskPattern) {
        case exports.Patterns.PATTERN000:
          return (i + j2) % 2 === 0;
        case exports.Patterns.PATTERN001:
          return i % 2 === 0;
        case exports.Patterns.PATTERN010:
          return j2 % 3 === 0;
        case exports.Patterns.PATTERN011:
          return (i + j2) % 3 === 0;
        case exports.Patterns.PATTERN100:
          return (Math.floor(i / 2) + Math.floor(j2 / 3)) % 2 === 0;
        case exports.Patterns.PATTERN101:
          return i * j2 % 2 + i * j2 % 3 === 0;
        case exports.Patterns.PATTERN110:
          return (i * j2 % 2 + i * j2 % 3) % 2 === 0;
        case exports.Patterns.PATTERN111:
          return (i * j2 % 3 + (i + j2) % 2) % 2 === 0;
        default:
          throw new Error("bad maskPattern:" + maskPattern);
      }
    }
    exports.applyMask = function applyMask(pattern, data) {
      const size = data.size;
      for (let col = 0; col < size; col++) {
        for (let row = 0; row < size; row++) {
          if (data.isReserved(row, col)) continue;
          data.xor(row, col, getMaskAt(pattern, row, col));
        }
      }
    };
    exports.getBestMask = function getBestMask(data, setupFormatFunc) {
      const numPatterns = Object.keys(exports.Patterns).length;
      let bestPattern = 0;
      let lowerPenalty = Infinity;
      for (let p = 0; p < numPatterns; p++) {
        setupFormatFunc(p);
        exports.applyMask(p, data);
        const penalty = exports.getPenaltyN1(data) + exports.getPenaltyN2(data) + exports.getPenaltyN3(data) + exports.getPenaltyN4(data);
        exports.applyMask(p, data);
        if (penalty < lowerPenalty) {
          lowerPenalty = penalty;
          bestPattern = p;
        }
      }
      return bestPattern;
    };
  }
});

// node_modules/qrcode/lib/core/error-correction-code.js
var require_error_correction_code = __commonJS({
  "node_modules/qrcode/lib/core/error-correction-code.js"(exports) {
    var ECLevel = require_error_correction_level();
    var EC_BLOCKS_TABLE = [
      // L  M  Q  H
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      2,
      2,
      1,
      2,
      2,
      4,
      1,
      2,
      4,
      4,
      2,
      4,
      4,
      4,
      2,
      4,
      6,
      5,
      2,
      4,
      6,
      6,
      2,
      5,
      8,
      8,
      4,
      5,
      8,
      8,
      4,
      5,
      8,
      11,
      4,
      8,
      10,
      11,
      4,
      9,
      12,
      16,
      4,
      9,
      16,
      16,
      6,
      10,
      12,
      18,
      6,
      10,
      17,
      16,
      6,
      11,
      16,
      19,
      6,
      13,
      18,
      21,
      7,
      14,
      21,
      25,
      8,
      16,
      20,
      25,
      8,
      17,
      23,
      25,
      9,
      17,
      23,
      34,
      9,
      18,
      25,
      30,
      10,
      20,
      27,
      32,
      12,
      21,
      29,
      35,
      12,
      23,
      34,
      37,
      12,
      25,
      34,
      40,
      13,
      26,
      35,
      42,
      14,
      28,
      38,
      45,
      15,
      29,
      40,
      48,
      16,
      31,
      43,
      51,
      17,
      33,
      45,
      54,
      18,
      35,
      48,
      57,
      19,
      37,
      51,
      60,
      19,
      38,
      53,
      63,
      20,
      40,
      56,
      66,
      21,
      43,
      59,
      70,
      22,
      45,
      62,
      74,
      24,
      47,
      65,
      77,
      25,
      49,
      68,
      81
    ];
    var EC_CODEWORDS_TABLE = [
      // L  M  Q  H
      7,
      10,
      13,
      17,
      10,
      16,
      22,
      28,
      15,
      26,
      36,
      44,
      20,
      36,
      52,
      64,
      26,
      48,
      72,
      88,
      36,
      64,
      96,
      112,
      40,
      72,
      108,
      130,
      48,
      88,
      132,
      156,
      60,
      110,
      160,
      192,
      72,
      130,
      192,
      224,
      80,
      150,
      224,
      264,
      96,
      176,
      260,
      308,
      104,
      198,
      288,
      352,
      120,
      216,
      320,
      384,
      132,
      240,
      360,
      432,
      144,
      280,
      408,
      480,
      168,
      308,
      448,
      532,
      180,
      338,
      504,
      588,
      196,
      364,
      546,
      650,
      224,
      416,
      600,
      700,
      224,
      442,
      644,
      750,
      252,
      476,
      690,
      816,
      270,
      504,
      750,
      900,
      300,
      560,
      810,
      960,
      312,
      588,
      870,
      1050,
      336,
      644,
      952,
      1110,
      360,
      700,
      1020,
      1200,
      390,
      728,
      1050,
      1260,
      420,
      784,
      1140,
      1350,
      450,
      812,
      1200,
      1440,
      480,
      868,
      1290,
      1530,
      510,
      924,
      1350,
      1620,
      540,
      980,
      1440,
      1710,
      570,
      1036,
      1530,
      1800,
      570,
      1064,
      1590,
      1890,
      600,
      1120,
      1680,
      1980,
      630,
      1204,
      1770,
      2100,
      660,
      1260,
      1860,
      2220,
      720,
      1316,
      1950,
      2310,
      750,
      1372,
      2040,
      2430
    ];
    exports.getBlocksCount = function getBlocksCount(version, errorCorrectionLevel) {
      switch (errorCorrectionLevel) {
        case ECLevel.L:
          return EC_BLOCKS_TABLE[(version - 1) * 4 + 0];
        case ECLevel.M:
          return EC_BLOCKS_TABLE[(version - 1) * 4 + 1];
        case ECLevel.Q:
          return EC_BLOCKS_TABLE[(version - 1) * 4 + 2];
        case ECLevel.H:
          return EC_BLOCKS_TABLE[(version - 1) * 4 + 3];
        default:
          return void 0;
      }
    };
    exports.getTotalCodewordsCount = function getTotalCodewordsCount(version, errorCorrectionLevel) {
      switch (errorCorrectionLevel) {
        case ECLevel.L:
          return EC_CODEWORDS_TABLE[(version - 1) * 4 + 0];
        case ECLevel.M:
          return EC_CODEWORDS_TABLE[(version - 1) * 4 + 1];
        case ECLevel.Q:
          return EC_CODEWORDS_TABLE[(version - 1) * 4 + 2];
        case ECLevel.H:
          return EC_CODEWORDS_TABLE[(version - 1) * 4 + 3];
        default:
          return void 0;
      }
    };
  }
});

// node_modules/qrcode/lib/core/galois-field.js
var require_galois_field = __commonJS({
  "node_modules/qrcode/lib/core/galois-field.js"(exports) {
    var EXP_TABLE = new Uint8Array(512);
    var LOG_TABLE = new Uint8Array(256);
    (function initTables() {
      let x2 = 1;
      for (let i = 0; i < 255; i++) {
        EXP_TABLE[i] = x2;
        LOG_TABLE[x2] = i;
        x2 <<= 1;
        if (x2 & 256) {
          x2 ^= 285;
        }
      }
      for (let i = 255; i < 512; i++) {
        EXP_TABLE[i] = EXP_TABLE[i - 255];
      }
    })();
    exports.log = function log(n) {
      if (n < 1) throw new Error("log(" + n + ")");
      return LOG_TABLE[n];
    };
    exports.exp = function exp(n) {
      return EXP_TABLE[n];
    };
    exports.mul = function mul(x2, y2) {
      if (x2 === 0 || y2 === 0) return 0;
      return EXP_TABLE[LOG_TABLE[x2] + LOG_TABLE[y2]];
    };
  }
});

// node_modules/qrcode/lib/core/polynomial.js
var require_polynomial = __commonJS({
  "node_modules/qrcode/lib/core/polynomial.js"(exports) {
    var GF = require_galois_field();
    exports.mul = function mul(p1, p2) {
      const coeff = new Uint8Array(p1.length + p2.length - 1);
      for (let i = 0; i < p1.length; i++) {
        for (let j2 = 0; j2 < p2.length; j2++) {
          coeff[i + j2] ^= GF.mul(p1[i], p2[j2]);
        }
      }
      return coeff;
    };
    exports.mod = function mod(divident, divisor) {
      let result = new Uint8Array(divident);
      while (result.length - divisor.length >= 0) {
        const coeff = result[0];
        for (let i = 0; i < divisor.length; i++) {
          result[i] ^= GF.mul(divisor[i], coeff);
        }
        let offset = 0;
        while (offset < result.length && result[offset] === 0) offset++;
        result = result.slice(offset);
      }
      return result;
    };
    exports.generateECPolynomial = function generateECPolynomial(degree) {
      let poly = new Uint8Array([1]);
      for (let i = 0; i < degree; i++) {
        poly = exports.mul(poly, new Uint8Array([1, GF.exp(i)]));
      }
      return poly;
    };
  }
});

// node_modules/qrcode/lib/core/reed-solomon-encoder.js
var require_reed_solomon_encoder = __commonJS({
  "node_modules/qrcode/lib/core/reed-solomon-encoder.js"(exports, module) {
    var Polynomial = require_polynomial();
    function ReedSolomonEncoder(degree) {
      this.genPoly = void 0;
      this.degree = degree;
      if (this.degree) this.initialize(this.degree);
    }
    ReedSolomonEncoder.prototype.initialize = function initialize(degree) {
      this.degree = degree;
      this.genPoly = Polynomial.generateECPolynomial(this.degree);
    };
    ReedSolomonEncoder.prototype.encode = function encode(data) {
      if (!this.genPoly) {
        throw new Error("Encoder not initialized");
      }
      const paddedData = new Uint8Array(data.length + this.degree);
      paddedData.set(data);
      const remainder = Polynomial.mod(paddedData, this.genPoly);
      const start = this.degree - remainder.length;
      if (start > 0) {
        const buff = new Uint8Array(this.degree);
        buff.set(remainder, start);
        return buff;
      }
      return remainder;
    };
    module.exports = ReedSolomonEncoder;
  }
});

// node_modules/qrcode/lib/core/version-check.js
var require_version_check = __commonJS({
  "node_modules/qrcode/lib/core/version-check.js"(exports) {
    exports.isValid = function isValid(version) {
      return !isNaN(version) && version >= 1 && version <= 40;
    };
  }
});

// node_modules/qrcode/lib/core/regex.js
var require_regex = __commonJS({
  "node_modules/qrcode/lib/core/regex.js"(exports) {
    var numeric = "[0-9]+";
    var alphanumeric = "[A-Z $%*+\\-./:]+";
    var kanji = "(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";
    kanji = kanji.replace(/u/g, "\\u");
    var byte = "(?:(?![A-Z0-9 $%*+\\-./:]|" + kanji + ")(?:.|[\r\n]))+";
    exports.KANJI = new RegExp(kanji, "g");
    exports.BYTE_KANJI = new RegExp("[^A-Z0-9 $%*+\\-./:]+", "g");
    exports.BYTE = new RegExp(byte, "g");
    exports.NUMERIC = new RegExp(numeric, "g");
    exports.ALPHANUMERIC = new RegExp(alphanumeric, "g");
    var TEST_KANJI = new RegExp("^" + kanji + "$");
    var TEST_NUMERIC = new RegExp("^" + numeric + "$");
    var TEST_ALPHANUMERIC = new RegExp("^[A-Z0-9 $%*+\\-./:]+$");
    exports.testKanji = function testKanji(str) {
      return TEST_KANJI.test(str);
    };
    exports.testNumeric = function testNumeric(str) {
      return TEST_NUMERIC.test(str);
    };
    exports.testAlphanumeric = function testAlphanumeric(str) {
      return TEST_ALPHANUMERIC.test(str);
    };
  }
});

// node_modules/qrcode/lib/core/mode.js
var require_mode = __commonJS({
  "node_modules/qrcode/lib/core/mode.js"(exports) {
    var VersionCheck = require_version_check();
    var Regex = require_regex();
    exports.NUMERIC = {
      id: "Numeric",
      bit: 1 << 0,
      ccBits: [10, 12, 14]
    };
    exports.ALPHANUMERIC = {
      id: "Alphanumeric",
      bit: 1 << 1,
      ccBits: [9, 11, 13]
    };
    exports.BYTE = {
      id: "Byte",
      bit: 1 << 2,
      ccBits: [8, 16, 16]
    };
    exports.KANJI = {
      id: "Kanji",
      bit: 1 << 3,
      ccBits: [8, 10, 12]
    };
    exports.MIXED = {
      bit: -1
    };
    exports.getCharCountIndicator = function getCharCountIndicator(mode, version) {
      if (!mode.ccBits) throw new Error("Invalid mode: " + mode);
      if (!VersionCheck.isValid(version)) {
        throw new Error("Invalid version: " + version);
      }
      if (version >= 1 && version < 10) return mode.ccBits[0];
      else if (version < 27) return mode.ccBits[1];
      return mode.ccBits[2];
    };
    exports.getBestModeForData = function getBestModeForData(dataStr) {
      if (Regex.testNumeric(dataStr)) return exports.NUMERIC;
      else if (Regex.testAlphanumeric(dataStr)) return exports.ALPHANUMERIC;
      else if (Regex.testKanji(dataStr)) return exports.KANJI;
      else return exports.BYTE;
    };
    exports.toString = function toString(mode) {
      if (mode && mode.id) return mode.id;
      throw new Error("Invalid mode");
    };
    exports.isValid = function isValid(mode) {
      return mode && mode.bit && mode.ccBits;
    };
    function fromString(string) {
      if (typeof string !== "string") {
        throw new Error("Param is not a string");
      }
      const lcStr = string.toLowerCase();
      switch (lcStr) {
        case "numeric":
          return exports.NUMERIC;
        case "alphanumeric":
          return exports.ALPHANUMERIC;
        case "kanji":
          return exports.KANJI;
        case "byte":
          return exports.BYTE;
        default:
          throw new Error("Unknown mode: " + string);
      }
    }
    exports.from = function from(value, defaultValue) {
      if (exports.isValid(value)) {
        return value;
      }
      try {
        return fromString(value);
      } catch (e) {
        return defaultValue;
      }
    };
  }
});

// node_modules/qrcode/lib/core/version.js
var require_version = __commonJS({
  "node_modules/qrcode/lib/core/version.js"(exports) {
    var Utils = require_utils();
    var ECCode = require_error_correction_code();
    var ECLevel = require_error_correction_level();
    var Mode = require_mode();
    var VersionCheck = require_version_check();
    var G18 = 1 << 12 | 1 << 11 | 1 << 10 | 1 << 9 | 1 << 8 | 1 << 5 | 1 << 2 | 1 << 0;
    var G18_BCH = Utils.getBCHDigit(G18);
    function getBestVersionForDataLength(mode, length, errorCorrectionLevel) {
      for (let currentVersion = 1; currentVersion <= 40; currentVersion++) {
        if (length <= exports.getCapacity(currentVersion, errorCorrectionLevel, mode)) {
          return currentVersion;
        }
      }
      return void 0;
    }
    function getReservedBitsCount(mode, version) {
      return Mode.getCharCountIndicator(mode, version) + 4;
    }
    function getTotalBitsFromDataArray(segments, version) {
      let totalBits = 0;
      segments.forEach(function(data) {
        const reservedBits = getReservedBitsCount(data.mode, version);
        totalBits += reservedBits + data.getBitsLength();
      });
      return totalBits;
    }
    function getBestVersionForMixedData(segments, errorCorrectionLevel) {
      for (let currentVersion = 1; currentVersion <= 40; currentVersion++) {
        const length = getTotalBitsFromDataArray(segments, currentVersion);
        if (length <= exports.getCapacity(currentVersion, errorCorrectionLevel, Mode.MIXED)) {
          return currentVersion;
        }
      }
      return void 0;
    }
    exports.from = function from(value, defaultValue) {
      if (VersionCheck.isValid(value)) {
        return parseInt(value, 10);
      }
      return defaultValue;
    };
    exports.getCapacity = function getCapacity(version, errorCorrectionLevel, mode) {
      if (!VersionCheck.isValid(version)) {
        throw new Error("Invalid QR Code version");
      }
      if (typeof mode === "undefined") mode = Mode.BYTE;
      const totalCodewords = Utils.getSymbolTotalCodewords(version);
      const ecTotalCodewords = ECCode.getTotalCodewordsCount(version, errorCorrectionLevel);
      const dataTotalCodewordsBits = (totalCodewords - ecTotalCodewords) * 8;
      if (mode === Mode.MIXED) return dataTotalCodewordsBits;
      const usableBits = dataTotalCodewordsBits - getReservedBitsCount(mode, version);
      switch (mode) {
        case Mode.NUMERIC:
          return Math.floor(usableBits / 10 * 3);
        case Mode.ALPHANUMERIC:
          return Math.floor(usableBits / 11 * 2);
        case Mode.KANJI:
          return Math.floor(usableBits / 13);
        case Mode.BYTE:
        default:
          return Math.floor(usableBits / 8);
      }
    };
    exports.getBestVersionForData = function getBestVersionForData(data, errorCorrectionLevel) {
      let seg;
      const ecl = ECLevel.from(errorCorrectionLevel, ECLevel.M);
      if (Array.isArray(data)) {
        if (data.length > 1) {
          return getBestVersionForMixedData(data, ecl);
        }
        if (data.length === 0) {
          return 1;
        }
        seg = data[0];
      } else {
        seg = data;
      }
      return getBestVersionForDataLength(seg.mode, seg.getLength(), ecl);
    };
    exports.getEncodedBits = function getEncodedBits(version) {
      if (!VersionCheck.isValid(version) || version < 7) {
        throw new Error("Invalid QR Code version");
      }
      let d2 = version << 12;
      while (Utils.getBCHDigit(d2) - G18_BCH >= 0) {
        d2 ^= G18 << Utils.getBCHDigit(d2) - G18_BCH;
      }
      return version << 12 | d2;
    };
  }
});

// node_modules/qrcode/lib/core/format-info.js
var require_format_info = __commonJS({
  "node_modules/qrcode/lib/core/format-info.js"(exports) {
    var Utils = require_utils();
    var G15 = 1 << 10 | 1 << 8 | 1 << 5 | 1 << 4 | 1 << 2 | 1 << 1 | 1 << 0;
    var G15_MASK = 1 << 14 | 1 << 12 | 1 << 10 | 1 << 4 | 1 << 1;
    var G15_BCH = Utils.getBCHDigit(G15);
    exports.getEncodedBits = function getEncodedBits(errorCorrectionLevel, mask) {
      const data = errorCorrectionLevel.bit << 3 | mask;
      let d2 = data << 10;
      while (Utils.getBCHDigit(d2) - G15_BCH >= 0) {
        d2 ^= G15 << Utils.getBCHDigit(d2) - G15_BCH;
      }
      return (data << 10 | d2) ^ G15_MASK;
    };
  }
});

// node_modules/qrcode/lib/core/numeric-data.js
var require_numeric_data = __commonJS({
  "node_modules/qrcode/lib/core/numeric-data.js"(exports, module) {
    var Mode = require_mode();
    function NumericData(data) {
      this.mode = Mode.NUMERIC;
      this.data = data.toString();
    }
    NumericData.getBitsLength = function getBitsLength(length) {
      return 10 * Math.floor(length / 3) + (length % 3 ? length % 3 * 3 + 1 : 0);
    };
    NumericData.prototype.getLength = function getLength() {
      return this.data.length;
    };
    NumericData.prototype.getBitsLength = function getBitsLength() {
      return NumericData.getBitsLength(this.data.length);
    };
    NumericData.prototype.write = function write(bitBuffer) {
      let i, group, value;
      for (i = 0; i + 3 <= this.data.length; i += 3) {
        group = this.data.substr(i, 3);
        value = parseInt(group, 10);
        bitBuffer.put(value, 10);
      }
      const remainingNum = this.data.length - i;
      if (remainingNum > 0) {
        group = this.data.substr(i);
        value = parseInt(group, 10);
        bitBuffer.put(value, remainingNum * 3 + 1);
      }
    };
    module.exports = NumericData;
  }
});

// node_modules/qrcode/lib/core/alphanumeric-data.js
var require_alphanumeric_data = __commonJS({
  "node_modules/qrcode/lib/core/alphanumeric-data.js"(exports, module) {
    var Mode = require_mode();
    var ALPHA_NUM_CHARS = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", " ", "$", "%", "*", "+", "-", ".", "/", ":"];
    function AlphanumericData(data) {
      this.mode = Mode.ALPHANUMERIC;
      this.data = data;
    }
    AlphanumericData.getBitsLength = function getBitsLength(length) {
      return 11 * Math.floor(length / 2) + 6 * (length % 2);
    };
    AlphanumericData.prototype.getLength = function getLength() {
      return this.data.length;
    };
    AlphanumericData.prototype.getBitsLength = function getBitsLength() {
      return AlphanumericData.getBitsLength(this.data.length);
    };
    AlphanumericData.prototype.write = function write(bitBuffer) {
      let i;
      for (i = 0; i + 2 <= this.data.length; i += 2) {
        let value = ALPHA_NUM_CHARS.indexOf(this.data[i]) * 45;
        value += ALPHA_NUM_CHARS.indexOf(this.data[i + 1]);
        bitBuffer.put(value, 11);
      }
      if (this.data.length % 2) {
        bitBuffer.put(ALPHA_NUM_CHARS.indexOf(this.data[i]), 6);
      }
    };
    module.exports = AlphanumericData;
  }
});

// node_modules/qrcode/lib/core/byte-data.js
var require_byte_data = __commonJS({
  "node_modules/qrcode/lib/core/byte-data.js"(exports, module) {
    var Mode = require_mode();
    function ByteData(data) {
      this.mode = Mode.BYTE;
      if (typeof data === "string") {
        this.data = new TextEncoder().encode(data);
      } else {
        this.data = new Uint8Array(data);
      }
    }
    ByteData.getBitsLength = function getBitsLength(length) {
      return length * 8;
    };
    ByteData.prototype.getLength = function getLength() {
      return this.data.length;
    };
    ByteData.prototype.getBitsLength = function getBitsLength() {
      return ByteData.getBitsLength(this.data.length);
    };
    ByteData.prototype.write = function(bitBuffer) {
      for (let i = 0, l = this.data.length; i < l; i++) {
        bitBuffer.put(this.data[i], 8);
      }
    };
    module.exports = ByteData;
  }
});

// node_modules/qrcode/lib/core/kanji-data.js
var require_kanji_data = __commonJS({
  "node_modules/qrcode/lib/core/kanji-data.js"(exports, module) {
    var Mode = require_mode();
    var Utils = require_utils();
    function KanjiData(data) {
      this.mode = Mode.KANJI;
      this.data = data;
    }
    KanjiData.getBitsLength = function getBitsLength(length) {
      return length * 13;
    };
    KanjiData.prototype.getLength = function getLength() {
      return this.data.length;
    };
    KanjiData.prototype.getBitsLength = function getBitsLength() {
      return KanjiData.getBitsLength(this.data.length);
    };
    KanjiData.prototype.write = function(bitBuffer) {
      let i;
      for (i = 0; i < this.data.length; i++) {
        let value = Utils.toSJIS(this.data[i]);
        if (value >= 33088 && value <= 40956) {
          value -= 33088;
        } else if (value >= 57408 && value <= 60351) {
          value -= 49472;
        } else {
          throw new Error("Invalid SJIS character: " + this.data[i] + "\nMake sure your charset is UTF-8");
        }
        value = (value >>> 8 & 255) * 192 + (value & 255);
        bitBuffer.put(value, 13);
      }
    };
    module.exports = KanjiData;
  }
});

// node_modules/dijkstrajs/dijkstra.js
var require_dijkstra = __commonJS({
  "node_modules/dijkstrajs/dijkstra.js"(exports, module) {
    "use strict";
    var dijkstra = {
      single_source_shortest_paths: function(graph, s, d2) {
        var predecessors = {};
        var costs = {};
        costs[s] = 0;
        var open = dijkstra.PriorityQueue.make();
        open.push(s, 0);
        var closest, u3, v2, cost_of_s_to_u, adjacent_nodes, cost_of_e, cost_of_s_to_u_plus_cost_of_e, cost_of_s_to_v, first_visit;
        while (!open.empty()) {
          closest = open.pop();
          u3 = closest.value;
          cost_of_s_to_u = closest.cost;
          adjacent_nodes = graph[u3] || {};
          for (v2 in adjacent_nodes) {
            if (adjacent_nodes.hasOwnProperty(v2)) {
              cost_of_e = adjacent_nodes[v2];
              cost_of_s_to_u_plus_cost_of_e = cost_of_s_to_u + cost_of_e;
              cost_of_s_to_v = costs[v2];
              first_visit = typeof costs[v2] === "undefined";
              if (first_visit || cost_of_s_to_v > cost_of_s_to_u_plus_cost_of_e) {
                costs[v2] = cost_of_s_to_u_plus_cost_of_e;
                open.push(v2, cost_of_s_to_u_plus_cost_of_e);
                predecessors[v2] = u3;
              }
            }
          }
        }
        if (typeof d2 !== "undefined" && typeof costs[d2] === "undefined") {
          var msg = ["Could not find a path from ", s, " to ", d2, "."].join("");
          throw new Error(msg);
        }
        return predecessors;
      },
      extract_shortest_path_from_predecessor_list: function(predecessors, d2) {
        var nodes = [];
        var u3 = d2;
        var predecessor;
        while (u3) {
          nodes.push(u3);
          predecessor = predecessors[u3];
          u3 = predecessors[u3];
        }
        nodes.reverse();
        return nodes;
      },
      find_path: function(graph, s, d2) {
        var predecessors = dijkstra.single_source_shortest_paths(graph, s, d2);
        return dijkstra.extract_shortest_path_from_predecessor_list(predecessors, d2);
      },
      /**
       * A very naive priority queue implementation.
       */
      PriorityQueue: {
        make: function(opts) {
          var T2 = dijkstra.PriorityQueue, t = {}, key;
          opts = opts || {};
          for (key in T2) {
            if (T2.hasOwnProperty(key)) {
              t[key] = T2[key];
            }
          }
          t.queue = [];
          t.sorter = opts.sorter || T2.default_sorter;
          return t;
        },
        default_sorter: function(a, b2) {
          return a.cost - b2.cost;
        },
        /**
         * Add a new item to the queue and ensure the highest priority element
         * is at the front of the queue.
         */
        push: function(value, cost) {
          var item = {
            value,
            cost
          };
          this.queue.push(item);
          this.queue.sort(this.sorter);
        },
        /**
         * Return the highest priority element in the queue.
         */
        pop: function() {
          return this.queue.shift();
        },
        empty: function() {
          return this.queue.length === 0;
        }
      }
    };
    if (typeof module !== "undefined") {
      module.exports = dijkstra;
    }
  }
});

// node_modules/qrcode/lib/core/segments.js
var require_segments = __commonJS({
  "node_modules/qrcode/lib/core/segments.js"(exports) {
    var Mode = require_mode();
    var NumericData = require_numeric_data();
    var AlphanumericData = require_alphanumeric_data();
    var ByteData = require_byte_data();
    var KanjiData = require_kanji_data();
    var Regex = require_regex();
    var Utils = require_utils();
    var dijkstra = require_dijkstra();
    function getStringByteLength(str) {
      return unescape(encodeURIComponent(str)).length;
    }
    function getSegments(regex, mode, str) {
      const segments = [];
      let result;
      while ((result = regex.exec(str)) !== null) {
        segments.push({
          data: result[0],
          index: result.index,
          mode,
          length: result[0].length
        });
      }
      return segments;
    }
    function getSegmentsFromString(dataStr) {
      const numSegs = getSegments(Regex.NUMERIC, Mode.NUMERIC, dataStr);
      const alphaNumSegs = getSegments(Regex.ALPHANUMERIC, Mode.ALPHANUMERIC, dataStr);
      let byteSegs;
      let kanjiSegs;
      if (Utils.isKanjiModeEnabled()) {
        byteSegs = getSegments(Regex.BYTE, Mode.BYTE, dataStr);
        kanjiSegs = getSegments(Regex.KANJI, Mode.KANJI, dataStr);
      } else {
        byteSegs = getSegments(Regex.BYTE_KANJI, Mode.BYTE, dataStr);
        kanjiSegs = [];
      }
      const segs = numSegs.concat(alphaNumSegs, byteSegs, kanjiSegs);
      return segs.sort(function(s1, s2) {
        return s1.index - s2.index;
      }).map(function(obj) {
        return {
          data: obj.data,
          mode: obj.mode,
          length: obj.length
        };
      });
    }
    function getSegmentBitsLength(length, mode) {
      switch (mode) {
        case Mode.NUMERIC:
          return NumericData.getBitsLength(length);
        case Mode.ALPHANUMERIC:
          return AlphanumericData.getBitsLength(length);
        case Mode.KANJI:
          return KanjiData.getBitsLength(length);
        case Mode.BYTE:
          return ByteData.getBitsLength(length);
      }
    }
    function mergeSegments(segs) {
      return segs.reduce(function(acc, curr) {
        const prevSeg = acc.length - 1 >= 0 ? acc[acc.length - 1] : null;
        if (prevSeg && prevSeg.mode === curr.mode) {
          acc[acc.length - 1].data += curr.data;
          return acc;
        }
        acc.push(curr);
        return acc;
      }, []);
    }
    function buildNodes(segs) {
      const nodes = [];
      for (let i = 0; i < segs.length; i++) {
        const seg = segs[i];
        switch (seg.mode) {
          case Mode.NUMERIC:
            nodes.push([seg, {
              data: seg.data,
              mode: Mode.ALPHANUMERIC,
              length: seg.length
            }, {
              data: seg.data,
              mode: Mode.BYTE,
              length: seg.length
            }]);
            break;
          case Mode.ALPHANUMERIC:
            nodes.push([seg, {
              data: seg.data,
              mode: Mode.BYTE,
              length: seg.length
            }]);
            break;
          case Mode.KANJI:
            nodes.push([seg, {
              data: seg.data,
              mode: Mode.BYTE,
              length: getStringByteLength(seg.data)
            }]);
            break;
          case Mode.BYTE:
            nodes.push([{
              data: seg.data,
              mode: Mode.BYTE,
              length: getStringByteLength(seg.data)
            }]);
        }
      }
      return nodes;
    }
    function buildGraph(nodes, version) {
      const table = {};
      const graph = {
        start: {}
      };
      let prevNodeIds = ["start"];
      for (let i = 0; i < nodes.length; i++) {
        const nodeGroup = nodes[i];
        const currentNodeIds = [];
        for (let j2 = 0; j2 < nodeGroup.length; j2++) {
          const node = nodeGroup[j2];
          const key = "" + i + j2;
          currentNodeIds.push(key);
          table[key] = {
            node,
            lastCount: 0
          };
          graph[key] = {};
          for (let n = 0; n < prevNodeIds.length; n++) {
            const prevNodeId = prevNodeIds[n];
            if (table[prevNodeId] && table[prevNodeId].node.mode === node.mode) {
              graph[prevNodeId][key] = getSegmentBitsLength(table[prevNodeId].lastCount + node.length, node.mode) - getSegmentBitsLength(table[prevNodeId].lastCount, node.mode);
              table[prevNodeId].lastCount += node.length;
            } else {
              if (table[prevNodeId]) table[prevNodeId].lastCount = node.length;
              graph[prevNodeId][key] = getSegmentBitsLength(node.length, node.mode) + 4 + Mode.getCharCountIndicator(node.mode, version);
            }
          }
        }
        prevNodeIds = currentNodeIds;
      }
      for (let n = 0; n < prevNodeIds.length; n++) {
        graph[prevNodeIds[n]].end = 0;
      }
      return {
        map: graph,
        table
      };
    }
    function buildSingleSegment(data, modesHint) {
      let mode;
      const bestMode = Mode.getBestModeForData(data);
      mode = Mode.from(modesHint, bestMode);
      if (mode !== Mode.BYTE && mode.bit < bestMode.bit) {
        throw new Error('"' + data + '" cannot be encoded with mode ' + Mode.toString(mode) + ".\n Suggested mode is: " + Mode.toString(bestMode));
      }
      if (mode === Mode.KANJI && !Utils.isKanjiModeEnabled()) {
        mode = Mode.BYTE;
      }
      switch (mode) {
        case Mode.NUMERIC:
          return new NumericData(data);
        case Mode.ALPHANUMERIC:
          return new AlphanumericData(data);
        case Mode.KANJI:
          return new KanjiData(data);
        case Mode.BYTE:
          return new ByteData(data);
      }
    }
    exports.fromArray = function fromArray(array) {
      return array.reduce(function(acc, seg) {
        if (typeof seg === "string") {
          acc.push(buildSingleSegment(seg, null));
        } else if (seg.data) {
          acc.push(buildSingleSegment(seg.data, seg.mode));
        }
        return acc;
      }, []);
    };
    exports.fromString = function fromString(data, version) {
      const segs = getSegmentsFromString(data, Utils.isKanjiModeEnabled());
      const nodes = buildNodes(segs);
      const graph = buildGraph(nodes, version);
      const path = dijkstra.find_path(graph.map, "start", "end");
      const optimizedSegs = [];
      for (let i = 1; i < path.length - 1; i++) {
        optimizedSegs.push(graph.table[path[i]].node);
      }
      return exports.fromArray(mergeSegments(optimizedSegs));
    };
    exports.rawSplit = function rawSplit(data) {
      return exports.fromArray(getSegmentsFromString(data, Utils.isKanjiModeEnabled()));
    };
  }
});

// node_modules/qrcode/lib/core/qrcode.js
var require_qrcode = __commonJS({
  "node_modules/qrcode/lib/core/qrcode.js"(exports) {
    var Utils = require_utils();
    var ECLevel = require_error_correction_level();
    var BitBuffer = require_bit_buffer();
    var BitMatrix = require_bit_matrix();
    var AlignmentPattern = require_alignment_pattern();
    var FinderPattern = require_finder_pattern();
    var MaskPattern = require_mask_pattern();
    var ECCode = require_error_correction_code();
    var ReedSolomonEncoder = require_reed_solomon_encoder();
    var Version = require_version();
    var FormatInfo = require_format_info();
    var Mode = require_mode();
    var Segments = require_segments();
    function setupFinderPattern(matrix, version) {
      const size = matrix.size;
      const pos = FinderPattern.getPositions(version);
      for (let i = 0; i < pos.length; i++) {
        const row = pos[i][0];
        const col = pos[i][1];
        for (let r = -1; r <= 7; r++) {
          if (row + r <= -1 || size <= row + r) continue;
          for (let c = -1; c <= 7; c++) {
            if (col + c <= -1 || size <= col + c) continue;
            if (r >= 0 && r <= 6 && (c === 0 || c === 6) || c >= 0 && c <= 6 && (r === 0 || r === 6) || r >= 2 && r <= 4 && c >= 2 && c <= 4) {
              matrix.set(row + r, col + c, true, true);
            } else {
              matrix.set(row + r, col + c, false, true);
            }
          }
        }
      }
    }
    function setupTimingPattern(matrix) {
      const size = matrix.size;
      for (let r = 8; r < size - 8; r++) {
        const value = r % 2 === 0;
        matrix.set(r, 6, value, true);
        matrix.set(6, r, value, true);
      }
    }
    function setupAlignmentPattern(matrix, version) {
      const pos = AlignmentPattern.getPositions(version);
      for (let i = 0; i < pos.length; i++) {
        const row = pos[i][0];
        const col = pos[i][1];
        for (let r = -2; r <= 2; r++) {
          for (let c = -2; c <= 2; c++) {
            if (r === -2 || r === 2 || c === -2 || c === 2 || r === 0 && c === 0) {
              matrix.set(row + r, col + c, true, true);
            } else {
              matrix.set(row + r, col + c, false, true);
            }
          }
        }
      }
    }
    function setupVersionInfo(matrix, version) {
      const size = matrix.size;
      const bits = Version.getEncodedBits(version);
      let row, col, mod;
      for (let i = 0; i < 18; i++) {
        row = Math.floor(i / 3);
        col = i % 3 + size - 8 - 3;
        mod = (bits >> i & 1) === 1;
        matrix.set(row, col, mod, true);
        matrix.set(col, row, mod, true);
      }
    }
    function setupFormatInfo(matrix, errorCorrectionLevel, maskPattern) {
      const size = matrix.size;
      const bits = FormatInfo.getEncodedBits(errorCorrectionLevel, maskPattern);
      let i, mod;
      for (i = 0; i < 15; i++) {
        mod = (bits >> i & 1) === 1;
        if (i < 6) {
          matrix.set(i, 8, mod, true);
        } else if (i < 8) {
          matrix.set(i + 1, 8, mod, true);
        } else {
          matrix.set(size - 15 + i, 8, mod, true);
        }
        if (i < 8) {
          matrix.set(8, size - i - 1, mod, true);
        } else if (i < 9) {
          matrix.set(8, 15 - i - 1 + 1, mod, true);
        } else {
          matrix.set(8, 15 - i - 1, mod, true);
        }
      }
      matrix.set(size - 8, 8, 1, true);
    }
    function setupData(matrix, data) {
      const size = matrix.size;
      let inc = -1;
      let row = size - 1;
      let bitIndex = 7;
      let byteIndex = 0;
      for (let col = size - 1; col > 0; col -= 2) {
        if (col === 6) col--;
        while (true) {
          for (let c = 0; c < 2; c++) {
            if (!matrix.isReserved(row, col - c)) {
              let dark = false;
              if (byteIndex < data.length) {
                dark = (data[byteIndex] >>> bitIndex & 1) === 1;
              }
              matrix.set(row, col - c, dark);
              bitIndex--;
              if (bitIndex === -1) {
                byteIndex++;
                bitIndex = 7;
              }
            }
          }
          row += inc;
          if (row < 0 || size <= row) {
            row -= inc;
            inc = -inc;
            break;
          }
        }
      }
    }
    function createData(version, errorCorrectionLevel, segments) {
      const buffer = new BitBuffer();
      segments.forEach(function(data) {
        buffer.put(data.mode.bit, 4);
        buffer.put(data.getLength(), Mode.getCharCountIndicator(data.mode, version));
        data.write(buffer);
      });
      const totalCodewords = Utils.getSymbolTotalCodewords(version);
      const ecTotalCodewords = ECCode.getTotalCodewordsCount(version, errorCorrectionLevel);
      const dataTotalCodewordsBits = (totalCodewords - ecTotalCodewords) * 8;
      if (buffer.getLengthInBits() + 4 <= dataTotalCodewordsBits) {
        buffer.put(0, 4);
      }
      while (buffer.getLengthInBits() % 8 !== 0) {
        buffer.putBit(0);
      }
      const remainingByte = (dataTotalCodewordsBits - buffer.getLengthInBits()) / 8;
      for (let i = 0; i < remainingByte; i++) {
        buffer.put(i % 2 ? 17 : 236, 8);
      }
      return createCodewords(buffer, version, errorCorrectionLevel);
    }
    function createCodewords(bitBuffer, version, errorCorrectionLevel) {
      const totalCodewords = Utils.getSymbolTotalCodewords(version);
      const ecTotalCodewords = ECCode.getTotalCodewordsCount(version, errorCorrectionLevel);
      const dataTotalCodewords = totalCodewords - ecTotalCodewords;
      const ecTotalBlocks = ECCode.getBlocksCount(version, errorCorrectionLevel);
      const blocksInGroup2 = totalCodewords % ecTotalBlocks;
      const blocksInGroup1 = ecTotalBlocks - blocksInGroup2;
      const totalCodewordsInGroup1 = Math.floor(totalCodewords / ecTotalBlocks);
      const dataCodewordsInGroup1 = Math.floor(dataTotalCodewords / ecTotalBlocks);
      const dataCodewordsInGroup2 = dataCodewordsInGroup1 + 1;
      const ecCount = totalCodewordsInGroup1 - dataCodewordsInGroup1;
      const rs = new ReedSolomonEncoder(ecCount);
      let offset = 0;
      const dcData = new Array(ecTotalBlocks);
      const ecData = new Array(ecTotalBlocks);
      let maxDataSize = 0;
      const buffer = new Uint8Array(bitBuffer.buffer);
      for (let b2 = 0; b2 < ecTotalBlocks; b2++) {
        const dataSize = b2 < blocksInGroup1 ? dataCodewordsInGroup1 : dataCodewordsInGroup2;
        dcData[b2] = buffer.slice(offset, offset + dataSize);
        ecData[b2] = rs.encode(dcData[b2]);
        offset += dataSize;
        maxDataSize = Math.max(maxDataSize, dataSize);
      }
      const data = new Uint8Array(totalCodewords);
      let index = 0;
      let i, r;
      for (i = 0; i < maxDataSize; i++) {
        for (r = 0; r < ecTotalBlocks; r++) {
          if (i < dcData[r].length) {
            data[index++] = dcData[r][i];
          }
        }
      }
      for (i = 0; i < ecCount; i++) {
        for (r = 0; r < ecTotalBlocks; r++) {
          data[index++] = ecData[r][i];
        }
      }
      return data;
    }
    function createSymbol(data, version, errorCorrectionLevel, maskPattern) {
      let segments;
      if (Array.isArray(data)) {
        segments = Segments.fromArray(data);
      } else if (typeof data === "string") {
        let estimatedVersion = version;
        if (!estimatedVersion) {
          const rawSegments = Segments.rawSplit(data);
          estimatedVersion = Version.getBestVersionForData(rawSegments, errorCorrectionLevel);
        }
        segments = Segments.fromString(data, estimatedVersion || 40);
      } else {
        throw new Error("Invalid data");
      }
      const bestVersion = Version.getBestVersionForData(segments, errorCorrectionLevel);
      if (!bestVersion) {
        throw new Error("The amount of data is too big to be stored in a QR Code");
      }
      if (!version) {
        version = bestVersion;
      } else if (version < bestVersion) {
        throw new Error("\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: " + bestVersion + ".\n");
      }
      const dataBits = createData(version, errorCorrectionLevel, segments);
      const moduleCount = Utils.getSymbolSize(version);
      const modules = new BitMatrix(moduleCount);
      setupFinderPattern(modules, version);
      setupTimingPattern(modules);
      setupAlignmentPattern(modules, version);
      setupFormatInfo(modules, errorCorrectionLevel, 0);
      if (version >= 7) {
        setupVersionInfo(modules, version);
      }
      setupData(modules, dataBits);
      if (isNaN(maskPattern)) {
        maskPattern = MaskPattern.getBestMask(modules, setupFormatInfo.bind(null, modules, errorCorrectionLevel));
      }
      MaskPattern.applyMask(maskPattern, modules);
      setupFormatInfo(modules, errorCorrectionLevel, maskPattern);
      return {
        modules,
        version,
        errorCorrectionLevel,
        maskPattern,
        segments
      };
    }
    exports.create = function create(data, options) {
      if (typeof data === "undefined" || data === "") {
        throw new Error("No input text");
      }
      let errorCorrectionLevel = ECLevel.M;
      let version;
      let mask;
      if (typeof options !== "undefined") {
        errorCorrectionLevel = ECLevel.from(options.errorCorrectionLevel, ECLevel.M);
        version = Version.from(options.version);
        mask = MaskPattern.from(options.maskPattern);
        if (options.toSJISFunc) {
          Utils.setToSJISFunction(options.toSJISFunc);
        }
      }
      return createSymbol(data, version, errorCorrectionLevel, mask);
    };
  }
});

// node_modules/qrcode/lib/renderer/utils.js
var require_utils2 = __commonJS({
  "node_modules/qrcode/lib/renderer/utils.js"(exports) {
    function hex2rgba(hex) {
      if (typeof hex === "number") {
        hex = hex.toString();
      }
      if (typeof hex !== "string") {
        throw new Error("Color should be defined as hex string");
      }
      let hexCode = hex.slice().replace("#", "").split("");
      if (hexCode.length < 3 || hexCode.length === 5 || hexCode.length > 8) {
        throw new Error("Invalid hex color: " + hex);
      }
      if (hexCode.length === 3 || hexCode.length === 4) {
        hexCode = Array.prototype.concat.apply([], hexCode.map(function(c) {
          return [c, c];
        }));
      }
      if (hexCode.length === 6) hexCode.push("F", "F");
      const hexValue = parseInt(hexCode.join(""), 16);
      return {
        r: hexValue >> 24 & 255,
        g: hexValue >> 16 & 255,
        b: hexValue >> 8 & 255,
        a: hexValue & 255,
        hex: "#" + hexCode.slice(0, 6).join("")
      };
    }
    exports.getOptions = function getOptions(options) {
      if (!options) options = {};
      if (!options.color) options.color = {};
      const margin = typeof options.margin === "undefined" || options.margin === null || options.margin < 0 ? 4 : options.margin;
      const width = options.width && options.width >= 21 ? options.width : void 0;
      const scale = options.scale || 4;
      return {
        width,
        scale: width ? 4 : scale,
        margin,
        color: {
          dark: hex2rgba(options.color.dark || "#000000ff"),
          light: hex2rgba(options.color.light || "#ffffffff")
        },
        type: options.type,
        rendererOpts: options.rendererOpts || {}
      };
    };
    exports.getScale = function getScale(qrSize, opts) {
      return opts.width && opts.width >= qrSize + opts.margin * 2 ? opts.width / (qrSize + opts.margin * 2) : opts.scale;
    };
    exports.getImageWidth = function getImageWidth(qrSize, opts) {
      const scale = exports.getScale(qrSize, opts);
      return Math.floor((qrSize + opts.margin * 2) * scale);
    };
    exports.qrToImageData = function qrToImageData(imgData, qr, opts) {
      const size = qr.modules.size;
      const data = qr.modules.data;
      const scale = exports.getScale(size, opts);
      const symbolSize = Math.floor((size + opts.margin * 2) * scale);
      const scaledMargin = opts.margin * scale;
      const palette = [opts.color.light, opts.color.dark];
      for (let i = 0; i < symbolSize; i++) {
        for (let j2 = 0; j2 < symbolSize; j2++) {
          let posDst = (i * symbolSize + j2) * 4;
          let pxColor = opts.color.light;
          if (i >= scaledMargin && j2 >= scaledMargin && i < symbolSize - scaledMargin && j2 < symbolSize - scaledMargin) {
            const iSrc = Math.floor((i - scaledMargin) / scale);
            const jSrc = Math.floor((j2 - scaledMargin) / scale);
            pxColor = palette[data[iSrc * size + jSrc] ? 1 : 0];
          }
          imgData[posDst++] = pxColor.r;
          imgData[posDst++] = pxColor.g;
          imgData[posDst++] = pxColor.b;
          imgData[posDst] = pxColor.a;
        }
      }
    };
  }
});

// node_modules/qrcode/lib/renderer/canvas.js
var require_canvas = __commonJS({
  "node_modules/qrcode/lib/renderer/canvas.js"(exports) {
    var Utils = require_utils2();
    function clearCanvas(ctx, canvas, size) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      if (!canvas.style) canvas.style = {};
      canvas.height = size;
      canvas.width = size;
      canvas.style.height = size + "px";
      canvas.style.width = size + "px";
    }
    function getCanvasElement() {
      try {
        return document.createElement("canvas");
      } catch (e) {
        throw new Error("You need to specify a canvas element");
      }
    }
    exports.render = function render(qrData, canvas, options) {
      let opts = options;
      let canvasEl = canvas;
      if (typeof opts === "undefined" && (!canvas || !canvas.getContext)) {
        opts = canvas;
        canvas = void 0;
      }
      if (!canvas) {
        canvasEl = getCanvasElement();
      }
      opts = Utils.getOptions(opts);
      const size = Utils.getImageWidth(qrData.modules.size, opts);
      const ctx = canvasEl.getContext("2d");
      const image = ctx.createImageData(size, size);
      Utils.qrToImageData(image.data, qrData, opts);
      clearCanvas(ctx, canvasEl, size);
      ctx.putImageData(image, 0, 0);
      return canvasEl;
    };
    exports.renderToDataURL = function renderToDataURL(qrData, canvas, options) {
      let opts = options;
      if (typeof opts === "undefined" && (!canvas || !canvas.getContext)) {
        opts = canvas;
        canvas = void 0;
      }
      if (!opts) opts = {};
      const canvasEl = exports.render(qrData, canvas, opts);
      const type = opts.type || "image/png";
      const rendererOpts = opts.rendererOpts || {};
      return canvasEl.toDataURL(type, rendererOpts.quality);
    };
  }
});

// node_modules/qrcode/lib/renderer/svg-tag.js
var require_svg_tag = __commonJS({
  "node_modules/qrcode/lib/renderer/svg-tag.js"(exports) {
    var Utils = require_utils2();
    function getColorAttrib(color, attrib) {
      const alpha = color.a / 255;
      const str = attrib + '="' + color.hex + '"';
      return alpha < 1 ? str + " " + attrib + '-opacity="' + alpha.toFixed(2).slice(1) + '"' : str;
    }
    function svgCmd(cmd, x2, y2) {
      let str = cmd + x2;
      if (typeof y2 !== "undefined") str += " " + y2;
      return str;
    }
    function qrToPath(data, size, margin) {
      let path = "";
      let moveBy = 0;
      let newRow = false;
      let lineLength = 0;
      for (let i = 0; i < data.length; i++) {
        const col = Math.floor(i % size);
        const row = Math.floor(i / size);
        if (!col && !newRow) newRow = true;
        if (data[i]) {
          lineLength++;
          if (!(i > 0 && col > 0 && data[i - 1])) {
            path += newRow ? svgCmd("M", col + margin, 0.5 + row + margin) : svgCmd("m", moveBy, 0);
            moveBy = 0;
            newRow = false;
          }
          if (!(col + 1 < size && data[i + 1])) {
            path += svgCmd("h", lineLength);
            lineLength = 0;
          }
        } else {
          moveBy++;
        }
      }
      return path;
    }
    exports.render = function render(qrData, options, cb) {
      const opts = Utils.getOptions(options);
      const size = qrData.modules.size;
      const data = qrData.modules.data;
      const qrcodesize = size + opts.margin * 2;
      const bg = !opts.color.light.a ? "" : "<path " + getColorAttrib(opts.color.light, "fill") + ' d="M0 0h' + qrcodesize + "v" + qrcodesize + 'H0z"/>';
      const path = "<path " + getColorAttrib(opts.color.dark, "stroke") + ' d="' + qrToPath(data, size, opts.margin) + '"/>';
      const viewBox = 'viewBox="0 0 ' + qrcodesize + " " + qrcodesize + '"';
      const width = !opts.width ? "" : 'width="' + opts.width + '" height="' + opts.width + '" ';
      const svgTag = '<svg xmlns="http://www.w3.org/2000/svg" ' + width + viewBox + ' shape-rendering="crispEdges">' + bg + path + "</svg>\n";
      if (typeof cb === "function") {
        cb(null, svgTag);
      }
      return svgTag;
    };
  }
});

// node_modules/qrcode/lib/browser.js
var require_browser = __commonJS({
  "node_modules/qrcode/lib/browser.js"(exports) {
    var canPromise = require_can_promise();
    var QRCode2 = require_qrcode();
    var CanvasRenderer = require_canvas();
    var SvgRenderer = require_svg_tag();
    function renderCanvas(renderFunc, canvas, text, opts, cb) {
      const args = [].slice.call(arguments, 1);
      const argsNum = args.length;
      const isLastArgCb = typeof args[argsNum - 1] === "function";
      if (!isLastArgCb && !canPromise()) {
        throw new Error("Callback required as last argument");
      }
      if (isLastArgCb) {
        if (argsNum < 2) {
          throw new Error("Too few arguments provided");
        }
        if (argsNum === 2) {
          cb = text;
          text = canvas;
          canvas = opts = void 0;
        } else if (argsNum === 3) {
          if (canvas.getContext && typeof cb === "undefined") {
            cb = opts;
            opts = void 0;
          } else {
            cb = opts;
            opts = text;
            text = canvas;
            canvas = void 0;
          }
        }
      } else {
        if (argsNum < 1) {
          throw new Error("Too few arguments provided");
        }
        if (argsNum === 1) {
          text = canvas;
          canvas = opts = void 0;
        } else if (argsNum === 2 && !canvas.getContext) {
          opts = text;
          text = canvas;
          canvas = void 0;
        }
        return new Promise(function(resolve, reject) {
          try {
            const data = QRCode2.create(text, opts);
            resolve(renderFunc(data, canvas, opts));
          } catch (e) {
            reject(e);
          }
        });
      }
      try {
        const data = QRCode2.create(text, opts);
        cb(null, renderFunc(data, canvas, opts));
      } catch (e) {
        cb(e);
      }
    }
    exports.create = QRCode2.create;
    exports.toCanvas = renderCanvas.bind(null, CanvasRenderer.render);
    exports.toDataURL = renderCanvas.bind(null, CanvasRenderer.renderToDataURL);
    exports.toString = renderCanvas.bind(null, function(data, _2, opts) {
      return SvgRenderer.render(data, opts);
    });
  }
});

// src/app/modules/chat/chat.component.ts
var QRCode = __toESM(require_browser());

// node_modules/marked/lib/marked.esm.js
function L() {
  return {
    async: false,
    breaks: false,
    extensions: null,
    gfm: true,
    hooks: null,
    pedantic: false,
    renderer: null,
    silent: false,
    tokenizer: null,
    walkTokens: null
  };
}
var T = L();
function Z(u3) {
  T = u3;
}
var C = {
  exec: () => null
};
function k(u3, e = "") {
  let t = typeof u3 == "string" ? u3 : u3.source, n = {
    replace: (r, i) => {
      let s = typeof i == "string" ? i : i.source;
      return s = s.replace(m.caret, "$1"), t = t.replace(r, s), n;
    },
    getRegex: () => new RegExp(t, e)
  };
  return n;
}
var me = (() => {
  try {
    return !!new RegExp("(?<=1)(?<!1)");
  } catch {
    return false;
  }
})();
var m = {
  codeRemoveIndent: /^(?: {1,4}| {0,3}\t)/gm,
  outputLinkReplace: /\\([\[\]])/g,
  indentCodeCompensation: /^(\s+)(?:```)/,
  beginningSpace: /^\s+/,
  endingHash: /#$/,
  startingSpaceChar: /^ /,
  endingSpaceChar: / $/,
  nonSpaceChar: /[^ ]/,
  newLineCharGlobal: /\n/g,
  tabCharGlobal: /\t/g,
  multipleSpaceGlobal: /\s+/g,
  blankLine: /^[ \t]*$/,
  doubleBlankLine: /\n[ \t]*\n[ \t]*$/,
  blockquoteStart: /^ {0,3}>/,
  blockquoteSetextReplace: /\n {0,3}((?:=+|-+) *)(?=\n|$)/g,
  blockquoteSetextReplace2: /^ {0,3}>[ \t]?/gm,
  listReplaceTabs: /^\t+/,
  listReplaceNesting: /^ {1,4}(?=( {4})*[^ ])/g,
  listIsTask: /^\[[ xX]\] +\S/,
  listReplaceTask: /^\[[ xX]\] +/,
  listTaskCheckbox: /\[[ xX]\]/,
  anyLine: /\n.*\n/,
  hrefBrackets: /^<(.*)>$/,
  tableDelimiter: /[:|]/,
  tableAlignChars: /^\||\| *$/g,
  tableRowBlankLine: /\n[ \t]*$/,
  tableAlignRight: /^ *-+: *$/,
  tableAlignCenter: /^ *:-+: *$/,
  tableAlignLeft: /^ *:-+ *$/,
  startATag: /^<a /i,
  endATag: /^<\/a>/i,
  startPreScriptTag: /^<(pre|code|kbd|script)(\s|>)/i,
  endPreScriptTag: /^<\/(pre|code|kbd|script)(\s|>)/i,
  startAngleBracket: /^</,
  endAngleBracket: />$/,
  pedanticHrefTitle: /^([^'"]*[^\s])\s+(['"])(.*)\2/,
  unicodeAlphaNumeric: /[\p{L}\p{N}]/u,
  escapeTest: /[&<>"']/,
  escapeReplace: /[&<>"']/g,
  escapeTestNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,
  escapeReplaceNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,
  unescapeTest: /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig,
  caret: /(^|[^\[])\^/g,
  percentDecode: /%25/g,
  findPipe: /\|/g,
  splitPipe: / \|/,
  slashPipe: /\\\|/g,
  carriageReturn: /\r\n|\r/g,
  spaceLine: /^ +$/gm,
  notSpaceStart: /^\S*/,
  endingNewline: /\n$/,
  listItemRegex: (u3) => new RegExp(`^( {0,3}${u3})((?:[	 ][^\\n]*)?(?:\\n|$))`),
  nextBulletRegex: (u3) => new RegExp(`^ {0,${Math.min(3, u3 - 1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),
  hrRegex: (u3) => new RegExp(`^ {0,${Math.min(3, u3 - 1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),
  fencesBeginRegex: (u3) => new RegExp(`^ {0,${Math.min(3, u3 - 1)}}(?:\`\`\`|~~~)`),
  headingBeginRegex: (u3) => new RegExp(`^ {0,${Math.min(3, u3 - 1)}}#`),
  htmlBeginRegex: (u3) => new RegExp(`^ {0,${Math.min(3, u3 - 1)}}<(?:[a-z].*>|!--)`, "i")
};
var xe = /^(?:[ \t]*(?:\n|$))+/;
var be = /^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/;
var Re = /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/;
var I = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/;
var Te = /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/;
var N = /(?:[*+-]|\d{1,9}[.)])/;
var re = /^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/;
var se = k(re).replace(/bull/g, N).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/\|table/g, "").getRegex();
var Oe = k(re).replace(/bull/g, N).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/table/g, / {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex();
var Q = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/;
var we = /^[^\n]+/;
var F = /(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/;
var ye = k(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label", F).replace("title", /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex();
var Pe = k(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g, N).getRegex();
var v = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul";
var j = /<!--(?:-?>|[\s\S]*?(?:-->|$))/;
var Se = k("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))", "i").replace("comment", j).replace("tag", v).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex();
var ie = k(Q).replace("hr", I).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", v).getRegex();
var $e = k(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph", ie).getRegex();
var U = {
  blockquote: $e,
  code: be,
  def: ye,
  fences: Re,
  heading: Te,
  hr: I,
  html: Se,
  lheading: se,
  list: Pe,
  newline: xe,
  paragraph: ie,
  table: C,
  text: we
};
var te = k("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr", I).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("blockquote", " {0,3}>").replace("code", "(?: {4}| {0,3}	)[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", v).getRegex();
var _e = __spreadProps(__spreadValues({}, U), {
  lheading: Oe,
  table: te,
  paragraph: k(Q).replace("hr", I).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("table", te).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", v).getRegex()
});
var Le = __spreadProps(__spreadValues({}, U), {
  html: k(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment", j).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),
  def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
  heading: /^(#{1,6})(.*)(?:\n+|$)/,
  fences: C,
  lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
  paragraph: k(Q).replace("hr", I).replace("heading", ` *#{1,6} *[^
]`).replace("lheading", se).replace("|table", "").replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").replace("|tag", "").getRegex()
});
var Me = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/;
var ze = /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/;
var oe = /^( {2,}|\\)\n(?!\s*$)/;
var Ae = /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/;
var D = /[\p{P}\p{S}]/u;
var K = /[\s\p{P}\p{S}]/u;
var ae = /[^\s\p{P}\p{S}]/u;
var Ce = k(/^((?![*_])punctSpace)/, "u").replace(/punctSpace/g, K).getRegex();
var le = /(?!~)[\p{P}\p{S}]/u;
var Ie = /(?!~)[\s\p{P}\p{S}]/u;
var Ee = /(?:[^\s\p{P}\p{S}]|~)/u;
var Be = k(/link|precode-code|html/, "g").replace("link", /\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace("precode-", me ? "(?<!`)()" : "(^^|[^`])").replace("code", /(?<b>`+)[^`]+\k<b>(?!`)/).replace("html", /<(?! )[^<>]*?>/).getRegex();
var ue = /^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/;
var qe = k(ue, "u").replace(/punct/g, D).getRegex();
var ve = k(ue, "u").replace(/punct/g, le).getRegex();
var pe = "^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)";
var De = k(pe, "gu").replace(/notPunctSpace/g, ae).replace(/punctSpace/g, K).replace(/punct/g, D).getRegex();
var He = k(pe, "gu").replace(/notPunctSpace/g, Ee).replace(/punctSpace/g, Ie).replace(/punct/g, le).getRegex();
var Ze = k("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)", "gu").replace(/notPunctSpace/g, ae).replace(/punctSpace/g, K).replace(/punct/g, D).getRegex();
var Ge = k(/\\(punct)/, "gu").replace(/punct/g, D).getRegex();
var Ne = k(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme", /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email", /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex();
var Qe = k(j).replace("(?:-->|$)", "-->").getRegex();
var Fe = k("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment", Qe).replace("attribute", /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex();
var q = /(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+[^`]*?`+(?!`)|[^\[\]\\`])*?/;
var je = k(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/).replace("label", q).replace("href", /<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title", /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex();
var ce = k(/^!?\[(label)\]\[(ref)\]/).replace("label", q).replace("ref", F).getRegex();
var he = k(/^!?\[(ref)\](?:\[\])?/).replace("ref", F).getRegex();
var Ue = k("reflink|nolink(?!\\()", "g").replace("reflink", ce).replace("nolink", he).getRegex();
var ne = /[hH][tT][tT][pP][sS]?|[fF][tT][pP]/;
var W = {
  _backpedal: C,
  anyPunctuation: Ge,
  autolink: Ne,
  blockSkip: Be,
  br: oe,
  code: ze,
  del: C,
  emStrongLDelim: qe,
  emStrongRDelimAst: De,
  emStrongRDelimUnd: Ze,
  escape: Me,
  link: je,
  nolink: he,
  punctuation: Ce,
  reflink: ce,
  reflinkSearch: Ue,
  tag: Fe,
  text: Ae,
  url: C
};
var Ke = __spreadProps(__spreadValues({}, W), {
  link: k(/^!?\[(label)\]\((.*?)\)/).replace("label", q).getRegex(),
  reflink: k(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", q).getRegex()
});
var G = __spreadProps(__spreadValues({}, W), {
  emStrongRDelimAst: He,
  emStrongLDelim: ve,
  url: k(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace("protocol", ne).replace("email", /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),
  _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,
  del: /^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/,
  text: k(/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/).replace("protocol", ne).getRegex()
});
var We = __spreadProps(__spreadValues({}, G), {
  br: k(oe).replace("{2,}", "*").getRegex(),
  text: k(G.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex()
});
var E = {
  normal: U,
  gfm: _e,
  pedantic: Le
};
var M = {
  normal: W,
  gfm: G,
  breaks: We,
  pedantic: Ke
};
var Xe = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
};
var ke = (u3) => Xe[u3];
function w(u3, e) {
  if (e) {
    if (m.escapeTest.test(u3)) return u3.replace(m.escapeReplace, ke);
  } else if (m.escapeTestNoEncode.test(u3)) return u3.replace(m.escapeReplaceNoEncode, ke);
  return u3;
}
function X(u3) {
  try {
    u3 = encodeURI(u3).replace(m.percentDecode, "%");
  } catch {
    return null;
  }
  return u3;
}
function J(u3, e) {
  let t = u3.replace(m.findPipe, (i, s, a) => {
    let o = false, l = s;
    for (; --l >= 0 && a[l] === "\\"; ) o = !o;
    return o ? "|" : " |";
  }), n = t.split(m.splitPipe), r = 0;
  if (n[0].trim() || n.shift(), n.length > 0 && !n.at(-1)?.trim() && n.pop(), e) if (n.length > e) n.splice(e);
  else for (; n.length < e; ) n.push("");
  for (; r < n.length; r++) n[r] = n[r].trim().replace(m.slashPipe, "|");
  return n;
}
function z(u3, e, t) {
  let n = u3.length;
  if (n === 0) return "";
  let r = 0;
  for (; r < n; ) {
    let i = u3.charAt(n - r - 1);
    if (i === e && !t) r++;
    else if (i !== e && t) r++;
    else break;
  }
  return u3.slice(0, n - r);
}
function de(u3, e) {
  if (u3.indexOf(e[1]) === -1) return -1;
  let t = 0;
  for (let n = 0; n < u3.length; n++) if (u3[n] === "\\") n++;
  else if (u3[n] === e[0]) t++;
  else if (u3[n] === e[1] && (t--, t < 0)) return n;
  return t > 0 ? -2 : -1;
}
function ge(u3, e, t, n, r) {
  let i = e.href, s = e.title || null, a = u3[1].replace(r.other.outputLinkReplace, "$1");
  n.state.inLink = true;
  let o = {
    type: u3[0].charAt(0) === "!" ? "image" : "link",
    raw: t,
    href: i,
    title: s,
    text: a,
    tokens: n.inlineTokens(a)
  };
  return n.state.inLink = false, o;
}
function Je(u3, e, t) {
  let n = u3.match(t.other.indentCodeCompensation);
  if (n === null) return e;
  let r = n[1];
  return e.split(`
`).map((i) => {
    let s = i.match(t.other.beginningSpace);
    if (s === null) return i;
    let [a] = s;
    return a.length >= r.length ? i.slice(r.length) : i;
  }).join(`
`);
}
var y = class {
  options;
  rules;
  lexer;
  constructor(e) {
    this.options = e || T;
  }
  space(e) {
    let t = this.rules.block.newline.exec(e);
    if (t && t[0].length > 0) return {
      type: "space",
      raw: t[0]
    };
  }
  code(e) {
    let t = this.rules.block.code.exec(e);
    if (t) {
      let n = t[0].replace(this.rules.other.codeRemoveIndent, "");
      return {
        type: "code",
        raw: t[0],
        codeBlockStyle: "indented",
        text: this.options.pedantic ? n : z(n, `
`)
      };
    }
  }
  fences(e) {
    let t = this.rules.block.fences.exec(e);
    if (t) {
      let n = t[0], r = Je(n, t[3] || "", this.rules);
      return {
        type: "code",
        raw: n,
        lang: t[2] ? t[2].trim().replace(this.rules.inline.anyPunctuation, "$1") : t[2],
        text: r
      };
    }
  }
  heading(e) {
    let t = this.rules.block.heading.exec(e);
    if (t) {
      let n = t[2].trim();
      if (this.rules.other.endingHash.test(n)) {
        let r = z(n, "#");
        (this.options.pedantic || !r || this.rules.other.endingSpaceChar.test(r)) && (n = r.trim());
      }
      return {
        type: "heading",
        raw: t[0],
        depth: t[1].length,
        text: n,
        tokens: this.lexer.inline(n)
      };
    }
  }
  hr(e) {
    let t = this.rules.block.hr.exec(e);
    if (t) return {
      type: "hr",
      raw: z(t[0], `
`)
    };
  }
  blockquote(e) {
    let t = this.rules.block.blockquote.exec(e);
    if (t) {
      let n = z(t[0], `
`).split(`
`), r = "", i = "", s = [];
      for (; n.length > 0; ) {
        let a = false, o = [], l;
        for (l = 0; l < n.length; l++) if (this.rules.other.blockquoteStart.test(n[l])) o.push(n[l]), a = true;
        else if (!a) o.push(n[l]);
        else break;
        n = n.slice(l);
        let p = o.join(`
`), c = p.replace(this.rules.other.blockquoteSetextReplace, `
    $1`).replace(this.rules.other.blockquoteSetextReplace2, "");
        r = r ? `${r}
${p}` : p, i = i ? `${i}
${c}` : c;
        let g = this.lexer.state.top;
        if (this.lexer.state.top = true, this.lexer.blockTokens(c, s, true), this.lexer.state.top = g, n.length === 0) break;
        let h = s.at(-1);
        if (h?.type === "code") break;
        if (h?.type === "blockquote") {
          let R = h, f = R.raw + `
` + n.join(`
`), O = this.blockquote(f);
          s[s.length - 1] = O, r = r.substring(0, r.length - R.raw.length) + O.raw, i = i.substring(0, i.length - R.text.length) + O.text;
          break;
        } else if (h?.type === "list") {
          let R = h, f = R.raw + `
` + n.join(`
`), O = this.list(f);
          s[s.length - 1] = O, r = r.substring(0, r.length - h.raw.length) + O.raw, i = i.substring(0, i.length - R.raw.length) + O.raw, n = f.substring(s.at(-1).raw.length).split(`
`);
          continue;
        }
      }
      return {
        type: "blockquote",
        raw: r,
        tokens: s,
        text: i
      };
    }
  }
  list(e) {
    let t = this.rules.block.list.exec(e);
    if (t) {
      let n = t[1].trim(), r = n.length > 1, i = {
        type: "list",
        raw: "",
        ordered: r,
        start: r ? +n.slice(0, -1) : "",
        loose: false,
        items: []
      };
      n = r ? `\\d{1,9}\\${n.slice(-1)}` : `\\${n}`, this.options.pedantic && (n = r ? n : "[*+-]");
      let s = this.rules.other.listItemRegex(n), a = false;
      for (; e; ) {
        let l = false, p = "", c = "";
        if (!(t = s.exec(e)) || this.rules.block.hr.test(e)) break;
        p = t[0], e = e.substring(p.length);
        let g = t[2].split(`
`, 1)[0].replace(this.rules.other.listReplaceTabs, (O) => " ".repeat(3 * O.length)), h = e.split(`
`, 1)[0], R = !g.trim(), f = 0;
        if (this.options.pedantic ? (f = 2, c = g.trimStart()) : R ? f = t[1].length + 1 : (f = t[2].search(this.rules.other.nonSpaceChar), f = f > 4 ? 1 : f, c = g.slice(f), f += t[1].length), R && this.rules.other.blankLine.test(h) && (p += h + `
`, e = e.substring(h.length + 1), l = true), !l) {
          let O = this.rules.other.nextBulletRegex(f), V = this.rules.other.hrRegex(f), Y = this.rules.other.fencesBeginRegex(f), ee = this.rules.other.headingBeginRegex(f), fe = this.rules.other.htmlBeginRegex(f);
          for (; e; ) {
            let H = e.split(`
`, 1)[0], A;
            if (h = H, this.options.pedantic ? (h = h.replace(this.rules.other.listReplaceNesting, "  "), A = h) : A = h.replace(this.rules.other.tabCharGlobal, "    "), Y.test(h) || ee.test(h) || fe.test(h) || O.test(h) || V.test(h)) break;
            if (A.search(this.rules.other.nonSpaceChar) >= f || !h.trim()) c += `
` + A.slice(f);
            else {
              if (R || g.replace(this.rules.other.tabCharGlobal, "    ").search(this.rules.other.nonSpaceChar) >= 4 || Y.test(g) || ee.test(g) || V.test(g)) break;
              c += `
` + h;
            }
            !R && !h.trim() && (R = true), p += H + `
`, e = e.substring(H.length + 1), g = A.slice(f);
          }
        }
        i.loose || (a ? i.loose = true : this.rules.other.doubleBlankLine.test(p) && (a = true)), i.items.push({
          type: "list_item",
          raw: p,
          task: !!this.options.gfm && this.rules.other.listIsTask.test(c),
          loose: false,
          text: c,
          tokens: []
        }), i.raw += p;
      }
      let o = i.items.at(-1);
      if (o) o.raw = o.raw.trimEnd(), o.text = o.text.trimEnd();
      else return;
      i.raw = i.raw.trimEnd();
      for (let l of i.items) {
        if (this.lexer.state.top = false, l.tokens = this.lexer.blockTokens(l.text, []), l.task) {
          if (l.text = l.text.replace(this.rules.other.listReplaceTask, ""), l.tokens[0]?.type === "text" || l.tokens[0]?.type === "paragraph") {
            l.tokens[0].raw = l.tokens[0].raw.replace(this.rules.other.listReplaceTask, ""), l.tokens[0].text = l.tokens[0].text.replace(this.rules.other.listReplaceTask, "");
            for (let c = this.lexer.inlineQueue.length - 1; c >= 0; c--) if (this.rules.other.listIsTask.test(this.lexer.inlineQueue[c].src)) {
              this.lexer.inlineQueue[c].src = this.lexer.inlineQueue[c].src.replace(this.rules.other.listReplaceTask, "");
              break;
            }
          }
          let p = this.rules.other.listTaskCheckbox.exec(l.raw);
          if (p) {
            let c = {
              type: "checkbox",
              raw: p[0] + " ",
              checked: p[0] !== "[ ]"
            };
            l.checked = c.checked, i.loose ? l.tokens[0] && ["paragraph", "text"].includes(l.tokens[0].type) && "tokens" in l.tokens[0] && l.tokens[0].tokens ? (l.tokens[0].raw = c.raw + l.tokens[0].raw, l.tokens[0].text = c.raw + l.tokens[0].text, l.tokens[0].tokens.unshift(c)) : l.tokens.unshift({
              type: "paragraph",
              raw: c.raw,
              text: c.raw,
              tokens: [c]
            }) : l.tokens.unshift(c);
          }
        }
        if (!i.loose) {
          let p = l.tokens.filter((g) => g.type === "space"), c = p.length > 0 && p.some((g) => this.rules.other.anyLine.test(g.raw));
          i.loose = c;
        }
      }
      if (i.loose) for (let l of i.items) {
        l.loose = true;
        for (let p of l.tokens) p.type === "text" && (p.type = "paragraph");
      }
      return i;
    }
  }
  html(e) {
    let t = this.rules.block.html.exec(e);
    if (t) return {
      type: "html",
      block: true,
      raw: t[0],
      pre: t[1] === "pre" || t[1] === "script" || t[1] === "style",
      text: t[0]
    };
  }
  def(e) {
    let t = this.rules.block.def.exec(e);
    if (t) {
      let n = t[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal, " "), r = t[2] ? t[2].replace(this.rules.other.hrefBrackets, "$1").replace(this.rules.inline.anyPunctuation, "$1") : "", i = t[3] ? t[3].substring(1, t[3].length - 1).replace(this.rules.inline.anyPunctuation, "$1") : t[3];
      return {
        type: "def",
        tag: n,
        raw: t[0],
        href: r,
        title: i
      };
    }
  }
  table(e) {
    let t = this.rules.block.table.exec(e);
    if (!t || !this.rules.other.tableDelimiter.test(t[2])) return;
    let n = J(t[1]), r = t[2].replace(this.rules.other.tableAlignChars, "").split("|"), i = t[3]?.trim() ? t[3].replace(this.rules.other.tableRowBlankLine, "").split(`
`) : [], s = {
      type: "table",
      raw: t[0],
      header: [],
      align: [],
      rows: []
    };
    if (n.length === r.length) {
      for (let a of r) this.rules.other.tableAlignRight.test(a) ? s.align.push("right") : this.rules.other.tableAlignCenter.test(a) ? s.align.push("center") : this.rules.other.tableAlignLeft.test(a) ? s.align.push("left") : s.align.push(null);
      for (let a = 0; a < n.length; a++) s.header.push({
        text: n[a],
        tokens: this.lexer.inline(n[a]),
        header: true,
        align: s.align[a]
      });
      for (let a of i) s.rows.push(J(a, s.header.length).map((o, l) => ({
        text: o,
        tokens: this.lexer.inline(o),
        header: false,
        align: s.align[l]
      })));
      return s;
    }
  }
  lheading(e) {
    let t = this.rules.block.lheading.exec(e);
    if (t) return {
      type: "heading",
      raw: t[0],
      depth: t[2].charAt(0) === "=" ? 1 : 2,
      text: t[1],
      tokens: this.lexer.inline(t[1])
    };
  }
  paragraph(e) {
    let t = this.rules.block.paragraph.exec(e);
    if (t) {
      let n = t[1].charAt(t[1].length - 1) === `
` ? t[1].slice(0, -1) : t[1];
      return {
        type: "paragraph",
        raw: t[0],
        text: n,
        tokens: this.lexer.inline(n)
      };
    }
  }
  text(e) {
    let t = this.rules.block.text.exec(e);
    if (t) return {
      type: "text",
      raw: t[0],
      text: t[0],
      tokens: this.lexer.inline(t[0])
    };
  }
  escape(e) {
    let t = this.rules.inline.escape.exec(e);
    if (t) return {
      type: "escape",
      raw: t[0],
      text: t[1]
    };
  }
  tag(e) {
    let t = this.rules.inline.tag.exec(e);
    if (t) return !this.lexer.state.inLink && this.rules.other.startATag.test(t[0]) ? this.lexer.state.inLink = true : this.lexer.state.inLink && this.rules.other.endATag.test(t[0]) && (this.lexer.state.inLink = false), !this.lexer.state.inRawBlock && this.rules.other.startPreScriptTag.test(t[0]) ? this.lexer.state.inRawBlock = true : this.lexer.state.inRawBlock && this.rules.other.endPreScriptTag.test(t[0]) && (this.lexer.state.inRawBlock = false), {
      type: "html",
      raw: t[0],
      inLink: this.lexer.state.inLink,
      inRawBlock: this.lexer.state.inRawBlock,
      block: false,
      text: t[0]
    };
  }
  link(e) {
    let t = this.rules.inline.link.exec(e);
    if (t) {
      let n = t[2].trim();
      if (!this.options.pedantic && this.rules.other.startAngleBracket.test(n)) {
        if (!this.rules.other.endAngleBracket.test(n)) return;
        let s = z(n.slice(0, -1), "\\");
        if ((n.length - s.length) % 2 === 0) return;
      } else {
        let s = de(t[2], "()");
        if (s === -2) return;
        if (s > -1) {
          let o = (t[0].indexOf("!") === 0 ? 5 : 4) + t[1].length + s;
          t[2] = t[2].substring(0, s), t[0] = t[0].substring(0, o).trim(), t[3] = "";
        }
      }
      let r = t[2], i = "";
      if (this.options.pedantic) {
        let s = this.rules.other.pedanticHrefTitle.exec(r);
        s && (r = s[1], i = s[3]);
      } else i = t[3] ? t[3].slice(1, -1) : "";
      return r = r.trim(), this.rules.other.startAngleBracket.test(r) && (this.options.pedantic && !this.rules.other.endAngleBracket.test(n) ? r = r.slice(1) : r = r.slice(1, -1)), ge(t, {
        href: r && r.replace(this.rules.inline.anyPunctuation, "$1"),
        title: i && i.replace(this.rules.inline.anyPunctuation, "$1")
      }, t[0], this.lexer, this.rules);
    }
  }
  reflink(e, t) {
    let n;
    if ((n = this.rules.inline.reflink.exec(e)) || (n = this.rules.inline.nolink.exec(e))) {
      let r = (n[2] || n[1]).replace(this.rules.other.multipleSpaceGlobal, " "), i = t[r.toLowerCase()];
      if (!i) {
        let s = n[0].charAt(0);
        return {
          type: "text",
          raw: s,
          text: s
        };
      }
      return ge(n, i, n[0], this.lexer, this.rules);
    }
  }
  emStrong(e, t, n = "") {
    let r = this.rules.inline.emStrongLDelim.exec(e);
    if (!r || r[3] && n.match(this.rules.other.unicodeAlphaNumeric)) return;
    if (!(r[1] || r[2] || "") || !n || this.rules.inline.punctuation.exec(n)) {
      let s = [...r[0]].length - 1, a, o, l = s, p = 0, c = r[0][0] === "*" ? this.rules.inline.emStrongRDelimAst : this.rules.inline.emStrongRDelimUnd;
      for (c.lastIndex = 0, t = t.slice(-1 * e.length + s); (r = c.exec(t)) != null; ) {
        if (a = r[1] || r[2] || r[3] || r[4] || r[5] || r[6], !a) continue;
        if (o = [...a].length, r[3] || r[4]) {
          l += o;
          continue;
        } else if ((r[5] || r[6]) && s % 3 && !((s + o) % 3)) {
          p += o;
          continue;
        }
        if (l -= o, l > 0) continue;
        o = Math.min(o, o + l + p);
        let g = [...r[0]][0].length, h = e.slice(0, s + r.index + g + o);
        if (Math.min(s, o) % 2) {
          let f = h.slice(1, -1);
          return {
            type: "em",
            raw: h,
            text: f,
            tokens: this.lexer.inlineTokens(f)
          };
        }
        let R = h.slice(2, -2);
        return {
          type: "strong",
          raw: h,
          text: R,
          tokens: this.lexer.inlineTokens(R)
        };
      }
    }
  }
  codespan(e) {
    let t = this.rules.inline.code.exec(e);
    if (t) {
      let n = t[2].replace(this.rules.other.newLineCharGlobal, " "), r = this.rules.other.nonSpaceChar.test(n), i = this.rules.other.startingSpaceChar.test(n) && this.rules.other.endingSpaceChar.test(n);
      return r && i && (n = n.substring(1, n.length - 1)), {
        type: "codespan",
        raw: t[0],
        text: n
      };
    }
  }
  br(e) {
    let t = this.rules.inline.br.exec(e);
    if (t) return {
      type: "br",
      raw: t[0]
    };
  }
  del(e) {
    let t = this.rules.inline.del.exec(e);
    if (t) return {
      type: "del",
      raw: t[0],
      text: t[2],
      tokens: this.lexer.inlineTokens(t[2])
    };
  }
  autolink(e) {
    let t = this.rules.inline.autolink.exec(e);
    if (t) {
      let n, r;
      return t[2] === "@" ? (n = t[1], r = "mailto:" + n) : (n = t[1], r = n), {
        type: "link",
        raw: t[0],
        text: n,
        href: r,
        tokens: [{
          type: "text",
          raw: n,
          text: n
        }]
      };
    }
  }
  url(e) {
    let t;
    if (t = this.rules.inline.url.exec(e)) {
      let n, r;
      if (t[2] === "@") n = t[0], r = "mailto:" + n;
      else {
        let i;
        do
          i = t[0], t[0] = this.rules.inline._backpedal.exec(t[0])?.[0] ?? "";
        while (i !== t[0]);
        n = t[0], t[1] === "www." ? r = "http://" + t[0] : r = t[0];
      }
      return {
        type: "link",
        raw: t[0],
        text: n,
        href: r,
        tokens: [{
          type: "text",
          raw: n,
          text: n
        }]
      };
    }
  }
  inlineText(e) {
    let t = this.rules.inline.text.exec(e);
    if (t) {
      let n = this.lexer.state.inRawBlock;
      return {
        type: "text",
        raw: t[0],
        text: t[0],
        escaped: n
      };
    }
  }
};
var x = class u {
  tokens;
  options;
  state;
  inlineQueue;
  tokenizer;
  constructor(e) {
    this.tokens = [], this.tokens.links = /* @__PURE__ */ Object.create(null), this.options = e || T, this.options.tokenizer = this.options.tokenizer || new y(), this.tokenizer = this.options.tokenizer, this.tokenizer.options = this.options, this.tokenizer.lexer = this, this.inlineQueue = [], this.state = {
      inLink: false,
      inRawBlock: false,
      top: true
    };
    let t = {
      other: m,
      block: E.normal,
      inline: M.normal
    };
    this.options.pedantic ? (t.block = E.pedantic, t.inline = M.pedantic) : this.options.gfm && (t.block = E.gfm, this.options.breaks ? t.inline = M.breaks : t.inline = M.gfm), this.tokenizer.rules = t;
  }
  static get rules() {
    return {
      block: E,
      inline: M
    };
  }
  static lex(e, t) {
    return new u(t).lex(e);
  }
  static lexInline(e, t) {
    return new u(t).inlineTokens(e);
  }
  lex(e) {
    e = e.replace(m.carriageReturn, `
`), this.blockTokens(e, this.tokens);
    for (let t = 0; t < this.inlineQueue.length; t++) {
      let n = this.inlineQueue[t];
      this.inlineTokens(n.src, n.tokens);
    }
    return this.inlineQueue = [], this.tokens;
  }
  blockTokens(e, t = [], n = false) {
    for (this.options.pedantic && (e = e.replace(m.tabCharGlobal, "    ").replace(m.spaceLine, "")); e; ) {
      let r;
      if (this.options.extensions?.block?.some((s) => (r = s.call({
        lexer: this
      }, e, t)) ? (e = e.substring(r.raw.length), t.push(r), true) : false)) continue;
      if (r = this.tokenizer.space(e)) {
        e = e.substring(r.raw.length);
        let s = t.at(-1);
        r.raw.length === 1 && s !== void 0 ? s.raw += `
` : t.push(r);
        continue;
      }
      if (r = this.tokenizer.code(e)) {
        e = e.substring(r.raw.length);
        let s = t.at(-1);
        s?.type === "paragraph" || s?.type === "text" ? (s.raw += (s.raw.endsWith(`
`) ? "" : `
`) + r.raw, s.text += `
` + r.text, this.inlineQueue.at(-1).src = s.text) : t.push(r);
        continue;
      }
      if (r = this.tokenizer.fences(e)) {
        e = e.substring(r.raw.length), t.push(r);
        continue;
      }
      if (r = this.tokenizer.heading(e)) {
        e = e.substring(r.raw.length), t.push(r);
        continue;
      }
      if (r = this.tokenizer.hr(e)) {
        e = e.substring(r.raw.length), t.push(r);
        continue;
      }
      if (r = this.tokenizer.blockquote(e)) {
        e = e.substring(r.raw.length), t.push(r);
        continue;
      }
      if (r = this.tokenizer.list(e)) {
        e = e.substring(r.raw.length), t.push(r);
        continue;
      }
      if (r = this.tokenizer.html(e)) {
        e = e.substring(r.raw.length), t.push(r);
        continue;
      }
      if (r = this.tokenizer.def(e)) {
        e = e.substring(r.raw.length);
        let s = t.at(-1);
        s?.type === "paragraph" || s?.type === "text" ? (s.raw += (s.raw.endsWith(`
`) ? "" : `
`) + r.raw, s.text += `
` + r.raw, this.inlineQueue.at(-1).src = s.text) : this.tokens.links[r.tag] || (this.tokens.links[r.tag] = {
          href: r.href,
          title: r.title
        }, t.push(r));
        continue;
      }
      if (r = this.tokenizer.table(e)) {
        e = e.substring(r.raw.length), t.push(r);
        continue;
      }
      if (r = this.tokenizer.lheading(e)) {
        e = e.substring(r.raw.length), t.push(r);
        continue;
      }
      let i = e;
      if (this.options.extensions?.startBlock) {
        let s = 1 / 0, a = e.slice(1), o;
        this.options.extensions.startBlock.forEach((l) => {
          o = l.call({
            lexer: this
          }, a), typeof o == "number" && o >= 0 && (s = Math.min(s, o));
        }), s < 1 / 0 && s >= 0 && (i = e.substring(0, s + 1));
      }
      if (this.state.top && (r = this.tokenizer.paragraph(i))) {
        let s = t.at(-1);
        n && s?.type === "paragraph" ? (s.raw += (s.raw.endsWith(`
`) ? "" : `
`) + r.raw, s.text += `
` + r.text, this.inlineQueue.pop(), this.inlineQueue.at(-1).src = s.text) : t.push(r), n = i.length !== e.length, e = e.substring(r.raw.length);
        continue;
      }
      if (r = this.tokenizer.text(e)) {
        e = e.substring(r.raw.length);
        let s = t.at(-1);
        s?.type === "text" ? (s.raw += (s.raw.endsWith(`
`) ? "" : `
`) + r.raw, s.text += `
` + r.text, this.inlineQueue.pop(), this.inlineQueue.at(-1).src = s.text) : t.push(r);
        continue;
      }
      if (e) {
        let s = "Infinite loop on byte: " + e.charCodeAt(0);
        if (this.options.silent) {
          console.error(s);
          break;
        } else throw new Error(s);
      }
    }
    return this.state.top = true, t;
  }
  inline(e, t = []) {
    return this.inlineQueue.push({
      src: e,
      tokens: t
    }), t;
  }
  inlineTokens(e, t = []) {
    let n = e, r = null;
    if (this.tokens.links) {
      let o = Object.keys(this.tokens.links);
      if (o.length > 0) for (; (r = this.tokenizer.rules.inline.reflinkSearch.exec(n)) != null; ) o.includes(r[0].slice(r[0].lastIndexOf("[") + 1, -1)) && (n = n.slice(0, r.index) + "[" + "a".repeat(r[0].length - 2) + "]" + n.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex));
    }
    for (; (r = this.tokenizer.rules.inline.anyPunctuation.exec(n)) != null; ) n = n.slice(0, r.index) + "++" + n.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);
    let i;
    for (; (r = this.tokenizer.rules.inline.blockSkip.exec(n)) != null; ) i = r[2] ? r[2].length : 0, n = n.slice(0, r.index + i) + "[" + "a".repeat(r[0].length - i - 2) + "]" + n.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
    n = this.options.hooks?.emStrongMask?.call({
      lexer: this
    }, n) ?? n;
    let s = false, a = "";
    for (; e; ) {
      s || (a = ""), s = false;
      let o;
      if (this.options.extensions?.inline?.some((p) => (o = p.call({
        lexer: this
      }, e, t)) ? (e = e.substring(o.raw.length), t.push(o), true) : false)) continue;
      if (o = this.tokenizer.escape(e)) {
        e = e.substring(o.raw.length), t.push(o);
        continue;
      }
      if (o = this.tokenizer.tag(e)) {
        e = e.substring(o.raw.length), t.push(o);
        continue;
      }
      if (o = this.tokenizer.link(e)) {
        e = e.substring(o.raw.length), t.push(o);
        continue;
      }
      if (o = this.tokenizer.reflink(e, this.tokens.links)) {
        e = e.substring(o.raw.length);
        let p = t.at(-1);
        o.type === "text" && p?.type === "text" ? (p.raw += o.raw, p.text += o.text) : t.push(o);
        continue;
      }
      if (o = this.tokenizer.emStrong(e, n, a)) {
        e = e.substring(o.raw.length), t.push(o);
        continue;
      }
      if (o = this.tokenizer.codespan(e)) {
        e = e.substring(o.raw.length), t.push(o);
        continue;
      }
      if (o = this.tokenizer.br(e)) {
        e = e.substring(o.raw.length), t.push(o);
        continue;
      }
      if (o = this.tokenizer.del(e)) {
        e = e.substring(o.raw.length), t.push(o);
        continue;
      }
      if (o = this.tokenizer.autolink(e)) {
        e = e.substring(o.raw.length), t.push(o);
        continue;
      }
      if (!this.state.inLink && (o = this.tokenizer.url(e))) {
        e = e.substring(o.raw.length), t.push(o);
        continue;
      }
      let l = e;
      if (this.options.extensions?.startInline) {
        let p = 1 / 0, c = e.slice(1), g;
        this.options.extensions.startInline.forEach((h) => {
          g = h.call({
            lexer: this
          }, c), typeof g == "number" && g >= 0 && (p = Math.min(p, g));
        }), p < 1 / 0 && p >= 0 && (l = e.substring(0, p + 1));
      }
      if (o = this.tokenizer.inlineText(l)) {
        e = e.substring(o.raw.length), o.raw.slice(-1) !== "_" && (a = o.raw.slice(-1)), s = true;
        let p = t.at(-1);
        p?.type === "text" ? (p.raw += o.raw, p.text += o.text) : t.push(o);
        continue;
      }
      if (e) {
        let p = "Infinite loop on byte: " + e.charCodeAt(0);
        if (this.options.silent) {
          console.error(p);
          break;
        } else throw new Error(p);
      }
    }
    return t;
  }
};
var P = class {
  options;
  parser;
  constructor(e) {
    this.options = e || T;
  }
  space(e) {
    return "";
  }
  code({
    text: e,
    lang: t,
    escaped: n
  }) {
    let r = (t || "").match(m.notSpaceStart)?.[0], i = e.replace(m.endingNewline, "") + `
`;
    return r ? '<pre><code class="language-' + w(r) + '">' + (n ? i : w(i, true)) + `</code></pre>
` : "<pre><code>" + (n ? i : w(i, true)) + `</code></pre>
`;
  }
  blockquote({
    tokens: e
  }) {
    return `<blockquote>
${this.parser.parse(e)}</blockquote>
`;
  }
  html({
    text: e
  }) {
    return e;
  }
  def(e) {
    return "";
  }
  heading({
    tokens: e,
    depth: t
  }) {
    return `<h${t}>${this.parser.parseInline(e)}</h${t}>
`;
  }
  hr(e) {
    return `<hr>
`;
  }
  list(e) {
    let t = e.ordered, n = e.start, r = "";
    for (let a = 0; a < e.items.length; a++) {
      let o = e.items[a];
      r += this.listitem(o);
    }
    let i = t ? "ol" : "ul", s = t && n !== 1 ? ' start="' + n + '"' : "";
    return "<" + i + s + `>
` + r + "</" + i + `>
`;
  }
  listitem(e) {
    return `<li>${this.parser.parse(e.tokens)}</li>
`;
  }
  checkbox({
    checked: e
  }) {
    return "<input " + (e ? 'checked="" ' : "") + 'disabled="" type="checkbox"> ';
  }
  paragraph({
    tokens: e
  }) {
    return `<p>${this.parser.parseInline(e)}</p>
`;
  }
  table(e) {
    let t = "", n = "";
    for (let i = 0; i < e.header.length; i++) n += this.tablecell(e.header[i]);
    t += this.tablerow({
      text: n
    });
    let r = "";
    for (let i = 0; i < e.rows.length; i++) {
      let s = e.rows[i];
      n = "";
      for (let a = 0; a < s.length; a++) n += this.tablecell(s[a]);
      r += this.tablerow({
        text: n
      });
    }
    return r && (r = `<tbody>${r}</tbody>`), `<table>
<thead>
` + t + `</thead>
` + r + `</table>
`;
  }
  tablerow({
    text: e
  }) {
    return `<tr>
${e}</tr>
`;
  }
  tablecell(e) {
    let t = this.parser.parseInline(e.tokens), n = e.header ? "th" : "td";
    return (e.align ? `<${n} align="${e.align}">` : `<${n}>`) + t + `</${n}>
`;
  }
  strong({
    tokens: e
  }) {
    return `<strong>${this.parser.parseInline(e)}</strong>`;
  }
  em({
    tokens: e
  }) {
    return `<em>${this.parser.parseInline(e)}</em>`;
  }
  codespan({
    text: e
  }) {
    return `<code>${w(e, true)}</code>`;
  }
  br(e) {
    return "<br>";
  }
  del({
    tokens: e
  }) {
    return `<del>${this.parser.parseInline(e)}</del>`;
  }
  link({
    href: e,
    title: t,
    tokens: n
  }) {
    let r = this.parser.parseInline(n), i = X(e);
    if (i === null) return r;
    e = i;
    let s = '<a href="' + e + '"';
    return t && (s += ' title="' + w(t) + '"'), s += ">" + r + "</a>", s;
  }
  image({
    href: e,
    title: t,
    text: n,
    tokens: r
  }) {
    r && (n = this.parser.parseInline(r, this.parser.textRenderer));
    let i = X(e);
    if (i === null) return w(n);
    e = i;
    let s = `<img src="${e}" alt="${n}"`;
    return t && (s += ` title="${w(t)}"`), s += ">", s;
  }
  text(e) {
    return "tokens" in e && e.tokens ? this.parser.parseInline(e.tokens) : "escaped" in e && e.escaped ? e.text : w(e.text);
  }
};
var $ = class {
  strong({
    text: e
  }) {
    return e;
  }
  em({
    text: e
  }) {
    return e;
  }
  codespan({
    text: e
  }) {
    return e;
  }
  del({
    text: e
  }) {
    return e;
  }
  html({
    text: e
  }) {
    return e;
  }
  text({
    text: e
  }) {
    return e;
  }
  link({
    text: e
  }) {
    return "" + e;
  }
  image({
    text: e
  }) {
    return "" + e;
  }
  br() {
    return "";
  }
  checkbox({
    raw: e
  }) {
    return e;
  }
};
var b = class u2 {
  options;
  renderer;
  textRenderer;
  constructor(e) {
    this.options = e || T, this.options.renderer = this.options.renderer || new P(), this.renderer = this.options.renderer, this.renderer.options = this.options, this.renderer.parser = this, this.textRenderer = new $();
  }
  static parse(e, t) {
    return new u2(t).parse(e);
  }
  static parseInline(e, t) {
    return new u2(t).parseInline(e);
  }
  parse(e) {
    let t = "";
    for (let n = 0; n < e.length; n++) {
      let r = e[n];
      if (this.options.extensions?.renderers?.[r.type]) {
        let s = r, a = this.options.extensions.renderers[s.type].call({
          parser: this
        }, s);
        if (a !== false || !["space", "hr", "heading", "code", "table", "blockquote", "list", "html", "def", "paragraph", "text"].includes(s.type)) {
          t += a || "";
          continue;
        }
      }
      let i = r;
      switch (i.type) {
        case "space": {
          t += this.renderer.space(i);
          break;
        }
        case "hr": {
          t += this.renderer.hr(i);
          break;
        }
        case "heading": {
          t += this.renderer.heading(i);
          break;
        }
        case "code": {
          t += this.renderer.code(i);
          break;
        }
        case "table": {
          t += this.renderer.table(i);
          break;
        }
        case "blockquote": {
          t += this.renderer.blockquote(i);
          break;
        }
        case "list": {
          t += this.renderer.list(i);
          break;
        }
        case "checkbox": {
          t += this.renderer.checkbox(i);
          break;
        }
        case "html": {
          t += this.renderer.html(i);
          break;
        }
        case "def": {
          t += this.renderer.def(i);
          break;
        }
        case "paragraph": {
          t += this.renderer.paragraph(i);
          break;
        }
        case "text": {
          t += this.renderer.text(i);
          break;
        }
        default: {
          let s = 'Token with "' + i.type + '" type was not found.';
          if (this.options.silent) return console.error(s), "";
          throw new Error(s);
        }
      }
    }
    return t;
  }
  parseInline(e, t = this.renderer) {
    let n = "";
    for (let r = 0; r < e.length; r++) {
      let i = e[r];
      if (this.options.extensions?.renderers?.[i.type]) {
        let a = this.options.extensions.renderers[i.type].call({
          parser: this
        }, i);
        if (a !== false || !["escape", "html", "link", "image", "strong", "em", "codespan", "br", "del", "text"].includes(i.type)) {
          n += a || "";
          continue;
        }
      }
      let s = i;
      switch (s.type) {
        case "escape": {
          n += t.text(s);
          break;
        }
        case "html": {
          n += t.html(s);
          break;
        }
        case "link": {
          n += t.link(s);
          break;
        }
        case "image": {
          n += t.image(s);
          break;
        }
        case "checkbox": {
          n += t.checkbox(s);
          break;
        }
        case "strong": {
          n += t.strong(s);
          break;
        }
        case "em": {
          n += t.em(s);
          break;
        }
        case "codespan": {
          n += t.codespan(s);
          break;
        }
        case "br": {
          n += t.br(s);
          break;
        }
        case "del": {
          n += t.del(s);
          break;
        }
        case "text": {
          n += t.text(s);
          break;
        }
        default: {
          let a = 'Token with "' + s.type + '" type was not found.';
          if (this.options.silent) return console.error(a), "";
          throw new Error(a);
        }
      }
    }
    return n;
  }
};
var S = class {
  options;
  block;
  constructor(e) {
    this.options = e || T;
  }
  static passThroughHooks = /* @__PURE__ */ new Set(["preprocess", "postprocess", "processAllTokens", "emStrongMask"]);
  static passThroughHooksRespectAsync = /* @__PURE__ */ new Set(["preprocess", "postprocess", "processAllTokens"]);
  preprocess(e) {
    return e;
  }
  postprocess(e) {
    return e;
  }
  processAllTokens(e) {
    return e;
  }
  emStrongMask(e) {
    return e;
  }
  provideLexer() {
    return this.block ? x.lex : x.lexInline;
  }
  provideParser() {
    return this.block ? b.parse : b.parseInline;
  }
};
var B = class {
  defaults = L();
  options = this.setOptions;
  parse = this.parseMarkdown(true);
  parseInline = this.parseMarkdown(false);
  Parser = b;
  Renderer = P;
  TextRenderer = $;
  Lexer = x;
  Tokenizer = y;
  Hooks = S;
  constructor(...e) {
    this.use(...e);
  }
  walkTokens(e, t) {
    let n = [];
    for (let r of e) switch (n = n.concat(t.call(this, r)), r.type) {
      case "table": {
        let i = r;
        for (let s of i.header) n = n.concat(this.walkTokens(s.tokens, t));
        for (let s of i.rows) for (let a of s) n = n.concat(this.walkTokens(a.tokens, t));
        break;
      }
      case "list": {
        let i = r;
        n = n.concat(this.walkTokens(i.items, t));
        break;
      }
      default: {
        let i = r;
        this.defaults.extensions?.childTokens?.[i.type] ? this.defaults.extensions.childTokens[i.type].forEach((s) => {
          let a = i[s].flat(1 / 0);
          n = n.concat(this.walkTokens(a, t));
        }) : i.tokens && (n = n.concat(this.walkTokens(i.tokens, t)));
      }
    }
    return n;
  }
  use(...e) {
    let t = this.defaults.extensions || {
      renderers: {},
      childTokens: {}
    };
    return e.forEach((n) => {
      let r = __spreadValues({}, n);
      if (r.async = this.defaults.async || r.async || false, n.extensions && (n.extensions.forEach((i) => {
        if (!i.name) throw new Error("extension name required");
        if ("renderer" in i) {
          let s = t.renderers[i.name];
          s ? t.renderers[i.name] = function(...a) {
            let o = i.renderer.apply(this, a);
            return o === false && (o = s.apply(this, a)), o;
          } : t.renderers[i.name] = i.renderer;
        }
        if ("tokenizer" in i) {
          if (!i.level || i.level !== "block" && i.level !== "inline") throw new Error("extension level must be 'block' or 'inline'");
          let s = t[i.level];
          s ? s.unshift(i.tokenizer) : t[i.level] = [i.tokenizer], i.start && (i.level === "block" ? t.startBlock ? t.startBlock.push(i.start) : t.startBlock = [i.start] : i.level === "inline" && (t.startInline ? t.startInline.push(i.start) : t.startInline = [i.start]));
        }
        "childTokens" in i && i.childTokens && (t.childTokens[i.name] = i.childTokens);
      }), r.extensions = t), n.renderer) {
        let i = this.defaults.renderer || new P(this.defaults);
        for (let s in n.renderer) {
          if (!(s in i)) throw new Error(`renderer '${s}' does not exist`);
          if (["options", "parser"].includes(s)) continue;
          let a = s, o = n.renderer[a], l = i[a];
          i[a] = (...p) => {
            let c = o.apply(i, p);
            return c === false && (c = l.apply(i, p)), c || "";
          };
        }
        r.renderer = i;
      }
      if (n.tokenizer) {
        let i = this.defaults.tokenizer || new y(this.defaults);
        for (let s in n.tokenizer) {
          if (!(s in i)) throw new Error(`tokenizer '${s}' does not exist`);
          if (["options", "rules", "lexer"].includes(s)) continue;
          let a = s, o = n.tokenizer[a], l = i[a];
          i[a] = (...p) => {
            let c = o.apply(i, p);
            return c === false && (c = l.apply(i, p)), c;
          };
        }
        r.tokenizer = i;
      }
      if (n.hooks) {
        let i = this.defaults.hooks || new S();
        for (let s in n.hooks) {
          if (!(s in i)) throw new Error(`hook '${s}' does not exist`);
          if (["options", "block"].includes(s)) continue;
          let a = s, o = n.hooks[a], l = i[a];
          S.passThroughHooks.has(s) ? i[a] = (p) => {
            if (this.defaults.async && S.passThroughHooksRespectAsync.has(s)) return (() => __async(this, null, function* () {
              let g = yield o.call(i, p);
              return l.call(i, g);
            }))();
            let c = o.call(i, p);
            return l.call(i, c);
          } : i[a] = (...p) => {
            if (this.defaults.async) return (() => __async(this, null, function* () {
              let g = yield o.apply(i, p);
              return g === false && (g = yield l.apply(i, p)), g;
            }))();
            let c = o.apply(i, p);
            return c === false && (c = l.apply(i, p)), c;
          };
        }
        r.hooks = i;
      }
      if (n.walkTokens) {
        let i = this.defaults.walkTokens, s = n.walkTokens;
        r.walkTokens = function(a) {
          let o = [];
          return o.push(s.call(this, a)), i && (o = o.concat(i.call(this, a))), o;
        };
      }
      this.defaults = __spreadValues(__spreadValues({}, this.defaults), r);
    }), this;
  }
  setOptions(e) {
    return this.defaults = __spreadValues(__spreadValues({}, this.defaults), e), this;
  }
  lexer(e, t) {
    return x.lex(e, t ?? this.defaults);
  }
  parser(e, t) {
    return b.parse(e, t ?? this.defaults);
  }
  parseMarkdown(e) {
    return (n, r) => {
      let i = __spreadValues({}, r), s = __spreadValues(__spreadValues({}, this.defaults), i), a = this.onError(!!s.silent, !!s.async);
      if (this.defaults.async === true && i.async === false) return a(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));
      if (typeof n > "u" || n === null) return a(new Error("marked(): input parameter is undefined or null"));
      if (typeof n != "string") return a(new Error("marked(): input parameter is of type " + Object.prototype.toString.call(n) + ", string expected"));
      if (s.hooks && (s.hooks.options = s, s.hooks.block = e), s.async) return (() => __async(this, null, function* () {
        let o = s.hooks ? yield s.hooks.preprocess(n) : n, p = yield (s.hooks ? yield s.hooks.provideLexer() : e ? x.lex : x.lexInline)(o, s), c = s.hooks ? yield s.hooks.processAllTokens(p) : p;
        s.walkTokens && (yield Promise.all(this.walkTokens(c, s.walkTokens)));
        let h = yield (s.hooks ? yield s.hooks.provideParser() : e ? b.parse : b.parseInline)(c, s);
        return s.hooks ? yield s.hooks.postprocess(h) : h;
      }))().catch(a);
      try {
        s.hooks && (n = s.hooks.preprocess(n));
        let l = (s.hooks ? s.hooks.provideLexer() : e ? x.lex : x.lexInline)(n, s);
        s.hooks && (l = s.hooks.processAllTokens(l)), s.walkTokens && this.walkTokens(l, s.walkTokens);
        let c = (s.hooks ? s.hooks.provideParser() : e ? b.parse : b.parseInline)(l, s);
        return s.hooks && (c = s.hooks.postprocess(c)), c;
      } catch (o) {
        return a(o);
      }
    };
  }
  onError(e, t) {
    return (n) => {
      if (n.message += `
Please report this to https://github.com/markedjs/marked.`, e) {
        let r = "<p>An error occurred:</p><pre>" + w(n.message + "", true) + "</pre>";
        return t ? Promise.resolve(r) : r;
      }
      if (t) return Promise.reject(n);
      throw n;
    };
  }
};
var _ = new B();
function d(u3, e) {
  return _.parse(u3, e);
}
d.options = d.setOptions = function(u3) {
  return _.setOptions(u3), d.defaults = _.defaults, Z(d.defaults), d;
};
d.getDefaults = L;
d.defaults = T;
d.use = function(...u3) {
  return _.use(...u3), d.defaults = _.defaults, Z(d.defaults), d;
};
d.walkTokens = function(u3, e) {
  return _.walkTokens(u3, e);
};
d.parseInline = _.parseInline;
d.Parser = b;
d.parser = b.parse;
d.Renderer = P;
d.TextRenderer = $;
d.Lexer = x;
d.lexer = x.lex;
d.Tokenizer = y;
d.Hooks = S;
d.parse = d;
var Dt = d.options;
var Ht = d.setOptions;
var Zt = d.use;
var Gt = d.walkTokens;
var Nt = d.parseInline;
var Ft = b.parse;
var jt = x.lex;

// src/app/shared/pipes/markdown.pipe.ts
var MarkdownPipe = class _MarkdownPipe {
  constructor(sanitizer) {
    this.sanitizer = sanitizer;
  }
  transform(value) {
    if (!value)
      return "";
    const html = d.parse(value);
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }
  static {
    this.\u0275fac = function MarkdownPipe_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MarkdownPipe)(\u0275\u0275directiveInject(DomSanitizer, 16));
    };
  }
  static {
    this.\u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({ name: "markdown", type: _MarkdownPipe, pure: true });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MarkdownPipe, [{
    type: Pipe,
    args: [{
      name: "markdown",
      standalone: true
    }]
  }], () => [{ type: DomSanitizer }], null);
})();

// src/app/modules/chat/agent-erc8004/agent-erc8004.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function AgentErc8004Component_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275element(1, "div", 2);
    \u0275\u0275elementEnd();
  }
}
function AgentErc8004Component_Conditional_2_For_42_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30)(1, "a", 31)(2, "mat-icon", 23);
    \u0275\u0275text(3, "receipt_long");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 32);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "slice");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "mat-icon", 33);
    \u0275\u0275text(8, "open_in_new");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const feedback_r1 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("href", ctx_r1.snowtraceUrl + "/tx/" + feedback_r1.paymentProof, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("Tx: ", \u0275\u0275pipeBind3(6, 2, feedback_r1.paymentProof, 0, 8), "...");
  }
}
function AgentErc8004Component_Conditional_2_For_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18)(1, "div", 20)(2, "div", 21)(3, "div", 22)(4, "mat-icon", 23);
    \u0275\u0275text(5, "person");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "span", 24);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "slice");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 25);
    \u0275\u0275text(10, "\u2022");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 25);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 26)(15, "mat-icon", 27);
    \u0275\u0275text(16, "star");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span", 28);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "p", 29);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275template(21, AgentErc8004Component_Conditional_2_For_42_Conditional_21_Template, 9, 6, "div", 30);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const feedback_r1 = ctx.$implicit;
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind3(8, 5, feedback_r1.client, 0, 6), "... ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(13, 9, "chat.agentInfo.verifiedClient"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(feedback_r1.rating);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(' "', feedback_r1.comment, '" ');
    \u0275\u0275advance();
    \u0275\u0275conditional(feedback_r1.paymentProof ? 21 : -1);
  }
}
function AgentErc8004Component_Conditional_2_ForEmpty_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "chat.agentInfo.noReviews"), " ");
  }
}
function AgentErc8004Component_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 4);
    \u0275\u0275text(2, " \u{1F916} ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div")(4, "h3", 5);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 6);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "div", 7)(9, "div", 8)(10, "div", 9);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 10);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 11)(16, "div", 9);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 10);
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 11)(22, "div", 9);
    \u0275\u0275text(23);
    \u0275\u0275pipe(24, "transloco");
    \u0275\u0275pipe(25, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 10);
    \u0275\u0275text(27);
    \u0275\u0275pipe(28, "transloco");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(29, "div", 12);
    \u0275\u0275text(30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "a", 13);
    \u0275\u0275text(32);
    \u0275\u0275pipe(33, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "div", 14)(35, "h4", 15);
    \u0275\u0275text(36);
    \u0275\u0275pipe(37, "transloco");
    \u0275\u0275elementStart(38, "span", 16);
    \u0275\u0275text(39);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(40, "div", 17);
    \u0275\u0275repeaterCreate(41, AgentErc8004Component_Conditional_2_For_42_Template, 22, 11, "div", 18, _forTrack0, false, AgentErc8004Component_Conditional_2_ForEmpty_43_Template, 3, 3, "div", 19);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r1.agentInfo.identity.name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.agentInfo.identity.description);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", (ctx_r1.agentInfo.reputation.averageRating == null ? null : ctx_r1.agentInfo.reputation.averageRating.toFixed(1)) || "0.0", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(14, 14, "chat.agentInfo.rating"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r1.agentInfo.reputation.totalFeedbacks || 0, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(20, 16, "chat.agentInfo.reviews"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r1.agentInfo.identity.active ? \u0275\u0275pipeBind1(24, 18, "chat.agentInfo.on") : \u0275\u0275pipeBind1(25, 20, "chat.agentInfo.off"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(28, 22, "chat.agentInfo.status"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.agentInfo.identity.agentAddress, " ");
    \u0275\u0275advance();
    \u0275\u0275property("href", ctx_r1.snowtraceUrl + "/token/0x7c6a168455C94092f8d51aBC515B73f4Ed9813a6?a=1", \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(33, 24, "chat.agentInfo.viewSnowtrace"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(37, 26, "chat.agentInfo.recentReviews"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.agentInfo.reputation.totalFeedbacks, " ");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.sortedFeedbacks);
  }
}
var AgentErc8004Component = class _AgentErc8004Component {
  constructor() {
    this.agentInfo = null;
  }
  get sortedFeedbacks() {
    return this.agentInfo?.feedbacks ? [...this.agentInfo.feedbacks].reverse().slice(0, 10) : [];
  }
  /**
   * Get the appropriate Snowtrace URL based on environment
   */
  get snowtraceUrl() {
    if (environment.isTestnet !== void 0) {
      return environment.isTestnet ? "https://testnet.snowtrace.io" : "https://snowtrace.io";
    }
    if (environment.chainId) {
      return environment.chainId === 43113 ? "https://testnet.snowtrace.io" : "https://snowtrace.io";
    }
    const rpcUrl = environment.rpcUrl || "";
    const isTestnet = rpcUrl.includes("test") || rpcUrl.includes("fuji") || rpcUrl.includes("43113");
    return isTestnet ? "https://testnet.snowtrace.io" : "https://snowtrace.io";
  }
  static {
    this.\u0275fac = function AgentErc8004Component_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AgentErc8004Component)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AgentErc8004Component, selectors: [["app-agent-erc8004"]], inputs: { agentInfo: "agentInfo" }, decls: 3, vars: 1, consts: [[1, "space-y-4"], [1, "flex", "justify-center", "p-4"], [1, "w-6", "h-6", "border-2", "border-blue-500", "border-t-transparent", "rounded-full", "animate-spin"], [1, "flex", "items-start", "gap-4"], [1, "w-16", "h-16", "rounded-full", "bg-slate-100", "flex", "items-center", "justify-center", "text-2xl"], [1, "font-bold", "text-lg", "dark:text-white"], [1, "text-sm", "text-slate-500"], [1, "grid", "grid-cols-3", "gap-2", "bg-slate-50", "dark:bg-slate-800", "p-3", "rounded-lg"], [1, "text-center"], [1, "font-bold", "text-xl", "dark:text-white"], [1, "text-[10px]", "text-slate-500", "uppercase"], [1, "text-center", "border-l", "border-slate-200", "dark:border-slate-700"], [1, "p-3", "bg-slate-50", "dark:bg-slate-800", "rounded-lg", "text-xs", "font-mono", "break-all", "text-slate-600", "dark:text-slate-300"], ["target", "_blank", 1, "block", "text-center", "text-sm", "text-blue-600", "hover:underline", 3, "href"], [1, "pt-2", "border-t", "border-slate-100", "dark:border-slate-800", "mt-2"], [1, "text-sm", "font-semibold", "text-slate-900", "dark:text-white", "mb-4", "flex", "items-center", "gap-2"], [1, "px-2", "py-0.5", "rounded-full", "bg-slate-100", "dark:bg-slate-800", "text-xs", "text-slate-500", "font-normal", "border", "border-slate-200", "dark:border-slate-700"], [1, "flex", "flex-col", "gap-3"], [1, "group", "p-4", "bg-white", "dark:bg-slate-800/50", "border", "border-slate-200", "dark:border-slate-700", "hover:border-slate-300", "dark:hover:border-slate-600", "rounded-xl", "transition-all", "shadow-sm", "hover:shadow-md"], [1, "text-center", "py-6", "text-slate-400", "text-sm", "bg-slate-50", "dark:bg-slate-800/50", "rounded-xl", "border", "border-dashed", "border-slate-200", "dark:border-slate-700"], [1, "flex", "items-start", "justify-between", "mb-2"], [1, "flex", "items-center", "gap-2"], [1, "w-6", "h-6", "rounded-full", "bg-slate-100", "dark:bg-slate-700", "flex", "items-center", "justify-center", "text-[10px]", "font-bold", "text-slate-500", "dark:text-slate-400"], [1, "!w-3", "!h-3", "!text-[12px]"], [1, "text-xs", "font-semibold", "text-slate-700", "dark:text-slate-200", "font-mono"], [1, "text-[10px]", "text-slate-400"], [1, "flex", "items-center", "gap-1", "bg-yellow-50", "dark:bg-yellow-900/20", "px-2", "py-1", "rounded-md", "border", "border-yellow-100", "dark:border-yellow-900/30"], [1, "!w-3", "!h-3", "!text-[12px]", "text-yellow-600", "dark:text-yellow-500"], [1, "text-xs", "font-bold", "text-yellow-700", "dark:text-yellow-500"], [1, "text-sm", "text-slate-600", "dark:text-slate-300", "leading-relaxed", "mb-3", "pl-8"], [1, "pl-8", "flex", "items-center", "gap-2"], ["target", "_blank", 1, "inline-flex", "items-center", "gap-1.5", "px-2.5", "py-1", "rounded-md", "bg-slate-50", "dark:bg-slate-900", "text-[10px]", "font-medium", "text-slate-500", "hover:text-blue-600", "hover:bg-blue-50", "dark:hover:bg-blue-900/20", "transition-colors", "border", "border-slate-100", "dark:border-slate-800", 3, "href"], [1, "font-mono"], [1, "!w-2.5", "!h-2.5", "!text-[10px]", "opacity-50"]], template: function AgentErc8004Component_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275template(1, AgentErc8004Component_Conditional_1_Template, 2, 0, "div", 1)(2, AgentErc8004Component_Conditional_2_Template, 44, 28);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.agentInfo ? 1 : 2);
      }
    }, dependencies: [CommonModule, SlicePipe, MatIconModule, MatIcon, TranslocoModule, TranslocoPipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AgentErc8004Component, [{
    type: Component,
    args: [{ selector: "app-agent-erc8004", standalone: true, imports: [CommonModule, MatIconModule, TranslocoModule], template: `<div class="space-y-4">
  @if (!agentInfo) {
    <div class="flex justify-center p-4">
      <div
        class="w-6 h-6 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"
      ></div>
    </div>
  } @else {
    <div class="flex items-start gap-4">
      <div class="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center text-2xl">
        \u{1F916}
      </div>
      <div>
        <h3 class="font-bold text-lg dark:text-white">
          {{ agentInfo.identity.name }}
        </h3>
        <p class="text-sm text-slate-500">{{ agentInfo.identity.description }}</p>
      </div>
    </div>
    <!-- Stats -->
    <div class="grid grid-cols-3 gap-2 bg-slate-50 dark:bg-slate-800 p-3 rounded-lg">
      <div class="text-center">
        <div class="font-bold text-xl dark:text-white">
          {{ agentInfo.reputation.averageRating?.toFixed(1) || '0.0' }}
        </div>
        <div class="text-[10px] text-slate-500 uppercase">
          {{ 'chat.agentInfo.rating' | transloco }}
        </div>
      </div>
      <div class="text-center border-l border-slate-200 dark:border-slate-700">
        <div class="font-bold text-xl dark:text-white">
          {{ agentInfo.reputation.totalFeedbacks || 0 }}
        </div>
        <div class="text-[10px] text-slate-500 uppercase">
          {{ 'chat.agentInfo.reviews' | transloco }}
        </div>
      </div>
      <div class="text-center border-l border-slate-200 dark:border-slate-700">
        <div class="font-bold text-xl dark:text-white">
          {{
            agentInfo.identity.active
              ? ('chat.agentInfo.on' | transloco)
              : ('chat.agentInfo.off' | transloco)
          }}
        </div>
        <div class="text-[10px] text-slate-500 uppercase">
          {{ 'chat.agentInfo.status' | transloco }}
        </div>
      </div>
    </div>
    <!-- Address -->
    <div
      class="p-3 bg-slate-50 dark:bg-slate-800 rounded-lg text-xs font-mono break-all text-slate-600 dark:text-slate-300"
    >
      {{ agentInfo.identity.agentAddress }}
    </div>

    <!-- Link -->
    <a
      [href]="snowtraceUrl + '/token/0x7c6a168455C94092f8d51aBC515B73f4Ed9813a6?a=1'"
      target="_blank"
      class="block text-center text-sm text-blue-600 hover:underline"
    >
      {{ 'chat.agentInfo.viewSnowtrace' | transloco }}
    </a>

    <!-- Reviews -->
    <div class="pt-2 border-t border-slate-100 dark:border-slate-800 mt-2">
      <h4 class="text-sm font-semibold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
        {{ 'chat.agentInfo.recentReviews' | transloco }}
        <span
          class="px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-xs text-slate-500 font-normal border border-slate-200 dark:border-slate-700"
        >
          {{ agentInfo.reputation.totalFeedbacks }}
        </span>
      </h4>

      <div class="flex flex-col gap-3">
        @for (feedback of sortedFeedbacks; track feedback.id) {
          <div
            class="group p-4 bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 rounded-xl transition-all shadow-sm hover:shadow-md"
          >
            <!-- Header: User & Rating -->
            <div class="flex items-start justify-between mb-2">
              <div class="flex items-center gap-2">
                <div
                  class="w-6 h-6 rounded-full bg-slate-100 dark:bg-slate-700 flex items-center justify-center text-[10px] font-bold text-slate-500 dark:text-slate-400"
                >
                  <mat-icon class="!w-3 !h-3 !text-[12px]">person</mat-icon>
                </div>
                <span class="text-xs font-semibold text-slate-700 dark:text-slate-200 font-mono">
                  {{ feedback.client | slice: 0 : 6 }}...
                </span>
                <span class="text-[10px] text-slate-400">\u2022</span>
                <span class="text-[10px] text-slate-400">{{
                  'chat.agentInfo.verifiedClient' | transloco
                }}</span>
              </div>

              <div
                class="flex items-center gap-1 bg-yellow-50 dark:bg-yellow-900/20 px-2 py-1 rounded-md border border-yellow-100 dark:border-yellow-900/30"
              >
                <mat-icon class="!w-3 !h-3 !text-[12px] text-yellow-600 dark:text-yellow-500"
                  >star</mat-icon
                >
                <span class="text-xs font-bold text-yellow-700 dark:text-yellow-500">{{
                  feedback.rating
                }}</span>
              </div>
            </div>

            <!-- Comment -->
            <p class="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-3 pl-8">
              "{{ feedback.comment }}"
            </p>

            <!-- Metadata / Proof -->
            @if (feedback.paymentProof) {
              <div class="pl-8 flex items-center gap-2">
                <a
                  [href]="snowtraceUrl + '/tx/' + feedback.paymentProof"
                  target="_blank"
                  class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-50 dark:bg-slate-900 text-[10px] font-medium text-slate-500 hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors border border-slate-100 dark:border-slate-800"
                >
                  <mat-icon class="!w-3 !h-3 !text-[12px]">receipt_long</mat-icon>
                  <span class="font-mono">Tx: {{ feedback.paymentProof | slice: 0 : 8 }}...</span>
                  <mat-icon class="!w-2.5 !h-2.5 !text-[10px] opacity-50">open_in_new</mat-icon>
                </a>
              </div>
            }
          </div>
        } @empty {
          <div
            class="text-center py-6 text-slate-400 text-sm bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-dashed border-slate-200 dark:border-slate-700"
          >
            {{ 'chat.agentInfo.noReviews' | transloco }}
          </div>
        }
      </div>
    </div>
  }
</div>
` }]
  }], null, { agentInfo: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AgentErc8004Component, { className: "AgentErc8004Component", filePath: "src/app/modules/chat/agent-erc8004/agent-erc8004.component.ts", lineNumber: 37 });
})();

// src/app/modules/chat/agent-feedback/agent-feedback.component.ts
var _c0 = () => [1, 2, 3, 4, 5];
function AgentFeedbackComponent_For_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 15);
    \u0275\u0275listener("click", function AgentFeedbackComponent_For_10_Template_button_click_0_listener() {
      const star_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setRating(star_r2));
    });
    \u0275\u0275elementStart(1, "mat-icon", 16);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const star_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ctx_r2.rating() >= star_r2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.rating() >= star_r2 ? "star" : "star_border");
  }
}
function AgentFeedbackComponent_For_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 17);
    \u0275\u0275listener("click", function AgentFeedbackComponent_For_13_Template_button_click_0_listener() {
      const tag_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleTag(tag_r5));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tag_r5 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("selected", ctx_r2.selectedTags().includes(tag_r5))("bg-indigo-50", ctx_r2.selectedTags().includes(tag_r5))("text-indigo-600", ctx_r2.selectedTags().includes(tag_r5))("border-indigo-200", ctx_r2.selectedTags().includes(tag_r5))("bg-white", !ctx_r2.selectedTags().includes(tag_r5))("text-slate-600", !ctx_r2.selectedTags().includes(tag_r5))("border-slate-200", !ctx_r2.selectedTags().includes(tag_r5))("hover:border-indigo-300", !ctx_r2.selectedTags().includes(tag_r5));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", tag_r5, " ");
  }
}
function AgentFeedbackComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "div", 18)(2, "mat-icon", 19);
    \u0275\u0275text(3, "link");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "code", 20);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 2, "chat.feedback.linkedTo"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r2.data.paymentTxHash, " ");
  }
}
function AgentFeedbackComponent_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "mat-icon", 21);
    \u0275\u0275text(2, "refresh");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 1, "chat.feedback.submitting"));
  }
}
function AgentFeedbackComponent_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "transloco");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, "chat.feedback.submit"), " ");
  }
}
var AgentFeedbackComponent = class _AgentFeedbackComponent {
  constructor(_dialogRef, data, _walletService) {
    this._dialogRef = _dialogRef;
    this.data = data;
    this._walletService = _walletService;
    this.rating = signal(0);
    this.comment = signal("");
    this.availableTags = ["fast", "accurate", "helpful", "reliable", "easy-to-use"];
    this.selectedTags = signal([]);
    this.isSubmitting = signal(false);
  }
  setRating(star) {
    this.rating.set(star);
  }
  toggleTag(tag) {
    const current = this.selectedTags();
    if (current.includes(tag)) {
      this.selectedTags.set(current.filter((t) => t !== tag));
    } else {
      this.selectedTags.set([...current, tag]);
    }
  }
  submit() {
    return __async(this, null, function* () {
      if (this.rating() === 0)
        return;
      this.isSubmitting.set(true);
      try {
        const agentTokenId = this.data.agentTokenId || 1;
        const tx = yield this._walletService.submitFeedback(agentTokenId, this.rating(), this.selectedTags(), this.comment(), this.data.paymentTxHash || null);
        console.log("Feedback transaction sent:", tx.hash);
        this._dialogRef.close({ success: true, txHash: tx.hash, tx });
      } catch (error) {
        console.error("Feedback error:", error);
        this._dialogRef.close({ success: false, error });
      } finally {
        this.isSubmitting.set(false);
      }
    });
  }
  close() {
    this._dialogRef.close();
  }
  static {
    this.\u0275fac = function AgentFeedbackComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AgentFeedbackComponent)(\u0275\u0275directiveInject(MatDialogRef), \u0275\u0275directiveInject(MAT_DIALOG_DATA), \u0275\u0275directiveInject(AgentWalletService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AgentFeedbackComponent, selectors: [["app-agent-feedback"]], decls: 28, vars: 19, consts: [[1, "close-button", 3, "click"], [1, "modal-header"], [1, "modal-body"], [1, "rating-stars", "flex", "justify-center", "gap-2", "mb-6"], [1, "star-button", "transition-transform", "hover:scale-110", "focus:outline-none", 3, "active"], [1, "feedback-tags", "flex", "flex-wrap", "justify-center", "gap-2", "mb-6"], [1, "tag", "px-3", "py-1.5", "rounded-full", "text-xs", "font-medium", "border", "transition-all", 3, "selected", "bg-indigo-50", "text-indigo-600", "border-indigo-200", "bg-white", "text-slate-600", "border-slate-200", "hover:border-indigo-300"], [1, "comment-section", "mb-4"], ["rows", "4", 1, "w-full", "p-4", "rounded-xl", "border", "border-slate-200", "dark:border-slate-700", "bg-slate-50", "dark:bg-slate-800", "text-slate-900", "dark:text-white", "placeholder:text-slate-400", "focus:ring-2", "focus:ring-indigo-500/20", "focus:border-indigo-500", "outline-none", "resize-none", "transition-all", 3, "ngModelChange", "ngModel", "placeholder", "disabled"], [1, "payment-link-info", "mb-6", "p-3", "bg-slate-50", "dark:bg-slate-800", "rounded-lg", "text-xs", "text-slate-500", "dark:text-slate-400", "border", "border-slate-100", "dark:border-slate-700"], [1, "feedback-actions", "flex", "gap-3"], ["mat-stroked-button", "", 1, "flex-1", "!h-11", "!rounded-xl", "border-slate-300", "dark:border-slate-600", 3, "click", "disabled"], ["mat-flat-button", "", "color", "primary", 1, "flex-1", "!h-11", "!rounded-xl", "!bg-indigo-600", "hover:!bg-indigo-700", "text-white", 3, "click", "disabled"], [1, "flex", "items-center", "justify-center", "gap-2"], [1, "feedback-note", "mt-4", "text-center", "text-[10px]", "text-slate-400"], [1, "star-button", "transition-transform", "hover:scale-110", "focus:outline-none", 3, "click"], [1, "!w-10", "!h-10", "!text-[40px]"], [1, "tag", "px-3", "py-1.5", "rounded-full", "text-xs", "font-medium", "border", "transition-all", 3, "click"], [1, "flex", "items-center", "gap-2", "mb-1"], [1, "!w-4", "!h-4", "!text-[16px]"], [1, "block", "bg-slate-100", "dark:bg-slate-900", "p-2", "rounded", "border", "border-slate-200", "dark:border-slate-700", "font-mono", "break-all"], [1, "animate-spin", "!w-5", "!h-5", "!text-[20px]"]], template: function AgentFeedbackComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "button", 0);
        \u0275\u0275listener("click", function AgentFeedbackComponent_Template_button_click_0_listener() {
          return ctx.close();
        });
        \u0275\u0275elementStart(1, "mat-icon");
        \u0275\u0275text(2, "close");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(3, "div", 1)(4, "h2");
        \u0275\u0275text(5);
        \u0275\u0275pipe(6, "transloco");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "div", 2)(8, "div", 3);
        \u0275\u0275repeaterCreate(9, AgentFeedbackComponent_For_10_Template, 3, 3, "button", 4, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "div", 5);
        \u0275\u0275repeaterCreate(12, AgentFeedbackComponent_For_13_Template, 2, 17, "button", 6, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "div", 7)(15, "textarea", 8);
        \u0275\u0275pipe(16, "transloco");
        \u0275\u0275twoWayListener("ngModelChange", function AgentFeedbackComponent_Template_textarea_ngModelChange_15_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.comment, $event) || (ctx.comment = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275template(17, AgentFeedbackComponent_Conditional_17_Template, 9, 4, "div", 9);
        \u0275\u0275elementStart(18, "div", 10)(19, "button", 11);
        \u0275\u0275listener("click", function AgentFeedbackComponent_Template_button_click_19_listener() {
          return ctx.close();
        });
        \u0275\u0275text(20);
        \u0275\u0275pipe(21, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "button", 12);
        \u0275\u0275listener("click", function AgentFeedbackComponent_Template_button_click_22_listener() {
          return ctx.submit();
        });
        \u0275\u0275template(23, AgentFeedbackComponent_Conditional_23_Template, 6, 3, "div", 13)(24, AgentFeedbackComponent_Conditional_24_Template, 2, 3);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(25, "div", 14);
        \u0275\u0275text(26);
        \u0275\u0275pipe(27, "transloco");
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 10, "chat.feedback.modalTitle"));
        \u0275\u0275advance(4);
        \u0275\u0275repeater(\u0275\u0275pureFunction0(18, _c0));
        \u0275\u0275advance(3);
        \u0275\u0275repeater(ctx.availableTags);
        \u0275\u0275advance(3);
        \u0275\u0275twoWayProperty("ngModel", ctx.comment);
        \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(16, 12, "chat.feedback.placeholder"))("disabled", ctx.isSubmitting());
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.data.paymentTxHash ? 17 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275property("disabled", ctx.isSubmitting());
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(21, 14, "chat.feedback.cancel"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("disabled", ctx.isSubmitting() || ctx.rating() === 0);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.isSubmitting() ? 23 : 24);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" \u{1F4A1} ", \u0275\u0275pipeBind1(27, 16, "chat.feedback.note"), " ");
      }
    }, dependencies: [
      CommonModule,
      FormsModule,
      DefaultValueAccessor,
      NgControlStatus,
      NgModel,
      MatButtonModule,
      MatButton,
      MatIconModule,
      MatIcon,
      MatDialogModule,
      TranslocoModule,
      TranslocoPipe
    ], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n  background: white;\n  border-radius: 1.5rem;\n  padding: 1.5rem;\n  max-width: 480px;\n  margin: 0 auto;\n  position: relative;\n  overflow: hidden;\n}\n[_nghost-%COMP%]   .modal-header[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 1.5rem;\n  padding-top: 0.5rem;\n}\n[_nghost-%COMP%]   .modal-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  font-weight: 600;\n  color: #0f172a;\n  margin: 0;\n  letter-spacing: -0.01em;\n  line-height: 1.5;\n}\n[_nghost-%COMP%]   .close-button[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 1.25rem;\n  right: 1.25rem;\n  color: #94a3b8;\n  background: transparent;\n  width: 32px;\n  height: 32px;\n  border: none;\n  cursor: pointer;\n  border-radius: 50%;\n  transition: all 0.2s;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 10;\n}\n[_nghost-%COMP%]   .close-button[_ngcontent-%COMP%]:hover {\n  background: #f1f5f9;\n  color: #475569;\n}\n[_nghost-%COMP%]   .close-button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n}\n.star-button[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 0;\n  color: #e2e8f0;\n  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.star-button.active[_ngcontent-%COMP%] {\n  color: #f59e0b;\n  filter: drop-shadow(0 0 4px rgba(245, 158, 11, 0.3));\n}\n.star-button[_ngcontent-%COMP%]:hover {\n  transform: scale(1.15);\n}\n.tag[_ngcontent-%COMP%] {\n  outline: none;\n}\n.tag.selected[_ngcontent-%COMP%] {\n  border-color: #818cf8;\n  box-shadow: 0 2px 4px rgba(99, 102, 241, 0.1);\n}\n.tag[_ngcontent-%COMP%]:hover:not(.selected) {\n  background-color: #f8fafc;\n}\ntextarea[_ngcontent-%COMP%] {\n  font-family: inherit;\n}\n.dark[_nghost-%COMP%], .dark   [_nghost-%COMP%] {\n  background: #0f172a;\n  border: 1px solid #1e293b;\n}\n.dark[_nghost-%COMP%]   .modal-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .modal-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: white;\n}\n.dark[_nghost-%COMP%]   .close-button[_ngcontent-%COMP%]:hover, .dark   [_nghost-%COMP%]   .close-button[_ngcontent-%COMP%]:hover {\n  background: #1e293b;\n  color: white;\n}\n.dark[_nghost-%COMP%]   .star-button[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .star-button[_ngcontent-%COMP%] {\n  color: #334155;\n}\n.dark[_nghost-%COMP%]   .star-button.active[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .star-button.active[_ngcontent-%COMP%] {\n  color: #fbbf24;\n}\n/*# sourceMappingURL=agent-feedback.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AgentFeedbackComponent, [{
    type: Component,
    args: [{ selector: "app-agent-feedback", standalone: true, imports: [
      CommonModule,
      FormsModule,
      MatButtonModule,
      MatIconModule,
      MatDialogModule,
      TranslocoModule
    ], template: `<button class="close-button" (click)="close()">
  <mat-icon>close</mat-icon>
</button>

<div class="modal-header">
  <h2>{{ 'chat.feedback.modalTitle' | transloco }}</h2>
</div>

<div class="modal-body">
  <!-- Star Rating -->
  <div class="rating-stars flex justify-center gap-2 mb-6">
    @for (star of [1, 2, 3, 4, 5]; track star) {
      <button
        class="star-button transition-transform hover:scale-110 focus:outline-none"
        [class.active]="rating() >= star"
        (click)="setRating(star)"
      >
        <mat-icon class="!w-10 !h-10 !text-[40px]">{{
          rating() >= star ? 'star' : 'star_border'
        }}</mat-icon>
      </button>
    }
  </div>

  <!-- Tags -->
  <div class="feedback-tags flex flex-wrap justify-center gap-2 mb-6">
    @for (tag of availableTags; track tag) {
      <button
        class="tag px-3 py-1.5 rounded-full text-xs font-medium border transition-all"
        [class.selected]="selectedTags().includes(tag)"
        [class.bg-indigo-50]="selectedTags().includes(tag)"
        [class.text-indigo-600]="selectedTags().includes(tag)"
        [class.border-indigo-200]="selectedTags().includes(tag)"
        [class.bg-white]="!selectedTags().includes(tag)"
        [class.text-slate-600]="!selectedTags().includes(tag)"
        [class.border-slate-200]="!selectedTags().includes(tag)"
        [class.hover:border-indigo-300]="!selectedTags().includes(tag)"
        (click)="toggleTag(tag)"
      >
        {{ tag }}
      </button>
    }
  </div>

  <!-- Comment -->
  <div class="comment-section mb-4">
    <textarea
      [(ngModel)]="comment"
      [placeholder]="'chat.feedback.placeholder' | transloco"
      class="w-full p-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white placeholder:text-slate-400 focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none resize-none transition-all"
      rows="4"
      [disabled]="isSubmitting()"
    ></textarea>
  </div>

  <!-- Payment Info -->
  @if (data.paymentTxHash) {
    <div
      class="payment-link-info mb-6 p-3 bg-slate-50 dark:bg-slate-800 rounded-lg text-xs text-slate-500 dark:text-slate-400 border border-slate-100 dark:border-slate-700"
    >
      <div class="flex items-center gap-2 mb-1">
        <mat-icon class="!w-4 !h-4 !text-[16px]">link</mat-icon>
        <span>{{ 'chat.feedback.linkedTo' | transloco }}</span>
      </div>
      <code
        class="block bg-slate-100 dark:bg-slate-900 p-2 rounded border border-slate-200 dark:border-slate-700 font-mono break-all"
      >
        {{ data.paymentTxHash }}
      </code>
    </div>
  }

  <!-- Actions -->
  <div class="feedback-actions flex gap-3">
    <button
      mat-stroked-button
      class="flex-1 !h-11 !rounded-xl border-slate-300 dark:border-slate-600"
      (click)="close()"
      [disabled]="isSubmitting()"
    >
      {{ 'chat.feedback.cancel' | transloco }}
    </button>
    <button
      mat-flat-button
      color="primary"
      class="flex-1 !h-11 !rounded-xl !bg-indigo-600 hover:!bg-indigo-700 text-white"
      (click)="submit()"
      [disabled]="isSubmitting() || rating() === 0"
    >
      @if (isSubmitting()) {
        <div class="flex items-center justify-center gap-2">
          <mat-icon class="animate-spin !w-5 !h-5 !text-[20px]">refresh</mat-icon>
          <span>{{ 'chat.feedback.submitting' | transloco }}</span>
        </div>
      } @else {
        {{ 'chat.feedback.submit' | transloco }}
      }
    </button>
  </div>

  <div class="feedback-note mt-4 text-center text-[10px] text-slate-400">
    \u{1F4A1} {{ 'chat.feedback.note' | transloco }}
  </div>
</div>
`, styles: ["/* src/app/modules/chat/agent-feedback/agent-feedback.component.scss */\n:host {\n  display: block;\n  background: white;\n  border-radius: 1.5rem;\n  padding: 1.5rem;\n  max-width: 480px;\n  margin: 0 auto;\n  position: relative;\n  overflow: hidden;\n}\n:host .modal-header {\n  text-align: center;\n  margin-bottom: 1.5rem;\n  padding-top: 0.5rem;\n}\n:host .modal-header h2 {\n  font-size: 1.125rem;\n  font-weight: 600;\n  color: #0f172a;\n  margin: 0;\n  letter-spacing: -0.01em;\n  line-height: 1.5;\n}\n:host .close-button {\n  position: absolute;\n  top: 1.25rem;\n  right: 1.25rem;\n  color: #94a3b8;\n  background: transparent;\n  width: 32px;\n  height: 32px;\n  border: none;\n  cursor: pointer;\n  border-radius: 50%;\n  transition: all 0.2s;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 10;\n}\n:host .close-button:hover {\n  background: #f1f5f9;\n  color: #475569;\n}\n:host .close-button mat-icon {\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n}\n.star-button {\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 0;\n  color: #e2e8f0;\n  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.star-button.active {\n  color: #f59e0b;\n  filter: drop-shadow(0 0 4px rgba(245, 158, 11, 0.3));\n}\n.star-button:hover {\n  transform: scale(1.15);\n}\n.tag {\n  outline: none;\n}\n.tag.selected {\n  border-color: #818cf8;\n  box-shadow: 0 2px 4px rgba(99, 102, 241, 0.1);\n}\n.tag:hover:not(.selected) {\n  background-color: #f8fafc;\n}\ntextarea {\n  font-family: inherit;\n}\n:host-context(.dark) {\n  background: #0f172a;\n  border: 1px solid #1e293b;\n}\n:host-context(.dark) .modal-header h2 {\n  color: white;\n}\n:host-context(.dark) .close-button:hover {\n  background: #1e293b;\n  color: white;\n}\n:host-context(.dark) .star-button {\n  color: #334155;\n}\n:host-context(.dark) .star-button.active {\n  color: #fbbf24;\n}\n/*# sourceMappingURL=agent-feedback.component.css.map */\n"] }]
  }], () => [{ type: MatDialogRef }, { type: void 0, decorators: [{
    type: Inject,
    args: [MAT_DIALOG_DATA]
  }] }, { type: AgentWalletService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AgentFeedbackComponent, { className: "AgentFeedbackComponent", filePath: "src/app/modules/chat/agent-feedback/agent-feedback.component.ts", lineNumber: 30 });
})();

// src/app/modules/chat/delete-confirmation/delete-confirmation.component.ts
var DeleteConfirmationComponent = class _DeleteConfirmationComponent {
  constructor(dialogRef, data) {
    this.dialogRef = dialogRef;
    this.data = data;
  }
  confirm() {
    this.dialogRef.close(true);
  }
  close() {
    this.dialogRef.close(false);
  }
  static {
    this.\u0275fac = function DeleteConfirmationComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DeleteConfirmationComponent)(\u0275\u0275directiveInject(MatDialogRef), \u0275\u0275directiveInject(MAT_DIALOG_DATA));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DeleteConfirmationComponent, selectors: [["app-delete-confirmation"]], decls: 18, vars: 12, consts: [[1, "w-full", "bg-white", "dark:bg-slate-900", "overflow-hidden", "flex", "flex-col"], [1, "p-6", "pb-2", "text-center"], [1, "w-12", "h-12", "mx-auto", "mb-4", "rounded-full", "bg-red-50", "dark:bg-red-900/20", "flex", "items-center", "justify-center", "text-red-500"], [1, "!w-6", "!h-6", "!text-[24px]"], [1, "text-lg", "font-bold", "text-slate-900", "dark:text-white", "mb-2"], [1, "text-sm", "text-slate-500", "dark:text-slate-400", "leading-relaxed", "px-4"], [1, "p-6", "pt-6", "flex", "flex-col", "gap-3"], [1, "w-full", "h-10", "rounded-lg", "bg-red-600", "hover:bg-red-700", "text-white", "text-sm", "font-medium", "transition-colors", "shadow-sm", "active:transform", "active:scale-[0.98]", 3, "click"], [1, "w-full", "h-10", "rounded-lg", "bg-white", "dark:bg-slate-800", "border", "border-slate-200", "dark:border-slate-700", "text-slate-700", "dark:text-slate-300", "hover:bg-slate-50", "dark:hover:bg-slate-700/50", "text-sm", "font-medium", "transition-colors", 3, "click"]], template: function DeleteConfirmationComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "mat-icon", 3);
        \u0275\u0275text(4, "delete_outline");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(5, "h3", 4);
        \u0275\u0275text(6);
        \u0275\u0275pipe(7, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "p", 5);
        \u0275\u0275text(9);
        \u0275\u0275pipe(10, "transloco");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(11, "div", 6)(12, "button", 7);
        \u0275\u0275listener("click", function DeleteConfirmationComponent_Template_button_click_12_listener() {
          return ctx.confirm();
        });
        \u0275\u0275text(13);
        \u0275\u0275pipe(14, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "button", 8);
        \u0275\u0275listener("click", function DeleteConfirmationComponent_Template_button_click_15_listener() {
          return ctx.close();
        });
        \u0275\u0275text(16);
        \u0275\u0275pipe(17, "transloco");
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 4, "chat.deleteModal.title"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 6, "chat.deleteModal.message"), " ");
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(14, 8, "chat.deleteModal.confirm"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(17, 10, "chat.deleteModal.cancel"), " ");
      }
    }, dependencies: [CommonModule, MatDialogModule, MatButtonModule, MatIconModule, MatIcon, TranslocoModule, TranslocoPipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DeleteConfirmationComponent, [{
    type: Component,
    args: [{ selector: "app-delete-confirmation", standalone: true, imports: [CommonModule, MatDialogModule, MatButtonModule, MatIconModule, TranslocoModule], template: `<div class="w-full bg-white dark:bg-slate-900 overflow-hidden flex flex-col">
    <!-- Icon + Title -->
    <div class="p-6 pb-2 text-center">
        <div
            class="w-12 h-12 mx-auto mb-4 rounded-full bg-red-50 dark:bg-red-900/20 flex items-center justify-center text-red-500"
        >
            <mat-icon class="!w-6 !h-6 !text-[24px]">delete_outline</mat-icon>
        </div>
        <h3 class="text-lg font-bold text-slate-900 dark:text-white mb-2">
            {{ 'chat.deleteModal.title' | transloco }}
        </h3>
        <p class="text-sm text-slate-500 dark:text-slate-400 leading-relaxed px-4">
            {{ 'chat.deleteModal.message' | transloco }}
        </p>
    </div>

    <!-- Actions -->
    <div class="p-6 pt-6 flex flex-col gap-3">
        <button
            (click)="confirm()"
            class="w-full h-10 rounded-lg bg-red-600 hover:bg-red-700 text-white text-sm font-medium transition-colors shadow-sm active:transform active:scale-[0.98]"
        >
            {{ 'chat.deleteModal.confirm' | transloco }}
        </button>
        <button
            (click)="close()"
            class="w-full h-10 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700/50 text-sm font-medium transition-colors"
        >
            {{ 'chat.deleteModal.cancel' | transloco }}
        </button>
    </div>
</div>
` }]
  }], () => [{ type: MatDialogRef }, { type: void 0, decorators: [{
    type: Inject,
    args: [MAT_DIALOG_DATA]
  }] }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DeleteConfirmationComponent, { className: "DeleteConfirmationComponent", filePath: "src/app/modules/chat/delete-confirmation/delete-confirmation.component.ts", lineNumber: 14 });
})();

// src/app/modules/chat/payment-confirmation/payment-confirmation.component.ts
function PaymentConfirmationComponent_mat_radio_button_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-radio-button", 36);
    \u0275\u0275text(1, "VKA (Verifik)");
    \u0275\u0275elementEnd();
  }
}
function PaymentConfirmationComponent_ng_container_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "span", 37);
    \u0275\u0275text(3, "AVAX");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.data.amount, " ");
  }
}
function PaymentConfirmationComponent_ng_container_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "span", 37);
    \u0275\u0275text(3, "VKA");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.data.priceVka, " ");
  }
}
function PaymentConfirmationComponent_ng_container_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 1, ctx_r0.data.currentBalance, "1.4-4"), " AVAX ");
  }
}
function PaymentConfirmationComponent_ng_container_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 1, ctx_r0.data.tokenBalance, "1.4-4"), " VKA ");
  }
}
function PaymentConfirmationComponent_ng_container_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 1, ctx_r0.newBalance, "1.4-4"), " AVAX ");
  }
}
function PaymentConfirmationComponent_ng_container_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 1, ctx_r0.newBalance, "1.2-2"), " VKA ");
  }
}
function PaymentConfirmationComponent_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "chat.payment.insufficientFunds"), " ");
  }
}
function PaymentConfirmationComponent_Conditional_63_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32)(1, "div", 38)(2, "mat-icon", 26);
    \u0275\u0275text(3, "data_object");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 39)(5, "div", 28);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 40);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 2, "chat.payment.parameters"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.data.details, " ");
  }
}
var PaymentConfirmationComponent = class _PaymentConfirmationComponent {
  constructor(dialogRef, data) {
    this.dialogRef = dialogRef;
    this.data = data;
    this.selectedCurrency = "AVAX";
    if (data.priceVka) {
      this.selectedCurrency = "VKA";
    }
  }
  get newBalance() {
    if (this.selectedCurrency === "AVAX") {
      const current = parseFloat(this.data.currentBalance || "0");
      const cost = parseFloat(this.data.amount || "0");
      return current - cost;
    } else if (this.selectedCurrency === "VKA") {
      const current = parseFloat(this.data.tokenBalance || "0");
      const cost = this.data.priceVka || 0;
      return current - cost;
    }
    return 0;
  }
  confirm() {
    this.dialogRef.close({
      confirmed: true,
      currency: this.selectedCurrency,
      amount: this.selectedCurrency === "AVAX" ? this.data.amount : this.data.priceVka?.toString()
    });
  }
  close() {
    this.dialogRef.close(false);
  }
  static {
    this.\u0275fac = function PaymentConfirmationComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PaymentConfirmationComponent)(\u0275\u0275directiveInject(MatDialogRef), \u0275\u0275directiveInject(MAT_DIALOG_DATA));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PaymentConfirmationComponent, selectors: [["app-payment-confirmation"]], decls: 71, vars: 48, consts: [[1, "bg-white", "dark:bg-slate-900", "rounded-2xl", "max-w-md", "w-full", "overflow-hidden"], [1, "p-6", "pb-2"], [1, "text-xl", "font-bold", "dark:text-white", "flex", "items-center", "gap-2"], [1, "w-10", "h-10", "rounded-full", "bg-slate-100", "dark:bg-slate-800", "flex", "items-center", "justify-center"], [1, "text-slate-900", "dark:text-white"], [1, "p-6", "pt-2"], [1, "text-center", "py-6"], [1, "text-xs", "text-slate-500", "uppercase", "tracking-wider", "font-bold", "mb-4"], [1, "flex", "justify-center", "gap-6", "mb-4", 3, "ngModelChange", "ngModel"], ["value", "AVAX", 1, "font-bold"], ["value", "VKA", "class", "font-bold", 4, "ngIf"], [1, "text-5xl", "font-bold", "text-slate-900", "dark:text-white", "flex", "items-center", "justify-center", "gap-1", "transition-all"], [4, "ngIf"], [1, "bg-slate-50", "dark:bg-slate-800/50", "rounded-xl", "p-4", "mb-6", "border", "border-slate-100", "dark:border-slate-700", "space-y-3"], [1, "flex", "justify-between", "items-center"], [1, "text-sm", "text-slate-500", "font-medium"], [1, "font-mono", "text-sm", "dark:text-slate-300"], [1, "w-full", "h-px", "bg-slate-200", "dark:bg-slate-700"], [1, "text-sm", "font-bold", "text-slate-700", "dark:text-slate-200"], [1, "font-mono", "text-sm", "font-bold"], [1, "text-xs", "text-red-500", "text-right", "font-medium", "mt-1"], [1, "mb-8"], [1, "text-xs", "text-slate-400", "uppercase", "font-bold", "tracking-wider", "mb-3", "block", "px-1"], [1, "bg-white", "dark:bg-slate-800", "border", "border-slate-200", "dark:border-slate-700", "rounded-xl", "overflow-hidden"], [1, "p-3", "border-b", "border-slate-100", "dark:border-slate-700", "flex", "items-start", "gap-3"], [1, "w-8", "h-8", "rounded-lg", "bg-blue-50", "dark:bg-blue-900/20", "text-blue-600", "flex", "items-center", "justify-center", "shrink-0"], [1, "!w-4", "!h-4", "!text-[16px]"], [1, "min-w-0"], [1, "text-[10px]", "text-slate-400", "uppercase", "font-bold"], [1, "text-sm", "font-mono", "text-slate-700", "dark:text-slate-300", "break-all", "leading-tight"], [1, "w-8", "h-8", "rounded-lg", "bg-purple-50", "dark:bg-purple-900/20", "text-purple-600", "flex", "items-center", "justify-center", "shrink-0"], [1, "text-xs", "font-mono", "text-slate-600", "dark:text-slate-400", "break-all", "leading-tight"], [1, "p-3", "bg-slate-50", "dark:bg-slate-800/50", "flex", "items-start", "gap-3"], [1, "flex", "gap-3"], ["mat-stroked-button", "", 1, "flex-1", "!h-12", "!rounded-xl", "!border-slate-200", "dark:!border-slate-700", "dark:text-white", 3, "click"], ["mat-flat-button", "", "color", "primary", 1, "flex-[2]", "!h-12", "!rounded-xl", "text-lg", "shadow-lg", "shadow-blue-500/20", 3, "click", "disabled"], ["value", "VKA", 1, "font-bold"], [1, "text-lg", "text-slate-400", "font-normal", "self-end", "mb-1.5", "ml-1"], [1, "w-8", "h-8", "rounded-lg", "bg-emerald-50", "dark:bg-emerald-900/20", "text-emerald-600", "flex", "items-center", "justify-center", "shrink-0"], [1, "min-w-0", "flex-1"], [1, "text-xs", "text-slate-600", "dark:text-slate-400", "mt-1", "font-mono", "bg-white", "dark:bg-slate-900", "border", "border-slate-200", "dark:border-slate-700", "rounded", "p-2"]], template: function PaymentConfirmationComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h2", 2)(3, "div", 3)(4, "mat-icon", 4);
        \u0275\u0275text(5, "account_balance_wallet");
        \u0275\u0275elementEnd()();
        \u0275\u0275text(6);
        \u0275\u0275pipe(7, "transloco");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(8, "div", 5)(9, "div", 6)(10, "div", 7);
        \u0275\u0275text(11);
        \u0275\u0275pipe(12, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "mat-radio-group", 8);
        \u0275\u0275twoWayListener("ngModelChange", function PaymentConfirmationComponent_Template_mat_radio_group_ngModelChange_13_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.selectedCurrency, $event) || (ctx.selectedCurrency = $event);
          return $event;
        });
        \u0275\u0275elementStart(14, "mat-radio-button", 9);
        \u0275\u0275text(15, "AVAX");
        \u0275\u0275elementEnd();
        \u0275\u0275template(16, PaymentConfirmationComponent_mat_radio_button_16_Template, 2, 0, "mat-radio-button", 10);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "div", 11);
        \u0275\u0275template(18, PaymentConfirmationComponent_ng_container_18_Template, 4, 1, "ng-container", 12)(19, PaymentConfirmationComponent_ng_container_19_Template, 4, 1, "ng-container", 12);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(20, "div", 13)(21, "div", 14)(22, "span", 15);
        \u0275\u0275text(23);
        \u0275\u0275pipe(24, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "span", 16);
        \u0275\u0275template(26, PaymentConfirmationComponent_ng_container_26_Template, 3, 4, "ng-container", 12)(27, PaymentConfirmationComponent_ng_container_27_Template, 3, 4, "ng-container", 12);
        \u0275\u0275elementEnd()();
        \u0275\u0275element(28, "div", 17);
        \u0275\u0275elementStart(29, "div", 14)(30, "span", 18);
        \u0275\u0275text(31);
        \u0275\u0275pipe(32, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(33, "span", 19);
        \u0275\u0275template(34, PaymentConfirmationComponent_ng_container_34_Template, 3, 4, "ng-container", 12)(35, PaymentConfirmationComponent_ng_container_35_Template, 3, 4, "ng-container", 12);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(36, PaymentConfirmationComponent_Conditional_36_Template, 3, 3, "div", 20);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(37, "div", 21)(38, "label", 22);
        \u0275\u0275text(39);
        \u0275\u0275pipe(40, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(41, "div", 23)(42, "div", 24)(43, "div", 25)(44, "mat-icon", 26);
        \u0275\u0275text(45, "api");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(46, "div", 27)(47, "div", 28);
        \u0275\u0275text(48);
        \u0275\u0275pipe(49, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(50, "div", 29);
        \u0275\u0275text(51);
        \u0275\u0275pipe(52, "transloco");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(53, "div", 24)(54, "div", 30)(55, "mat-icon", 26);
        \u0275\u0275text(56, "wallet");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(57, "div", 27)(58, "div", 28);
        \u0275\u0275text(59);
        \u0275\u0275pipe(60, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(61, "div", 31);
        \u0275\u0275text(62);
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(63, PaymentConfirmationComponent_Conditional_63_Template, 10, 4, "div", 32);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(64, "div", 33)(65, "button", 34);
        \u0275\u0275listener("click", function PaymentConfirmationComponent_Template_button_click_65_listener() {
          return ctx.close();
        });
        \u0275\u0275text(66);
        \u0275\u0275pipe(67, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(68, "button", 35);
        \u0275\u0275listener("click", function PaymentConfirmationComponent_Template_button_click_68_listener() {
          return ctx.confirm();
        });
        \u0275\u0275text(69);
        \u0275\u0275pipe(70, "transloco");
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 28, "chat.payment.title"), " ");
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(12, 30, "chat.payment.totalCost"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275twoWayProperty("ngModel", ctx.selectedCurrency);
        \u0275\u0275advance(3);
        \u0275\u0275property("ngIf", ctx.data.priceVka);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.selectedCurrency === "AVAX");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.selectedCurrency === "VKA");
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(24, 32, "chat.payment.currentBalance"));
        \u0275\u0275advance(3);
        \u0275\u0275property("ngIf", ctx.selectedCurrency === "AVAX");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.selectedCurrency === "VKA");
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(32, 34, "chat.payment.newBalance"));
        \u0275\u0275advance(2);
        \u0275\u0275classProp("text-amber-500", ctx.newBalance < 0.1 && ctx.newBalance >= 0)("text-red-500", ctx.newBalance < 0)("text-emerald-600", ctx.newBalance >= 0.1);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.selectedCurrency === "AVAX");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.selectedCurrency === "VKA");
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.newBalance < 0 ? 36 : -1);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(40, 36, "chat.payment.serviceDetails"));
        \u0275\u0275advance(9);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(49, 38, "chat.payment.endpoint"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", ctx.data.endpoint || \u0275\u0275pipeBind1(52, 40, "chat.payment.unknownEndpoint"), " ");
        \u0275\u0275advance(8);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(60, 42, "chat.payment.receiver"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", ctx.data.receiver, " ");
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.data.details ? 63 : -1);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(67, 44, "chat.payment.cancel"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("disabled", ctx.newBalance < 0);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(70, 46, "chat.payment.confirmBtn"), " ");
      }
    }, dependencies: [
      CommonModule,
      NgIf,
      DecimalPipe,
      MatDialogModule,
      MatButtonModule,
      MatButton,
      MatIconModule,
      MatIcon,
      TranslocoModule,
      TranslocoPipe,
      MatRadioModule,
      MatRadioGroup,
      MatRadioButton,
      FormsModule,
      NgControlStatus,
      NgModel
    ], styles: ["\n\n/*# sourceMappingURL=payment-confirmation.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PaymentConfirmationComponent, [{
    type: Component,
    args: [{ selector: "app-payment-confirmation", standalone: true, imports: [
      CommonModule,
      MatDialogModule,
      MatButtonModule,
      MatIconModule,
      TranslocoModule,
      MatRadioModule,
      FormsModule
    ], template: `<div class="bg-white dark:bg-slate-900 rounded-2xl max-w-md w-full overflow-hidden">
    <!-- Header -->
    <div class="p-6 pb-2">
        <h2 class="text-xl font-bold dark:text-white flex items-center gap-2">
            <div
                class="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center"
            >
                <mat-icon class="text-slate-900 dark:text-white">account_balance_wallet</mat-icon>
            </div>
            {{ 'chat.payment.title' | transloco }}
        </h2>
    </div>

    <div class="p-6 pt-2">
        <!-- Cost Section -->
        <div class="text-center py-6">
            <div class="text-xs text-slate-500 uppercase tracking-wider font-bold mb-4">
                {{ 'chat.payment.totalCost' | transloco }}
            </div>

            <!-- Currency Selection -->
            <mat-radio-group [(ngModel)]="selectedCurrency" class="flex justify-center gap-6 mb-4">
                <mat-radio-button value="AVAX" class="font-bold">AVAX</mat-radio-button>
                <mat-radio-button value="VKA" class="font-bold" *ngIf="data.priceVka"
                    >VKA (Verifik)</mat-radio-button
                >
            </mat-radio-group>

            <div
                class="text-5xl font-bold text-slate-900 dark:text-white flex items-center justify-center gap-1 transition-all"
            >
                <ng-container *ngIf="selectedCurrency === 'AVAX'">
                    {{ data.amount }}
                    <span class="text-lg text-slate-400 font-normal self-end mb-1.5 ml-1"
                        >AVAX</span
                    >
                </ng-container>
                <ng-container *ngIf="selectedCurrency === 'VKA'">
                    {{ data.priceVka }}
                    <span class="text-lg text-slate-400 font-normal self-end mb-1.5 ml-1">VKA</span>
                </ng-container>
            </div>
        </div>

        <!-- Balance Details -->
        <div
            class="bg-slate-50 dark:bg-slate-800/50 rounded-xl p-4 mb-6 border border-slate-100 dark:border-slate-700 space-y-3"
        >
            <div class="flex justify-between items-center">
                <span class="text-sm text-slate-500 font-medium">{{
                    'chat.payment.currentBalance' | transloco
                }}</span>
                <span class="font-mono text-sm dark:text-slate-300">
                    <ng-container *ngIf="selectedCurrency === 'AVAX'">
                        {{ data.currentBalance | number: '1.4-4' }} AVAX
                    </ng-container>
                    <ng-container *ngIf="selectedCurrency === 'VKA'">
                        {{ data.tokenBalance | number: '1.4-4' }} VKA
                    </ng-container>
                </span>
            </div>

            <div class="w-full h-px bg-slate-200 dark:bg-slate-700"></div>

            <div class="flex justify-between items-center">
                <span class="text-sm font-bold text-slate-700 dark:text-slate-200">{{
                    'chat.payment.newBalance' | transloco
                }}</span>
                <span
                    class="font-mono text-sm font-bold"
                    [class.text-amber-500]="newBalance < 0.1 && newBalance >= 0"
                    [class.text-red-500]="newBalance < 0"
                    [class.text-emerald-600]="newBalance >= 0.1"
                >
                    <ng-container *ngIf="selectedCurrency === 'AVAX'">
                        {{ newBalance | number: '1.4-4' }} AVAX
                    </ng-container>
                    <ng-container *ngIf="selectedCurrency === 'VKA'">
                        {{ newBalance | number: '1.2-2' }} VKA
                    </ng-container>
                </span>
            </div>
            @if (newBalance < 0) {
                <div class="text-xs text-red-500 text-right font-medium mt-1">
                    {{ 'chat.payment.insufficientFunds' | transloco }}
                </div>
            }
        </div>

        <!-- Service Info -->
        <div class="mb-8">
            <label
                class="text-xs text-slate-400 uppercase font-bold tracking-wider mb-3 block px-1"
                >{{ 'chat.payment.serviceDetails' | transloco }}</label
            >
            <div
                class="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl overflow-hidden"
            >
                <!-- Endpoint -->
                <div
                    class="p-3 border-b border-slate-100 dark:border-slate-700 flex items-start gap-3"
                >
                    <div
                        class="w-8 h-8 rounded-lg bg-blue-50 dark:bg-blue-900/20 text-blue-600 flex items-center justify-center shrink-0"
                    >
                        <mat-icon class="!w-4 !h-4 !text-[16px]">api</mat-icon>
                    </div>
                    <div class="min-w-0">
                        <div class="text-[10px] text-slate-400 uppercase font-bold">
                            {{ 'chat.payment.endpoint' | transloco }}
                        </div>
                        <div
                            class="text-sm font-mono text-slate-700 dark:text-slate-300 break-all leading-tight"
                        >
                            {{ data.endpoint || ('chat.payment.unknownEndpoint' | transloco) }}
                        </div>
                    </div>
                </div>

                <!-- Receiver -->
                <div
                    class="p-3 border-b border-slate-100 dark:border-slate-700 flex items-start gap-3"
                >
                    <div
                        class="w-8 h-8 rounded-lg bg-purple-50 dark:bg-purple-900/20 text-purple-600 flex items-center justify-center shrink-0"
                    >
                        <mat-icon class="!w-4 !h-4 !text-[16px]">wallet</mat-icon>
                    </div>
                    <div class="min-w-0">
                        <div class="text-[10px] text-slate-400 uppercase font-bold">
                            {{ 'chat.payment.receiver' | transloco }}
                        </div>
                        <div
                            class="text-xs font-mono text-slate-600 dark:text-slate-400 break-all leading-tight"
                        >
                            {{ data.receiver }}
                        </div>
                    </div>
                </div>

                <!-- Params (Details) -->
                @if (data.details) {
                    <div class="p-3 bg-slate-50 dark:bg-slate-800/50 flex items-start gap-3">
                        <div
                            class="w-8 h-8 rounded-lg bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 flex items-center justify-center shrink-0"
                        >
                            <mat-icon class="!w-4 !h-4 !text-[16px]">data_object</mat-icon>
                        </div>
                        <div class="min-w-0 flex-1">
                            <div class="text-[10px] text-slate-400 uppercase font-bold">
                                {{ 'chat.payment.parameters' | transloco }}
                            </div>
                            <div
                                class="text-xs text-slate-600 dark:text-slate-400 mt-1 font-mono bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded p-2"
                            >
                                {{ data.details }}
                            </div>
                        </div>
                    </div>
                }
            </div>
        </div>

        <!-- Actions -->
        <div class="flex gap-3">
            <button
                mat-stroked-button
                class="flex-1 !h-12 !rounded-xl !border-slate-200 dark:!border-slate-700 dark:text-white"
                (click)="close()"
            >
                {{ 'chat.payment.cancel' | transloco }}
            </button>
            <button
                mat-flat-button
                color="primary"
                class="flex-[2] !h-12 !rounded-xl text-lg shadow-lg shadow-blue-500/20"
                (click)="confirm()"
                [disabled]="newBalance < 0"
            >
                {{ 'chat.payment.confirmBtn' | transloco }}
            </button>
        </div>
    </div>
</div>
`, styles: ["/* src/app/modules/chat/payment-confirmation/payment-confirmation.component.scss */\n/*# sourceMappingURL=payment-confirmation.component.css.map */\n"] }]
  }], () => [{ type: MatDialogRef }, { type: void 0, decorators: [{
    type: Inject,
    args: [MAT_DIALOG_DATA]
  }] }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PaymentConfirmationComponent, { className: "PaymentConfirmationComponent", filePath: "src/app/modules/chat/payment-confirmation/payment-confirmation.component.ts", lineNumber: 38 });
})();

// src/app/modules/chat/chat.component.ts
var _c02 = ["scrollContainer"];
var _forTrack02 = ($index, $item) => $item.id;
function ChatComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "chat.sidebar.noHistory"), " ");
  }
}
function ChatComponent_For_16_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 41);
    \u0275\u0275twoWayListener("ngModelChange", function ChatComponent_For_16_Conditional_1_Template_input_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r3 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r3.renameInput, $event) || (ctx_r3.renameInput = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("click", function ChatComponent_For_16_Conditional_1_Template_input_click_0_listener($event) {
      \u0275\u0275restoreView(_r5);
      return \u0275\u0275resetView($event.stopPropagation());
    })("blur", function ChatComponent_For_16_Conditional_1_Template_input_blur_0_listener() {
      \u0275\u0275restoreView(_r5);
      const conv_r3 = \u0275\u0275nextContext().$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.saveRename(conv_r3));
    })("keyup.enter", function ChatComponent_For_16_Conditional_1_Template_input_keyup_enter_0_listener() {
      \u0275\u0275restoreView(_r5);
      const conv_r3 = \u0275\u0275nextContext().$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.saveRename(conv_r3));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.renameInput);
  }
}
function ChatComponent_For_16_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 42)(1, "div", 43);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 44);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 45)(7, "button", 46);
    \u0275\u0275listener("click", function ChatComponent_For_16_Conditional_2_Template_button_click_7_listener($event) {
      \u0275\u0275restoreView(_r6);
      const conv_r3 = \u0275\u0275nextContext().$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.startRenaming(conv_r3, $event));
    });
    \u0275\u0275elementStart(8, "mat-icon", 47);
    \u0275\u0275text(9, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "button", 48);
    \u0275\u0275listener("click", function ChatComponent_For_16_Conditional_2_Template_button_click_10_listener($event) {
      \u0275\u0275restoreView(_r6);
      const conv_r3 = \u0275\u0275nextContext().$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.deleteConversation(conv_r3, $event));
    });
    \u0275\u0275elementStart(11, "mat-icon", 47);
    \u0275\u0275text(12, "delete");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const conv_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", conv_r3.title, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(5, 2, conv_r3.updated_at, "MMM d, h:mm a"), " ");
  }
}
function ChatComponent_For_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 39);
    \u0275\u0275listener("click", function ChatComponent_For_16_Template_div_click_0_listener() {
      const conv_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.selectConversation(conv_r3.id));
    });
    \u0275\u0275template(1, ChatComponent_For_16_Conditional_1_Template, 1, 1, "input", 40)(2, ChatComponent_For_16_Conditional_2_Template, 13, 5);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const conv_r3 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275classProp("bg-white", ctx_r3.currentConversationId() === conv_r3.id)("dark:bg-slate-900", ctx_r3.currentConversationId() === conv_r3.id)("shadow-sm", ctx_r3.currentConversationId() === conv_r3.id)("border-slate-200", ctx_r3.currentConversationId() === conv_r3.id)("dark:border-slate-800", ctx_r3.currentConversationId() === conv_r3.id)("hover:bg-slate-200", ctx_r3.currentConversationId() !== conv_r3.id)("dark:hover:bg-slate-900", ctx_r3.currentConversationId() !== conv_r3.id);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r3.isRenamingId() === conv_r3.id ? 1 : 2);
  }
}
function ChatComponent_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 17);
  }
}
function ChatComponent_Conditional_40_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 51);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(2, 2, ctx_r3.tokenBalance(), "1.0-2"), " ", ctx_r3.tokenTicker, " ");
  }
}
function ChatComponent_Conditional_40_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 49);
    \u0275\u0275listener("click", function ChatComponent_Conditional_40_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.toggleWalletModal());
    });
    \u0275\u0275elementStart(1, "div", 50)(2, "div");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, ChatComponent_Conditional_40_Conditional_5_Template, 3, 5, "div", 51);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 52)(7, "mat-icon", 53);
    \u0275\u0275text(8, "account_balance_wallet");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(4, 2, ctx_r3.walletBalance(), "1.4-4"), " AVAX");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r3.tokenBalance() && ctx_r3.tokenBalance() !== "0.00" && ctx_r3.tokenBalance() !== "0.0" ? 5 : -1);
  }
}
function ChatComponent_For_45_Conditional_0_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 65);
    \u0275\u0275element(1, "mat-progress-spinner", 70);
    \u0275\u0275text(2, " Confirming... ");
    \u0275\u0275elementEnd();
  }
}
function ChatComponent_For_45_Conditional_0_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 66)(1, "mat-icon", 71);
    \u0275\u0275text(2, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " On-Chain ");
    \u0275\u0275elementEnd();
  }
}
function ChatComponent_For_45_Conditional_0_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 69)(1, "label", 72);
    \u0275\u0275text(2, "Transaction Hash");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "a", 73)(4, "span", 74);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 75)(7, "span", 76);
    \u0275\u0275text(8, "VIEW");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "mat-icon", 71);
    \u0275\u0275text(10, "open_in_new");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const txHash_r8 = ctx;
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275property("href", ctx_r3.getSnowtraceUrl() + "/tx/" + txHash_r8, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(txHash_r8);
  }
}
function ChatComponent_For_45_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 54)(1, "div", 57);
    \u0275\u0275text(2, " AI ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 58)(4, "div", 59)(5, "div", 60)(6, "div", 61)(7, "div", 62)(8, "mat-icon", 63);
    \u0275\u0275text(9, "star");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "span", 64);
    \u0275\u0275text(11, "Proof of Feedback");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(12, ChatComponent_For_45_Conditional_0_Conditional_12_Template, 3, 0, "div", 65)(13, ChatComponent_For_45_Conditional_0_Conditional_13_Template, 4, 0, "div", 66);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 67)(15, "div", 68);
    \u0275\u0275text(16, " Processing your reputation feedback on correct execution. ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(17, ChatComponent_For_45_Conditional_0_Conditional_17_Template, 11, 2, "div", 69);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_14_0;
    const msg_r9 = \u0275\u0275nextContext().$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(12);
    \u0275\u0275conditional(msg_r9.content.includes("Waiting") ? 12 : 13);
    \u0275\u0275advance(5);
    \u0275\u0275conditional((tmp_14_0 = ctx_r3.extractTxHash(msg_r9.content)) ? 17 : -1, tmp_14_0);
  }
}
function ChatComponent_For_45_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 55)(1, "div", 77)(2, "mat-icon", 34);
    \u0275\u0275text(3, "verified");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " Reputation Recorded Successfully ");
    \u0275\u0275elementEnd()();
  }
}
function ChatComponent_For_45_Conditional_2_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 80);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx);
  }
}
function ChatComponent_For_45_Conditional_2_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 65);
    \u0275\u0275element(1, "mat-progress-spinner", 70);
    \u0275\u0275text(2, " Pending ");
    \u0275\u0275elementEnd();
  }
}
function ChatComponent_For_45_Conditional_2_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 81);
    \u0275\u0275element(1, "mat-progress-spinner", 70);
    \u0275\u0275text(2, " Processing ");
    \u0275\u0275elementEnd();
  }
}
function ChatComponent_For_45_Conditional_2_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 66)(1, "mat-icon", 71);
    \u0275\u0275text(2, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Confirmed ");
    \u0275\u0275elementEnd();
  }
}
function ChatComponent_For_45_Conditional_2_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 83)(1, "div", 84);
    \u0275\u0275text(2, "Amount");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 64);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const msg_r9 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", msg_r9.paymentAmount, " ");
  }
}
function ChatComponent_For_45_Conditional_2_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 69)(1, "label", 72);
    \u0275\u0275text(2, "Transaction Hash");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "a", 85)(4, "div", 86)(5, "div", 87)(6, "mat-icon", 88);
    \u0275\u0275text(7, "receipt");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "span", 89);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 90)(11, "span", 91);
    \u0275\u0275text(12, "View on Snowtrace");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "mat-icon", 92);
    \u0275\u0275text(14, "open_in_new");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const txHash_r10 = ctx;
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275property("href", ctx_r3.getSnowtraceUrl() + "/tx/" + txHash_r10, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(txHash_r10);
  }
}
function ChatComponent_For_45_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 54)(1, "div", 57);
    \u0275\u0275text(2, " AI ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 58)(4, "div", 59)(5, "div", 60)(6, "div", 61)(7, "div", 78)(8, "mat-icon", 79);
    \u0275\u0275text(9, "check_circle");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "span", 64);
    \u0275\u0275text(11, "Payment Confirmation");
    \u0275\u0275elementEnd();
    \u0275\u0275template(12, ChatComponent_For_45_Conditional_2_Conditional_12_Template, 2, 1, "span", 80);
    \u0275\u0275elementEnd();
    \u0275\u0275template(13, ChatComponent_For_45_Conditional_2_Conditional_13_Template, 3, 0, "div", 65)(14, ChatComponent_For_45_Conditional_2_Conditional_14_Template, 3, 0, "div", 81)(15, ChatComponent_For_45_Conditional_2_Conditional_15_Template, 4, 0, "div", 66);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 67)(17, "div", 82)(18, "p", 68);
    \u0275\u0275text(19, " Payment transaction submitted successfully. ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(20, ChatComponent_For_45_Conditional_2_Conditional_20_Template, 5, 1, "div", 83);
    \u0275\u0275elementEnd();
    \u0275\u0275template(21, ChatComponent_For_45_Conditional_2_Conditional_21_Template, 15, 2, "div", 69);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_13_0;
    let tmp_16_0;
    const msg_r9 = \u0275\u0275nextContext().$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(12);
    \u0275\u0275conditional((tmp_13_0 = msg_r9.paymentCurrency || ctx_r3.extractPaymentCurrency(msg_r9.content)) ? 12 : -1, tmp_13_0);
    \u0275\u0275advance();
    \u0275\u0275conditional(msg_r9.paymentStatus === "pending" || msg_r9.content.includes("Waiting") ? 13 : msg_r9.paymentStatus === "processing" || msg_r9.content.includes("Processing") ? 14 : 15);
    \u0275\u0275advance(7);
    \u0275\u0275conditional(msg_r9.paymentAmount ? 20 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_16_0 = msg_r9.paymentTx || ctx_r3.extractPaymentTxHash(msg_r9.content)) ? 21 : -1, tmp_16_0);
  }
}
function ChatComponent_For_45_Conditional_3_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon", 94);
    \u0275\u0275text(1, "person");
    \u0275\u0275elementEnd();
  }
}
function ChatComponent_For_45_Conditional_3_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " AI ");
  }
}
function ChatComponent_For_45_Conditional_3_Conditional_8_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "img", 101);
    \u0275\u0275listener("click", function ChatComponent_For_45_Conditional_3_Conditional_8_For_2_Template_img_click_0_listener($event) {
      const imgSrc_r12 = \u0275\u0275restoreView(_r11).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(4);
      $event.stopPropagation();
      return \u0275\u0275resetView(ctx_r3.window.open(ctx_r3.getImageUrl(imgSrc_r12), "_blank"));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const imgSrc_r12 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(4);
    \u0275\u0275property("src", ctx_r3.getImageUrl(imgSrc_r12), \u0275\u0275sanitizeUrl);
  }
}
function ChatComponent_For_45_Conditional_3_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 98);
    \u0275\u0275repeaterCreate(1, ChatComponent_For_45_Conditional_3_Conditional_8_For_2_Template, 1, 1, "img", 100, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const msg_r9 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275repeater(msg_r9.images);
  }
}
function ChatComponent_For_45_Conditional_3_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 99)(1, "div", 102)(2, "span", 103);
    \u0275\u0275text(3, "\u26A1");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 104);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 105);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "button", 106);
    \u0275\u0275listener("click", function ChatComponent_For_45_Conditional_3_Conditional_9_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r13);
      const $index_r14 = \u0275\u0275nextContext(2).$index;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.confirmPayment($index_r14));
    });
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const msg_r9 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 4, "chat.payment.required"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", msg_r9.payment_required.amount, " AVAX ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" To: ", msg_r9.payment_required.receiver_address, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(12, 6, "chat.payment.payBtn"), " ");
  }
}
function ChatComponent_For_45_Conditional_3_Conditional_10_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 109)(1, "div", 61)(2, "div", 111)(3, "mat-icon", 34);
    \u0275\u0275text(4, "verified");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 112);
    \u0275\u0275text(6, " Validated On-Chain ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "a", 113);
    \u0275\u0275text(8, " View TX ");
    \u0275\u0275elementStart(9, "mat-icon", 71);
    \u0275\u0275text(10, "open_in_new");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const msg_r9 = \u0275\u0275nextContext(3).$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275property("href", ctx_r3.getSnowtraceUrl() + "/tx/" + msg_r9.proof, \u0275\u0275sanitizeUrl);
  }
}
function ChatComponent_For_45_Conditional_3_Conditional_10_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 114);
    \u0275\u0275listener("click", function ChatComponent_For_45_Conditional_3_Conditional_10_Conditional_5_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r3 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r3.openFeedbackModal());
    });
    \u0275\u0275elementStart(1, "mat-icon", 71);
    \u0275\u0275text(2, "star_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Rate this ");
    \u0275\u0275elementEnd();
  }
}
function ChatComponent_For_45_Conditional_3_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 107)(1, "pre", 108);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "json");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(4, ChatComponent_For_45_Conditional_3_Conditional_10_Conditional_4_Template, 11, 1, "div", 109)(5, ChatComponent_For_45_Conditional_3_Conditional_10_Conditional_5_Template, 4, 0, "button", 110);
  }
  if (rf & 2) {
    const msg_r9 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 3, msg_r9.data));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(msg_r9.proof ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r3.chatMode() === "x402" && msg_r9.role === "assistant" ? 5 : -1);
  }
}
function ChatComponent_For_45_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 54)(1, "div", 93);
    \u0275\u0275template(2, ChatComponent_For_45_Conditional_3_Conditional_2_Template, 2, 0, "mat-icon", 94)(3, ChatComponent_For_45_Conditional_3_Conditional_3_Template, 1, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 95)(5, "div", 96);
    \u0275\u0275element(6, "div", 97);
    \u0275\u0275pipe(7, "markdown");
    \u0275\u0275template(8, ChatComponent_For_45_Conditional_3_Conditional_8_Template, 3, 0, "div", 98)(9, ChatComponent_For_45_Conditional_3_Conditional_9_Template, 13, 8, "div", 99)(10, ChatComponent_For_45_Conditional_3_Conditional_10_Template, 6, 5);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const msg_r9 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275classProp("flex-row-reverse", msg_r9.role === "user");
    \u0275\u0275advance();
    \u0275\u0275classProp("bg-slate-900", msg_r9.role === "user")("text-white", msg_r9.role === "user")("bg-slate-200", msg_r9.role !== "user")("text-slate-700", msg_r9.role !== "user")("dark:bg-slate-700", msg_r9.role !== "user")("dark:text-slate-50", msg_r9.role !== "user");
    \u0275\u0275advance();
    \u0275\u0275conditional(msg_r9.role === "user" ? 2 : 3);
    \u0275\u0275advance(3);
    \u0275\u0275classProp("bg-slate-900", msg_r9.role === "user")("text-white", msg_r9.role === "user")("border-slate-800", msg_r9.role === "user")("rounded-tr-sm", msg_r9.role === "user")("bg-white", msg_r9.role !== "user")("text-slate-700", msg_r9.role !== "user")("dark:bg-slate-800", msg_r9.role !== "user")("dark:text-slate-200", msg_r9.role !== "user")("border-slate-200", msg_r9.role !== "user")("dark:border-slate-700", msg_r9.role !== "user")("rounded-tl-sm", msg_r9.role !== "user");
    \u0275\u0275advance();
    \u0275\u0275property("innerHTML", \u0275\u0275pipeBind1(7, 41, msg_r9.content), \u0275\u0275sanitizeHtml);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(msg_r9.images && msg_r9.images.length > 0 ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(msg_r9.payment_required ? 9 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(msg_r9.data ? 10 : -1);
  }
}
function ChatComponent_For_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ChatComponent_For_45_Conditional_0_Template, 18, 2, "div", 54)(1, ChatComponent_For_45_Conditional_1_Template, 5, 0, "div", 55)(2, ChatComponent_For_45_Conditional_2_Template, 22, 4, "div", 54)(3, ChatComponent_For_45_Conditional_3_Template, 11, 43, "div", 56);
  }
  if (rf & 2) {
    const msg_r9 = ctx.$implicit;
    \u0275\u0275conditional(msg_r9.role === "system" && msg_r9.content.includes("Feedback submitted") ? 0 : msg_r9.role === "system" && msg_r9.content.includes("Thank you for your feedback") ? 1 : msg_r9.role === "system" && (msg_r9.content.includes("Payment sent") || msg_r9.paymentTx) ? 2 : 3);
  }
}
function ChatComponent_Conditional_46_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 121);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, ctx_r3.currentThinkingStep()), " ");
  }
}
function ChatComponent_Conditional_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25)(1, "div", 115);
    \u0275\u0275text(2, " AI ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 116)(4, "div", 117);
    \u0275\u0275element(5, "div", 118)(6, "div", 119)(7, "div", 120);
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, ChatComponent_Conditional_46_Conditional_8_Template, 3, 3, "div", 121);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275conditional(ctx_r3.thinkingSteps().length > 0 ? 8 : -1);
  }
}
function ChatComponent_Conditional_48_For_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 124);
    \u0275\u0275listener("click", function ChatComponent_Conditional_48_For_3_Template_div_click_0_listener() {
      const img_r17 = \u0275\u0275restoreView(_r16).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.openImagePreview(img_r17));
    });
    \u0275\u0275element(1, "img", 125);
    \u0275\u0275elementStart(2, "button", 126);
    \u0275\u0275listener("click", function ChatComponent_Conditional_48_For_3_Template_button_click_2_listener($event) {
      const $index_r18 = \u0275\u0275restoreView(_r16).$index;
      const ctx_r3 = \u0275\u0275nextContext(2);
      $event.stopPropagation();
      return \u0275\u0275resetView(ctx_r3.removeAttachment($index_r18));
    });
    \u0275\u0275elementStart(3, "mat-icon", 127);
    \u0275\u0275text(4, "close");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const img_r17 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("src", img_r17, \u0275\u0275sanitizeUrl);
  }
}
function ChatComponent_Conditional_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27)(1, "div", 122);
    \u0275\u0275repeaterCreate(2, ChatComponent_Conditional_48_For_3_Template, 5, 1, "div", 123, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r3.pendingAttachments());
  }
}
function ChatComponent_Conditional_58_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-progress-spinner", 33);
  }
}
function ChatComponent_Conditional_59_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon", 34);
    \u0275\u0275text(1, "arrow_upward");
    \u0275\u0275elementEnd();
  }
}
function ChatComponent_Conditional_62_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 128);
    \u0275\u0275listener("click", function ChatComponent_Conditional_62_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r20);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.closeImagePreview());
    });
    \u0275\u0275elementStart(1, "button", 129);
    \u0275\u0275listener("click", function ChatComponent_Conditional_62_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r20);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.closeImagePreview());
    });
    \u0275\u0275elementStart(2, "mat-icon", 130);
    \u0275\u0275text(3, "close");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "img", 131);
    \u0275\u0275listener("click", function ChatComponent_Conditional_62_Template_img_click_4_listener($event) {
      \u0275\u0275restoreView(_r20);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("src", ctx_r3.previewImage(), \u0275\u0275sanitizeUrl);
  }
}
function ChatComponent_Conditional_63_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 139);
    \u0275\u0275element(1, "mat-progress-spinner", 141);
    \u0275\u0275elementEnd();
  }
}
function ChatComponent_Conditional_63_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-agent-erc8004", 140);
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275property("agentInfo", ctx_r3.agentInfo());
  }
}
function ChatComponent_Conditional_63_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 132);
    \u0275\u0275listener("click", function ChatComponent_Conditional_63_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r21);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.toggleAgentInfoModal());
    });
    \u0275\u0275elementStart(1, "div", 133);
    \u0275\u0275listener("click", function ChatComponent_Conditional_63_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r21);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 134)(3, "div", 135)(4, "h2", 136);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 137);
    \u0275\u0275listener("click", function ChatComponent_Conditional_63_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r21);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.toggleAgentInfoModal());
    });
    \u0275\u0275elementStart(8, "mat-icon");
    \u0275\u0275text(9, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 138);
    \u0275\u0275template(11, ChatComponent_Conditional_63_Conditional_11_Template, 2, 0, "div", 139)(12, ChatComponent_Conditional_63_Conditional_12_Template, 1, 1, "app-agent-erc8004", 140);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 2, "chat.agentInfo.title"), " ");
    \u0275\u0275advance(6);
    \u0275\u0275conditional(ctx_r3.isLoadingAgentInfo() ? 11 : 12);
  }
}
function ChatComponent_Conditional_64_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 145);
    \u0275\u0275element(1, "img", 158);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r3.walletQrCode(), \u0275\u0275sanitizeUrl);
  }
}
function ChatComponent_Conditional_64_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 155);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275elementStart(3, "span", 154);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 2, ctx_r3.tokenBalance(), "1.0-2"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r3.tokenTicker);
  }
}
function ChatComponent_Conditional_64_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 132);
    \u0275\u0275listener("click", function ChatComponent_Conditional_64_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r22);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.toggleWalletModal());
    });
    \u0275\u0275elementStart(1, "div", 142);
    \u0275\u0275listener("click", function ChatComponent_Conditional_64_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r22);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "button", 143);
    \u0275\u0275listener("click", function ChatComponent_Conditional_64_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r22);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.toggleWalletModal());
    });
    \u0275\u0275elementStart(3, "mat-icon");
    \u0275\u0275text(4, "close");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "h2", 144);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, ChatComponent_Conditional_64_Conditional_8_Template, 2, 1, "div", 145);
    \u0275\u0275elementStart(9, "div", 146)(10, "label", 147);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 148)(14, "code", 149);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "button", 150);
    \u0275\u0275listener("click", function ChatComponent_Conditional_64_Template_button_click_16_listener() {
      \u0275\u0275restoreView(_r22);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.copyAddress());
    });
    \u0275\u0275elementStart(17, "mat-icon", 151);
    \u0275\u0275text(18, "content_copy");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(19, "div", 152)(20, "label", 147);
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 153);
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "number");
    \u0275\u0275elementStart(26, "span", 154);
    \u0275\u0275text(27, "AVAX");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(28, ChatComponent_Conditional_64_Conditional_28_Template, 5, 5, "div", 155);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "button", 156);
    \u0275\u0275listener("click", function ChatComponent_Conditional_64_Template_button_click_29_listener() {
      \u0275\u0275restoreView(_r22);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.refreshBalance());
    });
    \u0275\u0275text(30);
    \u0275\u0275pipe(31, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "button", 157);
    \u0275\u0275listener("click", function ChatComponent_Conditional_64_Template_button_click_32_listener() {
      \u0275\u0275restoreView(_r22);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.resetWallet());
    });
    \u0275\u0275text(33);
    \u0275\u0275pipe(34, "transloco");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 9, "chat.walletModal.title"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r3.walletQrCode() ? 8 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 11, "chat.walletModal.addressLabel"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r3.walletAddress());
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(22, 13, "chat.walletModal.balanceLabel"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(25, 15, ctx_r3.walletBalance(), "1.4-4"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r3.tokenBalance() && ctx_r3.tokenBalance() !== "0.00" && ctx_r3.tokenBalance() !== "0.0" ? 28 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(31, 18, "chat.walletModal.refresh"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(34, 20, "chat.walletModal.reset"), " ");
  }
}
function ChatComponent_Conditional_65_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38)(1, "mat-icon", 159);
    \u0275\u0275text(2, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r3.toastMessage(), " ");
  }
}
var ChatComponent = class _ChatComponent {
  /**
   * Get the Snowtrace explorer URL based on network configuration
   * Uses explicit isTestnet flag from environment, or falls back to chainId/RPC URL detection
   */
  getSnowtraceUrl() {
    if (environment.isTestnet !== void 0) {
      return environment.isTestnet ? "https://testnet.snowtrace.io" : "https://snowtrace.io";
    }
    if (environment.chainId) {
      return environment.chainId === 43113 ? "https://testnet.snowtrace.io" : "https://snowtrace.io";
    }
    const rpcUrl = environment.rpcUrl || "";
    const isTestnet = rpcUrl.includes("test") || rpcUrl.includes("fuji") || rpcUrl.includes("43113");
    return isTestnet ? "https://testnet.snowtrace.io" : "https://snowtrace.io";
  }
  getInitialSidebarState() {
    const saved = localStorage.getItem("isSidebarOpen");
    if (saved !== null) {
      return saved === "true";
    }
    return window.innerWidth >= 1024;
  }
  constructor(http, walletService, _matDialog) {
    this.http = http;
    this.walletService = walletService;
    this._matDialog = _matDialog;
    this.window = window;
    this.baseUrl = environment.baseUrl;
    this.smartAgentUrl = environment.smartAgentUrl;
    this.tokenTicker = environment.tokenTicker || "VKA";
    this.apiUrl = `${environment.smartAgentUrl}/api/agent`;
    this.messages = signal([]);
    this.userInput = signal("");
    this.isLoading = signal(false);
    this.walletAddress = signal("");
    this.walletBalance = signal("0");
    this.tokenBalance = signal("0");
    this.showWalletModal = signal(false);
    this.chatMode = signal("x402");
    this.showAgentInfoModal = signal(false);
    this.agentInfo = signal(null);
    this.isLoadingAgentInfo = signal(false);
    this.agentCardUrl = `${this.apiUrl}/agent-card.json`;
    this.showPaymentConfirmationModal = signal(false);
    this.pendingPayment = signal(null);
    this.isProcessingPayment = signal(false);
    this.showPaymentDetails = signal(false);
    this.lastPaymentTx = signal(null);
    this.thinkingSteps = signal([]);
    this.currentThinkingStep = signal("");
    this.conversations = signal([]);
    this.currentConversationId = signal(null);
    this.isSidebarOpen = signal(this.getInitialSidebarState());
    this.isRenamingId = signal(null);
    this.renameInput = signal("");
    this.pendingAttachments = signal([]);
    this.walletQrCode = signal("");
    this.showToast = signal(false);
    this.toastMessage = signal("");
    this.previewImage = signal(null);
  }
  ngOnInit() {
    return __async(this, null, function* () {
      this.walletAddress.set(this.walletService.getAddress());
      yield this.refreshBalance();
      this.walletService.registerVkaToken();
      const currentWallet = this.walletAddress();
      const lastWallet = localStorage.getItem("lastWalletAddress");
      if (currentWallet !== lastWallet) {
        console.log("Wallet changed, clearing session.");
        localStorage.removeItem("currentConversationId");
        localStorage.setItem("lastWalletAddress", currentWallet || "");
        this.currentConversationId.set(null);
      }
      this.loadAgentInfo();
      const savedMode = localStorage.getItem("chatMode");
      const hasWallet = !!this.walletService.getAddress();
      const hasCredits = !!localStorage.getItem("accessToken");
      const walletBalance = parseFloat(this.walletBalance() || "0");
      if (savedMode && (savedMode === "x402" && hasWallet || savedMode === "credits" && hasCredits)) {
        this.chatMode.set(savedMode);
      } else {
        if (hasCredits && !hasWallet) {
          this.setChatMode("credits");
        } else if (hasWallet && hasCredits) {
          if (walletBalance < 0.01) {
            this.setChatMode("credits");
          } else {
            this.setChatMode("x402");
          }
        } else if (hasWallet) {
          this.setChatMode("x402");
        }
      }
      this.loadConversations();
      const savedId = localStorage.getItem("currentConversationId");
      if (savedId) {
        this.selectConversation(savedId);
      } else {
        this.startNewChat(false);
      }
    });
  }
  // --- Conversations Logic ---
  loadConversations() {
    const params = {};
    if (this.chatMode() === "x402" && this.walletAddress()) {
      params.walletAddress = this.walletAddress();
    } else if (this.chatMode() === "credits") {
      params.walletAddress = this.getUserId();
    }
    this.http.get(`${this.apiUrl}/conversations`, { params }).subscribe({
      next: (list) => this.conversations.set(list),
      error: (err) => console.error("Failed to load conversations", err)
    });
  }
  selectConversation(id) {
    this.currentConversationId.set(id);
    localStorage.setItem("currentConversationId", id);
    this.isLoading.set(true);
    let walletAddress = "";
    if (this.chatMode() === "x402") {
      walletAddress = this.walletAddress();
    } else {
      walletAddress = this.getUserId();
    }
    const params = { walletAddress };
    this.http.get(`${this.apiUrl}/history/${id}`, { params }).subscribe({
      next: (data) => {
        this.messages.set(data.messages || []);
        this.isLoading.set(false);
        this.scrollToBottom();
      },
      error: (err) => {
        console.error("Failed to load history", err);
        if (err.status === 403 || err.status === 404) {
          localStorage.removeItem("currentConversationId");
          this.currentConversationId.set(null);
          this.messages.set([]);
        }
        this.isLoading.set(false);
      }
    });
  }
  startNewChat(clearStorage = true) {
    if (clearStorage) {
      localStorage.removeItem("currentConversationId");
    }
    this.currentConversationId.set(null);
    this.userInput.set("");
    this.pendingAttachments.set([]);
    this.thinkingSteps.set([]);
    this.currentThinkingStep.set("");
    this.isLoading.set(false);
    this.messages.set([]);
    const identity = this.agentInfo()?.identity;
    const welcomeMsg = identity ? `Hello! I am ${identity.name}. ${identity.description} How can I assist you today?` : "Hello! I am your Verifik AI Agent powered by Gemini. I can help you validate identities using the x402 protocol on Avalanche. How can I assist you today?";
    this.messages.set([{ role: "assistant", content: welcomeMsg }]);
    if (clearStorage) {
      const payload = {
        mode: this.chatMode(),
        walletAddress: this.chatMode() === "credits" ? this.getUserId() : this.walletAddress()
      };
      this.http.post(`${this.apiUrl}/conversations`, payload).subscribe({
        next: (conv) => {
          this.currentConversationId.set(conv.id);
          localStorage.setItem("currentConversationId", conv.id);
          this.loadConversations();
        },
        error: (err) => console.error("Failed to create new chat", err)
      });
    }
  }
  startRenaming(conv, event) {
    event.stopPropagation();
    this.isRenamingId.set(conv.id);
    this.renameInput.set(conv.title);
  }
  saveRename(conv) {
    const newTitle = this.renameInput().trim();
    if (!newTitle || newTitle === conv.title) {
      this.isRenamingId.set(null);
      return;
    }
    let walletAddress = "";
    if (this.chatMode() === "x402") {
      walletAddress = this.walletAddress();
    } else {
      walletAddress = this.getUserId();
    }
    this.http.patch(`${this.apiUrl}/conversations/${conv.id}`, { title: newTitle, walletAddress }).subscribe({
      next: () => {
        this.conversations.update((list) => list.map((c) => c.id === conv.id ? __spreadProps(__spreadValues({}, c), { title: newTitle }) : c));
        this.isRenamingId.set(null);
      },
      error: (err) => console.error("Rename failed", err)
    });
  }
  deleteConversation(conv, event) {
    event.stopPropagation();
    const dialogRef = this._matDialog.open(DeleteConfirmationComponent, {
      panelClass: "delete-confirmation-dialog",
      backdropClass: "backdrop-blur-sm",
      width: "400px",
      maxWidth: "90vw"
    });
    dialogRef.afterClosed().subscribe((confirmed) => {
      if (!confirmed)
        return;
      let walletAddress = "";
      if (this.chatMode() === "x402") {
        walletAddress = this.walletAddress();
      } else {
        walletAddress = this.getUserId();
      }
      this.http.delete(`${this.apiUrl}/conversations/${conv.id}`, { params: { walletAddress } }).subscribe({
        next: () => {
          this.conversations.update((list) => list.filter((c) => c.id !== conv.id));
          if (this.currentConversationId() === conv.id) {
            this.startNewChat();
          }
        },
        error: (err) => console.error("Delete failed", err)
      });
    });
  }
  toggleSidebar() {
    this.isSidebarOpen.update((v2) => {
      const newState = !v2;
      localStorage.setItem("isSidebarOpen", String(newState));
      return newState;
    });
  }
  // --- Existing Logic ---
  loadAgentInfo() {
    return __async(this, null, function* () {
      this.isLoadingAgentInfo.set(true);
      try {
        this.http.get(`${this.apiUrl}/info`).subscribe({
          next: (info) => {
            this.agentInfo.set(info);
            this.isLoadingAgentInfo.set(false);
          },
          error: (err) => {
            console.warn("Failed to load agent info:", err);
            this.isLoadingAgentInfo.set(false);
          }
        });
      } catch (error) {
        console.warn("Error loading agent info:", error);
        this.isLoadingAgentInfo.set(false);
      }
    });
  }
  toggleAgentInfoModal() {
    this.showAgentInfoModal.update((show) => !show);
  }
  openAuthModal() {
    this._matDialog.open(AuthModalComponent, {
      panelClass: "auth-modal-dialog",
      width: "400px",
      maxWidth: "100vw"
    });
  }
  // --- Chat & Sending ---
  setChatMode(mode) {
    this.chatMode.set(mode);
    localStorage.setItem("chatMode", mode);
    this.currentConversationId.set(null);
    localStorage.removeItem("currentConversationId");
    this.messages.set([]);
    this.refreshBalance();
    this.loadConversations();
    this.startNewChat(false);
  }
  onPaste(event) {
    return __async(this, null, function* () {
      const items = event.clipboardData?.items;
      if (items) {
        for (let i = 0; i < items.length; i++) {
          if (items[i].type.indexOf("image") !== -1) {
            const blob = items[i].getAsFile();
            if (blob) {
              const base64 = yield this.fileToBase64(blob);
              this.pendingAttachments.update((current) => [...current, base64]);
            }
          }
        }
      }
    });
  }
  onFileSelected(event) {
    const input = event.target;
    if (input.files) {
      Array.from(input.files).forEach((file) => __async(this, null, function* () {
        const base64 = yield this.fileToBase64(file);
        this.pendingAttachments.update((current) => [...current, base64]);
      }));
    }
    input.value = "";
  }
  removeAttachment(index) {
    this.pendingAttachments.update((current) => current.filter((_2, i) => i !== index));
  }
  fileToBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  }
  sendMessage() {
    return __async(this, null, function* () {
      const input = this.userInput();
      const images = this.pendingAttachments();
      if (!input.trim() && images.length === 0)
        return;
      const isCredits = this.chatMode() === "credits";
      const hasWallet = !!this.walletService.getAddress();
      const hasCredits = !!localStorage.getItem("accessToken");
      if (!hasWallet && !hasCredits) {
        this.openAuthModal();
        return;
      }
      if (!isCredits && !hasWallet) {
        this.openAuthModal();
        return;
      }
      if (isCredits && !hasCredits) {
        this.openAuthModal();
        return;
      }
      const userMsg = {
        role: "user",
        content: input,
        // For display, we might want to show images?
        // Since backend returns URLs later, for now let's show them as data imgs if we wanted.
        // But preserving current structure, we'll wait for backend response or just not show images in USER bubble immediately
        // unless we extend ChatMessage interface.
        // Let's extend ChatMessage interface first? Added `images?: string[]` to interface below.
        images
      };
      this.messages.update((msgs) => [...msgs, userMsg]);
      this.userInput.set("");
      this.pendingAttachments.set([]);
      this.isLoading.set(true);
      this.scrollToBottom();
      this.startThinkingSimulation();
      try {
        yield this.callAgent(input, null, null, images);
      } catch (error) {
        this.handleError(error);
      }
    });
  }
  callAgent(_0) {
    return __async(this, arguments, function* (message, paymentTx = null, paymentAmount = null, images = [], pendingToolCall = null) {
      const isCredits = this.chatMode() === "credits";
      const userToken = isCredits ? localStorage.getItem("accessToken") : null;
      const payload = {
        message,
        conversationId: this.currentConversationId(),
        paymentTx: isCredits ? null : paymentTx,
        paymentWallet: isCredits ? this.getUserId() : this.walletAddress(),
        paymentAmount: isCredits ? null : paymentAmount,
        mode: this.chatMode(),
        userToken,
        images,
        pendingToolCall
      };
      this.http.post(`${this.apiUrl}/chat`, payload, { observe: "response" }).subscribe({
        next: (httpResponse) => {
          this.isLoading.set(false);
          this.thinkingSteps.set([]);
          this.currentThinkingStep.set("");
          const response = httpResponse.body;
          const headers = httpResponse.headers;
          if (response.conversationId && !this.currentConversationId()) {
            this.currentConversationId.set(response.conversationId);
            localStorage.setItem("currentConversationId", response.conversationId);
            this.loadConversations();
          }
          const proofHeader = headers.get("x-validation-proof");
          let proof = response.proof || response._proof || proofHeader;
          const msg = {
            role: response.role,
            content: response.content,
            tool_call: response.tool_call,
            payment_required: response.payment_required,
            data: response.data,
            proof,
            images: response.images
            // Backend should return image URLs if any were processed/saved
          };
          this.messages.update((msgs) => [...msgs, msg]);
          this.scrollToBottom();
          if (msg.data && msg.role === "assistant") {
            const paymentMsgs = this.messages().filter((m2) => m2.role === "system" && (m2.paymentTx || m2.content.includes("TX:"))).reverse();
            if (paymentMsgs.length > 0) {
              const paymentMsg = paymentMsgs[0];
              const txHash = paymentMsg.paymentTx || this.extractPaymentTxHash(paymentMsg.content);
              if (txHash) {
                this.lastPaymentTx.set(txHash);
                this.updatePaymentMessageStatus(txHash, "confirmed");
              }
            }
            if (!msg.proof && this.chatMode() === "x402" && msg.tool_call && msg.data) {
              this.fetchProofAsync(msg, this.messages().length - 1);
            }
          }
        },
        error: (err) => {
          this.handleError(err);
        }
      });
    });
  }
  // --- Helpers & Other Modals (Same as before) ---
  startThinkingSimulation() {
    const steps = [
      "agentThinking.steps.analysing",
      "agentThinking.steps.identifying",
      "agentThinking.steps.checking",
      "agentThinking.steps.consulting",
      "agentThinking.steps.preparing"
    ];
    this.thinkingSteps.set([]);
    this.currentThinkingStep.set("agentThinking.header");
    let i = 0;
    const interval = setInterval(() => {
      if (!this.isLoading() || i >= steps.length) {
        clearInterval(interval);
        return;
      }
      const step = steps[i];
      this.thinkingSteps.update((s) => [...s, step]);
      this.currentThinkingStep.set(step);
      this.scrollToBottom();
      i++;
    }, 800);
  }
  openFeedbackModal() {
    const dialogRef = this._matDialog.open(AgentFeedbackComponent, {
      panelClass: "agent-feedback-dialog",
      backdropClass: "backdrop-blur-sm",
      data: {
        agentTokenId: 1,
        paymentTxHash: this.lastPaymentTx()
      }
    });
    dialogRef.afterClosed().subscribe((result) => __async(this, null, function* () {
      if (result && result.success) {
        this.messages.update((msgs) => [
          ...msgs,
          {
            role: "system",
            content: `Feedback submitted! Transaction: ${result.txHash}. Waiting for confirmation...`
          }
        ]);
        this.scrollToBottom();
        try {
          this.walletService.startActivePolling();
          yield result.tx.wait();
          this.walletService.pausePolling();
          this.messages.update((msgs) => {
            return msgs.map((msg) => {
              if (msg.role === "system" && msg.content.includes(result.txHash) && msg.content.includes("Waiting")) {
                return __spreadProps(__spreadValues({}, msg), {
                  content: `Feedback submitted! Transaction: ${result.txHash}. Validated.`
                });
              }
              return msg;
            });
          });
          this.scrollToBottom();
          yield this.loadAgentInfo();
        } catch (error) {
          this.walletService.pausePolling();
          console.error("Transaction confirmation error:", error);
          this.messages.update((msgs) => [
            ...msgs,
            {
              role: "system",
              content: `\u26A0\uFE0F Transaction was sent but confirmation failed. Please check the explorer.`
            }
          ]);
          this.scrollToBottom();
        }
      } else if (result && result.error) {
        this.handleError(result.error);
      }
    }));
  }
  refreshBalance() {
    this.walletService.getBalance().then((b2) => this.walletBalance.set(b2));
    this.walletService.getTokenBalance().then((b2) => this.tokenBalance.set(b2));
  }
  getImageUrl(src) {
    if (!src)
      return "";
    if (src.startsWith("http") || src.startsWith("data:")) {
      return src;
    }
    if (src.startsWith("/api")) {
      return `${this.smartAgentUrl}${src}`;
    }
    return `${this.baseUrl}${src}`;
  }
  getUserId() {
    try {
      const accountStr = localStorage.getItem("verifik_account");
      if (accountStr) {
        const account = JSON.parse(accountStr);
        if (account && account._id)
          return account._id;
      }
    } catch (e) {
      console.warn("Failed to parse verifik_account from local storage");
    }
    const token = localStorage.getItem("accessToken");
    if (!token)
      return "";
    try {
      const payload = JSON.parse(atob(token.split(".")[1]));
      return payload.clientId || payload._id || payload.id || payload.sub || "authenticated_user";
    } catch (e) {
      console.error("Failed to parse token", e);
      return "authenticated_user";
    }
  }
  togglePaymentDetails() {
    this.showPaymentDetails.update((v2) => !v2);
  }
  confirmPayment(msgIndex) {
    const msg = this.messages()[msgIndex];
    if (!msg.payment_required)
      return;
    const dialogRef = this._matDialog.open(PaymentConfirmationComponent, {
      panelClass: "payment-confirmation-dialog",
      backdropClass: "backdrop-blur-sm",
      data: {
        amount: msg.payment_required.amount,
        currentBalance: this.walletBalance(),
        tokenBalance: this.tokenBalance(),
        receiver: msg.payment_required.receiver_address,
        endpoint: msg.payment_required.endpoint || msg.payment_required.toolName || "Unknown",
        details: msg.payment_required.details,
        priceVka: msg.payment_required.priceVka,
        vkaContract: msg.payment_required.vkaContract
      }
    });
    dialogRef.afterClosed().subscribe((result) => __async(this, null, function* () {
      if (result && result.confirmed) {
        yield this.executePayment(msg.payment_required, result.currency);
      } else if (result === true) {
        yield this.executePayment(msg.payment_required, "AVAX");
      }
    }));
  }
  // cancelPayment removed (handled by dialog)
  executePayment(details, currency = "AVAX") {
    return __async(this, null, function* () {
      this.isProcessingPayment.set(true);
      const amount = details.amount;
      const contractAddress = details.receiver_address;
      const serviceId = details.serviceId || "cedula-validation";
      const requestId = details.requestId || `req_${Date.now()}`;
      try {
        let txResponse;
        let paidAmount = amount;
        if (currency === "VKA") {
          const priceVka = details["priceVka"] || details.priceUsd;
          const vkaContract = details["vkaContract"] || this.walletService.VKA_CONTRACT_ADDRESS;
          paidAmount = priceVka.toString();
          txResponse = yield this.walletService.payForServiceWithToken(contractAddress, vkaContract, paidAmount);
        } else {
          txResponse = yield this.walletService.payForService(contractAddress, serviceId, requestId, amount);
        }
        const { tx } = txResponse;
        this.addPaymentConfirmationMessage(tx.hash, currency, paidAmount, "pending");
        this.lastPaymentTx.set(tx.hash);
        this.updatePaymentMessageStatus(tx.hash, "processing");
        this.isLoading.set(true);
        this.startThinkingSimulation();
        const originalMsg = this.messages().find((m2) => m2.payment_required === details);
        const pendingToolCall = originalMsg?.tool_call;
        console.log("Completing payment with tool call:", pendingToolCall);
        yield this.callAgent(
          "Payment complete. Please proceed.",
          tx.hash,
          paidAmount,
          // Use paid amount (VKA or AVAX)
          [],
          pendingToolCall
        );
        yield this.refreshBalance();
      } catch (error) {
        this.handleError(error);
      } finally {
        this.isProcessingPayment.set(false);
      }
    });
  }
  handleError(error) {
    this.isLoading.set(false);
    console.error(error);
    this.messages.update((msgs) => [
      ...msgs,
      { role: "system", content: "Error: " + (error.message || "Something went wrong") }
    ]);
    this.scrollToBottom();
  }
  /**
   * Fetch proof asynchronously after the main response
   * This ensures the proof is generated and displayed even if it wasn't included in the initial response
   */
  fetchProofAsync(msg, messageIndex) {
    let paymentTx = null;
    if (this.lastPaymentTx()) {
      paymentTx = this.lastPaymentTx();
    } else {
      const paymentMsgs = this.messages().filter((m2) => m2.role === "system" && m2.content.includes("TX:")).reverse();
      for (const paymentMsg of paymentMsgs) {
        const txMatch = paymentMsg.content.match(/TX: (0x[a-fA-F0-9]+)/);
        if (txMatch) {
          paymentTx = txMatch[1];
          break;
        }
      }
    }
    if (!msg.tool_call || !msg.data || !paymentTx) {
      console.log("[Chat] Cannot fetch proof: missing required data", {
        hasToolCall: !!msg.tool_call,
        hasData: !!msg.data,
        hasPaymentTx: !!paymentTx
      });
      return;
    }
    const payload = {
      toolName: msg.tool_call.tool,
      args: msg.tool_call.args,
      result: msg.data,
      paymentTx
    };
    console.log("[Chat] Fetching proof asynchronously for tool:", msg.tool_call.tool);
    this.http.post(`${this.apiUrl}/proof`, payload).subscribe({
      next: (response) => {
        if (response.proof) {
          this.messages.update((msgs) => {
            const updated = [...msgs];
            if (updated[messageIndex]) {
              updated[messageIndex] = __spreadProps(__spreadValues({}, updated[messageIndex]), {
                proof: response.proof
              });
            }
            return updated;
          });
          console.log("[Chat] Proof fetched and updated:", response.proof);
          this.scrollToBottom();
        }
      },
      error: (err) => {
        console.warn("[Chat] Failed to fetch proof:", err);
      }
    });
  }
  toggleWalletModal() {
    this.showWalletModal.update((show) => !show);
    if (this.showWalletModal() && this.walletAddress()) {
      this.generateQrCode(this.walletAddress());
    }
  }
  generateQrCode(address) {
    QRCode.toDataURL(address, { width: 200, margin: 1 }, (err, url) => {
      if (!err)
        this.walletQrCode.set(url);
    });
  }
  openImagePreview(image) {
    this.previewImage.set(image);
  }
  closeImagePreview() {
    this.previewImage.set(null);
  }
  copyAddress() {
    return __async(this, null, function* () {
      try {
        yield navigator.clipboard.writeText(this.walletAddress());
        this.showToastNotification("Address copied to clipboard!");
      } catch (err) {
        console.error(err);
      }
    });
  }
  showToastNotification(message) {
    this.toastMessage.set(message);
    this.showToast.set(true);
    setTimeout(() => this.showToast.set(false), 3e3);
  }
  resetWallet() {
    return __async(this, null, function* () {
      if (confirm("Are you sure you want to reset your wallet?")) {
        this.walletService.resetWallet();
        this.walletAddress.set("");
        localStorage.setItem("lastWalletAddress", "");
        this.startNewChat(true);
        this.conversations.set([]);
        yield this.refreshBalance();
        this.showWalletModal.set(false);
      }
    });
  }
  scrollToBottom() {
    setTimeout(() => {
      if (this.scrollContainer?.nativeElement) {
        this.scrollContainer.nativeElement.scrollTop = this.scrollContainer.nativeElement.scrollHeight;
      }
    }, 100);
  }
  /**
   * Helper to extract transaction hash from a string.
   * Used in the template to avoid inline Regex which Angular parser rejects.
   */
  extractTxHash(content) {
    if (!content)
      return null;
    const match = content.match(/Transaction: (0x[a-fA-F0-9]+)/);
    return match ? match[1] : null;
  }
  /**
   * Extract transaction hash from payment message content
   * Handles formats like "Payment sent (VKA)! TX: 0x..." or "Payment sent! TX: 0x..."
   */
  extractPaymentTxHash(content) {
    if (!content)
      return null;
    const match = content.match(/TX:\s*(0x[a-fA-F0-9]+)/i);
    return match ? match[1] : null;
  }
  /**
   * Extract currency from payment message content
   * Handles formats like "Payment sent (VKA)!" or "Payment sent (AVAX)!"
   */
  extractPaymentCurrency(content) {
    if (!content)
      return null;
    const vkaMatch = content.match(/Payment sent\s*\(VKA\)/i);
    if (vkaMatch)
      return "VKA";
    const avaxMatch = content.match(/Payment sent\s*\(AVAX\)/i);
    if (avaxMatch)
      return "AVAX";
    if (content.includes("Payment sent"))
      return "AVAX";
    return null;
  }
  /**
   * Create and add a payment confirmation message to the chat
   * This provides a structured, maintainable way to create payment confirmation messages
   */
  addPaymentConfirmationMessage(txHash, currency, amount, status = "pending") {
    const statusText = status === "pending" ? "Waiting for confirmation..." : status === "processing" ? "Processing..." : "Confirmed";
    const message = {
      role: "system",
      content: `Payment sent (${currency})! TX: ${txHash}. ${statusText}`,
      paymentTx: txHash,
      paymentCurrency: currency,
      paymentAmount: amount,
      paymentStatus: status
    };
    this.messages.update((msgs) => [...msgs, message]);
    this.scrollToBottom();
  }
  /**
   * Update the status of an existing payment message
   * This allows us to update the payment confirmation UI as the transaction progresses
   */
  updatePaymentMessageStatus(txHash, status) {
    this.messages.update((msgs) => msgs.map((msg) => {
      if (msg.role === "system" && msg.paymentTx === txHash) {
        const statusText = status === "processing" ? "Processing..." : "Confirmed";
        return __spreadProps(__spreadValues({}, msg), {
          content: `Payment sent (${msg.paymentCurrency || "AVAX"})! TX: ${txHash}. ${statusText}`,
          paymentStatus: status
        });
      }
      return msg;
    }));
  }
  static {
    this.\u0275fac = function ChatComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ChatComponent)(\u0275\u0275directiveInject(HttpClient), \u0275\u0275directiveInject(AgentWalletService), \u0275\u0275directiveInject(MatDialog));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ChatComponent, selectors: [["app-chat"]], viewQuery: function ChatComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c02, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.scrollContainer = _t.first);
      }
    }, decls: 66, vars: 55, consts: [["scrollContainer", ""], ["fileInput", ""], [1, "flex", "h-screen", "w-full", "bg-white", "dark:bg-slate-900", "overflow-hidden", "relative"], [1, "w-[280px]", "bg-slate-50", "dark:bg-slate-950", "border-r", "border-slate-200", "dark:border-slate-800", "flex", "flex-col", "transition-all", "duration-300", "shrink-0", "z-20"], [1, "h-16", "px-4", "border-b", "border-slate-200", "dark:border-slate-800", "flex", "items-center", "justify-between", "shadow-sm", "z-10"], [1, "flex", "items-center", "gap-2", "font-bold", "text-slate-700", "dark:text-slate-200"], [1, "text-slate-500"], [1, "w-8", "h-8", "flex", "items-center", "justify-center", "rounded-lg", "hover:bg-slate-200", "dark:hover:bg-slate-800", "transition-colors", "text-slate-600", "dark:text-slate-400", 3, "click", "matTooltip"], [1, "flex-1", "overflow-y-auto", "p-3", "space-y-1"], [1, "text-center", "py-8", "text-slate-400", "text-sm"], [1, "group", "flex", "items-center", "justify-between", "p-3", "rounded-xl", "cursor-pointer", "transition-all", "border", "border-transparent", 3, "bg-white", "dark:bg-slate-900", "shadow-sm", "border-slate-200", "dark:border-slate-800", "hover:bg-slate-200", "dark:hover:bg-slate-900"], [1, "flex-1", "flex", "flex-col", "h-full", "min-w-0", "relative", "bg-white", "dark:bg-slate-900"], [1, "h-16", "border-b", "border-slate-200", "dark:border-slate-800", "bg-white/80", "dark:bg-slate-900/80", "backdrop-blur-md", "px-4", "flex", "items-center", "justify-between", "shrink-0", "z-10"], [1, "flex", "items-center", "gap-3"], [1, "p-2", "rounded-lg", "hover:bg-slate-100", "dark:hover:bg-slate-800", "text-slate-500", 3, "click"], [1, "flex", "items-center", "gap-3", "cursor-pointer", "group", 3, "click"], [1, "w-9", "h-9", "rounded-full", "bg-slate-900", "text-white", "flex", "items-center", "justify-center", "font-bold", "text-xs", "shadow-sm", "relative", "group-hover:scale-105", "transition-transform"], [1, "absolute", "-bottom-0.5", "-right-0.5", "w-2.5", "h-2.5", "bg-green-500", "border-2", "border-white", "rounded-full"], [1, "font-bold", "text-slate-900", "dark:text-white", "text-sm", "group-hover:text-blue-600", "transition-colors"], [1, "text-[10px]", "text-slate-500", "font-medium", "hidden", "sm:block"], [1, "flex", "items-center", "bg-slate-100", "dark:bg-slate-800", "rounded-lg", "p-0.5", "border", "border-slate-200", "dark:border-slate-700", "hidden", "sm:flex"], [1, "px-3", "py-1.5", "rounded-md", "text-xs", "font-medium", "transition-all", 3, "click"], [1, "flex", "items-center", "gap-2", "px-3", "py-1.5", "rounded-full", "bg-slate-50", "dark:bg-slate-800", "border", "border-slate-200", "dark:border-slate-700", "cursor-pointer", "hover:border-slate-300", "transition-colors", "hover:shadow-sm"], [1, "flex-1", "overflow-y-auto", "messages-container", "p-4", "scroll-smooth", "max-h-[calc(100vh-16rem)]"], [1, "max-w-4xl", "mx-auto", "space-y-6", "pb-4"], [1, "message", "flex", "gap-4"], [1, "border-t", "border-slate-200", "dark:border-slate-800", "bg-white", "dark:bg-slate-900", "p-4", "shrink-0", "z-10"], [1, "max-w-4xl", "mx-auto", "mb-3", "pl-12"], [1, "max-w-4xl", "mx-auto", "flex", "gap-3", "items-center", "relative"], ["type", "file", "hidden", "", "multiple", "", "accept", "image/*", 3, "change"], ["mat-icon-button", "", "matTooltip", "Attach image", 1, "text-slate-400", "hover:text-slate-600", "dark:hover:text-slate-200", "transition-colors", 3, "click"], ["type", "text", 1, "flex-1", "h-12", "pl-4", "pr-12", "rounded-xl", "border", "border-slate-200", "dark:border-slate-700", "bg-slate-50", "dark:bg-slate-800", "text-slate-900", "dark:text-white", "focus:ring-2", "focus:ring-slate-900/10", "focus:border-slate-400", "outline-none", "transition-all", "placeholder:text-slate-400", "shadow-sm", 3, "ngModelChange", "keyup.enter", "paste", "ngModel", "placeholder"], [1, "absolute", "right-2", "top-2", "h-8", "w-8", "flex", "items-center", "justify-center", "rounded-lg", "bg-slate-900", "text-white", "hover:bg-slate-700", "disabled:opacity-50", "disabled:bg-slate-200", "disabled:text-slate-400", "transition-all", "shadow-md", 3, "click", "disabled"], ["mode", "indeterminate", "diameter", "16", "color", "accent"], [1, "!w-4", "!h-4", "!text-[16px]"], [1, "text-center", "mt-2", "text-[10px]", "text-slate-400"], [1, "fixed", "inset-0", "z-[70]", "flex", "items-center", "justify-center", "bg-black/90", "backdrop-blur-md", "p-4", "animate-fadeIn"], [1, "fixed", "inset-0", "z-50", "flex", "items-center", "justify-center", "bg-slate-900/50", "backdrop-blur-sm", "p-4", "animate-fadeIn"], [1, "fixed", "bottom-6", "left-1/2", "transform", "-translate-x-1/2", "z-[60]", "bg-slate-800", "text-white", "px-4", "py-2", "rounded-full", "shadow-lg", "flex", "items-center", "gap-2", "text-sm", "animate-slideUpFade"], [1, "group", "flex", "items-center", "justify-between", "p-3", "rounded-xl", "cursor-pointer", "transition-all", "border", "border-transparent", 3, "click"], ["type", "text", 1, "w-full", "text-sm", "bg-white", "dark:bg-slate-900", "border", "border-blue-500", "rounded", "px-2", "py-1", "outline-none", 3, "ngModel"], ["type", "text", 1, "w-full", "text-sm", "bg-white", "dark:bg-slate-900", "border", "border-blue-500", "rounded", "px-2", "py-1", "outline-none", 3, "ngModelChange", "click", "blur", "keyup.enter", "ngModel"], [1, "flex-1", "min-w-0", "pr-2"], [1, "truncate", "text-sm", "font-medium", "text-slate-700", "dark:text-slate-300"], [1, "text-[10px]", "text-slate-400", "mt-0.5"], [1, "opacity-0", "group-hover:opacity-100", "flex", "gap-1", "transition-opacity"], [1, "p-1", "hover:bg-blue-50", "dark:hover:bg-blue-900/30", "rounded", "text-slate-400", "hover:text-blue-500", "transition-colors", 3, "click"], [1, "!w-4", "!h-4", "!text-[16px]", "leading-none", "flex", "items-center", "justify-center"], [1, "p-1", "hover:bg-red-50", "dark:hover:bg-red-900/30", "rounded", "text-slate-400", "hover:text-red-500", "transition-colors", 3, "click"], [1, "flex", "items-center", "gap-2", "px-3", "py-1.5", "rounded-full", "bg-slate-50", "dark:bg-slate-800", "border", "border-slate-200", "dark:border-slate-700", "cursor-pointer", "hover:border-slate-300", "transition-colors", "hover:shadow-sm", 3, "click"], [1, "text-xs", "font-medium", "text-slate-600", "dark:text-slate-300", "font-mono", "text-right", "leading-tight"], [1, "text-[10px]", "text-slate-400", "dark:text-slate-500", "font-bold", "mt-0.5"], [1, "w-6", "h-6", "rounded-full", "bg-blue-100", "dark:bg-blue-900/30", "flex", "items-center", "justify-center", "text-blue-600", "dark:text-blue-400"], [1, "!w-3.5", "!h-3.5", "!text-[14px]"], [1, "message", "flex", "gap-4", "animate-fadeIn"], [1, "flex", "justify-center", "my-4", "animate-fadeIn"], [1, "message", "flex", "gap-4", "animate-fadeIn", 3, "flex-row-reverse"], [1, "w-8", "h-8", "rounded-full", "flex-shrink-0", "flex", "items-center", "justify-center", "text-xs", "font-bold", "bg-slate-200", "text-slate-700", "dark:bg-slate-700", "dark:text-slate-50"], [1, "max-w-[85%]", "sm:max-w-lg", "w-full"], [1, "bg-white", "dark:bg-slate-800", "rounded-2xl", "rounded-tl-sm", "p-4", "shadow-sm", "border", "border-slate-200", "dark:border-slate-700", "w-full"], [1, "flex", "flex-wrap", "items-center", "justify-between", "mb-3", "pb-3", "border-b", "border-slate-100", "dark:border-slate-700", "gap-2"], [1, "flex", "items-center", "gap-2"], [1, "w-6", "h-6", "rounded-full", "bg-yellow-100", "flex", "items-center", "justify-center"], [1, "text-yellow-600", "!w-4", "!h-4", "!text-[16px]"], [1, "text-sm", "font-bold", "text-slate-800", "dark:text-white"], [1, "flex", "items-center", "gap-1.5", "text-xs", "font-semibold", "text-amber-600", "bg-amber-50", "px-2", "py-1", "rounded-lg", "border", "border-amber-100"], [1, "flex", "items-center", "gap-1.5", "text-xs", "font-semibold", "text-emerald-600", "bg-emerald-50", "px-2", "py-1", "rounded-lg", "border", "border-emerald-100"], [1, "space-y-3"], [1, "text-sm", "text-slate-600", "dark:text-slate-300"], [1, "flex", "flex-col", "gap-1.5"], ["diameter", "12", "mode", "indeterminate", 1, "mr-1"], [1, "!w-3", "!h-3", "!text-[12px]"], [1, "text-[10px]", "uppercase", "tracking-wider", "font-semibold", "text-slate-400"], ["target", "_blank", "rel", "noopener noreferrer", 1, "group", "flex", "items-center", "justify-between", "p-2.5", "bg-slate-50", "dark:bg-slate-900", "rounded-lg", "border", "border-slate-200", "dark:border-slate-700", "hover:border-blue-300", "hover:bg-blue-50/50", "transition-all", "cursor-pointer", "text-decoration-none", 3, "href"], [1, "font-mono", "text-xs", "text-slate-600", "dark:text-slate-400", "truncate", "mr-2"], [1, "flex", "items-center", "gap-1", "text-slate-400", "group-hover:text-blue-500"], [1, "text-[10px]", "font-bold"], [1, "flex", "items-center", "gap-2", "px-4", "py-2", "bg-emerald-50", "border", "border-emerald-100", "text-emerald-800", "rounded-full", "text-sm", "font-medium", "shadow-sm"], [1, "w-6", "h-6", "rounded-full", "bg-emerald-50", "dark:bg-emerald-900/20", "flex", "items-center", "justify-center"], [1, "text-emerald-600", "dark:text-emerald-400", "!w-4", "!h-4", "!text-[16px]"], [1, "px-2", "py-0.5", "rounded-full", "bg-slate-100", "dark:bg-slate-700", "text-slate-500", "text-[10px]", "font-bold", "uppercase", "tracking-wider"], [1, "flex", "items-center", "gap-1.5", "text-xs", "font-semibold", "text-blue-600", "bg-blue-50", "px-2", "py-1", "rounded-lg", "border", "border-blue-100"], [1, "flex", "items-center", "justify-between"], [1, "text-right"], [1, "text-xs", "text-slate-400", "mb-0.5"], ["target", "_blank", "rel", "noopener noreferrer", 1, "group", "flex", "items-center", "justify-between", "p-3", "bg-gradient-to-r", "from-slate-50", "to-slate-100", "dark:from-slate-900", "dark:to-slate-800", "rounded-lg", "border", "border-slate-200", "dark:border-slate-700", "hover:border-emerald-300", "hover:from-emerald-50", "hover:to-emerald-100", "dark:hover:from-emerald-900/20", "dark:hover:to-emerald-800/20", "transition-all", "cursor-pointer", "text-decoration-none", "shadow-sm", 3, "href"], [1, "flex", "items-center", "gap-2", "flex-1", "min-w-0"], [1, "w-8", "h-8", "rounded-lg", "bg-white", "dark:bg-slate-700", "flex", "items-center", "justify-center", "border", "border-slate-200", "dark:border-slate-600"], [1, "text-slate-400", "group-hover:text-emerald-600", "dark:group-hover:text-emerald-400", "!w-4", "!h-4", "!text-[16px]"], [1, "font-mono", "text-xs", "text-slate-700", "dark:text-slate-300", "truncate"], [1, "flex", "items-center", "gap-1.5", "text-emerald-600", "dark:text-emerald-400", "group-hover:text-emerald-700", "dark:group-hover:text-emerald-300", "transition-colors", "ml-2"], [1, "text-[10px]", "font-bold", "uppercase"], [1, "!w-4", "!h-4", "!text-[14px]"], [1, "w-8", "h-8", "rounded-full", "flex-shrink-0", "flex", "items-center", "justify-center", "text-xs", "font-bold"], [1, "!w-4", "!h-4", "!text-[16px]", "flex", "items-center", "justify-center"], [1, "max-w-[85%]"], [1, "message-bubble", "p-4", "rounded-2xl", "shadow-sm", "border"], [1, "markdown-body", "text-sm", "leading-relaxed", "whitespace-pre-wrap", "font-sans", 3, "innerHTML"], [1, "flex", "flex-wrap", "gap-2", "mt-3"], [1, "mt-4", "p-4", "bg-slate-50", "dark:bg-slate-900/50", "rounded-xl", "border", "border-slate-200", "dark:border-slate-700"], [1, "max-w-[200px]", "h-auto", "rounded-lg", "border", "border-slate-200", "dark:border-slate-700", "cursor-pointer", "hover:opacity-90", "transition-opacity", 3, "src"], [1, "max-w-[200px]", "h-auto", "rounded-lg", "border", "border-slate-200", "dark:border-slate-700", "cursor-pointer", "hover:opacity-90", "transition-opacity", 3, "click", "src"], [1, "flex", "items-center", "gap-2", "mb-2", "text-slate-900", "dark:text-white", "font-semibold"], [1, "text-amber-500"], [1, "text-xl", "font-bold", "mb-2", "text-slate-800", "dark:text-slate-100"], [1, "text-xs", "text-slate-500", "mb-3", "break-all", "font-mono"], ["mat-flat-button", "", "color", "primary", 1, "w-full", 3, "click"], [1, "mt-3", "p-3", "bg-slate-100", "dark:bg-slate-950", "rounded-lg", "text-xs", "font-mono", "overflow-x-auto", "border", "border-slate-200", "dark:border-slate-800"], [1, "whitespace-pre-wrap"], [1, "mt-3", "p-3", "bg-green-50", "dark:bg-green-900/20", "border", "border-green-200", "dark:border-green-800", "rounded-lg", "flex", "items-center", "justify-between"], [1, "mt-3", "text-xs", "text-slate-400", "hover:text-yellow-500", "flex", "items-center", "gap-1", "transition-colors"], [1, "w-6", "h-6", "rounded-full", "bg-green-100", "text-green-600", "flex", "items-center", "justify-center"], [1, "text-xs", "text-green-800", "dark:text-green-300", "font-medium"], ["target", "_blank", "rel", "noopener noreferrer", 1, "text-xs", "text-green-600", "hover:underline", "flex", "items-center", "gap-1", 3, "href"], [1, "mt-3", "text-xs", "text-slate-400", "hover:text-yellow-500", "flex", "items-center", "gap-1", "transition-colors", 3, "click"], [1, "w-8", "h-8", "rounded-full", "bg-slate-900", "text-white", "flex-shrink-0", "flex", "items-center", "justify-center", "text-xs", "font-bold"], [1, "message-bubble", "p-4", "rounded-2xl", "rounded-tl-sm", "bg-white", "dark:bg-slate-800", "border", "border-slate-200", "dark:border-slate-700", "shadow-sm"], [1, "flex", "items-center", "gap-1.5"], [1, "w-1.5", "h-1.5", "bg-slate-400", "rounded-full", "animate-bounce"], [1, "w-1.5", "h-1.5", "bg-slate-400", "rounded-full", "animate-bounce", "delay-150"], [1, "w-1.5", "h-1.5", "bg-slate-400", "rounded-full", "animate-bounce", "delay-300"], [1, "mt-2", "text-xs", "text-slate-400", "border-t", "border-slate-100", "dark:border-slate-700", "pt-2", "animate-fadeIn"], [1, "flex", "gap-3", "overflow-x-auto", "pb-2"], [1, "relative", "group", "w-20", "h-20", "shrink-0", "cursor-zoom-in"], [1, "relative", "group", "w-20", "h-20", "shrink-0", "cursor-zoom-in", 3, "click"], [1, "w-full", "h-full", "object-cover", "rounded-xl", "border", "border-slate-200", "dark:border-slate-700", "shadow-sm", 3, "src"], [1, "absolute", "top-1", "right-1", "w-6", "h-6", "bg-black/50", "hover:bg-red-500", "text-white", "rounded-full", "flex", "items-center", "justify-center", "backdrop-blur-sm", "transition-colors", "shadow-sm", 3, "click"], [1, "!w-4", "!h-4", "!text-[14px]", "flex", "items-center", "justify-center"], [1, "fixed", "inset-0", "z-[70]", "flex", "items-center", "justify-center", "bg-black/90", "backdrop-blur-md", "p-4", "animate-fadeIn", 3, "click"], [1, "absolute", "top-4", "right-4", "text-white/70", "hover:text-white", "transition-colors", 3, "click"], [1, "!w-8", "!h-8", "!text-[32px]"], [1, "max-w-full", "max-h-[90vh]", "rounded-lg", "shadow-2xl", "animate-scaleIn", "object-contain", 3, "click", "src"], [1, "fixed", "inset-0", "z-50", "flex", "items-center", "justify-center", "bg-slate-900/50", "backdrop-blur-sm", "p-4", "animate-fadeIn", 3, "click"], [1, "bg-white", "dark:bg-slate-900", "w-full", "max-w-lg", "rounded-2xl", "shadow-xl", "max-h-[90vh]", "overflow-y-auto", 3, "click"], [1, "p-6"], [1, "flex", "justify-between", "items-center", "mb-6"], [1, "text-2xl", "font-bold", "dark:text-white"], [1, "text-slate-400", "hover:text-slate-600", 3, "click"], [1, "space-y-4"], [1, "flex", "justify-center", "p-8"], [3, "agentInfo"], ["mode", "indeterminate", "diameter", "30"], [1, "w-full", "max-w-sm", "mx-auto", "p-6", "bg-white", "dark:bg-slate-900", "rounded-2xl", "shadow-2xl", "relative", "animate-slideUp", 3, "click"], [1, "absolute", "right-4", "top-4", "text-slate-400", "hover:text-slate-600", 3, "click"], [1, "text-xl", "font-bold", "mb-4", "dark:text-white"], [1, "flex", "justify-center", "mb-4"], [1, "mb-4"], [1, "text-xs", "text-slate-500", "uppercase"], [1, "p-3", "bg-slate-50", "dark:bg-slate-800", "rounded-lg", "flex", "gap-2", "items-center"], [1, "text-xs", "flex-1", "break-all", "dark:text-slate-300"], [3, "click"], [1, "text-slate-400", "hover:text-blue-500", "!w-4", "!h-4", "text-[16px]"], [1, "mb-6"], [1, "text-3xl", "font-bold", "dark:text-white"], [1, "text-sm", "font-normal", "text-slate-400"], [1, "text-3xl", "font-bold", "dark:text-white", "mt-2"], ["mat-stroked-button", "", 1, "w-full", "mb-2", 3, "click"], ["mat-stroked-button", "", "color", "warn", 1, "w-full", 3, "click"], [1, "w-32", "h-32", "rounded-lg", "border", 3, "src"], [1, "!w-4", "!h-4", "text-[16px]"]], template: function ChatComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 2)(1, "aside", 3)(2, "div", 4)(3, "div", 5)(4, "mat-icon", 6);
        \u0275\u0275text(5, "history");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "span");
        \u0275\u0275text(7);
        \u0275\u0275pipe(8, "transloco");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "button", 7);
        \u0275\u0275pipe(10, "transloco");
        \u0275\u0275listener("click", function ChatComponent_Template_button_click_9_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.startNewChat());
        });
        \u0275\u0275elementStart(11, "mat-icon");
        \u0275\u0275text(12, "add_circle_outline");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(13, "div", 8);
        \u0275\u0275template(14, ChatComponent_Conditional_14_Template, 3, 3, "div", 9);
        \u0275\u0275repeaterCreate(15, ChatComponent_For_16_Template, 3, 15, "div", 10, _forTrack02);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(17, "main", 11)(18, "div", 12)(19, "div", 13)(20, "button", 14);
        \u0275\u0275listener("click", function ChatComponent_Template_button_click_20_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.toggleSidebar());
        });
        \u0275\u0275elementStart(21, "mat-icon");
        \u0275\u0275text(22);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(23, "div", 15);
        \u0275\u0275listener("click", function ChatComponent_Template_div_click_23_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.toggleAgentInfoModal());
        });
        \u0275\u0275elementStart(24, "div", 16);
        \u0275\u0275text(25, " AI ");
        \u0275\u0275template(26, ChatComponent_Conditional_26_Template, 1, 0, "div", 17);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "div")(28, "div", 18);
        \u0275\u0275text(29);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(30, "div", 19);
        \u0275\u0275text(31);
        \u0275\u0275pipe(32, "transloco");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(33, "div", 13)(34, "div", 20)(35, "button", 21);
        \u0275\u0275listener("click", function ChatComponent_Template_button_click_35_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.setChatMode("credits"));
        });
        \u0275\u0275text(36);
        \u0275\u0275pipe(37, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(38, "button", 21);
        \u0275\u0275listener("click", function ChatComponent_Template_button_click_38_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.setChatMode("x402"));
        });
        \u0275\u0275text(39, " x402 ");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(40, ChatComponent_Conditional_40_Template, 9, 5, "div", 22);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(41, "div", 23, 0)(43, "div", 24);
        \u0275\u0275repeaterCreate(44, ChatComponent_For_45_Template, 4, 1, null, null, \u0275\u0275repeaterTrackByIndex);
        \u0275\u0275template(46, ChatComponent_Conditional_46_Template, 9, 1, "div", 25);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(47, "div", 26);
        \u0275\u0275template(48, ChatComponent_Conditional_48_Template, 4, 0, "div", 27);
        \u0275\u0275elementStart(49, "div", 28)(50, "input", 29, 1);
        \u0275\u0275listener("change", function ChatComponent_Template_input_change_50_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onFileSelected($event));
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(52, "button", 30);
        \u0275\u0275listener("click", function ChatComponent_Template_button_click_52_listener() {
          \u0275\u0275restoreView(_r1);
          const fileInput_r19 = \u0275\u0275reference(51);
          return \u0275\u0275resetView(fileInput_r19.click());
        });
        \u0275\u0275elementStart(53, "mat-icon");
        \u0275\u0275text(54, "attach_file");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(55, "input", 31);
        \u0275\u0275pipe(56, "transloco");
        \u0275\u0275twoWayListener("ngModelChange", function ChatComponent_Template_input_ngModelChange_55_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.userInput, $event) || (ctx.userInput = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275listener("keyup.enter", function ChatComponent_Template_input_keyup_enter_55_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.sendMessage());
        })("paste", function ChatComponent_Template_input_paste_55_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onPaste($event));
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(57, "button", 32);
        \u0275\u0275listener("click", function ChatComponent_Template_button_click_57_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.sendMessage());
        });
        \u0275\u0275template(58, ChatComponent_Conditional_58_Template, 1, 0, "mat-progress-spinner", 33)(59, ChatComponent_Conditional_59_Template, 2, 0, "mat-icon", 34);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(60, "div", 35);
        \u0275\u0275text(61, " Verifik Agent can make mistakes. Verify important information. ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(62, ChatComponent_Conditional_62_Template, 5, 1, "div", 36)(63, ChatComponent_Conditional_63_Template, 13, 4, "div", 37)(64, ChatComponent_Conditional_64_Template, 35, 22, "div", 37)(65, ChatComponent_Conditional_65_Template, 4, 1, "div", 38);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        let tmp_8_0;
        let tmp_9_0;
        \u0275\u0275advance();
        \u0275\u0275classProp("-ml-[280px]", !ctx.isSidebarOpen());
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 45, "chat.sidebar.title"));
        \u0275\u0275advance(2);
        \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(10, 47, "chat.sidebar.newChat"));
        \u0275\u0275advance(5);
        \u0275\u0275conditional(ctx.conversations().length === 0 ? 14 : -1);
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.conversations());
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate(ctx.isSidebarOpen() ? "menu_open" : "menu");
        \u0275\u0275advance(4);
        \u0275\u0275conditional(((tmp_8_0 = ctx.agentInfo()) == null ? null : tmp_8_0.identity) ? 26 : -1);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", ((tmp_9_0 = ctx.agentInfo()) == null ? null : tmp_9_0.identity == null ? null : tmp_9_0.identity.name) || "Verifik Agent", " ");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(32, 49, "chat.header.subtitle"), " ");
        \u0275\u0275advance(4);
        \u0275\u0275classProp("bg-white", ctx.chatMode() === "credits")("text-slate-900", ctx.chatMode() === "credits")("shadow-sm", ctx.chatMode() === "credits")("dark:bg-slate-700", ctx.chatMode() === "credits")("dark:text-white", ctx.chatMode() === "credits")("text-slate-500", ctx.chatMode() !== "credits");
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(37, 51, "chat.mode.credits"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275classProp("bg-white", ctx.chatMode() === "x402")("text-slate-900", ctx.chatMode() === "x402")("shadow-sm", ctx.chatMode() === "x402")("dark:bg-slate-700", ctx.chatMode() === "x402")("dark:text-white", ctx.chatMode() === "x402")("text-slate-500", ctx.chatMode() !== "x402");
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.chatMode() === "x402" && ctx.walletAddress() ? 40 : -1);
        \u0275\u0275advance(4);
        \u0275\u0275repeater(ctx.messages());
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.isLoading() ? 46 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.pendingAttachments().length > 0 ? 48 : -1);
        \u0275\u0275advance(7);
        \u0275\u0275twoWayProperty("ngModel", ctx.userInput);
        \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(56, 53, "chat.inputPlaceholder"));
        \u0275\u0275advance(2);
        \u0275\u0275property("disabled", ctx.isLoading() || !ctx.userInput().trim() && ctx.pendingAttachments().length === 0);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.isLoading() ? 58 : 59);
        \u0275\u0275advance(4);
        \u0275\u0275conditional(ctx.previewImage() ? 62 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.showAgentInfoModal() ? 63 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.showWalletModal() ? 64 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.showToast() ? 65 : -1);
      }
    }, dependencies: [
      CommonModule,
      JsonPipe,
      DecimalPipe,
      DatePipe,
      FormsModule,
      DefaultValueAccessor,
      NgControlStatus,
      NgModel,
      MatIconModule,
      MatIcon,
      MatButtonModule,
      MatButton,
      MatIconButton,
      MatProgressSpinnerModule,
      MatProgressSpinner,
      MatTooltipModule,
      MatTooltip,
      TranslocoModule,
      TranslocoPipe,
      MatDialogModule,
      MarkdownPipe,
      AgentErc8004Component
    ], styles: ['\n\n.message[_ngcontent-%COMP%] {\n  display: flex;\n  animation: _ngcontent-%COMP%_fadeIn 0.3s ease-out;\n  width: 100%;\n}\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes _ngcontent-%COMP%_slideUp {\n  from {\n    opacity: 0;\n    transform: translateY(20px) scale(0.95);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0) scale(1);\n  }\n}\n@keyframes _ngcontent-%COMP%_slideUpFade {\n  from {\n    opacity: 0;\n    transform: translate(-50%, 20px);\n  }\n  to {\n    opacity: 1;\n    transform: translate(-50%, 0);\n  }\n}\n.modal-overlay[_ngcontent-%COMP%] {\n}\n.markdown-body[_ngcontent-%COMP%] {\n  font-family:\n    "Inter",\n    system-ui,\n    sans-serif;\n  line-height: 1.6;\n}\n.markdown-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 0.75rem;\n}\n.markdown-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.markdown-body[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.1);\n  padding: 0.2em 0.4em;\n  border-radius: 4px;\n  font-family: monospace;\n  font-size: 0.85em;\n}\n.markdown-body[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%] {\n  background: #1e293b;\n  color: #e2e8f0;\n  padding: 1rem;\n  border-radius: 8px;\n  overflow-x: auto;\n  margin: 1rem 0;\n}\n.markdown-body[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  background: none;\n  padding: 0;\n  color: inherit;\n}\n.markdown-body[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%], \n.markdown-body[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%] {\n  margin-left: 1.5rem;\n  margin-bottom: 1rem;\n  list-style-type: disc;\n}\n.markdown-body[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: inherit;\n}\n.markdown-body[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], \n.markdown-body[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], \n.markdown-body[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], \n.markdown-body[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-weight: 700;\n  margin-top: 1.5rem;\n  margin-bottom: 0.5rem;\n  line-height: 1.3;\n}\n.markdown-body[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n}\n.markdown-body[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n}\n.markdown-body[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n}\n[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 6px;\n  height: 6px;\n}\n[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: transparent;\n}\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: rgba(148, 163, 184, 0.5);\n  border-radius: 3px;\n}\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: rgba(148, 163, 184, 0.8);\n}\n.dark[_nghost-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar-thumb, .dark   [_nghost-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: rgba(71, 85, 105, 0.5);\n}\n.animate-fadeIn[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_fadeIn 0.3s ease-out forwards;\n}\n.animate-slideUp[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_slideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;\n}\n.animate-slideUpFade[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_slideUpFade 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;\n}\n.animate-bounce[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_bounce 1s infinite;\n}\n@keyframes _ngcontent-%COMP%_bounce {\n  0%, 100% {\n    transform: translateY(0);\n  }\n  50% {\n    transform: translateY(-4px);\n  }\n}\n.delay-150[_ngcontent-%COMP%] {\n  animation-delay: 150ms;\n}\n.delay-300[_ngcontent-%COMP%] {\n  animation-delay: 300ms;\n}\n/*# sourceMappingURL=chat.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ChatComponent, [{
    type: Component,
    args: [{ selector: "app-chat", standalone: true, imports: [
      CommonModule,
      FormsModule,
      MatIconModule,
      MatButtonModule,
      MatProgressSpinnerModule,
      MatTooltipModule,
      TranslocoModule,
      MatDialogModule,
      MarkdownPipe,
      AgentErc8004Component
    ], template: `<div class="flex h-screen w-full bg-white dark:bg-slate-900 overflow-hidden relative">
    <!-- Sidebar -->
    <aside
        class="w-[280px] bg-slate-50 dark:bg-slate-950 border-r border-slate-200 dark:border-slate-800 flex flex-col transition-all duration-300 shrink-0 z-20"
        [class.-ml-[280px]]="!isSidebarOpen()"
    >
        <!-- Sidebar Header -->
        <div
            class="h-16 px-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between shadow-sm z-10"
        >
            <div class="flex items-center gap-2 font-bold text-slate-700 dark:text-slate-200">
                <mat-icon class="text-slate-500">history</mat-icon>
                <span>{{ 'chat.sidebar.title' | transloco }}</span>
            </div>
            <button
                (click)="startNewChat()"
                class="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors text-slate-600 dark:text-slate-400"
                [matTooltip]="'chat.sidebar.newChat' | transloco"
            >
                <mat-icon>add_circle_outline</mat-icon>
            </button>
        </div>

        <!-- Conversation List -->
        <div class="flex-1 overflow-y-auto p-3 space-y-1">
            @if (conversations().length === 0) {
                <div class="text-center py-8 text-slate-400 text-sm">
                    {{ 'chat.sidebar.noHistory' | transloco }}
                </div>
            }

            @for (conv of conversations(); track conv.id) {
                <div
                    class="group flex items-center justify-between p-3 rounded-xl cursor-pointer transition-all border border-transparent"
                    [class.bg-white]="currentConversationId() === conv.id"
                    [class.dark:bg-slate-900]="currentConversationId() === conv.id"
                    [class.shadow-sm]="currentConversationId() === conv.id"
                    [class.border-slate-200]="currentConversationId() === conv.id"
                    [class.dark:border-slate-800]="currentConversationId() === conv.id"
                    [class.hover:bg-slate-200]="currentConversationId() !== conv.id"
                    [class.dark:hover:bg-slate-900]="currentConversationId() !== conv.id"
                    (click)="selectConversation(conv.id)"
                >
                    @if (isRenamingId() === conv.id) {
                        <input
                            type="text"
                            [(ngModel)]="renameInput"
                            (click)="$event.stopPropagation()"
                            (blur)="saveRename(conv)"
                            (keyup.enter)="saveRename(conv)"
                            class="w-full text-sm bg-white dark:bg-slate-900 border border-blue-500 rounded px-2 py-1 outline-none"
                        />
                    } @else {
                        <div class="flex-1 min-w-0 pr-2">
                            <div
                                class="truncate text-sm font-medium text-slate-700 dark:text-slate-300"
                            >
                                {{ conv.title }}
                            </div>
                            <div class="text-[10px] text-slate-400 mt-0.5">
                                {{ conv.updated_at | date: 'MMM d, h:mm a' }}
                            </div>
                        </div>

                        <div
                            class="opacity-0 group-hover:opacity-100 flex gap-1 transition-opacity"
                        >
                            <button
                                (click)="startRenaming(conv, $event)"
                                class="p-1 hover:bg-blue-50 dark:hover:bg-blue-900/30 rounded text-slate-400 hover:text-blue-500 transition-colors"
                            >
                                <mat-icon
                                    class="!w-4 !h-4 !text-[16px] leading-none flex items-center justify-center"
                                    >edit</mat-icon
                                >
                            </button>
                            <button
                                (click)="deleteConversation(conv, $event)"
                                class="p-1 hover:bg-red-50 dark:hover:bg-red-900/30 rounded text-slate-400 hover:text-red-500 transition-colors"
                            >
                                <mat-icon
                                    class="!w-4 !h-4 !text-[16px] leading-none flex items-center justify-center"
                                    >delete</mat-icon
                                >
                            </button>
                        </div>
                    }
                </div>
            }
        </div>
    </aside>

    <!-- Main Chat Area -->
    <main class="flex-1 flex flex-col h-full min-w-0 relative bg-white dark:bg-slate-900">
        <!-- Header -->
        <div
            class="h-16 border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md px-4 flex items-center justify-between shrink-0 z-10"
        >
            <div class="flex items-center gap-3">
                <!-- Sidebar Toggle -->
                <button
                    (click)="toggleSidebar()"
                    class="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500"
                >
                    <mat-icon>{{ isSidebarOpen() ? 'menu_open' : 'menu' }}</mat-icon>
                </button>

                <!-- Identity -->
                <div
                    class="flex items-center gap-3 cursor-pointer group"
                    (click)="toggleAgentInfoModal()"
                >
                    <div
                        class="w-9 h-9 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-xs shadow-sm relative group-hover:scale-105 transition-transform"
                    >
                        AI
                        @if (agentInfo()?.identity) {
                            <div
                                class="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-green-500 border-2 border-white rounded-full"
                            ></div>
                        }
                    </div>
                    <div>
                        <div
                            class="font-bold text-slate-900 dark:text-white text-sm group-hover:text-blue-600 transition-colors"
                        >
                            {{ agentInfo()?.identity?.name || 'Verifik Agent' }}
                        </div>
                        <div class="text-[10px] text-slate-500 font-medium hidden sm:block">
                            {{ 'chat.header.subtitle' | transloco }}
                        </div>
                    </div>
                </div>
            </div>

            <!-- Right Side Actions -->
            <div class="flex items-center gap-3">
                <!-- Mode Toggle -->
                <div
                    class="flex items-center bg-slate-100 dark:bg-slate-800 rounded-lg p-0.5 border border-slate-200 dark:border-slate-700 hidden sm:flex"
                >
                    <button
                        class="px-3 py-1.5 rounded-md text-xs font-medium transition-all"
                        [class.bg-white]="chatMode() === 'credits'"
                        [class.text-slate-900]="chatMode() === 'credits'"
                        [class.shadow-sm]="chatMode() === 'credits'"
                        [class.dark:bg-slate-700]="chatMode() === 'credits'"
                        [class.dark:text-white]="chatMode() === 'credits'"
                        [class.text-slate-500]="chatMode() !== 'credits'"
                        (click)="setChatMode('credits')"
                    >
                        {{ 'chat.mode.credits' | transloco }}
                    </button>
                    <button
                        class="px-3 py-1.5 rounded-md text-xs font-medium transition-all"
                        [class.bg-white]="chatMode() === 'x402'"
                        [class.text-slate-900]="chatMode() === 'x402'"
                        [class.shadow-sm]="chatMode() === 'x402'"
                        [class.dark:bg-slate-700]="chatMode() === 'x402'"
                        [class.dark:text-white]="chatMode() === 'x402'"
                        [class.text-slate-500]="chatMode() !== 'x402'"
                        (click)="setChatMode('x402')"
                    >
                        x402
                    </button>
                </div>

                <!-- Wallet Widget -->
                @if (chatMode() === 'x402' && walletAddress()) {
                    <div
                        class="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 cursor-pointer hover:border-slate-300 transition-colors hover:shadow-sm"
                        (click)="toggleWalletModal()"
                    >
                        <div
                            class="text-xs font-medium text-slate-600 dark:text-slate-300 font-mono text-right leading-tight"
                        >
                            <div>{{ walletBalance() | number: '1.4-4' }} AVAX</div>
                            @if (
                                tokenBalance() &&
                                tokenBalance() !== '0.00' &&
                                tokenBalance() !== '0.0'
                            ) {
                                <div
                                    class="text-[10px] text-slate-400 dark:text-slate-500 font-bold mt-0.5"
                                >
                                    {{ tokenBalance() | number: '1.0-2' }} {{ tokenTicker }}
                                </div>
                            }
                        </div>
                        <div
                            class="w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400"
                        >
                            <mat-icon class="!w-3.5 !h-3.5 !text-[14px]"
                                >account_balance_wallet</mat-icon
                            >
                        </div>
                    </div>
                }
            </div>
        </div>

        <!-- Scrollable Messages Area -->
        <div
            class="flex-1 overflow-y-auto messages-container p-4 scroll-smooth max-h-[calc(100vh-16rem)]"
            #scrollContainer
        >
            <div class="max-w-4xl mx-auto space-y-6 pb-4">
                @for (msg of messages(); track $index) {
                    <!-- Case 1: Feedback Proof Card -->
                    @if (msg.role === 'system' && msg.content.includes('Feedback submitted')) {
                        <div class="message flex gap-4 animate-fadeIn">
                            <!-- Avatar -->
                            <div
                                class="w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center text-xs font-bold bg-slate-200 text-slate-700 dark:bg-slate-700 dark:text-slate-50"
                            >
                                AI
                            </div>

                            <!-- Card as Bubble -->
                            <div class="max-w-[85%] sm:max-w-lg w-full">
                                <div
                                    class="bg-white dark:bg-slate-800 rounded-2xl rounded-tl-sm p-4 shadow-sm border border-slate-200 dark:border-slate-700 w-full"
                                >
                                    <!-- Header -->
                                    <div
                                        class="flex flex-wrap items-center justify-between mb-3 pb-3 border-b border-slate-100 dark:border-slate-700 gap-2"
                                    >
                                        <div class="flex items-center gap-2">
                                            <div
                                                class="w-6 h-6 rounded-full bg-yellow-100 flex items-center justify-center"
                                            >
                                                <mat-icon
                                                    class="text-yellow-600 !w-4 !h-4 !text-[16px]"
                                                    >star</mat-icon
                                                >
                                            </div>
                                            <span
                                                class="text-sm font-bold text-slate-800 dark:text-white"
                                                >Proof of Feedback</span
                                            >
                                        </div>
                                        @if (msg.content.includes('Waiting')) {
                                            <div
                                                class="flex items-center gap-1.5 text-xs font-semibold text-amber-600 bg-amber-50 px-2 py-1 rounded-lg border border-amber-100"
                                            >
                                                <mat-progress-spinner
                                                    diameter="12"
                                                    mode="indeterminate"
                                                    class="mr-1"
                                                ></mat-progress-spinner>
                                                Confirming...
                                            </div>
                                        } @else {
                                            <div
                                                class="flex items-center gap-1.5 text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-lg border border-emerald-100"
                                            >
                                                <mat-icon class="!w-3 !h-3 !text-[12px]"
                                                    >check_circle</mat-icon
                                                >
                                                On-Chain
                                            </div>
                                        }
                                    </div>

                                    <!-- Body -->
                                    <div class="space-y-3">
                                        <div class="text-sm text-slate-600 dark:text-slate-300">
                                            Processing your reputation feedback on correct
                                            execution.
                                        </div>

                                        @if (extractTxHash(msg.content); as txHash) {
                                            <div class="flex flex-col gap-1.5">
                                                <label
                                                    class="text-[10px] uppercase tracking-wider font-semibold text-slate-400"
                                                    >Transaction Hash</label
                                                >
                                                <a
                                                    [href]="getSnowtraceUrl() + '/tx/' + txHash"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    class="group flex items-center justify-between p-2.5 bg-slate-50 dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-blue-300 hover:bg-blue-50/50 transition-all cursor-pointer text-decoration-none"
                                                >
                                                    <span
                                                        class="font-mono text-xs text-slate-600 dark:text-slate-400 truncate mr-2"
                                                        >{{ txHash }}</span
                                                    >
                                                    <div
                                                        class="flex items-center gap-1 text-slate-400 group-hover:text-blue-500"
                                                    >
                                                        <span class="text-[10px] font-bold"
                                                            >VIEW</span
                                                        >
                                                        <mat-icon class="!w-3 !h-3 !text-[12px]"
                                                            >open_in_new</mat-icon
                                                        >
                                                    </div>
                                                </a>
                                            </div>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Case 2: Success Toast -->
                        <!-- Case 2: Success Toast -->
                    } @else if (
                        msg.role === 'system' && msg.content.includes('Thank you for your feedback')
                    ) {
                        <div class="flex justify-center my-4 animate-fadeIn">
                            <div
                                class="flex items-center gap-2 px-4 py-2 bg-emerald-50 border border-emerald-100 text-emerald-800 rounded-full text-sm font-medium shadow-sm"
                            >
                                <mat-icon class="!w-4 !h-4 !text-[16px]">verified</mat-icon>
                                Reputation Recorded Successfully
                            </div>
                        </div>

                        <!-- Case 3: Payment Confirmation Card -->
                    } @else if (msg.role === 'system' && (msg.content.includes('Payment sent') || msg.paymentTx)) {
                        <div class="message flex gap-4 animate-fadeIn">
                            <!-- Avatar -->
                            <div
                                class="w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center text-xs font-bold bg-slate-200 text-slate-700 dark:bg-slate-700 dark:text-slate-50"
                            >
                                AI
                            </div>

                            <!-- Payment Confirmation Card -->
                            <div class="max-w-[85%] sm:max-w-lg w-full">
                                <div
                                    class="bg-white dark:bg-slate-800 rounded-2xl rounded-tl-sm p-4 shadow-sm border border-slate-200 dark:border-slate-700 w-full"
                                >
                                    <!-- Header -->
                                    <div
                                        class="flex flex-wrap items-center justify-between mb-3 pb-3 border-b border-slate-100 dark:border-slate-700 gap-2"
                                    >
                                        <div class="flex items-center gap-2">
                                            <div
                                                class="w-6 h-6 rounded-full bg-emerald-50 dark:bg-emerald-900/20 flex items-center justify-center"
                                            >
                                                <mat-icon
                                                    class="text-emerald-600 dark:text-emerald-400 !w-4 !h-4 !text-[16px]"
                                                    >check_circle</mat-icon
                                                >
                                            </div>
                                            <span
                                                class="text-sm font-bold text-slate-800 dark:text-white"
                                                >Payment Confirmation</span
                                            >
                                            @if (msg.paymentCurrency || extractPaymentCurrency(msg.content); as currency) {
                                                <span
                                                    class="px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-500 text-[10px] font-bold uppercase tracking-wider"
                                                    >{{ currency }}</span
                                                >
                                            }
                                        </div>

                                        @if (msg.paymentStatus === 'pending' || msg.content.includes('Waiting')) {
                                            <div
                                                class="flex items-center gap-1.5 text-xs font-semibold text-amber-600 bg-amber-50 px-2 py-1 rounded-lg border border-amber-100"
                                            >
                                                <mat-progress-spinner
                                                    diameter="12"
                                                    mode="indeterminate"
                                                    class="mr-1"
                                                ></mat-progress-spinner>
                                                Pending
                                            </div>
                                        } @else if (msg.paymentStatus === 'processing' || msg.content.includes('Processing')) {
                                            <div
                                                class="flex items-center gap-1.5 text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-1 rounded-lg border border-blue-100"
                                            >
                                                <mat-progress-spinner
                                                    diameter="12"
                                                    mode="indeterminate"
                                                    class="mr-1"
                                                ></mat-progress-spinner>
                                                Processing
                                            </div>
                                        } @else {
                                            <div
                                                class="flex items-center gap-1.5 text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-lg border border-emerald-100"
                                            >
                                                <mat-icon class="!w-3 !h-3 !text-[12px]"
                                                    >check_circle</mat-icon
                                                >
                                                Confirmed
                                            </div>
                                        }
                                    </div>

                                    <!-- Body & Transaction Details -->
                                    <div class="space-y-3">
                                        <div class="flex items-center justify-between">
                                            <p class="text-sm text-slate-600 dark:text-slate-300">
                                                Payment transaction submitted successfully.
                                            </p>
                                            @if (msg.paymentAmount) {
                                                <div class="text-right">
                                                    <div class="text-xs text-slate-400 mb-0.5">Amount</div>
                                                    <div class="text-sm font-bold text-slate-800 dark:text-white">
                                                        {{ msg.paymentAmount }}
                                                    </div>
                                                </div>
                                            }
                                        </div>

                                        <!-- Transaction Hash with Link -->
                                        @if (msg.paymentTx || extractPaymentTxHash(msg.content); as txHash) {
                                            <div class="flex flex-col gap-1.5">
                                                <label
                                                    class="text-[10px] uppercase tracking-wider font-semibold text-slate-400"
                                                    >Transaction Hash</label
                                                >
                                                <a
                                                    [href]="getSnowtraceUrl() + '/tx/' + txHash"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    class="group flex items-center justify-between p-3 bg-gradient-to-r from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-emerald-300 hover:from-emerald-50 hover:to-emerald-100 dark:hover:from-emerald-900/20 dark:hover:to-emerald-800/20 transition-all cursor-pointer text-decoration-none shadow-sm"
                                                >
                                                    <div class="flex items-center gap-2 flex-1 min-w-0">
                                                        <div
                                                            class="w-8 h-8 rounded-lg bg-white dark:bg-slate-700 flex items-center justify-center border border-slate-200 dark:border-slate-600"
                                                        >
                                                            <mat-icon
                                                                class="text-slate-400 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 !w-4 !h-4 !text-[16px]"
                                                                >receipt</mat-icon
                                                            >
                                                        </div>
                                                        <span
                                                            class="font-mono text-xs text-slate-700 dark:text-slate-300 truncate"
                                                            >{{ txHash }}</span
                                                        >
                                                    </div>
                                                    <div
                                                        class="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 group-hover:text-emerald-700 dark:group-hover:text-emerald-300 transition-colors ml-2"
                                                    >
                                                        <span class="text-[10px] font-bold uppercase"
                                                            >View on Snowtrace</span
                                                        >
                                                        <mat-icon class="!w-4 !h-4 !text-[14px]"
                                                            >open_in_new</mat-icon
                                                        >
                                                    </div>
                                                </a>
                                            </div>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Case 4: Regular Message -->
                    } @else {
                        <div
                            class="message flex gap-4 animate-fadeIn"
                            [class.flex-row-reverse]="msg.role === 'user'"
                        >
                            <!-- Avatar -->
                            <div
                                class="w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center text-xs font-bold"
                                [class.bg-slate-900]="msg.role === 'user'"
                                [class.text-white]="msg.role === 'user'"
                                [class.bg-slate-200]="msg.role !== 'user'"
                                [class.text-slate-700]="msg.role !== 'user'"
                                [class.dark:bg-slate-700]="msg.role !== 'user'"
                                [class.dark:text-slate-50]="msg.role !== 'user'"
                            >
                                @if (msg.role === 'user') {
                                    <mat-icon
                                        class="!w-4 !h-4 !text-[16px] flex items-center justify-center"
                                        >person</mat-icon
                                    >
                                } @else {
                                    AI
                                }
                            </div>

                            <!-- Bubble -->
                            <div class="max-w-[85%]">
                                <div
                                    class="message-bubble p-4 rounded-2xl shadow-sm border"
                                    [class.bg-slate-900]="msg.role === 'user'"
                                    [class.text-white]="msg.role === 'user'"
                                    [class.border-slate-800]="msg.role === 'user'"
                                    [class.rounded-tr-sm]="msg.role === 'user'"
                                    [class.bg-white]="msg.role !== 'user'"
                                    [class.text-slate-700]="msg.role !== 'user'"
                                    [class.dark:bg-slate-800]="msg.role !== 'user'"
                                    [class.dark:text-slate-200]="msg.role !== 'user'"
                                    [class.border-slate-200]="msg.role !== 'user'"
                                    [class.dark:border-slate-700]="msg.role !== 'user'"
                                    [class.rounded-tl-sm]="msg.role !== 'user'"
                                >
                                    <!-- Content -->
                                    <div
                                        class="markdown-body text-sm leading-relaxed whitespace-pre-wrap font-sans"
                                        [innerHTML]="msg.content | markdown"
                                    ></div>

                                    <!-- Images -->
                                    @if (msg.images && msg.images.length > 0) {
                                        <div class="flex flex-wrap gap-2 mt-3">
                                            @for (imgSrc of msg.images; track $index) {
                                                <img
                                                    [src]="getImageUrl(imgSrc)"
                                                    class="max-w-[200px] h-auto rounded-lg border border-slate-200 dark:border-slate-700 cursor-pointer hover:opacity-90 transition-opacity"
                                                    (click)="
                                                        $event.stopPropagation();
                                                        window.open(getImageUrl(imgSrc), '_blank')
                                                    "
                                                />
                                            }
                                        </div>
                                    }

                                    <!-- Payment Request -->
                                    @if (msg.payment_required) {
                                        <div
                                            class="mt-4 p-4 bg-slate-50 dark:bg-slate-900/50 rounded-xl border border-slate-200 dark:border-slate-700"
                                        >
                                            <div
                                                class="flex items-center gap-2 mb-2 text-slate-900 dark:text-white font-semibold"
                                            >
                                                <span class="text-amber-500">\u26A1</span>
                                                {{ 'chat.payment.required' | transloco }}
                                            </div>
                                            <div
                                                class="text-xl font-bold mb-2 text-slate-800 dark:text-slate-100"
                                            >
                                                {{ msg.payment_required.amount }} AVAX
                                            </div>
                                            <div
                                                class="text-xs text-slate-500 mb-3 break-all font-mono"
                                            >
                                                To: {{ msg.payment_required.receiver_address }}
                                            </div>
                                            <button
                                                mat-flat-button
                                                color="primary"
                                                class="w-full"
                                                (click)="confirmPayment($index)"
                                            >
                                                {{ 'chat.payment.payBtn' | transloco }}
                                            </button>
                                        </div>
                                    }

                                    <!-- Data Display -->
                                    @if (msg.data) {
                                        <div
                                            class="mt-3 p-3 bg-slate-100 dark:bg-slate-950 rounded-lg text-xs font-mono overflow-x-auto border border-slate-200 dark:border-slate-800"
                                        >
                                            <pre class="whitespace-pre-wrap">{{
                                                msg.data | json
                                            }}</pre>
                                        </div>

                                        @if (msg.proof) {
                                            <div
                                                class="mt-3 p-3 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg flex items-center justify-between"
                                            >
                                                <div class="flex items-center gap-2">
                                                    <div
                                                        class="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center"
                                                    >
                                                        <mat-icon class="!w-4 !h-4 !text-[16px]"
                                                            >verified</mat-icon
                                                        >
                                                    </div>
                                                    <div
                                                        class="text-xs text-green-800 dark:text-green-300 font-medium"
                                                    >
                                                        Validated On-Chain
                                                    </div>
                                                </div>
                                                <a
                                                    [href]="getSnowtraceUrl() + '/tx/' + msg.proof"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    class="text-xs text-green-600 hover:underline flex items-center gap-1"
                                                >
                                                    View TX
                                                    <mat-icon class="!w-3 !h-3 !text-[12px]"
                                                        >open_in_new</mat-icon
                                                    >
                                                </a>
                                            </div>
                                        }

                                        @if (chatMode() === 'x402' && msg.role === 'assistant') {
                                            <button
                                                class="mt-3 text-xs text-slate-400 hover:text-yellow-500 flex items-center gap-1 transition-colors"
                                                (click)="openFeedbackModal()"
                                            >
                                                <mat-icon class="!w-3 !h-3 !text-[12px]"
                                                    >star_outline</mat-icon
                                                >
                                                Rate this
                                            </button>
                                        }
                                    }
                                </div>
                            </div>
                        </div>
                    }
                }

                <!-- Typing Indicator -->
                @if (isLoading()) {
                    <div class="message flex gap-4">
                        <div
                            class="w-8 h-8 rounded-full bg-slate-900 text-white flex-shrink-0 flex items-center justify-center text-xs font-bold"
                        >
                            AI
                        </div>
                        <div
                            class="message-bubble p-4 rounded-2xl rounded-tl-sm bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm"
                        >
                            <div class="flex items-center gap-1.5">
                                <div
                                    class="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce"
                                ></div>
                                <div
                                    class="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce delay-150"
                                ></div>
                                <div
                                    class="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce delay-300"
                                ></div>
                            </div>
                            <!-- Thinking Steps -->
                            @if (thinkingSteps().length > 0) {
                                <div
                                    class="mt-2 text-xs text-slate-400 border-t border-slate-100 dark:border-slate-700 pt-2 animate-fadeIn"
                                >
                                    {{ currentThinkingStep() | transloco }}
                                </div>
                            }
                        </div>
                    </div>
                }
            </div>
        </div>

        <!-- Input Area -->
        <div
            class="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 shrink-0 z-10"
        >
            <!-- Attachment Previews -->
            @if (pendingAttachments().length > 0) {
                <div class="max-w-4xl mx-auto mb-3 pl-12">
                    <div class="flex gap-3 overflow-x-auto pb-2">
                        @for (img of pendingAttachments(); track $index) {
                            <div
                                class="relative group w-20 h-20 shrink-0 cursor-zoom-in"
                                (click)="openImagePreview(img)"
                            >
                                <img
                                    [src]="img"
                                    class="w-full h-full object-cover rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm"
                                />
                                <button
                                    (click)="$event.stopPropagation(); removeAttachment($index)"
                                    class="absolute top-1 right-1 w-6 h-6 bg-black/50 hover:bg-red-500 text-white rounded-full flex items-center justify-center backdrop-blur-sm transition-colors shadow-sm"
                                >
                                    <mat-icon
                                        class="!w-4 !h-4 !text-[14px] flex items-center justify-center"
                                        >close</mat-icon
                                    >
                                </button>
                            </div>
                        }
                    </div>
                </div>
            }

            <div class="max-w-4xl mx-auto flex gap-3 items-center relative">
                <!-- File Input (Hidden) -->
                <input
                    type="file"
                    #fileInput
                    hidden
                    multiple
                    accept="image/*"
                    (change)="onFileSelected($event)"
                />

                <!-- Attach Button -->
                <button
                    mat-icon-button
                    (click)="fileInput.click()"
                    class="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
                    matTooltip="Attach image"
                >
                    <mat-icon>attach_file</mat-icon>
                </button>

                <input
                    [(ngModel)]="userInput"
                    (keyup.enter)="sendMessage()"
                    (paste)="onPaste($event)"
                    type="text"
                    [placeholder]="'chat.inputPlaceholder' | transloco"
                    class="flex-1 h-12 pl-4 pr-12 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-slate-900/10 focus:border-slate-400 outline-none transition-all placeholder:text-slate-400 shadow-sm"
                />

                <button
                    (click)="sendMessage()"
                    [disabled]="
                        isLoading() || (!userInput().trim() && pendingAttachments().length === 0)
                    "
                    class="absolute right-2 top-2 h-8 w-8 flex items-center justify-center rounded-lg bg-slate-900 text-white hover:bg-slate-700 disabled:opacity-50 disabled:bg-slate-200 disabled:text-slate-400 transition-all shadow-md"
                >
                    @if (isLoading()) {
                        <mat-progress-spinner
                            mode="indeterminate"
                            diameter="16"
                            color="accent"
                        ></mat-progress-spinner>
                    } @else {
                        <mat-icon class="!w-4 !h-4 !text-[16px]">arrow_upward</mat-icon>
                    }
                </button>
            </div>
            <div class="text-center mt-2 text-[10px] text-slate-400">
                Verifik Agent can make mistakes. Verify important information.
            </div>
        </div>
    </main>

    <!-- Modals (Overlaying the whole Layout) -->

    <!-- Image Preview Modal -->
    @if (previewImage()) {
        <div
            class="fixed inset-0 z-[70] flex items-center justify-center bg-black/90 backdrop-blur-md p-4 animate-fadeIn"
            (click)="closeImagePreview()"
        >
            <button
                class="absolute top-4 right-4 text-white/70 hover:text-white transition-colors"
                (click)="closeImagePreview()"
            >
                <mat-icon class="!w-8 !h-8 !text-[32px]">close</mat-icon>
            </button>

            <img
                [src]="previewImage()"
                class="max-w-full max-h-[90vh] rounded-lg shadow-2xl animate-scaleIn object-contain"
                (click)="$event.stopPropagation()"
            />
        </div>
    }

    <!-- Agent Info Modal -->
    @if (showAgentInfoModal()) {
        <div
            class="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 backdrop-blur-sm p-4 animate-fadeIn"
            (click)="toggleAgentInfoModal()"
        >
            <!-- Reuse existing content style but ensure it's centered -->
            <div
                class="bg-white dark:bg-slate-900 w-full max-w-lg rounded-2xl shadow-xl max-h-[90vh] overflow-y-auto"
                (click)="$event.stopPropagation()"
            >
                <div class="p-6">
                    <div class="flex justify-between items-center mb-6">
                        <h2 class="text-2xl font-bold dark:text-white">
                            {{ 'chat.agentInfo.title' | transloco }}
                        </h2>
                        <button
                            (click)="toggleAgentInfoModal()"
                            class="text-slate-400 hover:text-slate-600"
                        >
                            <mat-icon>close</mat-icon>
                        </button>
                    </div>
                    <!-- Content same as before logic... simplified for brevity, assume content matches -->
                    <!-- We rely on component logic for data -->
                    <div class="space-y-4">
                        @if (isLoadingAgentInfo()) {
                            <div class="flex justify-center p-8">
                                <mat-progress-spinner
                                    mode="indeterminate"
                                    diameter="30"
                                ></mat-progress-spinner>
                            </div>
                        } @else {
                            <!-- Use the new component -->
                            <app-agent-erc8004 [agentInfo]="agentInfo()"></app-agent-erc8004>
                        }
                    </div>
                </div>
            </div>
        </div>
    }

    <!-- Wallet Modal -->
    @if (showWalletModal()) {
        <div
            class="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 backdrop-blur-sm p-4 animate-fadeIn"
            (click)="toggleWalletModal()"
        >
            <div
                class="w-full max-w-sm mx-auto p-6 bg-white dark:bg-slate-900 rounded-2xl shadow-2xl relative animate-slideUp"
                (click)="$event.stopPropagation()"
            >
                <!-- Content reused from previous template, simplified structure -->
                <button
                    class="absolute right-4 top-4 text-slate-400 hover:text-slate-600"
                    (click)="toggleWalletModal()"
                >
                    <mat-icon>close</mat-icon>
                </button>
                <h2 class="text-xl font-bold mb-4 dark:text-white">
                    {{ 'chat.walletModal.title' | transloco }}
                </h2>

                @if (walletQrCode()) {
                    <div class="flex justify-center mb-4">
                        <img [src]="walletQrCode()" class="w-32 h-32 rounded-lg border" />
                    </div>
                }

                <div class="mb-4">
                    <label class="text-xs text-slate-500 uppercase">{{
                        'chat.walletModal.addressLabel' | transloco
                    }}</label>
                    <div
                        class="p-3 bg-slate-50 dark:bg-slate-800 rounded-lg flex gap-2 items-center"
                    >
                        <code class="text-xs flex-1 break-all dark:text-slate-300">{{
                            walletAddress()
                        }}</code>
                        <button (click)="copyAddress()">
                            <mat-icon
                                class="text-slate-400 hover:text-blue-500 !w-4 !h-4 text-[16px]"
                                >content_copy</mat-icon
                            >
                        </button>
                    </div>
                </div>

                <div class="mb-6">
                    <label class="text-xs text-slate-500 uppercase">{{
                        'chat.walletModal.balanceLabel' | transloco
                    }}</label>
                    <div class="text-3xl font-bold dark:text-white">
                        {{ walletBalance() | number: '1.4-4' }}
                        <span class="text-sm font-normal text-slate-400">AVAX</span>
                    </div>

                    @if (tokenBalance() && tokenBalance() !== '0.00' && tokenBalance() !== '0.0') {
                        <div class="text-3xl font-bold dark:text-white mt-2">
                            {{ tokenBalance() | number: '1.0-2' }}
                            <span class="text-sm font-normal text-slate-400">{{
                                tokenTicker
                            }}</span>
                        </div>
                    }
                </div>

                <button mat-stroked-button class="w-full mb-2" (click)="refreshBalance()">
                    {{ 'chat.walletModal.refresh' | transloco }}
                </button>
                <button mat-stroked-button color="warn" class="w-full" (click)="resetWallet()">
                    {{ 'chat.walletModal.reset' | transloco }}
                </button>
            </div>
        </div>
    }

    <!-- Toasts -->
    @if (showToast()) {
        <div
            class="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-[60] bg-slate-800 text-white px-4 py-2 rounded-full shadow-lg flex items-center gap-2 text-sm animate-slideUpFade"
        >
            <mat-icon class="!w-4 !h-4 text-[16px]">check_circle</mat-icon>
            {{ toastMessage() }}
        </div>
    }
</div>
`, styles: ['/* src/app/modules/chat/chat.component.scss */\n.message {\n  display: flex;\n  animation: fadeIn 0.3s ease-out;\n  width: 100%;\n}\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes slideUp {\n  from {\n    opacity: 0;\n    transform: translateY(20px) scale(0.95);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0) scale(1);\n  }\n}\n@keyframes slideUpFade {\n  from {\n    opacity: 0;\n    transform: translate(-50%, 20px);\n  }\n  to {\n    opacity: 1;\n    transform: translate(-50%, 0);\n  }\n}\n.modal-overlay {\n}\n.markdown-body {\n  font-family:\n    "Inter",\n    system-ui,\n    sans-serif;\n  line-height: 1.6;\n}\n.markdown-body p {\n  margin-bottom: 0.75rem;\n}\n.markdown-body p:last-child {\n  margin-bottom: 0;\n}\n.markdown-body code {\n  background: rgba(0, 0, 0, 0.1);\n  padding: 0.2em 0.4em;\n  border-radius: 4px;\n  font-family: monospace;\n  font-size: 0.85em;\n}\n.markdown-body pre {\n  background: #1e293b;\n  color: #e2e8f0;\n  padding: 1rem;\n  border-radius: 8px;\n  overflow-x: auto;\n  margin: 1rem 0;\n}\n.markdown-body pre code {\n  background: none;\n  padding: 0;\n  color: inherit;\n}\n.markdown-body ul,\n.markdown-body ol {\n  margin-left: 1.5rem;\n  margin-bottom: 1rem;\n  list-style-type: disc;\n}\n.markdown-body strong {\n  font-weight: 700;\n  color: inherit;\n}\n.markdown-body h1,\n.markdown-body h2,\n.markdown-body h3,\n.markdown-body h4 {\n  font-weight: 700;\n  margin-top: 1.5rem;\n  margin-bottom: 0.5rem;\n  line-height: 1.3;\n}\n.markdown-body h1 {\n  font-size: 1.5rem;\n}\n.markdown-body h2 {\n  font-size: 1.25rem;\n}\n.markdown-body h3 {\n  font-size: 1.1rem;\n}\n::-webkit-scrollbar {\n  width: 6px;\n  height: 6px;\n}\n::-webkit-scrollbar-track {\n  background: transparent;\n}\n::-webkit-scrollbar-thumb {\n  background: rgba(148, 163, 184, 0.5);\n  border-radius: 3px;\n}\n::-webkit-scrollbar-thumb:hover {\n  background: rgba(148, 163, 184, 0.8);\n}\n:host-context(.dark) ::-webkit-scrollbar-thumb {\n  background: rgba(71, 85, 105, 0.5);\n}\n.animate-fadeIn {\n  animation: fadeIn 0.3s ease-out forwards;\n}\n.animate-slideUp {\n  animation: slideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;\n}\n.animate-slideUpFade {\n  animation: slideUpFade 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;\n}\n.animate-bounce {\n  animation: bounce 1s infinite;\n}\n@keyframes bounce {\n  0%, 100% {\n    transform: translateY(0);\n  }\n  50% {\n    transform: translateY(-4px);\n  }\n}\n.delay-150 {\n  animation-delay: 150ms;\n}\n.delay-300 {\n  animation-delay: 300ms;\n}\n/*# sourceMappingURL=chat.component.css.map */\n'] }]
  }], () => [{ type: HttpClient }, { type: AgentWalletService }, { type: MatDialog }], { scrollContainer: [{
    type: ViewChild,
    args: ["scrollContainer"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ChatComponent, { className: "ChatComponent", filePath: "src/app/modules/chat/chat.component.ts", lineNumber: 114 });
})();

// src/app/modules/chat/chat.routes.ts
var chat_routes_default = [
  {
    path: "",
    component: ChatComponent
  }
];
export {
  chat_routes_default as default
};
//# sourceMappingURL=chunk-L3SLDE5V.js.map
