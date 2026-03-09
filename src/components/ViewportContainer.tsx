import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Box } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';

interface ViewportContainerProps {
    children: React.ReactNode[];
    sectionNames?: string[];
}

const ViewportContainer: React.FC<ViewportContainerProps> = ({ children, sectionNames }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const prevIndexRef = useRef(0);
    const isScrolling = useRef(false);
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    const handleNext = useCallback(() => {
        setActiveIndex((prev) => {
            if (prev < children.length - 1) {
                prevIndexRef.current = prev;
                return prev + 1;
            }
            return prev;
        });
    }, [children.length]);

    const handlePrev = useCallback(() => {
        setActiveIndex((prev) => {
            if (prev > 0) {
                prevIndexRef.current = prev;
                return prev - 1;
            }
            return prev;
        });
    }, []);

    const scrollToSection = useCallback((idx: number) => {
        if (idx >= 0 && idx < children.length) {
            prevIndexRef.current = activeIndex;
            setActiveIndex(idx);
        }
    }, [activeIndex, children.length]);

    useEffect(() => {
        const handleNavEvent = (e: CustomEvent<{ index: number }>) => {
            scrollToSection(e.detail.index);
        };

        const handleNextEvent = () => handleNext();
        const handlePrevEvent = () => handlePrev();

        window.addEventListener('navigateToSection', handleNavEvent as EventListener);
        window.addEventListener('navigateToNextSection', handleNextEvent as EventListener);
        window.addEventListener('navigateToPrevSection', handlePrevEvent as EventListener);

        return () => {
            window.removeEventListener('navigateToSection', handleNavEvent as EventListener);
            window.removeEventListener('navigateToNextSection', handleNextEvent as EventListener);
            window.removeEventListener('navigateToPrevSection', handlePrevEvent as EventListener);
        };
    }, [handleNext, handlePrev, scrollToSection]);

    useEffect(() => {
        const handleWheel = (e: WheelEvent) => {
            const target = e.target as HTMLElement;
            let isScrollableTarget = false;
            let el: HTMLElement | null = target;

            while (el && el !== document.body) {
                const style = window.getComputedStyle(el);
                const overflowY = style.overflowY || style.overflow;
                const canScrollY = overflowY === 'auto' || overflowY === 'scroll';

                if (canScrollY && el.scrollHeight > el.clientHeight + 1) {
                    const atTop = el.scrollTop <= 2;
                    const atBottom = Math.ceil(el.scrollTop + el.clientHeight) >= el.scrollHeight - 2;

                    if ((e.deltaY < 0 && !atTop) || (e.deltaY > 0 && !atBottom)) {
                        isScrollableTarget = true;
                        break;
                    }
                }
                el = el.parentElement;
            }

            if (isScrollableTarget) return;

            e.preventDefault();
            if (Math.abs(e.deltaY) < 30) return;
            if (isScrolling.current) return;

            isScrolling.current = true;
            if (e.deltaY > 0) handleNext();
            else handlePrev();

            setTimeout(() => {
                isScrolling.current = false;
            }, 1000);
        };

        window.addEventListener('wheel', handleWheel, { passive: false });
        return () => window.removeEventListener('wheel', handleWheel);
    }, [handleNext, handlePrev]);

    const direction = activeIndex > prevIndexRef.current ? 1 : -1;

    return (
        <Box sx={{ height: '100vh', width: '100vw', overflow: 'hidden', position: 'relative', bgcolor: '#000' }}>
            <AnimatePresence mode="wait" initial={false}>
                <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, y: direction * 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: direction * -50 }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                >
                    {children[activeIndex]}
                </motion.div>
            </AnimatePresence>

            {/* Navigation Dots */}
            <Box
                sx={{
                    position: 'fixed',
                    right: { xs: 15, md: 30 },
                    top: '50%',
                    transform: 'translateY(-50%)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 3,
                    zIndex: 9999,
                    alignItems: 'flex-end'
                }}
            >
                {children.map((_, idx) => (
                    <Box
                        key={idx}
                        onMouseEnter={() => setHoveredIndex(idx)}
                        onMouseLeave={() => setHoveredIndex(null)}
                        onClick={() => setActiveIndex(idx)}
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            cursor: 'pointer',
                            position: 'relative'
                        }}
                    >
                        <AnimatePresence>
                            {(hoveredIndex === idx || activeIndex === idx) && sectionNames?.[idx] && (
                                <Box
                                    component={motion.span}
                                    initial={{ opacity: 0, x: 10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 5 }}
                                    sx={{
                                        position: 'absolute',
                                        right: 'calc(100% + 16px)',
                                        color: activeIndex === idx ? '#20B2AA' : 'rgba(255,255,255,0.5)',
                                        fontFamily: "'JetBrains Mono', monospace",
                                        fontSize: '0.7rem',
                                        letterSpacing: '0.2em',
                                        textTransform: 'uppercase',
                                        pointerEvents: 'none',
                                        whiteSpace: 'nowrap',
                                        display: { xs: 'none', lg: 'block' }
                                    }}
                                >
                                    {sectionNames[idx]}
                                </Box>
                            )}
                        </AnimatePresence>

                        <Box
                            sx={{
                                width: idx === activeIndex ? 12 : 8,
                                height: idx === activeIndex ? 12 : 8,
                                borderRadius: '50%',
                                backgroundColor: idx === activeIndex ? '#20B2AA' : 'rgba(255,255,255,0.2)',
                                transition: 'all 0.3s cubic-bezier(0.22, 1, 0.36, 1)',
                                border: idx === activeIndex ? '2px solid rgba(32, 178, 170, 0.3)' : '1px solid transparent',
                                boxShadow: idx === activeIndex ? '0 0 15px rgba(32, 178, 170, 0.5)' : 'none',
                                '&:hover': {
                                    backgroundColor: '#20B2AA',
                                    transform: 'scale(1.5)'
                                }
                            }}
                        />
                    </Box>
                ))}
            </Box>
        </Box>
    );
};

export default ViewportContainer;
