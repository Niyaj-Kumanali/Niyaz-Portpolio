import { useState, useEffect } from 'react';
import { motion, useScroll } from 'framer-motion';
import {
    AppBar,
    Toolbar,
    Typography,
    Container,
    alpha
} from '@mui/material';
import { styled } from '@mui/material/styles';

const NavContainer = styled(motion.div)({
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1100, // MUI default appBar zIndex is 1100
});

const MinimalAppBar = styled(AppBar)({
    background: 'transparent',
    boxShadow: 'none',
    paddingTop: '16px',
    paddingBottom: '16px',
});

const NavButton = styled('a')({
    cursor: 'pointer',
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: '0.875rem',
    fontWeight: 700,
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    padding: '8px 24px',
    border: `1px solid ${alpha('#fff', 0.2)}`,
    transition: 'all 0.3s ease',
    textDecoration: 'none',
    color: '#fff',
    '&:hover': {
        borderColor: '#fff',
        backgroundColor: '#fff',
        color: '#000',
    },
});

const Navbar = () => {
    const { scrollY } = useScroll();
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const unsubscribe = scrollY.on("change", (latest) => {
            setScrolled(latest > 50);
        });
        return () => unsubscribe();
    }, [scrollY]);

    return (
        <NavContainer
            style={{
                backgroundColor: scrolled ? alpha('#000', 0.8) : 'transparent',
                backdropFilter: scrolled ? 'blur(10px)' : 'none',
                borderBottom: scrolled ? `1px solid ${alpha('#fff', 0.1)}` : 'none'
            }}
        >
            <Container maxWidth="xl">
                <MinimalAppBar position="static">
                    <Toolbar sx={{ justifyContent: 'space-between', px: { xs: 0 } }}>
                        <Typography
                            variant="h5"
                            component="a"
                            href="#"
                            sx={{
                                fontWeight: 900,
                                fontSize: '1.5rem',
                                textDecoration: 'none',
                                color: '#fff',
                                fontFamily: "'Inter', sans-serif",
                                letterSpacing: '-0.05em'
                            }}
                        >
                            NIYAZ.
                        </Typography>

                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <NavButton href="#contact">
                                Get in touch
                            </NavButton>
                        </motion.div>
                    </Toolbar>
                </MinimalAppBar>
            </Container>
        </NavContainer>
    );
};

export default Navbar;
