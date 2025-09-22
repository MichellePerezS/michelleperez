// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import {
  ChakraProvider,
  extendTheme,
  ColorModeScript
} from '@chakra-ui/react';
import { HelmetProvider } from 'react-helmet-async';
import { HashRouter } from 'react-router-dom'; // 👈

import '@fontsource/staatliches';
import '@fontsource/yeseva-one';
import '@fontsource-variable/comfortaa';

const theme = extendTheme({
  config: { initialColorMode: 'dark', useSystemColorMode: false },
  colors: { accent: '#f5a209' },
  fonts: {
    yesevaOne: `'Yeseva One', system-ui`,
    display: `'Staatliches', system-ui`,
    subHeader: `'ComfortaaVariable', system-ui`,
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <ChakraProvider theme={theme}>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <HashRouter>        {/* 👈 sin basename */}
          <App />
        </HashRouter>
      </ChakraProvider>
    </HelmetProvider>
  </React.StrictMode>
);