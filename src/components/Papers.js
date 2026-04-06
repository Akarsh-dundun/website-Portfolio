import React from 'react';
import { motion } from 'framer-motion';
import { SectionWrapper } from '../hoc';
import { papers } from '../constants';
import { FileText, Download } from 'lucide-react';

const PaperCard = ({ paper, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="paper-card"
        >
            {/* Paper Icon/Image */}
            <div className="paper-icon-wrapper">
                {paper.image ? (
                    <img 
                        src={paper.image}
                        alt={paper.name}
                        className='paper-thumbnail'
                    />
                ) : (
                    <div className="paper-icon-placeholder">
                        <FileText size={40} strokeWidth={1.5} />
                    </div>
                )}
            </div>

            {/* Paper Content */}
            <div className='paper-content'>
                <div className="paper-header">
                    <h3 className='paper-title'>{paper.name}</h3>
                    {paper.status && (
                        <span className={`paper-status ${paper.status.toLowerCase()}`}>
                            {paper.status}
                        </span>
                    )}
                </div>

                <p className='paper-description'>{paper.description}</p>

                {/* Authors (if available) */}
                {paper.authors && (
                    <p className="paper-authors">
                        <strong>Authors:</strong> {paper.authors}
                    </p>
                )}

                {/* Venue/Journal (if available) */}
                {paper.venue && (
                    <p className="paper-venue">
                        <strong>Published in:</strong> {paper.venue}
                    </p>
                )}

                {/* Tags */}
                <div className='paper-tags'>
                    {paper.tags.map((tag) => (
                        <span key={tag.name} className="paper-tag">
                            {tag.name}
                        </span>
                    ))}
                </div>

                {/* Action Links */}
                <div className="paper-actions">
                    {paper.source_code_link && (
                        <a
                            href={paper.source_code_link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="paper-button primary"
                        >
                            <FileText size={18} />
                            Read Paper
                        </a>
                    )}
                    {paper.pdf_link && (
                        <a
                            href={paper.pdf_link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="paper-button secondary"
                        >
                            <Download size={18} />
                            Download
                        </a>
                    )}
                </div>
            </div>

            <style jsx>{`
                .paper-card {
                    background: #FFFFFF;
                    border-radius: 16px;
                    border: 1px solid #E5E5E5;
                    transition: all 0.3s ease;
                    display: flex;
                    gap: 2rem;
                    padding: 2rem;
                }

                .paper-card:hover {
                    transform: translateY(-4px);
                    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
                    border-color: #D0D0D0;
                }

                .paper-icon-wrapper {
                    flex-shrink: 0;
                    width: 120px;
                    height: 160px;
                }

                .paper-thumbnail {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    border-radius: 8px;
                    border: 1px solid #E5E5E5;
                }

                .paper-icon-placeholder {
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(135deg, #FAFAFA, #F5F5F5);
                    border-radius: 8px;
                    border: 1px solid #E5E5E5;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: #666666;
                }

                .paper-content {
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                    gap: 1rem;
                }

                .paper-header {
                    display: flex;
                    align-items: flex-start;
                    justify-content: space-between;
                    gap: 1rem;
                }

                .paper-title {
                    font-size: 1.375rem;
                    font-weight: 600;
                    color: #0A0A0A;
                    line-height: 1.3;
                    flex: 1;
                }

                .paper-status {
                    padding: 0.375rem 0.875rem;
                    border-radius: 6px;
                    font-size: 0.75rem;
                    font-weight: 600;
                    text-transform: uppercase;
                    letter-spacing: 0.05em;
                    white-space: nowrap;
                }

                .paper-status.published {
                    background: #E8F5E9;
                    color: #2E7D32;
                }

                .paper-status.preprint {
                    background: #FFF3E0;
                    color: #EF6C00;
                }

                .paper-status.ongoing {
                    background: #E3F2FD;
                    color: #1565C0;
                }

                .paper-description {
                    font-size: 0.9375rem;
                    line-height: 1.7;
                    color: #666666;
                }

                .paper-authors,
                .paper-venue {
                    font-size: 0.875rem;
                    color: #666666;
                    line-height: 1.6;
                }

                .paper-authors strong,
                .paper-venue strong {
                    color: #0A0A0A;
                    font-weight: 600;
                }

                .paper-tags {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 0.5rem;
                }

                .paper-tag {
                    padding: 0.375rem 0.875rem;
                    background: #F5F5F5;
                    border-radius: 6px;
                    font-size: 0.8125rem;
                    font-weight: 500;
                    color: #666666;
                }

                .paper-actions {
                    display: flex;
                    gap: 0.75rem;
                    margin-top: 0.5rem;
                }

                .paper-button {
                    display: inline-flex;
                    align-items: center;
                    gap: 0.5rem;
                    padding: 0.75rem 1.5rem;
                    border-radius: 8px;
                    font-size: 0.875rem;
                    font-weight: 600;
                    text-decoration: none;
                    transition: all 0.3s ease;
                    border: 1px solid;
                }

                .paper-button.primary {
                    background: #0A0A0A;
                    color: #FFFFFF;
                    border-color: #0A0A0A;
                }

                .paper-button.primary:hover {
                    background: #FFFFFF;
                    color: #0A0A0A;
                }

                .paper-button.secondary {
                    background: transparent;
                    color: #0A0A0A;
                    border-color: #E5E5E5;
                }

                .paper-button.secondary:hover {
                    background: #F5F5F5;
                    border-color: #0A0A0A;
                }

                @media (max-width: 768px) {
                    .paper-card {
                        flex-direction: column;
                        gap: 1.5rem;
                        padding: 1.5rem;
                    }

                    .paper-icon-wrapper {
                        width: 100%;
                        height: 200px;
                    }

                    .paper-header {
                        flex-direction: column;
                        gap: 0.75rem;
                    }

                    .paper-title {
                        font-size: 1.25rem;
                    }

                    .paper-actions {
                        flex-direction: column;
                    }

                    .paper-button {
                        justify-content: center;
                        width: 100%;
                    }
                }
            `}</style>
        </motion.div>
    );
};

const Papers = () => {
    return (
        <>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="section-header"
            >
                <p className="section-label">Research</p>
                <h2 className="section-title">Academic Papers</h2>
                <p className="section-description">
                    Peer-reviewed publications and ongoing research across machine 
                    learning, artificial intelligence, and related fields.
                </p>
            </motion.div>

            <div className='papers-list'>
                {papers.map((paper, index) => (
                    <PaperCard 
                        key={`paper-${index}`}
                        paper={paper}
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

                .papers-list {
                    display: flex;
                    flex-direction: column;
                    gap: 2rem;
                }

                @media (max-width: 768px) {
                    .section-header {
                        margin-bottom: 3rem;
                    }

                    .section-description {
                        font-size: 1rem;
                    }

                    .papers-list {
                        gap: 1.5rem;
                    }
                }
            `}</style>
        </>
    );
};

export default SectionWrapper(Papers, 'papers');