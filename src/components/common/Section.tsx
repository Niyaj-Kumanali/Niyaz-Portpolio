import { Box, styled, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';
import React, { createContext, useContext, useRef } from 'react';

const ScrollContext = createContext<React.RefObject<HTMLDivElement | null> | null>(null);

export const useScrollContainer = () => useContext(ScrollContext);

export const Section = styled(Box)(({ theme }) => ({
    height: '100vh',
    width: '100%',
    padding: theme.spacing(2, 2),
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#000',
    color: '#fff',
    overflow: 'hidden',
    msOverflowStyle: 'none',
    scrollbarWidth: 'none',
    [theme.breakpoints.down('lg')]: {
        padding: theme.spacing(10, 6),
    },
    [theme.breakpoints.down('md')]: {
        padding: theme.spacing(8, 3),
    }
}));

const NavButton = styled(motion.div)(({ theme }) => ({
    position: 'absolute',
    left: '50%',
    cursor: 'pointer',
    color: 'rgba(255, 255, 255, 0.7)',
    transition: 'color 0.3s ease',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: theme.spacing(0.2),
    zIndex: 100, // Elevated z-index
    '&:hover': {
        color: '#20B2AA',
    }
}));

export const SectionInner = ({
    children,
    justifyContent = 'flex-start',
    showNextButton = true,
    showPrevButton = true,
    ...props
}: any) => {
    const scrollRef = useRef<HTMLDivElement>(null);

    return (
        <ScrollContext.Provider value={scrollRef}>
            <Box sx={{
                width: '100%',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
                overflow: 'hidden' // Ensure absolute buttons stay within bounds
            }} {...props}>
                {/* Scroll Up Button - Always Fixed relative to section */}
                {showPrevButton && (
                    <NavButton
                        initial={{ opacity: 0, y: 10, x: '-50%' }}
                        whileInView={{ opacity: 1, y: 0, x: '-50%' }}
                        transition={{
                            opacity: { duration: 1 },
                            y: { repeat: Infinity, duration: 2, repeatType: "reverse" }
                        }}
                        onClick={() => window.dispatchEvent(new CustomEvent('navigateToPrevSection'))}
                        sx={{ top: 0 }} // Closer to top since padding is on Section
                    >
                        <ChevronUp size={18} />
                        <Typography sx={{
                            fontFamily: "'JetBrains Mono', monospace",
                            fontSize: '0.55rem',
                            letterSpacing: '0.3em',
                            mt: -0.5
                        }}>PREV</Typography>
                    </NavButton>
                )}

                {/* Scrollable Content Area */}
                <Box
                    ref={scrollRef}
                    sx={{
                        flex: 1,
                        width: '100%',
                        overflowY: 'auto',
                        overflowX: 'hidden',
                        justifyContent,
                        display: 'flex',
                        flexDirection: 'column',
                        '&::-webkit-scrollbar': { display: 'none' },
                        msOverflowStyle: 'none',
                        scrollbarWidth: 'none',
                        py: 4 // Internal padding for content spacing
                    }}
                >
                    {children}
                </Box>

                {/* Scroll Down Button - Always Fixed relative to section */}
                {showNextButton && (
                    <NavButton
                        initial={{ opacity: 0, y: -10, x: '-50%' }}
                        whileInView={{ opacity: 1, y: 0, x: '-50%' }}
                        transition={{
                            opacity: { duration: 1 },
                            y: { repeat: Infinity, duration: 2, repeatType: "reverse" }
                        }}
                        onClick={() => window.dispatchEvent(new CustomEvent('navigateToNextSection'))}
                        sx={{ bottom: 0 }}
                    >
                        <Typography sx={{
                            fontFamily: "'JetBrains Mono', monospace",
                            fontSize: '0.55rem',
                            letterSpacing: '0.3em',
                            mb: -0.5
                        }}>NEXT</Typography>
                        <ChevronDown size={18} />
                    </NavButton>
                )}
            </Box>
        </ScrollContext.Provider>
    );
};
