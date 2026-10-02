export const personalInfo = {
  name: "Muhammad Fikri Arsyad",
  title: "AI Designer • AI Engineer • Web Designer • Investor",
  heroSubtitle: "Creating digital experiences with AI, design, and technology.",
  tagline: "Menggabungkan kreativitas desain, kecerdasan buatan, dan arsitektur web modern untuk menghadirkan solusi digital bernilai tinggi.",
  location: "Indonesia",
  availability: "Terbuka untuk Kolaborasi & Inovasi Teknologi",
  avatar: "/images/profile_avatar.jpg"
};

export const aboutMe = {
  title: "Tentang Saya",
  intro: "Perkenalan Singkat & Fokus Profesional",
  description: `Saya Muhammad Fikri Arsyad, berasal dari Mojokerto dan memiliki ketertarikan kuat pada bidang Artificial Intelligence (AI), UI/UX Design, dan pengembangan website. Saya terbiasa memanfaatkan berbagai teknologi dan tools AI untuk membantu proses desain, pengembangan aplikasi, pembuatan website, copywriting, serta pembuatan konten visual dan video.`,
  paragraphs: [
    "Saya **Muhammad Fikri Arsyad**, berasal dari **Mojokerto** dan memiliki ketertarikan kuat pada bidang **Artificial Intelligence (AI)**, **UI/UX Design**, dan pengembangan **website**. Saya terbiasa memanfaatkan berbagai teknologi dan tools AI untuk membantu proses desain, pengembangan aplikasi, pembuatan website, copywriting, serta pembuatan konten visual dan video.",
    "Saya memiliki pengalaman menggunakan berbagai tools seperti **ChatGPT**, **Claude**, **Gemini**, **Google Antigravity**, **Kiro**, dan **GitHub**, serta **Vercel** dalam proses pengembangan dan kreativitas digital.",
    "Selain bidang teknologi, saya juga memiliki ketertarikan pada **investasi** dan **trading**, serta terus mengembangkan kemampuan dalam memahami pasar dan pengelolaan keuangan.",
    "Saya memiliki semangat untuk terus belajar, berinovasi, dan menciptakan solusi digital yang bermanfaat, modern, dan mudah digunakan."
  ],
  focusAreas: [
    { title: "Kecerdasan Buatan (AI)", desc: "Pengembangan aplikasi AI, integrasi LLM/API, otomatisasi sistem, serta pembuatan aset visual AI." },
    { title: "Desain & UI/UX", desc: "Perancangan antar-muka yang bersih, responsif, dan intuitif untuk landing page, dashboard, serta aplikasi." },
    { title: "Pengembangan Website", desc: "Membangun sistem digital modern, platform manajemen internal, dan website bisnis siap pakai." },
    { title: "Investasi & Trading", desc: "Analisis teknikal & fundamental pasar saham, manajemen risiko, serta tata kelola portofolio." }
  ]
};

export const skillsData = {
  aiDesign: {
    category: "AI Design",
    icon: "Palette",
    color: "from-purple-500 to-indigo-500",
    items: [
      "AI Graphic Design",
      "AI Image Generation",
      "AI Video Generation",
      "AI UI/UX Design",
      "AI Content Creation"
    ]
  },
  aiEngineering: {
    category: "AI Engineering",
    icon: "Cpu",
    color: "from-blue-500 to-cyan-500",
    items: [
      "AI App Development",
      "AI Website Development",
      "AI-Powered Applications",
      "AI-Powered Websites",
      "Chatbot Integration",
      "LLM Integration",
      "API Integration",
      "AI Automation"
    ]
  },
  webDesign: {
    category: "Web Design",
    icon: "Globe",
    color: "from-teal-500 to-emerald-500",
    items: [
      "UI/UX Design",
      "Web Design",
      "Responsive Web Design",
      "Landing Page Design",
      "Dashboard Design"
    ]
  },
  tradingInvestment: {
    category: "Trading & Investment",
    icon: "TrendingUp",
    color: "from-amber-500 to-emerald-500",
    items: [
      "Technical Analysis",
      "Fundamental Analysis",
      "Support & Resistance",
      "Moving Average",
      "Stochastic RSI",
      "Risk Management",
      "Portfolio Management"
    ]
  }
};

