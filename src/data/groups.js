import { piData } from './pis';

export const groupsData = {
    'theory': {
        id: 'theory',
        name: 'Theory Group',
        description: 'The Theory Group focuses on asdf.',
        pis: piData.filter(pi => pi.group === 'Theory'),
        members: [
            { name: 'asdf', role: 'asdf', institution: 'asdf' },
            { name: 'asdf', role: 'asdf', institution: 'asdf' },
            { name: 'asdf', role: 'asdf', institution: 'asdf' },
            { name: 'asdf', role: 'asdf', institution: 'asdf' }
        ],
        contact: {
            email: 'asdf@asdf.edu',
            location: 'asdf',
            phone: 'asdf'
        },
        pastWork: [
            { title: 'Modeling asdf', link: '#' },
            { title: 'Ab Initio asdf', link: '#' },
            { title: 'Machine Learning in asdf', link: '#' }
        ]
    },
    'synthesis': {
        id: 'synthesis',
        name: 'Synthesis Group',
        description: 'The Synthesis Group is responsible for asdf',
        pis: piData.filter(pi => pi.group === 'Synthesis'),
        members: [
            { name: 'Dr. Akachukwu asdf', role: 'Postdoctoral Researcher', institution: 'MIT' },
            { name: 'Benjamin Stovall', role: 'Graduate Researcher', institution: 'Penn State' },
            { name: 'asdf', role: 'Graduate Researcher', institution: 'asdf' },
            { name: 'asdf', role: 'Graduate Researcher', institution: 'asdf' }
        ],
        contact: {
            email: 'asdf',
            location: 'asdf',
            phone: '+1 (asdf) adsf-asdf'
        },
        pastWork: [
            { title: 'Epitaxial Growth asdf', link: '#' },
            { title: 'Defect asfd', link: '#' },
            { title: 'High-Temperature asdf', link: '#' }
        ]
    },
    'processing': {
        id: 'processing',
        name: 'Processing Group',
        description: 'The Processing Group asdf.',
        pis: piData.filter(pi => pi.group === 'Processing'),
        members: [
            { name: 'asdf', role: 'Pasdf', institution: 'asdf' },
            { name: 'asdf', role: 'asdf', institution: 'asdf' },
            { name: 'asdf', role: 'Pasdf', institution: 'asdf' },
            { name: 'asdf', role: 'asdf', institution: 'asdf' }
        ],
        contact: {
            email: 'asdf',
            location: 'asdf',
            phone: 'asdf9'
        },
        pastWork: [
            { title: 'Low-Resistivity asdf', link: '#' },
            { title: 'Cryogenic asdf', link: '#' },
            { title: 'Scalable asdf', link: '#' }
        ]
    }
};
