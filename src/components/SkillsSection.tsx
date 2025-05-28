import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  Code2,
  Palette,
  Smartphone,
  Database,
  TestTube2,
  Settings2,
} from "lucide-react";

const SkillsSection = () => {
  const { t, language } = useLanguage();

  const skillCategories = [
    {
      title:
        language === "id" ? "Frontend Technologies" : "Frontend Technologies",
      icon: <Code2 className="w-6 h-6" />,
      skills: [
        { name: "Next.js", icon: "▲", color: "text-gray-800" },
        { name: "React.js", icon: "⚛️", color: "text-blue-500" },
        { name: "Vue.js", icon: "💚", color: "text-green-500" },
        { name: "Nuxt.js", icon: "💎", color: "text-green-400" },
        { name: "TypeScript", icon: "TS", color: "text-blue-600" },
        { name: "JavaScript", icon: "JS", color: "text-yellow-500" },
      ],
    },
    {
      title: "UI/UX & Styling",
      icon: <Palette className="w-6 h-6" />,
      skills: [
        { name: "Tailwind CSS", icon: "🎨", color: "text-cyan-500" },
        { name: "Material-UI", icon: "MUI", color: "text-blue-500" },
        { name: "Vuetify", icon: "💎", color: "text-purple-500" },
        { name: "CSS3", icon: "📝", color: "text-blue-400" },
        { name: "Bootstrap", icon: "B", color: "text-purple-600" },
        { name: "Figma", icon: "🎨", color: "text-pink-500" },
      ],
    },
    {
      title: language === "id" ? "Mobile & Tools" : "Mobile & Tools",
      icon: <Smartphone className="w-6 h-6" />,
      skills: [
        { name: "React Native", icon: "📱", color: "text-blue-500" },
        { name: "Expo", icon: "⚡", color: "text-gray-700" },
        { name: "Android Studio", icon: "🤖", color: "text-green-500" },
        { name: "Git/GitHub", icon: "🐙", color: "text-gray-800" },
        { name: "Docker", icon: "🐳", color: "text-blue-400" },
        { name: "Jenkins", icon: "🔧", color: "text-gray-600" },
      ],
    },
    {
      title: language === "id" ? "Backend & Database" : "Backend & Database",
      icon: <Database className="w-6 h-6" />,
      skills: [
        { name: "Express.js", icon: "🚀", color: "text-gray-700" },
        { name: "Node.js", icon: "🟢", color: "text-green-600" },
        { name: "SQL", icon: "🗄️", color: "text-orange-500" },
        { name: "MongoDB", icon: "🍃", color: "text-green-500" },
        { name: "Power BI", icon: "📊", color: "text-yellow-500" },
        { name: "REST APIs", icon: "🔗", color: "text-blue-500" },
      ],
    },
    {
      title: language === "id" ? "Testing & DevOps" : "Testing & DevOps",
      icon: <TestTube2 className="w-6 h-6" />,
      skills: [
        { name: "Jest", icon: "🧪", color: "text-red-500" },
        { name: "React Testing Library", icon: "⚗️", color: "text-red-400" },
        { name: "ESLint", icon: "🔍", color: "text-purple-500" },
        { name: "Prettier", icon: "✨", color: "text-pink-400" },
        { name: "VS Code", icon: "💻", color: "text-blue-600" },
        { name: "Canva", icon: "🎯", color: "text-purple-400" },
      ],
    },
  ];

  const softSkills =
    language === "id"
      ? [
          "Pemecahan Masalah",
          "Kepemimpinan Tim",
          "Mindset Berorientasi UX",
          "Kolaborasi Lintas Fungsi",
          "Optimasi Performa",
          "Code Review & Mentoring",
        ]
      : [
          "Problem-Solving",
          "Team Leadership",
          "UX-Oriented Mindset",
          "Cross-functional Collaboration",
          "Performance Optimization",
          "Code Review & Mentoring",
        ];

  const achievements =
    language === "id"
      ? [
          "Menyelesaikan 7+ proyek web berdampak tinggi yang dipuji karena desain intuitif dan performa",
          "Mengurangi waktu muat halaman sebesar 40% melalui optimasi kode",
          "Memimpin tim lintas fungsi untuk meningkatkan produktivitas sebesar 30%",
          "Merampingkan proses pengembangan yang mengurangi keterlambatan supply sebesar 20%",
        ]
      : [
          "Delivered 7+ high-impact web projects praised for intuitive design and performance",
          "Reduced page load times by 40% through code optimization",
          "Led cross-functional teams to boost productivity by 30%",
          "Streamlined development processes reducing supply delays by 20%",
        ];

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              <span className="text-transparent bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text">
                {t("skillsTitle")}
              </span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-amber-600 to-orange-600 mx-auto rounded-full"></div>
          </div>

          {/* Technical Skills - Grid Layout */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {skillCategories.map((category, categoryIndex) => (
              <div
                key={categoryIndex}
                className="bg-card border border-border rounded-xl p-6 shadow-lg animate-fade-in hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center space-x-3 mb-6">
                  <div className="text-amber-600">{category.icon}</div>
                  <h3 className="text-lg font-bold text-transparent bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text">
                    {category.title}
                  </h3>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="flex items-center space-x-2 p-3 rounded-lg hover:bg-muted/50 transition-colors duration-200 border border-border/50"
                    >
                      <span className={`text-sm font-bold ${skill.color}`}>
                        {skill.icon}
                      </span>
                      <span className="text-xs font-medium text-foreground">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Soft Skills */}
          <div className="bg-card border border-border rounded-xl p-8 shadow-lg mb-12">
            <h3 className="text-2xl font-bold mb-6 text-center text-transparent bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text">
              {language === "id" ? "Soft Skills" : "Soft Skills"}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {softSkills.map((skill, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors duration-200 border border-border/30"
                >
                  <div className="w-2 h-2 bg-gradient-to-r from-amber-600 to-orange-600 rounded-full"></div>
                  <span className="text-foreground font-medium text-sm">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div className="bg-gradient-to-r from-amber-600 to-orange-600 rounded-xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-6 text-center">
              {language === "id" ? "Pencapaian Utama" : "Key Achievements"}
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-sm leading-relaxed">{achievement}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
