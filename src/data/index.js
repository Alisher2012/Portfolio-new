import { 
  Code2, 
  Layout, 
  Cpu, 
  Globe, 
  Figma, 
  GitBranch, 
  Smartphone, 
  Zap,
  Server,
  Database,
  Terminal,
  Layers,
  Music,
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Volume2,
  VolumeX,
  ListMusic
} from 'lucide-react';

export const projects = [
  {
    id: 1,
    title: 'Nexus Dashboard',
    description: 'A premium enterprise-level SaaS dashboard with real-time analytics and data visualization.',
    image: 'https://images.unsplash.com/photo-1551288049-bbda38a5f452?auto=format&fit=crop&q=80&w=1000',
    tags: ['React', 'Tailwind', 'Recharts', 'Framer Motion'],
    liveUrl: '#',
    githubUrl: '#',
    category: 'SaaS'
  },
  {
    id: 2,
    title: 'E-Commerce Pro',
    description: 'Modern e-commerce platform with seamless animations, dark mode, and multi-currency support.',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=1000',
    tags: ['React', 'Redux', 'Stripe', 'Node.js'],
    liveUrl: '#',
    githubUrl: '#',
    category: 'E-commerce'
  },
  {
    id: 3,
    title: 'Crypto Pulse',
    description: 'Real-time cryptocurrency tracking app with interactive charts and news feed integration.',
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=1000',
    tags: ['React', 'Web3', 'ApexCharts', 'Vite'],
    liveUrl: '#',
    githubUrl: '#',
    category: 'Fintech'
  },
  {
    id: 4,
    title: 'Aura Studio',
    description: 'Minimalist creative agency portfolio with custom parallax effects and smooth transitions.',
    image: 'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&q=80&w=1000',
    tags: ['React', 'GSAP', 'Styled Components', 'Lucide'],
    liveUrl: '#',
    githubUrl: '#',
    category: 'Portfolio'
  }
];

export const skills = [
  {
    category: 'Frontend Stack',
    items: [
      { name: 'React', progress: 95, icon: Code2 },
      { name: 'JavaScript', progress: 90, icon: Terminal },
      { name: 'TailwindCSS', progress: 98, icon: Layout },
      { name: 'Redux', progress: 85, icon: Layers },
      { name: 'Framer Motion', progress: 92, icon: Zap },
      { name: 'Vite', progress: 90, icon: Cpu },
    ]
  },
  {
    category: 'Backend Basics',
    items: [
      { name: 'Node.js', progress: 75, icon: Server },
      { name: 'Express', progress: 80, icon: Globe },
    ]
  },
  {
    category: 'Tools & Others',
    items: [
      { name: 'Git', progress: 88, icon: GitBranch },
      { name: 'Figma', progress: 85, icon: Figma },
      { name: 'Firebase', progress: 70, icon: Database },
      { name: 'Responsive Design', progress: 95, icon: Smartphone },
    ]
  }
];

export const experience = [
  {
    id: 1,
    year: '2022 - Present',
    role: 'Senior Frontend Developer',
    company: 'TechFlow Global',
    description: 'Leading the frontend development team in building scalable enterprise applications using React and Next.js.'
  },
  {
    id: 2,
    year: '2020 - 2022',
    role: 'Frontend Developer',
    company: 'Digital Horizon',
    description: 'Developed and maintained complex web applications, focusing on performance optimization and UI/UX excellence.'
  },
  {
    id: 3,
    year: '2018 - 2020',
    role: 'Junior Web Developer',
    company: 'StartUp Hub',
    description: 'Started career by building responsive landing pages and small-scale web tools for local businesses.'
  }
];

export const services = [
  {
    title: 'Frontend Development',
    description: 'Building fast, responsive, and accessible web applications using modern technologies like React.',
    icon: Code2
  },
  {
    title: 'UI/UX Implementation',
    description: 'Transforming complex designs into pixel-perfect, interactive user interfaces with smooth animations.',
    icon: Layout
  },
  {
    title: 'Performance Optimization',
    description: 'Enhancing website speed and Core Web Vitals to provide the best possible user experience.',
    icon: Zap
  },
  {
    title: 'API Integration',
    description: 'Seamlessly connecting frontend applications with RESTful and GraphQL APIs for dynamic data.',
    icon: Globe
  }
];

export const testimonials = [
  {
    id: 1,
    name: 'Alex Johnson',
    role: 'CEO at InnovateX',
    content: 'Working with this developer was a game-changer for our platform. The attention to detail and performance optimization was outstanding.',
    avatar: 'https://i.pravatar.cc/150?u=alex'
  },
  {
    id: 2,
    name: 'Sarah Chen',
    role: 'Product Manager',
    content: 'The animations and UI feel so premium. It’s exactly what we needed to stand out in a crowded market.',
    avatar: 'https://i.pravatar.cc/150?u=sarah'
  },
  {
    id: 3,
    name: 'Michael Ross',
    role: 'Founder of Bloom',
    content: 'Professional, communicative, and technically brilliant. Highly recommended for any high-end frontend project.',
    avatar: 'https://i.pravatar.cc/150?u=michael'
  }
];

export const musicData = [
  {
    id: 1,
    title: 'Midnight City',
    artist: 'Synthwave Pro',
    cover: 'https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?auto=format&fit=crop&q=80&w=300',
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3'
  },
  {
    id: 2,
    title: 'Lofi Chill',
    artist: 'Study Beats',
    cover: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&q=80&w=300',
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3'
  },
  {
    id: 3,
    title: 'Deep Ocean',
    artist: 'Ambient Dreams',
    cover: 'https://images.unsplash.com/photo-1459749411177-042180ce673c?auto=format&fit=crop&q=80&w=300',
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3'
  }
];

