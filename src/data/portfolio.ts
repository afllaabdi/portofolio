export const profile = {
  name: 'Afllah Abdi Pratomo',
  title: 'Data Scientist & Software Engineer',
  tagline: 'Membangun solusi cerdas berbasis data dan teknologi modern',
  summary:
    'Mahasiswa S1 Teknik Informatika Universitas Muhammadiyah Malang yang memiliki minat kuat pada Data Analytics, Data Science, Machine Learning, Artificial Intelligence, dan Software Development. Berpengalaman menggunakan Python untuk pengolahan data dan analisis data menggunakan Pandas, NumPy, Matplotlib, serta Scikit-Learn. Memiliki pengalaman membangun aplikasi web menggunakan Laravel dan Flutter serta mengembangkan proyek berbasis Computer Vision.',
  location: 'Malang, Jawa Timur, Indonesia',
  email: 'afllaabdi1@gmail.com',
  github: 'https://github.com/afllaabdi',
  linkedin: 'https://www.linkedin.com/in/afllah-abdi-pratomo-42298a288/',
  instagram: 'https://www.instagram.com/aflaabdi_/',
 avatarUrl: '/portofolio/profile.jpg',
  avatarFallback: 'AAP',
  interests: [
    'Data Analytics',
    'Data Science',
    'Machine Learning',
    'Computer Vision',
    'NLP',
    'AI Research',
    'Software Development',
  ],
}

// Logo badges: color = bg color, textColor = text/icon color, label = short label
export const skills = [
  // Languages
  {
    name: 'Python',
    category: 'language' as const,
    color: '#3776AB',
    textColor: '#FFFFFF',
    label: 'PY',
  },
  {
    name: 'Java',
    category: 'language' as const,
    color: '#F89820',
    textColor: '#000000',
    label: 'JV',
  },
  {
    name: 'Dart',
    category: 'language' as const,
    color: '#0175C2',
    textColor: '#FFFFFF',
    label: 'DT',
  },
  {
    name: 'PHP',
    category: 'language' as const,
    color: '#777BB4',
    textColor: '#FFFFFF',
    label: 'PHP',
  },
  {
    name: 'C',
    category: 'language' as const,
    color: '#A8B9CC',
    textColor: '#000000',
    label: 'C',
  },
  {
    name: 'C++',
    category: 'language' as const,
    color: '#00599C',
    textColor: '#FFFFFF',
    label: 'C++',
  },
  {
    name: 'SQL',
    category: 'language' as const,
    color: '#336791',
    textColor: '#FFFFFF',
    label: 'SQL',
  },
  // Data Science Tools
  {
    name: 'Pandas',
    category: 'tool' as const,
    color: '#150458',
    textColor: '#FFFFFF',
    label: 'PD',
  },
  {
    name: 'NumPy',
    category: 'tool' as const,
    color: '#013243',
    textColor: '#FFFFFF',
    label: 'NP',
  },
  {
    name: 'Matplotlib',
    category: 'tool' as const,
    color: '#F47A20',
    textColor: '#FFFFFF',
    label: 'MPL',
  },
  {
    name: 'Scikit-Learn',
    category: 'tool' as const,
    color: '#F7931E',
    textColor: '#000000',
    label: 'SK',
  },
  {
    name: 'Data Analysis',
    category: 'soft' as const,
    color: '#FF6F00',
    textColor: '#FFFFFF',
    label: 'DA',
  },
  {
    name: 'Data Visualization',
    category: 'soft' as const,
    color: '#E44D26',
    textColor: '#FFFFFF',
    label: 'DV',
  },
  {
    name: 'Machine Learning',
    category: 'soft' as const,
    color: '#FF9A00',
    textColor: '#000000',
    label: 'ML',
  },
  // Frameworks
  {
    name: 'Laravel',
    category: 'framework' as const,
    color: '#FF2D20',
    textColor: '#FFFFFF',
    label: 'LV',
  },
  {
    name: 'Flutter',
    category: 'framework' as const,
    color: '#02569B',
    textColor: '#FFFFFF',
    label: 'FL',
  },
  {
    name: 'REST API',
    category: 'framework' as const,
    color: '#FF6F00',
    textColor: '#FFFFFF',
    label: 'API',
  },
  {
    name: 'MySQL',
    category: 'tool' as const,
    color: '#00758F',
    textColor: '#FFFFFF',
    label: 'My',
  },
]

