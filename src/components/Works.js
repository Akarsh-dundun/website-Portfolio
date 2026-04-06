import React from 'react';
import { motion } from 'framer-motion';
import { SectionWrapper } from '../hoc';
import { projects } from '../constants';
import { ExternalLink, Github } from 'lucide-react';
import { github } from '../assets';

const ProjectCard = ({ project, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="project-card"
        >
            {/* Project Image */}
            <div className="project-image-wrapper">
                <img 
                    src={project.image}
                    alt={project.name}
                    className='project-image'
                />
                <div className="project-overlay">
                    <div className="project-links">
                        {project.source_code_link && (
                            <a
                                href={project.source_code_link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="project-link"
                                aria-label="View source code"
                            >
                                {/* <Github size={20} /> */}
                                <img src={github} alt="GitHub" width={20} height={20} />

                            </a>
                        )}
                        {project.live_link && (
                            <a
                                href={project.live_link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="project-link"
                                aria-label="View live demo"
                            >
                                <ExternalLink size={20} />
                            </a>
                        )}
                    </div>
                </div>
            </div>

            {/* Project Content */}
            <div className='project-content'>
                <h3 className='project-title'>{project.name}</h3>
                <p className='project-description'>{project.description}</p>

                {/* Tech Tags */}
                <div className='project-tags'>
                    {project.tags.map((tag) => (
                        <span key={tag.name} className="project-tag">
                            {tag.name}
                        </span>
                    ))}
                </div>
            </div>

            <style jsx>{`
                .project-card {
                    background: #FFFFFF;
                    border-radius: 16px;
                    overflow: hidden;
                    border: 1px solid #E5E5E5;
                    transition: all 0.3s ease;
                    display: flex;
                    flex-direction: column;
                }

                .project-card:hover {
                    transform: translateY(-8px);
                    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.1);
                    border-color: #D0D0D0;
                }

                .project-image-wrapper {
                    position: relative;
                    width: 100%;
                    height: 240px;
                    overflow: hidden;
                    background: #F5F5F5;
                }

                .project-image {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    transition: transform 0.4s ease;
                }

                .project-card:hover .project-image {
                    transform: scale(1.05);
                }

                .project-overlay {
                    position: absolute;
                    inset: 0;
                    background: rgba(0, 0, 0, 0.7);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    opacity: 0;
                    transition: opacity 0.3s ease;
                }

                .project-card:hover .project-overlay {
                    opacity: 1;
                }

                .project-links {
                    display: flex;
                    gap: 1rem;
                }

                .project-link {
                    width: 48px;
                    height: 48px;
                    border-radius: 50%;
                    background: #FFFFFF;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: #0A0A0A;
                    transition: all 0.3s ease;
                    text-decoration: none;
                }

                .project-link:hover {
                    background: #0A0A0A;
                    color: #FFFFFF;
                    transform: scale(1.1);
                }

                .project-content {
                    padding: 2rem;
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                }

                .project-title {
                    font-size: 1.5rem;
                    font-weight: 600;
                    color: #0A0A0A;
                    margin-bottom: 0.75rem;
                    line-height: 1.3;
                }

                .project-description {
                    font-size: 0.9375rem;
                    line-height: 1.7;
                    color: #666666;
                    margin-bottom: 1.5rem;
                    flex: 1;
                }

                .project-tags {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 0.5rem;
                }

                .project-tag {
                    padding: 0.375rem 0.875rem;
                    background: #F5F5F5;
                    border-radius: 6px;
                    font-size: 0.8125rem;
                    font-weight: 500;
                    color: #666666;
                    transition: all 0.2s ease;
                }

                .project-tag:hover {
                    background: #0A0A0A;
                    color: #FFFFFF;
                }

                @media (max-width: 768px) {
                    .project-image-wrapper {
                        height: 200px;
                    }

                    .project-content {
                        padding: 1.5rem;
                    }

                    .project-title {
                        font-size: 1.25rem;
                    }

                    .project-description {
                        font-size: 0.875rem;
                    }
                }
            `}</style>
        </motion.div>
    );
};

const Works = () => {
    return (
        <>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="section-header"
            >
                <p className="section-label">Portfolio</p>
                <h2 className="section-title">Featured Projects</h2>
                <p className="section-description">
                    A showcase of real-world applications demonstrating my technical 
                    expertise and problem-solving abilities across various domains.
                </p>
            </motion.div>

            <div className='projects-grid'>
                {projects.map((project, index) => (
                    <ProjectCard 
                        key={`project-${index}`}
                        project={project}
                        index={index}
                    />
                ))}
            </div>

            <style jsx>{`
                .section-header {
                    margin-bottom: 4rem;
                    max-width: 700px;
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
                    margin-bottom: 1rem;
                }

                .section-description {
                    font-size: 1.125rem;
                    line-height: 1.7;
                    color: #666666;
                }

                .projects-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
                    gap: 2.5rem;
                }

                @media (max-width: 768px) {
                    .section-header {
                        margin-bottom: 3rem;
                    }

                    .section-description {
                        font-size: 1rem;
                    }

                    .projects-grid {
                        grid-template-columns: 1fr;
                        gap: 2rem;
                    }
                }
            `}</style>
        </>
    );
};

export default SectionWrapper(Works, 'projects');