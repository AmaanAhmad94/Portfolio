import project1 from '../assets/images/project-1.svg';
import project2 from '../assets/images/project-2.svg';

export const projects = [
  {
    id: 1,
    title: 'DevPortfolio',
    category: 'Frontend',
    description: 'A premium personal portfolio website with animations, dark mode, and a fully data-driven architecture.',
    image: project1,
    techStack: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion'],
    github: 'https://github.com/AmaanAhmad94/Portfolio',
    liveDemo: 'https://portfolio-git-main-amaan15.vercel.app/',
    features: ['Responsive design', 'Dark mode support', 'Scroll animations'],
  },
  {
    id: 2,
    title: 'Zomato Clone',
    category: 'Full Stack',
    description: 'A full-stack food delivery clone with authentication, cart, and order management.',
    image: project2,
    techStack: ['React', 'Node.js', 'Express', 'MongoDB'],
    github: 'https://github.com/AmaanAhmad94/Zomato-Clone',
    liveDemo: 'https://zomato-clone-git-main-amaan15.vercel.app/',
    features: ['User authentication', 'Cart functionality', 'Order tracking'],
  },
];

export const projectCategories = ['All', 'Frontend', 'Backend', 'Full Stack'];