export const projects = [
  {
    id: 1,
    title: 'Face Recognition Attendance System',
    description:
      'Sistem absensi otomatis berbasis pengenalan wajah real-time menggunakan OpenCV dan Face Recognition (dlib). Sistem ini melakukan pencatatan kehadiran otomatis ke file CSV dengan fitur registrasi wajah, pengelolaan dataset, dan monitoring absensi.',
    technologies: ['Python', 'OpenCV', 'Face Recognition (dlib)', 'Computer Vision', 'CSV', 'Multithreading'],
    highlights: [
      'Real-time face detection dan recognition menggunakan OpenCV & dlib',
      'Pencatatan kehadiran otomatis ke file CSV',
      'Fitur registrasi wajah dan pengelolaan dataset',
      'Optimasi performa dengan multithreading dan frame processing',
      'Monitoring absensi secara langsung',
    ],
    icon: 'scan-face',
    gradient: 'from-orange-600 to-amber-600',
    status: 'completed' as const,
    github: 'https://github.com/afllaabdi',
    link: 'https://github.com/afllaabdi',
  },
  {
    id: 2,
    title: 'BOICELL — Platform Reservasi Layanan',
    description:
      'Aplikasi mobile lengkap untuk pemesanan layanan, reservasi teknisi, manajemen garansi, dan dukungan pelanggan. Mengimplementasikan antarmuka responsif dan integrasi REST API.',
    technologies: ['Flutter', 'Dart', 'PHP', 'MySQL', 'REST API'],
    highlights: [
      'Pemesanan layanan dan reservasi teknisi',
      'Manajemen garansi dan riwayat transaksi',
      'Dukungan pelanggan terintegrasi',
      'Antarmuka responsif dan modern',
      'Integrasi REST API dengan backend PHP',
    ],
    icon: 'smartphone',
    gradient: 'from-orange-500 to-amber-500',
    status: 'completed' as const,
    github: 'https://github.com/afllaabdi',
    link: 'https://github.com/afllaabdi',
  },
  {
    id: 3,
    title: 'Sprinta — Sistem Manajemen Olahraga & Gym',
    description:
      'Aplikasi web untuk manajemen member gym, reservasi lapangan olahraga, dan pengelolaan event. Merancang basis data relasional dan mengimplementasikan layanan backend menggunakan Laravel dan MySQL.',
    technologies: ['Laravel', 'PHP', 'MySQL', 'Blade Template'],
    highlights: [
      'Manajemen member gym dan keanggotaan',
      'Reservasi lapangan olahraga',
      'Pengelolaan event dan jadwal',
      'Basis data relasional yang teroptimasi',
      'Dashboard admin yang informatif',
    ],
    icon: 'dumbbell',
    gradient: 'from-orange-400 to-yellow-500',
    status: 'completed' as const,
    github: 'https://github.com/afllaabdi',
    link: 'https://github.com/afllaabdi',
  },
]

export const education = {
  institution: 'Universitas Muhammadiyah Malang',
  degree: 'S1 Teknik Informatika',
  period: '2023 — Sekarang',
  gpa: 'IPK: 3.xx / 4.00',
  description:
    'Universitas Muhammadiyah Malang merupakan salah satu universitas terbaik di Jawa Timur yang memiliki program studi Teknik Informatika dengan kurikulum yang relevan dengan industri.',
  courses: [
    'Struktur Data & Algoritma',
    'Basis Data',
    'Pemrograman Web',
    'Machine Learning',
    'Computer Vision',
    'Statistika & Probabilitas',
    'Jaringan Komputer',
    'Rekayasa Perangkat Lunak',
  ],
  achievements: [
    'Mahasiswa aktif di bidang Data Science dan AI',
    'Berpengalaman dalam berbagai proyek pengembangan perangkat lunak',
    'Terlibat dalam komunitas teknologi dan pengembangan diri',
  ],
}

export const languages = [
  { name: 'Indonesia', level: 'Native', flag: '🇮🇩' },
  { name: 'English', level: 'Able to read technical documentation', flag: '🇬🇧' },
]

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]