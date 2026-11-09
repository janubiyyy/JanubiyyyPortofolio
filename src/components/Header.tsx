import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Moon, Sun, Menu, X, Download, Search } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { useLanguage } from "@/contexts/LanguageContext";
import { CommandMenu } from "@/components/CommandMenu";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCommandOpen, setIsCommandOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("home");
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      // Scroll progress
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalScroll > 0 ? (window.scrollY / totalScroll) * 100 : 0;
      setScrollProgress(progress);

      // Active section tracking
      const sections = ["home", "about", "experience", "projects", "skills", "contact"];
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 140) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const navItems = [
    { id: "home", label: t("home") },
    { id: "about", label: t("about") },
    { id: "experience", label: t("experience") },
    { id: "projects", label: t("projects") },
    { id: "skills", label: t("skills") },
    { id: "contact", label: t("contact") },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  const downloadCV = () => {
    const link = document.createElement("a");
    link.href = "/assets/Resume-Tasya-Khaerani-Janubiya-Developer.pdf";
    link.download = "Resume-Tasya-Khaerani-Janubiya-Developer.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      {/* Top Scroll Progress Indicator */}
      <div
        className="fixed top-0 left-0 h-[2.5px] bg-[#c88746] z-[60] transition-all duration-75"
        style={{ width: `${scrollProgress}%` }}
      />

      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-background/85 backdrop-blur-xl border-b border-border/80 shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            
            {/* Logo */}
            <button
              onClick={() => scrollToSection("home")}
              className="flex-shrink-0 group flex items-center gap-1.5"
              aria-label="Go to top"
            >
              <span className="text-lg font-bold tracking-tight text-foreground group-hover:text-[#c88746] transition-colors">
                Tasya<span className="text-[#c88746]">.</span>
              </span>
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden md:block" aria-label="Main navigation">
              <ul className="flex items-center gap-5">
                {navItems.map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => scrollToSection(item.id)}
                      className={`nav-link text-xs font-semibold ${
                        activeSection === item.id ? "active text-foreground" : ""
                      }`}
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Controls */}
            <div className="flex items-center gap-2">
              
              {/* Command Palette Trigger */}
              <button
                onClick={() => setIsCommandOpen(true)}
                className="hidden sm:flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-border/80 bg-muted/40 text-xs font-mono text-muted-foreground hover:text-foreground hover:border-[#c88746]/40 transition-colors"
                title="Quick search / Command Palette (⌘K)"
              >
                <Search className="w-3.5 h-3.5 text-[#c88746]" />
                <span className="text-[10px] bg-background/80 px-1 py-0.2 rounded border border-border/60">⌘K</span>
              </button>

              {/* Language Toggle */}
              <div className="hidden sm:flex items-center bg-muted/60 border border-border/80 rounded-lg p-0.5 gap-0.5">
                {(["id", "en"] as const).map((lang) => (
                  <button
                    key={lang}
                    onClick={() => setLanguage(lang)}
                    className={`px-2 py-1 rounded text-[11px] font-bold font-mono transition-all ${
                      language === lang
                        ? "bg-[#8a4b1f] dark:bg-[#d49b64] text-white dark:text-[#181310] shadow-sm"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                    aria-pressed={language === lang}
                  >
                    {lang.toUpperCase()}
                  </button>
                ))}
              </div>

              {/* Theme Toggle */}
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className="w-8 h-8 rounded-lg hover:text-[#c88746]"
                aria-label={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
              >
                {theme === "light" ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
              </Button>

              {/* Download Resume Button */}
              <button
                onClick={downloadCV}
                className="hidden lg:flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-bold rounded-lg
                           border border-[#c88746]/40 bg-[#c88746]/10 text-[#8a4b1f] dark:text-[#f0ca9f]
                           hover:bg-[#8a4b1f] hover:text-white dark:hover:bg-[#d49b64] dark:hover:text-[#181310]
                           transition-all duration-200"
              >
                <Download className="w-3.5 h-3.5" />
                Resume
              </button>

              {/* Mobile Menu Button */}
              <button
                className="md:hidden p-1.5 rounded-lg hover:bg-muted transition-colors"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Command Menu Modal */}
      <CommandMenu open={isCommandOpen} setOpen={setIsCommandOpen} />

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-50 bg-background/95 backdrop-blur-2xl md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <div
            className="flex flex-col h-full px-6 pt-20 pb-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-4 border-b border-border/60">
              <span className="text-sm font-bold text-foreground">Menu Navigasi</span>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-1.5 rounded-lg text-muted-foreground hover:text-foreground"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <nav className="flex-1 py-4 overflow-y-auto" aria-label="Mobile navigation">
              <ul className="space-y-1">
                {navItems.map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => scrollToSection(item.id)}
                      className={`w-full text-left px-4 py-3 rounded-xl text-base font-semibold transition-all ${
                        activeSection === item.id
                          ? "text-[#8a4b1f] dark:text-[#f0ca9f] bg-[#c88746]/10"
                          : "text-foreground/80 hover:text-[#c88746] hover:bg-muted/60"
                      }`}
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="space-y-3 pt-4 border-t border-border/80">
              <div className="flex items-center justify-between">
                <div className="flex items-center bg-muted/60 border border-border/80 rounded-lg p-1 gap-1">
                  {(["id", "en"] as const).map((lang) => (
                    <button
                      key={lang}
                      onClick={() => setLanguage(lang)}
                      className={`px-3 py-1 rounded text-xs font-bold font-mono transition-all ${
                        language === lang
                          ? "bg-[#8a4b1f] dark:bg-[#d49b64] text-white dark:text-[#181310] shadow-sm"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {lang.toUpperCase()}
                    </button>
                  ))}
                </div>

                <Button variant="ghost" size="icon" onClick={toggleTheme} className="rounded-xl w-9 h-9">
                  {theme === "light" ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
                </Button>
              </div>

              <button
                onClick={downloadCV}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#8a4b1f] dark:bg-[#d49b64] text-white dark:text-[#181310] font-bold text-xs hover:bg-[#733e19] dark:hover:bg-[#c68a4c] transition-colors"
              >
                <Download className="w-4 h-4" />
                Download Resume (PDF)
              </button>
            </div>

          </div>
        </div>
      )}
    </>
  );
};

export default Header;
