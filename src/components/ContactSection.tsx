import React, { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  Mail,
  MapPin,
  Linkedin,
  Github,
  Download,
  Send,
  Copy,
  Check,
  MessageSquare,
  MessageCircle,
  ExternalLink,
  Clock,
  Sparkles,
} from "lucide-react";

export const ContactSection = () => {
  const { language } = useLanguage();
  const [copied, setCopied] = useState(false);
  const [sendMethod, setSendMethod] = useState<"whatsapp" | "email">("whatsapp");
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    message: "",
  });

  const emailAddress = "tasyakhaerani66@gmail.com";
  const whatsappNumber = "6285771942063";

  const copyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (sendMethod === "whatsapp") {
      const msg = `*Halo Tasya Khaerani!*

👤 *Nama:* ${formData.name}
📱 *Kontak/Email:* ${formData.contact}

💬 *Pesan:*
${formData.message}

_Dikirim melalui portfolio https://janubiyyy-portofolio.vercel.app/_`;

      window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(msg)}`, "_blank");
    } else {
      const subject = `Inquiry Kolaborasi dari ${formData.name}`;
      const body = `Halo Tasya,

Nama: ${formData.name}
Kontak/Email: ${formData.contact}

Pesan:
${formData.message}

---
Dikirim melalui portfolio https://janubiyyy-portofolio.vercel.app/`;

      window.location.href = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    }

    setFormData({ name: "", contact: "", message: "" });
  };

  const downloadCV = () => {
    const link = document.createElement("a");
    link.href = "/assets/Resume-Tasya-Khaerani-Janubiya-Developer.pdf";
    link.download = "Resume-Tasya-Khaerani-Janubiya-Developer.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const inputClass =
    "w-full px-4 py-3 rounded-xl border border-border/80 bg-card/70 text-foreground text-xs sm:text-sm placeholder:text-muted-foreground/60 " +
    "focus:outline-none focus:ring-2 focus:ring-[#c88746]/50 focus:border-[#c88746] transition-all shadow-2xs";

  return (
    <section id="contact" className="py-24 relative overflow-hidden" aria-label="Contact and collaboration">
      {/* Warm Ambient Glows */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[400px] bg-[#c88746]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[450px] h-[350px] bg-[#8a4b1f]/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30 text-xs font-mono font-semibold mb-4">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              {language === "id"
                ? "Terbuka untuk Peluang Senior Frontend & Kontrak Enterprise"
                : "Available for Senior Frontend Roles & Enterprise Placement"}
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-foreground">
              {language === "id"
                ? "Mari Bangun Kolaborasi Rekayasa Berkelas."
                : "Let's Build Something Exceptional Together."}
            </h2>
            <p className="text-muted-foreground mt-3 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
              {language === "id"
                ? "Siap berkontribusi dalam tim engineering Anda untuk mengembangkan dashboard operasional, portal enterprise, maupun sistem berbasis peta interaktif."
                : "Ready to contribute to your engineering team to architect operational dashboards, enterprise systems, and high-performance web applications."}
            </p>
          </div>

          {/* Clean Dual-Card Suite (Compact, Unified, Zero Awkward Spaces) */}
          <div className="grid lg:grid-cols-12 gap-6 items-start">
            
            {/* Left Card: Direct Fast-Track Suite */}
            <div className="lg:col-span-5 card-base p-6 sm:p-7 border-[#c88746]/30 shadow-lg flex flex-col justify-between space-y-5">
              
              {/* Card Header */}
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground font-bold block mb-1">
                  {language === "id" ? "Jalur Komunikasi Langsung" : "Direct Contact Channels"}
                </span>
                <h3 className="text-lg font-bold text-foreground">
                  {language === "id" ? "Terhubung Cepat & Resmi" : "Fast-Track Reach Out"}
                </h3>
                <div className="flex items-center gap-2 text-xs text-muted-foreground mt-1 font-mono">
                  <Clock className="w-3.5 h-3.5 text-[#c88746]" />
                  <span>Jakarta, ID (WIB) • {language === "id" ? "Respon < 24 jam" : "Responds < 24h"}</span>
                </div>
              </div>

              {/* Fast Track 1: WhatsApp Quick Chat */}
              <a
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Halo Tasya, saya tertarik untuk mendiskusikan peluang kerja sama / proyek Frontend.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-xl border border-emerald-500/30 bg-emerald-500/10 hover:bg-emerald-500/15 hover:border-emerald-500/50 transition-all flex items-center justify-between group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-foreground block group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                      WhatsApp Quick Chat
                    </span>
                    <span className="text-[11px] font-mono text-muted-foreground">
                      +62 857-7194-2063
                    </span>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-emerald-500 opacity-70 group-hover:opacity-100 transition-opacity" />
              </a>

              {/* Fast Track 2: Email Card */}
              <div className="p-3.5 rounded-xl border border-border/80 bg-muted/20 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#c88746]/10 text-[#c88746] flex items-center justify-center">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase text-muted-foreground block font-semibold">
                      Email
                    </span>
                    <a
                      href={`mailto:${emailAddress}`}
                      className="text-xs font-bold text-foreground hover:text-[#c88746] transition-colors"
                    >
                      {emailAddress}
                    </a>
                  </div>
                </div>
                <button
                  onClick={copyEmail}
                  className="p-2 rounded-lg border border-border/80 bg-card text-muted-foreground hover:text-foreground hover:border-[#c88746]/50 transition-colors"
                  title="Copy email"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>

              {/* Social Channels (LinkedIn & GitHub) */}
              <div className="grid grid-cols-2 gap-3 pt-1">
                <a
                  href="https://linkedin.com/in/tasyakhaerani/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl border border-border/70 bg-card/60 hover:border-[#c88746]/50 flex items-center justify-between group transition-all"
                >
                  <div className="flex items-center gap-2.5">
                    <Linkedin className="w-4 h-4 text-blue-500" />
                    <span className="text-xs font-bold text-foreground group-hover:text-[#c88746]">
                      LinkedIn
                    </span>
                  </div>
                  <ExternalLink className="w-3 h-3 text-muted-foreground group-hover:text-[#c88746]" />
                </a>

                <a
                  href="https://github.com/janubiyyy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl border border-border/70 bg-card/60 hover:border-[#c88746]/50 flex items-center justify-between group transition-all"
                >
                  <div className="flex items-center gap-2.5">
                    <Github className="w-4 h-4 text-foreground" />
                    <span className="text-xs font-bold text-foreground group-hover:text-[#c88746]">
                      GitHub
                    </span>
                  </div>
                  <ExternalLink className="w-3 h-3 text-muted-foreground group-hover:text-[#c88746]" />
                </a>
              </div>

              {/* Resume PDF Download Button */}
              <button
                onClick={downloadCV}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl border border-[#c88746]/40 bg-[#c88746]/10 text-[#8a4b1f] dark:text-[#f0ca9f] font-bold text-xs hover:bg-[#8a4b1f] hover:text-white dark:hover:bg-[#d49b64] dark:hover:text-[#181310] transition-all"
              >
                <Download className="w-4 h-4" />
                <span>{language === "id" ? "Unduh Resume PDF Lengkap" : "Download Complete Resume (PDF)"}</span>
              </button>

            </div>

            {/* Right Card: Direct Message Composer */}
            <div className="lg:col-span-7 card-base p-6 sm:p-7 border-[#c88746]/30 shadow-lg flex flex-col justify-between space-y-5">
              
              {/* Header & Mode Switcher */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-border/70">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground font-bold block mb-1">
                    {language === "id" ? "Formulir Cepat" : "Instant Form"}
                  </span>
                  <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
                    <MessageSquare className="w-4 h-4 text-[#c88746]" />
                    <span>{language === "id" ? "Tinggalkan Pesan Langsung" : "Direct Message Composer"}</span>
                  </h3>
                </div>

                {/* Dispatch Toggle */}
                <div className="flex items-center bg-muted/60 p-1 rounded-xl border border-border/80 self-start sm:self-auto">
                  <button
                    type="button"
                    onClick={() => setSendMethod("whatsapp")}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold font-mono transition-all ${
                      sendMethod === "whatsapp"
                        ? "bg-emerald-600 text-white shadow-xs"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setSendMethod("email")}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold font-mono transition-all ${
                      sendMethod === "email"
                        ? "bg-[#8a4b1f] dark:bg-[#d49b64] text-white dark:text-[#181310] shadow-xs"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>Email</span>
                  </button>
                </div>
              </div>

              {/* Form Fields */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-3.5">
                  <div>
                    <label htmlFor="name" className="block text-xs font-bold text-foreground mb-1.5">
                      {language === "id" ? "Nama Lengkap" : "Full Name"} *
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={inputClass}
                      placeholder={language === "id" ? "Nama Anda" : "Your Name"}
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="contact" className="block text-xs font-bold text-foreground mb-1.5">
                      {language === "id" ? "Email atau No. WhatsApp" : "Email or WhatsApp"} *
                    </label>
                    <input
                      type="text"
                      id="contact"
                      value={formData.contact}
                      onChange={handleChange}
                      className={inputClass}
                      placeholder={language === "id" ? "email@anda.com / 08..." : "email@domain.com / +62..."}
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-bold text-foreground mb-1.5">
                    {language === "id" ? "Pesan / Kebutuhan Kolaborasi" : "Message / Project Inquiries"} *
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className={`${inputClass} resize-none`}
                    placeholder={
                      language === "id"
                        ? "Ceritakan singkat tentang proyek, tim, timeline, atau detail peran yang ingin didiskusikan..."
                        : "Briefly describe your project scope, team requirements, timeline, or discussion topics..."
                    }
                    required
                  />
                </div>

                <button
                  type="submit"
                  className={`w-full flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-xs sm:text-sm text-white transition-all shadow-md active:scale-[0.99] ${
                    sendMethod === "whatsapp"
                      ? "bg-emerald-600 hover:bg-emerald-700 shadow-emerald-600/20"
                      : "bg-[#8a4b1f] hover:bg-[#733e19] dark:bg-[#d49b64] dark:text-[#181310] dark:hover:bg-[#c68a4c] shadow-[#c88746]/20"
                  }`}
                >
                  <Send className="w-4 h-4" />
                  <span>
                    {sendMethod === "whatsapp"
                      ? language === "id"
                        ? "Kirim Pesan via WhatsApp"
                        : "Send Inquiry via WhatsApp"
                      : language === "id"
                      ? "Buka & Kirim via Email Client"
                      : "Send via Email Client"}
                  </span>
                </button>
              </form>

              {/* Form Footnote */}
              <p className="text-[11px] text-muted-foreground text-center">
                {language === "id"
                  ? "Pesan langsung diteruskan secara privat tanpa perantara pihak ketiga."
                  : "Direct delivery to Tasya's verified channels. No third-party spam."}
              </p>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;
