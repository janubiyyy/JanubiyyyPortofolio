import React, { useState, useEffect, useMemo, useCallback, useRef } from "react";
import {
  X,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Maximize2,
  ExternalLink,
  Layers,
  Eye,
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

interface Project {
  id: string;
  number: string;
  title: string;
  shortTitle: string;
  category: string;
  subCategory: string;
  year: string;
  role: string;
  overview: string;
  description: string;
  image: string;
  screenshots: string[];
  tags: string[];
}

export const ProjectsSection = () => {
  const { language } = useLanguage();
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [selectedModalProject, setSelectedModalProject] = useState<Project | null>(null);
  const [activeScreenshotIdx, setActiveScreenshotIdx] = useState<number>(0);
  const [isFullscreenImage, setIsFullscreenImage] = useState<boolean>(false);

  const touchStartXRef = useRef<number | null>(null);

  const projects: Project[] = useMemo(
    () => [
      {
        id: "tcm-dashboard",
        number: "01",
        title: "TCM — Toll Collection Management System",
        shortTitle: "TCM Jasa Marga",
        category: language === "id" ? "Sistem Enterprise" : "Enterprise System",
        subCategory: "PT Jasa Marga (Persero) Tbk",
        year: "2025",
        role: language === "id" ? "Frontend Developer · Penempatan MII" : "Frontend Developer · MII Placement",
        overview:
          language === "id"
            ? "Portal web internal enterprise skala nasional untuk Sistem Manajemen Pengumpulan Tol Jasa Marga. Menyediakan pemantauan lalu lintas gerbang tol real-time, dashboard analitik operasional, dan modul validasi transaksi."
            : "National-scale enterprise web portal for Jasa Marga's Toll Collection Management System. Provides real-time toll plaza monitoring, operational dashboards, and transaction validation.",
        description:
          language === "id"
            ? "Portal web internal enterprise skala nasional untuk Sistem Manajemen Pengumpulan Tol Jasa Marga (TCMS). Menyediakan pemantauan lalu lintas gerbang tol real-time, dashboard analitik operasional, antarmuka validasi transaksi terpusat, dan modul pelaporan harian."
            : "National enterprise internal web portal for Jasa Marga's Toll Collection Management System (TCMS). Provides real-time traffic monitoring across toll plazas, operational dashboards, centralized transaction validation interfaces, and daily reporting.",
        image: "/assets/JM.png",
        screenshots: ["/assets/JM.png"],
        tags: ["Next.js 14", "TypeScript", "REST API", "OpenShift", "Jenkins CI/CD", "Tailwind CSS"],
      },
      {
        id: "jm-rise-map",
        number: "02",
        title: "JM-RISE — Interactive GIS Map Dashboard",
        shortTitle: "JM-RISE Map GIS",
        category: language === "id" ? "Visualisasi Geospasial" : "GIS & Spatial Data",
        subCategory: "PT Jasa Marga (Persero) Tbk",
        year: "2025",
        role: language === "id" ? "Frontend Developer · Penempatan MII" : "Frontend Developer · MII Placement",
        overview:
          language === "id"
            ? "Aplikasi pemetaan interaktif berbasis Mapbox GL untuk pemantauan aset jalan tol, rest area, dan jaringan jalan tol Jasa Marga di seluruh Indonesia dengan lapisan GeoJSON dinamis."
            : "Interactive geospatial visualization platform using Mapbox GL to monitor toll road assets, rest stops, and regional network status across Indonesia.",
        description:
          language === "id"
            ? "Aplikasi pemetaan interaktif dan visualisasi geospasial untuk pemantauan aset jalan tol, rest area, dan jaringan operasional Jasa Marga di seluruh Indonesia berbasis Mapbox GL dengan lapisan GeoJSON dinamis dan filter regional bertingkat."
            : "Interactive geospatial visualization platform monitoring toll road assets, rest stops, and regional operational networks across Indonesia utilizing Mapbox GL with dynamic GeoJSON layers.",
        image: "/assets/jm-rise1.png",
        screenshots: ["/assets/jm-rise1.png", "/assets/jm-rise2.png", "/assets/jm-rise3.png"],
        tags: ["Mapbox GL JS", "React 18", "TypeScript", "GeoJSON", "REST API", "Tailwind CSS"],
      },
      {
        id: "cms-katarasa",
        number: "03",
        title: "CMS Katarasa — Enterprise Admin Dashboard",
        shortTitle: "Katarasa Admin CMS",
        category: language === "id" ? "Aplikasi Web Proyek" : "Web App Project",
        subCategory: "PT Penerbit Erlangga",
        year: "2024",
        role: "Frontend Developer · PT Penerbit Erlangga",
        overview:
          language === "id"
            ? "Platform administrasi web terpadu untuk memantau data operasional bisnis, analitik penjualan real-time, modul inventori katalog ribuan SKU, serta kontrol izin staf multi-level."
            : "Unified web admin platform managing multi-unit business operations, sales analytics, catalog inventory, and staff roles.",
        description:
          language === "id"
            ? "Platform administrasi berbasis web untuk memantau data operasional bisnis terpadu, analitik penjualan real-time, modul inventori katalog ribuan SKU produk, serta kontrol izin staf administratif multi-level."
            : "Web-based administration platform to manage integrated business operations, real-time sales summaries, multi-tier product inventories, and role-based access permissions.",
        image: "/assets/katras1.png",
        screenshots: ["/assets/katras1.png", "/assets/katras2.png", "/assets/katras3.png"],
        tags: ["React.js", "Ant Design", "Tailwind CSS", "JavaScript", "REST API", "Vite"],
      },
      {
        id: "jaja-auto",
        number: "04",
        title: "Jaja Auto — Automotive Sales & Loan Simulation",
        shortTitle: "Jaja Auto Financing",
        category: language === "id" ? "Platform Otomotif" : "Automotive Platform",
        subCategory: "PT Penerbit Erlangga",
        year: "2023",
        role: "Frontend Developer · PT Penerbit Erlangga",
        overview:
          language === "id"
            ? "Platform transaksi otomotif komprehensif (Mobil Baru, Bekas, & Trade-in) yang dilengkapi fitur kalkulator simulasi kredit mobil interaktif dengan kalkulasi angsuran instan."
            : "Full-scale automotive e-commerce solution facilitating New, Used, and Trade-in vehicle transactions with an interactive real-time car financing simulator.",
        description:
          language === "id"
            ? "Platform transaksi otomotif komprehensif (Mobil Baru, Mobil Bekas, & Trade-in) yang dilengkapi fitur kalkulator simulasi kredit mobil interaktif dengan kalkulasi angsuran instan menggunakan komputasi reaktif Vue."
            : "Full-scale automotive e-commerce solution facilitating New, Used, and Trade-in vehicle transactions with an interactive real-time car financing simulator.",
        image: "/assets/JATO1.png",
        screenshots: ["/assets/JATO1.png"],
        tags: ["Vue.js", "Vuetify", "Lodash", "REST API", "JavaScript", "Responsive UI"],
      },
      {
        id: "jaja-id",
        number: "05",
        title: "Jaja.id — First Hobby C2C & B2C Marketplace",
        shortTitle: "Jaja.id Marketplace",
        category: language === "id" ? "Aplikasi Web Proyek" : "Web App Project",
        subCategory: "PT Penerbit Erlangga",
        year: "2023",
        role: "Frontend Developer · PT Penerbit Erlangga",
        overview:
          language === "id"
            ? "Marketplace hobi pertama di Indonesia untuk kolektor yang memfasilitasi transaksi C2C dan B2C dengan storefront pedagang, keranjang belanja multi-item, dan notifikasi real-time."
            : "Indonesia's premier hobby marketplace facilitating C2C and B2C commerce for collectors with merchant storefronts and multi-item checkouts.",
        description:
          language === "id"
            ? "Marketplace hobi pertama di Indonesia yang memfasilitasi transaksi C2C dan B2C untuk kolektor. Mendukung storefront pedagang, sistem keranjang belanja multi-item, dan notifikasi pesanan real-time via Firebase."
            : "Indonesia's premier hobby marketplace facilitating C2C and B2C commerce for collectors. Features merchant storefronts, multi-item checkouts, and real-time order alerts.",
        image: "/assets/jaja1.png",
        screenshots: ["/assets/jaja1.png", "/assets/jaja2.png", "/assets/jaja3.png"],
        tags: ["Vue.js", "Vuex", "Vuetify", "Firebase", "REST API", "Flickity"],
      },
      {
        id: "eureka-bookhouse",
        number: "06",
        title: "Eureka Book House — Storefront & Internal CMS",
        shortTitle: "Eureka Book House",
        category: language === "id" ? "E-Commerce & Penerbitan" : "E-Commerce & Publishing",
        subCategory: "PT Penerbit Erlangga",
        year: "2023–2024",
        role: "Frontend Developer · PT Penerbit Erlangga",
        overview:
          language === "id"
            ? "Platform e-commerce buku dan materi edukasi terkemuka dari PT Penerbit Erlangga, didukung CMS admin internal untuk manajemen ribuan judul buku, inventori gudang, dan analitik penjualan."
            : "Leading educational lifestyle bookstore platform by PT Penerbit Erlangga, backed by an internal enterprise CMS managing inventory and institutional book orders.",
        description:
          language === "id"
            ? "Platform e-commerce buku dan materi edukasi terkemuka dari PT Penerbit Erlangga, didukung CMS admin internal khusus untuk manajemen ribuan judul buku, pelacakan inventori gudang, pesanan instansi, dan analitik penjualan."
            : "Leading educational lifestyle bookstore platform by PT Penerbit Erlangga, backed by an internal enterprise CMS managing thousands of textbook titles, warehouse inventory, and sales analytics.",
        image: "/assets/EBH4.png",
        screenshots: ["/assets/EBH4.png", "/assets/EBH1.png", "/assets/EBH2.png", "/assets/AEBH1.png"],
        tags: ["Vue.js", "React.js", "Ant Design", "REST API", "Bootstrap Vue"],
      },
    ],
    [language]
  );

  const total = projects.length;

  const prevSlide = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % total);
  }, [total]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedModalProject) {
        if (e.key === "Escape") setSelectedModalProject(null);
        return;
      }
      if (e.key === "ArrowLeft") prevSlide();
      if (e.key === "ArrowRight") nextSlide();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [prevSlide, nextSlide, selectedModalProject]);

  // Open modal
  const openModal = (project: Project) => {
    setSelectedModalProject(project);
    setActiveScreenshotIdx(0);
    setIsFullscreenImage(false);
  };

  // Touch Swipe handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartXRef.current === null) return;
    const diff = e.changedTouches[0].clientX - touchStartXRef.current;
    if (Math.abs(diff) > 40) {
      if (diff > 0) prevSlide();
      else nextSlide();
    }
    touchStartXRef.current = null;
  };

  return (
    <section id="projects" className="py-24 relative overflow-hidden" aria-label="Projects 3D Showcase">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/4 w-[550px] h-[400px] bg-[#c88746]/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[500px] h-[360px] bg-[#8a4b1f]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">

          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16">
            <span className="section-label mb-3 inline-flex items-center gap-1.5 mx-auto">
              <Sparkles className="w-3 h-3 text-[#c88746]" />
              <span>{language === "id" ? "Koleksi Proyek Unggulan" : "Featured Projects"}</span>
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground">
              {language === "id"
                ? "Sistem Enterprise & Aplikasi Web"
                : "Enterprise Systems & Web Portals"}
            </h2>
            <p className="text-muted-foreground mt-3 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
              {language === "id"
                ? "Eksplorasi portofolio proyek rekayasa frontend melalui 3D interactive showcase. Klik kartu untuk melihat detail lengkap arsitektur dan teknologi."
                : "Explore production frontend engineering projects through an interactive 3D showcase. Click any card to inspect full architecture and technology."}
            </p>
          </div>

          {/* ============================================================== */}
          {/* 3D COVERFLOW CAROUSEL WORKBENCH */}
          {/* ============================================================== */}
          <div
            className="relative w-full h-[540px] sm:h-[600px] flex items-center justify-center select-none"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            style={{ perspective: "1200px" }}
          >
            {projects.map((project, idx) => {
              // Calculate circular offset
              let offset = idx - activeIndex;
              if (offset > total / 2) offset -= total;
              if (offset < -total / 2) offset += total;

              const isCenter = offset === 0;
              const isLeft = offset === -1;
              const isRight = offset === 1;
              const isVisible = Math.abs(offset) <= 1;

              // 3D positioning styles
              let transform = "";
              let opacity = 0;
              let zIndex = 10;
              let pointerEvents: "auto" | "none" = "none";

              if (isCenter) {
                transform = "translateX(0%) translateZ(0px) rotateY(0deg) scale(1)";
                opacity = 1;
                zIndex = 30;
                pointerEvents = "auto";
              } else if (isLeft) {
                transform = "translateX(-52%) translateZ(-90px) rotateY(14deg) scale(0.85)";
                opacity = 0.45;
                zIndex = 20;
                pointerEvents = "auto";
              } else if (isRight) {
                transform = "translateX(52%) translateZ(-90px) rotateY(-14deg) scale(0.85)";
                opacity = 0.45;
                zIndex = 20;
                pointerEvents = "auto";
              } else {
                transform = `translateX(${offset * 70}%) translateZ(-200px) scale(0.7)`;
                opacity = 0;
                zIndex = 5;
                pointerEvents = "none";
              }

              return (
                <div
                  key={project.id}
                  onClick={() => {
                    if (isCenter) openModal(project);
                    else if (isLeft) prevSlide();
                    else if (isRight) nextSlide();
                  }}
                  className={`absolute w-[92%] sm:w-[620px] md:w-[680px] rounded-2xl sm:rounded-3xl overflow-hidden cursor-pointer transition-all duration-500 ease-out ${
                    isCenter
                      ? "shadow-2xl shadow-black/90 ring-1 ring-[#c88746]/40 hover:ring-[#c88746]/70"
                      : "hover:opacity-60"
                  }`}
                  style={{
                    transform,
                    opacity,
                    zIndex,
                    pointerEvents,
                  }}
                >
                  {/* Card Structure: Screenshot at Top, Info Box at Bottom */}
                  <div className="bg-[#14100d] border border-[#35281e] rounded-2xl sm:rounded-3xl overflow-hidden flex flex-col">
                    
                    {/* Top Screenshot Viewport */}
                    <div className="relative aspect-[16/9] w-full bg-[#0a0807] overflow-hidden group">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover sm:object-contain object-top transition-transform duration-500 group-hover:scale-[1.02]"
                      />
                      
                      {/* Gradient overlay for blending */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#14100d] via-transparent to-black/20" />

                      {/* Floating Click to Inspect Badge */}
                      {isCenter && (
                        <div className="absolute top-3.5 right-3.5 px-3 py-1 rounded-full bg-black/75 backdrop-blur-md border border-[#c88746]/40 text-[10px] font-mono text-[#f0ca9f] flex items-center gap-1.5 shadow-lg opacity-90 group-hover:opacity-100 transition-opacity">
                          <Eye className="w-3 h-3 text-[#c88746]" />
                          <span>{language === "id" ? "Buka Detail" : "Inspect"}</span>
                        </div>
                      )}
                    </div>

                    {/* Bottom Info Section (Clean, centered aesthetic from user's image) */}
                    <div className="p-6 sm:p-7 text-center flex flex-col items-center justify-center space-y-3 bg-[#14100d]">
                      
                      {/* Sub-label */}
                      <span className="text-xs font-mono font-bold tracking-wider text-[#d49b64] uppercase">
                        {project.category}
                      </span>

                      {/* Main Title */}
                      <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight leading-snug max-w-lg">
                        {project.title}
                      </h3>

                      {/* Short Description */}
                      <p className="text-xs sm:text-sm text-gray-300 leading-relaxed max-w-md line-clamp-2">
                        {project.overview}
                      </p>

                      {/* Tech Pills Row */}
                      <div className="flex flex-wrap items-center justify-center gap-1.5 pt-2">
                        {project.tags.slice(0, 4).map((tag, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-3 py-1 rounded-full text-[11px] font-mono font-medium bg-[#221a15] text-[#f0ca9f] border border-[#3d2f24]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                    </div>

                  </div>
                </div>
              );
            })}

            {/* Circular Navigation Arrow Buttons (Positioned as shown in user's image) */}
            {/* Left Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevSlide();
              }}
              className="absolute left-2 sm:left-6 md:left-12 z-40 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-black/80 hover:bg-[#c88746] text-white hover:text-[#120f0d] border border-white/15 hover:border-[#c88746] flex items-center justify-center transition-all duration-300 shadow-2xl hover:scale-110 active:scale-95"
              aria-label="Previous Project"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Right Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                nextSlide();
              }}
              className="absolute right-2 sm:right-6 md:right-12 z-40 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-black/80 hover:bg-[#c88746] text-white hover:text-[#120f0d] border border-white/15 hover:border-[#c88746] flex items-center justify-center transition-all duration-300 shadow-2xl hover:scale-110 active:scale-95"
              aria-label="Next Project"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

          </div>

          {/* Dots Indicator & Project Counter */}
          <div className="mt-8 flex flex-col items-center gap-3">
            <div className="flex items-center gap-2">
              {projects.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    activeIndex === idx
                      ? "w-8 bg-[#c88746]"
                      : "w-2 bg-[#35281e] hover:bg-[#c88746]/40"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
            <span className="text-xs font-mono text-muted-foreground">
              {String(activeIndex + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
            </span>
          </div>

        </div>
      </div>

      {/* ============================================================== */}
      {/* DETAILED PROJECT PREVIEW MODAL (Matching Image 2 Reference) */}
      {/* ============================================================== */}
      {selectedModalProject && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-5 animate-in fade-in duration-200"
          onClick={() => setSelectedModalProject(null)}
        >
          <div
            className="w-full max-w-3xl max-h-[92vh] overflow-y-auto rounded-2xl bg-[#14100d] border border-[#3d2f24] text-foreground shadow-2xl flex flex-col scrollbar-thin"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Image Header Banner */}
            <div className="relative aspect-[16/9] w-full bg-[#0a0807] overflow-hidden rounded-t-2xl">
              <img
                src={selectedModalProject.screenshots[activeScreenshotIdx] || selectedModalProject.image}
                alt={selectedModalProject.title}
                className="w-full h-full object-contain"
              />

              {/* Close Button top-right */}
              <button
                onClick={() => setSelectedModalProject(null)}
                className="absolute top-3.5 right-3.5 z-20 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-black/75 hover:bg-black text-white/90 hover:text-white flex items-center justify-center border border-white/20 transition-all shadow-lg hover:scale-105"
                aria-label="Close Modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Fullscreen zoom preview trigger */}
              <button
                onClick={() => setIsFullscreenImage(true)}
                className="absolute bottom-3.5 right-3.5 px-3 py-1.5 rounded-xl bg-black/70 hover:bg-black text-white/90 text-xs font-mono flex items-center gap-1.5 border border-white/20 transition-all"
              >
                <Maximize2 className="w-3.5 h-3.5" />
                <span>{language === "id" ? "Perbesar Layar" : "Expand"}</span>
              </button>
            </div>

            {/* Thumbnail Switcher (if multiple screenshots exist) */}
            {selectedModalProject.screenshots.length > 1 && (
              <div className="px-6 py-2.5 bg-[#191410] border-b border-[#2b211a] flex items-center gap-2 overflow-x-auto">
                <span className="text-[10px] font-mono text-muted-foreground mr-1">
                  {language === "id" ? "Layar:" : "Screens:"}
                </span>
                {selectedModalProject.screenshots.map((shot, sIdx) => (
                  <button
                    key={sIdx}
                    onClick={() => setActiveScreenshotIdx(sIdx)}
                    className={`h-9 w-16 rounded-md overflow-hidden border-2 transition-all flex-shrink-0 ${
                      activeScreenshotIdx === sIdx
                        ? "border-[#c88746] scale-105 shadow-sm"
                        : "border-[#3d2f24] opacity-50 hover:opacity-100"
                    }`}
                  >
                    <img src={shot} alt="preview" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}

            {/* Modal Body Content */}
            <div className="p-6 sm:p-8 space-y-5">
              
              {/* Category & SubCategory Row */}
              <div className="flex items-center justify-between gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#c88746]/15 text-[#f0ca9f] border border-[#c88746]/35">
                  {selectedModalProject.category}
                </span>
                <span className="text-xs font-mono text-muted-foreground">
                  {selectedModalProject.subCategory}
                </span>
              </div>

              {/* Big Title */}
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                {selectedModalProject.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-300 leading-relaxed">
                {selectedModalProject.description}
              </p>

              {/* Technologies Applied */}
              <div className="space-y-2 pt-2">
                <span className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground font-bold block">
                  {language === "id" ? "TEKNOLOGI YANG DIGUNAKAN:" : "TECHNOLOGIES USED:"}
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {selectedModalProject.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-[#221a15] text-[#f0ca9f] border border-[#3d2f24]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons Footer (Matching Tutup & Preview) */}
              <div className="flex items-center justify-end gap-3 pt-6 border-t border-[#2d221a]">
                <button
                  onClick={() => setSelectedModalProject(null)}
                  className="px-5 py-2.5 rounded-xl border border-[#3d2f24] bg-[#221a15] hover:bg-[#2e231c] text-white text-xs font-bold transition-colors"
                >
                  {language === "id" ? "Tutup" : "Close"}
                </button>
                
                <button
                  onClick={() => setIsFullscreenImage(true)}
                  className="px-5 py-2.5 rounded-xl bg-[#8a4b1f] hover:bg-[#c88746] text-white dark:text-[#120f0d] dark:bg-[#d49b64] dark:hover:bg-[#f0ca9f] text-xs font-bold transition-all shadow-md flex items-center gap-1.5"
                >
                  <span>Preview</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>

          </div>
        </div>
      )}

      {/* Fullscreen Single Image Modal */}
      {isFullscreenImage && selectedModalProject && (
        <div
          className="fixed inset-0 z-60 bg-black/95 flex flex-col items-center justify-center p-4 animate-in fade-in"
          onClick={() => setIsFullscreenImage(false)}
        >
          <button
            onClick={() => setIsFullscreenImage(false)}
            className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
          <img
            src={selectedModalProject.screenshots[activeScreenshotIdx] || selectedModalProject.image}
            alt="Fullscreen preview"
            className="max-w-full max-h-[90vh] object-contain rounded-xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

    </section>
  );
};

export default ProjectsSection;
