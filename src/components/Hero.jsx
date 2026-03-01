import { Link } from 'react-router-dom';
import './Hero.css';
import { piData, groupColors } from '../data/pis';

const Hero = () => {
    const theoryGroup = piData.filter(pi => pi.group === 'Theory');
    const synthesisGroup = piData.filter(pi => pi.group === 'Synthesis');
    const processingGroup = piData.filter(pi => pi.group === 'Processing');

    return (
        <section className="hero-section">
            <div className="container hero-container animate-fade-in">
                {/* Mission Statement */}
                <div className="hero-content">
                    <h1 className="mission-title">
                        Mapping the latest advancements in <span className="highlight">ceramic coatings</span>
                    </h1>
                    <h2 className="mission-subtitle">
                        uniting <span className="highlight">synthesis</span>, <span className="highlight">processing</span>, and <span className="highlight">theory</span> for advanced materials for the 2025-2026 MURI ensemble
                    </h2>
                </div>

                <div className="group-cluster synthesis-cluster">
                    <Link to="/group/synthesis" className="group-label-link">
                        <h3 className="group-label" style={{ color: groupColors['Synthesis'], borderColor: groupColors['Synthesis'] }}>Synthesis</h3>
                    </Link>
                    <div className="pi-row">
                        {synthesisGroup.map(pi => (
                            <div key={pi.id} className="pi-card">
                                <div className="pi-image-wrapper">
                                    <img src={pi.image} alt={pi.name} />
                                    <div className="pi-glow" style={{ backgroundColor: groupColors['Synthesis'] }}></div>
                                </div>
                                <div className="pi-info">
                                    <h4>{pi.name}</h4>
                                    <span className="pi-role">{pi.role}</span>
                                    <span className="pi-institution">{pi.institution}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="group-cluster theory-cluster">
                    <Link to="/group/theory" className="group-label-link">
                        <h3 className="group-label" style={{ color: groupColors['Theory'], borderColor: groupColors['Theory'] }}>Theory</h3>
                    </Link>
                    <div className="pi-row">
                        {theoryGroup.map(pi => (
                            <div key={pi.id} className="pi-card">
                                <div className="pi-image-wrapper">
                                    <img src={pi.image} alt={pi.name} />
                                    <div className="pi-glow" style={{ backgroundColor: groupColors['Theory'] }}></div>
                                </div>
                                <div className="pi-info">
                                    <h4>{pi.name}</h4>
                                    <span className="pi-role">{pi.role}</span>
                                    <span className="pi-institution">{pi.institution}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="group-cluster processing-cluster">
                    <Link to="/group/processing" className="group-label-link">
                        <h3 className="group-label" style={{ color: groupColors['Processing'], borderColor: groupColors['Processing'] }}>Processing</h3>
                    </Link>
                    <div className="pi-row">
                        {processingGroup.map(pi => (
                            <div key={pi.id} className="pi-card">
                                <div className="pi-image-wrapper">
                                    <img src={pi.image} alt={pi.name} />
                                    <div className="pi-glow" style={{ backgroundColor: groupColors['Processing'] }}></div>
                                </div>
                                <div className="pi-info">
                                    <h4>{pi.name}</h4>
                                    <span className="pi-role">{pi.role}</span>
                                    <span className="pi-institution">{pi.institution}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Hero;
