import React, { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Layers, Zap, Map, GitBranch, Sparkles } from "lucide-react";

const useInView = (threshold = 0.15) => {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold }
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
};

interface PillarProps {
  icon: React.ReactNode;
  title: string;
  desc: string;
}

const PillarTiltCard = ({ pillar }: { pillar: PillarProps }) => {
  const [tilt, setTilt] = useState({ x: 0, y: 0, glareX: 50, glareY: 50, opacity: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setTilt({
      x: -(y / (rect.height / 2)) * 7,
      y: (x / (rect.width / 2)) * 7,
      glareX: ((e.clientX - rect.left) / rect.width) * 100,
      glareY: ((e.clientY - rect.top) / rect.height) * 100,
      opacity: 0.22,
    });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0, glareX: 50, glareY: 50, opacity: 0 });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="p-4 sm:p-5 rounded-2xl border border-border/80 bg-card/60 backdrop-blur-sm hover:border-[#c88746]/60 hover:bg-card/95 transition-all duration-200 space-y-2 shadow-sm hover:shadow-lg hover:shadow-[#c88746]/10 relative overflow-hidden group cursor-pointer"
      style={{
        transform: `perspective(800px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
      }}
    >
      {/* Specular glare */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle 220px at ${tilt.glareX}% ${tilt.glareY}%, rgba(200, 135, 70, ${tilt.opacity}), transparent 70%)`,
        }}
      />
      <div className="w-9 h-9 rounded-xl bg-[#c88746]/10 border border-[#c88746]/20 flex items-center justify-center group-hover:scale-110 transition-transform">
        {pillar.icon}
      </div>
      <h3 className="text-xs sm:text-sm font-bold text-foreground group-hover:text-[#c88746] transition-colors">
        {pillar.title}
      </h3>
      <p className="text-[11px] sm:text-xs text-muted-foreground leading-relaxed">
        {pillar.desc}
      </p>
    </div>
  );
};

const AboutPhotoCard = ({ language }: { language: string }) => {
  const [tilt, setTilt] = useState({ x: 0, y: 0, glareX: 50, glareY: 50, opacity: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setTilt({
      x: -(y / (rect.height / 2)) * 6,
      y: (x / (rect.width / 2)) * 6,
      glareX: ((e.clientX - rect.left) / rect.width) * 100,
      glareY: ((e.clientY - rect.top) / rect.height) * 100,
      opacity: 0.2,
    });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0, glareX: 50, glareY: 50, opacity: 0 });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative preserve-3d transition-transform duration-200 ease-out cursor-pointer group max-w-sm mx-auto lg:max-w-none w-full"
      style={{
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
      }}
    >
      {/* Warm Ambient Backlight Aura */}
      <div className="absolute inset-4 bg-gradient-to-tr from-[#8a4b1f]/25 via-[#c88746]/30 to-[#e6a86c]/20 rounded-3xl blur-2xl opacity-60 pointer-events-none" />

      {/* Frame Container */}
      <div className="relative w-full h-[420px] sm:h-[480px] lg:h-full min-h-[460px] rounded-3xl overflow-hidden border border-[#c88746]/35 bg-card/50 backdrop-blur-md shadow-2xl shadow-[#8a4b1f]/10 flex flex-col justify-between">
        <img
          src="/assets/tas.jpeg"
          alt="Tasya Khaerani Janubiya"
          className="w-full h-full object-cover object-[center_18%] transition-transform duration-700 group-hover:scale-105"
        />

        {/* Specular Glare */}
        <div
          className="absolute inset-0 pointer-events-none rounded-3xl transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle 280px at ${tilt.glareX}% ${tilt.glareY}%, rgba(255, 255, 255, ${tilt.opacity}), transparent 65%)`,
          }}
        />

        {/* Soft vignette overlay at the bottom */}
        <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-black/85 via-black/45 to-transparent pointer-events-none" />

        {/* Floating Identity & Role Pill at the bottom */}
        <div
          className="absolute bottom-4 inset-x-4 p-3.5 rounded-2xl bg-card/90 backdrop-blur-xl border border-[#c88746]/40 text-foreground shadow-xl flex items-center justify-between gap-3 z-10"
          style={{ transform: "translateZ(30px)" }}
        >
          <div>
            <div className="text-xs font-bold text-foreground leading-tight">
              Tasya Khaerani Janubiya
            </div>
            <div className="text-[11px] font-mono font-semibold text-[#8a4b1f] dark:text-[#f0ca9f] mt-0.5">
              Senior Frontend Developer
            </div>
          </div>
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/25 text-[10px] font-mono font-bold flex-shrink-0">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            4+ Yrs
          </span>
        </div>
      </div>
    </div>
  );
};

