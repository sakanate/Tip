import { createTheme } from '@mui/material/styles';

const themeOption = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#05D9E8',
        },
        secondary: {
            main: '#FF296D',
        },
        neutral: {
            main: '#647488',
            contrastText: '#fff',
        },
        lightgreen: {
            main: '#0ABDC6',
            contrastText: '#0ABDC6',
        }
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    background: 'linear-gradient(#1D2C33 40%, #193944 100%)',
                    backgroundRepeat: 'no-repeat',
                    backgroundAttachment: 'fixed',
                }
            }
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: '17.5px',
                },
            },
        },
    },
});

export default themeOption;
