import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import ViewportContainer from './components/ViewportContainer';
import { Box } from '@mui/material';

const SECTION_NAMES = [
  'Home',
  'Skills',
  'Experience',
  'Projects',
  'Education',
  'Certifications',
  'Contact',
  'Footer'
];

function App() {
  return (
    <Box sx={{ bgcolor: '#000', color: '#fff', minHeight: '100vh', overflow: 'hidden' }}>
      <CustomCursor />

      {/* Viewport sections */}
      <ViewportContainer sectionNames={SECTION_NAMES}>
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Certifications />
        <Contact />
        <Footer />
      </ViewportContainer>

      {/* Dynamic Background Noise/Texture Overlay */}
      <Box sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 9999,
        opacity: 0.015,
        backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")',
        filter: 'contrast(150%) brightness(100%)'
      }} />
    </Box>
  );
}

export default App;
