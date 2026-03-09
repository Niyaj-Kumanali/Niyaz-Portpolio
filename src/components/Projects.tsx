import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
    Box,
    Typography,
    Stack,
    alpha
} from '@mui/material';
import { styled } from '@mui/material/styles';
import SectionHeading from './SectionHeading';
import { Section, SectionInner } from './common/Section';

const ImageContainer = styled(motion.div)({
    width: '100%',
    height: '65vh',
    overflow: 'hidden',
    position: 'relative',
    cursor: 'pointer',
    background: '#111',
});

const ProjectImage = styled(motion.img)({
    width: '100%',
    height: '140%', // Excess height for parallax
    objectFit: 'cover',
    position: 'absolute',
    top: '-10%', // Offset to center the excess
    filter: 'grayscale(0.5)',
    transition: 'filter 0.5s ease',
    '&:hover': {
        filter: 'grayscale(0)',
    }
});

const Projects = () => {
    const projects = [
        {
            title: "Partner Inventory Management",
            role: "Real-time Architecture @ Lenovo India",
            description: "Centralized real-time validation for 10k+ serials across 200+ partners, slashing manual reconciliation by ~70% with <15s latency.",
            image: "/src/assets/projects/inventory_management_dashboard_1773048881187.png",
            tags: ["SQL SERVER", "ASP.NET", "REACT", "C#"],
            specs: { label: "Outcome", value: "~80% Accuracy Increase" }
        },
        {
            title: "CDMS Platform",
            role: "Data Workflows @ Lenovo India",
            description: "Modernized data workflows for 10k+ devices across 5+ lifecycle stages, boosting throughput by ~60% and ensuring global data integrity.",
            image: "/src/assets/projects/data_workflow_platform_1773048901041.png",
            tags: ["SQL SERVER", "ASP.NET", "SSIS"],
            specs: { label: "Impact", value: "~60% Throughput Gain" }
        },
        {
            title: "IoT Cold-Chain Monitoring",
            role: "Microservices @ UrjaLinks",
            description: "Scaled microservices for 100+ IoT devices, preventing temperature excursions by ~85% through ML-driven predictive monitoring.",
            image: "/src/assets/projects/iot_coldchain_monitor_1773048948862.png",
            tags: ["SPRING BOOT", "KAFKA", "MQTT", "AWS", "INFLUXDB", "POSTGRESQL"],
            specs: { label: "Alerting", value: "~85% Excursion Reduction" }
        }
    ];

    return (
        <Section id="projects">
            <SectionInner>
                <Box>
                    <SectionHeading title="SELECTED WORK." />
                </Box>

                <Stack spacing={20} sx={{ mt: 10 }}>
                    {projects.map((project, index) => {
                        const targetRef = useRef(null);
                        const { scrollYProgress } = useScroll({
                            target: targetRef,
                            offset: ["start end", "end start"]
                        });
                        const y = useTransform(scrollYProgress, [0, 1], [-100, 100]);
                        const textY = useTransform(scrollYProgress, [0, 1], [50, -50]);

                        return (
                            <Box
                                key={index}
                                ref={targetRef}
                                sx={{
                                    display: 'grid',
                                    gridTemplateColumns: { xs: '1fr', lg: '1fr 1fr' },
                                    gap: { xs: 4, lg: 10 },
                                    alignItems: 'center',
                                    minHeight: '70vh'
                                }}
                            >
                                <ImageContainer>
                                    <ProjectImage
                                        src={project.image}
                                        alt={project.title}
                                        style={{ y }}
                                        onError={(e: any) => {
                                            e.target.src = "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200";
                                        }}
                                    />
                                </ImageContainer>

                                <Box sx={{
                                    position: 'relative',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    height: '100%'
                                }}>
                                    <motion.div style={{ y: textY }}>
                                        <Typography variant="overline" sx={{ color: '#20B2AA', mb: 1, display: 'block', letterSpacing: '0.2em', fontFamily: "'JetBrains Mono', monospace" }}>
                                            {project.role}
                                        </Typography>
                                        <Typography variant="h2" sx={{ mb: 2, fontSize: { xs: '2rem', md: '3rem' }, fontWeight: 900, lineHeight: 1.1 }}>
                                            {project.title}
                                        </Typography>
                                        <Typography variant="body1" sx={{ color: 'rgba(255, 255, 255, 0.7)', mb: 4, fontSize: '1.1rem', fontFamily: "'Inter', sans-serif", maxWidth: '90%' }}>
                                            {project.description}
                                        </Typography>

                                        <Stack direction="row" spacing={2} sx={{ mb: 5, flexWrap: 'wrap', gap: 1 }}>
                                            {project.tags.map(tag => (
                                                <Typography
                                                    key={tag}
                                                    sx={{
                                                        fontFamily: "'JetBrains Mono', monospace",
                                                        fontSize: '0.7rem',
                                                        border: '1px solid rgba(255, 255, 255, 0.1)',
                                                        px: 1.5,
                                                        py: 0.5,
                                                        color: 'rgba(255, 255, 255, 0.6)',
                                                        textTransform: 'uppercase'
                                                    }}
                                                >
                                                    {tag}
                                                </Typography>
                                            ))}
                                        </Stack>

                                        {project.specs && (
                                            <Box sx={{
                                                p: 2,
                                                background: alpha('#20B2AA', 0.05),
                                                borderLeft: '4px solid #20B2AA',
                                                display: 'flex',
                                                flexDirection: 'column',
                                                gap: 0.5,
                                                maxWidth: 'fit-content'
                                            }}>
                                                <Typography variant="overline" sx={{ color: '#20B2AA', fontSize: '0.65rem', letterSpacing: '0.1em' }}>
                                                    {project.specs.label}
                                                </Typography>
                                                <Typography variant="h4" sx={{ color: '#fff', fontWeight: 900, fontSize: { xs: '1.2rem', md: '1.6rem' } }}>
                                                    {project.specs.value}
                                                </Typography>
                                            </Box>
                                        )}
                                    </motion.div>
                                </Box>
                            </Box>
                        );
                    })}
                </Stack>
            </SectionInner>
        </Section>
    );
};

export default Projects;
