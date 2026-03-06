import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
    Box,
    Container,
    Typography,
    Button,
    Stack,
    alpha
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { ArrowUpRight } from 'lucide-react';

const ProjectSection = styled(Box)(({ theme }) => ({
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(10, 0),
    position: 'relative',
    borderBottom: `1px solid ${alpha('#fff', 0.1)}`,
}));

const ImageContainer = styled(motion.div)({
    width: '100%',
    height: '70vh',
    overflow: 'hidden',
    position: 'relative',
    cursor: 'pointer',
    background: '#111', // Placeholder color if image fails
});

const ProjectImage = styled(motion.img)({
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    filter: 'grayscale(0.5)',
    transition: 'filter 0.5s ease',
    '&:hover': {
        filter: 'grayscale(0)',
    }
});

const Projects = () => {
    const projects = [
        {
            title: "Partner Inventory",
            role: "Backend Architecture @ Talenpace / Lenovo",
            description: "Developed a high-performance system for Lenovo to process and track 10k+ serials with real-time latency optimization and 80% accuracy improvement.",
            // Visual: Industrial warehouse with barcode scanning or logistics tracking software look
            image: "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&q=80&w=1200",
            tags: ["SQL SERVER", "ASP.NET", "REDIS", "C#"],
        },
        {
            title: "Cold-Chain IoT",
            role: "Real-time Pipelines @ Talentpace",
            description: "Microservices architecture for monitoring food safety metrics with ML-driven predictive excursion detection for specialized cold logistics.",
            // Visual: High-tech industrial freezer or IoT monitoring sensor look
            image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200",
            tags: ["SPRING BOOT", "KAFKA", "MQTT", "INFLUXDB"],
        },
        {
            title: "CDMS Platform",
            role: "Data Engineering @ Talenpace / Logistics",
            description: "Modernized data ingestion pipelines using Microsoft Fabric and Databricks for large-scale logistics tracking, improving processing speed by 60%.",
            // Visual: Abstract data visualization, data pipelines, or network nodes
            image: "https://images.unsplash.com/photo-1518186239751-dc66089856ad?auto=format&fit=crop&q=80&w=1200",
            tags: ["PYTHON", "DATABRICKS", "MICROSOFT FABRIC", "SSIS"],
        }
    ];

    return (
        <Box component="section" id="projects" sx={{ background: '#000' }}>
            <Container maxWidth="xl" sx={{ pt: 20, pb: 10 }}>
                <Typography
                    variant="h2"
                    sx={{
                        fontSize: { xs: '14vw', md: '10vw' },
                        mb: 10,
                        position: 'relative',
                        zIndex: 1,
                        fontWeight: 900,
                    }}
                >
                    SELECTED WORK.
                </Typography>
            </Container>

            {projects.map((project, index) => {
                const targetRef = useRef(null);
                const { scrollYProgress } = useScroll({
                    target: targetRef,
                    offset: ["start end", "end start"]
                });
                const y = useTransform(scrollYProgress, [0, 1], [-100, 100]);
                const textY = useTransform(scrollYProgress, [0, 1], [50, -50]);

                return (
                    <ProjectSection key={index} ref={targetRef}>
                        <Container maxWidth="xl">
                            <Box sx={{
                                display: 'grid',
                                gridTemplateColumns: { xs: '1fr', lg: '1.2fr 0.8fr' },
                                gap: { xs: 5, lg: 10 },
                                alignItems: 'center'
                            }}>
                                <ImageContainer>
                                    <ProjectImage
                                        src={project.image}
                                        alt={project.title}
                                        style={{ y }}
                                        onError={(e: any) => {
                                            e.target.src = "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200"; // Fallback
                                        }}
                                    />
                                </ImageContainer>

                                <Box sx={{ position: 'relative' }}>
                                    <motion.div style={{ y: textY }}>
                                        <Typography variant="overline" sx={{ color: '#20B2AA', mb: 2, display: 'block', letterSpacing: '0.2em', fontFamily: "'JetBrains Mono', monospace" }}>
                                            {project.role}
                                        </Typography>
                                        <Typography variant="h2" sx={{ mb: 4, fontSize: { xs: '2.5rem', md: '5rem' }, fontWeight: 900 }}>
                                            {project.title}
                                        </Typography>
                                        <Typography variant="body1" sx={{ color: 'rgba(255, 255, 255, 0.7)', mb: 6, fontSize: '1.2rem', maxWidth: 500, fontFamily: "'Inter', sans-serif" }}>
                                            {project.description}
                                        </Typography>

                                        <Stack direction="row" spacing={2} sx={{ mb: 8, flexWrap: 'wrap', gap: 1 }}>
                                            {project.tags.map(tag => (
                                                <Typography
                                                    key={tag}
                                                    sx={{
                                                        fontFamily: "'JetBrains Mono', monospace",
                                                        fontSize: '0.75rem',
                                                        border: '1px solid rgba(255, 255, 255, 0.2)',
                                                        px: 2,
                                                        py: 1,
                                                        color: 'rgba(255, 255, 255, 0.8)'
                                                    }}
                                                >
                                                    {tag}
                                                </Typography>
                                            ))}
                                        </Stack>

                                        <Button
                                            variant="outlined"
                                            endIcon={<ArrowUpRight />}
                                            sx={{
                                                fontSize: '1rem',
                                                borderColor: '#fff',
                                                color: '#fff',
                                                borderRadius: 0,
                                                px: 4,
                                                py: 1.5,
                                                '&:hover': {
                                                    borderColor: '#fff',
                                                    backgroundColor: 'rgba(255, 255, 255, 0.1)'
                                                }
                                            }}
                                        >
                                            View Details
                                        </Button>
                                    </motion.div>
                                </Box>
                            </Box>
                        </Container>
                    </ProjectSection>
                );
            })}
        </Box>
    );
};

export default Projects;
