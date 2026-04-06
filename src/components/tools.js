import React from 'react';
import { motion } from 'framer-motion';
import { SectionWrapper } from '../hoc';

// Import your technology icons
// You can get these from your existing project or add new ones
// Example imports (adjust paths to match your project):
// import python from '../assets/tech/python.png';
// import javascript from '../assets/tech/javascript.png';
// import tensorflow from '../assets/tech/tensorflow.png';

// Define your skills with icons
// For now using placeholder paths - update these with your actual icon paths
const skillsData = {
  languages: {
    title: "Languages",
    items: [
      {
  name: "Python",
  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
},
{
  name: "JavaScript",
  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
},
{
  name: "TypeScript",
  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
},
{
  name: "C++",
  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg"
},
{
  name: "Java",
  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
}
    ]
  },
  mlFrameworks: {
    title: "ML & Data Science",
    items: [
      {
  name: "TensorFlow",
  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg"
},
{
  name: "PyTorch",
  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg"
},
{
  name: "Pandas",
  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg"
},
{
  name: "NumPy",
  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg"
}
    ]
  },
  webDev: {
    title: "Web Development",
    items: [
      {
  name: "React",
  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
},
{
  name: "Node.js",
  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
},
{
  name: "Next.js",
  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
},
{
  name: "MongoDB",
  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
}
    ]
  },
  tools: {
    title: "Tools & Platforms",
    items: [
      {
  name: "Git",
  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
},
{
  name: "Docker",
  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"
},
{
  name: "Linux",
  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg"
},
{
  name: "AWS",
  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg"
}
    ]
  }
};

const SkillCategory = ({ category, data, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="skill-category"
    >
      <h3 className="category-title">{data.title}</h3>
      <div className="skills-grid">
        {data.items.map((skill, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.1 + idx * 0.05 }}
            whileHover={{ y: -4 }}
            className="skill-item"
          >
            <div className="skill-icon">
              {/* Replace with actual imported images */}
              <img 
                src={skill.icon} 
                alt={skill.name}
                onError={(e) => {
                  // Fallback if image doesn't exist
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="icon-fallback" style={{ display: 'none' }}>
                {skill.name.charAt(0)}
              </div>
            </div>
            <span className="skill-name">{skill.name}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

function Tools() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="section-header"
      >
        <p className="section-label">Technical Arsenal</p>
        <h2 className="section-title">Skills & Technologies</h2>
      </motion.div>

      <div className="skills-container">
        {Object.entries(skillsData).map(([key, data], index) => (
          <SkillCategory 
            key={key} 
            category={key} 
            data={data} 
            index={index}
          />
        ))}
      </div>

      <style jsx>{`
        .section-header {
          margin-bottom: 4rem;
        }

        .section-label {
          font-size: 0.875rem;
          font-weight: 600;
          color: #666666;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: 1rem;
        }

        .section-title {
          font-size: clamp(2rem, 5vw, 3rem);
          font-weight: 700;
          color: #0A0A0A;
        }

        .skills-container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 2.5rem;
        }

        .skill-category {
          background: #FAFAFA;
          border-radius: 16px;
          padding: 2.5rem 2rem;
          border: 1px solid #E5E5E5;
          transition: all 0.3s ease;
        }

        .skill-category:hover {
          border-color: #D0D0D0;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06);
        }

        .category-title {
          font-size: 1.125rem;
          font-weight: 600;
          color: #0A0A0A;
          margin-bottom: 1.75rem;
          padding-bottom: 0.75rem;
          border-bottom: 2px solid #E5E5E5;
        }

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(90px, 1fr));
          gap: 1.25rem;
        }

        .skill-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.75rem;
          padding: 1.25rem 0.75rem;
          background: #FFFFFF;
          border: 1px solid #E5E5E5;
          border-radius: 12px;
          transition: all 0.3s ease;
          cursor: default;
        }

        .skill-item:hover {
          border-color: #0A0A0A;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
        }

        .skill-icon {
          width: 48px;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }

        .skill-icon img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }

        .icon-fallback {
          width: 100%;
          height: 100%;
          display: none;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #F5F5F5, #E5E5E5);
          border-radius: 8px;
          font-size: 1.5rem;
          font-weight: 700;
          color: #0A0A0A;
        }

        .skill-name {
          font-size: 0.8125rem;
          font-weight: 500;
          color: #0A0A0A;
          text-align: center;
          line-height: 1.3;
        }

        @media (max-width: 768px) {
          .section-header {
            margin-bottom: 3rem;
          }

          .skills-container {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .skill-category {
            padding: 2rem 1.5rem;
          }

          .category-title {
            font-size: 1rem;
          }

          .skills-grid {
            grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
            gap: 1rem;
          }

          .skill-item {
            padding: 1rem 0.5rem;
          }

          .skill-icon {
            width: 40px;
            height: 40px;
          }

          .skill-name {
            font-size: 0.75rem;
          }
        }
      `}</style>
    </>
  );
}

export default SectionWrapper(Tools, "tools");