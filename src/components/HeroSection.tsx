import React from "react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const HeroSection = () => {
  const { t, language } = useLanguage();

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const downloadCV = () => {
    const pdfUrl = "/assets/Resume-Tasya-Khaerani-Janubiya-Developer.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Resume-Tasya-Khaerani-Janubiya-Developer.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const profileDescription =
    language === "id"
      ? "Frontend Developer dengan pengalaman lebih dari 3 tahun dalam merancang dan membangun aplikasi web dan mobile yang responsif. Ahli dalam JavaScript, TypeScript, Next.js, React.js, React Native, dan Vue.js, Nuxt.Js, dengan keahlian dalam menciptakan antarmuka yang berorientasi pada pengguna dan mengintegrasikan RESTful APIs. Mahir dalam mengoptimalkan performa, berkolaborasi lintas fungsi, dan mengadopsi teknologi modern untuk menghasilkan solusi yang skalabel dan berkualitas tinggi."
      : "Frontend Developer with over 3 years of experience designing and building responsive web and mobile applications. Skilled in JavaScript, TypeScript, Next.js, React.js, React Native, dan Vue.js, Nuxt.Js, with expertise in crafting user-centric interfaces and integrating RESTful APIs. Adept at optimizing performance, collaborating cross-functionally, and adopting modern technologies to deliver scalable, high-quality solutions.";

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-white to-orange-50 dark:from-gray-900 dark:via-amber-900/20 dark:to-orange-900/20"></div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-32 w-96 h-96 bg-gradient-to-br from-amber-400/30 to-orange-600/30 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute -bottom-40 -left-32 w-96 h-96 bg-gradient-to-br from-orange-400/30 to-amber-600/30 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center animate-fade-in">
          {/* Profile Image */}
          <div className="mt-32 sm:mt-25 md:mt-25 mb-8 flex justify-center">
            <div className="relative">
              <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-gradient-to-br from-amber-500 to-orange-600 p-1 bg-gradient-to-br from-amber-500 to-orange-600">
                <img
                  src="/lovable-uploads/3823d0ef-236b-4b7b-aba0-c4d8e89f0813.png"
                  alt="Tasya Khaerani Janubiya"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full border-4 border-background"></div>
            </div>
          </div>

          {/* Name and Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            <span className="text-foreground">Tasya Khaerani Janubiya</span>
          </h1>

          <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-6 text-transparent bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text">
            Frontend Developer
          </h2>

          <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed">
            {profileDescription}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={downloadCV}
              size="lg"
              className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              {t("downloadCV")}
            </Button>

            <Button
              onClick={scrollToContact}
              variant="outline"
              size="lg"
              className="px-8 py-3 rounded-full border-2 border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white transition-all duration-300 transform hover:scale-105"
            >
              {t("contactMe")}
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center p-6 rounded-xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-white/20 dark:border-gray-700/50">
              <div className="text-3xl font-bold text-transparent bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text">
                3+
              </div>
              <div className="text-sm text-muted-foreground mt-1">
                {t("yearsExperience")}
              </div>
            </div>
            <div className="text-center p-6 rounded-xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-white/20 dark:border-gray-700/50">
              <div className="text-3xl font-bold text-transparent bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text">
                15+
              </div>
              <div className="text-sm text-muted-foreground mt-1">
                {t("projectsCompleted")}
              </div>
            </div>
            <div className="text-center p-6 rounded-xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-white/20 dark:border-gray-700/50">
              <div className="text-3xl font-bold text-transparent bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text">
                10+
              </div>
              <div className="text-sm text-muted-foreground mt-1">
                {t("technologiesMastered")}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
