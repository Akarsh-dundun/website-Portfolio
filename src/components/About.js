import React from "react";
import { motion } from "framer-motion";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";

const StatCard = ({ number, label, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="stat-card"
        >
            <h3 className="stat-number">{number}</h3>
            <p className="stat-label">{label}</p>
        </motion.div>
    );
};

const ServiceCard = ({ index, title, icon }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="service-card"
        >
            <img src={icon} alt={title} className="service-icon" />
            <h3 className="service-title">{title}</h3>
        </motion.div>
    );
};

const About = () => {
    // Add your actual stats here
    const stats = [
        { number: "3+", label: "Years Experience" },
        { number: "15+", label: "Projects Completed" },
        { number: "5+", label: "Technologies" },
        { number: "100%", label: "Commitment" }
    ];

    return (
        <div className="about-wrapper">
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="about-header"
            >
                <p className="section-label">Get To Know Me</p>
                <h2 className="section-title">About Me</h2>
            </motion.div>

            {/* Bio Section */}
            <div className="bio-section">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="bio-content"
                >
                    <h3 className="bio-title">Who I Am</h3>
                    <p className="bio-text">
                        I'm a passionate <strong>ML Engineer and Full-Stack Developer</strong> currently 
                        pursuing my degree at UMass Amherst. With a strong foundation in machine learning and 
                        web development, I thrive at the intersection of 
                        technology and innovation.
                    </p>
                    <p className="bio-text">
                        My journey in tech is driven by curiosity and a desire to solve complex problems 
                        that matter. Whether it's building intelligent systems with Python and TensorFlow, 
                        crafting responsive web applications with React, or designing circuits, I bring 
                        a multidisciplinary approach to every project.
                    </p>
                    <p className="bio-text">
                        I'm actively seeking opportunities to contribute to cutting-edge projects, 
                        collaborate with talented teams, and continue growing as an engineer. Let's 
                        build something amazing together.
                    </p>
                </motion.div>

                {/* Stats */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="stats-grid"
                >
                    {stats.map((stat, index) => (
                        <StatCard key={stat.label} {...stat} index={index} />
                    ))}
                </motion.div>
            </div>

            {/* Expertise Section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="expertise-header"
            >
                <h3 className="expertise-title">What I Do</h3>
                <p className="expertise-description">
                    Specialized in building intelligent, scalable solutions across multiple domains
                </p>
            </motion.div>

            <div className="services-grid">
                {services.map((service, index) => (
                    <ServiceCard key={service.title} index={index} {...service} />
                ))}
            </div>

            <style jsx>{`
                .about-wrapper {
                    max-width: 1280px;
                    margin: 0 auto;
                }

                .about-header {
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

                /* Bio Section */
                .bio-section {
                    display: grid;
                    grid-template-columns: 1.5fr 1fr;
                    gap: 4rem;
                    margin-bottom: 6rem;
                }

                .bio-content {
                    display: flex;
                    flex-direction: column;
                    gap: 1.5rem;
                }

                .bio-title {
                    font-size: 1.5rem;
                    font-weight: 600;
                    color: #0A0A0A;
                    margin-bottom: 0.5rem;
                }

                .bio-text {
                    font-size: 1.0625rem;
                    line-height: 1.8;
                    color: #666666;
                    margin: 0;
                }

                .bio-text strong {
                    color: #0A0A0A;
                    font-weight: 600;
                }

                /* Stats Grid */
                .stats-grid {
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    gap: 1.5rem;
                }

                .stat-card {
                    background: #FAFAFA;
                    border: 1px solid #E5E5E5;
                    border-radius: 12px;
                    padding: 3.25rem 0rem;
                    text-align: center;
                    transition: all 0.5s ease;
                }

                .stat-card:hover {
                    transform: translateY(-4px);
                    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
                    border-color: #D0D0D0;
                }

                .stat-number {
                    font-size: 2.5rem;
                    font-weight: 700;
                    color: #0A0A0A;
                    margin: 0 0 0.5rem 0;
                    line-height: 1;
                }

                .stat-label {
                    font-size: 0.875rem;
                    font-weight: 500;
                    color: #666666;
                    margin: 0;
                    text-transform: uppercase;
                    letter-spacing: 0.05em;
                }

                /* Expertise Section */
                .expertise-header {
                    margin-bottom: 3rem;
                    text-align: center;
                }

                .expertise-title {
                    font-size: 1.75rem;
                    font-weight: 600;
                    color: #0A0A0A;
                    margin-bottom: 0.75rem;
                }

                .expertise-description {
                    font-size: 1.0625rem;
                    color: #666666;
                    max-width: 600px;
                    margin: 0 auto;
                }

                /* Services Grid */
                .services-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
                    gap: 2rem;
                }

                .service-card {
                    background: #FAFAFA;
                    border-radius: 16px;
                    padding: 2.5rem;
                    transition: all 0.3s ease;
                    border: 1px solid #E5E5E5;
                    text-align: center;
                }

                .service-card:hover {
                    transform: translateY(-6px);
                    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.1);
                    border-color: #D0D0D0;
                }

                .service-icon {
                    width: 56px;
                    height: 56px;
                    margin: 0 auto 1.5rem;
                    opacity: 0.9;
                    display: block;
                }

                .service-title {
                    font-size: 1.25rem;
                    font-weight: 600;
                    color: #0A0A0A;
                    line-height: 1.4;
                    margin: 0;
                }

                @media (max-width: 968px) {
                    .bio-section {
                        grid-template-columns: 1fr;
                        gap: 3rem;
                        margin-bottom: 5rem;
                    }

                    .stats-grid {
                        grid-template-columns: repeat(2, 1fr);
                    }
                }

                @media (max-width: 768px) {
                    .about-header {
                        margin-bottom: 3rem;
                    }

                    .bio-section {
                        gap: 2.5rem;
                        margin-bottom: 4rem;
                    }

                    .bio-title {
                        font-size: 1.25rem;
                    }

                    .bio-text {
                        font-size: 1rem;
                    }

                    .stats-grid {
                        gap: 1rem;
                    }

                    .stat-number {
                        font-size: 2rem;
                    }

                    .expertise-header {
                        margin-bottom: 2.5rem;
                    }

                    .expertise-title {
                        font-size: 1.5rem;
                    }

                    .expertise-description {
                        font-size: 1rem;
                    }

                    .services-grid {
                        grid-template-columns: 1fr;
                        gap: 1.5rem;
                    }
                }
            `}</style>
        </div>
    );
};

export default SectionWrapper(About, "about");