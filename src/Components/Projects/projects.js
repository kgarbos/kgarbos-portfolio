import React from 'react';
import './projects.scss';
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
    transition: { delay: 1.0, duration: 4 }
  }
};

const Projects = () => {

  return (
    <motion.div 
      className='projects'
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <h1>Projects</h1>
      <div className='line'></div>
      <div>
          <motion.button
            variants={buttonVariants}
            whileHover="hover"
          >
            Coming Soon!
          </motion.button>
      </div>
    </motion.div>
  )
}

export default Projects