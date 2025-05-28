import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const AboutSection = () => {
  const { t, language } = useLanguage();

  const aboutDescription =
    language === "id"
      ? "Frontend Developer dengan pengalaman lebih dari 3 tahun dalam merancang dan membangun aplikasi web dan mobile yang responsif. Ahli dalam JavaScript, TypeScript, Next.js, , React.js, React Native, dan Vue.js, Nuxt.js, dengan keahlian dalam menciptakan antarmuka yang berorientasi pada pengguna dan mengintegrasikan RESTful APIs. Mahir dalam mengoptimalkan performa, berkolaborasi lintas fungsi, dan mengadopsi teknologi modern untuk menghasilkan solusi yang skalabel dan berkualitas tinggi."
      : "Frontend Developer with over 3 years of experience designing and building responsive web and mobile applications. Skilled in JavaScript, TypeScript, Next.js,, React.js, React Native, dan Vue.js, Nuxt.Js, with expertise in crafting user-centric interfaces and integrating RESTful APIs. Adept at optimizing performance, collaborating cross-functionally, and adopting modern technologies to deliver scalable, high-quality solutions.";

  const qualifications =
    language === "id"
      ? [
          "Sarjana Sistem Informasi - IPK 3.61/4.00",
          "Bersertifikat Database Administration & Web Development",
          "Berpengalaman dalam metodologi Agile/Scrum",
          "Track record terbukti dalam optimasi performa (peningkatan 25%)",
          "Memimpin tim untuk mencapai peningkatan produktivitas 30%",
        ]
      : [
          "Bachelor of Information Systems - GPA 3.61/4.00",
          "Certified in Database Administration & Web Development",
          "Experienced in Agile/Scrum methodologies",
          "Proven track record in performance optimization (25% improvement)",
          "Led teams to achieve 30% productivity increase",
        ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              <span className="text-transparent bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text">
                {t("aboutTitle")}
              </span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-amber-600 to-orange-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-6 animate-slide-in">
              <p className="text-lg text-muted-foreground leading-relaxed">
                {aboutDescription}
              </p>

              <div className="space-y-4">
                {qualifications.map((qualification, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                    <span className="text-foreground">{qualification}</span>
                  </div>
                ))}
              </div>

              <div className="pt-6">
                <div className="grid grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-transparent bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text">
                      3+
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {t("yearsExperience")}
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-transparent bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text">
                      7+
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {t("projectsCompleted")}
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-transparent bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text">
                      10+
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {t("technologiesMastered")}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Visual Element */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-80 h-80 rounded-2xl bg-gradient-to-br from-amber-500/20 to-orange-600/20 backdrop-blur-sm border border-white/20 dark:border-gray-700/50 p-8">
                  <div className="w-full h-full rounded-xl bg-gradient-to-br from-amber-600 to-orange-600 flex items-center justify-center text-white">
                    <div className="text-center">
                      <div className="text-4xl font-bold mb-2">Code</div>
                      <div className="text-xl opacity-80">with Passion</div>
                      <div className="mt-4 w-16 h-1 bg-white/50 mx-auto rounded-full"></div>
                      <div className="mt-4 text-sm opacity-70">
                        Creating beautiful
                        <br />
                        user experiences
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center text-2xl animate-float">
                  ⚡
                </div>
                <div
                  className="absolute -bottom-4 -left-4 w-12 h-12 bg-green-400 rounded-full flex items-center justify-center text-xl animate-float"
                  style={{ animationDelay: "1s" }}
                >
                  💡
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
