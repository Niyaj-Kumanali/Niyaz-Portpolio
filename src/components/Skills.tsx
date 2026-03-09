import { Box } from '@mui/material';
import SectionHeading from './SectionHeading';
import SkillCard from './SkillCard';
import { Section, SectionInner } from './common/Section';

const skillsData = [
    {
        title: "BACKEND & FRAMEWORKS",
        color: "#20B2AA",
        items: ["Spring Boot", "Spring Data", "Spring Cloud", "Spring Security", "Hibernate", "JDBC", "ASP.NET Web API"],
        gridColumn: { xs: "span 1", md: "span 2" }
    },
    {
        title: "LANGUAGES",
        color: "#9370DB",
        items: ["Java", "C#", "TypeScript", "JavaScript", "Python"],
        gridColumn: "span 1"
    },
    {
        title: "SPECIALIZATIONS",
        color: "#FF7F50",
        items: ["Microservices", "Real-time & Event-Driven Systems", "ETL & Data Pipelines", "Stream Processing", "Database Optimization", "API Design", "Caching"],
        gridColumn: { xs: "span 1", md: "span 1" }
    },
    {
        title: "DATABASES",
        color: "#6495ED",
        items: ["Microsoft SQL Server", "MySQL", "PostgreSQL", "Oracle SQL", "InfluxDB", "Redis"],
        gridColumn: "span 1"
    },
    {
        title: "MESSAGING & TOOLS",
        color: "#FF69B4",
        items: ["Apache Kafka", "MQTT", "RabbitMQ", "Databricks", "Apache Superset", "Grafana", "Microsoft Fabric"],
        gridColumn: { xs: "span 1", md: "span 2" }
    },
    {
        title: "CLOUD & DEVOPS",
        color: "#F0E68C",
        items: ["AWS", "Jenkins (CI/CD)", "Docker", "Git"],
        gridColumn: "span 1"
    },
    {
        title: "FRONTEND & UI",
        color: "#00CED1",
        items: ["HTML", "CSS/SCSS", "React"],
        gridColumn: "span 1"
    }
];

const Skills = () => {
    return (
        <Section id="skills">
            <SectionInner>
                <Box sx={{ display: 'flex', justifyContent: 'flex-start', width: '100%' }}>
                    <SectionHeading title="TECH STACK." />
                </Box>

                <Box
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: {
                            xs: '1fr',
                            md: 'repeat(4, 1fr)'
                        },
                        gridAutoRows: 'auto',
                        gridAutoFlow: 'dense',
                        gap: 2.5,
                        mt: 2
                    }}
                >
                    {skillsData.map((skill, index) => (
                        <SkillCard
                            key={index}
                            title={skill.title}
                            items={skill.items}
                            color={skill.color}
                            gridColumn={skill.gridColumn as any}
                        />
                    ))}
                </Box>
            </SectionInner>
        </Section>
    );
};

export default Skills;
