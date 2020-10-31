import React from 'react';
import './contact.scss';
import linkedinicon from '../../Assets/linkedinport.svg';
import githubicon from '../../Assets/githubport.svg';
import resumeicon from '../../Assets/resumeport.svg';
import resume from '../../KGarbos-Resume.pdf';
import { motion } from 'framer-motion';

const buttonVariants = {
  hover: {
    scale: 1.1,
    textShadow: "0px 0px 8px rgb(83,255,69)",
    boxShadow: "0px 0px 8px rgb(83,255,69)",
    transition: {
      duration: 0.3,
      yoyo: 100
    }
  }
}

const containerVariants = {
  hidden: { 
    opacity: 0, 
  },
  visible: { 
    opacity: 1, 
    transition: { delay: 1.5, duration: 5 }
  }
};

const Contact = () => {
  return (
    <motion.div 
      className='contact'
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
        <h1>Contact</h1>
        <div className='line'></div>
        
        <motion.button
          variants={buttonVariants}
          whileHover="hover"
          title="Email"
        >
          <a href='mailto:kjgarbos@gmail.com'><h2>kjgarbos@gmail.com</h2></a>
        </motion.button>

        <section>

        <motion.button
          className='button-contact'
          variants={buttonVariants}
          whileHover="hover"
          title="Linkedin Profile"
        >
          <a href='https://www.linkedin.com/in/kgarbos/' target="_blank" rel='noopener noreferrer'>
              <img src={linkedinicon} alt='link to linkedin'/>
          </a>
        </motion.button>

        <motion.button
          className='button-contact'
          variants={buttonVariants}
          whileHover="hover"
          title="Github Profile"
        >
          <a href='https://github.com/kgarbos' target="_blank" rel='noopener noreferrer'> 
              <img src={githubicon} alt='link to github'/>
          </a>
        </motion.button>

        <motion.button
          className='button-contact'
          variants={buttonVariants}
          whileHover="hover"
          title="Resume"
        >
          <a href={resume} target="_blank" rel='noopener noreferrer'> 
              <img src={resumeicon} alt='link to resume'/>
          </a>
        </motion.button>

        </section>
    </motion.div>
  )
}

export default Contact