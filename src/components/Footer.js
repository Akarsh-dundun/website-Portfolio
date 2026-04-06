import React from 'react';

const Footer = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/yourusername',
      svg: <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/yourusername',
      svg: <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/yourusername',
      svg: <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
    },
    {
      name: 'Email',
      url: 'mailto:akarshgupta2310@gmail.com',
      svg: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
    }
  ];

  const resumeUrl = '/Gupta_Akarsh_Resume.pdf';

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <h3 className="footer-name" onClick={scrollToTop}>Akarsh Gupta</h3>
          <p className="footer-tagline">Building intelligent solutions for complex challenges</p>
          <p className="footer-copyright">© {new Date().getFullYear()} All rights reserved.</p>
        </div>
        <div className="footer-right">
          <div className="footer-section">
            <h4 className="footer-heading">Connect</h4>
            <div className="social-links">
              {socialLinks.map((link) => (
                <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" className="social-link" aria-label={link.name}>{link.svg}</a>
              ))}
            </div>
          </div>
          <div className="footer-section">
            <h4 className="footer-heading">Resources</h4>
            <a href={resumeUrl} download="Akarsh_Gupta_Resume.pdf" className="resume-button">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
              Download Resume
            </a>
          </div>
        </div>
      </div>
      <style jsx>{`.footer{background:#FAFAFA;border-top:1px solid #E5E5E5;padding:4rem 3rem 2rem;margin-top:8rem}.footer-content{max-width:1280px;margin:0 auto;display:grid;grid-template-columns:1fr 1fr;gap:4rem;align-items:start}.footer-left{display:flex;flex-direction:column;gap:.75rem}.footer-name{font-size:1.5rem;font-weight:700;color:#0A0A0A;margin:0;cursor:pointer;transition:opacity .3s ease}.footer-name:hover{opacity:.7}.footer-tagline{font-size:.9375rem;color:#666;margin:0;line-height:1.5;max-width:400px}.footer-copyright{font-size:.875rem;color:#999;margin:0;margin-top:1rem}.footer-right{display:flex;gap:4rem;justify-content:flex-end}.footer-section{display:flex;flex-direction:column;gap:1.25rem}.footer-heading{font-size:.875rem;font-weight:600;color:#0A0A0A;text-transform:uppercase;letter-spacing:.1em;margin:0}.social-links{display:flex;gap:.75rem}.social-link{width:44px;height:44px;border-radius:8px;background:#FFF;border:1px solid #E5E5E5;display:flex;align-items:center;justify-content:center;color:#0A0A0A;transition:all .3s ease;text-decoration:none}.social-link:hover{background:#0A0A0A;color:#FFF;border-color:#0A0A0A;transform:translateY(-2px)}.resume-button{display:inline-flex;align-items:center;gap:.625rem;padding:.75rem 1.5rem;background:#0A0A0A;color:#FFF;border:2px solid #0A0A0A;border-radius:8px;font-size:.875rem;font-weight:600;text-decoration:none;transition:all .3s ease;white-space:nowrap}.resume-button:hover{background:#FFF;color:#0A0A0A;transform:translateY(-2px)}@media(max-width:968px){.footer-content{grid-template-columns:1fr;gap:3rem}.footer-right{justify-content:flex-start;gap:3rem}}@media(max-width:768px){.footer{padding:3rem 1.5rem 1.5rem;margin-top:6rem}.footer-content{gap:2.5rem}.footer-name{font-size:1.25rem}.footer-right{flex-direction:column;gap:2rem}.resume-button{width:100%;justify-content:center}}`}</style>
    </footer>
  );
};

export default Footer;