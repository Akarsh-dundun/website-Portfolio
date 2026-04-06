import React from 'react';
import { motion } from 'framer-motion';
import { experiences } from '../constants';
import { SectionWrapper } from '../hoc';

const ExperienceCard = ({ experience, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="timeline-item"
        >
            {/* Company Logo */}
            <div className="company-logo-wrapper">
                <div className="company-logo">
                    {experience.icon ? (
                        <img src={experience.icon} alt={experience.company_name} />
                    ) : (
                        <div className="logo-placeholder">
                            {experience.company_name.charAt(0)}
                        </div>
                    )}
                </div>
            </div>

            {/* Content */}
            <div className="timeline-content">
                <div className="content-header">
                    <div>
                        <h3 className="role-title">{experience.title}</h3>
                        <div className="company-info">
                            <span className="company-name">{experience.company_name}</span>
                            <span className="date-badge">{experience.date}</span>
                        </div>
                    </div>
                </div>
                
                {experience.points && experience.points.length > 0 && (
                    <ul className="timeline-points">
                        {experience.points.map((point, idx) => (
                            <li key={idx}>{point}</li>
                        ))}
                    </ul>
                )}
            </div>
        </motion.div>
    );
};

const Experience = () => {
    return (
        <>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="section-header"
            >
                <p className="section-label">Career Journey</p>
                <h2 className="section-title">Work Experience</h2>
            </motion.div>

            <div className="experience-section">
                {experiences.map((experience, index) => (
                    <ExperienceCard
                        key={index}
                        experience={experience}
                        index={index}
                    />
                ))}
            </div>

            <style jsx>{`
                .section-header {
                    max-width: 1280px;
                    margin: 0 auto;
                    padding: 1.5rem 3rem 0;
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
                    margin-bottom: 3rem;
                    color: #0A0A0A;
                }

                .experience-section {
                    max-width: 1280px;
                    margin: 0 auto;
                    padding: 0 3rem 2rem;
                }

                .timeline-item {
                    display: grid;
                    grid-template-columns: 80px 1fr;
                    gap: 2rem;
                    padding: 2.5rem 0;
                    border-bottom: 1px solid #E5E5E5;
                }

                .timeline-item:first-child {
                    padding-top: 2.5rem;
                }

                .timeline-item:last-child {
                    border-bottom: none;
                    padding-bottom: 0;
                }

                .company-logo-wrapper {
                    display: flex;
                    justify-content: center;
                    padding-top: 0.5rem;
                }

                .company-logo {
                    width: 64px;
                    height: 64px;
                    border-radius: 12px;
                    overflow: hidden;
                    background: #FFFFFF;
                    border: 1px solid #E5E5E5;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
                    transition: all 0.3s ease;
                }

                .timeline-item:hover .company-logo {
                    transform: scale(1.05);
                    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
                }

                .company-logo img {
                    width: 100%;
                    height: 100%;
                    object-fit: contain;
                    padding: 0.75rem;
                }

                .logo-placeholder {
                    width: 100%;
                    height: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 1.5rem;
                    font-weight: 700;
                    color: #0A0A0A;
                    background: linear-gradient(135deg, #F5F5F5 0%, #FAFAFA 100%);
                }

                .timeline-content {
                    padding-top: 0.25rem;
                }

                .content-header {
                    margin-bottom: 1.25rem;
                }

                .role-title {
                    font-size: 1.375rem;
                    font-weight: 600;
                    margin-bottom: 0.5rem;
                    color: #0A0A0A;
                    line-height: 1.3;
                }

                .company-info {
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                    flex-wrap: wrap;
                }

                .company-name {
                    font-size: 1rem;
                    font-weight: 500;
                    color: #666666;
                }

                .date-badge {
                    font-size: 0.8125rem;
                    font-weight: 600;
                    color: #999999;
                    padding: 0.25rem 0.75rem;
                    background: #F5F5F5;
                    border-radius: 6px;
                    letter-spacing: 0.02em;
                }

                .timeline-points {
                    list-style: none;
                    padding: 0;
                    margin: 0;
                }

                .timeline-points li {
                    font-size: 0.9375rem;
                    line-height: 1.7;
                    color: #666666;
                    margin-bottom: 0.75rem;
                    padding-left: 1.5rem;
                    position: relative;
                }

                .timeline-points li:last-child {
                    margin-bottom: 0;
                }

                .timeline-points li::before {
                    content: '→';
                    position: absolute;
                    left: 0;
                    color: #0A0A0A;
                    font-weight: 600;
                }

                @media (max-width: 768px) {
                    .section-header {
                        padding: 0 1.5rem;
                    }

                    .experience-section {
                        padding: 0 1.5rem;
                    }

                    .timeline-item {
                        grid-template-columns: 1fr;
                        gap: 1.5rem;
                        padding: 2rem 0;
                    }

                    .company-logo-wrapper {
                        justify-content: flex-start;
                        padding-top: 0;
                    }

                    .company-logo {
                        width: 56px;
                        height: 56px;
                    }

                    .role-title {
                        font-size: 1.25rem;
                    }

                    .company-info {
                        gap: 0.75rem;
                    }

                    .timeline-points li {
                        font-size: 0.875rem;
                    }
                }
            `}</style>
        </>
    );
};

export default SectionWrapper(Experience, "work");