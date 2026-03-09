import { Box, Typography, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Github, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { Section, SectionInner } from './common/Section';

const FooterLink = styled('a')({
    color: 'rgba(255, 255, 255, 0.5)',
    textDecoration: 'none',
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: '0.8rem',
    transition: 'color 0.3s ease',
    '&:hover': {
        color: '#fff',
    }
});

const SocialIcon = styled('a')({
    color: '#fff',
    opacity: 0.5,
    transition: 'all 0.3s ease',
    '&:hover': {
        opacity: 1,
        transform: 'translateY(-2px)'
    }
});

const Footer = () => {
    return (
        <Section id="footer">
            <SectionInner justifyContent="center" showNextButton={false}>
                <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', lg: '1fr 1fr' }, gap: 10, mb: 10 }}>
                    <Box>
                        <Typography
                            variant="h2"
                            sx={{
                                fontWeight: 900,
                                fontSize: '4rem',
                                color: '#fff',
                                mb: 4,
                                letterSpacing: '-0.05em'
                            }}
                        >
                            NIYAZ.
                        </Typography>
                        <Typography variant="body1" sx={{ color: 'rgba(255, 255, 255, 0.5)', maxWidth: 400, mb: 6, fontSize: '1.1rem' }}>
                            Mastering Backend Engineering and Database Optimization to build ultra-low-latency, production-ready systems.
                        </Typography>

                        <Stack direction="row" spacing={3}>
                            <SocialIcon href="https://github.com/niyaj-kumanali" target="_blank">
                                <Github size={24} />
                            </SocialIcon>
                            <SocialIcon href="https://linkedin.com/in/niyaj-kumanali" target="_blank">
                                <Linkedin size={24} />
                            </SocialIcon>
                        </Stack>
                    </Box>

                    <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 6 }}>
                        <Box>
                            <Typography variant="overline" sx={{ color: '#20B2AA', display: 'block', mb: 3, letterSpacing: '0.2em' }}>
                                CONTACT DETAILS
                            </Typography>
                            <Stack spacing={2}>
                                <Stack direction="row" spacing={2} alignItems="center">
                                    <Mail size={18} color="rgba(255,255,255,0.4)" />
                                    <Typography sx={{ color: '#fff', fontFamily: "'JetBrains Mono', monospace", fontSize: '0.9rem' }}>
                                        niyajkumanali@gmail.com
                                    </Typography>
                                </Stack>
                                <Stack direction="row" spacing={2} alignItems="center">
                                    <Phone size={18} color="rgba(255,255,255,0.4)" />
                                    <Typography sx={{ color: '#fff', fontFamily: "'JetBrains Mono', monospace", fontSize: '0.9rem' }}>
                                        +91 82170 97121
                                    </Typography>
                                </Stack>
                                <Stack direction="row" spacing={2} alignItems="center">
                                    <MapPin size={18} color="rgba(255,255,255,0.4)" />
                                    <Typography sx={{ color: '#fff', fontFamily: "'JetBrains Mono', monospace", fontSize: '0.9rem' }}>
                                        Bengaluru, India
                                    </Typography>
                                </Stack>
                            </Stack>
                        </Box>

                        <Box>
                            <Typography variant="overline" sx={{ color: '#20B2AA', display: 'block', mb: 3, letterSpacing: '0.2em' }}>
                                QUICK LINKS
                            </Typography>
                            <Stack spacing={1}>
                                <FooterLink href="#">Home</FooterLink>
                                <FooterLink href="#skills">Stack</FooterLink>
                                <FooterLink href="#projects">Work</FooterLink>
                                <FooterLink href="#experience">Log</FooterLink>
                            </Stack>
                        </Box>
                    </Box>
                </Box>

                <Box sx={{ pt: 2, borderTop: '1px solid rgba(255, 255, 255, 0.05)', display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'center', alignItems: 'center', gap: 4 }}>
                    <Typography variant="caption" sx={{ color: 'rgba(255, 255, 255, 0.3)', fontFamily: "'JetBrains Mono', monospace" }}>
                        &copy; {new Date().getFullYear()} NIYAZ. ALL RIGHTS RESERVED.
                    </Typography>
                </Box>
            </SectionInner>
        </Section>
    );
};

export default Footer;
