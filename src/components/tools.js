import React from 'react';
import { VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component'
import { OrbitingCirclesLanguages, OrbitingCirclesMlFrameworks } from './OrbitCircles';

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
            Skills</p>
            <h2 className={styles.sectionHeadText}
            >Overview</h2>
      </motion.div>

      <div className='p-1 '>
          <span className='flex gap-x-16'>
              <OrbitingCirclesLanguages />
              
              <OrbitingCirclesMlFrameworks />
          </span>
          {/* <div className=''><span><OrbitingCirclesLanguages /></span></div> */}
          
      </div>
    </>
  )
}

export default SectionWrapper(Tools, "tools")