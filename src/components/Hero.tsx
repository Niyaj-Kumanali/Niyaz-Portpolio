import { Box, Typography, Button, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Section, SectionInner } from './common/Section';

const Hero = () => {
    const nameParts = ["Niyaz", "Kumanali"];

    const triggerNav = (index: number) => {
        window.dispatchEvent(new CustomEvent('navigateToSection', { detail: { index } }));
    };

    return (
        <Section id="hero">
            {/* Premium Aurora Glows */}
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    zIndex: 0,
                    overflow: 'hidden',
                    pointerEvents: 'none'
                }}
            >
                <Box
                    component={motion.div}
                    animate={{
                        x: [0, 100, 0],
                        y: [0, 50, 0],
                        scale: [1, 1.2, 1]
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    sx={{
                        position: 'absolute',
                        top: '10%',
                        left: '10%',
                        width: '40vw',
                        height: '40vw',
                        background: 'radial-gradient(circle, rgba(32, 178, 170, 0.08) 0%, transparent 70%)',
                        filter: 'blur(80px)',
                    }}
                />
                <Box
                    component={motion.div}
                    animate={{
                        x: [0, -100, 0],
                        y: [0, -50, 0],
                        scale: [1, 1.1, 1]
                    }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    sx={{
                        position: 'absolute',
                        bottom: '10%',
                        right: '10%',
                        width: '35vw',
                        height: '35vw',
                        background: 'radial-gradient(circle, rgba(147, 112, 219, 0.05) 0%, transparent 70%)',
                        filter: 'blur(100px)',
                    }}
                />
            </Box>

            {/* Massive Background Typography */}
            <Box
                sx={{
                    position: 'absolute',
                    top: '5%',
                    right: '5%',
                    pointerEvents: 'none',
                    zIndex: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-end',
                }}
            >
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 2, ease: "easeOut" }}
                >
                    <Typography
                        sx={{
                            fontSize: 'clamp(8rem, 25vw, 25rem)',
                            fontWeight: 900,
                            color: 'rgba(255, 255, 255, 0.02)',
                            lineHeight: 0.8,
                            textAlign: 'right',
                            textTransform: 'uppercase',
                            letterSpacing: '-0.04em',
                            WebkitTextStroke: '1px rgba(255, 255, 255, 0.01)'
                        }}
                    >
                        ARCHI<br />TECT
                    </Typography>
                </motion.div>
            </Box>

            <SectionInner sx={{ position: 'relative', zIndex: 1, justifyContent: 'center' }} showPrevButton={false}>
                <Box sx={{ textAlign: 'left', maxWidth: '1000px' }}>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <Stack direction="row" alignItems="center" spacing={2} sx={{ mb: 4 }}>
                            <Typography
                                variant="subtitle1"
                                sx={{
                                    color: '#20B2AA',
                                    fontSize: '1.2rem',
                                    fontWeight: 600,
                                    fontFamily: "'JetBrains Mono', monospace",
                                    letterSpacing: '0.4em',
                                    textTransform: 'uppercase',
                                }}
                            >
                                Software Engineer
                            </Typography>
                        </Stack>

                        <Box sx={{ mb: 6, display: 'flex', flexWrap: 'wrap', gap: { xs: 2, md: 3 } }}>
                            {nameParts.map((word, i) => (
                                <Box key={i} sx={{ display: 'inline-block', whiteSpace: 'nowrap' }}>
                                    {word.split("").map((letter, j) => (
                                        <Typography
                                            key={j}
                                            variant="h1"
                                            component={motion.span}
                                            initial={{ y: 80, opacity: 0 }}
                                            animate={{ y: 0, opacity: 1 }}
                                            transition={{
                                                duration: 1,
                                                delay: (i * word.length + j) * 0.03,
                                                ease: [0.16, 1, 0.3, 1]
                                            }}
                                            sx={{
                                                fontSize: { xs: '16vw', sm: '12vw', md: '10vw' },
                                                fontWeight: 900,
                                                display: 'inline-block',
                                                lineHeight: 0.85,
                                                color: '#fff',
                                                letterSpacing: '-0.02em'
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
                                maxWidth: 700,
                                mb: 10,
                                fontSize: { xs: '1rem', md: '1.4rem' },
                                fontWeight: 300,
                                lineHeight: 1.6,
                                fontFamily: "'Inter', sans-serif"
                            }}
                        >
                            Architecting ultra-low-latency Backend ecosystems and optimized Data pipelines focusing on scalability and operational excellence.
                        </Typography>

                        <Stack
                            direction={{ xs: 'column', sm: 'row' }}
                            spacing={3}
                        >
                            <Button
                                component={motion.button}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                variant="contained"
                                size="large"
                                onClick={() => triggerNav(3)}
                                endIcon={<ArrowRight />}
                                sx={{
                                    fontSize: '1.1rem',
                                    px: 8,
                                    py: 3,
                                    backgroundColor: '#fff',
                                    color: '#000',
                                    borderRadius: 0,
                                    fontWeight: 900,
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.1em',
                                    '&:hover': {
                                        backgroundColor: '#20B2AA',
                                        color: '#fff',
                                    }
                                }}
                            >
                                Selected Works
                            </Button>
                            <Button
                                component={motion.button}
                                whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.05)' }}
                                whileTap={{ scale: 0.95 }}
                                variant="outlined"
                                size="large"
                                onClick={() => triggerNav(5)}
                                sx={{
                                    fontSize: '1.1rem',
                                    px: 8,
                                    py: 3,
                                    borderColor: 'rgba(255,255,255,0.3)',
                                    color: '#fff',
                                    borderRadius: 0,
                                    fontWeight: 700,
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.1em',
                                    '&:hover': {
                                        borderColor: '#fff',
                                    }
                                }}
                            >
                                Contact
                            </Button>
                        </Stack>
                    </motion.div>
                </Box>
            </SectionInner>
        </Section>
    );
};

export default Hero;
