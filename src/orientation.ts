import { Dimensions } from 'react-native';
import { useState, useEffect } from 'react';

// Hook to detect orientation changes
export const useOrientation = (): 'portrait' | 'landscape' => {
  const [orientation, setOrientation] = useState<'portrait' | 'landscape'>(
    Dimensions.get('window').width > Dimensions.get('window').height ? 'landscape' : 'portrait'
  );

  useEffect(() => {
    // Handler for dimension changes
    const handleChange = ({ window }: { window: { width: number; height: number } }) => {
      setOrientation(window.width > window.height ? 'landscape' : 'portrait');
    };

    // Subscribe to changes
    const subscription = Dimensions.addEventListener('change', handleChange);

    // Clean up subscription
    return () => subscription.remove();
  }, []);

  return orientation;
};
