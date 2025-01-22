"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isTablet = exports.scaleHeight = exports.scaleWidth = exports.scaleFont = exports.hp = exports.wp = void 0;
const react_native_1 = require("react-native");
let { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = react_native_1.Dimensions.get('window');
// Base dimensions for scaling (design specs)
const BASE_WIDTH = 360; // Example: Design width in px
const BASE_HEIGHT = 640; // Example: Design height in px
// Update dimensions on orientation change
react_native_1.Dimensions.addEventListener('change', ({ window }) => {
    SCREEN_WIDTH = window.width;
    SCREEN_HEIGHT = window.height;
});
// Responsive width (percentage-based)
const wp = (percentage) => (SCREEN_WIDTH * percentage) / 100;
exports.wp = wp;
// Responsive height (percentage-based)
const hp = (percentage) => (SCREEN_HEIGHT * percentage) / 100;
exports.hp = hp;
// Scale font size based on PixelRatio
const scaleFont = (size) => size * react_native_1.PixelRatio.getFontScale();
exports.scaleFont = scaleFont;
// Utility for scaling widths and heights
const scaleWidth = (size) => (SCREEN_WIDTH / BASE_WIDTH) * size;
exports.scaleWidth = scaleWidth;
const scaleHeight = (size) => (SCREEN_HEIGHT / BASE_HEIGHT) * size;
exports.scaleHeight = scaleHeight;
// Utility to detect if the device is a tablet
const isTablet = () => SCREEN_WIDTH > 600;
exports.isTablet = isTablet;
//# sourceMappingURL=responsive.js.map