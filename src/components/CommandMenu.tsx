import React, { useEffect, useState } from "react";
import {
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandSeparator,
} from "@/components/ui/command";
import {
  FolderGit2,
  FileText,
  User,
  Briefcase,
  Layers,
  Code2,
  Mail,
  Linkedin,
  Github,
  Sun,
  Moon,
  Languages,
  Copy,
  ExternalLink,
  Activity,
} from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { useLanguage } from "@/contexts/LanguageContext";

interface CommandMenuProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export const CommandMenu: React.FC<CommandMenuProps> = ({ open, setOpen }) => {
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage } = useLanguage();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen(!open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [open, setOpen]);

  const scrollTo = (id: string) => {
    setOpen(false);
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  const downloadCV = () => {
    setOpen(false);
    const link = document.createElement("a");
    link.href = "/assets/Resume-Tasya-Khaerani-Janubiya-Developer.pdf";
    link.download = "Resume-Tasya-Khaerani-Janubiya-Developer.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const copyEmail = () => {
    setOpen(false);
    navigator.clipboard.writeText("tasyakhaerani66@gmail.com");
  };

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput placeholder={language === "id" ? "Ketik perintah atau cari (e.g. TCM, Next.js, Resume)..." : "Type a command or search (e.g. TCM, Next.js, Resume)..."} />
      <CommandList className="max-h-[350px]">
        <CommandEmpty>No results found.</CommandEmpty>

        {/* Section Navigation */}
        <CommandGroup heading={language === "id" ? "Navigasi Halaman" : "Navigation"}>
          <CommandItem onSelect={() => scrollTo("home")}>
            <User className="mr-2 h-4 w-4 text-[#8c6747] dark:text-[#cbb29b]" />
            <span>{language === "id" ? "Beranda (Hero)" : "Home (Hero)"}</span>
          </CommandItem>
          <CommandItem onSelect={() => scrollTo("about")}>
            <FileText className="mr-2 h-4 w-4 text-[#8c6747] dark:text-[#cbb29b]" />
            <span>{language === "id" ? "Tentang Saya" : "About Me"}</span>
          </CommandItem>
          <CommandItem onSelect={() => scrollTo("experience")}>
            <Briefcase className="mr-2 h-4 w-4 text-[#8c6747] dark:text-[#cbb29b]" />
            <span>{language === "id" ? "Pengalaman Kerja" : "Work Experience"}</span>
          </CommandItem>
          <CommandItem onSelect={() => scrollTo("projects")}>
            <FolderGit2 className="mr-2 h-4 w-4 text-[#8c6747] dark:text-[#cbb29b]" />
            <span>{language === "id" ? "Proyek Pilihan (Slide)" : "Featured Projects (Slides)"}</span>
          </CommandItem>
          <CommandItem onSelect={() => scrollTo("skills")}>
            <Code2 className="mr-2 h-4 w-4 text-[#8c6747] dark:text-[#cbb29b]" />
            <span>{language === "id" ? "Keahlian Teknis" : "Technical Skills"}</span>
          </CommandItem>
          <CommandItem onSelect={() => scrollTo("contact")}>
            <Mail className="mr-2 h-4 w-4 text-[#8c6747] dark:text-[#cbb29b]" />
            <span>{language === "id" ? "Hubungi Saya" : "Contact Me"}</span>
          </CommandItem>
        </CommandGroup>

        <CommandSeparator />

        {/* Quick Projects Access */}
        <CommandGroup heading={language === "id" ? "Proyek Unggulan" : "Key Projects"}>
          <CommandItem onSelect={() => scrollTo("projects")}>
            <span className="font-semibold text-[#8c6747] dark:text-[#cbb29b] mr-2">TCM</span>
            <span>Jasa Marga Toll Collection System (Next.js)</span>
          </CommandItem>
          <CommandItem onSelect={() => scrollTo("projects")}>
            <span className="font-semibold text-[#8c6747] dark:text-[#cbb29b] mr-2">JM-RISE</span>
            <span>Interactive Map Dashboard (Mapbox GL)</span>
          </CommandItem>
          <CommandItem onSelect={() => scrollTo("projects")}>
            <span className="font-semibold text-[#8c6747] dark:text-[#cbb29b] mr-2">Katarasa</span>
            <span>Admin CMS Dashboard (React & AntD)</span>
          </CommandItem>
          <CommandItem onSelect={() => scrollTo("projects")}>
            <span className="font-semibold text-[#8c6747] dark:text-[#cbb29b] mr-2">Jaja Auto</span>
            <span>Automotive Loan Calculator (Vue.js & Lodash)</span>
          </CommandItem>
          <CommandItem onSelect={() => scrollTo("projects")}>
            <span className="font-semibold text-[#8c6747] dark:text-[#cbb29b] mr-2">Jaja.id</span>
            <span>Hobby Marketplace (Vue.js & Firebase)</span>
          </CommandItem>
        </CommandGroup>

        <CommandSeparator />

        {/* Actions */}
        <CommandGroup heading={language === "id" ? "Aksi Cepat" : "Quick Actions"}>
          <CommandItem onSelect={copyEmail}>
            <Copy className="mr-2 h-4 w-4 text-emerald-500" />
            <span>{language === "id" ? "Salin Alamat Email" : "Copy Email Address"}</span>
          </CommandItem>
          <CommandItem onSelect={downloadCV}>
            <FileText className="mr-2 h-4 w-4 text-[#8c6747] dark:text-[#cbb29b]" />
            <span>{language === "id" ? "Unduh Resume (PDF)" : "Download Resume (PDF)"}</span>
          </CommandItem>
          <CommandItem onSelect={() => { toggleTheme(); setOpen(false); }}>
            {theme === "light" ? <Moon className="mr-2 h-4 w-4" /> : <Sun className="mr-2 h-4 w-4" />}
            <span>{theme === "light" ? "Ganti ke Dark Mode" : "Switch to Light Mode"}</span>
          </CommandItem>
          <CommandItem onSelect={() => { setLanguage(language === "id" ? "en" : "id"); setOpen(false); }}>
            <Languages className="mr-2 h-4 w-4 text-blue-500" />
            <span>{language === "id" ? "Switch to English" : "Ganti ke Bahasa Indonesia"}</span>
          </CommandItem>
          <CommandItem onSelect={() => window.open("https://linkedin.com/in/tasyakhaerani/", "_blank")}>
            <Linkedin className="mr-2 h-4 w-4 text-blue-500" />
            <span>Buka LinkedIn</span>
            <ExternalLink className="ml-auto h-3 w-3 opacity-50" />
          </CommandItem>
          <CommandItem onSelect={() => window.open("https://github.com/janubiyyy", "_blank")}>
            <Github className="mr-2 h-4 w-4" />
            <span>Buka GitHub</span>
            <ExternalLink className="ml-auto h-3 w-3 opacity-50" />
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
};
