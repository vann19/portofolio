export interface Certificate {
  slug: string;
  title: string;
  issuer: string;
  issuerUrl: string;
  date: string;
  credentialId?: string;
  link: string;
  gradient: string;
  category: string;
  description: string;
  skills: string[];
  duration: string;
  /** Path relative to /public, e.g. '/certificates/react-complete-guide.jpg' */
  image?: string;
}

export const certificates: Certificate[] = [
  {
    slug: 'himatika-backend',
    title: 'Himatika Backend Development',
    issuer: 'Himatika',
    issuerUrl: 'https://himatikauty.or.id/',
    date: 'Jan 2025',
    link: 'https://drive.google.com/file/d/1rXPMF5sp4YnuvmEDvi0rNnxQ87ffJwo0/view?usp=sharing',
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    category: 'Backend',
    description:
      'Sertifikat keikutsertaan dalam pelatihan pengembangan backend yang diselenggarakan oleh Himatika. Pelatihan mencakup dasar-dasar pengembangan backend modern dan implementasi RESTful API.',
    skills: ['Backend Development', 'REST API', 'Node.js', 'Express', 'Database', 'HTTP Protocol'],
    duration: 'Workshop',
    image: '/sertifikat/himatika_backend.png',
  },
  {
    slug: 'aplikasi-web-menggunakan-reactjs',
    title: 'Aplikasi Web Menggunakan ReactJS',
    issuer: 'Himatika',
    issuerUrl: 'https://himatikauty.or.id/',
    date: 'Jan 2025',
    link: 'https://drive.google.com/file/d/1_aUxu06NIIA-I9FbgjZzZQ2bfeVCMmJc/view?usp=sharing',
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    category: 'Frontend',
    description:
      'Sertifikat keikutsertaan dalam pelatihan pengembangan frontend yang diselenggarakan oleh Himatika. Pelatihan mencakup dasar-dasar pengembangan frontend modern dan implementasi RESTful API.',
    skills: ['Frontend Development', 'ReactJS', 'HTML', 'CSS', 'JavaScript', 'HTTP Protocol'],
    duration: 'Workshop',
    image: '/sertifikat/aplikasi_reactjs.png',
  },
  {
    slug: 'kelas-javascript',
    title: 'Kelas Javascript',
    issuer: 'CODEPOLITAN',
    issuerUrl: 'https://codepolitan.com/',
    date: '1 Mei 2025',
    link: 'https://drive.google.com/file/d/1WMjTR7GjF_plKLzpUabYtoSWLpB6bDat/view?usp=sharing',
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    category: 'Javascript',
    description:
      'Sertifikat keikutsertaan dalam pelatihan Javascript dasar yang diselenggarakan oleh Codepolitan. Pelatihan mencakup dasar-dasar javascript modern',
    skills: ['JavaScript', 'HTML', 'CSS', 'HTTP Protocol', 'DOM Manipulation', 'Basic Algorithm', 'Asynchronous JavaScript'],
    duration: '1 Bulan',
    image: '/sertifikat/kelas_javascript.png',
  },
   {
    slug: 'penggunaan-database-mysql-pada-pemrograman-php',
    title: 'Penggunaan Database MySQL pada Pemrograman PHP',
    issuer: 'CODEPOLITAN',
    issuerUrl: 'https://codepolitan.com/',
    date: '1 Mei 2025',
    link: 'https://drive.google.com/file/d/1Usg_U6Op4dsPOccFsiNQLNdLAmdZ7NHg/view?usp=sharing',
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    category: 'Database',
    description:
      'Sertifikat keikutsertaan dalam pelatihan database modern yang diselenggarakan oleh Codepolitan. Pelatihan mencakup dasar-dasar database modern',
    skills: ['PHP', 'MySQL', 'SQL', 'HTTP Protocol', 'JSON', 'REST API'],
    duration: '1 Bulan',
    image: '/sertifikat/database.png',
  },
  {
    slug: 'kelas-belajar-menggunakan-terminal-atau-cmd-untuk-development',
    title: 'Terminal atau CMD untuk Development',
    issuer: 'CODEPOLITAN',
    issuerUrl: 'https://codepolitan.com/',
    date: '1 Mei 2025',
    link: 'https://drive.google.com/file/d/16ZY9UHL44lkTD0OebsJwIhpmMxkELm1b/view?usp=sharing',
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    category: 'Terminal',
    description:
      'Sertifikat keikutsertaan dalam pelatihan terminal dasar yang diselenggarakan oleh Codepolitan. Pelatihan mencakup dasar-dasar terminal modern',
    skills: ['Terminal', 'CMD', 'Basic Algorithm', 'HTTP Protocol'],
    duration: '1 Bulan',
    image: '/sertifikat/kelas_cmd.png',
  },
];

export function getCertificateBySlug(slug: string): Certificate | undefined {
  return certificates.find((c) => c.slug === slug);
}
