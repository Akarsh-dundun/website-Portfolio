import React from 'react';
import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { SectionWrapper } from '../hoc';

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
    
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    
    emailjs.send(
      'service_dl00kuh',
      'template_fayamlh',
      {
        from_name: form.name,
        to_name: 'Akarsh',
        from_email: form.email,
        to_email: 'akarshgupta2310@gmail.com',
        reply_to: form.email,  // Add this for reply-to functionality
        message: form.message,
      },
      'lFyq7EQ3EGdfwQ3XY',
    )
    .then(() => {
      setLoading(false);
      alert('Thank you! I\'ll get back to you as soon as possible.');
      setForm({
        name: '',
        email: '',
        message: '',
      });
    }, (error) => {
      setLoading(false);
      console.log(error);
      alert('Something went wrong. Please try again.');
    });
  };

  // Inline SVG Icons
  const MailIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="2" y="4" width="20" height="16" rx="2"/>
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
    </svg>
  );

  const MapPinIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
      <circle cx="12" cy="10" r="3"/>
    </svg>
  );

  const SendIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="22" y1="2" x2="11" y2="13"/>
      <polygon points="22 2 15 22 11 13 2 9 22 2"/>
    </svg>
  );

  return (
    <div className='contact-wrapper'>
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="section-header"
      >
        <p className="section-label">Get In Touch</p>
        <h2 className="section-title">Let's Work Together</h2>
        <p className="section-description">
          Have a project in mind or want to discuss opportunities? 
          I'd love to hear from you.
        </p>
      </motion.div>

      <div className="contact-content">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="contact-info"
        >
          <h3 className="info-title">Contact Information</h3>
          
          <div className="info-items">
            <div className="info-item">
              <div className="info-icon">
                <MailIcon />
              </div>
              <div>
                <p className="info-label">Email</p>
                <a href="mailto:akarshgupta2310@gmail.com" className="info-value">
                  akarshgupta2310@gmail.com
                </a>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">
                <MapPinIcon />
              </div>
              <div>
                <p className="info-label">Location</p>
                <p className="info-value">Amherst, Massachusetts, US</p>
              </div>
            </div>
          </div>

          <div className="info-note">
            <p>
              Open to full-time opportunities, consulting projects, 
              and collaborative research initiatives.
            </p>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="contact-form-wrapper"
        >
          <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input 
                type="text"
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="John Doe"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Your Email</label>
              <input 
                type="email"
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="john@example.com"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Your Message</label>
              <textarea
                id="message"
                rows="6"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
                required
              />
            </div>

            <button
              type="submit"
              className="submit-button"
              disabled={loading}
            >
              {loading ? (
                'Sending...'
              ) : (
                <>
                  <SendIcon />
                  Send Message
                </>
              )}
            </button>
          </form>
        </motion.div>
      </div>

      <style jsx>{`
        .contact-wrapper {
          max-width: 1280px;
          margin: 0 auto;
        }

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

        .contact-content {
          display: grid;
          grid-template-columns: 400px 1fr;
          gap: 4rem;
        }

        .contact-info {
          background: #FAFAFA;
          border-radius: 16px;
          padding: 2.5rem;
          border: 1px solid #E5E5E5;
          height: fit-content;
        }

        .info-title {
          font-size: 1.25rem;
          font-weight: 600;
          color: #0A0A0A;
          margin-bottom: 2rem;
        }

        .info-items {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          margin-bottom: 2rem;
        }

        .info-item {
          display: flex;
          gap: 1rem;
        }

        .info-icon {
          width: 40px;
          height: 40px;
          border-radius: 8px;
          background: #FFFFFF;
          border: 1px solid #E5E5E5;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #0A0A0A;
          flex-shrink: 0;
        }

        .info-label {
          font-size: 0.875rem;
          font-weight: 600;
          color: #999999;
          margin-bottom: 0.25rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .info-value {
          font-size: 0.9375rem;
          color: #0A0A0A;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        a.info-value:hover {
          color: #666666;
        }

        .info-note {
          padding-top: 2rem;
          border-top: 1px solid #E5E5E5;
        }

        .info-note p {
          font-size: 0.875rem;
          line-height: 1.6;
          color: #666666;
        }

        .contact-form-wrapper {
          background: #FFFFFF;
          border-radius: 16px;
          padding: 2.5rem;
          border: 1px solid #E5E5E5;
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .form-group label {
          font-size: 0.875rem;
          font-weight: 600;
          color: #0A0A0A;
        }

        .form-group input,
        .form-group textarea {
          padding: 0.875rem 1.25rem;
          border: 1px solid #E5E5E5;
          border-radius: 8px;
          font-size: 0.9375rem;
          color: #0A0A0A;
          background: #FAFAFA;
          transition: all 0.3s ease;
          font-family: inherit;
        }

        .form-group input:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: #0A0A0A;
          background: #FFFFFF;
        }

        .form-group textarea {
          resize: vertical;
          min-height: 120px;
        }

        .submit-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
          padding: 1rem 2rem;
          background: #0A0A0A;
          color: #FFFFFF;
          border: 2px solid #0A0A0A;
          border-radius: 8px;
          font-size: 0.9375rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .submit-button:hover:not(:disabled) {
          background: #FFFFFF;
          color: #0A0A0A;
        }

        .submit-button:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        @media (max-width: 968px) {
          .contact-content {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }
        }

        @media (max-width: 768px) {
          .section-header {
            margin-bottom: 3rem;
          }

          .section-description {
            font-size: 1rem;
          }

          .contact-info,
          .contact-form-wrapper {
            padding: 2rem 1.5rem;
          }

          .contact-content {
            gap: 2rem;
          }
        }
      `}</style>
    </div>
  );
};

export default SectionWrapper(Contact, 'contact');