import React, { useState, useMemo } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  Search,
  Code2,
  MapPin,
  Database,
  Palette,
  GitBranch,
  X,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

interface DomainGroup {
  id: string;
  category: "frontend" | "ui" | "state" | "viz" | "devops";
  title: string;
  titleEn: string;
  subtitle: string;
  subtitleEn: string;
  icon: React.ElementType;
  accentColor: string;
  featuredSkillCount: string;
  skills: {
    name: string;
    highlight: string;
    highlightEn: string;
    level?: string;
  }[];
}

const DomainTiltCard: React.FC<{
  domain: DomainGroup;
  isHeroCard: boolean;
  language: string;
}> = ({ domain, isHeroCard, language }) => {
  const [tilt, setTilt] = useState({ x: 0, y: 0, glareX: 50, glareY: 50, opacity: 0 });
  const IconComponent = domain.icon;

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
      className={`card-base p-6 sm:p-7 flex flex-col justify-between relative group hover:border-[#c88746]/60 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-[#c88746]/10 cursor-default ${
        isHeroCard
          ? "md:col-span-2 lg:col-span-2 border-[#c88746]/40 bg-gradient-to-br from-card via-card to-[#c88746]/[0.05]"
          : "border-border/80"
      }`}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
      }}
    >
      {/* Dynamic 3D Specular Glare */}
      <div
        className="absolute inset-0 pointer-events-none rounded-2xl transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle 260px at ${tilt.glareX}% ${tilt.glareY}%, rgba(200, 135, 70, ${tilt.opacity}), transparent 70%)`,
        }}
      />

      {/* Subtle Top-Right Ambient Accent */}
      <div className={`absolute top-0 right-0 w-36 h-36 bg-gradient-to-bl ${domain.accentColor} rounded-tr-2xl pointer-events-none rounded-bl-full`} />

      <div>
        {/* Domain Header */}
        <div className="flex items-start justify-between gap-4 mb-3 relative z-10">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-[#c88746]/10 border border-[#c88746]/30 flex items-center justify-center text-[#8a4b1f] dark:text-[#f0ca9f] group-hover:scale-105 transition-transform shadow-2xs">
              <IconComponent className="w-5 h-5 text-[#c88746]" />
            </div>
            <div>
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#8a4b1f] dark:text-[#f0ca9f] font-bold">
                {domain.featuredSkillCount}
              </span>
              <h3 className="text-lg sm:text-xl font-extrabold text-foreground leading-snug">
                {language === "id" ? domain.title : domain.titleEn}
              </h3>
            </div>
          </div>
        </div>

        {/* Domain Subtitle */}
        <p className="text-xs text-muted-foreground leading-relaxed mb-5 relative z-10">
          {language === "id" ? domain.subtitle : domain.subtitleEn}
        </p>

        {/* Interactive Skills Grid (Compact, Clean Pills) */}
        <div className={`grid gap-2 relative z-10 ${isHeroCard ? "grid-cols-1 sm:grid-cols-2" : "grid-cols-1"}`}>
          {domain.skills.map((skill, sIdx) => (
            <div
              key={sIdx}
              className="p-2.5 px-3 rounded-xl border border-border/70 bg-muted/20 hover:bg-muted/50 hover:border-[#c88746]/50 hover:scale-[1.01] transition-all flex items-center justify-between gap-2.5 group/chip shadow-2xs"
            >
              <div className="flex items-center gap-2 min-w-0">
                <span className="w-1.5 h-1.5 rounded-full bg-[#c88746] opacity-70 group-hover/chip:opacity-100 group-hover/chip:scale-125 transition-all flex-shrink-0" />
                <span className="font-bold text-xs text-foreground group-hover/chip:text-[#c88746] transition-colors truncate">
                  {skill.name}
                </span>
              </div>
              <span className="text-[10px] font-mono text-muted-foreground px-2 py-0.5 rounded bg-card/80 border border-border/70 flex-shrink-0 truncate max-w-[170px]">
                {language === "id" ? skill.highlight : skill.highlightEn}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Footnote */}
      <div className="mt-5 pt-3.5 border-t border-border/60 flex items-center justify-between text-[10px] font-mono text-muted-foreground">
        <span className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          Production Proven
        </span>
        <span className="text-muted-foreground/80">
          {domain.skills.length} Technologies
        </span>
      </div>
    </div>
  );
};

export const SkillsSection = () => {
  const { language } = useLanguage();
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState<string>("all");

  // 5 High-Impact Engineering Domains
  const domainGroups: DomainGroup[] = useMemo(
    () => [
      {
        id: "frontend-architecture",
        category: "frontend",
        title: "Arsitektur Frontend & Framework Modern",
        titleEn: "Frontend Architecture & Modern Frameworks",
        subtitle:
          "Pembangunan aplikasi berbasis komponen, SSR/SSG, dan strict type-safety untuk skalabilitas jangka panjang.",
        subtitleEn:
          "Component-driven systems, SSR/SSG workflows, and strict type-safety engineered for long-term scalability.",
        icon: Code2,
        accentColor: "from-[#8a4b1f]/20 via-[#c88746]/10 to-transparent",
        featuredSkillCount: "7 Core Technologies",
        skills: [
          {
            name: "React.js",
            highlight: "Primary (4+ Thn)",
            highlightEn: "Primary (4+ Yrs)",
            level: "Core Expert",
          },
          {
            name: "Next.js",
            highlight: "App Router, SSR/SSG",
            highlightEn: "App Router, SSR/SSG",
            level: "Production",
          },
          {
            name: "TypeScript",
            highlight: "Strict Types & Interfaces",
            highlightEn: "Strict Type Safety",
            level: "Standard",
          },
          {
            name: "Vue.js",
            highlight: "Composition & Options API",
            highlightEn: "Composition API",
            level: "Production",
          },
          {
            name: "JavaScript (ES6+)",
            highlight: "Async, Closures, DOM",
            highlightEn: "Async/Await Core",
            level: "Foundation",
          },
          {
            name: "Nuxt.js",
            highlight: "Vue SSR Engine",
            highlightEn: "Vue SSR Framework",
            level: "Production",
          },
          {
            name: "HTML5 & Semantic Web",
            highlight: "W3C Standards & A11y",
            highlightEn: "W3C Standards & A11y",
            level: "Foundation",
          },
        ],
      },
      {
        id: "geospatial-viz",
        category: "viz",
        title: "Sistem GIS Geospasial & Visualisasi Data",
        titleEn: "Geospatial GIS & Real-Time Visualization",
        subtitle:
          "Visualisasi peta jaringan jalan tol Jasa Marga real-time dan dashboard metrik analitik latensi rendah.",
        subtitleEn:
          "Real-time toll road GIS mapping and low-latency operational telemetry dashboards for high data throughput.",
        icon: MapPin,
        accentColor: "from-teal-500/15 via-emerald-500/5 to-transparent",
        featuredSkillCount: "Mission-Critical GIS",
        skills: [
          {
            name: "Mapbox GL JS",
            highlight: "Layer Vektor Tol",
            highlightEn: "Toll Vector Tiles",
            level: "Specialty",
          },
          {
            name: "Leaflet",
            highlight: "Peta Spasial Ringan",
            highlightEn: "Lightweight Spatial",
            level: "Production",
          },
          {
            name: "Chart.js",
            highlight: "Metrik Transaksi Live",
            highlightEn: "Real-time Telemetry",
            level: "Production",
          },
          {
            name: "Power BI Integration",
            highlight: "Embedded Dashboard",
            highlightEn: "Embedded Dashboards",
            level: "Enterprise",
          },
        ],
      },
      {
        id: "state-data",
        category: "state",
        title: "Arsitektur State & Alur Data Asinkron",
        titleEn: "State Management & Data Pipelines",
        subtitle:
          "Pengelolaan server-state, caching terdistribusi, sinkronisasi REST API, dan integritas transaksi.",
        subtitleEn:
          "Server-state caching, distributed cache invalidation, REST API synchronization, and transaction integrity.",
        icon: Database,
        accentColor: "from-amber-500/15 via-[#c88746]/5 to-transparent",
        featuredSkillCount: "Data Consistency",
        skills: [
          {
            name: "TanStack Query",
            highlight: "Server-State Caching",
            highlightEn: "Server-State Caching",
            level: "Modern Core",
          },
          {
            name: "Redux & Redux Toolkit",
            highlight: "Central Store & Slices",
            highlightEn: "Central Store & Slices",
            level: "Enterprise",
          },
          {
            name: "Vuex",
            highlight: "Vue Platform State",
            highlightEn: "Vue Platform State",
            level: "Production",
          },
          {
            name: "REST API Integration",
            highlight: "CRUD & Webhooks",
            highlightEn: "CRUD & Webhooks",
            level: "Core",
          },
          {
            name: "Axios",
            highlight: "Interceptors & Auth",
            highlightEn: "Interceptors & Auth",
            level: "Core",
          },
        ],
      },
      {
        id: "ui-design-systems",
        category: "ui",
        title: "Design Systems & UI Engineering",
        titleEn: "Design Systems & UI Engineering",
        subtitle:
          "Penerjemahan Figma presisi tinggi ke komponen modular, responsif, dan standar aksesibilitas enterprise.",
        subtitleEn:
          "High-fidelity Figma translation into accessible, responsive, and tokenized design systems.",
        icon: Palette,
        accentColor: "from-blue-500/15 via-indigo-500/5 to-transparent",
        featuredSkillCount: "Design Tokens",
        skills: [
          {
            name: "Tailwind CSS",
            highlight: "Tokens & JIT Config",
            highlightEn: "Tokens & JIT Config",
            level: "Primary",
          },
          {
            name: "Material UI (MUI)",
            highlight: "Enterprise Theming",
            highlightEn: "Enterprise Theming",
            level: "Enterprise",
          },
          {
            name: "Ant Design",
            highlight: "Admin CMS Dashboards",
            highlightEn: "Admin CMS Dashboards",
            level: "Production",
          },
          {
            name: "Mantine",
            highlight: "Accessible Component Hooks",
            highlightEn: "Accessible Hooks",
            level: "Production",
          },
          {
            name: "Vuetify",
            highlight: "Vue Material Design",
            highlightEn: "Vue Material Design",
            level: "Production",
          },
        ],
      },
      {
        id: "devops-tooling",
        category: "devops",
        title: "CI/CD, Cloud & Tooling Produksi",
        titleEn: "CI/CD, Cloud & Enterprise Tooling",
        subtitle:
          "Otomatisasi build, deployment klaster kontainer, kontrol versi terstruktur, dan workflow kolaboratif.",
        subtitleEn:
          "Automated builds, containerized cluster deployments, version integrity, and agile DevOps workflows.",
        icon: GitBranch,
        accentColor: "from-orange-500/15 via-red-500/5 to-transparent",
        featuredSkillCount: "Deployment Rigor",
        skills: [
          {
            name: "GitLab CI/CD",
            highlight: "Automated Build Pipeline",
            highlightEn: "Automated Testing",
            level: "Enterprise",
          },
          {
            name: "Jenkins",
            highlight: "Build & Deploy Otomatis",
            highlightEn: "Automated Pipelines",
            level: "Enterprise",
          },
          {
            name: "Red Hat OpenShift",
            highlight: "Klaster Kubernetes",
            highlightEn: "Kubernetes Enterprise",
            level: "Enterprise",
          },
          {
            name: "Docker",
            highlight: "Containerized Runtime",
            highlightEn: "Container Environments",
            level: "Production",
          },
          {
            name: "Git & Bitbucket",
            highlight: "Branching Strategy",
            highlightEn: "Branching Integrity",
            level: "Core",
          },
          {
            name: "Figma",
            highlight: "Tokens & Hand-off",
            highlightEn: "Tokens & Hand-off",
            level: "Design Core",
          },
        ],
      },
    ],
    []
  );

  // Flat skills list for quick text search
  const allFlatSkills = useMemo(() => {
    const list: Array<{ name: string; category: string; categoryLabel: string; highlight: string }> = [];
    domainGroups.forEach((group) => {
      group.skills.forEach((skill) => {
        list.push({
          name: skill.name,
          category: group.category,
          categoryLabel: language === "id" ? group.title : group.titleEn,
          highlight: language === "id" ? skill.highlight : skill.highlightEn,
        });
      });
    });
    return list;
  }, [domainGroups, language]);

  // Filtered domains based on tab
  const filteredDomains = useMemo(() => {
    if (activeTab === "all") return domainGroups;
    return domainGroups.filter((g) => g.category === activeTab);
  }, [domainGroups, activeTab]);

  // Search results
  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return null;
    const q = searchQuery.toLowerCase();
    return allFlatSkills.filter(
      (s) =>
        s.name.toLowerCase().includes(q) ||
        s.categoryLabel.toLowerCase().includes(q) ||
        (s.highlight && s.highlight.toLowerCase().includes(q))
    );
  }, [allFlatSkills, searchQuery]);

  const categoryTabs = [
    { id: "all", label: language === "id" ? "Semua Domain" : "All Domains" },
    { id: "frontend", label: "Frontend Core" },
    { id: "viz", label: "GIS & Spatial" },
    { id: "state", label: "State & Data" },
    { id: "ui", label: "Design Systems" },
    { id: "devops", label: "CI/CD & Cloud" },
  ];

  return (
    <section id="skills" className="py-24 relative overflow-hidden" aria-label="Technical skills and architecture">
      {/* Dynamic Warm Ambient Glow */}
      <div className="absolute top-1/3 right-10 w-[500px] h-[450px] bg-[#c88746]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[450px] h-[350px] bg-[#8a4b1f]/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          
          {/* Header & Search */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
            <div>
              <span className="section-label mb-2 inline-block">
                {language === "id" ? "Keahlian Arsitektur & Teknologi" : "Engineering Architecture & Stack"}
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
                {language === "id"
                  ? "Pilar Teknologi & Ekosistem Rekayasa"
                  : "Core Technologies & Tooling"}
              </h2>
              <p className="text-muted-foreground mt-2 max-w-xl text-sm sm:text-base">
                {language === "id"
                  ? "Penguasaan teknologi modern yang teruji pada sistem pemantauan tol nasional Jasa Marga, GIS geospasial, dan portal enterprise berkinerja tinggi."
                  : "Production-tested technologies across national toll operations at Jasa Marga, GIS spatial mapping, and high-performance enterprise portals."}
              </p>
            </div>

            {/* Instant Filter Search Bar */}
            <div className="relative w-full md:w-80">
              <Search className="w-4 h-4 text-muted-foreground absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={
                  language === "id"
                    ? "Cari stack (misal: Next, Mapbox, OpenShift)..."
                    : "Search stack (e.g. Next, Mapbox, OpenShift)..."
                }
                className="w-full pl-10 pr-9 py-2.5 rounded-xl border border-border/80 bg-card text-xs text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-[#c88746]/50 shadow-xs"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                  title="Clear search"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>

          {/* Domain Tabs (Visible when not actively searching) */}
          {!searchResults && (
            <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 border-b border-border/60 scrollbar-none">
              {categoryTabs.map((tab) => {
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex-shrink-0 px-4 py-2 rounded-xl text-xs font-semibold font-mono transition-all ${
                      isActive
                        ? "bg-[#8a4b1f] dark:bg-[#d49b64] text-white dark:text-[#181310] shadow-md shadow-[#c88746]/20 scale-[1.02]"
                        : "border border-border/80 bg-card/70 text-muted-foreground hover:text-foreground hover:border-border"
                    }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>
          )}

          {/* Search Results View */}
          {searchResults && (
            <div className="space-y-4 animate-fade-in">
              <div className="flex items-center justify-between text-xs font-mono text-muted-foreground pb-2">
                <span>
                  {language === "id" ? "Hasil pencarian untuk:" : "Search results for:"}{" "}
                  <strong className="text-foreground">"{searchQuery}"</strong> ({searchResults.length})
                </span>
                <button
                  onClick={() => setSearchQuery("")}
                  className="text-[#8a4b1f] dark:text-[#f0ca9f] hover:underline"
                >
                  {language === "id" ? "Reset pencarian" : "Clear filter"}
                </button>
              </div>

              {searchResults.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {searchResults.map((skill, idx) => (
                    <div
                      key={idx}
                      className="card-base p-4 border-[#c88746]/30 hover:border-[#c88746]/60 transition-all flex flex-col justify-between"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider font-semibold">
                          {skill.categoryLabel}
                        </span>
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                      </div>
                      <h4 className="font-bold text-base text-foreground mb-1">
                        {skill.name}
                      </h4>
                      <p className="text-xs text-[#8a4b1f] dark:text-[#f0ca9f] font-mono mt-1">
                        {skill.highlight}
                      </p>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-16 card-base text-muted-foreground text-xs font-mono">
                  {language === "id"
                    ? `Tidak ada teknologi yang cocok dengan kata kunci "${searchQuery}".`
                    : `No technologies found matching "${searchQuery}".`}
                </div>
              )}
            </div>
          )}

          {/* Domain Bento Grid with 3D Tilt */}
          {!searchResults && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredDomains.map((domain) => (
                <DomainTiltCard
                  key={domain.id}
                  domain={domain}
                  isHeroCard={domain.id === "frontend-architecture"}
                  language={language}
                />
              ))}
            </div>
          )}

        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