export const projectsData = [
  {
    id: "hibatullah-iibs",
    title: "Website Hibatullah IIBS",
    category: "Web & Institution System",
    image: "/images/project_hibatullah.jpg",
    link: "https://hibatullah.sch.id/index.html",
    description: "Pengembangan & perbaikan website resmi Hibatullah International Islamic Boarding School untuk meningkatkan presensi digital dan aksesibilitas informasi publik.",
    tags: ["Web Design", "UI/UX", "Institutional Website"],
    highlights: ["Desain elegan & sopan", "Akses cepat & responsif", "Sistem informasi publik lengkap"]
  },
  {
    id: "portal-pertanian",
    title: "Portal Pertanian",
    category: "Web & Institution System",
    image: "/images/project_portal_pertanian.jpg",
    link: "https://web-petani-indonesia.vercel.app/home.html",
    description: "Platform pertanian digital terlengkap untuk petani Indonesia — berita terkini, harga pasar real-time, panduan bertani, diagnosa tanaman, dan komunitas.",
    tags: ["Web Design", "UI/UX", "Agriculture Portal", "Vercel"],
    highlights: ["Platform Pertanian Digital #1", "Data Berita & Pasar Real-time", "Antarmuka Hijau Modern & Responsif"]
  },
  {
    id: "tatanan-keuangan",
    title: "Aplikasi Tatanan Keuangan",
    category: "Analytics & Control",
    image: "/images/project_tatanan_keuangan.jpg",
    link: "https://tananan-keuangan.vercel.app/",
    description: "Dashboard manajemen keuangan & investasi saham personal — pelacakan total aset kekayaan, arus kas real-time, pengeluaran, portofolio saham, dan target impian.",
    tags: ["Financial App", "Investment Tracker", "Dashboard UI", "Vercel"],
    highlights: ["Sistem Waktu Real-Time", "Manajemen Kas & Saham", "Fitur Mode Investor & Database Cloud"]
  },
  {
    id: "aplikasi-utama",
    title: "Aplikasi Utama",
    category: "Internal Digital System",
    images: ["/images/app_hibatullah_1.jpg", "/images/app_hibatullah_2.jpg"],
    description: "Sistem aplikasi pusat Hibatullah IIBS yang mengintegrasikan modul Absen Ustadz & Guru di Pondok Hibatullah, Pengajuan Barang digital, Kalender Keagamaan, serta Pembaruan Fitur.",
    tags: ["Aplikasi Utama", "Absen Hibatullah", "Pengajuan Barang", "Internal Portal"],
    highlights: ["Absen Ustadz & Guru Pondok", "Modul Pengajuan Barang", "Slider 2 Foto Antarmuka (Scroll Kanan/Kiri)"]
  },
  {
    id: "app-absen-guru",
    title: "App Absen Para Guru",
    category: "Internal Digital System",
    images: [
      "/images/absen_guru_1.jpg",
      "/images/absen_guru_2.jpg",
      "/images/absen_guru_3.jpg",
      "/images/absen_guru_4.jpg",
      "/images/absen_guru_5.jpg"
    ],
    description: "Sistem Manajemen & Presensi Digital Guru Hibatullah IIBS — mencakup portal login guru hebat, pencatatan status presensi (Hadir, Izin, Sakit), Absensi Manager real-time, dasbor manajerial direktur, serta kelola data tim & karyawan.",
    tags: ["Absen Guru", "Presensi Digital", "Absensi Manager", "Hibatullah IIBS"],
    highlights: ["Portal Login Guru Hebat", "Status Hadir, Izin & Sakit Real-Time", "Dasbor Manager & Rekap Presensi (5 Slide)"]
  },
  {
    id: "pengajuan-barang",
    title: "Website Pengajuan Barang",
    category: "Internal Digital System",
    images: [
      "/images/pengajuan_barang_1.jpg",
      "/images/pengajuan_barang_2.jpg",
      "/images/pengajuan_barang_3.jpg",
      "/images/pengajuan_barang_4.jpg"
    ],
    description: "Sistem Pengadaan & Pengajuan Barang Sekolah (SPMS) Hibatullah IIBS — portal pengadaan terintegrasi untuk unit Kepasantrenan, SMK, dan SMP dilengkapi analisis anggaran real-time serta alur persetujuan.",
    tags: ["Pengajuan Barang", "SPMS Hibatullah", "Internal System", "Vercel"],
    highlights: ["Portal Pengadaan Terintegrasi", "Modul Unit Kepasantrenan, SMK & SMP", "Dashboard Analisis & Persetujuan (4 Slide)"]
  },
  {
    id: "konten-kartun-anak-ai",
    title: "Konten Animasi & Kartun Anak AI",
    category: "AI Design",
    image: "/images/project_kartun_anak.jpg",
    link: "https://www.tiktok.com/@kartunanaak",
    description: "Pengembangan & produksi konten video animasi kartun edukasi anak-anak berbasis AI di akun TikTok @kartunanaak — meraih 16K+ Pengikut, 87.8K+ Suka, dan jutaan penayangan video (hingga 1.3M+ views per video).",
    tags: ["TikTok AI", "Kartun Anak", "AI Animation", "Content Creator", "Viral Content"],
    highlights: ["16K+ Pengikut & 87.8K+ Suka di TikTok", "Jutaan Views (1.3M+ Penayangan per Video)", "Animasi & Karakter AI Cerita Anak-Anak"]
  }
];

