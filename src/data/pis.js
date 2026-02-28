import adriVanDuin from '../assets/headshots/AdriVanDuin.png';
import aiichiroNakano from '../assets/headshots/AiichiroNakano.png';
import priyaVashishta from '../assets/headshots/PriyaVashishta.png';
import mikeHickner from '../assets/headshots/MikeHickner.png';
import robHickey from '../assets/headshots/RobHickey.png';
import alexRadosevich from '../assets/headshots/AlexRadosevich.png';
import benLear from '../assets/headshots/BenLear.png';
import jpMaria from '../assets/headshots/JPMaria.png';

export const piData = [
  // Theory Group (3)
  {
    id: 'theory-1',
    name: 'Prof. Adri Van Duin',
    role: 'ReaxFF Modeling',
    group: 'Theory',
    institution: 'Penn State',
    image: adriVanDuin,
  },
  {
    id: 'theory-2',
    name: 'Prof. Aiichiro Nakano',
    role: 'Neural Network Dynamics',
    group: 'Theory',
    institution: 'USC',
    image: aiichiroNakano,
  },
  {
    id: 'theory-3',
    name: 'Prof. Priya Vashishta',
    role: 'asdf',
    group: 'Theory',
    institution: 'USC',
    image: priyaVashishta,
  },

  // Synthesis Group (3)
  {
    id: 'synthesis-1',
    name: 'Prof. Mike Hickner',
    role: 'Additively-manufactured Pre-ceramics',
    group: 'Synthesis',
    institution: 'Michigan State',
    image: mikeHickner,
  },
  {
    id: 'synthesis-2',
    name: 'Prof. Rob Hickey',
    role: 'ROMP Pre-ceramics',
    group: 'Synthesis',
    institution: 'Penn State',
    image: robHickey,
  },
  {
    id: 'synthesis-3',
    name: 'Prof. Alexander Radosevich',
    role: 'Tailored Molecular Pre-ceramics',
    group: 'Synthesis',
    institution: 'MIT',
    image: alexRadosevich,
  },

  // Processing Group (2)
  {
    id: 'processing-1',
    name: 'Prof. Ben Lear',
    role: 'Laser Processing',
    group: 'Processing',
    institution: 'Penn State',
    image: benLear,
  },
  {
    id: 'processing-2',
    name: 'Prof. JP Maria',
    role: 'Materials Characterization',
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
