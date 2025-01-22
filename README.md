# react-native-super-responsive

A lightweight, easy-to-use package for responsive design in React Native. This package helps you dynamically handle layouts, font scaling, screen dimensions, and orientation changes across all devices like phones, tablets, and iPads.


## Features

-   📱 **Responsive Dimensions**: Scale components dynamically using percentages of screen width or height.
-   🔤 **Font Scaling**: Ensure text sizes are readable across all devices with varying screen densities.
-   🌐 **Orientation Handling**: Adjust layouts dynamically based on portrait or landscape orientation.
-   💻 **Device Awareness**: Detect if the device is a tablet and apply custom layouts.
-   📏 **Custom Breakpoints**: Use predefined or custom breakpoints to handle layouts for different screen sizes.

## Installation

Install the package via npm:

**npm install react-native-super-responsive**

## Getting Started

import {
  wp,
  hp,
  scaleFont,
  scaleWidth,
  scaleHeight,
  useOrientation,
  isTablet,
  BREAKPOINTS,
  getBreakpoint,
} from 'react-native-super-responsive';


## Utilities

Here’s a breakdown of each utility provided by the package:

### **1. Responsive Dimensions**
-   Dynamically scale components based on screen width or height.

| Function | Description                 | Example                          |
|----------|-----------------------------|----------------------------------|
| `wp`     | Percentage of screen width | `wp(50)` → 50% of screen width  |
| `hp`     | Percentage of screen height| `hp(30)` → 30% of screen height |

**Example:**
const styles = StyleSheet.create({
  container: {
    width: wp(80), // 80% of the screen width
    height: hp(50), // 50% of the screen height
  },
});

## 2. Font Scaling

Scale fonts dynamically based on the device’s pixel density.

| Function    | Description                          | Example               |
|-------------|--------------------------------------|-----------------------|
| `scaleFont` | Adjust font size based on screen density | `scaleFont(16)` |

**Example:**
const styles = StyleSheet.create({
  text: {
    fontSize: scaleFont(16), // Scales font size dynamically
  },
});


## 3. Orientation Handling

Detect the device's orientation (portrait or landscape) and adjust styles or layouts dynamically.

| Hook            | Description                     | Example                                      |
|------------------|---------------------------------|----------------------------------------------|
| `useOrientation` | Returns `'portrait'` or `'landscape'` | `const orientation = useOrientation();`     |

**Example:**
const orientation = useOrientation();
const isLandscape = orientation === 'landscape';

const styles = StyleSheet.create({
  container: {
    flexDirection: isLandscape ? 'row' : 'column', // Adjust layout dynamically
  },
});

## 4. Device Awareness

  Detect if the device is a tablet or apply custom breakpoints for screen sizes.

| Function        | Description                                   | Example                                      |
|------------------|----------------------------------------------|----------------------------------------------|
| `isTablet`      | Returns `true` if the device is a tablet      | `const tablet = isTablet();`                |
| `getBreakpoint` | Returns the current screen size category based on width | `getBreakpoint(width)`                    |

**Example:**
const styles = StyleSheet.create({
  container: {
    backgroundColor: isTablet() ? 'green' : 'blue', // Apply tablet-specific styles
  },
});

## 5. Custom Breakpoints

Define layouts for specific screen sizes using predefined or custom breakpoints.

| Constant       | Description          | Values                   |
|----------------|----------------------|--------------------------|
| `BREAKPOINTS`  | Default breakpoints  | `small`, `medium`, `large` |

**Example:**
const currentBreakpoint = getBreakpoint(Dimensions.get('window').width);

if (currentBreakpoint === 'small') {
  console.log('Small screen detected!');
}


## Example Usage
Here’s a complete example demonstrating the package:


import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {
  wp,
  hp,
  scaleFont,
  useOrientation,
  isTablet,
} from 'react-native-super-responsive';

const App: React.FC = () => {
  const orientation = useOrientation(); // Get the current orientation

  const styles = StyleSheet.create({
    container: {
      width: wp(90), // 90% of screen width
      height: hp(orientation === 'landscape' ? 40 : 50), // Dynamic height
      padding: wp(5),
      backgroundColor: isTablet() ? 'green' : 'blue',
      flexDirection: orientation === 'landscape' ? 'row' : 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    title: {
      fontSize: scaleFont(20),
      color: 'white',
      textAlign: 'center',
    },
    subtitle: {
      fontSize: scaleFont(16),
      color: 'lightgray',
      textAlign: 'center',
    },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Responsive Design</Text>
      <Text style={styles.subtitle}>
        Orientation: {orientation.toUpperCase()}
      </Text>
    </View>
  );
};

export default App;


## Advantages


1.  📐 **Scalable**: Handles layouts for all device sizes and orientations.
2.  ⚡ **Lightweight**: Minimal overhead with no external dependencies.
3.  🛠️ **Customizable**: Fully adaptable for different screen breakpoints and designs.
4.  🎨 **Readable Fonts**: Ensures consistent font scaling across devices.

## Contributing

We welcome contributions to enhance the features of this package. Please submit a pull request or create an issue to get started.

Since one file can be synced with multiple locations, you can list and manage synchronized locations by clicking **File synchronization** in the **Synchronize** sub-menu. This allows you to list and remove synchronized locations that are linked to your file.



