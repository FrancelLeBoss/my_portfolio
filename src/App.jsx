import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Project from './components/Project';
import Contact from './components/Contact';

function App() {
  return (
    <div className='font-sans bg-backgroundLight dark:bg-backgroundDark text-secondary dark:text-primary'>
      <Navbar />
      <div className="scroll-smooth">
        <Hero />
        <About />
        <Project />
        <Contact />
      </div>
    </div>
  );
}

export default App;