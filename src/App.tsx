import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import ScrollProgress from './components/ScrollProgress';
import { Box } from '@mui/material';

function App() {
  return (
    <Box>
      <CustomCursor />
      <ScrollProgress />
      <Navbar />
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
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
