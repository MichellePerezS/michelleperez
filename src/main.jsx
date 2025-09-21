import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import {
  ChakraProvider,
  extendTheme,
  ColorModeScript
} from '@chakra-ui/react';
import { HelmetProvider } from 'react-helmet-async';

import '@fontsource/staatliches';
import '@fontsource/yeseva-one';
import '@fontsource-variable/comfortaa';

// Tu tema + modo oscuro por defecto
const theme = extendTheme({
  config: {
    initialColorMode: 'dark',   // 👈 oscuro por defecto
    useSystemColorMode: false,  // ignora el modo del SO
  },
  colors: {
    accent: '#f5a209',
  },
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
        <App />
      </ChakraProvider>
    </HelmetProvider>
  </React.StrictMode>
);