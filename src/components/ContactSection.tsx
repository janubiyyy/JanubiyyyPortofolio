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
  Sparkles,
  ExternalLink,
} from "lucide-react";

const ContactSection = () => {
  const { language } = useLanguage();
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
  });

  const copyEmail = () => {
    navigator.clipboard.writeText("tasyakhaerani66@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappNumber = "6285771942063";
    const msg = `*Halo Tasya Khaerani!*

👤 *Nama:* ${formData.name}
📧 *Email:* ${formData.email}${formData.company ? `\n🏢 *Perusahaan:* ${formData.company}` : ""}

🎯 *Subjek:* ${formData.subject}

💬 *Pesan:*
${formData.message}

_Dikirim melalui portfolio https://janubiyyy-portofolio.vercel.app/_`;

    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(msg)}`, "_blank");
    setFormData({ name: "", email: "", company: "", subject: "", message: "" });
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
    "w-full px-4 py-3 rounded-xl border border-border/80 bg-background/80 text-foreground text-sm placeholder:text-muted-foreground/60 " +
    "focus:outline-none focus:ring-2 focus:ring-[#c88746]/50 focus:border-[#c88746] transition-all duration-200";

  return (
    <section id="contact" className="py-24 relative" aria-label="Contact section">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="section-label mb-3">
              {language === "id" ? "Terhubung" : "Get In Touch"}
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-foreground mt-2">
              {language === "id"
                ? "Mari Bangun Sesuatu yang Luar Biasa Bersama."
                : "Let's Build Something Great Together."}
            </h2>
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
              {language === "id"
                ? "Saya terbuka untuk peluang kerja Senior Frontend Developer, proyek skala enterprise, maupun diskusi arsitektur web modern."
                : "Available for Senior Frontend roles, enterprise contracts, and scalable web engineering opportunities."}
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Contact Cards */}
            <div className="lg:col-span-5 space-y-4">
              
              {/* Email Card with Copy Button */}
              <div className="card-base p-5 border-[#c88746]/30 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#c88746]/10 text-[#c88746] flex items-center justify-center border border-[#c88746]/20">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-muted-foreground uppercase">Email</span>
                    <a
                      href="mailto:tasyakhaerani66@gmail.com"
                      className="text-sm font-semibold text-foreground hover:text-[#c88746] transition-colors block"
                    >
                      tasyakhaerani66@gmail.com
                    </a>
                  </div>
                </div>

                <button
                  onClick={copyEmail}
                  className="p-2 rounded-xl border border-border/80 bg-muted/40 text-muted-foreground hover:text-foreground hover:border-[#c88746]/50 transition-colors"
                  title="Copy email"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Location Card */}
              <div className="card-base p-5 flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-muted/60 text-[#c88746] flex items-center justify-center border border-border">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-muted-foreground uppercase">
                    {language === "id" ? "Lokasi" : "Location"}
                  </span>
                  <p className="text-sm font-semibold text-foreground">
                    Jakarta, Indonesia <span className="text-xs text-muted-foreground font-normal">(WIB / UTC+7)</span>
                  </p>
                </div>
              </div>

              {/* Social Channels */}
              <div className="grid grid-cols-2 gap-3">
                <a
                  href="https://linkedin.com/in/tasyakhaerani/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-base p-4 flex items-center gap-3 hover:border-[#c88746]/50 group transition-all"
                >
                  <div className="w-9 h-9 rounded-lg bg-blue-500/10 text-blue-500 flex items-center justify-center">
                    <Linkedin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-muted-foreground uppercase">Connect</span>
                    <span className="text-xs font-bold text-foreground group-hover:text-[#c88746] block">
                      LinkedIn
                    </span>
                  </div>
                </a>

                <a
                  href="https://github.com/janubiyyy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-base p-4 flex items-center gap-3 hover:border-[#c88746]/50 group transition-all"
                >
                  <div className="w-9 h-9 rounded-lg bg-muted text-foreground flex items-center justify-center">
                    <Github className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-muted-foreground uppercase">Repos</span>
                    <span className="text-xs font-bold text-foreground group-hover:text-[#c88746] block">
                      GitHub
                    </span>
                  </div>
                </a>
              </div>

              {/* Download Resume Full Button */}
              <button
                onClick={downloadCV}
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl border border-[#c88746]/40 bg-[#c88746]/10 text-[#8a4b1f] dark:text-[#f0ca9f] font-bold text-xs hover:bg-[#8a4b1f] hover:text-white dark:hover:bg-[#d49b64] dark:hover:text-[#181310] transition-all shadow-sm"
              >
                <Download className="w-4 h-4" />
                {language === "id" ? "Unduh Resume PDF Lengkap" : "Download Complete Resume (PDF)"}
              </button>

            </div>

            {/* Right Contact Form */}
            <div className="lg:col-span-7 card-base p-6 sm:p-8 space-y-5 border-[#c88746]/20 shadow-xl shadow-[#c88746]/5">
              <div>
                <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-[#c88746]" />
                  <span>{language === "id" ? "Kirim Pesan Langsung" : "Direct WhatsApp Inquiry"}</span>
                </h3>
                <p className="text-xs text-muted-foreground mt-1">
                  {language === "id"
                    ? "Formulir ini akan langsung menyusun pesan dan membuka WhatsApp terverifikasi saya."
                    : "This message will be instantly delivered to my direct WhatsApp channel."}
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-xs font-medium text-foreground mb-1.5">
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
                    <label htmlFor="email" className="block text-xs font-medium text-foreground mb-1.5">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={inputClass}
                      placeholder="you@company.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-xs font-medium text-foreground mb-1.5">
                    {language === "id" ? "Perusahaan / Organisasi (Opsional)" : "Company / Organization (Optional)"}
                  </label>
                  <input
                    type="text"
                    id="company"
                    value={formData.company}
                    onChange={handleChange}
                    className={inputClass}
                    placeholder={language === "id" ? "Nama perusahaan" : "Company Name"}
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-xs font-medium text-foreground mb-1.5">
                    {language === "id" ? "Subjek Diskusi" : "Subject"} *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={inputClass}
                    placeholder={language === "id" ? "Misal: Peluang Senior Frontend Developer" : "e.g. Senior Frontend Opportunity"}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-medium text-foreground mb-1.5">
                    {language === "id" ? "Detail Pesan / Deskripsi Kebutuhan" : "Message"} *
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className={`${inputClass} resize-none`}
                    placeholder={
                      language === "id"
                        ? "Ceritakan tentang proyek, peran yang dibuka, timeline, atau detail teknologi yang diinginkan..."
                        : "Tell me about your project, team requirements, timeline, or tech stack..."
                    }
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-[#8a4b1f] dark:bg-[#d49b64] text-white dark:text-[#181310] font-bold text-sm hover:bg-[#733e19] dark:hover:bg-[#c68a4c] active:scale-[0.99] transition-all shadow-lg shadow-[#c88746]/20"
                >
                  <Send className="w-4 h-4" />
                  <span>{language === "id" ? "Kirim via WhatsApp" : "Send via WhatsApp"}</span>
                </button>
              </form>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;
