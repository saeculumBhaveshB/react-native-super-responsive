import { Dimensions, PixelRatio } from 'react-native';

// Get screen dimensions
let { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

// Base dimensions for scaling (design specs)
const BASE_WIDTH = 360; // Width of the design in Figma
const BASE_HEIGHT = 640; // Height of the design in Figma

// Update dimensions dynamically on orientation change
Dimensions.addEventListener('change', ({ window }) => {
  SCREEN_WIDTH = window.width;
  SCREEN_HEIGHT = window.height;
});

// **Percentage-Based Dimensions**
export const wp = (percentage: number): number => (SCREEN_WIDTH * percentage) / 100;
export const hp = (percentage: number): number => (SCREEN_HEIGHT * percentage) / 100;

// **Pixel-Based Dimensions**
// Converts Figma pixels to device width
export const pxToDpWidth = (pixels: number): number => (pixels / BASE_WIDTH) * SCREEN_WIDTH;
// Converts Figma pixels to device height
export const pxToDpHeight = (pixels: number): number => (pixels / BASE_HEIGHT) * SCREEN_HEIGHT;

// **Flexible Utility for Both Percentage and Pixels**
// Handles both percentage-based and pixel-based values
type DimensionType = 'percent' | 'pixel';

export const responsiveWidth = (value: number, type: DimensionType = 'percent'): number => {
  return type === 'percent' ? wp(value) : pxToDpWidth(value);
};

export const responsiveHeight = (value: number, type: DimensionType = 'percent'): number => {
  return type === 'percent' ? hp(value) : pxToDpHeight(value);
};

// **Font Scaling**
export const scaleFont = (size: number): number => (size / BASE_WIDTH) * SCREEN_WIDTH;

// **Utility to Detect Tablets**
export const isTablet = (): boolean => SCREEN_WIDTH > 600;
