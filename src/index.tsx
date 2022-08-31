import { ThemeProvider } from '@mui/material';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import JobContextProvider from './context/job-context';
import './index.css';
import theme from './theme';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <JobContextProvider>
        <App />
      </JobContextProvider>
    </ThemeProvider>
  </React.StrictMode>
);
