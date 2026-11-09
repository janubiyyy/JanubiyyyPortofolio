import React, { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { GraduationCap, Briefcase, Code2, Users, CheckCircle2, Award } from "lucide-react";

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

const AboutSection = () => {
  const { language } = useLanguage();
  const { ref, inView } = useInView();

  const highlights = [
    {
      icon: <Briefcase className="w-5 h-5 text-[#c88746]" />,
      title: language === "id" ? "4+ Tahun Pengalaman" : "4+ Years Experience",
      desc:
        language === "id"
          ? "Pengembangan sistem internal enterprise skala besar, jalan tol, dan platform e-commerce."
          : "Enterprise toll operations, high-throughput e-commerce, and high-availability internal portals.",
    },
    {
      icon: <Code2 className="w-5 h-5 text-[#c88746]" />,
      title: language === "id" ? "Arsitektur Frontend" : "Frontend Architecture",
      desc:
        language === "id"
          ? "Komponen reusable type-safe, modular state management, dan optimasi Core Web Vitals."
          : "Type-safe reusable UI systems, modular state patterns, and sub-second Core Web Vitals tuning.",
    },
    {
      icon: <Users className="w-5 h-5 text-[#c88746]" />,
      title: language === "id" ? "Kolaborasi Tim Lintas Fungsi" : "Cross-Functional Synergy",
      desc:
        language === "id"
          ? "Bekerja erat dengan Backend, System Analyst, UI/UX Designer, QA, dan DevOps."
          : "Seamless collaboration with backend architects, QA engineers, product designers, and DevOps.",
    },
    {
      icon: <GraduationCap className="w-5 h-5 text-[#c88746]" />,
      title: language === "id" ? "S1 Sistem Informasi (Cum Laude)" : "B.Sc. Information Systems",
      desc:
        language === "id"
          ? "Lulus dengan predikat Cum Laude (IPK 3.61/4.00) dengan fondasi rekayasa perangkat lunak yang kokoh."
          : "Graduated with Cum Laude honors (3.61 / 4.00 GPA) providing deep software engineering rigor.",
    },
  ];

  const aboutParagraphs =
    language === "id"
      ? [
          "Saya adalah Frontend Developer dengan lebih dari 4 tahun pengalaman merancang dan mengimplementasikan antarmuka web yang responsif, berpusat pada pengguna, dan berorientasi pada performa tinggi. Sepanjang karier saya, saya telah berkontribusi pada aplikasi skala enterprise — mulai dari portal internal manajemen jalan tol hingga sistem e-commerce dan dashboard analitik berbasis data.",
          "Keahlian inti saya berakar kuat pada ekosistem React, Next.js, Vue.js, dan TypeScript. Saya terbiasa menerjemahkan arsitektur sistem dan desain Figma menjadi antarmuka yang presisi piksel, modular, dan mudah dipelihara. Saya juga memiliki rekam jejak dalam visualisasi geospasial menggunakan Mapbox GL serta integrasi data real-time.",
          "Saya terbiasa bekerja dalam lingkungan profesional berbasis CI/CD (Jenkins, GitLab, OpenShift) dan metodologi Agile. Bagi saya, keunggulan frontend terletak pada kode yang bersih, performa yang ringan, dan kemudahan kolaborasi tim jangka panjang.",
        ]
      : [
          "I am a Frontend Developer with 4+ years of hands-on experience architecting and shipping responsive, user-centric, high-performance web applications. My career spans enterprise-scale production systems — from mission-critical toll road operations and dynamic GIS mapping to nationwide e-commerce platforms and business analytics portals.",
          "My technical core centers around React, Next.js, Vue.js, and TypeScript. I specialize in translating complex Figma specifications into pixel-perfect, highly maintainable, and accessible UI architectures. In addition, I bring proven experience in geospatial mapping with Mapbox GL and real-time REST/WebSocket data visualization.",
          "I operate comfortably in collaborative DevOps-driven workflows using Jenkins, GitLab CI, and OpenShift clusters. I firmly believe senior engineering is about clean architecture, sub-second latency, and writing code that is a pleasure for teammates to maintain and scale.",
        ];

  return (
    <section id="about" className="py-24 relative" aria-label="About section">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="max-w-6xl mx-auto">
          
          {/* Section Header */}
          <div
            className={`mb-14 transition-all duration-700 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <span className="section-label mb-3">
              {language === "id" ? "Tentang Saya" : "Professional Background"}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground mt-2">
              {language === "id"
                ? "Rekayasa Web Berbasis Dampak & Standar Kualitas Tinggi"
                : "Engineering for Real-World Impact & Rigor"}
            </h2>
          </div>

          <div className="grid lg:grid-cols-12 gap-10 items-start">
            
            {/* Left Bio Content (7 cols) */}
            <div
              className={`lg:col-span-7 space-y-6 transition-all duration-700 delay-100 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              {aboutParagraphs.map((p, i) => (
                <p key={i} className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                  {p}
                </p>
              ))}

              {/* Quick Metrics Bar */}
              <div className="pt-6 border-t border-border/80 grid grid-cols-3 gap-4">
                <div className="p-4 rounded-xl border border-border/80 bg-card/60 backdrop-blur-md">
                  <div className="text-2xl sm:text-3xl font-extrabold text-gradient">4+</div>
                  <div className="text-xs text-muted-foreground font-medium mt-1">
                    {language === "id" ? "Tahun Pengalaman" : "Years Experience"}
                  </div>
                </div>
                <div className="p-4 rounded-xl border border-border/80 bg-card/60 backdrop-blur-md">
                  <div className="text-2xl sm:text-3xl font-extrabold text-gradient">10+</div>
                  <div className="text-xs text-muted-foreground font-medium mt-1">
                    {language === "id" ? "Proyek Terkirim" : "Shipped Projects"}
                  </div>
                </div>
                <div className="p-4 rounded-xl border border-border/80 bg-card/60 backdrop-blur-md">
                  <div className="text-2xl sm:text-3xl font-extrabold text-gradient">3.61</div>
                  <div className="text-xs text-muted-foreground font-medium mt-1">
                    Cum Laude GPA
                  </div>
                </div>
              </div>
            </div>

            {/* Right Highlight Cards (5 cols) */}
            <div
              className={`lg:col-span-5 grid grid-cols-1 gap-4 transition-all duration-700 delay-200 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              {highlights.map((h, i) => (
                <div
                  key={i}
                  className="card-base p-5 flex gap-4 items-start group hover:border-[#c88746]/50 hover:shadow-lg hover:shadow-[#c88746]/5 transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-[#c88746]/10 flex items-center justify-center border border-[#c88746]/20 group-hover:scale-105 transition-transform">
                    {h.icon}
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-foreground group-hover:text-[#c88746] transition-colors">
                      {h.title}
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed mt-1">
                      {h.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
