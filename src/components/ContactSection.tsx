import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { Download, Send, Mail, Phone, MapPin, Globe } from "lucide-react";
import jsPDF from "jspdf";

const ContactSection = () => {
  const { t, language } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
    projectType: "",
  });

  const contactInfo = [
    {
      type: t("email"),
      value: "tasyakhaerani66@gmail.com",
      href: "mailto:tasyakhaerani66@gmail.com",
      icon: <Mail className="w-5 h-5" />,
    },
    {
      type: t("phone"),
      value: "+62 857-7194-2063",
      href: "tel:+6285771942063",
      icon: <Phone className="w-5 h-5" />,
    },
    {
      type: t("location"),
      value: "Jakarta, Indonesia",
      href: "#",
      icon: <MapPin className="w-5 h-5" />,
    },
    {
      type: "Website",
      value: "profile.janubiyyy.tech",
      href: "https://janubiyyy-portofolio.vercel.app/",
      icon: <Globe className="w-5 h-5" />,
    },
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/tasyakhaerani",
      icon: "💼",
    },
    {
      name: "Portfolio",
      url: "https://janubiyyy-portofolio.vercel.app/",
      icon: "🌐",
    },
    {
      name: "GitHub",
      url: "https://github.com/janubiyyy",
      icon: "👨‍💻",
    },
  ];

  const downloadCV = () => {
    const pdfUrl = "/assets/Resume-Tasya-Khaerani-Janubiya-Developer.pdf";
    console.log("Attempting to download:", pdfUrl); // Debug
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Resume-Tasya-Khaerani-Janubiya-Developer.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Enhanced WhatsApp message template
    const whatsappNumber = "6285771942063";
    const projectTypeEmoji = {
      "Frontend Developer": "⚛️",
      "React Developer": "🔵",
      "Web Developer": "🌐",
      "Apps Developer": "📱",
      "Full Stack Developer": "🚀",
    };

    const whatsappMessage = `🌟 *Halo Tasya! Saya tertarik dengan expertise Anda* 🌟

👋 Perkenalkan, saya *${formData.name}*
📧 Email: ${formData.email}
${formData.company ? `🏢 Perusahaan: ${formData.company}` : ""}

🎯 *Subjek:* ${formData.subject}
${
  formData.projectType
    ? `${
        projectTypeEmoji[
          formData.projectType as keyof typeof projectTypeEmoji
        ] || "💼"
      } *Jenis Developer:* ${formData.projectType}`
    : ""
}

💬 *Detail Kebutuhan:*
${formData.message}

---
✨ Saya sangat tertarik dengan pengalaman Anda di:
• Frontend Development (Next.js, React, Vue.js)
• Mobile Development (React Native)
• Performance Optimization
• UI/UX Implementation

Mari kita diskusikan bagaimana kita bisa berkolaborasi untuk mewujudkan project yang amazing! 🚀

Best regards,
${formData.name} 🙏

*📩 Dikirim melalui website portfolio Anda*`;

    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    // Open WhatsApp
    window.open(whatsappURL, "_blank");

    // Reset form
    setFormData({
      name: "",
      email: "",
      company: "",
      subject: "",
      message: "",
      projectType: "",
    });
  };

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const placeholders =
    language === "id"
      ? {
          name: "Masukkan nama lengkap Anda",
          email: "contoh@email.com",
          company: "Nama perusahaan (opsional)",
          subject: "Misal: Kolaborasi Proyek Website E-commerce",
          message:
            "Ceritakan tentang proyek yang ingin Anda diskusikan, timeline, budget range, teknologi yang diinginkan, atau pertanyaan teknis lainnya...",
        }
      : {
          name: "Enter your full name",
          email: "example@email.com",
          company: "Company name (optional)",
          subject: "e.g., E-commerce Website Collaboration",
          message:
            "Tell me about the project you want to discuss, timeline, budget range, preferred technologies, or any technical questions...",
        };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              <span className="text-transparent bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text">
                {language === "id" ? "Mari Terhubung" : "Let's Connect"}
              </span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-amber-600 to-orange-600 mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              {language === "id"
                ? "Siap membantu mewujudkan proyek digital Anda! Mari diskusikan bagaimana kita bisa berkolaborasi dan menciptakan solusi teknologi yang amazing."
                : "Ready to bring your digital project to life! Let's discuss how we can collaborate and create amazing technology solutions."}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  {language === "id"
                    ? "Informasi Kontak"
                    : "Contact Information"}
                </h3>

                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-4 p-4 rounded-xl bg-card border border-border hover:shadow-lg transition-all duration-300"
                    >
                      <div className="text-amber-600">{info.icon}</div>
                      <div>
                        <div className="text-sm text-muted-foreground font-medium">
                          {info.type}
                        </div>
                        <a
                          href={info.href}
                          target={
                            info.href.startsWith("http") ? "_blank" : undefined
                          }
                          rel={
                            info.href.startsWith("http")
                              ? "noopener noreferrer"
                              : undefined
                          }
                          className="text-foreground hover:text-amber-600 transition-colors duration-200 font-medium"
                        >
                          {info.value}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Download CV Button */}
              <div className="pt-4">
                <Button
                  onClick={downloadCV}
                  className="w-full bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg mb-6"
                >
                  <Download className="w-4 h-4 mr-2" />
                  {language === "id"
                    ? "Download CV (PDF)"
                    : "Download CV (PDF)"}
                </Button>
              </div>

              {/* Social Links */}
              <div>
                <h4 className="text-lg font-semibold text-foreground mb-4">
                  {language === "id"
                    ? "Terhubung Dengan Saya"
                    : "Connect With Me"}
                </h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-amber-600 to-orange-600 text-white hover:scale-110 transition-transform duration-200 shadow-lg"
                      title={social.name}
                    >
                      <span className="text-lg">{social.icon}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-card border border-border rounded-xl p-8 shadow-lg">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  💬 {language === "id" ? "Kirim Pesan" : "Send Message"}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {language === "id"
                    ? "Pesan akan dikirim langsung ke WhatsApp saya!"
                    : "Message will be sent directly to my WhatsApp!"}
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      👤 {language === "id" ? "Nama Lengkap" : "Full Name"} *
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-amber-600 focus:border-transparent transition-all duration-200"
                      placeholder={placeholders.name}
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      📧 Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-amber-600 focus:border-transparent transition-all duration-200"
                      placeholder={placeholders.email}
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="company"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      🏢 {language === "id" ? "Perusahaan" : "Company"} (
                      {language === "id" ? "opsional" : "optional"})
                    </label>
                    <input
                      type="text"
                      id="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-amber-600 focus:border-transparent transition-all duration-200"
                      placeholder={placeholders.company}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="projectType"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      💻{" "}
                      {language === "id" ? "Jenis Developer" : "Developer Type"}
                    </label>
                    <select
                      id="projectType"
                      value={formData.projectType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-amber-600 focus:border-transparent transition-all duration-200"
                    >
                      <option value="">
                        {language === "id"
                          ? "Pilih jenis developer"
                          : "Select developer type"}
                      </option>
                      <option value="Frontend Developer">
                        ⚛️ Frontend Developer
                      </option>
                      <option value="React Developer">
                        🔵 React Developer
                      </option>
                      <option value="Web Developer">🌐 Web Developer</option>
                      <option value="Apps Developer">📱 Apps Developer</option>
                      <option value="Full Stack Developer">
                        🚀 Full Stack Developer
                      </option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    🎯 {language === "id" ? "Subjek" : "Subject"} *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-amber-600 focus:border-transparent transition-all duration-200"
                    placeholder={placeholders.subject}
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    💭 {language === "id" ? "Pesan Detail" : "Detailed Message"}{" "}
                    *
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-amber-600 focus:border-transparent transition-all duration-200 resize-none"
                    placeholder={placeholders.message}
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  <Send className="w-4 h-4 mr-2" />

                  {language === "id"
                    ? "Kirim via WhatsApp"
                    : "Send via WhatsApp"}
                </Button>

                <p className="text-xs text-center text-muted-foreground">
                  ✨{" "}
                  {language === "id"
                    ? "Pesan akan otomatis dikirim ke WhatsApp "
                    : "Message will be automatically sent to WhatsApp"}
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
