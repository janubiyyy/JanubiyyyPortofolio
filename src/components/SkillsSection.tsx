import React, { useState, useMemo } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Search, CheckCircle2, Sparkles, Terminal, X } from "lucide-react";

interface SkillItem {
  name: string;
  category: "frontend" | "ui" | "state" | "viz" | "devops";
  categoryLabel: string;
  highlight?: string;
  colorClass: string;
}

const SkillsSection = () => {
  const { language } = useLanguage();
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const skillList: SkillItem[] = useMemo(
    () => [
      // Frontend Core
      {
        name: "React.js",
        category: "frontend",
        categoryLabel: "Frontend Core",
        highlight: "Primary Library (4+ yrs)",
        colorClass: "border-cyan-500/40 bg-cyan-500/10 text-cyan-600 dark:text-cyan-400",
      },
      {
        name: "Next.js",
        category: "frontend",
        categoryLabel: "Frontend Core",
        highlight: "App Router, SSR & SSG",
        colorClass: "border-zinc-400/40 bg-zinc-500/10 text-foreground",
      },
      {
        name: "Vue.js",
        category: "frontend",
        categoryLabel: "Frontend Core",
        highlight: "Composition & Options API",
        colorClass: "border-emerald-500/40 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
      },
      {
        name: "Nuxt.js",
        category: "frontend",
        categoryLabel: "Frontend Core",
        highlight: "Vue SSR Framework",
        colorClass: "border-teal-500/40 bg-teal-500/10 text-teal-600 dark:text-teal-400",
      },
      {
        name: "TypeScript",
        category: "frontend",
        categoryLabel: "Frontend Core",
        highlight: "Strict Type Safety",
        colorClass: "border-blue-500/40 bg-blue-500/10 text-blue-600 dark:text-blue-400",
      },
      {
        name: "JavaScript (ES6+)",
        category: "frontend",
        categoryLabel: "Frontend Core",
        highlight: "Modern Asynchronous JS",
        colorClass: "border-amber-400/40 bg-amber-400/10 text-amber-600 dark:text-amber-400",
      },
      {
        name: "HTML5 & Semantic Web",
        category: "frontend",
        categoryLabel: "Frontend Core",
        highlight: "W3C Standards & SEO",
        colorClass: "border-orange-500/40 bg-orange-500/10 text-orange-600 dark:text-orange-400",
      },
      {
        name: "CSS3 & Modern Layouts",
        category: "frontend",
        categoryLabel: "Frontend Core",
        highlight: "Flexbox, Grid & Animations",
        colorClass: "border-indigo-400/40 bg-indigo-500/10 text-indigo-600 dark:text-indigo-400",
      },
      {
        name: "Tailwind CSS",
        category: "frontend",
        categoryLabel: "Frontend Core",
        highlight: "Design Tokens & JIT",
        colorClass: "border-sky-500/40 bg-sky-500/10 text-sky-600 dark:text-sky-400",
      },

      // UI Libraries
      {
        name: "Material UI (MUI)",
        category: "ui",
        categoryLabel: "UI & Component Libraries",
        highlight: "Enterprise Theming",
        colorClass: "border-blue-600/40 bg-blue-600/10 text-blue-600 dark:text-blue-400",
      },
      {
        name: "Ant Design",
        category: "ui",
        categoryLabel: "UI & Component Libraries",
        highlight: "Admin CMS Dashboards",
        colorClass: "border-red-500/40 bg-red-500/10 text-red-600 dark:text-red-400",
      },
      {
        name: "Mantine",
        category: "ui",
        categoryLabel: "UI & Component Libraries",
        highlight: "Accessible Component Hooks",
        colorClass: "border-blue-400/40 bg-blue-400/10 text-blue-500",
      },
      {
        name: "Vuetify",
        category: "ui",
        categoryLabel: "UI & Component Libraries",
        highlight: "Material Design Framework",
        colorClass: "border-cyan-600/40 bg-cyan-600/10 text-cyan-600 dark:text-cyan-400",
      },

      // State & Data
      {
        name: "Redux & Redux Toolkit",
        category: "state",
        categoryLabel: "State & Data",
        highlight: "Predictable Global Store",
        colorClass: "border-purple-500/40 bg-purple-500/10 text-purple-600 dark:text-purple-400",
      },
      {
        name: "Vuex",
        category: "state",
        categoryLabel: "State & Data",
        highlight: "Centralized Vue State",
        colorClass: "border-emerald-500/40 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
      },
      {
        name: "REST API Integration",
        category: "state",
        categoryLabel: "State & Data",
        highlight: "CRUD & Webhook Handling",
        colorClass: "border-green-600/40 bg-green-600/10 text-green-600 dark:text-green-400",
      },
      {
        name: "Axios",
        category: "state",
        categoryLabel: "State & Data",
        highlight: "Interceptors & Token Auth",
        colorClass: "border-purple-400/40 bg-purple-400/10 text-purple-500",
      },
      {
        name: "TanStack Query",
        category: "state",
        categoryLabel: "State & Data",
        highlight: "Server-State Caching",
        colorClass: "border-rose-500/40 bg-rose-500/10 text-rose-600 dark:text-rose-400",
      },

      // Visualization & Mapping
      {
        name: "Mapbox GL",
        category: "viz",
        categoryLabel: "Visualization & Mapping",
        highlight: "Interactive GIS & Toll Layers",
        colorClass: "border-teal-500/40 bg-teal-500/10 text-teal-600 dark:text-teal-400",
      },
      {
        name: "Leaflet",
        category: "viz",
        categoryLabel: "Visualization & Mapping",
        highlight: "Lightweight Spatial Maps",
        colorClass: "border-lime-500/40 bg-lime-500/10 text-lime-600 dark:text-lime-400",
      },
      {
        name: "Power BI Integration",
        category: "viz",
        categoryLabel: "Visualization & Mapping",
        highlight: "Executive Analytics Dashboards",
        colorClass: "border-yellow-500/40 bg-yellow-500/10 text-yellow-600 dark:text-yellow-400",
      },
      {
        name: "Chart.js",
        category: "viz",
        categoryLabel: "Visualization & Mapping",
        highlight: "Real-time Metrics Visuals",
        colorClass: "border-pink-500/40 bg-pink-500/10 text-pink-600 dark:text-pink-400",
      },

      // Development & Tools
      {
        name: "Git",
        category: "devops",
        categoryLabel: "Tools & DevOps",
        highlight: "Branching & Code Integrity",
        colorClass: "border-orange-600/40 bg-orange-600/10 text-orange-600 dark:text-orange-400",
      },
      {
        name: "GitLab",
        category: "devops",
        categoryLabel: "Tools & DevOps",
        highlight: "Merge Requests & CI/CD",
        colorClass: "border-orange-500/40 bg-orange-500/10 text-orange-500",
      },
      {
        name: "Bitbucket",
        category: "devops",
        categoryLabel: "Tools & DevOps",
        highlight: "Enterprise Code Hosting",
        colorClass: "border-blue-500/40 bg-blue-500/10 text-blue-600 dark:text-blue-400",
      },
      {
        name: "Jenkins",
        category: "devops",
        categoryLabel: "Tools & DevOps",
        highlight: "Automated Build Pipelines",
        colorClass: "border-amber-500/40 bg-amber-500/10 text-amber-600 dark:text-amber-400",
      },
      {
        name: "Docker",
        category: "devops",
        categoryLabel: "Tools & DevOps",
        highlight: "Containerized Workflows",
        colorClass: "border-sky-500/40 bg-sky-500/10 text-sky-600 dark:text-sky-400",
      },
      {
        name: "OpenShift",
        category: "devops",
        categoryLabel: "Tools & DevOps",
        highlight: "Kubernetes Cluster Deployment",
        colorClass: "border-red-600/40 bg-red-600/10 text-red-600 dark:text-red-400",
      },
      {
        name: "Figma",
        category: "devops",
        categoryLabel: "Tools & DevOps",
        highlight: "Pixel-Perfect Implementation",
        colorClass: "border-fuchsia-500/40 bg-fuchsia-500/10 text-fuchsia-600 dark:text-fuchsia-400",
      },
    ],
    []
  );

  const categories = [
    { id: "all", label: language === "id" ? "Semua Keahlian" : "All Skills" },
    { id: "frontend", label: "Frontend Core" },
    { id: "ui", label: "UI Libraries" },
    { id: "state", label: "State & Data" },
    { id: "viz", label: "GIS & Charts" },
    { id: "devops", label: "Tools & DevOps" },
  ];

  const filteredSkills = useMemo(() => {
    return skillList.filter((s) => {
      const matchCat = activeCategory === "all" || s.category === activeCategory;
      const matchSearch =
        s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        s.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (s.highlight && s.highlight.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchCat && matchSearch;
    });
  }, [skillList, activeCategory, searchQuery]);

  return (
    <section id="skills" className="py-24 relative" aria-label="Technical skills">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
            <div>
              <span className="section-label mb-3">
                {language === "id" ? "Keahlian Teknis" : "Technical Stack"}
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground mt-2">
                {language === "id"
                  ? "Teknologi & Ekosistem Rekayasa"
                  : "Core Technologies & Tooling"}
              </h2>
              <p className="text-muted-foreground mt-2 max-w-xl text-sm sm:text-base">
                {language === "id"
                  ? "Daftar teknologi yang digunakan secara aktif dalam proyek produksi dan lingkungan enterprise."
                  : "Technologies actively utilized across production environments, toll operations, and distributed web platforms."}
              </p>
            </div>

            {/* Interactive Search Bar */}
            <div className="relative w-full md:w-72">
              <Search className="w-4 h-4 text-muted-foreground absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={language === "id" ? "Filter stack (e.g. Next, Mapbox)..." : "Filter stack (e.g. Next, Mapbox)..."}
                className="w-full pl-10 pr-9 py-2.5 rounded-xl border border-border/80 bg-card text-xs text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-[#c88746]/50 shadow-sm"
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

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-border/60">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                  activeCategory === cat.id
                    ? "bg-[#8a4b1f] dark:bg-[#d49b64] text-white dark:text-[#181310] shadow-sm"
                    : "border border-border/80 bg-card text-muted-foreground hover:text-foreground hover:bg-muted/60"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredSkills.map((skill, index) => (
              <div
                key={index}
                className="card-base p-4 flex flex-col justify-between group hover:border-[#c88746]/60 hover:shadow-lg transition-all"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground font-semibold">
                      {skill.categoryLabel}
                    </span>
                    <span className={`w-2 h-2 rounded-full ${skill.colorClass.split(" ")[1]}`} />
                  </div>

                  <div className="flex items-center gap-2">
                    <h3 className="font-bold text-sm text-foreground group-hover:text-[#c88746] transition-colors">
                      {skill.name}
                    </h3>
                  </div>
                </div>

                {skill.highlight && (
                  <div className="mt-3 pt-2.5 border-t border-border/50">
                    <span className={`inline-block px-2 py-0.5 rounded-md text-[10px] font-mono border ${skill.colorClass}`}>
                      {skill.highlight}
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>

          {filteredSkills.length === 0 && (
            <div className="text-center py-16 text-muted-foreground text-sm">
              No matching technologies found for "{searchQuery}".
            </div>
          )}

        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
