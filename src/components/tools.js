import React from 'react';
import { VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component'
import { OrbitingCirclesDemo } from './OrbitCircles';

import { motion } from 'framer-motion'

import { styles } from '../styles';

import 'react-vertical-timeline-component/style.min.css';

import { SectionWrapper } from '../hoc';
import { textVariant } from '../utils/motion';

function Tools() {
  return (
    <>
      <motion.div variants={textVariant()}>
            <p className={styles.sectionSubText}>
            What have I done so far</p>
            <h2 className={styles.sectionHeadText}
            >Overview</h2>
      </motion.div>

      <div className='p-1 '>
          <span className='flex gap-x-16'>
              <OrbitingCirclesDemo />
              
              <OrbitingCirclesDemo />
          </span>
          <div className=''><span><OrbitingCirclesDemo /></span></div>
          
      </div>
    </>
  )
}

export default SectionWrapper(Tools, "tools")