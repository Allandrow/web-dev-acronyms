import React from 'react';
import ReactDOM from 'react-dom/client';
import worker from 'mocks/browser';
import App from './App';

// MUI FONT IMPORT
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

// MSW WORKER
worker.start({
  onUnhandledRequest: 'warn',
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
