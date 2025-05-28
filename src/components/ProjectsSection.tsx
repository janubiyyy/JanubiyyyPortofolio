import React from "react";
import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const ProjectsSection = () => {
  const { t, language } = useLanguage();

  const projects = [
    {
      title: "JasaMarga Toll Collection Management System",
      description:
        language === "id"
          ? "Mengembangkan portal web internal untuk Sistem Manajemen Pengumpulan Tol Jasa Marga (TCMS), meningkatkan efisiensi operasional dengan aplikasi Next.js + TypeScript yang responsif. Mengimplementasikan dashboard monitoring lalu lintas real-time dengan visualisasi data dinamis untuk penggunaan enterprise."
          : "Developed and maintained an internal web portal for Jasa Marga's Toll Collection Management System (TCMS), improving operational efficiency with a responsive Next.js + TypeScript application. Implemented a real-time traffic monitoring dashboard with dynamic data visualization for enterprise use.",
      technologies: ["Next.js", "TypeScript", "Jenkins", "BitBucket"],
      link: "https://tcm.jasamarga.co.id/",
      category: "Enterprise Web Application",
      year: "2025",
      images: ["/assets/JM.png"],
    },
    {
      title: "Jaja.id - Hobby Marketplace",
      description:
        language === "id"
          ? "Salah satu Marketplace Hobi pertama di Indonesia yang menyediakan fasilitas jual beli dari konsumen ke konsumen. Setiap orang dapat membuka toko online di Jaja.id dan melayani pembeli dari seluruh Indonesia."
          : "One of the first Hobby Marketplaces in Indonesia which provides buying and selling facilities from consumer to consumer. Everyone can open an online shop at Jaja.id and serve buyers from all over Indonesia.",
      technologies: ["Vue.js", "Vuex", "Flickity", "Bootstrap Vue", "Firebase"],
      link: "http://jaja.id/",
      category: "E-commerce Platform",
      year: "2023",
      images: ["/assets/jaja1.png", "/assets/jaja2.png", "/assets/jaja3.png"],
    },
    {
      title: "Jaja Auto - Automotive Sales",
      description:
        language === "id"
          ? "Platform penjualan otomotif yang memfasilitasi Mobil Baru, Mobil Bekas, dan Trade in. Menyediakan layanan berkualitas terbaik dengan pilihan mobil berkualitas yang luas."
          : "Automotive Sales platform that facilitates New Car, Used Car, and Trade in services. Provides the best quality service with a wide selection of quality cars.",
      technologies: ["Vue.js", "Vuetify", "Flickity", "Bootstrap Vue"],
      link: "https://auto.jaja.id/",
      category: "Automotive Platform",
      year: "2023",
      images: ["/assets/JATO1.png"],
    },
    {
      title: "Eureka Book House - Online Bookstore",
      description:
        language === "id"
          ? "Platform e-commerce yang memudahkan pembelian produk Buku, ATK, Lifestyle, Toys & Hobbies, Sports & Outdoors dan Handmade melalui situs Eurekabookhouse.co.id."
          : "E-commerce platform that makes it easy to buy Books, Stationery, Lifestyle, Toys & Hobbies, Sports & Outdoors and Handmade products through the Eurekabookhouse.co.id site.",
      technologies: ["Vue.js", "Vuex", "Vue Bootstrap", "Flickity", "Lodash"],
      link: "https://eurekabookhouse.com/",
      category: "E-commerce Platform",
      year: "2023",
      images: [
        "/assets/EBH4.png",
        "/assets/EBH1.png",
        "/assets/EBH2.png",
        "/assets/EBH3.png",
      ],
    },
    {
      title: "CMS Katarasa - Admin Dashboard",
      description:
        language === "id"
          ? "Website administrator untuk mengelola dan memantau sistem atau aplikasi. Menyediakan tampilan keseluruhan data dan statistik penting, serta tools untuk melakukan tindakan administratif."
          : "Administrator website to manage and monitor systems or applications. Provides an overall view of important data and statistics, as well as tools for performing administrative actions.",
      technologies: ["React", "Ant Design", "Tailwind CSS", "Vite"],
      link: "https://nimda.katarasa.id/auth/signin/",
      category: "Content Management System",
      year: "2024",
      images: [
        "/assets/katras1.png",
        "/assets/katras2.png",
        "/assets/katras3.png",
      ],
    },
    {
      title: "CMS Eureka Book House - Admin Dashboard",
      description:
        language === "id"
          ? "CMS khusus untuk Eureka Book House mengelola inventori buku, data penjualan, dan akun pengguna. Platform menyediakan analitik real-time, pelacakan pesanan, dan tools manajemen konten."
          : "Custom CMS for Eureka Book House to manage book inventory, sales data, and user accounts. The platform provides real-time analytics, order tracking, and content management tools.",
      technologies: ["React", "Ant Design", "Tailwind CSS", "Vite"],
      link: "https://dashboard.eurekabookhouse.com/auth/signin",
      category: "Content Management System",
      year: "2024",
      images: ["/assets/AEBH1.png", "/assets/AEBH2.png", "/assets/AEBH3.png"],
    },
    {
      title: "Al-Quran Mobile App",
      description:
        language === "id"
          ? "Aplikasi mobile Al-Quran dengan React Native yang mencakup rekomendasi masjid, hadis-hadis, baca Quran, bookmark terakhir dibaca, jadwal sholat, adzan, dan fitur lainnya untuk kebutuhan ibadah sehari-hari."
          : "Al-Quran mobile application built with React Native featuring mosque recommendations, hadith collection, Quran reading, last read bookmarks, prayer schedule, adzan, and many other features for daily worship needs.",
      technologies: ["React Native", "Expo", "Android Studio"],
      category: "Mobile Application",
      year: "2023",
      images: ["/assets/al1.png", "/assets/al2.png"],
    },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              <span className="text-transparent bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text">
                {language === "id" ? "Proyek Saya" : "My Projects"}
              </span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-amber-600 to-orange-600 mx-auto rounded-full"></div>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              {language === "id"
                ? "Berikut adalah beberapa proyek yang telah saya kerjakan dengan berbagai teknologi modern"
                : "Here are some projects I have worked on using various modern technologies"}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in group"
              >
                {/* Image Carousel */}
                {project.images && (
                  <div className="h-70 overflow-hidden relative">
                    <Carousel className="w-full h-full">
                      <CarouselContent>
                        {project.images.map((image, imageIndex) => (
                          <CarouselItem key={imageIndex}>
                            <img
                              src={image}
                              alt={`${project.title} - Image ${imageIndex + 1}`}
                              className="w-full h-70 object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                      {project.images.length > 1 && (
                        <>
                          <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white border-none" />
                          <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white border-none" />
                        </>
                      )}
                    </Carousel>
                  </div>
                )}

                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-medium text-amber-600 bg-amber-100 dark:bg-amber-900/30 px-2 py-1 rounded-full">
                          {project.category}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {project.year}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-amber-600 transition-colors">
                        {project.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="text-xs font-medium px-2 py-1 bg-muted rounded-md text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex space-x-3">
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-1 text-amber-600 hover:text-amber-700 text-sm font-medium transition-colors"
                        >
                          <ExternalLink className="w-4 h-4" />
                          <span>
                            {language === "id" ? "Lihat Demo" : "View Demo"}
                          </span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center bg-gradient-to-r from-amber-600 to-orange-600 rounded-xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              {language === "id"
                ? "Tertarik Berkolaborasi?"
                : "Interested in Collaborating?"}
            </h3>
            <p className="mb-6 opacity-90">
              {language === "id"
                ? "Saya selalu terbuka untuk proyek-proyek menarik dan peluang kerja sama baru"
                : "I'm always open to interesting projects and new collaboration opportunities"}
            </p>
            <button
              onClick={() => {
                const element = document.getElementById("contact");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="bg-white text-amber-600 hover:bg-gray-100 px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105"
            >
              {language === "id" ? "Mari Berdiskusi" : "Let's Discuss"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
