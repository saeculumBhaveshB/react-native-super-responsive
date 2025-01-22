"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBreakpoint = exports.BREAKPOINTS = void 0;
// Define breakpoints for responsive design
exports.BREAKPOINTS = {
    small: 320,
    medium: 600,
    large: 960,
};
// Utility to check the current breakpoint
const getBreakpoint = (width) => {
    if (width <= exports.BREAKPOINTS.small)
        return 'small';
    if (width <= exports.BREAKPOINTS.medium)
        return 'medium';
    return 'large';
};
exports.getBreakpoint = getBreakpoint;
//# sourceMappingURL=breakpoints.js.map