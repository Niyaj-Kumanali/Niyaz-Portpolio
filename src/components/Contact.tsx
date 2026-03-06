import { motion } from 'framer-motion';
import {
    Box,
    Container,
    Typography,
    TextField,
    Button,
    Stack,
    alpha
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { ArrowUpRight, Github, Linkedin, Twitter } from 'lucide-react';
import Magnetic from './Magnetic';

const BrutalistInput = styled(TextField)({
    '& .MuiOutlinedInput-root': {
        borderRadius: 0,
        backgroundColor: 'transparent',
        border: '1px solid #333',
        '& fieldset': {
            border: 'none',
        },
        '&:hover': {
            backgroundColor: '#0a0a0a',
        },
        '&.Mui-focused': {
            border: '1px solid #fff',
        }
    },
    '& .MuiInputLabel-root': {
        fontFamily: "'JetBrains Mono', monospace",
        letterSpacing: '0.1em',
        color: 'rgba(255, 255, 255, 0.5)',
    },
    '& .MuiInputBase-input': {
        color: '#fff',
        fontFamily: "'Inter', sans-serif",
    }
});

const SocialButton = styled(motion.a)(({ theme }) => ({
    flex: 1,
    height: 120,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: theme.spacing(2),
    border: '1px solid #222',
    textDecoration: 'none',
    color: '#fff',
    transition: 'all 0.4s ease',
    '&:hover': {
        backgroundColor: '#fff',
        color: '#000',
        borderColor: '#fff',
    }
}));

const Contact = () => {
    return (
        <Box component="section" id="contact" sx={{ py: 30, background: '#000' }}>
            <Container maxWidth="xl">
                <Box sx={{ mb: 20 }}>
                    <Typography
                        variant="h2"
                        sx={{
                            fontSize: { xs: '15vw', md: '12vw' },
                            lineHeight: 0.8,
                            fontWeight: 900,
                            fontFamily: "'Inter', sans-serif",
                            color: '#fff'
                        }}
                    >
                        LET'S <br />
                        TALK.
                    </Typography>
                </Box>

                <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', lg: '1fr 1fr' }, gap: 15 }}>
                    <Box>
                        <Typography variant="h4" sx={{ mb: 6, fontWeight: 300, color: 'rgba(255, 255, 255, 0.6)', fontFamily: "'Inter', sans-serif" }}>
                            Have a project in mind? Or just want to discuss the future of backend architecture?
                            My inbox is always open for bold ideas.
                        </Typography>

                        <Stack direction="row" spacing={0} sx={{ width: '100%', mb: 10 }}>
                            <SocialButton href="https://github.com/niyaj-kumanali" target="_blank" whileHover={{ scale: 0.98 }}>
                                <Github size={32} />
                                <Typography variant="caption" sx={{ fontFamily: "'JetBrains Mono', monospace" }}>GITHUB</Typography>
                            </SocialButton>
                            <SocialButton href="https://linkedin.com/in/niyaj-kumanali" target="_blank" whileHover={{ scale: 0.98 }}>
                                <Linkedin size={32} />
                                <Typography variant="caption" sx={{ fontFamily: "'JetBrains Mono', monospace" }}>LINKEDIN</Typography>
                            </SocialButton>
                            <SocialButton href="#" whileHover={{ scale: 0.98 }}>
                                <Twitter size={32} />
                                <Typography variant="caption" sx={{ fontFamily: "'JetBrains Mono', monospace" }}>TWITTER</Typography>
                            </SocialButton>
                        </Stack>

                        <Box>
                            <Typography variant="overline" sx={{ color: '#20B2AA', display: 'block', mb: 2, letterSpacing: '0.2em', fontFamily: "'JetBrains Mono', monospace" }}>
                                Direct Contact
                            </Typography>
                            <Typography variant="h3" sx={{ fontWeight: 900, fontSize: { xs: '1.5rem', md: '2.5rem' }, color: '#fff' }}>
                                niyajkumanali@gmail.com
                            </Typography>
                        </Box>
                    </Box>

                    <Box>
                        <Stack spacing={4}>
                            <BrutalistInput fullWidth label="NAME" variant="outlined" />
                            <BrutalistInput fullWidth label="EMAIL" variant="outlined" />
                            <BrutalistInput fullWidth label="SUBJECT" variant="outlined" />
                            <BrutalistInput fullWidth label="MESSAGE" multiline rows={6} variant="outlined" />

                            <Magnetic amount={0.1}>
                                <Button
                                    fullWidth
                                    variant="contained"
                                    endIcon={<ArrowUpRight />}
                                    sx={{
                                        py: 3,
                                        fontSize: '1.5rem',
                                        fontWeight: 900,
                                        backgroundColor: '#fff',
                                        color: '#000',
                                        borderRadius: 0,
                                        '&:hover': {
                                            backgroundColor: alpha('#fff', 0.9),
                                        }
                                    }}
                                >
                                    SEND MESSAGE
                                </Button>
                            </Magnetic>
                        </Stack>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default Contact;
