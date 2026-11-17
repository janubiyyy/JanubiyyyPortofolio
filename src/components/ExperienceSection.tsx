import React, { useState, useRef, useEffect, useCallback } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  CalendarDays,
  MapPin,
  CheckCircle2,
  ChevronUp,
  ChevronDown,
  ShieldCheck,
  Building2,
  Clock,
  Camera,
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

interface Experience {
  id: string;
  number: string;
  company: string;
  client: string;
  position: string;
  period: string;
  location: string;
  badge: string;
  current: boolean;
  summary: string;
  responsibilities: string[];
  tags: string[];
  photos?: {
    src: string;
    caption: string;
  }[];
}

const ExperienceSection: React.FC = () => {
  const { language } = useLanguage();
  const [activeSlide, setActiveSlide] = useState(0);
  const [direction, setDirection] = useState<"up" | "down">("down");
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Photo Lightbox Modal State
  const [activePhotoModal, setActivePhotoModal] = useState<{
    photos: { src: string; caption: string }[];
    company: string;
  } | null>(null);
  const [activePhotoIndex, setActivePhotoIndex] = useState(0);

  // 3D Tilt state
  const [tilt, setTilt] = useState({ x: 0, y: 0, glareX: 50, glareY: 50, opacity: 0 });
  const cardRef = useRef<HTMLDivElement>(null);
  const touchStartY = useRef<number | null>(null);

  const experiences: Experience[] = [
    {
      id: "mii-jasamarga",
      number: "01",
      company: "MII (Mitra Integrasi Informatika)",
      client: "PT Jasa Marga (Persero) Tbk Placement",
      position: "Frontend Developer",
      period: `Jan 2025 – ${language === "id" ? "Sekarang" : "Present"}`,
      location: "Jakarta, Indonesia",
      badge: language === "id" ? "Posisi Saat Ini" : "Current Role",
      current: true,
      summary:
        language === "id"
          ? "Bertanggung jawab atas rekayasa aplikasi web enterprise untuk pemantauan operasional jalan tol PT Jasa Marga (Persero) Tbk melalui penempatan resmi MII."
          : "Responsible for engineering mission-critical internal web portals for toll road operations and asset monitoring at PT Jasa Marga (Persero) Tbk through official MII placement.",
      responsibilities:
        language === "id"
          ? [
              "Mengembangkan portal web enterprise menggunakan Next.js dan TypeScript untuk sistem operasional tol dan pemantauan transaksi real-time.",
              "Membangun dashboard analitik berbasis data serta antarmuka validasi transaksi terintegrasi RESTful APIs.",
              "Mendukung otomatisasi alur kerja CI/CD menggunakan Jenkins, GitLab, dan deployment kluster Red Hat OpenShift.",
              "Berkolaborasi aktif dengan Backend Engineer, System Analyst, dan tim QA untuk menjaga keandalan sistem tanpa downtime.",
              "Mengoptimalkan performa rendering halaman dan Core Web Vitals untuk penanganan data operasional yang responsif.",
            ]
          : [
              "Developing enterprise web portals using Next.js and TypeScript for toll operations and real-time transaction monitoring.",
              "Building data-driven analytical dashboards and transaction validation interfaces integrated with RESTful APIs.",
              "Supporting CI/CD automated deployment workflows via Jenkins, GitLab, and Red Hat OpenShift cluster deployments.",
              "Collaborating with backend engineers, system analysts, and QA to maintain high system reliability and zero-downtime.",
              "Optimizing frontend rendering and Core Web Vitals for smooth, responsive enterprise data management.",
            ],
      tags: ["Next.js", "TypeScript", "REST API", "Jenkins", "GitLab", "OpenShift", "MUI", "Tailwind CSS"],
      photos: [
        {
          src: "/assets/jm1.jpeg",
          caption:
            language === "id"
              ? "Dokumentasi Kerja Operasional Tol Jasa Marga"
              : "Jasa Marga Toll Operations Work Documentation",
        },
        {
          src: "/assets/jm2.jpeg",
          caption:
            language === "id"
              ? "Lingkungan Kerja & Koordinasi Tim Jasa Marga"
              : "Jasa Marga Office & Engineering Environment",
        },
        {
          src: "/assets/jm3.jpeg",
          caption:
            language === "id"
              ? "Aktivitas Operasional & Monitoring Jasa Marga"
              : "Operational Activity & Monitoring at Jasa Marga",
        },
      ],
    },
    {
      id: "erlangga",
      number: "02",
      company: "PT Penerbit Erlangga",
      client: "Internal Web Engineering Team",
      position: "Frontend Developer",
      period: "Aug 2022 – Jan 2025",
      location: "Jakarta, Indonesia",
      badge: "2.5 Years",
      current: false,
      summary:
        language === "id"
          ? "Mengembangkan dan memelihara platform belanja e-commerce publik, portal administrasi CMS bisnis, serta kalkulator simulasi kredit pembiayaan mobil untuk jutaan pengguna."
          : "Engineered and maintained e-commerce shopping storefronts, internal CMS admin portals, and an interactive car loan calculator serving high user volumes.",
      responsibilities:
        language === "id"
          ? [
              "Membangun antarmuka e-commerce (EurekaBookhouse, Jaja.id) menggunakan Vue.js, Vuex, Vuetify, dan Tailwind CSS.",
              "Mengembangkan dashboard administrasi CMS kustom (Katarasa, EurekaBookhouse) dengan React.js, Redux, dan Ant Design.",
              "Menciptakan tool simulasi kredit mobil interaktif (Jaja Auto) dengan komputasi reaktif instan menggunakan Lodash.",
              "Menerjemahkan rancangan Figma menjadi antarmuka responsif dengan akurasi piksel tinggi dan kompatibilitas lintas browser.",
              "Menerapkan strategi progressive lazy loading gambar dan optimasi bundel untuk kecepatan akses pengguna.",
            ]
          : [
              "Built online commerce storefronts (EurekaBookhouse, Jaja.id) using Vue.js, Vuex, Vuetify, and Tailwind CSS.",
              "Developed custom admin CMS dashboards (Katarasa, EurekaBookhouse) using React.js, Redux, and Ant Design.",
              "Engineered interactive car financing simulation tools (Jaja Auto) with instant reactive computations via Lodash.",
              "Translated Figma specifications into responsive web interfaces with pixel-accurate fidelity across browsers.",
              "Implemented progressive image lazy loading and bundle splitting optimizations for responsive user experiences.",
            ],
      tags: ["Vue.js", "React.js", "Vuex", "Redux", "Vuetify", "Ant Design", "Tailwind CSS", "REST API"],
      photos: [
        {
          src: "/assets/eur1.jpeg",
          caption:
            language === "id"
              ? "Dokumentasi Kerja PT Penerbit Erlangga / Eureka"
              : "Work Documentation at PT Penerbit Erlangga / Eureka",
        },
        {
          src: "/assets/eur2.jpeg",
          caption:
            language === "id"
              ? "Aktivitas Tim Web Engineering Eureka Bookhouse"
              : "Eureka Bookhouse Web Engineering Team Activity",
        },
      ],
    },
    {
      id: "sociolla",
      number: "03",
      company: "PT Sociolla Bella Indonesia",
      client: "Operations Leadership",
      position: "Team Leader",
      period: "Aug 2021 – Aug 2022",
      location: "Jakarta, Indonesia",
      badge: "1 Year",
      current: false,
      summary:
        language === "id"
          ? "Memimpin tim operasional dalam mencapai efisiensi alur kerja harian dan target performa tinggi, melatih keahlian komunikasi serta kepemimpinan lintas fungsi."
          : "Led operational team exceeding performance targets, fostering structured cross-functional communication and collaborative problem-solving.",
      responsibilities:
        language === "id"
          ? [
              "Memimpin tim operasional dalam perencanaan strategis, evaluasi alur kerja, dan koordinasi harian.",
              "Meningkatkan kelancaran eksekusi tim melalui standarisasi alur kerja kolaboratif.",
              "Mengembangkan kemampuan komunikasi kritis dan manajemen prioritas yang menjadi fondasi kepemimpinan teknis saat ini.",
            ]
          : [
              "Led an operational team through strategic daily planning, workflow evaluation, and objective tracking.",
              "Streamlined team execution through standardized collaborative processes and quality benchmarks.",
              "Cultivated critical communication and priority management that form the backbone of technical collaboration today.",
            ],
      tags: ["Team Leadership", "Cross-Functional Collaboration", "Workflow Optimization", "Agile Mindset"],
    },
  ];

  const currentExp = experiences[activeSlide];

  // Vertical slide navigation
  const goToSlide = useCallback((index: number) => {
    if (index === activeSlide || isTransitioning) return;
    setDirection(index > activeSlide ? "down" : "up");
    setIsTransitioning(true);
    setActiveSlide(index);
    setTimeout(() => setIsTransitioning(false), 400);
  }, [activeSlide, isTransitioning]);

  const slideDown = useCallback(() => {
    if (isTransitioning) return;
    const next = (activeSlide + 1) % experiences.length;
    setDirection("down");
    setIsTransitioning(true);
    setActiveSlide(next);
    setTimeout(() => setIsTransitioning(false), 400);
  }, [activeSlide, experiences.length, isTransitioning]);

  const slideUp = useCallback(() => {
    if (isTransitioning) return;
    const prev = (activeSlide - 1 + experiences.length) % experiences.length;
    setDirection("up");
    setIsTransitioning(true);
    setActiveSlide(prev);
    setTimeout(() => setIsTransitioning(false), 400);
  }, [activeSlide, experiences.length, isTransitioning]);

  // Keyboard navigation (Up/Down keys for slide, Esc/Left/Right for photo modal)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activePhotoModal) {
        if (e.key === "Escape") {
          setActivePhotoModal(null);
        } else if (e.key === "ArrowLeft") {
          setActivePhotoIndex(
            (prev) => (prev - 1 + activePhotoModal.photos.length) % activePhotoModal.photos.length
          );
        } else if (e.key === "ArrowRight") {
          setActivePhotoIndex((prev) => (prev + 1) % activePhotoModal.photos.length);
        }
        return;
      }

      if (e.key === "ArrowUp") {
        e.preventDefault();
        slideUp();
      }
      if (e.key === "ArrowDown") {
        e.preventDefault();
        slideDown();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [slideDown, slideUp, activePhotoModal]);

  // Touch vertical swipe on mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartY.current === null) return;
    const touchEndY = e.changedTouches[0].clientY;
    const diff = touchStartY.current - touchEndY;
    if (Math.abs(diff) > 40) {
      if (diff > 0) slideDown();
      else slideUp();
    }
    touchStartY.current = null;
  };

  // 3D Tilt calculation
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = -((y - centerY) / centerY) * 4;
    const rotateY = ((x - centerX) / centerX) * 4;

    setTilt({
      x: rotateX,
      y: rotateY,
      glareX: (x / rect.width) * 100,
      glareY: (y / rect.height) * 100,
      opacity: 0.14,
    });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0, glareX: 50, glareY: 50, opacity: 0 });
  };

  const openPhotoModal = (initialIndex: number) => {
    if (!currentExp.photos || currentExp.photos.length === 0) return;
    setActivePhotoIndex(initialIndex);
    setActivePhotoModal({
      photos: currentExp.photos,
      company: currentExp.company,
    });
  };

  return (
    <section id="experience" className="py-24 relative overflow-hidden" aria-label="Work experience">
      {/* Warm Ambient Radial Glow */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[550px] h-[350px] bg-[#c88746]/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          
          {/* Section Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <span className="section-label mb-3">
                {language === "id" ? "Riwayat Karier" : "Career Trajectory"}
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground mt-2">
                {language === "id" ? "Pengalaman Rekayasa Profesional" : "Professional Work Experience"}
              </h2>
              <p className="text-muted-foreground mt-2 max-w-xl text-sm">
                {language === "id"
                  ? "Jejak kontribusi rekayasa pada sistem tol enterprise, e-commerce ritel, dan platform CMS."
                  : "Demonstrated track record across enterprise toll operations, retail e-commerce, and administrative platforms."}
              </p>
            </div>

            {/* Vertical Controls Counter & Up/Down Arrows */}
            <div className="flex items-center gap-3 self-start sm:self-auto">
              <div className="px-3.5 py-1.5 rounded-full border border-border/80 bg-card/60 backdrop-blur-md text-xs font-mono font-semibold text-muted-foreground">
                <span className="text-[#8a4b1f] dark:text-[#f0ca9f] font-bold">{currentExp.number}</span>
                <span className="mx-1">/</span>
                <span>0{experiences.length}</span>
              </div>

              <div className="flex items-center gap-1.5">
                <button
                  onClick={slideUp}
                  aria-label="Previous role (slide up)"
                  className="w-10 h-10 rounded-xl border border-border/80 bg-card/80 hover:border-[#c88746]/60 hover:text-[#c88746] hover:bg-[#c88746]/10 flex items-center justify-center transition-all duration-200 active:scale-95 shadow-sm"
                  title="Previous role (Arrow Up)"
                >
                  <ChevronUp className="w-4 h-4" />
                </button>
                <button
                  onClick={slideDown}
                  aria-label="Next role (slide down)"
                  className="w-10 h-10 rounded-xl border border-border/80 bg-card/80 hover:border-[#c88746]/60 hover:text-[#c88746] hover:bg-[#c88746]/10 flex items-center justify-center transition-all duration-200 active:scale-95 shadow-sm"
                  title="Next role (Arrow Down)"
                >
                  <ChevronDown className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Vertical Trajectory Layout: Left Vertical Tabs + Right Vertical 3D Stage */}
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Vertical Timeline Tabs */}
            <div className="lg:col-span-4 flex flex-col gap-3 relative">
              
              {/* Subtle Vertical Connector Track (Desktop) */}
              <div className="hidden lg:block absolute left-6 top-6 bottom-6 w-0.5 bg-border/60 pointer-events-none" />

              {experiences.map((exp, idx) => {
                const isActive = activeSlide === idx;
                return (
                  <button
                    key={exp.id}
                    onClick={() => goToSlide(idx)}
                    className={`relative z-10 text-left p-4 sm:p-5 rounded-2xl border transition-all duration-300 flex items-start gap-3.5 group ${
                      isActive
                        ? "border-[#c88746] bg-[#8a4b1f]/[0.08] dark:bg-[#c88746]/10 shadow-lg shadow-[#c88746]/10 scale-[1.02]"
                        : "border-border/80 bg-card/60 hover:bg-muted/60 hover:border-border"
                    }`}
                  >
                    {/* Active Accent Bar */}
                    {isActive && (
                      <span className="absolute left-0 top-3 bottom-3 w-1.5 bg-[#8a4b1f] dark:bg-[#d49b64] rounded-r-full" />
                    )}

                    {/* Step Number Dot */}
                    <div
                      className={`w-7 h-7 rounded-lg flex items-center justify-center font-mono text-xs font-bold flex-shrink-0 transition-colors mt-0.5 ${
                        isActive
                          ? "bg-[#8a4b1f] dark:bg-[#d49b64] text-white dark:text-[#181310] shadow-sm"
                          : "bg-muted text-muted-foreground group-hover:text-foreground"
                      }`}
                    >
                      {exp.number}
                    </div>

                    <div className="space-y-1 min-w-0 flex-1">
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-[11px] font-mono text-muted-foreground">
                          {exp.period}
                        </span>
                        <div className="flex items-center gap-1.5">
                          {exp.photos && exp.photos.length > 0 && (
                            <span className="inline-flex items-center gap-1 text-[10px] font-mono text-muted-foreground bg-muted/60 px-1.5 py-0.5 rounded-md border border-border">
                              <Camera className="w-2.5 h-2.5 text-[#c88746]" />
                              <span>{exp.photos.length}</span>
                            </span>
                          )}
                          {exp.current && (
                            <span className="inline-flex items-center gap-1 text-[10px] font-mono font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/25">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                              Active
                            </span>
                          )}
                        </div>
                      </div>

                      <h3
                        className={`font-bold text-sm sm:text-base leading-snug transition-colors truncate ${
                          isActive ? "text-foreground" : "text-foreground/80 group-hover:text-foreground"
                        }`}
                      >
                        {exp.company}
                      </h3>

                      <p className="text-xs text-[#8a4b1f] dark:text-[#f0ca9f] font-semibold truncate">
                        {exp.position}
                      </p>

                      <p className="text-[11px] text-muted-foreground/90 truncate">
                        {exp.client}
                      </p>
                    </div>
                  </button>
                );
              })}

              {/* Vertical Navigation Hint */}
              <div className="hidden lg:flex items-center gap-2 pt-2 px-2 text-[11px] font-mono text-muted-foreground/70">
                <Clock className="w-3.5 h-3.5 text-[#c88746]" />
                <span>Navigate roles with ↑ / ↓ keys</span>
              </div>
            </div>

            {/* Right Column: 3D Interactive Vertical Stage Card */}
            <div
              className="lg:col-span-8 perspective-1200"
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              <div
                ref={cardRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                className={`relative rounded-3xl border border-[#c88746]/35 bg-card/95 backdrop-blur-xl p-6 sm:p-9 shadow-2xl shadow-[#8a4b1f]/10 preserve-3d transition-all duration-400 ease-out overflow-hidden ${
                  isTransitioning
                    ? direction === "down"
                      ? "opacity-60 translate-y-3 scale-[0.99]"
                      : "opacity-60 -translate-y-3 scale-[0.99]"
                    : "opacity-100 translate-y-0 scale-100"
                }`}
                style={{
                  transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
                }}
              >
                {/* Dynamic 3D Specular Glare Overlay */}
                <div
                  className="absolute inset-0 pointer-events-none transition-opacity duration-300 rounded-3xl"
                  style={{
                    background: `radial-gradient(circle 350px at ${tilt.glareX}% ${tilt.glareY}%, rgba(200, 135, 70, ${tilt.opacity}), transparent 70%)`,
                  }}
                />

                {/* Card Header: Role Title, Company, Placement, & Date */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-6 border-b border-border/70 relative z-10">
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2.5 flex-wrap">
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
                        {currentExp.position}
                      </h3>
                      {currentExp.current ? (
                        <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30 text-xs font-mono font-bold">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                          {currentExp.badge}
                        </span>
                      ) : (
                        <span className="px-2.5 py-0.5 rounded-full bg-muted text-muted-foreground border border-border text-[11px] font-mono font-semibold">
                          {currentExp.badge}
                        </span>
                      )}
                    </div>

                    <p className="text-sm sm:text-base font-bold text-[#8a4b1f] dark:text-[#f0ca9f] flex items-center gap-2">
                      <Building2 className="w-4 h-4 text-[#c88746] flex-shrink-0" />
                      <span>{currentExp.company}</span>
                      <span className="text-muted-foreground font-normal text-xs sm:text-sm">
                        ({currentExp.client})
                      </span>
                    </p>
                  </div>

                  <div className="flex sm:flex-col sm:items-end gap-2 text-xs font-mono text-muted-foreground flex-shrink-0">
                    <span className="inline-flex items-center gap-1.5">
                      <CalendarDays className="w-3.5 h-3.5 text-[#c88746]" />
                      {currentExp.period}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#c88746]" />
                      {currentExp.location}
                    </span>
                  </div>
                </div>

                {/* Role Summary */}
                <div className="py-5 relative z-10">
                  <p className="text-sm sm:text-base text-foreground/90 leading-relaxed font-medium">
                    {currentExp.summary}
                  </p>
                </div>

                {/* Work Documentation Photos Strip */}
                {currentExp.photos && currentExp.photos.length > 0 && (
                  <div className="py-4 my-2 border-y border-border/70 relative z-10 space-y-3">
                    <div className="flex items-center justify-between">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
                        <Camera className="w-3.5 h-3.5 text-[#c88746]" />
                        <span>
                          {language === "id"
                            ? "Dokumentasi Kerja & Lingkungan Proyek"
                            : "Work Documentation & Office Environment"}
                        </span>
                      </h4>
                      <span className="text-[11px] font-mono text-[#8a4b1f] dark:text-[#f0ca9f] font-semibold">
                        {currentExp.photos.length} {language === "id" ? "Foto Terverifikasi" : "Verified Photos"}
                      </span>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {currentExp.photos.map((photo, pIdx) => (
                        <button
                          key={pIdx}
                          type="button"
                          onClick={() => openPhotoModal(pIdx)}
                          className="group relative aspect-[4/3] rounded-2xl overflow-hidden border border-border/80 bg-muted/40 hover:border-[#c88746] transition-all duration-300 shadow-sm hover:shadow-md hover:scale-[1.02] text-left"
                          title={language === "id" ? "Klik untuk melihat foto" : "Click to inspect photo"}
                        >
                          <img
                            src={photo.src}
                            alt={photo.caption}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-108"
                            loading="lazy"
                          />

                          {/* Hover Overlay */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col justify-end p-2.5">
                            <span className="text-[11px] font-medium text-white line-clamp-1 leading-snug">
                              {photo.caption}
                            </span>
                            <span className="text-[9px] font-mono text-emerald-400 mt-0.5 flex items-center gap-1">
                              <Maximize2 className="w-2.5 h-2.5" />
                              {language === "id" ? "Perbesar" : "Expand"}
                            </span>
                          </div>

                          {/* Camera Icon Badge */}
                          <div className="absolute top-2 right-2 w-6 h-6 rounded-lg bg-black/45 backdrop-blur-md flex items-center justify-center text-white/90 group-hover:bg-[#c88746] group-hover:text-white transition-colors">
                            <Camera className="w-3 h-3" />
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Key Deliverables & Responsibilities */}
                <div className="space-y-3 pt-3 relative z-10">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#c88746]" />
                    <span>
                      {language === "id"
                        ? "Tanggung Jawab & Kontribusi Kunci"
                        : "Key Responsibilities & Deliverables"}
                    </span>
                  </h4>
                  <ul className="space-y-2.5">
                    {currentExp.responsibilities.map((r, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-xs sm:text-sm text-foreground/85 leading-relaxed"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#c88746] flex-shrink-0 mt-0.5" />
                        <span>{r}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Applied Technologies Footer */}
                <div className="pt-6 mt-6 border-t border-border/70 flex flex-col sm:flex-row sm:items-center justify-between gap-4 relative z-10">
                  <div className="space-y-2">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground block font-bold">
                      Applied Technologies:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {currentExp.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 rounded-lg border border-[#c88746]/30 bg-[#c88746]/[0.08] text-xs font-mono font-semibold text-[#8a4b1f] dark:text-[#f0ca9f]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Vertical Progress Step Indicator */}
                  <div className="flex items-center gap-2 self-start sm:self-auto">
                    {experiences.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => goToSlide(idx)}
                        aria-label={`Go to role ${idx + 1}`}
                        className={`h-2 rounded-full transition-all duration-300 ${
                          activeSlide === idx
                            ? "w-7 bg-[#8a4b1f] dark:bg-[#d49b64]"
                            : "w-2 bg-border hover:bg-[#c88746]/50"
                        }`}
                      />
                    ))}
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>
      </div>

      {/* Fullscreen Photo Lightbox Modal */}
      {activePhotoModal && (
        <div
          className="fixed inset-0 z-50 bg-background/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fade-in"
          onClick={() => setActivePhotoModal(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-card border border-[#c88746]/40 rounded-3xl overflow-hidden shadow-2xl p-4 sm:p-6 space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Top Bar */}
            <div className="flex items-center justify-between pb-3 border-b border-border/70">
              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#8a4b1f] dark:text-[#f0ca9f] font-bold">
                  {activePhotoModal.company} • {language === "id" ? "Dokumentasi Kerja" : "Work Documentation"}
                </span>
                <h4 className="text-sm font-bold text-foreground mt-0.5">
                  {activePhotoModal.photos[activePhotoIndex]?.caption}
                </h4>
              </div>

              <button
                onClick={() => setActivePhotoModal(null)}
                className="p-2 rounded-xl border border-border text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                title="Tutup (Esc)"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Main Image Frame */}
            <div className="relative aspect-[16/10] sm:aspect-[16/9] max-h-[65vh] w-full rounded-2xl overflow-hidden bg-black/60 flex items-center justify-center">
              <img
                src={activePhotoModal.photos[activePhotoIndex]?.src}
                alt={activePhotoModal.photos[activePhotoIndex]?.caption}
                className="w-full h-full object-contain"
              />

              {/* Prev / Next buttons */}
              {activePhotoModal.photos.length > 1 && (
                <>
                  <button
                    onClick={() =>
                      setActivePhotoIndex(
                        (activePhotoIndex - 1 + activePhotoModal.photos.length) %
                          activePhotoModal.photos.length
                      )
                    }
                    className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/60 hover:bg-[#c88746] text-white transition-colors"
                    title="Foto sebelumnya"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() =>
                      setActivePhotoIndex(
                        (activePhotoIndex + 1) % activePhotoModal.photos.length
                      )
                    }
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/60 hover:bg-[#c88746] text-white transition-colors"
                    title="Foto selanjutnya"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </>
              )}
            </div>

            {/* Modal Bottom Bar with Thumbnails & Counter */}
            <div className="flex items-center justify-between pt-1">
              <div className="flex items-center gap-2">
                {activePhotoModal.photos.map((p, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActivePhotoIndex(idx)}
                    className={`w-12 h-9 rounded-lg overflow-hidden border-2 transition-all ${
                      activePhotoIndex === idx
                        ? "border-[#c88746] scale-105 shadow-md shadow-[#c88746]/20"
                        : "border-border/70 opacity-60 hover:opacity-100"
                    }`}
                  >
                    <img src={p.src} alt="thumb" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>

              <span className="text-xs font-mono text-muted-foreground">
                {activePhotoIndex + 1} / {activePhotoModal.photos.length}
              </span>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};

export default ExperienceSection;
