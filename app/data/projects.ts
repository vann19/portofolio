export interface Project {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  featured: boolean;
  gradient: string;
  links: { live: string; github: string };
  features: string[];
  year: string;
  role: string;
}

export const projects: Project[] = [
  {
    slug: 'undangan-digital',
    title: 'Undangan Digital',
    description:
      'Undangan pernikahan digital yang modern dengan desain yang elegan dan fitur yang lengkap.',
    longDescription:
      'Undangan pernikahan digital yang modern dengan desain yang elegan dan fitur yang lengkap. Dibuat menggunakan teknologi web modern dengan tampilan yang responsif dan dapat diakses melalui berbagai perangkat.',
    tags: ['Next.js', 'TypeScript', 'Tailwind'],
    featured: true,
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    links: { live: '#', github: 'https://github.com/vann19/undangan_digital' },
    features: [
      'Stripe payment integration with webhooks',
      'Real-time inventory management dashboard',
      'JWT auth with role-based access control',
      'SEO-optimized product pages',
      'Automated email receipts with Resend',
    ],
    year: '2025',
    role: 'Full Stack Developer',
  },
  {
    slug: 'aplikasi-presensi-guru',
    title: 'Aplikasi Presensi Guru',
    description:
      'Aplikasi presensi guru berbasis web dengan fitur login, register, dan manajemen data presensi.',
    longDescription:
      'Aplikasi presensi guru berbasis web dengan fitur login, register, dan manajemen data presensi. Dibuat menggunakan teknologi web modern dengan tampilan yang responsif dan dapat diakses melalui berbagai perangkat.',
    tags: ['React', 'Tailwind', 'Framer Motion'],
    featured: true,
    gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    links: { live: '#', github: 'https://github.com/vann19/Projekpui' },
    features: [
      'Drag-and-drop cards across columns',
      'Team invitation & collaboration system',
      'Progress charts and burndown graphs',
      'Mobile-responsive Kanban board',
    ],
    year: '2024',
    role: 'Frontend Developer',
  },
  {
    slug: 'company-profile-gardatech',
    title: 'Company Profile Landing Page',
    description:
      'Company profile landing page dengan desain yang modern dan elegan.',
    longDescription:
      'Company profile landing page dengan desain yang modern dan elegan. Dibuat menggunakan teknologi web modern dengan tampilan yang responsif dan dapat diakses melalui berbagai perangkat.',
    tags: ['Next.js', 'Tailwind', 'Framer Motion'],
    featured: true,
    gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    links: { live: 'https://www.gardatech.cloud', github: '#' },
    features: [
      'Desain modern dan responsif',
      'Landing page yang menarik',
      'Performa tinggi dengan Next.js',
      'Mobile-friendly di semua perangkat',
    ],
    year: '2026',
    role: 'Frontend Developer',
  },
  // {
  //   slug: 'ai-content-generator',
  //   title: 'AI Content Generator',
  //   description:
  //     'An AI-powered content generation tool using GPT-4 API with a credit system, user auth, and multi-format export options.',
  //   longDescription:
  //     'A SaaS tool empowering creators and marketers to generate blog posts, social media captions, ad copy, and more in seconds using GPT-4. Includes a credit-based billing system, usage analytics, and export to PDF or Markdown.',
  //   tags: ['Next.js', 'OpenAI', 'Prisma', 'Tailwind'],
  //   featured: false,
  //   gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
  //   links: { live: '#', github: '#' },
  //   features: [
  //     'GPT-4 powered content generation',
  //     'Credit-based billing system with Stripe',
  //     'Multi-format export (PDF, Markdown)',
  //     'Template library with 20+ presets',
  //     'Usage analytics dashboard',
  //   ],
  //   year: '2024',
  //   role: 'Full Stack Developer',
  // },
  // {
  //   slug: 'real-estate-dashboard',
  //   title: 'Real Estate Dashboard',
  //   description:
  //     'A data-driven real estate management dashboard with interactive maps, property listings, and revenue analytics charts.',
  //   longDescription:
  //     'An enterprise-grade real estate management dashboard for agents and brokers. Features interactive Mapbox maps for property search, detailed listing management, revenue forecasting, and lead tracking — all in a single unified interface.',
  //   tags: ['React', 'Node.js', 'Chart.js', 'Mapbox'],
  //   featured: false,
  //   gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
  //   links: { live: '#', github: '#' },
  //   features: [
  //     'Interactive Mapbox property maps',
  //     'Revenue analytics with Chart.js',
  //     'CRM for lead management',
  //     'Document upload & e-signature ready',
  //     'Responsive across all screen sizes',
  //   ],
  //   year: '2024',
  //   role: 'Frontend Developer',
  // },
  // {
  //   slug: 'portfolio-website',
  //   title: 'Portfolio Website',
  //   description:
  //     'A stunning modern portfolio built with Next.js 15, featuring dark mode, smooth animations, and a 100 Lighthouse score.',
  //   longDescription:
  //     'This very website! Built from scratch with Next.js 15, Tailwind v4, and lucide-react. Features a dark/light mode toggle persisted in localStorage, CSS-driven animations, scroll-triggered skill bars, filterable project cards, and a fully working contact form — all scoring 100 on Lighthouse.',
  //   tags: ['Next.js', 'TypeScript', 'CSS Animations'],
  //   featured: false,
  //   gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
  //   links: { live: '#', github: '#' },
  //   features: [
  //     'Dark / light mode with localStorage persistence',
  //     'Typewriter hero animation',
  //     'Scroll-triggered skill bar animations',
  //     'Filterable project cards',
  //     '100 Lighthouse performance score',
  //   ],
  //   year: '2025',
  //   role: 'Developer & Designer',
  // },
  // {
  //   slug: 'social-media-clone',
  //   title: 'Social Media Clone',
  //   description:
  //     'A Twitter/X clone with real-time feeds, likes, retweets, notifications, and infinite scroll using React Query.',
  //   longDescription:
  //     'A feature-complete Twitter/X clone built as a deep dive into real-time web technologies. Includes user auth, infinite-scroll feeds, likes, retweets, replies, real-time notifications via Socket.io, and a mobile-responsive layout.',
  //   tags: ['React', 'Express', 'MongoDB', 'Socket.io'],
  //   featured: false,
  //   gradient: 'linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)',
  //   links: { live: '#', github: '#' },
  //   features: [
  //     'Real-time notifications via Socket.io',
  //     'Infinite scroll with React Query',
  //     'Full auth system (JWT + refresh tokens)',
  //     'Like, retweet, reply interactions',
  //     'Mobile-first responsive design',
  //   ],
  //   year: '2023',
  //   role: 'Full Stack Developer',
  // },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
