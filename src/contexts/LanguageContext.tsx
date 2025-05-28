
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
    contact: 'Kontak',
    
    // Hero Section
    heroTitle: 'Front-End Developer',
    heroSubtitle: 'Passionate about crafting responsive, user-centric interfaces with clean code and intuitive UX/UI design',
    heroSubtitleAlt: 'Berpengalaman 3+ tahun dalam pengembangan web modern dengan React.js, Vue.js, dan Next.js',
    downloadCV: 'Unduh CV',
    contactMe: 'Hubungi Saya',
    
    // About Section
    aboutTitle: 'Tentang Saya',
    aboutDescription: 'Lulusan Cum Laude Sistem Informasi (IPK 3.61/4.00) dengan 3 tahun keahlian pengembangan front-end, mengkhususkan diri dalam framework modern seperti Next.js, React.js, dan Vue.js. Bersemangat dalam menciptakan antarmuka yang responsif dan berpusat pada pengguna dengan kode yang bersih dan desain UX/UI yang intuitif.',
    yearsExperience: 'Tahun Pengalaman',
    projectsCompleted: 'Proyek Selesai',
    technologiesMastered: 'Teknologi Dikuasai',
    
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
    contactDescription: 'Tertarik untuk berkolaborasi? Jangan ragu untuk menghubungi saya!',
    email: 'Email',
    phone: 'Telepon',
    location: 'Lokasi',
    
    // Footer
    footerText: 'Dibuat dengan ❤️ oleh Tasya Khaerani',
    
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
    contact: 'Contact',
    
    // Hero Section
    heroTitle: 'Front-End Developer',
    heroSubtitle: 'Passionate about crafting responsive, user-centric interfaces with clean code and intuitive UX/UI design',
    heroSubtitleAlt: '3+ years of experience in modern web development with React.js, Vue.js, and Next.js',
    downloadCV: 'Download CV',
    contactMe: 'Contact Me',
    
    // About Section
    aboutTitle: 'About Me',
    aboutDescription: 'A Cum Laude Information Systems graduate (GPA 3.61/4.00) with 3 years of front-end development expertise, specializing in modern frameworks like Next.js, React.js, and Vue.js. Passionate about crafting responsive, user-centric interfaces with clean code and intuitive UX/UI design.',
    yearsExperience: 'Years Experience',
    projectsCompleted: 'Projects Completed',
    technologiesMastered: 'Technologies Mastered',
    
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
    contactDescription: 'Interested in collaborating? Don\'t hesitate to reach out!',
    email: 'Email',
    phone: 'Phone',
    location: 'Location',
    
    // Footer
    footerText: 'Made with ❤️ by Tasya Khaerani',
    
    // Theme
    lightMode: 'Light Mode',
    darkMode: 'Dark Mode',
  }
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('id');

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
