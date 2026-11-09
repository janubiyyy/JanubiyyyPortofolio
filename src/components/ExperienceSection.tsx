import React, { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  CalendarDays,
  MapPin,
  Briefcase,
  CheckCircle2,
  TrendingUp,
  Building2,
  ExternalLink,
} from "lucide-react";

const ExperienceSection = () => {
  const { language } = useLanguage();
  const [activeExp, setActiveExp] = useState(0);

  const experiences = [
    {
      company: "MII (Mitra Integrasi Informatika)",
      client: "Jasa Marga Project Placement",
      position: "Frontend Developer",
      period: `Jan 2025 – ${language === "id" ? "Sekarang" : "Present"}`,
      location: "Jakarta, Indonesia",
      badge: language === "id" ? "Posisi Saat Ini" : "Current Role",
      current: true,
      summary:
        language === "id"
          ? "Bertanggung jawab atas pengembangan aplikasi web internal skala enterprise untuk operasional jalan tol PT Jasa Marga (Persero) Tbk melalui penempatan resmi MII."
          : "Responsible for developing enterprise-grade internal web applications for toll road operations at PT Jasa Marga (Persero) Tbk through MII placement.",
      responsibilities:
        language === "id"
          ? [
              "Mengembangkan portal web enterprise menggunakan Next.js dan TypeScript untuk sistem operasional tol dan pemantauan lalu lintas real-time.",
              "Membangun dashboard analitik berbasis data dan antarmuka validasi transaksi terintegrasi REST API.",
              "Mendukung otomatisasi alur kerja CI/CD menggunakan Jenkins, GitLab, dan deployment kluster OpenShift.",
              "Berkolaborasi erat dengan Backend Engineer, System Analyst, dan tim QA untuk memastikan stabilitas sistem tanpa downtime.",
              "Mengoptimalkan performa halaman dan Core Web Vitals untuk penanganan data operasional yang responsif.",
            ]
          : [
              "Developing enterprise web portals using Next.js and TypeScript for toll operations and real-time traffic monitoring.",
              "Building data-driven analytical dashboards and transaction validation interfaces integrated with REST APIs.",
              "Supporting CI/CD automated deployment workflows via Jenkins, GitLab, and OpenShift cluster deployments.",
              "Collaborating closely with backend engineers, system analysts, and QA to maintain zero-downtime reliability.",
              "Optimizing page performance, Core Web Vitals, and smooth data rendering across enterprise toll portals.",
            ],
      tags: ["Next.js", "TypeScript", "REST API", "Jenkins", "GitLab", "OpenShift", "MUI", "Tailwind CSS"],
    },
    {
      company: "PT Penerbit Erlangga",
      client: "Internal Web Engineering Team",
      position: "Frontend Developer",
      period: "Aug 2022 – Jan 2025",
      location: "Jakarta, Indonesia",
      badge: "2 Years 6 Months",
      current: false,
      summary:
        language === "id"
          ? "Mengembangkan dan memelihara ekosistem aplikasi web e-commerce, portal administrasi CMS, serta kalkulator pembiayaan otomotif untuk jutaan pengguna."
          : "Engineered and maintained e-commerce web applications, CMS administrative portals, and automotive financial simulators serving extensive user bases.",
      responsibilities:
        language === "id"
          ? [
              "Membangun platform belanja online (EurekaBookhouse, Jaja.id) menggunakan Vue.js, Vuex, Vuetify, dan Tailwind CSS.",
              "Mengembangkan dashboard administrasi CMS kustom (Katarasa, EurekaBookhouse) dengan React.js, Redux, dan Ant Design.",
              "Menciptakan tool simulasi kredit mobil interaktif (Jaja Auto) dengan perhitungan reaktif instan menggunakan Lodash.",
              "Menerjemahkan desain Figma menjadi antarmuka responsif dengan akurasi piksel tinggi dan kompatibilitas lintas browser.",
              "Menerapkan strategi lazy loading aset dan optimasi bundling untuk kecepatan akses pengguna yang optimal.",
            ]
          : [
              "Built online commerce storefronts (EurekaBookhouse, Jaja.id) using Vue.js, Vuex, Vuetify, and Tailwind CSS.",
              "Developed custom admin CMS dashboards (Katarasa, EurekaBookhouse) with React.js, Redux, and Ant Design.",
              "Engineered interactive car financing simulation tools (Jaja Auto) with instant reactive computations via Lodash.",
              "Translated Figma specifications into responsive web interfaces with pixel-accurate fidelity across browsers.",
              "Implemented progressive asset lazy-loading and bundle optimizations for responsive user experiences.",
            ],
      tags: ["Vue.js", "React.js", "Vuex", "Redux", "Vuetify", "Ant Design", "Tailwind CSS", "Bootstrap Vue"],
    },
    {
      company: "PT Sociolla Bella Indonesia",
      client: "Operations Leadership",
      position: "Team Leader",
      period: "Aug 2021 – Aug 2022",
      location: "Jakarta, Indonesia",
      badge: "1 Year",
      current: false,
      summary:
        language === "id"
          ? "Memimpin tim operasional dalam mencapai efisiensi alur kerja dan target kinerja tinggi, melatih keahlian komunikasi serta kepemimpinan lintas fungsi."
          : "Led operational team exceeding performance targets, fostering cross-functional communication and structured problem-solving.",
      responsibilities:
        language === "id"
          ? [
              "Memimpin tim beranggotakan 10+ orang dalam perencanaan strategis dan koordinasi harian.",
              "Meningkatkan kelancaran alur kerja tim melalui standardisasi proses kolaboratif.",
              "Mengasah kemampuan komunikasi kritis yang menjadi fondasi kolaborasi rekayasa software dengan stakeholder.",
            ]
          : [
              "Led a 10+ member operational team through strategic daily coordination and objective tracking.",
              "Streamlined team workflow execution through standardized daily collaboration routines.",
              "Cultivated critical communication and leadership abilities that empower software engineering collaboration today.",
            ],
      tags: ["Team Leadership", "Cross-Functional Collaboration", "Workflow Optimization", "Agile Mindset"],
    },
  ];

  return (
    <section id="experience" className="py-24 relative" aria-label="Work experience">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          
          {/* Section Header */}
          <div className="mb-14">
            <span className="section-label mb-3">
              {language === "id" ? "Riwayat Karier" : "Career Trajectory"}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground mt-2">
              {language === "id" ? "Pengalaman Rekayasa Profesional" : "Professional Work Experience"}
            </h2>
            <p className="text-muted-foreground mt-3 max-w-xl text-sm sm:text-base">
              {language === "id"
                ? "Rekam jejak kontribusi nyata pada sistem enterprise, platform e-commerce, dan aplikasi skala besar."
                : "Demonstrated track record across enterprise toll road systems, retail e-commerce, and high-impact web apps."}
            </p>
          </div>

          {/* Interactive Company Tabs Layout */}
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Tabs (Company Selection) */}
            <div className="lg:col-span-4 flex flex-col gap-3">
              {experiences.map((exp, index) => {
                const isActive = activeExp === index;
                return (
                  <button
                    key={index}
                    onClick={() => setActiveExp(index)}
                    className={`text-left p-5 rounded-2xl border transition-all duration-300 relative ${
                      isActive
                        ? "border-[#c88746] bg-[#c88746]/[0.08] shadow-lg shadow-[#c88746]/5"
                        : "border-border/80 bg-card/60 hover:bg-muted/60 hover:border-border"
                    }`}
                  >
                    {isActive && (
                      <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-10 bg-[#c88746] rounded-r-full" />
                    )}

                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-[11px] font-mono text-muted-foreground">
                        {exp.period}
                      </span>
                      {exp.current && (
                        <span className="badge-available text-[10px] py-0.5 px-2">
                          Active
                        </span>
                      )}
                    </div>

                    <h3 className="font-bold text-base text-foreground leading-snug">
                      {exp.company}
                    </h3>
                    <p className="text-xs text-[#c88746] font-medium mt-0.5">
                      {exp.position}
                    </p>
                    <p className="text-[11px] text-muted-foreground mt-1">
                      {exp.client}
                    </p>
                  </button>
                );
              })}
            </div>

            {/* Right Panel: Detailed Active Experience Card */}
            <div className="lg:col-span-8">
              {(() => {
                const current = experiences[activeExp];
                return (
                  <div className="card-base p-6 sm:p-8 space-y-6 border-[#c88746]/30 shadow-xl shadow-[#c88746]/5">
                    
                    {/* Header Details */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-border/70">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="text-2xl font-bold text-foreground">
                            {current.position}
                          </h3>
                        </div>
                        <p className="text-sm font-semibold text-[#c88746]">
                          {current.company} <span className="text-muted-foreground font-normal">({current.client})</span>
                        </p>
                      </div>

                      <div className="flex sm:flex-col sm:items-end gap-2 text-xs text-muted-foreground font-mono">
                        <span className="inline-flex items-center gap-1.5">
                          <CalendarDays className="w-3.5 h-3.5 text-[#c88746]" />
                          {current.period}
                        </span>
                        <span className="inline-flex items-center gap-1.5">
                          <MapPin className="w-3.5 h-3.5 text-[#c88746]" />
                          {current.location}
                        </span>
                      </div>
                    </div>

                    {/* Summary */}
                    <p className="text-sm text-foreground/90 leading-relaxed font-medium">
                      {current.summary}
                    </p>

                    {/* Bullet Responsibilities */}
                    <div className="space-y-3">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                        {language === "id" ? "Cakupan & Tanggung Jawab Utama" : "Key Responsibilities & Deliverables"}
                      </h4>
                      <ul className="space-y-2.5">
                        {current.responsibilities.map((r, i) => (
                          <li key={i} className="flex items-start gap-3 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                            <CheckCircle2 className="w-4 h-4 text-[#c88746] flex-shrink-0 mt-0.5" />
                            <span>{r}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Tags */}
                    <div className="pt-4 border-t border-border/60">
                      <h4 className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground mb-2.5">
                        Applied Technologies
                      </h4>
                      <div className="flex flex-wrap gap-1.5">
                        {current.tags.map((tag, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 rounded-lg border border-[#c88746]/30 bg-[#c88746]/10 text-xs font-mono font-semibold text-[#8a4b1f] dark:text-[#f0ca9f] shadow-xs"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                  </div>
                );
              })()}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
