import React, { useState, useEffect, useRef, useMemo, useCallback } from "react";
import {
  ExternalLink,
  Sparkles,
  Info,
  X,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  Maximize2,
  Play,
  Pause,
  Rotate3d,
  Layers,
  Compass,
  Laptop,
  Check,
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

interface Project {
  id: string;
  number: string;
  title: string;
  shortTitle: string;
  category: string;
  categorySlug: "enterprise" | "mapping" | "ecommerce" | "admin";
  year: string;
  images: string[];
  link: string | null;
  linkLabel: string | null;
  displayUrl: string;
  featured: boolean;
  role: string;
  overview: string;
  contributions: string[];
  challenge: string;
  solution: string;
  deliverable: string;
  accentPill: string;
  tags: Array<{ name: string; color: string }>;
}

export const ProjectsSection = () => {
  const { language } = useLanguage();
  const [activeSlide, setActiveSlide] = useState<number>(0);
  const [activeImageIndex, setActiveImageIndex] = useState<number>(0);
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  // 3D Tilt State for Main Viewport
  const [tiltMode, setTiltMode] = useState<"interactive" | "isometric" | "flat">("interactive");
  const [tilt, setTilt] = useState<{ x: number; y: number; glareX: number; glareY: number; opacity: number }>({
    x: 0,
    y: 0,
    glareX: 50,
    glareY: 50,
    opacity: 0,
  });
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Autoplay State
  const [isAutoplay, setIsAutoplay] = useState(false);
  const [autoplayProgress, setAutoplayProgress] = useState(0);

  // Drag state for bottom coverflow
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const coverflowRef = useRef<HTMLDivElement>(null);

  const projects: Project[] = useMemo(
    () => [
      {
        id: "tcm-dashboard",
        number: "01",
        title: "TCM — Toll Collection Management System",
        shortTitle: "TCM Toll Operations",
        category: language === "id" ? "Sistem Enterprise" : "Enterprise Mission-Critical",
        categorySlug: "enterprise",
        year: "2025",
        images: ["/assets/JM.png"],
        link: "https://tcm.jasamarga.co.id/",
        linkLabel: language === "id" ? "Buka Portal Toll Jasa Marga" : "Open Jasa Marga Portal",
        displayUrl: "https://tcm.jasamarga.co.id/live-ops",
        featured: true,
        role:
          language === "id"
            ? "Frontend Developer (Penempatan Proyek MII di Jasa Marga)"
            : "Frontend Developer (MII Project Placement at Jasa Marga)",
        overview:
          language === "id"
            ? "Portal web internal enterprise skala nasional untuk Sistem Manajemen Pengumpulan Tol Jasa Marga (TCMS). Menyediakan pemantauan lalu lintas gerbang tol real-time, dashboard analitik operasional, antarmuka validasi transaksi terpusat, dan modul pelaporan harian."
            : "National enterprise internal web portal for Jasa Marga's Toll Collection Management System (TCMS). Provides real-time traffic monitoring across toll plazas, operational dashboards, centralized transaction validation interfaces, and daily reporting.",
        contributions:
          language === "id"
            ? [
                "Membangun antarmuka dashboard responsif menggunakan Next.js dan TypeScript",
                "Mengintegrasikan data real-time melalui REST API untuk monitoring operasional tol",
                "Mengimplementasikan antarmuka validasi dan manajemen data untuk pengguna enterprise",
                "Mendukung pipeline CI/CD menggunakan Jenkins, GitLab, dan deployment OpenShift",
              ]
            : [
                "Built responsive dashboard interfaces using Next.js and TypeScript",
                "Integrated real-time operational data via REST APIs for toll monitoring",
                "Implemented validation and data management interfaces for enterprise users",
                "Supported CI/CD pipelines using Jenkins, GitLab, and OpenShift deployment",
              ],
        challenge:
          language === "id"
            ? "Menampilkan volume data transaksi tol real-time yang masif dengan latensi rendah dan konsistensi data tinggi bagi petugas operasional."
            : "Displaying massive real-time toll transaction datasets with sub-second latency and zero data drift for continuous toll plaza operations.",
        solution:
          language === "id"
            ? "Arsitektur modular berbasis Next.js App Router, caching terdistribusi TanStack Query, dan memoization komponen untuk mencegah re-render berlebih."
            : "Next.js App Router component architecture with TanStack Query distributed caching and strict render memoization.",
        deliverable:
          language === "id"
            ? "Monitoring operasional gerbang tol real-time dan validasi data transaksi"
            : "Real-time toll plaza monitoring & transaction validation interfaces",
        accentPill: "⚡ Enterprise Toll Operations",
        tags: [
          { name: "Next.js 14", color: "bg-slate-900 text-white dark:bg-white dark:text-black border-slate-700" },
          { name: "TypeScript", color: "bg-[#3178c6]/10 text-[#3178c6] border-[#3178c6]/30" },
          { name: "REST API", color: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/30" },
          { name: "OpenShift", color: "bg-red-500/10 text-red-600 dark:text-red-400 border-red-500/30" },
          { name: "Jenkins CI/CD", color: "bg-[#d49b64]/10 text-[#8a4b1f] dark:text-[#f0ca9f] border-[#d49b64]/30" },
          { name: "Tailwind CSS", color: "bg-sky-500/10 text-sky-600 dark:text-sky-400 border-sky-500/30" },
        ],
      },
      {
        id: "jm-rise-map",
        number: "02",
        title: "JM-RISE — Interactive GIS Map Dashboard",
        shortTitle: "JM-RISE Map GIS",
        category: language === "id" ? "Visualisasi & Geospasial" : "GIS Mapping & Spatial Data",
        categorySlug: "mapping",
        year: "2025",
        images: ["/assets/JM.png"],
        link: null,
        linkLabel: null,
        displayUrl: "https://jm-rise.jasamarga.internal/spatial-layers",
        featured: true,
        role:
          language === "id"
            ? "Frontend Developer (Penempatan Proyek MII di Jasa Marga)"
            : "Frontend Developer (MII Project Placement at Jasa Marga)",
        overview:
          language === "id"
            ? "Aplikasi pemetaan interaktif dan visualisasi geospasial untuk pemantauan aset jalan tol, rest area, dan jaringan operasional Jasa Marga di seluruh Indonesia berbasis Mapbox GL dengan lapisan GeoJSON dinamis."
            : "Interactive geospatial visualization platform monitoring toll road assets, rest stops, and regional operational networks across Indonesia utilizing Mapbox GL with dynamic GeoJSON layers.",
        contributions:
          language === "id"
            ? [
                "Mengembangkan antarmuka peta interaktif menggunakan Mapbox GL dan React/Next.js",
                "Mengimplementasikan layer data dinamis, filter spasial, dan kontrol visualisasi aset",
                "Membangun panel statistik dan ringkasan metrik berbasis data geospasial jalan tol",
                "Mengoptimalkan rendering peta pada dataset jalan tol yang besar",
              ]
            : [
                "Developed interactive map interfaces using Mapbox GL and React/Next.js",
                "Implemented dynamic data layers, spatial filters, and asset visualization controls",
                "Built statistics panels and metric summaries driven by geospatial road data",
                "Optimized map rendering performance on large toll road network datasets",
              ],
        challenge:
          language === "id"
            ? "Merender ribuan titik koordinat aset tol dan visualisasi jalur secara responsif tanpa menurunkan frame rate antarmuka pengguna."
            : "Rendering thousands of geographic asset markers and complex highway polyline routes without causing UI frame stutter.",
        solution:
          language === "id"
            ? "Clustering berbasis WebGL shader Mapbox GL, dynamic Level of Detail (LOD), dan viewport clipping selektif."
            : "WebGL-accelerated Mapbox GL clustering with viewport bounding-box clipping and adaptive Level of Detail (LOD).",
        deliverable:
          language === "id"
            ? "Visualisasi peta interaktif dengan layer data aset geospasial dinamis"
            : "Interactive Mapbox GL mapping with dynamic geospatial asset layers",
        accentPill: "🗺️ Mapbox GIS Vectors",
        tags: [
          { name: "Mapbox GL JS", color: "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-500/30" },
          { name: "React 18", color: "bg-[#00d8ff]/10 text-[#00bcd4] border-[#00d8ff]/30" },
          { name: "TypeScript", color: "bg-[#3178c6]/10 text-[#3178c6] border-[#3178c6]/30" },
          { name: "GeoJSON", color: "bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/30" },
          { name: "REST API", color: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/30" },
        ],
      },
      {
        id: "cms-katarasa",
        number: "03",
        title: "CMS Katarasa — Enterprise Admin Dashboard",
        shortTitle: "Katarasa Admin CMS",
        category: language === "id" ? "Panel Admin & Operasional" : "Operations & Admin CMS",
        categorySlug: "admin",
        year: "2024",
        images: ["/assets/katras1.png", "/assets/katras2.png", "/assets/katras3.png"],
        link: "https://nimda.katarasa.id/auth/signin/",
        linkLabel: language === "id" ? "Kunjungi Demo Portal" : "Visit Portal Demo",
        displayUrl: "https://nimda.katarasa.id/dashboard/inventory",
        featured: false,
        role:
          language === "id"
            ? "Frontend Developer — PT Penerbit Erlangga"
            : "Frontend Developer — PT Penerbit Erlangga",
        overview:
          language === "id"
            ? "Platform administrasi berbasis web untuk memantau data operasional bisnis terpadu, analitik penjualan real-time, modul inventori katalog, serta kontrol izin staf administratif multi-level."
            : "Web-based administration platform to manage integrated business operations, real-time sales summaries, multi-tier product inventories, and role-based access permissions.",
        contributions:
          language === "id"
            ? [
                "Membangun antarmuka dashboard admin menggunakan React, Ant Design, dan Tailwind CSS",
                "Mengimplementasikan tabel data dinamis, validasi form terstruktur, dan modul inventori",
                "Mengintegrasikan RESTful APIs untuk operasi CRUD pada berbagai modul bisnis",
                "Menerapkan arsitektur komponen reusable untuk konsistensi UI di seluruh panel admin",
              ]
            : [
                "Built admin dashboard interfaces using React, Ant Design, and Tailwind CSS",
                "Implemented dynamic data tables, structured form validation, and inventory modules",
                "Integrated RESTful APIs for CRUD operations across multiple business modules",
                "Applied reusable component architecture for UI consistency across all admin panels",
              ],
        challenge:
          language === "id"
            ? "Menyederhanakan pengelolaan dataset administratif yang rumit ke dalam antarmuka yang intuitif dan cepat dipelajari operator."
            : "Transforming dense administrative tables and complex data mutations into a streamlined, error-proof operator UI.",
        solution:
          language === "id"
            ? "Pemisahan concern komponen reusable, formulir terstandarisasi Ant Design, dan feedback aksi real-time."
            : "Reusable headless form architectures with Ant Design primitives and immediate optimistic feedback.",
        deliverable:
          language === "id"
            ? "Dashboard administrasi data operasional bisnis dan modul inventori terpadu"
            : "Operational business admin dashboard & integrated inventory modules",
        accentPill: "📊 Enterprise Admin CMS",
        tags: [
          { name: "React.js", color: "bg-[#00d8ff]/10 text-[#00bcd4] border-[#00d8ff]/30" },
          { name: "Ant Design", color: "bg-blue-600/10 text-blue-600 dark:text-blue-400 border-blue-600/30" },
          { name: "Tailwind CSS", color: "bg-sky-500/10 text-sky-600 dark:text-sky-400 border-sky-500/30" },
          { name: "REST API", color: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/30" },
          { name: "Vite", color: "bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/30" },
        ],
      },
      {
        id: "jaja-auto",
        number: "04",
        title: "Jaja Auto — Automotive Sales & Loan Simulation",
        shortTitle: "Jaja Auto Financing",
        category: language === "id" ? "Platform Otomotif" : "Fintech & Automotive Platform",
        categorySlug: "ecommerce",
        year: "2023",
        images: ["/assets/JATO1.png"],
        link: "https://auto.jaja.id/",
        linkLabel: language === "id" ? "Buka Platform Jaja Auto" : "Open Jaja Auto Portal",
        displayUrl: "https://auto.jaja.id/calculator/simulasi-kredit",
        featured: false,
        role:
          language === "id"
            ? "Frontend Developer — PT Penerbit Erlangga"
            : "Frontend Developer — PT Penerbit Erlangga",
        overview:
          language === "id"
            ? "Platform transaksi otomotif komprehensif (Mobil Baru, Mobil Bekas, & Trade-in) yang dilengkapi fitur kalkulator simulasi kredit mobil interaktif dengan kalkulasi angsuran instan."
            : "Full-scale automotive e-commerce solution facilitating New, Used, and Trade-in vehicle transactions with an interactive real-time car financing simulator.",
        contributions:
          language === "id"
            ? [
                "Membangun antarmuka simulasi kredit mobil interaktif menggunakan Vue.js dan Vuetify",
                "Mengimplementasikan filter katalog kendaraan yang responsif dan pencarian real-time",
                "Mengoptimalkan komputasi simulasi kredit menggunakan utilitas Lodash untuk kalkulasi instan",
                "Memastikan tata letak responsif dan pengalaman pengguna yang mulus di perangkat mobile",
              ]
            : [
                "Built interactive car loan simulation tool using Vue.js and Vuetify",
                "Implemented responsive vehicle catalog filters and real-time search capabilities",
                "Optimized loan calculation workflows using Lodash utilities for instant calculation",
                "Ensured responsive layouts and smooth user experience across mobile and desktop devices",
              ],
        challenge:
          language === "id"
            ? "Menghadirkan kalkulator pembiayaan multi-parameter yang interaktif tanpa delay saat slider DP dan tenor digeser pengguna."
            : "Creating a multi-parameter financing calculator that recomputes interest and tenure variations with zero input lag.",
        solution:
          language === "id"
            ? "Komputasi reaktif Vue.js dengan input debouncing Lodash untuk pemrosesan matematika instan."
            : "Reactive Vue computed properties combined with debounced slider listeners to prevent frame drops.",
        deliverable:
          language === "id"
            ? "Kalkulator simulasi pembiayaan mobil interaktif dengan komputasi reaktif"
            : "Interactive car financing simulation calculator with reactive calculations",
        accentPill: "🚗 Automotive Financial Calculator",
        tags: [
          { name: "Vue.js", color: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/30" },
          { name: "Vuetify", color: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/30" },
          { name: "Lodash", color: "bg-amber-600/10 text-amber-600 dark:text-amber-400 border-amber-600/30" },
          { name: "REST API", color: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/30" },
        ],
      },
      {
        id: "jaja-id",
        number: "05",
        title: "Jaja.id — First Hobby C2C & B2C Marketplace",
        shortTitle: "Jaja.id Marketplace",
        category: language === "id" ? "Marketplace Skala Besar" : "High-Volume Marketplace",
        categorySlug: "ecommerce",
        year: "2023",
        images: ["/assets/jaja1.png", "/assets/jaja2.png", "/assets/jaja3.png"],
        link: "http://jaja.id/",
        linkLabel: language === "id" ? "Kunjungi Jaja.id" : "Visit Jaja.id Store",
        displayUrl: "https://jaja.id/hobby-storefront",
        featured: false,
        role:
          language === "id"
            ? "Frontend Developer — PT Penerbit Erlangga"
            : "Frontend Developer — PT Penerbit Erlangga",
        overview:
          language === "id"
            ? "Marketplace hobi pertama di Indonesia yang memfasilitasi transaksi C2C dan B2C untuk kolektor. Mendukung storefront pedagang, sistem keranjang belanja multi-item, dan notifikasi pesanan real-time."
            : "Indonesia's premier hobby marketplace facilitating C2C and B2C commerce for collectors. Features merchant storefronts, multi-item checkouts, and real-time order alerts.",
        contributions:
          language === "id"
            ? [
                "Membangun antarmuka e-commerce modern menggunakan Vue.js, Vuex, dan Vuetify",
                "Mengintegrasikan carousel Flickity dan lazy-loading gambar untuk katalog produk optimal",
                "Mengintegrasikan fitur real-time menggunakan Firebase dan konektivitas REST API",
                "Mengurangi waktu muat halaman dan meningkatkan performa interaksi pengguna",
              ]
            : [
                "Built modern e-commerce storefront interfaces using Vue.js, Vuex, and Vuetify",
                "Integrated Flickity carousels and image lazy-loading for an optimized product catalog",
                "Integrated real-time capabilities with Firebase and REST API connectivity",
                "Reduced page load times and enhanced user engagement across shopping flows",
              ],
        challenge:
          language === "id"
            ? "Mempertahankan performa halaman katalog dengan ratusan gambar produk dinamis resolusi tinggi di jaringan mobile."
            : "Preserving smooth 60fps scrolling and fast initial load on heavy product feeds with hundreds of dynamic images.",
        solution:
          language === "id"
            ? "Progressive image lazy-loading, virtualized product listing renders, dan caching state terpusat di Vuex."
            : "Progressive WebP lazy-loading, DOM node virtualization, and state persistence via Vuex.",
        deliverable:
          language === "id"
            ? "Storefront e-commerce hobi C2C & B2C dengan alur transaksi multi-item"
            : "C2C & B2C hobby marketplace storefront with multi-item checkouts",
        accentPill: "🛍️ E-Commerce Marketplace",
        tags: [
          { name: "Vue.js", color: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/30" },
          { name: "Vuex", color: "bg-violet-500/10 text-violet-600 dark:text-violet-400 border-violet-500/30" },
          { name: "Vuetify", color: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/30" },
          { name: "Firebase", color: "bg-[#c88746]/10 text-[#8a4b1f] dark:text-[#f0ca9f] border-[#c88746]/30" },
        ],
      },
      {
        id: "eureka-bookhouse",
        number: "06",
        title: "Eureka Book House — Storefront & Internal CMS",
        shortTitle: "Eureka Book House",
        category: language === "id" ? "E-Commerce & Penerbitan" : "E-Commerce & Publishing CMS",
        categorySlug: "ecommerce",
        year: "2023–2024",
        images: ["/assets/EBH4.png", "/assets/EBH1.png", "/assets/EBH2.png", "/assets/EBH3.png"],
        link: "https://eurekabookhouse.com/",
        linkLabel: language === "id" ? "Buka Storefront Toko Buku" : "Open Bookstore Storefront",
        displayUrl: "https://eurekabookhouse.com/catalog/academic",
        featured: false,
        role:
          language === "id"
            ? "Frontend Developer — PT Penerbit Erlangga"
            : "Frontend Developer — PT Penerbit Erlangga",
        overview:
          language === "id"
            ? "Platform e-commerce buku dan materi edukasi terkemuka dari PT Penerbit Erlangga, didukung CMS admin internal khusus untuk manajemen ribuan judul buku, pelacakan inventori gudang, pesanan instansi, dan analitik penjualan."
            : "Leading educational lifestyle bookstore platform by PT Penerbit Erlangga, backed by an internal enterprise CMS managing thousands of textbook titles, warehouse inventory, and sales analytics.",
        contributions:
          language === "id"
            ? [
                "Mengembangkan platform e-commerce publik dengan Vue.js, Vuex, dan Bootstrap Vue",
                "Membangun portal admin CMS terpisah menggunakan React.js dan Ant Design",
                "Mengimplementasikan modul inventori dan dashboard analitik data penjualan",
                "Mengintegrasikan REST API untuk sinkronisasi inventori dan pemrosesan pesanan secara real-time",
              ]
            : [
                "Developed public e-commerce platform using Vue.js, Vuex, and Bootstrap Vue",
                "Built separate CMS admin portal using React.js and Ant Design",
                "Implemented inventory management modules and sales analytics dashboards",
                "Integrated REST APIs for real-time inventory synchronization and order processing",
              ],
        challenge:
          language === "id"
            ? "Menjaga konsistensi data real-time antara katalog belanja publik dan dashboard admin inventori gudang."
            : "Synchronizing high-frequency inventory mutations between the customer bookstore and internal distribution center CMS.",
        solution:
          language === "id"
            ? "Arsitektur API service terstandarisasi, skema validasi terpadu, dan update status pesanan real-time."
            : "Unified API service layer with normalized data contracts and automated stock revalidation.",
        deliverable:
          language === "id"
            ? "Storefront buku online publik terintegrasi modul CMS inventori internal"
            : "Public bookstore storefront integrated with internal distribution CMS",
        accentPill: "📚 Bookstore & CMS Sync",
        tags: [
          { name: "Vue.js", color: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/30" },
          { name: "React.js", color: "bg-[#00d8ff]/10 text-[#00bcd4] border-[#00d8ff]/30" },
          { name: "Ant Design", color: "bg-blue-600/10 text-blue-600 dark:text-blue-400 border-blue-600/30" },
          { name: "REST API", color: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/30" },
        ],
      },
    ],
    [language]
  );

  const currentProject = projects[activeSlide];

  // Reset image index when project changes with smooth transition
  const switchSlide = useCallback((newIndex: number) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveSlide(newIndex);
      setActiveImageIndex(0);
      setIsTransitioning(false);
    }, 180);
  }, []);

  const nextSlide = useCallback(() => {
    switchSlide((activeSlide + 1) % projects.length);
  }, [activeSlide, projects.length, switchSlide]);

  const prevSlide = useCallback(() => {
    switchSlide((activeSlide - 1 + projects.length) % projects.length);
  }, [activeSlide, projects.length, switchSlide]);

  // Autoplay loop with smooth 100ms interval for progress bar
  useEffect(() => {
    if (!isAutoplay) {
      setAutoplayProgress(0);
      return;
    }

    const interval = 60; // 60ms tick for 5000ms duration = ~83 steps
    const timer = setInterval(() => {
      setAutoplayProgress((prev) => {
        if (prev >= 100) {
          nextSlide();
          return 0;
        }
        return prev + 1.2;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [isAutoplay, nextSlide]);

  // Keyboard navigation for slides
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        prevSlide();
      } else if (e.key === "ArrowRight") {
        nextSlide();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextSlide, prevSlide]);

  // 3D Mouse Parallax calculation
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (tiltMode === "flat") return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const maxDegree = tiltMode === "isometric" ? 18 : 12;
    const rotateY = ((x - centerX) / centerX) * maxDegree;
    const rotateX = -((y - centerY) / centerY) * maxDegree;

    const glareX = (x / rect.width) * 100;
    const glareY = (y / rect.height) * 100;

    setTilt({
      x: rotateX,
      y: rotateY,
      glareX,
      glareY,
      opacity: 0.35,
    });
  };

  const handleMouseLeave = () => {
    if (tiltMode === "isometric") {
      setTilt({ x: 10, y: -14, glareX: 30, glareY: 20, opacity: 0.2 });
    } else {
      setTilt({ x: 0, y: 0, glareX: 50, glareY: 50, opacity: 0 });
    }
  };

  // Get current 3D transform style for device chassis
  const getDeviceTransform = () => {
    if (tiltMode === "isometric") {
      return `perspective(1200px) rotateX(${10 + tilt.x * 0.4}deg) rotateY(${-14 + tilt.y * 0.4}deg) rotateZ(1.5deg) scale3d(1.02, 1.02, 1.02)`;
    }
    if (tiltMode === "flat") {
      return "perspective(1200px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
    }
    return `perspective(1200px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale3d(1.015, 1.015, 1.015)`;
  };

  return (
    <section id="projects" className="py-24 relative overflow-hidden" aria-label="Featured projects showcase">
      {/* Dynamic Warm Ambient 3D Glows */}
      <div className="absolute top-1/4 left-1/5 w-[650px] h-[550px] bg-[#c88746]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/5 w-[550px] h-[450px] bg-[#8a4b1f]/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          
          {/* Header & 3D Interactive Control Bar */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="section-label">
                  {language === "id" ? "Koleksi Proyek Produksi" : "Production Systems Showcase"}
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30 text-[10px] font-mono font-bold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  3D Interactive Engine
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
                {language === "id"
                  ? "Studi Kasus Rekayasa Frontend 3D"
                  : "Interactive 3D Engineering Showcase"}
              </h2>
              <p className="text-muted-foreground mt-2 max-w-xl text-sm sm:text-base">
                {language === "id"
                  ? "Arahkan kursor untuk merasakan kedalaman 3D paralaks. Jelajahi sistem tol Jasa Marga, peta geospasial Mapbox, dan platform e-commerce enterprise."
                  : "Hover over the device to trigger dynamic 3D tilt and specular lighting. Inspect mission-critical toll systems and Mapbox GIS portals."}
              </p>
            </div>

            {/* 3D Mode & Navigation Controls */}
            <div className="flex flex-wrap items-center gap-2.5">
              
              {/* 3D Perspective Mode Selector */}
              <div className="flex items-center bg-card p-1 rounded-xl border border-border/80 shadow-sm">
                <button
                  onClick={() => {
                    setTiltMode("interactive");
                    setTilt({ x: 0, y: 0, glareX: 50, glareY: 50, opacity: 0 });
                  }}
                  className={`flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-semibold font-mono transition-all ${
                    tiltMode === "interactive"
                      ? "bg-[#8a4b1f] dark:bg-[#d49b64] text-white dark:text-[#181310] shadow-sm"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                  title="Interactive mouse-following 3D tilt"
                >
                  <Rotate3d className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">3D Tilt</span>
                </button>

                <button
                  onClick={() => {
                    setTiltMode("isometric");
                    setTilt({ x: 10, y: -14, glareX: 30, glareY: 20, opacity: 0.2 });
                  }}
                  className={`flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-semibold font-mono transition-all ${
                    tiltMode === "isometric"
                      ? "bg-[#8a4b1f] dark:bg-[#d49b64] text-white dark:text-[#181310] shadow-sm"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                  title="Fixed 3D Isometric View with floating layers"
                >
                  <Compass className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Isometric</span>
                </button>

                <button
                  onClick={() => {
                    setTiltMode("flat");
                    setTilt({ x: 0, y: 0, glareX: 50, glareY: 50, opacity: 0 });
                  }}
                  className={`flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-semibold font-mono transition-all ${
                    tiltMode === "flat"
                      ? "bg-[#8a4b1f] dark:bg-[#d49b64] text-white dark:text-[#181310] shadow-sm"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                  title="Flat 2D View"
                >
                  <Laptop className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Flat</span>
                </button>
              </div>

              {/* Autoplay Toggle Button */}
              <button
                onClick={() => setIsAutoplay(!isAutoplay)}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-mono font-semibold border transition-all ${
                  isAutoplay
                    ? "border-[#c88746] bg-[#c88746]/10 text-[#8a4b1f] dark:text-[#f0ca9f]"
                    : "border-border/80 bg-card text-muted-foreground hover:text-foreground"
                }`}
                title={isAutoplay ? "Pause Autoplay" : "Enable Auto 3D Slide Carousel"}
              >
                {isAutoplay ? <Pause className="w-3.5 h-3.5 animate-pulse" /> : <Play className="w-3.5 h-3.5" />}
                <span className="hidden sm:inline">{isAutoplay ? "Auto: ON" : "Auto"}</span>
              </button>

              {/* Slide Counter */}
              <div className="flex items-center gap-1.5 font-mono text-sm px-3.5 py-2 rounded-xl border border-border/80 bg-card">
                <span className="font-bold text-[#8a4b1f] dark:text-[#f0ca9f] text-base">
                  {currentProject.number}
                </span>
                <span className="text-muted-foreground font-light">/</span>
                <span className="text-muted-foreground text-xs">
                  0{projects.length}
                </span>
              </div>

              {/* Prev & Next Arrows */}
              <div className="flex items-center gap-1 bg-card p-1 rounded-xl border border-border/80">
                <button
                  onClick={prevSlide}
                  className="p-2 rounded-lg text-foreground hover:bg-[#c88746]/10 hover:text-[#c88746] transition-colors"
                  aria-label="Previous project (←)"
                  title="Previous project (←)"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextSlide}
                  className="p-2 rounded-lg text-foreground hover:bg-[#c88746]/10 hover:text-[#c88746] transition-colors"
                  aria-label="Next project (→)"
                  title="Next project (→)"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

            </div>
          </div>

          {/* Autoplay Progress Line Bar */}
          {isAutoplay && (
            <div className="w-full h-1 bg-muted rounded-full overflow-hidden mb-6">
              <div
                className="h-full bg-gradient-to-r from-[#8a4b1f] via-[#c88746] to-[#d49b64] transition-all duration-75 ease-linear"
                style={{ width: `${autoplayProgress}%` }}
              />
            </div>
          )}

          {/* Jump Slide Tab Selector */}
          <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-6 scrollbar-none">
            {projects.map((proj, idx) => (
              <button
                key={proj.id}
                onClick={() => switchSlide(idx)}
                className={`flex-shrink-0 flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold font-mono transition-all ${
                  activeSlide === idx
                    ? "bg-[#8a4b1f] dark:bg-[#d49b64] text-white dark:text-[#181310] shadow-lg shadow-[#c88746]/25 scale-[1.02]"
                    : "border border-border/80 bg-card/60 text-muted-foreground hover:text-foreground hover:border-border"
                }`}
              >
                <span className="font-bold opacity-80">{proj.number}.</span>
                <span>{proj.shortTitle}</span>
              </button>
            ))}
          </div>

          {/* ============================================================== */}
          {/* MAIN 3D SHOWCASE STAGE */}
          {/* ============================================================== */}
          <div
            key={currentProject.id}
            className={`card-base border-[#c88746]/35 overflow-hidden shadow-3d-glow animate-slide-3d transition-all duration-300 ${
              isTransitioning ? "opacity-60 scale-[0.99] blur-[0.5px]" : "opacity-100 scale-100"
            }`}
          >
            <div className="grid lg:grid-cols-12 gap-0">
              
              {/* Left Column: Interactive 3D Device Chassis with Depth & Parallax */}
              <div
                className="lg:col-span-6 bg-gradient-to-br from-muted/40 via-muted/20 to-background p-6 sm:p-8 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-border/70 relative perspective-1200 cursor-grab active:cursor-grabbing select-none"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
              >
                
                {/* Ambient Halo Behind Device */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#c88746]/10 to-transparent pointer-events-none rounded-l-2xl" />

                {/* Top Badge Overlay with Floating Depth */}
                <div className="flex items-center justify-between mb-5 relative z-20">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#c88746]/10 text-[#8a4b1f] dark:text-[#f0ca9f] border border-[#c88746]/30 font-bold shadow-sm">
                      {currentProject.category}
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-muted text-muted-foreground border border-border">
                      {currentProject.year}
                    </span>
                  </div>

                  <span className="inline-flex items-center gap-1.5 text-[11px] font-mono font-bold text-[#8a4b1f] dark:text-[#f0ca9f] bg-[#c88746]/10 px-2.5 py-0.5 rounded-full border border-[#c88746]/30">
                    <Sparkles className="w-3 h-3 text-[#c88746]" />
                    {currentProject.accentPill}
                  </span>
                </div>

                {/* 3D FLOATING DEVICE CHASSIS (TITANIUM BROWSER FRAME) */}
                <div
                  className="relative rounded-2xl border-2 border-border/90 bg-card/95 shadow-3d preserve-3d transition-transform duration-150 ease-out my-auto"
                  style={{
                    transform: getDeviceTransform(),
                  }}
                >
                  
                  {/* Browser Chrome Header (Titlebar + Traffic Lights + URL Bar) */}
                  <div className="flex items-center justify-between px-4 py-2.5 bg-muted/80 border-b border-border/80 rounded-t-[14px]">
                    
                    {/* Traffic Lights */}
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500/80 shadow-xs" />
                      <div className="w-3 h-3 rounded-full bg-amber-500/80 shadow-xs" />
                      <div className="w-3 h-3 rounded-full bg-emerald-500/80 shadow-xs" />
                    </div>

                    {/* Simulated Real URL Bar */}
                    <div className="flex-1 max-w-xs mx-3 px-3 py-1 rounded-lg bg-background/80 border border-border/70 text-[11px] font-mono text-muted-foreground flex items-center justify-between shadow-inner truncate">
                      <span className="truncate">{currentProject.displayUrl}</span>
                      <span className="text-[9px] font-bold text-emerald-500 ml-1">● SSL</span>
                    </div>

                    {/* Action Controls */}
                    <button
                      onClick={() => setActiveModalProject(currentProject)}
                      className="p-1 rounded-md text-muted-foreground hover:text-foreground hover:bg-background/80 transition-colors"
                      title="Inspect full screen"
                    >
                      <Maximize2 className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* Primary Screenshot Viewport with 3D Specular Glare */}
                  <div className="relative overflow-hidden rounded-b-[14px] bg-background/90 min-h-[280px] sm:min-h-[350px] flex items-center justify-center p-3 group">
                    
                    <img
                      src={currentProject.images[activeImageIndex] || currentProject.images[0]}
                      alt={`${currentProject.title} preview`}
                      className="w-full h-full object-contain max-h-[360px] rounded-lg transition-transform duration-500 group-hover:scale-[1.03]"
                      style={{
                        transform: "translateZ(20px)",
                      }}
                    />

                    {/* Dynamic 3D Specular Glare Overlay tracking mouse */}
                    <div
                      className="absolute inset-0 pointer-events-none transition-opacity duration-300"
                      style={{
                        background: `radial-gradient(circle 320px at ${tilt.glareX}% ${tilt.glareY}%, rgba(255, 255, 255, ${tilt.opacity * 0.45}), transparent 65%)`,
                      }}
                    />

                    {/* Floating 3D Badge */}
                    <div
                      className="absolute bottom-4 left-4 px-3 py-1.5 rounded-xl bg-card/90 backdrop-blur-md border border-[#c88746]/40 text-foreground text-xs font-mono font-bold shadow-xl flex items-center gap-2"
                      style={{
                        transform: "translateZ(45px)",
                      }}
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#c88746]" />
                      <span>{currentProject.accentPill || currentProject.shortTitle}</span>
                    </div>

                  </div>

                </div>

                {/* Interactive Multi-Screenshot Thumbnail Switcher */}
                <div className="mt-5 pt-3 border-t border-border/70 flex items-center justify-between relative z-20">
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-mono text-muted-foreground mr-1">
                      Views ({currentProject.images.length}):
                    </span>
                    {currentProject.images.map((img, imgIdx) => (
                      <button
                        key={imgIdx}
                        onClick={() => setActiveImageIndex(imgIdx)}
                        className={`w-14 h-9 rounded-lg overflow-hidden border-2 transition-all relative ${
                          activeImageIndex === imgIdx
                            ? "border-[#c88746] scale-105 shadow-md shadow-[#c88746]/25"
                            : "border-border/70 opacity-60 hover:opacity-100 hover:scale-102"
                        }`}
                        title={`View angle ${imgIdx + 1}`}
                      >
                        <img
                          src={img}
                          alt="thumbnail"
                          className="w-full h-full object-cover"
                        />
                        {activeImageIndex === imgIdx && (
                          <span className="absolute bottom-0 right-0 w-2 h-2 bg-[#c88746] rounded-tl-sm" />
                        )}
                      </button>
                    ))}
                  </div>

                  <span className="text-[10px] font-mono text-muted-foreground hidden sm:inline">
                    Drag/Move to tilt 3D
                  </span>
                </div>

              </div>

              {/* Right Column: Engineering Rigor, Problems, Solutions & Specs */}
              <div className="lg:col-span-6 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                
                <div className="space-y-4">
                  
                  {/* Verified Role Placement */}
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#8a4b1f] dark:text-[#f0ca9f]">
                    <ShieldCheck className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                    <span>{currentProject.role}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-foreground leading-tight">
                    {currentProject.title}
                  </h3>

                  {/* Overview */}
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {currentProject.overview}
                  </p>

                  {/* Challenge & Solution Architecture Grid with 3D Depth */}
                  <div className="grid sm:grid-cols-2 gap-3 pt-2">
                    <div className="p-3.5 rounded-xl border border-border/80 bg-muted/30 hover:border-border transition-colors">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground block mb-1">
                        {language === "id" ? "Tantangan Kunci" : "Technical Challenge"}
                      </span>
                      <p className="text-xs text-foreground/90 leading-relaxed">
                        {currentProject.challenge}
                      </p>
                    </div>

                    <div className="p-3.5 rounded-xl border border-[#c88746]/35 bg-[#c88746]/[0.06] hover:border-[#c88746]/60 transition-colors">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#8a4b1f] dark:text-[#f0ca9f] block mb-1">
                        {language === "id" ? "Solusi Rekayasa" : "Engineering Solution"}
                      </span>
                      <p className="text-xs text-foreground/90 leading-relaxed">
                        {currentProject.solution}
                      </p>
                    </div>
                  </div>

                  {/* Production Scope & Deliverable */}
                  <div className="p-3 rounded-xl border border-[#c88746]/30 bg-[#c88746]/[0.05] flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#c88746] flex-shrink-0" />
                      <span className="text-xs font-semibold text-foreground">
                        {currentProject.deliverable}
                      </span>
                    </div>
                    <span className="text-[10px] font-mono uppercase font-bold text-[#8a4b1f] dark:text-[#f0ca9f]">
                      {language === "id" ? "Terverifikasi" : "Verified Scope"}
                    </span>
                  </div>

                  {/* Applied Technologies (Vibrant Framework Badges) */}
                  <div className="space-y-2 pt-2">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground block font-bold">
                      Applied Tech Stack:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {currentProject.tags.map((tag, tagIdx) => (
                        <span
                          key={tagIdx}
                          className={`text-xs font-mono font-semibold px-2.5 py-1 rounded-lg border ${tag.color}`}
                        >
                          {tag.name}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>

                {/* Action CTAs */}
                <div className="pt-4 border-t border-border/70 flex flex-wrap items-center justify-between gap-3">
                  
                  {/* Case Study Details Modal Button */}
                  <button
                    onClick={() => setActiveModalProject(currentProject)}
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-border/80 bg-muted/40 text-xs font-semibold hover:border-[#c88746]/50 hover:text-[#c88746] transition-colors"
                  >
                    <Info className="w-3.5 h-3.5 text-[#c88746]" />
                    <span>{language === "id" ? "Detail Arsitektur Lengkap" : "Full Architecture Case Study"}</span>
                  </button>

                  {/* External Live Portal Button */}
                  {currentProject.link ? (
                    <a
                      href={currentProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#8a4b1f] dark:bg-[#d49b64] text-white dark:text-[#181310] font-bold text-xs hover:bg-[#733e19] dark:hover:bg-[#c68a4c] transition-all shadow-md shadow-[#c88746]/20"
                    >
                      <span>{currentProject.linkLabel || "Open Live Portal"}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  ) : (
                    <span className="text-xs text-muted-foreground font-mono italic">
                      {language === "id" ? "🔒 Akses Internal Enterprise" : "🔒 Internal Enterprise System"}
                    </span>
                  )}

                </div>

              </div>

            </div>
          </div>

          {/* ============================================================== */}
          {/* 3D COVERFLOW STAGE CAROUSEL (BOTTOM STRIP) */}
          {/* ============================================================== */}
          <div className="mt-12 pt-8 border-t border-border/70">
            <div className="flex items-center justify-between mb-6">
              <div>
                <span className="text-xs font-mono font-bold text-foreground uppercase tracking-wider block">
                  3D CoverFlow Navigation • All 6 Systems
                </span>
                <span className="text-xs text-muted-foreground">
                  Click any project card or swipe to bring it to center stage
                </span>
              </div>
              <span className="text-xs text-muted-foreground font-mono hidden sm:inline">
                Keyboard ← / → Active
              </span>
            </div>

            {/* 3D Perspective Stage Container */}
            <div
              ref={coverflowRef}
              className="relative perspective-1600 overflow-x-hidden py-4 select-none"
              onMouseDown={(e) => {
                setIsDragging(true);
                setStartX(e.clientX);
              }}
              onMouseUp={(e) => {
                if (!isDragging) return;
                setIsDragging(false);
                const diff = e.clientX - startX;
                if (diff > 40) prevSlide();
                else if (diff < -40) nextSlide();
              }}
              onTouchStart={(e) => {
                setStartX(e.touches[0].clientX);
              }}
              onTouchEnd={(e) => {
                const diff = e.changedTouches[0].clientX - startX;
                if (diff > 40) prevSlide();
                else if (diff < -40) nextSlide();
              }}
            >
              <div className="flex overflow-x-auto pb-4 gap-3 sm:grid sm:grid-cols-3 lg:grid-cols-6 sm:gap-4 sm:overflow-visible scrollbar-none snap-x preserve-3d">
                {projects.map((proj, idx) => {
                  const isActive = activeSlide === idx;
                  const distance = idx - activeSlide;

                  // 3D rotation angle based on relative distance to active card
                  let rotateY = 0;
                  let translateZ = 0;
                  let scale = 1;

                  if (isActive) {
                    rotateY = 0;
                    translateZ = 30;
                    scale = 1.05;
                  } else if (distance < 0) {
                    rotateY = 16;
                    translateZ = -20;
                    scale = 0.95;
                  } else {
                    rotateY = -16;
                    translateZ = -20;
                    scale = 0.95;
                  }

                  return (
                    <button
                      key={proj.id}
                      onClick={() => switchSlide(idx)}
                      className={`min-w-[170px] sm:min-w-0 flex-shrink-0 sm:flex-shrink snap-center text-left p-3.5 rounded-2xl border transition-all duration-300 relative preserve-3d group ${
                        isActive
                          ? "border-[#c88746] bg-[#c88746]/[0.1] shadow-3d-glow z-20"
                          : "border-border/80 bg-card/70 hover:border-border hover:bg-muted/50 opacity-70 hover:opacity-100 z-10"
                      }`}
                      style={{
                        transform: `perspective(800px) rotateY(${rotateY}deg) translateZ(${translateZ}px) scale(${scale})`,
                      }}
                    >
                      {/* Thumbnail with 3D drop shadow */}
                      <div className="aspect-[16/10] w-full rounded-xl overflow-hidden mb-2.5 bg-background border border-border/70 group-hover:scale-102 transition-transform">
                        <img
                          src={proj.images[0]}
                          alt={proj.title}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Header with Project Number */}
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-[11px] font-mono font-bold text-[#8a4b1f] dark:text-[#f0ca9f]">
                          {proj.number}
                        </span>
                        {isActive && (
                          <span className="w-2 h-2 rounded-full bg-[#c88746] shadow-xs" />
                        )}
                      </div>

                      {/* Title */}
                      <h4 className="text-xs font-bold text-foreground truncate">
                        {proj.shortTitle}
                      </h4>

                      {/* Category */}
                      <p className="text-[10px] text-muted-foreground truncate mt-0.5">
                        {proj.category}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* FULL ARCHITECTURE CASE STUDY MODAL */}
      {activeModalProject && (
        <div
          className="fixed inset-0 z-50 bg-background/85 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setActiveModalProject(null)}
        >
          <div
            className="card-base max-w-2xl w-full max-h-[85vh] overflow-y-auto p-6 sm:p-8 space-y-6 border-[#c88746]/40 shadow-2xl shadow-[#c88746]/15"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between gap-4 pb-4 border-b border-border/70">
              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#8a4b1f] dark:text-[#f0ca9f] font-bold">
                  {activeModalProject.category} • {activeModalProject.year}
                </span>
                <h3 className="text-2xl font-bold text-foreground mt-1">
                  {activeModalProject.title}
                </h3>
                <p className="text-xs text-muted-foreground font-semibold mt-0.5">
                  {activeModalProject.role}
                </p>
              </div>

              <button
                onClick={() => setActiveModalProject(null)}
                className="p-1.5 rounded-lg border border-border text-muted-foreground hover:text-foreground"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Overview */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1.5">
                Overview & System Purpose
              </h4>
              <p className="text-sm text-foreground/90 leading-relaxed">
                {activeModalProject.overview}
              </p>
            </div>

            {/* Engineering Contributions */}
            <div className="space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                Key Engineering Contributions
              </h4>
              <ul className="space-y-2">
                {activeModalProject.contributions.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-foreground/90 leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Challenge & Solution */}
            <div className="grid sm:grid-cols-2 gap-3 pt-2">
              <div className="p-3.5 rounded-xl border border-border/80 bg-muted/40">
                <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground block mb-1">
                  Technical Challenge
                </span>
                <p className="text-xs text-foreground/90 leading-relaxed">
                  {activeModalProject.challenge}
                </p>
              </div>
              <div className="p-3.5 rounded-xl border border-[#c88746]/30 bg-[#c88746]/[0.05]">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#8a4b1f] dark:text-[#f0ca9f] block mb-1">
                  Engineering Solution
                </span>
                <p className="text-xs text-foreground/90 leading-relaxed">
                  {activeModalProject.solution}
                </p>
              </div>
            </div>

            {/* Tech Stack */}
            <div className="pt-2 border-t border-border/60">
              <span className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground block mb-2 font-bold">
                Technologies Applied
              </span>
              <div className="flex flex-wrap gap-1.5">
                {activeModalProject.tags.map((t, idx) => (
                  <span
                    key={idx}
                    className={`text-xs font-mono font-semibold px-2.5 py-1 rounded-lg border ${t.color}`}
                  >
                    {t.name}
                  </span>
                ))}
              </div>
            </div>

            {/* Footer Buttons */}
            <div className="flex items-center justify-between pt-4 border-t border-border/70">
              {activeModalProject.link ? (
                <a
                  href={activeModalProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#8a4b1f] dark:bg-[#d49b64] text-white dark:text-[#181310] font-bold text-xs shadow-md shadow-[#c88746]/20"
                >
                  <span>{activeModalProject.linkLabel || "Visit Live"}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              ) : (
                <span className="text-xs text-muted-foreground font-mono">
                  Internal Enterprise (No Public Link)
                </span>
              )}

              <button
                onClick={() => setActiveModalProject(null)}
                className="px-4 py-2 rounded-xl border border-border text-xs font-semibold hover:bg-muted"
              >
                Close
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};

export default ProjectsSection;