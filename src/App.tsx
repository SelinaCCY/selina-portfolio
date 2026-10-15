import './index.css';
import { Nav } from './components/Nav';
import { Hero } from './components/Hero';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { useScrolled } from './hooks/useScrolled';
import { SHOW_PROJECTS } from './config/features';

export default function App() {
  const scrolled = useScrolled();

  return (
    <>
      <Nav scrolled={scrolled} />
      <Hero />
      <Experience />
      {SHOW_PROJECTS && <Projects />}
      <About />
      <Contact />
      <Footer />
    </>
  );
}
