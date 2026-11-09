import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'id' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  id: {
    // Navigation
    home: 'Beranda',
    about: 'Tentang',
    experience: 'Pengalaman',
    projects: 'Proyek',
    skills: 'Keahlian',
    expertise: 'Engineering',
    contact: 'Kontak',
    
    // Hero Section
    heroTitle: 'Frontend Developer',
    heroSubtitle: 'Membangun Pengalaman Web yang Skalabel, Berkinerja Tinggi & Berpusat pada Pengguna.',
    heroDescription: 'Frontend Developer dengan 4+ tahun pengalaman membangun aplikasi web modern, dashboard enterprise, dan antarmuka berbasis data. Spesialis dalam React, Next.js, Vue.js, dan TypeScript, dengan fokus kuat pada arsitektur bersih, performa, usability, dan kode yang mudah dipelihara.',
    downloadCV: 'Unduh Resume',
    contactMe: 'Hubungi Saya',
    viewProjects: 'Lihat Proyek Saya',
    
    // About Section
    aboutTitle: 'Tentang Saya',
    yearsExperience: 'Tahun Pengalaman',
    projectsCompleted: 'Proyek Selesai',
    technologiesMastered: 'Teknologi Utama',
    
    // Experience Section
    experienceTitle: 'Pengalaman Kerja',
    present: 'Sekarang',
    
    // Skills Section
    skillsTitle: 'Keahlian Teknis',
    frontendTech: 'Frontend Technologies',
    toolsFrameworks: 'Tools & Frameworks',
    softSkills: 'Soft Skills',
    
    // Contact Section
    contactTitle: 'Mari Terhubung',
    contactDescription: 'Siap membantu mewujudkan solusi web berkinerja tinggi. Mari berdiskusi tentang bagaimana kita bisa berkolaborasi!',
    email: 'Email',
    phone: 'Telepon',
    location: 'Lokasi',
    
    // Footer
    footerText: 'Dirancang & dibangun oleh Tasya Khaerani Janubiya',
    
    // Theme
    lightMode: 'Mode Terang',
    darkMode: 'Mode Gelap',
  },
  en: {
    // Navigation
    home: 'Home',
    about: 'About',
    experience: 'Experience',
    projects: 'Projects',
    skills: 'Skills',
    expertise: 'Engineering',
    contact: 'Contact',
    
    // Hero Section
    heroTitle: 'Frontend Developer',
    heroSubtitle: 'Building Scalable, High-Performance & User-Centered Web Experiences.',
    heroDescription: 'Frontend Developer with 4+ years of experience building modern web applications, enterprise dashboards, and data-driven interfaces. Specialized in React, Next.js, Vue.js, and TypeScript, with a strong focus on clean architecture, performance, usability, and maintainable code.',
    downloadCV: 'Download Resume',
    contactMe: 'Contact Me',
    viewProjects: 'View My Projects',
    
    // About Section
    aboutTitle: 'About Me',
    yearsExperience: 'Years Experience',
    projectsCompleted: 'Projects Delivered',
    technologiesMastered: 'Core Frameworks',
    
    // Experience Section
    experienceTitle: 'Work Experience',
    present: 'Present',
    
    // Skills Section
    skillsTitle: 'Technical Skills',
    frontendTech: 'Frontend Technologies',
    toolsFrameworks: 'Tools & Frameworks',
    softSkills: 'Soft Skills',
    
    // Contact Section
    contactTitle: 'Let\'s Connect',
    contactDescription: 'Ready to build high-performance web applications. Let\'s discuss how we can collaborate!',
    email: 'Email',
    phone: 'Phone',
    location: 'Location',
    
    // Footer
    footerText: 'Designed & built by Tasya Khaerani Janubiya',
    
    // Theme
    lightMode: 'Light Mode',
    darkMode: 'Dark Mode',
  }
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
