import { useState, useEffect } from 'react';
import { Box, alpha } from '@mui/material';
import { motion, useSpring, useMotionValue } from 'framer-motion';

const CustomCursor = () => {
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    const springConfig = { damping: 25, stiffness: 700 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
            if (!isVisible) setIsVisible(true);
        };

        window.addEventListener('mousemove', moveCursor);
        return () => window.removeEventListener('mousemove', moveCursor);
    }, [cursorX, cursorY, isVisible]);

    return (
        <>
            <Box
                component={motion.div}
                style={{
                    translateX: cursorXSpring,
                    translateY: cursorYSpring,
                }}
                sx={{
                    position: 'fixed',
                    top: -50,
                    left: -50,
                    width: 100,
                    height: 100,
                    borderRadius: '50%',
                    bgcolor: 'primary.main',
                    pointerEvents: 'none',
                    zIndex: 99999,
                    display: { xs: 'none', md: 'block' },
                    mixBlendMode: 'difference',
                }}
            />
            <Box
                component={motion.div}
                style={{
                    translateX: cursorXSpring,
                    translateY: cursorYSpring,
                }}
                sx={{
                    position: 'fixed',
                    top: -150,
                    left: -150,
                    width: 300,
                    height: 300,
                    borderRadius: '50%',
                    background: (theme) => `radial-gradient(circle, ${alpha(theme.palette.primary.main, 0.15)} 0%, transparent 70%)`,
                    pointerEvents: 'none',
                    zIndex: 99998,
                    display: { xs: 'none', md: 'block' },
                }}
            />
        </>
    );
};

export default CustomCursor;
