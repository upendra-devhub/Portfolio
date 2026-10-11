export interface SkillItem {
  name: string;
  color: string;
  textColor?: string;
  rotation: number;
  shapeVariant: 0 | 1 | 2 | 3;
  icon?: string;
}

// 25 technologies prioritized by actual usage in Upendra's projects and studies
// Flat list - NO category groupings
export const skillsData: SkillItem[] = [
  // Row 1 / Primary Project Stack
  {
    name: 'Node.js',
    color: '#BBF7D0', // Mint green
    rotation: -1.2,
    shapeVariant: 0,
    icon: 'nodejs',
  },
  {
    name: 'Express.js',
    color: '#FEF08A', // Pale yellow
    rotation: 1.4,
    shapeVariant: 1,
    icon: 'express',
  },
  {
    name: 'MongoDB',
    color: '#BAE6FD', // Light blue
    rotation: -0.9,
    shapeVariant: 2,
    icon: 'mongodb',
  },
  {
    name: 'JavaScript',
    color: '#FDE047', // Pale yellow / gold
    rotation: 1.1,
    shapeVariant: 3,
    icon: 'javascript',
  },
  {
    name: 'React',
    color: '#BFDBFE', // Soft blue
    rotation: -1.5,
    shapeVariant: 0,
    icon: 'react',
  },
  {
    name: 'HTML',
    color: '#FED7AA', // Peach
    rotation: 0.8,
    shapeVariant: 1,
    icon: 'html',
  },
  {
    name: 'CSS',
    color: '#FBCFE8', // Soft pink
    rotation: -1.0,
    shapeVariant: 2,
    icon: 'css',
  },
  {
    name: 'Python',
    color: '#FEF9C3', // Pale lemon
    rotation: 1.3,
    shapeVariant: 3,
    icon: 'python',
  },

  // Row 2 / Modern Web & Data Stack
  {
    name: 'Next.js',
    color: '#DDD6FE', // Lavender
    rotation: -1.1,
    shapeVariant: 0,
    icon: 'nextjs',
  },
  {
    name: 'SQL',
    color: '#99F6E4', // Soft teal
    rotation: 1.2,
    shapeVariant: 1,
    icon: 'sql',
  },
  {
    name: 'Mongoose',
    color: '#FECDD3', // Soft coral
    rotation: -1.3,
    shapeVariant: 2,
    icon: 'mongoose',
  },
  {
    name: 'Docker',
    color: '#BAE6FD', // Light blue
    rotation: 0.9,
    shapeVariant: 3,
    icon: 'docker',
  },
  {
    name: 'AWS',
    color: '#FDE68A', // Warm sand
    rotation: -1.4,
    shapeVariant: 0,
    icon: 'aws',
  },
  {
    name: 'TypeScript',
    color: '#BFDBFE', // Light blue
    rotation: 1.5,
    shapeVariant: 1,
    icon: 'typescript',
  },
  {
    name: 'Tailwind CSS',
    color: '#99F6E4', // Soft teal
    rotation: -0.7,
    shapeVariant: 2,
    icon: 'tailwind',
  },
  {
    name: 'Git',
    color: '#FED7AA', // Peach
    rotation: 1.0,
    shapeVariant: 3,
    icon: 'git',
  },

  // Row 3 / Tools, Languages & Ecosystem
  {
    name: 'GitHub',
    color: '#DDD6FE', // Lavender
    rotation: -1.2,
    shapeVariant: 0,
    icon: 'github',
  },
  {
    name: 'C',
    color: '#FBCFE8', // Soft pink
    rotation: 0.9,
    shapeVariant: 1,
  },
  {
    name: 'C++',
    color: '#FEF08A', // Pale yellow
    rotation: -1.1,
    shapeVariant: 2,
  },
  {
    name: 'Java',
    color: '#FED7AA', // Peach
    rotation: 1.3,
    shapeVariant: 3,
    icon: 'java',
  },
  {
    name: 'Electron',
    color: '#BAE6FD', // Light blue
    rotation: -0.8,
    shapeVariant: 0,
    icon: 'electron',
  },
  {
    name: 'Multer',
    color: '#BBF7D0', // Mint green
    rotation: 1.2,
    shapeVariant: 1,
  },
  {
    name: 'Cloudinary',
    color: '#E9D5FF', // Soft lilac
    rotation: -1.4,
    shapeVariant: 2,
    icon: 'cloudinary',
  },
  {
    name: 'Framer Motion',
    color: '#FBCFE8', // Soft pink
    rotation: 1.0,
    shapeVariant: 3,
    icon: 'framermotion',
  },
  {
    name: 'Recharts',
    color: '#FEF9C3', // Pale lemon
    rotation: -0.9,
    shapeVariant: 0,
    icon: 'recharts',
  },
];
