import { Dimensions, PixelRatio } from 'react-native';

let { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

// Base dimensions for scaling (design specs)
const BASE_WIDTH = 360; // Example: Design width in px
const BASE_HEIGHT = 640; // Example: Design height in px

// Update dimensions on orientation change
Dimensions.addEventListener('change', ({ window }) => {
  SCREEN_WIDTH = window.width;
  SCREEN_HEIGHT = window.height;
});

// Responsive width (percentage-based)
export const wp = (percentage: number): number => (SCREEN_WIDTH * percentage) / 100;

// Responsive height (percentage-based)
export const hp = (percentage: number): number => (SCREEN_HEIGHT * percentage) / 100;

// Scale font size based on PixelRatio
export const scaleFont = (size: number): number => size * PixelRatio.getFontScale();

// Utility for scaling widths and heights
export const scaleWidth = (size: number): number => (SCREEN_WIDTH / BASE_WIDTH) * size;
export const scaleHeight = (size: number): number => (SCREEN_HEIGHT / BASE_HEIGHT) * size;

// Utility to detect if the device is a tablet
export const isTablet = (): boolean => SCREEN_WIDTH > 600;
