import React from 'react';
import './App.scss';
import Header from './Components/Header/header';
import About from './Components/About/about';
import Projects from './Components/Projects/projects';
import Skills from './Components/Skills/skills';
import Contact from './Components/Contact/contact';
import Footer from './Components/Footer/footer';
import {Element} from 'react-scroll';

const App = () => {
  return (
    <div className='app'>
      <main>
        <Header />

        <Element name={`about`}>
          <About />
        </Element>

        <Element name={`projects`}>
          <Projects />
        </Element>

        <Element name={`skills`}>
          <Skills />
        </Element>

        <Element name={`contact`}>
          <Contact />
        </Element>
      </main>
      <Footer />
    </div>
  )
}
 
export default App