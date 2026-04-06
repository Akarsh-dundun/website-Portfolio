import { useState, useEffect, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle, Terminal, Code, Cpu } from "react-bootstrap-icons";
import { motion } from "framer-motion";

export const Banner = () => {
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNumber, setLoopNumber] = useState(0);
    const toRotate = ["ML Engineer", "Web Designer", "EE Engineer"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;
    const canvasRef = useRef(null);

    // Matrix rain effect
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const katakana = 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
        const latin = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const nums = '0123456789';
        const alphabet = katakana + latin + nums;

        const fontSize = 16;
        const columns = canvas.width / fontSize;

        const rainDrops = [];
        for (let x = 0; x < columns; x++) {
            rainDrops[x] = 1;
        }

        const draw = () => {
            ctx.fillStyle = 'rgba(10, 10, 10, 0.05)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            ctx.fillStyle = '#0F0';
            ctx.font = fontSize + 'px monospace';

            for (let i = 0; i < rainDrops.length; i++) {
                const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
                ctx.fillText(text, i * fontSize, rainDrops[i] * fontSize);

                if (rainDrops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                    rainDrops[i] = 0;
                }
                rainDrops[i]++;
            }
        };

        const interval = setInterval(draw, 30);

        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        window.addEventListener('resize', handleResize);

        return () => {
            clearInterval(interval);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    // Typing effect
    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => { clearInterval(ticker) };
    }, [text]);

    const tick = () => {
        let i = loopNumber % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting 
            ? fullText.substring(0, text.length - 1) 
            : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNumber(loopNumber + 1);
            setDelta(500);
        }
    };

    const scrollToContact = () => {
        const contactSection = document.querySelector('#contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="glitch-banner" id="home">
            <canvas ref={canvasRef} className="matrix-canvas" />
            
            <Container className="banner-content">
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            <div className="glitch-tag">
                                <Terminal className="terminal-icon" />
                                <span>SYSTEM ONLINE</span>
                            </div>
                            
                            <h1 className="glitch-title" data-text="AKARSH GUPTA">
                                AKARSH GUPTA
                            </h1>
                            
                            <div className="role-container">
                                <span className="role-prefix">{'> '}</span>
                                <span className="role-text">{text}</span>
                                <span className="cursor-blink">_</span>
                            </div>

                            <p className="glitch-description">
                                <Code className="inline-icon" />
                                Crafting intelligent systems at the intersection of 
                                <span className="highlight"> machine learning</span>,
                                <span className="highlight"> web technologies</span>, and
                                <span className="highlight"> electrical engineering</span>.
                                Breaking boundaries. Building the future.
                            </p>

                            <div className="cta-container">
                                <button className="glitch-button" onClick={scrollToContact}>
                                    <span className="button-text">INITIALIZE CONTACT</span>
                                    <ArrowRightCircle className="button-icon" />
                                </button>
                                
                                <div className="tech-stats">
                                    <div className="stat">
                                        <Cpu className="stat-icon" />
                                        <span>NEURAL NETWORKS</span>
                                    </div>
                                    <div className="stat">
                                        <Code className="stat-icon" />
                                        <span>FULL STACK</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </Col>
                    
                    <Col xs={12} md={6} xl={5}>
                        <motion.div
                            className="hero-visual"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, delay: 0.2 }}
                        >
                            <div className="hologram-container">
                                <div className="hologram-ring ring-1"></div>
                                <div className="hologram-ring ring-2"></div>
                                <div className="hologram-ring ring-3"></div>
                                <div className="hologram-center">
                                    <div className="center-pulse"></div>
                                    <Terminal className="center-icon" size={80} />
                                </div>
                                <div className="scan-line"></div>
                            </div>
                        </motion.div>
                    </Col>
                </Row>
            </Container>

            <style jsx>{`
                .glitch-banner {
                    min-height: 100vh;
                    display: flex;
                    align-items: center;
                    position: relative;
                    background: #0a0a0a;
                    overflow: hidden;
                }

                .matrix-canvas {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    opacity: 0.15;
                    z-index: 0;
                }

                .banner-content {
                    position: relative;
                    z-index: 1;
                }

                /* Glitch Tag */
                .glitch-tag {
                    display: inline-flex;
                    align-items: center;
                    gap: 0.5rem;
                    padding: 0.5rem 1rem;
                    background: rgba(0, 255, 0, 0.1);
                    border: 1px solid #00ff00;
                    color: #00ff00;
                    font-family: 'Courier New', monospace;
                    font-size: 0.75rem;
                    font-weight: 700;
                    letter-spacing: 0.2em;
                    margin-bottom: 2rem;
                    animation: pulse-border 2s infinite;
                }

                .terminal-icon {
                    animation: blink 1.5s infinite;
                }

                @keyframes pulse-border {
                    0%, 100% { border-color: #00ff00; box-shadow: 0 0 5px rgba(0, 255, 0, 0.5); }
                    50% { border-color: #00ff00; box-shadow: 0 0 20px rgba(0, 255, 0, 0.8); }
                }

                @keyframes blink {
                    0%, 50%, 100% { opacity: 1; }
                    25%, 75% { opacity: 0.3; }
                }

                /* Glitch Title */
                .glitch-title {
                    font-size: clamp(3rem, 10vw, 5.5rem);
                    font-weight: 900;
                    font-family: 'Courier New', monospace;
                    color: #fff;
                    position: relative;
                    margin-bottom: 1.5rem;
                    letter-spacing: 0.05em;
                    text-shadow: 
                        0 0 10px rgba(0, 255, 0, 0.5),
                        0 0 20px rgba(0, 255, 0, 0.3),
                        0 0 30px rgba(0, 255, 0, 0.2);
                    animation: glitch 3s infinite;
                }

                .glitch-title::before,
                .glitch-title::after {
                    content: attr(data-text);
                    position: absolute;
                    left: 0;
                    top: 0;
                    width: 100%;
                    height: 100%;
                }

                .glitch-title::before {
                    color: #ff00ff;
                    animation: glitch-1 2.5s infinite;
                    clip-path: polygon(0 0, 100% 0, 100% 45%, 0 45%);
                }

                .glitch-title::after {
                    color: #00ffff;
                    animation: glitch-2 2.5s infinite;
                    clip-path: polygon(0 55%, 100% 55%, 100% 100%, 0 100%);
                }

                @keyframes glitch {
                    0%, 90%, 100% { transform: translate(0); }
                    92% { transform: translate(-2px, 2px); }
                    94% { transform: translate(2px, -2px); }
                    96% { transform: translate(-2px, -2px); }
                    98% { transform: translate(2px, 2px); }
                }

                @keyframes glitch-1 {
                    0%, 90%, 100% { transform: translate(0); }
                    92% { transform: translate(-3px, 0); }
                    94% { transform: translate(3px, 0); }
                }

                @keyframes glitch-2 {
                    0%, 90%, 100% { transform: translate(0); }
                    92% { transform: translate(3px, 0); }
                    94% { transform: translate(-3px, 0); }
                }

                /* Role Container */
                .role-container {
                    font-family: 'Courier New', monospace;
                    font-size: clamp(1.5rem, 4vw, 2.5rem);
                    color: #00ff00;
                    margin-bottom: 2rem;
                    display: flex;
                    align-items: center;
                }

                .role-prefix {
                    color: #00ff00;
                    margin-right: 0.5rem;
                }

                .role-text {
                    color: #00ffff;
                    font-weight: 600;
                }

                .cursor-blink {
                    color: #00ff00;
                    animation: blink-cursor 1s infinite;
                    margin-left: 2px;
                }

                @keyframes blink-cursor {
                    0%, 50% { opacity: 1; }
                    51%, 100% { opacity: 0; }
                }

                /* Description */
                .glitch-description {
                    font-size: 1.125rem;
                    line-height: 1.8;
                    color: #a0a0a0;
                    max-width: 600px;
                    margin-bottom: 3rem;
                    font-family: 'Courier New', monospace;
                }

                .inline-icon {
                    color: #00ff00;
                    margin-right: 0.5rem;
                }

                .highlight {
                    color: #00ffff;
                    font-weight: 600;
                    text-shadow: 0 0 10px rgba(0, 255, 255, 0.5);
                }

                /* CTA Container */
                .cta-container {
                    display: flex;
                    flex-direction: column;
                    gap: 2rem;
                }

                .glitch-button {
                    display: inline-flex;
                    align-items: center;
                    gap: 1rem;
                    padding: 1rem 2rem;
                    background: transparent;
                    border: 2px solid #00ff00;
                    color: #00ff00;
                    font-family: 'Courier New', monospace;
                    font-size: 1rem;
                    font-weight: 700;
                    letter-spacing: 0.15em;
                    cursor: pointer;
                    position: relative;
                    overflow: hidden;
                    transition: all 0.3s ease;
                    text-transform: uppercase;
                }

                .glitch-button::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: -100%;
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(90deg, transparent, rgba(0, 255, 0, 0.3), transparent);
                    transition: left 0.5s ease;
                }

                .glitch-button:hover::before {
                    left: 100%;
                }

                .glitch-button:hover {
                    background: rgba(0, 255, 0, 0.1);
                    box-shadow: 
                        0 0 20px rgba(0, 255, 0, 0.5),
                        inset 0 0 20px rgba(0, 255, 0, 0.2);
                    transform: translateY(-2px);
                }

                .button-text {
                    position: relative;
                    z-index: 1;
                }

                .button-icon {
                    transition: transform 0.3s ease;
                }

                .glitch-button:hover .button-icon {
                    transform: translateX(5px);
                }

                /* Tech Stats */
                .tech-stats {
                    display: flex;
                    gap: 2rem;
                }

                .stat {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    font-family: 'Courier New', monospace;
                    font-size: 0.875rem;
                    color: #00ff00;
                    padding: 0.5rem 1rem;
                    border: 1px solid rgba(0, 255, 0, 0.3);
                    background: rgba(0, 255, 0, 0.05);
                }

                .stat-icon {
                    animation: spin 3s linear infinite;
                }

                @keyframes spin {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }

                /* Hero Visual - Hologram */
                .hero-visual {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    min-height: 500px;
                }

                .hologram-container {
                    position: relative;
                    width: 400px;
                    height: 400px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }

                .hologram-ring {
                    position: absolute;
                    border: 2px solid #00ff00;
                    border-radius: 50%;
                    opacity: 0.3;
                }

                .ring-1 {
                    width: 100%;
                    height: 100%;
                    animation: rotate-ring 20s linear infinite, pulse-ring 3s ease-in-out infinite;
                }

                .ring-2 {
                    width: 75%;
                    height: 75%;
                    animation: rotate-ring 15s linear infinite reverse, pulse-ring 3s ease-in-out infinite 0.5s;
                }

                .ring-3 {
                    width: 50%;
                    height: 50%;
                    animation: rotate-ring 10s linear infinite, pulse-ring 3s ease-in-out infinite 1s;
                }

                @keyframes rotate-ring {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }

                @keyframes pulse-ring {
                    0%, 100% { 
                        opacity: 0.3;
                        box-shadow: 0 0 10px rgba(0, 255, 0, 0.3);
                    }
                    50% { 
                        opacity: 0.6;
                        box-shadow: 0 0 30px rgba(0, 255, 0, 0.6);
                    }
                }

                .hologram-center {
                    position: relative;
                    width: 200px;
                    height: 200px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    background: radial-gradient(circle, rgba(0, 255, 0, 0.1) 0%, transparent 70%);
                    border: 2px solid #00ff00;
                    border-radius: 50%;
                    box-shadow: 
                        0 0 30px rgba(0, 255, 0, 0.3),
                        inset 0 0 30px rgba(0, 255, 0, 0.2);
                }

                .center-pulse {
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    border: 2px solid #00ff00;
                    border-radius: 50%;
                    animation: pulse-expand 2s ease-out infinite;
                }

                @keyframes pulse-expand {
                    0% {
                        transform: scale(1);
                        opacity: 1;
                    }
                    100% {
                        transform: scale(1.5);
                        opacity: 0;
                    }
                }

                .center-icon {
                    color: #00ff00;
                    filter: drop-shadow(0 0 10px rgba(0, 255, 0, 0.8));
                    animation: float-icon 3s ease-in-out infinite;
                }

                @keyframes float-icon {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-10px); }
                }

                .scan-line {
                    position: absolute;
                    width: 120%;
                    height: 2px;
                    background: linear-gradient(90deg, transparent, #00ff00, transparent);
                    box-shadow: 0 0 10px #00ff00;
                    animation: scan 3s linear infinite;
                }

                @keyframes scan {
                    0% { top: 0; }
                    100% { top: 100%; }
                }

                /* Mobile Responsiveness */
                @media (max-width: 768px) {
                    .glitch-title {
                        font-size: 2.5rem;
                    }

                    .role-container {
                        font-size: 1.5rem;
                        flex-wrap: wrap;
                    }

                    .glitch-description {
                        font-size: 1rem;
                    }

                    .tech-stats {
                        flex-direction: column;
                        gap: 1rem;
                    }

                    .hologram-container {
                        width: 300px;
                        height: 300px;
                    }

                    .hologram-center {
                        width: 150px;
                        height: 150px;
                    }

                    .center-icon {
                        width: 60px;
                        height: 60px;
                    }
                }
            `}</style>
        </section>
    )
}