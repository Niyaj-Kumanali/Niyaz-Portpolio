import { Box, Container, Typography } from '@mui/material';

const skillsData = [
    {
        category: "Languages",
        items: ["Java", "C#", "TypeScript", "JavaScript", "Python"]
    },
    {
        category: "Backend & Frameworks",
        items: ["Spring Boot", "Spring Data", "Spring Cloud", "Spring Security", "Hibernate", "JDBC", "ASP.NET Web API"]
    },
    {
        category: "Databases",
        items: ["SQL Server", "MySQL", "PostgreSQL", "Oracle SQL", "InfluxDB", "Redis", "Microsoft Fabric"]
    },
    {
        category: "Messaging & Streaming",
        items: ["Apache Kafka", "MQTT", "RabbitMQ"]
    },
    {
        category: "Cloud & DevOps",
        items: ["AWS", "Jenkins (CI/CD)", "Docker", "Git"]
    },
    {
        category: "Analytical Tools",
        items: ["Databricks", "Apache Superset", "Grafana"]
    },
    {
        category: "Frontend & UI",
        items: ["HTML", "CSS/SCSS", "React"]
    }
];

const Skills = () => {
    return (
        <Box component="section" id="skills" sx={{ py: 30, background: '#000', borderBottom: '1px solid #222' }}>
            <Container maxWidth="xl">
                <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', lg: '0.8fr 1.2fr' }, gap: { xs: 5, md: 10 } }}>
                    <Box>
                        <Typography
                            variant="h2"
                            sx={{
                                fontSize: { xs: '12vw', md: '8vw' },
                                mb: 4,
                                position: { lg: 'sticky' },
                                top: 100,
                                fontWeight: 900,
                            }}
                        >
                            TECH STACK.
                        </Typography>
                    </Box>

                    <Box sx={{ borderTop: '1px solid #fff' }}>
                        {skillsData.map((skill, index) => (
                            <Box
                                key={index}
                                sx={{
                                    py: 8,
                                    borderBottom: '1px solid rgba(255,255,255,0.1)',
                                    display: 'flex',
                                    flexDirection: { xs: 'column', md: 'row' },
                                    gap: { xs: 4, md: 10 },
                                    alignItems: 'flex-start'
                                }}
                            >
                                <Typography
                                    variant="h4"
                                    sx={{
                                        minWidth: 300,
                                        fontSize: '1.8rem',
                                        fontFamily: "'Inter', sans-serif",
                                        fontWeight: 800,
                                        color: '#20B2AA' // Accent for categories
                                    }}
                                >
                                    {skill.category.toUpperCase()}
                                </Typography>
                                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
                                    {skill.items.map((item, i) => (
                                        <Typography
                                            key={i}
                                            sx={{
                                                fontFamily: "'JetBrains Mono', monospace",
                                                fontSize: '1.1rem',
                                                color: 'text.secondary',
                                                transition: 'color 0.3s ease',
                                                '&:hover': {
                                                    color: '#fff',
                                                }
                                            }}
                                        >
                                            {item.toUpperCase()} /
                                        </Typography>
                                    ))}
                                </Box>
                            </Box>
                        ))}
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default Skills;
