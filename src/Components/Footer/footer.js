import React from 'react';
import './footer.scss';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { 
    opacity: 0, 
  },
  visible: { 
    opacity: 1, 
    transition: { delay: 1.5, duration: 5 }
  }
};

const Footer = () => {
	return (
		<motion.div 
			className='footer'
			variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
		>
			<h2>Krzysztof Garbos 2020</h2>
		</motion.div>
	)
}

export default Footer