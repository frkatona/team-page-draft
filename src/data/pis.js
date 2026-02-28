import adriVanDuin from '../assets/headshots/AdriVanDuin.png';
import aiichiroNakano from '../assets/headshots/AiichiroNakano.png';
import priyaVashishta from '../assets/headshots/PriyaVashishta.png';
import mikeHickner from '../assets/headshots/MikeHickner.png';
import robHickey from '../assets/headshots/RobHickey.png';
import benLear from '../assets/headshots/BenLear.png';
import jpMaria from '../assets/headshots/JPMaria.png';

export const piData = [
  // Theory Group (3)
  {
    id: 'theory-1',
    name: 'Dr. Adri VanDuin',
    role: 'Lead Theorist',
    group: 'Theory',
    institution: 'Penn State',
    image: adriVanDuin,
  },
  {
    id: 'theory-2',
    name: 'Dr. Aiichiro Nakano',
    role: 'Computational Lead',
    group: 'Theory',
    institution: 'USC',
    image: aiichiroNakano,
  },
  {
    id: 'theory-3',
    name: 'Dr. Priya Vashishta',
    role: 'Quantum Modeling',
    group: 'Theory',
    institution: 'USC',
    image: priyaVashishta,
  },

  // Synthesis Group (2)
  {
    id: 'synthesis-1',
    name: 'Dr. Mike Hickner',
    role: 'Materials Synthesis',
    group: 'Synthesis',
    institution: 'Penn State',
    image: mikeHickner,
  },
  {
    id: 'synthesis-2',
    name: 'Dr. Rob Hickey',
    role: 'Organic Chemistry',
    group: 'Synthesis',
    institution: 'Penn State',
    image: robHickey,
  },

  // Processing Group (2)
  {
    id: 'processing-1',
    name: 'Dr. Ben Lear',
    role: 'Device Fabrication',
    group: 'Processing',
    institution: 'Penn State',
    image: benLear,
  },
  {
    id: 'processing-2',
    name: 'Dr. JP Maria',
    role: 'Testing & QA',
    group: 'Processing',
    institution: 'Penn State',
    image: jpMaria,
  }
];

export const groupColors = {
  'Theory': 'var(--theory-color)',
  'Synthesis': 'var(--synthesis-color)',
  'Processing': 'var(--processing-color)'
};