const AboutSection = () => {
  const { language } = useLanguage();
  const { ref, inView } = useInView();

  const engineeringPillars: PillarProps[] = [
    {
      icon: <Layers className="w-5 h-5 text-[#c88746]" />,
      title: language === "id" ? "Arsitektur Komponen Skalabel" : "Scalable UI Architecture",
      desc:
        language === "id"
          ? "Sistem desain modular dan type-safe berbasis React & Next.js yang mudah dipelihara dan diskalakan."
          : "Type-safe, modular UI components and design systems that scale predictably across enterprise codebases.",
    },
    {
      icon: <Zap className="w-5 h-5 text-[#c88746]" />,
      title: language === "id" ? "Optimasi Performa & UX" : "Performance & Usability",
      desc:
        language === "id"
          ? "Rendering sub-detik, Core Web Vitals optimal, dan transisi responsif sesuai standar spesifikasi Figma."
          : "Tuning sub-second page loads, Core Web Vitals, and pixel-precise responsive layouts directly from Figma.",
    },
    {
      icon: <Map className="w-5 h-5 text-[#c88746]" />,
      title: language === "id" ? "Visualisasi Data Spasial & Real-Time" : "Spatial & Real-Time Data",
      desc:
        language === "id"
          ? "Integrasi peta interaktif Mapbox GL, layer vektor GeoJSON tol, dan dashboard operasional real-time."
          : "Integrating interactive Mapbox GL GIS mapping, GeoJSON vector layers, and data-dense operational dashboards.",
    },
    {
      icon: <GitBranch className="w-5 h-5 text-[#c88746]" />,
      title: language === "id" ? "Standar Produksi & CI/CD" : "Production Standards & CI/CD",
      desc:
        language === "id"
          ? "Kolaborasi Agile bersama tim Backend, QA, dan DevOps dengan deployment Jenkins, GitLab, serta OpenShift."
          : "Collaborating across cross-functional Agile teams with automated Jenkins, GitLab CI, and OpenShift workflows.",
    },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden" aria-label="About section">
      {/* Dynamic Warm Ambient Glow */}
      <div className="absolute top-1/2 left-10 w-[450px] h-[350px] bg-[#c88746]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div ref={ref} className="max-w-6xl mx-auto">
          
          {/* Section Header */}
          <div
            className={`mb-12 transition-all duration-700 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <span className="section-label mb-3">
              {language === "id" ? "Tentang Rekayasa" : "Engineering Background"}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground mt-2">
              {language === "id"
                ? "Menghubungkan Desain Kompleks dengan Arsitektur Web yang Andal"
                : "Bridging Complex Systems with Intuitive Web Interfaces"}
            </h2>
          </div>

          {/* Main 2-Column Suite: Left Portrait Photo + Right Narrative & Pillars */}
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
            
            {/* Left Column: Portrait Photo with 3D Tilt (lg:col-span-4) */}
            <div
              className={`lg:col-span-4 flex flex-col justify-center transition-all duration-700 delay-100 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              <AboutPhotoCard language={language} />
            </div>

            {/* Right Column: Bio Narrative + 4 Engineering Pillars (lg:col-span-8) */}
            <div
              className={`lg:col-span-8 flex flex-col justify-between space-y-6 transition-all duration-700 delay-200 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              {/* Bio Narrative */}
              <div className="space-y-4">
                <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                  {language === "id"
                    ? "Sebagai frontend engineer, fokus utama saya adalah merancang antarmuka web yang tidak hanya indah secara estetika, tetapi juga kokoh secara teknis. Saya memiliki pengalaman menangani aplikasi skala besar — mulai dari sistem pemantauan jalan tol internal bernavigasi geospasial hingga platform e-commerce dan dashboard operasional bisnis."
                    : "As a frontend engineer, my priority is architecting web applications that are as technically sound as they are intuitive. My experience centers on building mission-critical enterprise applications — from real-time toll operations and interactive GIS mapping to high-throughput e-commerce storefronts and business administration CMS portals."}
                </p>

                <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                  {language === "id"
                    ? "Bekerja di lingkungan enterprise menuntut disiplin tinggi terhadap performa, keamanan tipe (TypeScript), dan integrasi data yang stabil. Saya percaya bahwa kode yang baik adalah kode yang modular, mudah diuji, dan menyenangkan untuk dipelihara bersama tim lintas fungsi."
                    : "Operating within enterprise environments demands rigorous attention to runtime performance, strict TypeScript type safety, and resilient data contracts. I believe great engineering results in modular, testable code that empowers cross-functional teams to ship features with speed and confidence."}
                </p>
              </div>

              {/* 4 Engineering Pillars Grid with 3D Tilt */}
              <div className="grid sm:grid-cols-2 gap-3.5">
                {engineeringPillars.map((pillar, i) => (
                  <PillarTiltCard key={i} pillar={pillar} />
                ))}
              </div>

              {/* Quiet Professional Note */}
              <div className="pt-3 border-t border-border/70 flex items-center gap-3 text-xs text-muted-foreground font-mono">
                <span className="w-2 h-2 rounded-full bg-[#c88746] animate-pulse" />
                <span>
                  {language === "id"
                    ? "Berfokus pada arsitektur bersih, performa web, dan kolaborasi tim yang solid."
                    : "Focused on clean architecture, web performance, and reliable engineering collaboration."}
                </span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
