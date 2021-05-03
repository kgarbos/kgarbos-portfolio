import React from 'react';
import './projects.scss';
import { motion } from 'framer-motion';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import project1 from '../../Assets/photo-1548092372-0d1bd40894a3.jfif';
import project2 from '../../Assets/200310_vod_orig_covid_body_hpMain_16x9_992.jpg';

const content = [
  { title: 'MERN Email Authentication', description: 'Allows users to login, register and reset their password via email', image: project1, href:"https://mern-auth-email.herokuapp.com/" },
  { title: 'Covid-19 Tracker', description: 'Tracks daily/total cases of Covid-19 in Canada using ChartJS', image: project2, href:"https://github.com/kgarbos/covid19-app" }
];

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
          className="repoButton"
        >
          <a href='https://github.com/kgarbos?tab=repositories' target="_blank" rel='noopener noreferrer'> 
            <span className="spanText">See More + Code!</span>
          </a>
        </motion.button>
        <Slider autoplay={3000}>
          {content.map((item, index) => (
            <div
              key={index}
              style={{ background: `url('${item.image}') no-repeat center center` }}
            >
              <div className="center">
                <h1>{item.title}</h1>
                <p className="description">{item.description}</p>
                <motion.button
                  variants={buttonVariants}
                  whileHover="hover"
                >
                  <a href={item.href} target="_blank" rel='noopener noreferrer'> 
                    <span className="spanText">See App!</span>
                  </a>
                </motion.button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </motion.div>
  )
}

export default Projects