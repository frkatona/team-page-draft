import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FileText, X, ExternalLink, Users } from 'lucide-react';
import { timelineData } from '../data/timeline';
import { groupColors } from '../data/pis';
import './Timeline.css';

const Timeline = () => {
    const [selectedMilestone, setSelectedMilestone] = useState(null);

    const openModal = (milestone) => setSelectedMilestone(milestone);
    const closeModal = () => setSelectedMilestone(null);

    return (
        <section className="timeline-section">
            <div className="container">

                <div className="timeline-header animate-fade-in">
                    <h2>Tangible steps toward<span className="highlight">laser-processed B4C and SiC coatings</span></h2>
                    <p>A chronological roadmap tracing our progress over the last year, highlighting 6 critical publications.</p>
                </div>

                <div className="timeline-container">
                    {/* Vertical Line */}
                    <div className="timeline-line"></div>

                    {timelineData.map((milestone, index) => {
                        const isEven = index % 2 === 0;
                        return (
                            <div
                                key={milestone.id}
                                className={`timeline-item ${isEven ? 'left' : 'right'}`}
                            >
                                <div className="timeline-content" onClick={() => openModal(milestone)}>
                                    <div className="timeline-date">{milestone.date}</div>
                                    <h3 className="timeline-title">{milestone.title}</h3>
                                    <div className="timeline-labs">
                                        {milestone.labs.map(lab => (
                                            <span
                                                key={lab}
                                                className="lab-badge"
                                                style={{ backgroundColor: `${groupColors[lab]}20`, color: groupColors[lab], border: `1px solid ${groupColors[lab]}50` }}
                                            >
                                                {lab}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="timeline-interactive-hint">
                                        <FileText size={16} /> Read Paper Details
                                    </div>
                                </div>
                                {/* Timeline node marker */}
                                <div className="timeline-node">
                                    <div className="node-inner"></div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Modal */}
            {selectedMilestone && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal-content" onClick={e => e.stopPropagation()}>
                        <button className="modal-close" onClick={closeModal}><X size={24} /></button>

                        <div className="modal-header">
                            <span className="modal-date">{selectedMilestone.date}</span>
                            <h2>{selectedMilestone.title}</h2>
                            <div className="modal-labs">
                                <Users size={16} color="var(--text-muted)" />
                                {selectedMilestone.labs.map((lab, i) => (
                                    <span key={lab} >
                                        <Link to={`/group/${lab.toLowerCase()}`} className="modal-lab-link" style={{ color: groupColors[lab] }}>{lab}</Link>
                                        {i < selectedMilestone.labs.length - 1 ? <span style={{ color: 'var(--text-muted)' }}>, </span> : ''}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="modal-body">
                            <div className="paper-info">
                                <h4>Publication</h4>
                                <p className="paper-name">{selectedMilestone.paper}</p>
                                <p className="paper-journal">{selectedMilestone.journal}</p>
                            </div>

                            <div className="paper-description">
                                <h4>Summary</h4>
                                <p>{selectedMilestone.description}</p>
                            </div>

                            <a href={selectedMilestone.link} className="modal-link" target="_blank" rel="noopener noreferrer">
                                View Full Paper <ExternalLink size={16} />
                            </a>
                        </div>
                    </div>
                </div>
            )}

        </section>
    );
};

export default Timeline;
