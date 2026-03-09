import { Box, Typography, Stack } from '@mui/material';
import SectionHeading from './SectionHeading';
import { Section, SectionInner } from './common/Section';

const experienceData = [
    {
        role: "Software Engineer",
        company: "Talentpace Pvt Ltd",
        period: "NOV 2023 – PRESENT",
        highlights: [
            "Reduced inventory discrepancies by ~80% for Lenovo India by deploying automated partner serial-level validation workflows.",
            "Optimized CDMS data pipelines for 10k+ devices, increasing processing throughput by ~60% across the global sales lifecycle.",
            "Architected a real-time IoT cold-chain monitoring ecosystem, integrating ML-driven alerts to boost operational efficiency by ~30%."
        ]
    }
];

const Experience = () => {
    return (
        <Section id="experience">
            <SectionInner>
                <Box sx={{ display: 'flex', justifyContent: 'flex-start', width: '100%' }}>
                    <SectionHeading title="JOURNEY." />
                </Box>

                <Box>
                    {experienceData.map((exp, index) => (
                        <Box
                            key={index}
                            sx={{
                                display: 'grid',
                                gridTemplateColumns: { xs: '1fr', md: '1fr 2fr' },
                                gap: 6
                            }}
                        >
                            <Typography
                                sx={{
                                    fontFamily: "'JetBrains Mono', monospace",
                                    fontSize: '1.2rem',
                                    color: '#fff'
                                }}
                            >
                                {exp.period}
                            </Typography>

                            <Box>
                                <Typography variant="h2" sx={{ fontSize: '3rem', mb: 2 }}>
                                    {exp.company}
                                </Typography>
                                <Typography variant="h2" sx={{ fontSize: '1.5rem', mb: 6, color: 'text.secondary' }}>
                                    {exp.role}
                                </Typography>

                                <Stack spacing={4}>
                                    {exp.highlights.map((h, i) => (
                                        <Typography
                                            key={i}
                                            variant="body1"
                                            sx={{
                                                fontSize: '1.2rem',
                                                lineHeight: 1.4,
                                                borderLeft: '4px solid #fff',
                                                pl: 4
                                            }}
                                        >
                                            {h}
                                        </Typography>
                                    ))}
                                </Stack>
                            </Box>
                        </Box>
                    ))}
                </Box>
            </SectionInner>
        </Section>
    );
};

export default Experience;
