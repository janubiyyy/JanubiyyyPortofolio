import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Linkedin, Github, Mail, ArrowUp } from "lucide-react";

const Footer = () => {
  const { language, t } = useLanguage();

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const navLinks = [
    { id: "home", label: t("home") },
    { id: "about", label: t("about") },
    { id: "experience", label: t("experience") },
    { id: "projects", label: t("projects") },
    { id: "skills", label: t("skills") },
    { id: "contact", label: t("contact") },
  ];

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const socials = [
    { icon: <Linkedin className="w-4 h-4" />, href: "https://linkedin.com/in/tasyakhaerani/", label: "LinkedIn" },
    { icon: <Github className="w-4 h-4" />, href: "https://github.com/janubiyyy", label: "GitHub" },
    { icon: <Mail className="w-4 h-4" />, href: "mailto:tasyakhaerani66@gmail.com", label: "Email" },
  ];

  return (
    <footer className="border-t border-border bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-5xl mx-auto">
          <div className="grid sm:grid-cols-3 gap-10 mb-10">
            {/* Brand */}
            <div>
              <button onClick={scrollToTop} className="text-xl font-bold tracking-tight text-foreground hover:text-[#c88746] transition-colors mb-3 block">
                Tasya<span className="text-[#c88746]">.</span>
              </button>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Frontend Developer building modern, performant web experiences with a focus on clean architecture and usability.
              </p>
              <div className="flex gap-2">
                {socials.map((s, i) => (
                  <a
                    key={i}
                    href={s.href}
                    target={s.href.startsWith("http") ? "_blank" : undefined}
                    rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    aria-label={s.label}
                    className="w-8 h-8 rounded-lg border border-border flex items-center justify-center text-muted-foreground
                               hover:text-[#c88746] hover:border-[#c88746]/40 hover:bg-[#c88746]/10
                               dark:hover:border-[#c88746]/50 dark:hover:bg-[#c88746]/15
                               transition-all duration-200"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Nav links */}
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">
                {language === "id" ? "Navigasi" : "Navigation"}
              </h4>
              <nav className="space-y-2">
                {navLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => scrollTo(link.id)}
                    className="block text-sm text-muted-foreground hover:text-[#c88746] transition-colors duration-200"
                  >
                    {link.label}
                  </button>
                ))}
              </nav>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">
                {language === "id" ? "Kontak" : "Contact"}
              </h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <a
                  href="mailto:tasyakhaerani66@gmail.com"
                  className="block hover:text-[#c88746] transition-colors duration-200"
                >
                  tasyakhaerani66@gmail.com
                </a>
                <a
                  href="https://linkedin.com/in/tasyakhaerani/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block hover:text-[#c88746] transition-colors duration-200"
                >
                  linkedin.com/in/tasyakhaerani
                </a>
                <p>Jakarta, Indonesia</p>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-border">
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} Tasya Khaerani Janubiya.{" "}
              {language === "id" ? "Semua hak dilindungi." : "All rights reserved."}
            </p>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-[#c88746]
                         hover:gap-2 transition-all duration-200"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              {language === "id" ? "Kembali ke atas" : "Back to top"}
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
