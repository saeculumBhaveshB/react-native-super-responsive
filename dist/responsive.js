"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isTablet = exports.scaleFont = exports.responsiveHeight = exports.responsiveWidth = exports.pxToDpHeight = exports.pxToDpWidth = exports.hp = exports.wp = void 0;
const react_native_1 = require("react-native");
// Get screen dimensions
let { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = react_native_1.Dimensions.get('window');
// Base dimensions for scaling (design specs)
const BASE_WIDTH = 360; // Width of the design in Figma
const BASE_HEIGHT = 640; // Height of the design in Figma
// Update dimensions dynamically on orientation change
react_native_1.Dimensions.addEventListener('change', ({ window }) => {
    SCREEN_WIDTH = window.width;
    SCREEN_HEIGHT = window.height;
});
// **Percentage-Based Dimensions**
const wp = (percentage) => (SCREEN_WIDTH * percentage) / 100;
exports.wp = wp;
const hp = (percentage) => (SCREEN_HEIGHT * percentage) / 100;
exports.hp = hp;
// **Pixel-Based Dimensions**
// Converts Figma pixels to device width
const pxToDpWidth = (pixels) => (pixels / BASE_WIDTH) * SCREEN_WIDTH;
exports.pxToDpWidth = pxToDpWidth;
// Converts Figma pixels to device height
const pxToDpHeight = (pixels) => (pixels / BASE_HEIGHT) * SCREEN_HEIGHT;
exports.pxToDpHeight = pxToDpHeight;
const responsiveWidth = (value, type = 'percent') => {
    return type === 'percent' ? (0, exports.wp)(value) : (0, exports.pxToDpWidth)(value);
};
exports.responsiveWidth = responsiveWidth;
const responsiveHeight = (value, type = 'percent') => {
    return type === 'percent' ? (0, exports.hp)(value) : (0, exports.pxToDpHeight)(value);
};
exports.responsiveHeight = responsiveHeight;
// **Font Scaling**
const scaleFont = (size) => (size / BASE_WIDTH) * SCREEN_WIDTH;
exports.scaleFont = scaleFont;
// **Utility to Detect Tablets**
const isTablet = () => SCREEN_WIDTH > 600;
exports.isTablet = isTablet;
//# sourceMappingURL=responsive.js.map