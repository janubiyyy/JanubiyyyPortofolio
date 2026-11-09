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
      className="p-5 rounded-2xl border border-border/80 bg-card/60 backdrop-blur-sm hover:border-[#c88746]/60 hover:bg-card/95 transition-all duration-200 space-y-2.5 shadow-sm hover:shadow-lg hover:shadow-[#c88746]/10 relative overflow-hidden group cursor-pointer"
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
      <div className="w-10 h-10 rounded-xl bg-[#c88746]/10 border border-[#c88746]/20 flex items-center justify-center group-hover:scale-110 transition-transform">
        {pillar.icon}
      </div>
      <h3 className="text-sm font-bold text-foreground group-hover:text-[#c88746] transition-colors">
        {pillar.title}
      </h3>
      <p className="text-xs text-muted-foreground leading-relaxed">
        {pillar.desc}
      </p>
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

          <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            
            {/* Left Bio Narrative (6 cols) */}
            <div
              className={`lg:col-span-6 space-y-5 transition-all duration-700 delay-100 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
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

              {/* Quiet Professional Note */}
              <div className="pt-4 border-t border-border/70 flex items-center gap-3 text-xs text-muted-foreground font-mono">
                <span className="w-2 h-2 rounded-full bg-[#c88746] animate-pulse" />
                <span>
                  {language === "id"
                    ? "Berfokus pada arsitektur bersih, performa web, dan kolaborasi tim yang solid."
                    : "Focused on clean architecture, web performance, and reliable engineering collaboration."}
                </span>
              </div>
            </div>

            {/* Right Pillars Grid with 3D Tilt (6 cols) */}
            <div
              className={`lg:col-span-6 grid sm:grid-cols-2 gap-4 transition-all duration-700 delay-200 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              {engineeringPillars.map((pillar, i) => (
                <PillarTiltCard key={i} pillar={pillar} />
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