export const aiDesignShowcase = [
  { name: "AI Image Generation", desc: "Pembuatan aset visual hyper-realistic dan fotorealistis untuk kebutuhan branding & promosi." },
  { name: "AI Video Generation", desc: "Produksi konten video kreatif & animasi pendukung pemasaran berbasis AI tool modern." },
  { name: "Poster & Marketing Visual", desc: "Desain poster publikasi resmi, event, dan materi promosi bernilai estetika tinggi." },
  { name: "UI/UX Concept Design", desc: "Prototipe tampilan antarmuka aplikasi dan web berbasis tren desain internasional terkini." },
  { name: "Branding & Identity", desc: "Pengembangan konsep identitas visual, visual kit, serta pedoman warna untuk organisasi." },
  { name: "Social Media Content", desc: "Konten media sosial terstruktur yang rapi, komunikatif, dan menarik minat audiens." }
];

export const aiEngineeringShowcase = [
  { name: "AI-Powered Applications", desc: "Rancang bangun aplikasi web cerdas yang mengintegrasikan AI untuk pemrosesan data tepat sasaran." },
  { name: "AI-Powered Websites", desc: "Pengembangan situs web dengan fitur AI adaptif, rekomendasi cerdas, dan fungsionalitas modern." },
  { name: "AI Automation Systems", desc: "Otomatisasi alur kerja digital (workflow) untuk memangkas waktu kerja dan meningkatkan produktivitas." },
  { name: "Chatbot & LLM Integration", desc: "Integrasi model bahasa (ChatGPT, Claude, Gemini API) ke dalam sistem informasi dan aplikasi web." },
  { name: "API & Backend Integration", desc: "Menghubungkan layanan kecerdasan buatan dengan backend dan database internal secara aman." }
];

export const webDesignShowcase = [
  { name: "Landing Page Design", desc: "Halaman landing bernilai konversi tinggi dengan tata letak bersih dan pesan yang tajam." },
  { name: "Institutional & Company Website", desc: "Website lembaga dan perusahaan berpembawaan resmi, sopan, serta dapat dipercaya." },
  { name: "Dashboard & Control Panel UI", desc: "Desain sistem antarmuka dashboard untuk pemantauan data dan pengelolaan manajerial." },
  { name: "Mobile UI Design", desc: "Tampilan aplikasi perangkat bergerak (smartphone/tablet) yang responsif dan fleksibel." },
  { name: "Responsive Web Architecture", desc: "Struktur tampilan yang menyesuaikan secara mulus di seluruh ukuran layar pengguna." }
];

