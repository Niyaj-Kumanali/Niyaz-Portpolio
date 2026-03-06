import { Box, Container, Typography, Stack } from '@mui/material';

const experienceData = [
    {
        role: "Software Engineer",
        company: "Talentpace Pvt Ltd",
        period: "2023 – NOW",
        highlights: [
            "Partner inventory tracking for Lenovo (80% accuracy increase).",
            "Pipeline optimization for 10k+ serial tracking (60% speed gain).",
            "IoT cold-chain monitoring system (30% efficiency increase)."
        ]
    }
];

const Experience = () => {
    return (
        <Box component="section" id="experience" sx={{ py: 30, background: '#000' }}>
            <Container maxWidth="xl">
                <Box sx={{ mb: 20 }}>
                    <Typography
                        variant="h2"
                        sx={{
                            fontSize: { xs: '12vw', md: '10vw' },
                            textAlign: 'right',
                        }}
                    >
                        JOURNEY.
                    </Typography>
                </Box>

                <Box sx={{ borderTop: '2px solid #fff' }}>
                    {experienceData.map((exp, index) => (
                        <Box
                            key={index}
                            sx={{
                                py: 10,
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
                                <Typography variant="h2" sx={{ fontSize: '4rem', mb: 2 }}>
                                    {exp.company}
                                </Typography>
                                <Typography variant="h4" sx={{ mb: 6, color: 'text.secondary' }}>
                                    {exp.role}
                                </Typography>

                                <Stack spacing={4}>
                                    {exp.highlights.map((h, i) => (
                                        <Typography
                                            key={i}
                                            variant="body1"
                                            sx={{
                                                fontSize: '1.5rem',
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
            </Container>
        </Box>
    );
};

export default Experience;
