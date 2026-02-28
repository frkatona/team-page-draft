import { Link } from 'react-router-dom';
import './Hero.css';
import { piData, groupColors } from '../data/pis';

const Hero = () => {
    const theoryGroup = piData.filter(pi => pi.group === 'Theory');
    const synthesisGroup = piData.filter(pi => pi.group === 'Synthesis');
    const processingGroup = piData.filter(pi => pi.group === 'Processing');

    return (
        <section className="hero-section">
            <div className="container hero-container">
                {/* Mission Statement */}
                <div className="hero-content animate-fade-in">
                    <h1 className="mission-title">
                        Mapping Advancements in <span className="highlight">Ceramic Coatings</span>
                    </h1>
                    <p className="mission-text">
                        A cross-disciplinary collaboration bridging the gap between theory, synthesis, and processing to solve the most critical challenges in ceramics coatings over the last year.
                    </p>
                </div>

                {/* PI Groups */}
                <div className="hero-groups animate-fade-in" style={{ animationDelay: '0.2s' }}>

                    <div className="group-cluster">
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
                                        <span>{pi.role}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="group-cluster">
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
                                        <span>{pi.role}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="group-cluster">
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
                                        <span>{pi.role}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Hero;
