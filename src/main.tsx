import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import '@ui5/webcomponents-react/dist/Assets.js';
import '@ui5/webcomponents/dist/features/InputElementsFormSupport.js';
import { ThemeProvider } from '@ui5/webcomponents-react';
import './util/i18n';
import './index.css'
import { HelmetProvider } from 'react-helmet-async';
import "@ui5/webcomponents-icons/dist/AllIcons.js";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
