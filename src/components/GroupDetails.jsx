import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Mail, MapPin, Phone, ExternalLink } from 'lucide-react';
import { groupsData } from '../data/groups';
import { groupColors } from '../data/pis';
import './GroupDetails.css';

const GroupDetails = () => {
    const { groupId } = useParams();
    const group = groupsData[groupId.toLowerCase()];

    if (!group) {
        return (
            <div className="container" style={{ paddingTop: '8rem', textAlign: 'center' }}>
                <h2>Group not found.</h2>
                <Link to="/" className="back-link"><ArrowLeft size={16} /> Return Home</Link>
            </div>
        );
    }

    const color = groupColors[group.name.split(' ')[0]];

    return (
        <div className="group-details-page animate-fade-in">
            <div className="container">
                <Link to="/" className="back-link"><ArrowLeft size={16} /> Back to Roadmap</Link>

                <header className="group-header" style={{ borderBottomColor: color }}>
                    <h1 style={{ color }}>{group.name}</h1>
                    <p className="group-description">{group.description}</p>
                </header>

                <div className="group-content-grid">
                    {/* Main Content (PIs and Members) */}
                    <div className="main-content">
                        <section className="members-section">
                            <h3>Principal Investigators</h3>
                            <div className="pi-grid">
                                {group.pis.map(pi => (
                                    <div key={pi.id} className="detail-pi-card">
                                        <img src={pi.image} alt={pi.name} className="detail-pi-img" style={{ borderColor: color }} />
                                        <div className="detail-pi-info">
                                            <h4>{pi.name}</h4>
                                            <span className="role">{pi.role}</span>
                                            <span className="institution">{pi.institution}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section className="members-section">
                            <h3>Contributing Research Members</h3>
                            <div className="members-grid">
                                {group.members.map((member, index) => (
                                    <div key={index} className="member-card">
                                        <div className="member-avatar">{member.name.charAt(0)}</div>
                                        <div className="member-info">
                                            <h4>{member.name}</h4>
                                            <span className="role">{member.role}</span>
                                            <span className="institution">{member.institution}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>

                    {/* Sidebar (Contact and Past Work) */}
                    <div className="sidebar">
                        <section className="sidebar-widget">
                            <h3>Contact Information</h3>
                            <ul className="contact-list">
                                <li>
                                    <Mail size={18} color={color} />
                                    <span>{group.contact.email}</span>
                                </li>
                                <li>
                                    <MapPin size={18} color={color} />
                                    <span>{group.contact.location}</span>
                                </li>
                                <li>
                                    <Phone size={18} color={color} />
                                    <span>{group.contact.phone}</span>
                                </li>
                            </ul>
                        </section>

                        <section className="sidebar-widget">
                            <h3>Past Significant Work</h3>
                            <ul className="past-work-list">
                                {group.pastWork.map((work, index) => (
                                    <li key={index}>
                                        <a href={work.link} target="_blank" rel="noopener noreferrer">
                                            <ExternalLink size={14} />
                                            {work.title}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </section>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default GroupDetails;
