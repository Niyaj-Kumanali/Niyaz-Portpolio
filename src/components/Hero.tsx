import { Box, Container, Typography, Button, Stack } from '@mui/material';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Magnetic from './Magnetic';

const Hero = () => {
    const { scrollY } = useScroll();

    // Parallax values
    const y1 = useTransform(scrollY, [0, 1000], [0, 300]);
    const opacity = useTransform(scrollY, [0, 500], [1, 0]);
    const scale = useTransform(scrollY, [0, 500], [1, 0.8]);

    const nameParts = ["Niyaz", "Kumanali"];

    return (
        <Box
            component="section"
            id="hero"
            sx={{
                minHeight: '130vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                overflow: 'hidden',
                background: '#000',
            }}
        >
            {/* Massive Background Typography - Right-justified as requested */}
            <Box
                sx={{
                    position: 'absolute',
                    top: '12%',
                    right: '5%', // Added slight offset from edge
                    width: 'auto',
                    pointerEvents: 'none',
                    zIndex: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-end', // Right align items
                }}
            >
                <motion.div style={{ y: y1 }}>
                    <Typography
                        sx={{
                            fontSize: 'clamp(7rem, 22vw, 22rem)',
                            fontWeight: 900,
                            color: 'rgba(255, 255, 255, 0.03)',
                            lineHeight: 0.85,
                            textAlign: 'right', // Right justify text
                            textTransform: 'uppercase',
                            letterSpacing: '-0.02em'
                        }}
                    >
                        DEV<br />ELOPER
                    </Typography>
                </motion.div>
            </Box>

            <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
                <Box sx={{ textAlign: 'left', maxWidth: '1000px' }}>
                    <motion.div
                        style={{ opacity, scale }}
                    >
                        <Typography
                            variant="subtitle1"
                            sx={{
                                color: '#20B2AA', // lightseagreen accent
                                mb: 4,
                                fontSize: '1.2rem',
                                fontFamily: "'JetBrains Mono', monospace",
                                letterSpacing: '0.2em',
                                textTransform: 'uppercase'
                            }}
                        >
                            Software Engineer // 2.5+ Years
                        </Typography>

                        <Box sx={{ mb: 6, display: 'flex', flexWrap: 'wrap', gap: { xs: 2, md: 4 } }}>
                            {nameParts.map((word, i) => (
                                <Box key={i} sx={{ display: 'inline-block', whiteSpace: 'nowrap' }}>
                                    {word.split("").map((letter, j) => (
                                        <Typography
                                            key={j}
                                            variant="h1"
                                            component={motion.span}
                                            initial={{ y: 100, opacity: 0 }}
                                            animate={{ y: 0, opacity: 1 }}
                                            transition={{
                                                duration: 0.8,
                                                delay: (i * word.length + j) * 0.05,
                                                ease: [0.215, 0.61, 0.355, 1]
                                            }}
                                            sx={{
                                                fontSize: { xs: '15vw', sm: '12vw', md: '10vw' },
                                                fontWeight: 900,
                                                display: 'inline-block',
                                                lineHeight: 0.9,
                                                color: '#fff'
                                            }}
                                        >
                                            {letter}
                                        </Typography>
                                    ))}
                                </Box>
                            ))}
                        </Box>

                        <Typography
                            variant="body1"
                            sx={{
                                color: 'rgba(255, 255, 255, 0.6)',
                                maxWidth: 600,
                                mb: 8,
                                fontSize: { xs: '1.2rem', md: '1.5rem' },
                                fontWeight: 400,
                                fontFamily: "'Inter', sans-serif"
                            }}
                        >
                            Building robust backend ecosystems through advanced system design and strategic database performance tuning.
                        </Typography>

                        <Stack
                            direction={{ xs: 'column', sm: 'row' }}
                            spacing={4}
                        >
                            <Magnetic>
                                <Button
                                    variant="contained"
                                    size="large"
                                    endIcon={<ArrowRight />}
                                    sx={{
                                        fontSize: '1.2rem',
                                        px: 6,
                                        py: 2.5,
                                        backgroundColor: '#fff',
                                        color: '#000',
                                        borderRadius: 0,
                                        '&:hover': {
                                            backgroundColor: 'rgba(255, 255, 255, 0.9)',
                                        }
                                    }}
                                >
                                    Explore Works
                                </Button>
                            </Magnetic>
                            <Magnetic>
                                <Button
                                    variant="outlined"
                                    size="large"
                                    href="#contact"
                                    sx={{
                                        fontSize: '1.2rem',
                                        px: 6,
                                        py: 2.5,
                                        borderColor: '#fff',
                                        color: '#fff',
                                        borderRadius: 0,
                                        '&:hover': {
                                            borderColor: '#fff',
                                            backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                        }
                                    }}
                                >
                                    Contact
                                </Button>
                            </Magnetic>
                        </Stack>
                    </motion.div>
                </Box>
            </Container>

            {/* Scroll Indicator */}
            <Box
                component={motion.div}
                animate={{
                    y: [0, 10, 0],
                }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                sx={{
                    position: 'absolute',
                    bottom: 40,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 1,
                    opacity: 0.5,
                }}
            >
                <Box
                    sx={{
                        width: 1,
                        height: 60,
                        backgroundColor: '#fff',
                        transformOrigin: 'top',
                    }}
                />
                <Typography variant="caption" sx={{ fontFamily: "'JetBrains Mono', monospace", letterSpacing: '0.2em', color: '#fff' }}>
                    SCROLL
                </Typography>
            </Box>
        </Box>
    );
};

export default Hero;
