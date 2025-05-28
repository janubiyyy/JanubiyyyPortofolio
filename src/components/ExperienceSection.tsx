
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const ExperienceSection = () => {
  const { t, language } = useLanguage();

  const experiences = [
    {
      company: 'Jasamarga Persero, Tbk',
      position: 'Frontend Developer',
      period: `Jan 2025 - ${t('present')}`,
      location: 'Jakarta',
      responsibilities: language === 'id' ? [
        'Mengembangkan aplikasi responsif menggunakan Next.js, React, TypeScript, MUI, dan Tailwind CSS, mengintegrasikan RESTful APIs dan Power BI untuk visualisasi data real-time',
        'Berkolaborasi dengan system analyst untuk merancang UI/UX intuitif di Figma, menyelaraskan dashboard dengan kebutuhan bisnis operasi tol',
        'Mengoptimalkan performa frontend, mengurangi waktu muat halaman sebesar 25% dan meningkatkan pengalaman pengguna',
        'Bermitra dengan tim backend dalam lingkungan berbasis Linux untuk memastikan pengiriman proyek yang mulus'
      ] : [
        'Developed responsive applications using Next.js, React, TypeScript, MUI, and Tailwind CSS, integrating RESTful APIs and Power BI for real-time data visualization, enhancing operational efficiency',
        'Collaborated with system analysts to design intuitive UI/UX in Figma, aligning dashboards with business requirements for toll operations',
        'Optimized frontend performance, reducing page load times by 25% and improving user experience',
        'Partnered with backend teams in a Linux-based environment to ensure seamless project delivery'
      ]
    },
    {
      company: 'PT. Penerbit Erlangga',
      position: 'Frontend Developer',
      period: 'Aug 2022 - Jan 2025',
      location: 'Jakarta',
      responsibilities: language === 'id' ? [
        'Membangun platform e-commerce (EurekaBookhouse, Jaja ID) menggunakan Vue.js, Vuex, Vuetify, dan Tailwind CSS, dengan Flickity dan Lazy Image untuk interface yang dinamis dan teroptimasi',
        'Mengembangkan dashboard admin (EurekaBookhouse, Katarasa) dengan React, Redux, dan Ant Design, merampingkan manajemen penjualan dan inventori',
        'Menciptakan tool simulasi kredit mobil (Jaja Auto) menggunakan Vue.js dan Vuetify, meningkatkan interaksi pengguna melalui desain responsif'
      ] : [
        'Built e-commerce platforms (EurekaBookhouse, Jaja ID) using Vue.js, Vuex, Vuetify, and Tailwind CSS, with Flickity and Lazy Image for dynamic, optimized interfaces, increasing user engagement by 30% and reducing load times by 20%',
        'Developed admin dashboards (EurekaBookhouse, Katarasa) with React, Redux, and Ant Design, streamlining sales and inventory management for 15% improved operational efficiency',
        'Created a car loan simulation tool (Jaja Auto) using Vue.js and Vuetify, enhancing user interaction through responsive design and fast data handling with Lodash'
      ]
    },
    {
      company: 'PT Sociolla Bella Indonesia',
      position: 'Team Leader',
      period: 'Aug 2021 - Aug 2022',
      location: 'Jakarta',
      responsibilities: language === 'id' ? [
        'Memimpin tim 10+ anggota untuk melampaui target penjualan melalui perencanaan strategis dan pelatihan',
        'Meningkatkan produktivitas tim sebesar 30% dengan menciptakan lingkungan kerja kolaboratif'
      ] : [
        'Led a team of 10+ members to exceed sales targets through strategic planning and training',
        'Boosted team productivity by 30% by fostering a collaborative work environment'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              <span className="text-transparent bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text">
                {t('experienceTitle')}
              </span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-amber-600 to-orange-600 mx-auto rounded-full"></div>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-0.5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-amber-600 to-orange-600"></div>

            {experiences.map((exp, index) => (
              <div key={index} className="relative mb-12 last:mb-0">
                {/* Timeline dot */}
                <div className="absolute left-2 md:left-1/2 md:transform md:-translate-x-1/2 w-4 h-4 bg-gradient-to-br from-amber-600 to-orange-600 rounded-full border-4 border-background"></div>

                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                  <div className="bg-card border border-border rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in">
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-foreground mb-1">{exp.position}</h3>
                      <h4 className="text-lg font-semibold text-transparent bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text mb-2">
                        {exp.company}
                      </h4>
                      <div className="flex flex-col sm:flex-row sm:justify-between text-sm text-muted-foreground">
                        <span>{exp.period}</span>
                        <span>{exp.location}</span>
                      </div>
                    </div>
                    
                    <ul className="space-y-2">
                      {exp.responsibilities.map((resp, idx) => (
                        <li key={idx} className="flex items-start space-x-2 text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-sm leading-relaxed">{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
