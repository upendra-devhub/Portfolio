export interface ProjectItem {
  number: string;
  title: string;
  subtitle: string;
  date: string;
  description: string;
  theme: 'pink' | 'black';
  cardBg: string;
  textColor: string;
  tabBg: string;
  tabTextColor: string;
  image: string;
  tags: string[];
  link: string;
}

export const projectsData: ProjectItem[] = [
  {
    number: '01',
    title: 'Healthopia',
    subtitle: 'FULL-STACK WELLNESS COMMUNITY',
    date: '● MAR 19, 2026',
    description:
      'A full-stack wellness community platform for discovering, sharing, and tracking healthier habits.',
    theme: 'pink',
    cardBg: '#FE4C82', // Vivid pink / magenta matching reference
    textColor: '#191510',
    tabBg: '#FE4C82',
    tabTextColor: '#191510',
    image: '/images/projects/healthopia-placeholder.jpg',
    tags: ['FULL-STACK', 'NODE.JS', 'MONGODB', 'CLOUDINARY'],
    link: 'https://healthopia-backup.onrender.com/',
  },
  {
    number: '02',
    title: 'Complaint Desk',
    subtitle: 'FULL-STACK COMPLAINT MANAGEMENT',
    date: '● MAR 24, 2026',
    description:
      'A full-stack complaint management platform for submitting, tracking, and managing issues through a structured workflow.',
    theme: 'black',
    cardBg: '#18181B', // Deep black / near-black matching reference
    textColor: '#FFFFFF',
    tabBg: '#18181B',
    tabTextColor: '#FFFFFF',
    image: '/images/projects/complaint-desk-placeholder.jpg',
    tags: ['FULL-STACK', 'EXPRESS.JS', 'MONGODB', 'CLOUDINARY'],
    link: 'https://complaint-management-stystem.vercel.app/',
  },
];
