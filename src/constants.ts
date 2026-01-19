import type { Department, EventItem, NavItem } from './types';

export const COLORS = {
  black: '#1A1C20',
  offwhite: '#F8F7EB',
  teal: '#1E917D',
  coral: '#CD5B43',
  stone: '#ADA596',
  graphite: '#464645',
};

export const DEPARTMENTS: Department[] = [
  {
    id: 'physics',
    name: 'Physics',
    color: '#1E917D',
    iconName: 'Atom',
    description: 'Exploring the fundamental laws of nature, from classical mechanics to modern quantum physics and applications in technology.',
    courses: ['Mechanics', 'Electromagnetism', 'Quantum Mechanics', 'Statistical Physics', 'Optics'],
    research: ['Condensed Matter Physics', 'Renewable Energy Systems', 'Computational Physics'],
    careers: ['Research Scientist', 'Applied Physicist', 'Data Analyst', 'Lab Technologist', 'Lecturer'],
    headOfDept: 'Prof. Olasunkanmi Isaac Olusola'
  },
  {
    id: 'chemistry',
    name: 'Chemistry',
    color: '#CD5B43',
    iconName: 'FlaskConical',
    description: 'Understanding matter and its transformations, bridging theory with practical laboratory science.',
    courses: ['Organic Chemistry', 'Physical Chemistry', 'Analytical Chemistry', 'Inorganic Chemistry'],
    research: ['Environmental Chemistry', 'Materials Chemistry', 'Pharmaceutical Chemistry'],
    careers: ['Analytical Chemist', 'Chemical Researcher', 'Quality Control Specialist', 'Lecturer'],
    headOfDept: 'Prof. Olusegun Opeyemi Ayejuyo'
  },
  {
    id: 'geosciences',
    name: 'Geosciences',
    color: '#1A7F6B',
    iconName: 'Globe2',
    description: 'Studying Earth’s structure, history, and processes, integrating geology, geophysics, and environmental earth science.',
    courses: ['Mineralogy & Petrology', 'Structural Geology', 'Seismology', 'Geological Mapping'],
    research: ['Oil & Gas Exploration', 'Climate Change History', 'Groundwater Studies'],
    careers: ['Geologist', 'Geoscience Consultant', 'Environmental Specialist', 'Field Researcher'],
    headOfDept: 'Prof. Lukumon Adeoti'
  },
  {
    id: 'marine',
    name: 'Marine Sciences',
    color: '#2FA4A9',
    iconName: 'Waves',
    description: 'The study of marine ecosystems, ocean processes, and coastal environments that support global ecological balance.',
    courses: ['Oceanography', 'Marine Biology', 'Fisheries Science', 'Aquatic Ecology'],
    research: ['Marine Pollution & Conservation', 'Coastal Dynamics', 'Sustainable Fisheries'],
    careers: ['Marine Biologist', 'Oceanographer', 'Environmental Consultant', 'Conservation Scientist'],
    headOfDept: 'Prof. Ikenna Charles Onyema'
  },
  {
    id: 'mathematics',
    name: 'Mathematics',
    color: '#1A1C20',
    iconName: 'Sigma',
    description: 'The theoretical and applied study of numbers, structures, models, and problem‑solving methods.',
    courses: ['Calculus', 'Linear Algebra', 'Differential Equations', 'Real Analysis'],
    research: ['Mathematical Modelling', 'Number Theory', 'Applied Mathematics'],
    careers: ['Quantitative Analyst', 'Actuary', 'Data Scientist', 'Academic Researcher'],
    headOfDept: 'Prof. Olutunji Isreal Abiala'
  },
  {
    id: 'statistics',
    name: 'Statistics',
    color: '#464645',
    iconName: 'BarChart3',
    description: 'The science of data: modelling uncertainty, inference, and decision‑making using statistical principles.',
    courses: ['Probability Theory', 'Regression Analysis', 'Experimental Design', 'Time Series'],
    research: ['Big Data Analytics', 'Biostatistics', 'Econometric Modelling'],
    careers: ['Statistician', 'Risk Analyst', 'Data Scientist', 'Market Research Analyst'],
    headOfDept: 'Dr. Edesiri Bridget Nkemnole'
  },
];


export const EVENTS: EventItem[] = [
  {
    id: '1',
    title: 'Science & Tech Innovation Week',
    date: '2023-11-15',
    category: 'Academic',
    description: 'Annual exhibition of student projects and research papers featuring industry leaders.'
  },
  {
    id: '2',
    title: 'Geological Field Trip: Olumo Rock',
    date: '2023-11-20',
    category: 'Research',
    description: 'Practical field experience for 300L and 400L Geosciences students.'
  },
  {
    id: '3',
    title: 'Career Fair 2023',
    date: '2023-12-05',
    category: 'Career',
    description: 'Connect with top employers in Oil & Gas, Tech, and Research institutions.'
  },
  {
    id: '4',
    title: 'PESSA Dinner & Awards Night',
    date: '2023-12-15',
    category: 'Social',
    description: 'Celebrating excellence among students and faculty staff.'
  }
];

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'Departments', path: '/departments' },
  { label: 'Events', path: '/events' },
  { label: 'Virtual Tour', path: '/tour' },
  { label: 'Portal', path: '/portal' },
  { label: 'About', path: '/about' },
];