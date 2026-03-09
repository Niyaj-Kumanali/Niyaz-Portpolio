import { useRef, useState } from 'react';
import { Box, Typography, alpha } from '@mui/material';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

interface SkillCardProps {
    title: string;
    items: string[];
    color: string;
    gridColumn?: any;
}

const SkillCard = ({ title, items, color, gridColumn }: SkillCardProps) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const [isHovered, setIsHovered] = useState(false);

    // Mouse position for spotlight effect
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Smooth tilt effect
    const rotateX = useSpring(useTransform(mouseY, [-100, 100], [5, -5]), { stiffness: 100, damping: 20 });
    const rotateY = useSpring(useTransform(mouseX, [-100, 100], [-5, 5]), { stiffness: 100, damping: 20 });

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        mouseX.set(e.clientX - centerX);
        mouseY.set(e.clientY - centerY);
    };

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => {
        setIsHovered(false);
        mouseX.set(0);
        mouseY.set(0);
    };

    return (
        <motion.div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{
                gridColumn,
                perspective: '1000px',
                rotateX: rotateX,
                rotateY: rotateY,
            }}
        >
            <Box
                sx={{
                    height: '100%',
                    position: 'relative',
                    borderRadius: '24px',
                    background: alpha('#111', 0.8),
                    border: `1.5px solid ${isHovered ? alpha(color, 0.4) : 'rgba(255,255,255,0.08)'}`,
                    backdropFilter: 'blur(12px)',
                    p: 4,
                    overflow: 'hidden',
                    transition: 'border-color 0.3s ease',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 3
                }}
            >
                {/* Spotlight Background */}
                <Box
                    sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        pointerEvents: 'none',
                        background: `radial-gradient(circle at calc(50% + ${mouseX.get()}px) calc(50% + ${mouseY.get()}px), ${alpha(color, 0.15)} 0%, transparent 80%)`,
                        opacity: isHovered ? 1 : 0,
                        transition: 'opacity 0.3s ease',
                    }}
                />

                <Typography
                    variant="h5"
                    sx={{
                        fontFamily: "'Inter', sans-serif",
                        fontWeight: 900,
                        color: color,
                        letterSpacing: '-0.02em',
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1.5,
                        zIndex: 1
                    }}
                >
                    {title}
                </Typography>

                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5, zIndex: 1 }}>
                    {items.map((item, idx) => (
                        <Box
                            key={idx}
                            sx={{
                                px: 1.5,
                                py: 0.5,
                                borderRadius: '8px',
                                background: alpha('#fff', 0.05),
                                border: '1px solid rgba(255,255,255,0.1)',
                                fontSize: '0.85rem',
                                color: alpha('#fff', 0.8),
                                fontFamily: "'JetBrains Mono', monospace",
                                transition: 'all 0.2s ease',
                                '&:hover': {
                                    background: alpha(color, 0.1),
                                    color: color,
                                    borderColor: alpha(color, 0.3),
                                }
                            }}
                        >
                            {item}
                        </Box>
                    ))}
                </Box>
            </Box>
        </motion.div>
    );
};

export default SkillCard;