export const tradingInvestmentData = {
  title: "Trading & Investment",
  subtitle: "Analisis Pasar, Manajemen Portofolio & Tata Kelola Risiko",
  overview: "Memadukan kecermatan analisis teknikal dan fundamental saham untuk menjaga rasio risiko dan pertumbuhan portofolio secara terukur.",
  categories: [
    {
      name: "Analisis Saham & Riset Pasar",
      desc: "Evaluasi kinerja keuangan emiten, laporan keuangan, tren industri, serta sentimen pasar modal."
    },
    {
      name: "Technical Analysis",
      desc: "Penerapan analisis grafik saham menggunakan indikator Support & Resistance, Moving Average (MA), serta Stochastic RSI."
    },
    {
      name: "Fundamental Analysis",
      desc: "Penilaian rasio profitabilitas, nilai intrinsik saham, neraca keuangan, dan valuasi bisnis jangka panjang."
    },
    {
      name: "Risk Management",
      desc: "Penetapan batas risiko (stop loss/cut loss), posisi ukuran modal (position sizing), serta proteksi aset."
    },
    {
      name: "Portfolio Management",
      desc: "Diversifikasi alokasi aset modal secara disiplin dan terukur guna mencapai pengembalian yang optimal."
    },
    {
      name: "Jurnal Analisis & Catatan Transaksi",
      desc: "Pencatatan rincian alasan masuk/keluar pasar, evaluasi strategi, dan continuous learning dalam investasi."
    }
  ]
};

export const workExperience = [
  {
    role: "Technology Specialist",
    company: "Hibatullah IIBS",
    link: "https://hibatullah.sch.id/index.html",
    period: "2026 – Sekarang",
    status: "Aktif",
    badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    responsibilities: [
      "Mengembangkan dan memperbaiki website resmi lembaga (hibatullah.sch.id) secara berkala agar informatif dan responsif.",
      "Membuat dan merancang sistem digital internal (App Absen Para Guru, Website Pengajuan Barang SPMS & Aplikasi Utama) untuk meningkatkan efisiensi operasional.",
      "Mendesain antarmuka UI/UX yang modern, bersih, dan ramah pengguna untuk aplikasi serta website.",
      "Mengimplementasikan teknologi AI dalam mempercepat pengembangan digital dan penyelesaian pekerjaan.",
      "Mengembangkan sistem absensi digital dan sistem pengajuan barang internal yang terstruktur.",
      "Membantu pengelolaan, pemeliharaan, serta pemberian solusi teknologi yang tepat bagi lembaga."
    ]
  }
];

export const toolsData = [
  { name: "Google Antigravity", category: "AI & Autonomous Coding Agent", desc: "Platform rekayasa AI canggih dari Google DeepMind." },
  { name: "Kiro", category: "AI Development Tool", desc: "Perangkat akselerasi alur kerja rekayasa perangkat lunak." },
  { name: "ChatGPT", category: "Generative AI & LLM", desc: "Model kecerdasan buatan untuk riset, analisis, dan ideasi." },
  { name: "Claude", category: "AI & Content Engineering", desc: "Model AI tingkat lanjut untuk penulisan kode dan analisis mendalam." },
  { name: "Gemini", category: "Multimodal AI System", desc: "Solusi AI multimodal Google untuk kecerdasan komputasi." },
  { name: "Vercel", category: "Deployment & Web Hosting", desc: "Platform standar industri untuk deployment aplikasi web modern." },
  { name: "GitHub", category: "Version Control & Collaboration", desc: "Repositori pengelolaan kode sumber dan kolaborasi pengembang." }
];

export const contactData = {
  heading: "Let's Build Something With AI.",
  description: "Terbuka untuk diskusi proyek teknologi, konsultasi implementasi AI, pembuatan website profesional, maupun peluang kerjasama teknis.",
  links: [
    { name: "WhatsApp", url: "https://wa.me/6281949514329", icon: "MessageSquare", text: "081949514329" },
    { name: "Email", url: "mailto:arsyad122804@gmail.com", icon: "Mail", text: "arsyad122804@gmail.com" }
  ]
};
