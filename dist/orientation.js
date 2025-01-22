"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useOrientation = void 0;
const react_native_1 = require("react-native");
const react_1 = require("react");
// Hook to detect orientation changes
const useOrientation = () => {
    const [orientation, setOrientation] = (0, react_1.useState)(react_native_1.Dimensions.get('window').width > react_native_1.Dimensions.get('window').height ? 'landscape' : 'portrait');
    (0, react_1.useEffect)(() => {
        // Handler for dimension changes
        const handleChange = ({ window }) => {
            setOrientation(window.width > window.height ? 'landscape' : 'portrait');
        };
        // Subscribe to changes
        const subscription = react_native_1.Dimensions.addEventListener('change', handleChange);
        // Clean up subscription
        return () => subscription.remove();
    }, []);
    return orientation;
};
exports.useOrientation = useOrientation;
//# sourceMappingURL=orientation.js.map