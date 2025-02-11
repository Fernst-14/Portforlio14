
import styles from './App.module.css';
import { About } from './components/About/About';
import { Hero } from './components/Hero/Hero';
import Navbav from './components/Navbar/Navbav';
import {Experience} from './components/Experience/Experience';
import { Certificate } from './components/certificate/certificate';
import {Project} from './components/Project/Projects';
import { Contact } from './components/Contact/Contact';

function App() {
  
  return (
    
    <div className={styles.App}>
      <Navbav /> 
      <Hero />
      <About />
      <Experience />
      <Certificate />
      <Project />
      <Contact />
    </div>
  )
}

export default App
