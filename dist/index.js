"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBreakpoint = exports.BREAKPOINTS = exports.useOrientation = exports.isTablet = exports.scaleHeight = exports.scaleWidth = exports.scaleFont = exports.hp = exports.wp = void 0;
var responsive_1 = require("./responsive");
Object.defineProperty(exports, "wp", { enumerable: true, get: function () { return responsive_1.wp; } });
Object.defineProperty(exports, "hp", { enumerable: true, get: function () { return responsive_1.hp; } });
Object.defineProperty(exports, "scaleFont", { enumerable: true, get: function () { return responsive_1.scaleFont; } });
Object.defineProperty(exports, "scaleWidth", { enumerable: true, get: function () { return responsive_1.scaleWidth; } });
Object.defineProperty(exports, "scaleHeight", { enumerable: true, get: function () { return responsive_1.scaleHeight; } });
Object.defineProperty(exports, "isTablet", { enumerable: true, get: function () { return responsive_1.isTablet; } });
var orientation_1 = require("./orientation");
Object.defineProperty(exports, "useOrientation", { enumerable: true, get: function () { return orientation_1.useOrientation; } });
var breakpoints_1 = require("./breakpoints");
Object.defineProperty(exports, "BREAKPOINTS", { enumerable: true, get: function () { return breakpoints_1.BREAKPOINTS; } });
Object.defineProperty(exports, "getBreakpoint", { enumerable: true, get: function () { return breakpoints_1.getBreakpoint; } });
//# sourceMappingURL=index.js.map