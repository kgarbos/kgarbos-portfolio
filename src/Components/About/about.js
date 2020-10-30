import React from 'react';
import './about.scss';
import portrait from '../../Assets/mountain-headshot.jpg';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { 
    opacity: 0, 
  },
  visible: { 
    opacity: 1, 
    transition: { delay: 0.5, duration: 3 }
  }
};

const About = () => {
  return (
    <motion.div 
      className='about'
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <h1>Hello!</h1>
      <div className='line'></div>
      <section>
        <img src={portrait} alt='head shot' />
        <p>I'm a software developer with a current focus on Front End Technologies with React and JavaScript. I am currently learning NodeJS, MySQL and MongoDB to work towards a fullstack skillset. In my spare time I enjoy running, playing tennis, hiking, and learning about geography and history. I love programming because it allows you to bring new ideas to fruition and having the mindset of always learning and growing in your life.</p>
      </section>
    </motion.div>
  )
}

export default About