import project1 from '../assets/images/project-1.svg';
import project2 from '../assets/images/project-2.svg';
import project3 from '../assets/images/project-3.svg';
import project4 from '../assets/images/project-4.svg';

export const projects = [
  {
    id: 1,
    title: 'DevPortfolio',
    description:
      'A premium personal portfolio website with animations, dark mode, and a fully data-driven architecture.',
    image: project1,
    category: 'Frontend',
    techStack: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion'],
    github: 'https://github.com/amaanahmad/devportfolio',
    liveDemo: 'https://amaanahmad.dev',
    features: [
      'Responsive design',
      'Dark mode support',
      'Scroll animations',
      'Contact form integration',
    ],
  },
  {
    id: 2,
    title: 'TaskFlow API',
    description:
      'A RESTful task management backend with authentication, CRUD operations, and modular architecture.',
    image: project2,
    category: 'Backend',
    techStack: ['Node.js', 'Express', 'MongoDB', 'JWT'],
    github: 'https://github.com/amaanahmad/taskflow-api',
    liveDemo: 'https://taskflow-api.example.com',
    features: [
      'JWT authentication',
      'Role-based access',
      'Input validation',
      'Scalable folder structure',
    ],
  },
  {
    id: 3,
    title: 'ShopLite E-Commerce',
    description:
      'A modern e-commerce frontend with product filtering, cart management, and clean UI components.',
    image: project3,
    category: 'Full Stack',
    techStack: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
    github: 'https://github.com/amaanahmad/shoplite',
    liveDemo: 'https://shoplite.example.com',
    features: [
      'Product search & filter',
      'Cart functionality',
      'Responsive UI',
      'API integration',
    ],
  },
  {
    id: 4,
    title: 'AlgoVisualizer',
    description:
      'An interactive algorithm visualizer to help students understand sorting and searching algorithms.',
    image: project4,
    category: 'Frontend',
    techStack: ['React', 'JavaScript', 'CSS3'],
    github: 'https://github.com/amaanahmad/algovisualizer',
    liveDemo: 'https://algovisualizer.example.com',
    features: [
      'Step-by-step visualization',
      'Multiple algorithms',
      'Speed controls',
      'Educational UI',
    ],
  },
];

export const projectCategories = ['All', 'Frontend', 'Backend', 'Full Stack'];
