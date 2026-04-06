import { useState, useEffect, useCallback } from "react";
import { Container } from "react-bootstrap";
import { ArrowRight } from "react-bootstrap-icons";
import { motion } from "framer-motion";

export const Banner = () => {
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNumber, setLoopNumber] = useState(0);
    const toRotate = ["ML ENGINEER", "BACKEND SOFTWARE ENGINEER", "STUDENT"];
    const [delta, setDelta] = useState(150);
    const period = 2000;

    // Toggle typing animation on/off
    const ENABLE_TYPING = true;

    
        // wrap tick in useCallback
    const tick = useCallback(() => {
        let i = loopNumber % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting 
            ? fullText.substring(0, text.length - 1) 
            : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(75);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNumber(loopNumber + 1);
            setDelta(150);
        }
    }, [text, isDeleting, loopNumber, toRotate, period]);

    // now tick can safely go in the dependency array
    useEffect(() => {
        if (!ENABLE_TYPING) {
            setText("ML ENGINEER / BACKEND SOFTWARE ENGINEER / STUDENT");
            return;
        }
        let ticker = setInterval(() => {
            tick();
        }, delta);
        return () => { clearInterval(ticker) };
    }, [text, delta, ENABLE_TYPING, tick])
        const scrollToContact = () => {
            const contactSection = document.querySelector('#contact');
            if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
            }
        }

    return (
        <section className="brutalist-hero" id="home">
            <Container>
                <div className="hero-content">
                    {/* Top Tagline */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="top-tagline"
                    >
                        PORTFOLIO 2026
                    </motion.div>

                    {/* Name Stack */}
                    <motion.div 
                        className="name-stack"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        <h1 className="first-name">AKARSH</h1>
                        <div className="divider-line"></div>
                        <h1 className="last-name">GUPTA</h1>
                    </motion.div>

                    {/* Main Tagline */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="main-tagline"
                    >
                        Building intelligent solutions for complex challenges
                    </motion.p>

                    {/* Roles */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                        className="roles-text"
                    >
                        {ENABLE_TYPING ? (
                            <span className="typing-text">{text}<span className="cursor">|</span></span>
                        ) : (
                            "ML ENGINEER / WEB DESIGNER / EE ENGINEER"
                        )}
                    </motion.div>

                    {/* CTA Button */}
                    <motion.button
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 1.0 }}
                        onClick={scrollToContact}
                        className="hero-cta"
                    >
                        GET IN TOUCH
                        <ArrowRight size={18} />
                    </motion.button>
                </div>
            </Container>

            <style jsx>{`
                .brutalist-hero {
                    min-height: 100vh;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: #FFFFFF;
                    padding: 8rem 2rem 6rem;
                    text-align: center;
                }

                .hero-content {
                    max-width: 900px;
                    margin: 0 auto;
                }

                .top-tagline {
                    font-size: 0.75rem;
                    font-weight: 700;
                    letter-spacing: 0.2em;
                    color: #666666;
                    margin-bottom: 4rem;
                    text-transform: uppercase;
                }

                .name-stack {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 0.5rem;
                    margin-bottom: 2.5rem;
                }

                .name-stack h1 {
                    font-size: clamp(3.5rem, 12vw, 7rem);
                    font-weight: 900;
                    line-height: 0.9;
                    margin: 0;
                    color: #0A0A0A;
                    letter-spacing: -0.02em;
                }

                .divider-line {
                    width: clamp(150px, 30vw, 300px);
                    height: 4px;
                    background: #0A0A0A;
                    margin: 0.5rem 0;
                }

                .main-tagline {
                    font-size: clamp(1.125rem, 2.5vw, 1.5rem);
                    font-weight: 400;
                    line-height: 1.5;
                    color: #0A0A0A;
                    margin-bottom: 2rem;
                    max-width: 600px;
                    margin-left: auto;
                    margin-right: auto;
                }

                .roles-text {
                    font-size: clamp(0.875rem, 2vw, 1rem);
                    font-weight: 600;
                    letter-spacing: 0.1em;
                    color: #666666;
                    margin-bottom: 3rem;
                    min-height: 1.5rem;
                }

                .typing-text {
                    display: inline-block;
                }

                .cursor {
                    display: inline-block;
                    animation: blink 1s infinite;
                    margin-left: 2px;
                }

                @keyframes blink {
                    0%, 49% { opacity: 1; }
                    50%, 100% { opacity: 0; }
                }

                .hero-cta {
                    display: inline-flex;
                    align-items: center;
                    gap: 0.75rem;
                    padding: 1rem 2.5rem;
                    background: #0A0A0A;
                    color: #FFFFFF;
                    border: 2px solid #0A0A0A;
                    font-size: 0.875rem;
                    font-weight: 700;
                    letter-spacing: 0.1em;
                    cursor: pointer;
                    transition: all 0.3s ease;
                }

                .hero-cta:hover {
                    background: #FFFFFF;
                    color: #0A0A0A;
                    transform: translateY(-2px);
                }

                @media (max-width: 768px) {
                    .brutalist-hero {
                        padding: 6rem 1.5rem 4rem;
                    }

                    .top-tagline {
                        font-size: 0.625rem;
                        margin-bottom: 3rem;
                    }

                    .name-stack {
                        margin-bottom: 2rem;
                    }

                    .name-stack h1 {
                        font-size: clamp(2.5rem, 15vw, 4rem);
                    }

                    .divider-line {
                        width: 120px;
                        height: 3px;
                    }

                    .main-tagline {
                        font-size: 1rem;
                        margin-bottom: 1.5rem;
                    }

                    .roles-text {
                        font-size: 0.75rem;
                        margin-bottom: 2.5rem;
                    }

                    .hero-cta {
                        padding: 0.875rem 2rem;
                        font-size: 0.75rem;
                    }
                }
            `}</style>
        </section>
    );
};