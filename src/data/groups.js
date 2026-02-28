import { piData } from './pis';

export const groupsData = {
    'theory': {
        id: 'theory',
        name: 'Theory Group',
        description: 'The Theory Group focuses on fundamental quantum mechanical modeling and computational materials science. Using advanced DFT and machine learning frameworks, the team identifies promising candidate materials and predicts their coherence times prior to synthesis. Over the past year, they have screened thousands of theoretical compounds and optimized the predictive algorithms that guide the experimental efforts.',
        pis: piData.filter(pi => pi.group === 'Theory'),
        members: [
            { name: 'Dr. Alan Turing IV', role: 'Postdoc', institution: 'MIT' },
            { name: 'Samantha Vance', role: 'PhD Candidate', institution: 'Stanford' },
            { name: 'Li Wei', role: 'PhD Candidate', institution: 'Caltech' },
            { name: 'Dr. Hassan Oumar', role: 'Research Scientist', institution: 'MIT' }
        ],
        contact: {
            email: 'theory-lead@muri-quantum.edu',
            location: 'MIT Center for Theoretical Physics, Bldg 6',
            phone: '+1 (555) 019-2831'
        },
        pastWork: [
            { title: 'Predictive Modeling of Topological Insulators', link: '#' },
            { title: 'Ab Initio Simulations of Spin-Orbit Coupling', link: '#' },
            { title: 'Machine Learning in Quantum Materials Discovery', link: '#' }
        ]
    },
    'synthesis': {
        id: 'synthesis',
        name: 'Synthesis Group',
        description: 'The Synthesis Group is responsible for the actual fabrication of the materials predicted by the Theory team. Specializing in Molecular Beam Epitaxy (MBE) and specialized Chemical Vapor Deposition (CVD), they focus on growing ultra-high purity crystals. Their work is critical in ensuring the predicted quantum states can exist in real-world samples without being destroyed by defects or impurities.',
        pis: piData.filter(pi => pi.group === 'Synthesis'),
        members: [
            { name: 'Dr. Julia Torres', role: 'Postdoc', institution: 'UC Berkeley' },
            { name: 'Michael Chang', role: 'PhD Candidate', institution: 'Penn State' },
            { name: 'Sarah O\'Brien', role: 'PhD Candidate', institution: 'UC Berkeley' },
            { name: 'Kevin Durant', role: 'Lab Manager', institution: 'Penn State' }
        ],
        contact: {
            email: 'synthesis-lead@muri-quantum.edu',
            location: 'UC Berkeley Materials Science Division, Lab 402',
            phone: '+1 (555) 019-5552'
        },
        pastWork: [
            { title: 'Epitaxial Growth of 2D Transition Metal Dichalcogenides', link: '#' },
            { title: 'Defect Engineering in Complex Oxides', link: '#' },
            { title: 'High-Temperature Superconductor Synthesis Protocols', link: '#' }
        ]
    },
    'processing': {
        id: 'processing',
        name: 'Processing Group',
        description: 'The Processing Group takes the raw, pure materials from the Synthesis team and fabricates functional quantum devices. This involves nano-lithography, adding electrical contacts, and performing rigorous QA testing at cryogenic and room temperatures. Their breakthrough in contact resistance this year was the final step needed to measure room-temperature coherence.',
        pis: piData.filter(pi => pi.group === 'Processing'),
        members: [
            { name: 'Dr. David Kim', role: 'Postdoc', institution: 'Georgia Tech' },
            { name: 'Emily Rostron', role: 'PhD Candidate', institution: 'UIUC' },
            { name: 'Carlos Mendez', role: 'PhD Candidate', institution: 'Georgia Tech' },
            { name: 'Dr. Anita Desai', role: 'Integration Engineer', institution: 'UIUC' }
        ],
        contact: {
            email: 'processing-lead@muri-quantum.edu',
            location: 'Georgia Tech Nanotechnology Research Center',
            phone: '+1 (555) 019-8819'
        },
        pastWork: [
            { title: 'Low-Resistivity Contacts for Quantum Dots', link: '#' },
            { title: 'Cryogenic Device Characterization Techniques', link: '#' },
            { title: 'Scalable Nano-fabrication for Qubit Arrays', link: '#' }
        ]
    }
};
