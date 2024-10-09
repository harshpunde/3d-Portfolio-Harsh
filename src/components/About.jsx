import React from 'react'
import { Tilt } from 'react-tilt'
import {motion} from 'framer-motion'

import {styles} from '../styles'
import {services} from '../constants'
import {fadeIn, textVariant} from '../utils/motion' 
import { p } from 'framer-motion/client'
import { SectionWrapper } from '../hoc'

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div 
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className='w-full p-[1px] rounded-[20px] shadow-card'
        // Updated border color to orange and blue gradient
        style={{ background: 'linear-gradient(135deg,  #ff6a4c, blue)' }}
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        >
          <img 
            src={icon} 
            alt={title}
            className='w-16 h-16 object-contain'
          />
          <h3 className='text-white text-[20px] font-bold text-center'>
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}
        >Introduction</p>
        <h2  className={styles.sectionHeadText }  
        >Overview.</h2>

      </motion.div>

      <motion.p
        variants={fadeIn("","",0.1,1)}
        className='mt-4 text-secondary text-[17px]
        max-w-3xl leading-[30px]'
      >
      We are a team of skilled software developers experienced in TypeScript and JavaScript, with a strong command of frameworks like React, Node.js, and Three.js. Our ability to learn quickly allows us to adapt and innovate as we collaborate closely with clients. We focus on creating efficient, scalable, and user-friendly solutions that tackle real-world challenges. Together, we can bring your ideas to life!

      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index)=> (
          <ServiceCard key={service.title} index=
          {index} {...service} />
        ))}

      </div >


    </>
  )
}

export default SectionWrapper (About, "about")