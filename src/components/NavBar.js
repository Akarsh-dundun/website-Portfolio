import { useState, useEffect } from "react";

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);
 
    useEffect(() => {
        const handleScroll = () => {
            // Update scrolled state for navbar styling
            setScrolled(window.scrollY > 50);
 
            // Get current scroll position (middle of viewport for better detection)
            const scrollPosition = window.scrollY + window.innerHeight / 3;
 
            // Get all sections
            const sections = document.querySelectorAll('section[id]');
            
            let currentSection = 'home';
            let minDistance = Infinity;
 
            sections.forEach((section) => {
                const sectionTop = section.offsetTop;
                const sectionBottom = sectionTop + section.offsetHeight;
                const sectionMiddle = sectionTop + (section.offsetHeight / 2);
                const sectionId = section.getAttribute('id');
 
                // Calculate distance from scroll position to section middle
                const distance = Math.abs(scrollPosition - sectionMiddle);
 
                // If scroll position is within section bounds OR closest to this section
                if ((scrollPosition >= sectionTop && scrollPosition < sectionBottom) || 
                    distance < minDistance) {
                    minDistance = distance;
                    currentSection = sectionId;
                }
            });
 
            // Special case: if at very top, always show home
            if (window.scrollY < 200) {
                currentSection = 'home';
            }
 
            setActiveLink(currentSection);
        };
 
        // Initial check
        handleScroll();
 
        // Throttle scroll events for performance
        let ticking = false;
        const scrollListener = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    handleScroll();
                    ticking = false;
                });
                ticking = true;
            }
        };
 
        window.addEventListener('scroll', scrollListener, { passive: true });
 
        return () => {
            window.removeEventListener('scroll', scrollListener);
        };
    }, []);
 
    const scrollToSection = (sectionId) => {
        const section = document.querySelector(sectionId);
        if (section) {
            const yOffset = -120; // Offset for navbar
            const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
            
            window.scrollTo({ top: y, behavior: 'smooth' });
            setActiveLink(sectionId.replace('#', ''));
        }
    };

    return (
        <>
            <nav className={`floating-navbar ${scrolled ? 'scrolled' : ''}`}>
                <button  
                    className="brand-name"
                    onClick={() => scrollToSection('#home')}
                >
                    Akarsh Gupta
                </button>
                
                <div className="nav-divider"></div>
                
                <div className="nav-links">
                    <button 
                        className={`nav-item ${activeLink === 'home' ? 'active' : ''}`}
                        onClick={() => scrollToSection('#home')}
                    >
                        Home
                    </button>
                    <button 
                        className={`nav-item ${activeLink === 'work' ? 'active' : ''}`}
                        onClick={() => scrollToSection('#work')}
                    >
                        Experience
                    </button>
                    <button 
                        className={`nav-item ${activeLink === 'projects' ? 'active' : ''}`}
                        onClick={() => scrollToSection('#projects')}
                    >
                        Projects
                    </button>
                    <button 
                        className={`nav-item ${activeLink === 'contact' ? 'active' : ''}`}
                        onClick={() => scrollToSection('#contact')}
                    >
                        Contact
                    </button>
                </div>
            </nav>

            <style jsx>{`
                    .brand-name, .nav-item {
                    background: none;
                    border: none;
                    font-family: inherit;
                    }
                .floating-navbar {
                    position: fixed;
                    top: 2rem;
                    left: 50%;
                    transform: translateX(-50%);
                    z-index: 9999;
                    
                    display: flex;
                    align-items: center;
                    gap: 2rem;
                    
                    /* Actually GRAY frosted glass */
                    background: rgba(150, 150, 150, 0.65);
                    backdrop-filter: blur(28px) saturate(180%);
                    -webkit-backdrop-filter: blur(28px) saturate(180%);
                    
                    padding: 1rem 1.75rem;
                    border-radius: 100px;
                    
                    /* Glass-like borders and shadows */
                    border: 1px solid rgba(255, 255, 255, 0.2);
                    box-shadow: 
                        0 8px 32px rgba(0, 0, 0, 0.15),
                        0 2px 8px rgba(0, 0, 0, 0.1),
                        inset 0 1px 0 rgba(255, 255, 255, 0.25),
                        inset 0 -1px 0 rgba(0, 0, 0, 0.1);
                    
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                }

                .floating-navbar.scrolled {
                    background: rgba(120, 120, 120, 0.75);
                    backdrop-filter: blur(32px) saturate(190%);
                    -webkit-backdrop-filter: blur(32px) saturate(190%);
                    
                    box-shadow: 
                        0 12px 40px rgba(0, 0, 0, 0.2),
                        0 4px 12px rgba(0, 0, 0, 0.12),
                        inset 0 1px 0 rgba(255, 255, 255, 0.3),
                        inset 0 -1px 0 rgba(0, 0, 0, 0.15);
                    
                    border-color: rgba(255, 255, 255, 0.25);
                    top: 1.5rem;
                }

                .brand-name {
                    font-size: 1.125rem;
                    font-weight: 700;
                    color: #FFFFFF;
                    text-decoration: none;
                    cursor: pointer;
                    transition: opacity 0.3s ease;
                    white-space: nowrap;
                    letter-spacing: -0.02em;
                    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
                }

                .brand-name:hover {
                    opacity: 0.8;
                }

                .nav-divider {
                    width: 1px;
                    height: 24px;
                    background: linear-gradient(
                        to bottom,
                        rgba(255, 255, 255, 0.1),
                        rgba(255, 255, 255, 0.3),
                        rgba(255, 255, 255, 0.1)
                    );
                }

                .nav-links {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                }

                .nav-item {
                    position: relative;
                    padding: 0.75rem 1.5rem;
                    
                    font-size: 1rem;
                    font-weight: 600;
                    color: #FFFFFF;
                    text-decoration: none;
                    
                    cursor: pointer;
                    transition: all 0.3s ease;
                    
                    border-radius: 50px;
                    white-space: nowrap;
                    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
                }

                .nav-item:hover {
                    background: rgba(255, 255, 255, 0.15);
                }

                .nav-item.active {
                    background: rgba(255, 255, 255, 0.25);
                    color: #FFFFFF;
                    box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.15);
                }

                @media (max-width: 1024px) {
                    .floating-navbar {
                        gap: 1.5rem;
                        padding: 0.875rem 1.5rem;
                    }

                    .brand-name {
                        font-size: 1rem;
                    }

                    .nav-item {
                        padding: 0.625rem 1.25rem;
                        font-size: 0.9375rem;
                    }
                }

                @media (max-width: 768px) {
                    .floating-navbar {
                        top: 1rem;
                        padding: 0.75rem 1.25rem;
                        gap: 1rem;
                        max-width: calc(100vw - 2rem);
                        overflow-x: auto;
                        scrollbar-width: none;
                        -ms-overflow-style: none;
                    }

                    .floating-navbar::-webkit-scrollbar {
                        display: none;
                    }

                    .floating-navbar.scrolled {
                        top: 0.75rem;
                    }

                    .brand-name {
                        font-size: 0.9375rem;
                    }

                    .nav-divider {
                        height: 20px;
                    }

                    .nav-links {
                        gap: 0.25rem;
                    }

                    .nav-item {
                        padding: 0.625rem 1rem;
                        font-size: 0.875rem;
                    }
                }

                @media (max-width: 480px) {
                    .floating-navbar {
                        padding: 0.625rem 1rem;
                        gap: 0.75rem;
                    }

                    .brand-name {
                        font-size: 0.875rem;
                    }

                    .nav-item {
                        padding: 0.5rem 0.875rem;
                        font-size: 0.8125rem;
                    }
                }
            `}</style>
        </>
    );
};