import React from 'react';
import './skills.scss';
import css from '../../Assets/css-3.png';
import html from '../../Assets/html5.png';
import mysql from '../../Assets/mysql.png';
import javascript from '../../Assets/javascript.png';
import node from '../../Assets/node.png';
import react from '../../Assets/React-icon.png';
import java from '../../Assets/java.png';
import springboot from '../../Assets/springboot.png';
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

const Skills = () => {
  return (
        <motion.div 
            className='skills'
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
          <h1>Skills</h1>
          <div className='line'></div>
          <section>
            <div>
                <img src={html} alt='HTML5'/>
                <p>HTML5</p>
            </div>
            <div>
                <img src={css} alt='CSS'/>
                <p>CSS3</p>
            </div>
            <div>
                <img src={javascript} alt='JavaScript'/>
                <p>Javascript</p>
            </div>
            <div>
                <img src={react} alt='React Framework'/>
                <p>React</p>
            </div>
            <div>
                <img src={node} alt='Node.js'/>
                <p>Node.js</p>
            </div>
            <div>
                <img src={java} alt='Java'/>
            </div>
            <div>
                <img src={mysql} alt='MySQL'/>
                <p>MySQL</p>
            </div>
            <div>
                <img src={springboot} alt='Spring Boot'/>
                <p>Spring Boot</p>
            </div>
          </section>
        </motion.div>
    )
}

export default Skills
