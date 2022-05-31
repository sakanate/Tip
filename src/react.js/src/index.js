import React from 'react';
import { createRoot } from 'react-dom/client';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import App from './App';
import cyberpunkTheme from './theme/theme-cyberpunk';

function Providers() {
    return (
        <ThemeProvider theme={createTheme(cyberpunkTheme)}>
            <CssBaseline />
            <App />
        </ThemeProvider>
    );
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<Providers />);
