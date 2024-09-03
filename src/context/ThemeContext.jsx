import React, { createContext, useContext, useState, useEffect } from 'react';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';

const ThemeContext = createContext();

export const useThemeContext = () => useContext(ThemeContext);

const ThemeProvider = ({ children }) => {
  const [colorMode, setColorMode] = useState('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('chakra-ui-color-mode') || 'light';
    setColorMode(savedTheme);
  }, []);

  const toggleColorMode = () => {
    const newColorMode = colorMode === 'light' ? 'dark' : 'light';
    setColorMode(newColorMode);
    localStorage.setItem('chakra-ui-color-mode', newColorMode);
  };

  const theme = extendTheme({
    config: {
      initialColorMode: colorMode,
      useSystemColorMode: false,
    },
    colors: {
      brand: {
        50: "#e9f5ff",
        100: "#d1eaff",
        200: "#a3d4ff",
        300: "#75bfff",
        400: "#47aaff",
        500: "#1a95ff", // Light mode primary color
        600: "#007acc",
        700: "#005999",
        800: "#003966",
        900: "#001a33",
      },
      background: {
        light: "#ffffff",
        dark: "#000000", // Dark mode background color
      },
      text: {
        light: "#000000",
        dark: "#f0e7db", // Dark mode text color
      },
    },
    styles: {
      global: (props) => ({
        body: {
          bg: props.colorMode === 'dark' ? 'background.dark' : 'background.light',
          color: props.colorMode === 'dark' ? 'text.dark' : 'text.light',
        },
      }),
    },
  });

  return (
    <ThemeContext.Provider value={{ colorMode, toggleColorMode }}>
      <ChakraProvider theme={theme}>
        {children}
      </ChakraProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
