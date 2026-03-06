import { createTheme, alpha } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#FFFFFF', // High contrast white
            light: '#FFFFFF',
            dark: '#CCCCCC',
            contrastText: '#000000',
        },
        secondary: {
            main: '#20B2AA', // Light Sea Green as accent
            light: '#48D1CC',
            dark: '#008B8B',
            contrastText: '#ffffff',
        },
        background: {
            default: '#000000', // Pure Black
            paper: '#0a0a0a',
        },
        text: {
            primary: '#ffffff',
            secondary: alpha('#ffffff', 0.6),
        },
    },
    typography: {
        fontFamily: "'Inter', 'Outfit', 'JetBrains Mono', monospace, sans-serif",
        h1: {
            fontFamily: "'Inter', sans-serif",
            fontWeight: 900,
            letterSpacing: '-0.05em',
            lineHeight: 0.9,
            textTransform: 'uppercase',
        },
        h2: {
            fontFamily: "'Inter', sans-serif",
            fontWeight: 900,
            letterSpacing: '-0.04em',
            lineHeight: 1,
            textTransform: 'uppercase',
        },
        h4: {
            fontFamily: "'Inter', sans-serif",
            fontWeight: 800,
            letterSpacing: '-0.02em',
        },
        subtitle1: {
            fontFamily: "'JetBrains Mono', monospace",
            fontWeight: 500,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
        },
        body1: {
            fontFamily: "'Inter', sans-serif",
            fontSize: '1.1rem',
            lineHeight: 1.6,
        },
        button: {
            fontFamily: "'Inter', sans-serif",
            textTransform: 'none',
            fontWeight: 700,
        },
    },
    shape: {
        borderRadius: 0, // Brutalist style
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 0,
                    padding: '16px 40px',
                    transition: 'all 0.4s cubic-bezier(0.23, 1, 0.32, 1)',
                    borderWidth: 2,
                    '&:hover': {
                        borderWidth: 2,
                    }
                },
                containedPrimary: {
                    backgroundColor: '#ffffff',
                    color: '#000000',
                    '&:hover': {
                        backgroundColor: alpha('#ffffff', 0.9),
                        transform: 'translateY(-2px)',
                    },
                },
                outlinedPrimary: {
                    borderColor: '#ffffff',
                    color: '#ffffff',
                    '&:hover': {
                        borderColor: '#ffffff',
                        backgroundColor: alpha('#ffffff', 0.1),
                    },
                },
            },
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    background: '#000000',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: 0,
                },
            },
        },
    },
});

export default theme;
