export interface Project {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  featured: boolean;
  gradient: string;
  image?: string; // path relative to /public, e.g. '/img/undangan-digital.jpg'
  links: { live: string; github: string };
  features: string[];
  year: string;
  role: string;
}

export const projects: Project[] = [
  {
    slug: 'aplikasi-presensi-guru',
    title: 'Aplikasi Presensi Guru',
    description:
      'Aplikasi presensi guru berbasis web dengan fitur login, register, dan manajemen data presensi.',
    longDescription:
      'Aplikasi presensi guru berbasis web dengan fitur login, register, dan manajemen data presensi. Dibuat menggunakan teknologi web modern dengan tampilan yang responsif dan dapat diakses melalui berbagai perangkat.',
    tags: ['Next.js', 'Express', 'MySQL'],
    featured: true,
    gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    image: '/img/halaman_presensi.png',
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
    image: '/img/gardatech.png',
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
  {
    slug: 'basecamps-outdoor',
    title: 'BaseCamps Outdoor',
    description:
      'Platform order rental alat gunung online dengan sistem pemesanan real-time, manajemen stok, dan checkout yang mudah.',
    longDescription:
      'BaseCamps Outdoor adalah platform e-commerce untuk sewa peralatan hiking dan mendaki gunung. Memudahkan para pendaki untuk memesan tenda, sleeping bag, carrier, dan berbagai perlengkapan outdoor lainnya secara online dengan sistem pemesanan yang praktis dan terpercaya.',
    tags: ['Laravel', 'MySQL', 'Bootstrap', 'PHP'],
    featured: false,
    gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    image: '/img/base.png',
    links: { live: 'https://basecampsoutdoor.com/', github: '#' },
    features: [
      'Sistem pemesanan rental alat gunung online',
      'Manajemen stok dan ketersediaan alat real-time',
      'Katalog lengkap peralatan hiking & outdoor',
      'Proses checkout yang mudah dan cepat',
      'Riwayat pemesanan dan manajemen akun pengguna',
    ],
    year: '2024',
    role: 'Full Stack Developer',
  },
  {
    slug: 'saas-manajemen-bimbel',
    title: 'SaaS Manajemen Bimbel',
    description:
      'Platform SaaS manajemen bimbingan belajar dengan fitur absensi, jadwal kelas, pembayaran SPP, dan laporan progress siswa.',
    longDescription:
      'Sistem manajemen bimbingan belajar berbasis SaaS yang memudahkan pengelolaan operasional bimbel secara digital. Fitur lengkap meliputi manajemen siswa & pengajar, penjadwalan kelas otomatis, absensi digital, tagihan & pembayaran SPP, serta laporan perkembangan belajar siswa yang bisa diakses oleh orang tua secara real-time.',
    tags: ['Bun', 'Elysia.js', 'Docker', 'Redis'],
    featured: true,
    gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
    image: '/img/t.png',
    links: { live: '#', github: '#' },
    features: [
      'Manajemen data siswa, pengajar, dan kelas',
      'Penjadwalan kelas otomatis & notifikasi',
      'Absensi digital dengan QR Code',
      'Tagihan & pembayaran SPP online',
      'Laporan progress belajar siswa real-time',
    ],
    year: '2025',
    role: 'Full Stack Developer',
  },
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
