import React, { useState, useEffect } from "react";
import {
  ArrowRight,
  Download,
  Linkedin,
  Github,
  MapPin,
  Clock,
  Sparkles,
  ExternalLink,
  ShieldCheck,
  Briefcase,
  Zap,
  Activity,
  Layers,
  Check,
  Copy,
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const HeroSection = () => {
  const { language } = useLanguage();
  const [copied, setCopied] = useState(false);
  const [currentTime, setCurrentTime] = useState("");
  const [heroTilt, setHeroTilt] = useState({ x: 0, y: 0, glareX: 50, glareY: 50, opacity: 0 });

  const handleHeroMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setHeroTilt({
      x: -(y / (rect.height / 2)) * 8,
      y: (x / (rect.width / 2)) * 8,
      glareX: ((e.clientX - rect.left) / rect.width) * 100,
      glareY: ((e.clientY - rect.top) / rect.height) * 100,
      opacity: 0.25,
    });
  };

  const handleHeroMouseLeave = () => {
    setHeroTilt({ x: 0, y: 0, glareX: 50, glareY: 50, opacity: 0 });
  };

  // Live Jakarta Time
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString("en-US", {
          timeZone: "Asia/Jakarta",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        })
      );
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const downloadCV = () => {
    const link = document.createElement("a");
    link.href = "/assets/Resume-Tasya-Khaerani-Janubiya-Developer.pdf";
    link.download = "Resume-Tasya-Khaerani-Janubiya-Developer.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText("tasyakhaerani66@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const headline =
    language === "id"
      ? "Membangun Pengalaman Web yang Skalabel, Berkinerja Tinggi & Berpusat pada Pengguna."
      : "Building Scalable, High-Performance & User-Centered Web Experiences.";

  const description =
    language === "id"
      ? "Frontend Developer dengan 4+ tahun pengalaman membangun aplikasi web modern, dashboard enterprise, dan antarmuka berbasis data. Spesialis dalam React, Next.js, Vue.js, dan TypeScript, dengan fokus kuat pada arsitektur bersih, performa, dan kode yang mudah dipelihara."
      : "Frontend Developer with 4+ years of experience building modern web applications, enterprise dashboards, and data-driven interfaces. Specialized in React, Next.js, Vue.js, and TypeScript, with a strong focus on clean architecture, performance, and maintainable code.";

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      aria-label="Hero section"
    >
      {/* Background with Ambient Glows */}
      <div className="absolute inset-0 bg-background" />

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                            linear-gradient(to right, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Ambient Radial Spotlights in Rich Cognac / Warm Brown */}
      <div
        className="absolute top-1/4 -right-20 w-[550px] h-[550px] rounded-full opacity-15 dark:opacity-20 pointer-events-none blur-[120px]"
        style={{
          background: "radial-gradient(circle, #c88746 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute -bottom-20 -left-20 w-[450px] h-[450px] rounded-full opacity-10 dark:opacity-15 pointer-events-none blur-[100px]"
        style={{
          background: "radial-gradient(circle, #8a4b1f 0%, transparent 70%)",
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="pt-28 pb-16 lg:pt-36 lg:pb-24 max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-10 items-center">
            
            {/* Left Column: Personal Branding & Value Proposition */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              
              {/* Top Meta: Availability & Location */}
              <div className="flex flex-wrap items-center gap-2.5 mb-6 animate-fade-up">
                <span className="badge-available">
                  {language === "id"
                    ? "Tersedia untuk Peluang Baru"
                    : "Available for New Opportunities"}
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground font-medium px-2.5 py-1 rounded-full border border-border/80 bg-muted/40">
                  <MapPin className="w-3.5 h-3.5 text-[#c88746]" />
                  Jakarta, Indonesia
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground font-mono px-2.5 py-1 rounded-full border border-border/80 bg-muted/40">
                  <Clock className="w-3 h-3 text-[#c88746]" />
                  {currentTime || "UTC+7"} WIB
                </span>
              </div>

              {/* Name Identifier */}
              <div className="mb-3 animate-fade-up delay-100 flex items-center gap-2">
                <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-[#8a4b1f] dark:text-[#f0ca9f]">
                  Tasya Khaerani Janubiya
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#c88746]" />
                <span className="text-xs sm:text-sm font-semibold text-muted-foreground">
                  Senior Frontend Developer
                </span>
              </div>

              {/* Bold Dynamic Headline */}
              <h1 className="text-3xl sm:text-5xl lg:text-[45px] font-extrabold leading-[1.12] tracking-tight text-foreground mb-6 animate-fade-up delay-200">
                {headline.split("&").map((part, i) => (
                  <React.Fragment key={i}>
                    {i > 0 && <span className="text-gradient"> & </span>}
                    {part.includes("High-Performance") || part.includes("Berkinerja") ? (
                      <span className="text-gradient">{part}</span>
                    ) : (
                      part
                    )}
                  </React.Fragment>
                ))}
              </h1>

              {/* Description */}
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-xl mb-8 animate-fade-up delay-300">
                {description}
              </p>

              {/* Action Buttons & Copy Email */}
              <div className="flex flex-wrap items-center gap-3 mb-10 animate-fade-up delay-400">
                <button
                  onClick={scrollToProjects}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl
                             bg-[#8a4b1f] dark:bg-[#d49b64] text-white dark:text-[#181310] font-bold text-sm
                             hover:bg-[#733e19] dark:hover:bg-[#c68a4c] active:scale-[0.98]
                             transition-all duration-200 shadow-lg shadow-[#c88746]/20"
                >
                  {language === "id" ? "Lihat Proyek" : "View My Projects"}
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={downloadCV}
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl
                             border border-[#c88746]/40 bg-[#c88746]/10 text-[#8a4b1f] dark:text-[#f0ca9f]
                             hover:bg-[#8a4b1f] hover:text-white dark:hover:bg-[#d49b64] dark:hover:text-[#181310]
                             font-semibold text-sm active:scale-[0.98] transition-all duration-200"
                >
                  <Download className="w-4 h-4" />
                  {language === "id" ? "Unduh Resume (CV)" : "Download Resume"}
                </button>

                {/* Quick Copy Email Button with Feedback */}
                <button
                  onClick={copyEmail}
                  className="inline-flex items-center gap-2 px-3.5 py-3.5 rounded-xl
                             border border-border/80 bg-muted/40 text-muted-foreground text-xs font-mono
                             hover:text-foreground hover:border-[#c88746]/50 transition-colors duration-200"
                  title="Copy email to clipboard"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-500" />
                      <span className="text-emerald-500 font-sans font-medium text-xs">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-[#c88746]" />
                      <span className="text-xs">Email</span>
                    </>
                  )}
                </button>

                {/* Social Icons */}
                <div className="flex items-center gap-2 ml-1">
                  <a
                    href="https://linkedin.com/in/tasyakhaerani/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="flex items-center justify-center w-10 h-10 rounded-xl border border-border/80
                               text-muted-foreground hover:text-[#c88746] hover:border-[#c88746]/50 hover:bg-[#c88746]/10
                               transition-all duration-200"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a
                    href="https://github.com/janubiyyy"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="flex items-center justify-center w-10 h-10 rounded-xl border border-border/80
                               text-muted-foreground hover:text-[#c88746] hover:border-[#c88746]/50 hover:bg-[#c88746]/10
                               transition-all duration-200"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Stats Highlights */}
              <div className="flex flex-wrap items-center gap-8 pt-5 border-t border-border/70 animate-fade-up delay-500">
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-gradient">10+ Projects</div>
                  <div className="text-xs text-muted-foreground font-medium mt-0.5">
                    {language === "id" ? "Selesai di Produksi" : "Production Delivered"}
                  </div>
                </div>
                <div className="w-px h-8 bg-border" />
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-gradient">3.61 GPA</div>
                  <div className="text-xs text-muted-foreground font-medium mt-0.5">
                    B.Sc Information Systems (Cum Laude)
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Clean, Fluid, Organic 3D Portrait */}
            <div className="lg:col-span-5 animate-fade-up delay-300">
              <div className="relative mx-auto max-w-sm sm:max-w-md lg:max-w-none pt-2 pb-4">
                
                {/* Ambient Warm Backlight Glow Aura */}
                <div className="absolute inset-4 bg-gradient-to-tr from-[#8a4b1f]/20 via-[#c88746]/25 to-[#e6a86c]/20 rounded-full blur-3xl opacity-60 pointer-events-none" />

                {/* Fluid 3D Tilt Container */}
                <div
                  className="relative preserve-3d transition-transform duration-200 ease-out cursor-pointer"
                  onMouseMove={handleHeroMouseMove}
                  onMouseLeave={handleHeroMouseLeave}
                  style={{
                    transform: `perspective(1000px) rotateX(${heroTilt.x}deg) rotateY(${heroTilt.y}deg)`,
                  }}
                >
                  
                  {/* Floating Top-Left Micro Badge */}
                  <div
                    className="absolute -top-3 -left-3 sm:-left-4 px-3 py-1.5 rounded-xl bg-card/90 backdrop-blur-xl border border-[#c88746]/40 text-foreground text-[11px] font-mono font-bold shadow-xl flex items-center gap-2 z-20"
                    style={{ transform: "translateZ(35px)" }}
                  >
                    <Sparkles className="w-3.5 h-3.5 text-[#c88746]" />
                    <span>Next.js • React • TS</span>
                  </div>

                  {/* Organic Framed Portrait Container */}
                  <div className="relative w-full aspect-[4/5] sm:h-[480px] rounded-[2.5rem] overflow-hidden border border-[#c88746]/30 bg-card/40 backdrop-blur-md shadow-2xl shadow-[#8a4b1f]/10 group">
                    <img
                      src="/lovable-uploads/3823d0ef-236b-4b7b-aba0-c4d8e89f0813.png"
                      alt="Tasya Khaerani Janubiya"
                      className="w-full h-full object-cover object-[68%_74%] scale-[1.22] transition-transform duration-700 group-hover:scale-[1.25]"
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).src = "/assets/tasya.png";
                      }}
                    />

                    {/* Dynamic 3D Specular Glare Tracking */}
                    <div
                      className="absolute inset-0 pointer-events-none rounded-[2.5rem] transition-opacity duration-300"
                      style={{
                        background: `radial-gradient(circle 280px at ${heroTilt.glareX}% ${heroTilt.glareY}%, rgba(255, 255, 255, ${heroTilt.opacity}), transparent 65%)`,
                      }}
                    />

                    {/* Subtle soft edge ring for smooth organic finish */}
                    <div className="absolute inset-0 rounded-[2.5rem] ring-1 ring-inset ring-white/10 pointer-events-none" />
                  </div>

                  {/* Floating Role & Experience Badge on Photo */}
                  <div
                    className="absolute -bottom-4 right-4 sm:right-6 px-4 py-2.5 rounded-2xl bg-card/95 backdrop-blur-xl border border-[#c88746]/45 text-foreground shadow-2xl shadow-[#8a4b1f]/20 flex items-center gap-3.5 z-20"
                    style={{ transform: "translateZ(45px)" }}
                  >
                    <div className="w-9 h-9 rounded-xl bg-[#c88746]/15 border border-[#c88746]/30 flex items-center justify-center flex-shrink-0">
                      <Briefcase className="w-4 h-4 text-[#8a4b1f] dark:text-[#f0ca9f]" />
                    </div>
                    <div className="pr-1 text-left">
                      <div className="text-xs sm:text-sm font-bold text-foreground leading-tight">
                        Senior Frontend Developer
                      </div>
                      <div className="text-[11px] font-mono font-semibold text-[#8a4b1f] dark:text-[#f0ca9f] flex items-center gap-1.5 mt-0.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        <span>{language === "id" ? "4+ Tahun Pengalaman" : "4+ Years Experience"}</span>
                      </div>
                    </div>
                  </div>

                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;