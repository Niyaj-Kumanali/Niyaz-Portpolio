import { Box, Typography, Stack, alpha } from '@mui/material';
import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import { Section, SectionInner } from './common/Section';

const Education = () => {
    const education = [
        {
            degree: "BE | COMPUTER SCIENCE",
            institution: "VSM's Somashekhar R. Kothiwale Institute of Technology",
            period: "JUN 2019 – MAY 2023",
            location: "Belagavi, India"
        }
    ];

    return (
        <Section id="education">
            <SectionInner justifyContent="center">
                <Box sx={{ maxWidth: '800px' }}>
                    <Stack direction="row" spacing={3} alignItems="center" sx={{ mb: 10 }}>
                        <SectionHeading title="EDUCATION." sx={{ mb: 0 }} />
                    </Stack>

                    {education.map((edu, index) => (
                        <Box
                            key={index}
                            component={motion.div}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            whileHover={{ x: 5 }}
                            sx={{
                                borderLeft: '3px solid #20B2AA',
                                pl: 4,
                                mb: 8,
                                position: 'relative',
                                '&::before': {
                                    content: '""',
                                    position: 'absolute',
                                    left: -3,
                                    top: 0,
                                    bottom: 0,
                                    width: '3px',
                                    background: 'linear-gradient(to bottom, #20B2AA, transparent)',
                                    boxShadow: '0 0 15px rgba(32, 178, 170, 0.3)'
                                }
                            }}
                        >
                            <Typography variant="h3" sx={{ fontWeight: 900, mb: 1, fontFamily: "'Inter', sans-serif", letterSpacing: '-0.02em', fontSize: { xs: '2rem', md: '3rem' } }}>
                                {edu.degree}
                            </Typography>
                            <Typography variant="h5" sx={{ color: alpha('#fff', 0.6), mb: 3, fontWeight: 500 }}>
                                {edu.institution}
                            </Typography>
                            <Typography sx={{
                                fontFamily: "'JetBrains Mono', monospace",
                                color: '#20B2AA',
                                fontSize: '0.9rem',
                                letterSpacing: '0.1em',
                                backgroundColor: alpha('#20B2AA', 0.05),
                                display: 'inline-block',
                                px: 2,
                                py: 0.8
                            }}>
                                {edu.period} // {edu.location}
                            </Typography>
                        </Box>
                    ))}
                </Box>
            </SectionInner>
        </Section>
    );
};

export default Education;
