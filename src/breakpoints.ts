// Define breakpoints for responsive design
export const BREAKPOINTS = {
    small: 320,
    medium: 600,
    large: 960,
  };
  
  // Utility to check the current breakpoint
  export const getBreakpoint = (width: number): 'small' | 'medium' | 'large' => {
    if (width <= BREAKPOINTS.small) return 'small';
    if (width <= BREAKPOINTS.medium) return 'medium';
    return 'large';
  };
  