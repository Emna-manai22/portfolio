import { motion } from "motion/react";
import { Badge } from "@/app/components/ui/badge";
import { Sparkles } from "lucide-react";

export function Skills() {
  const skillCategories = [
    {
      title: "AI & Machine Learning",
      skills: ["Python", "TensorFlow", "PyTorch", "Scikit-learn", "NLP", "Computer Vision", "Pandas"],
      gradient: "from-pink-500 via-purple-500 to-blue-500",
      icon: "🤖"
    },
    {
      title: "Frontend Development",
      skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "HTML/CSS", "JavaScript"],
      gradient: "from-purple-500 via-pink-500 to-rose-500",
      icon: "💻"
    },
    {
      title: "Backend & Database",
      skills: ["Django", "FastAPI", "PostgreSQL", "Laravel", "REST API", "Swagger"],
      gradient: "from-blue-500 via-purple-500 to-pink-500",
      icon: "⚙️"
    },
    {
      title: "Tools & DevOps",
      skills: ["Git", "Docker", "AWS", "CI/CD", "Jupyter", "Linux"],
      gradient: "from-rose-500 via-pink-500 to-purple-500",
      icon: "🛠️"
    }
  ];

  return (
    <section id="skills" className="py-24 px-4 relative overflow-hidden bg-gradient-to-b from-[#0f0c29] via-[#302b63] to-[#24243e] text-white">
      
      {/* Pulsing Background Circles */}
      <div className="absolute inset-0 -z-20">
        <div className="circle absolute top-1/4 left-1/3 w-96 h-96 rounded-full bg-pink-500/20 blur-3xl animate-pulse"></div>
        <div className="circle absolute top-1/2 right-1/4 w-96 h-96 rounded-full bg-purple-500/20 blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Stars */}
      <div id="stars" className="absolute inset-0 -z-10 opacity-20"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            className="inline-block mb-4"
            whileInView={{ scale: [0.95, 1] }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center gap-2 mb-2">
              <Sparkles className="h-6 w-6 text-pink-400" />
              <span className="text-sm font-medium uppercase tracking-wider text-pink-300">My Expertise</span>
              <Sparkles className="h-6 w-6 text-pink-400" />
            </div>
          </motion.div>
          <motion.h2
            className="mb-6 text-4xl md:text-5xl bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent font-bold"
            whileInView={{ scale: [0.95, 1] }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Skills & Technologies
          </motion.h2>
          <p className="text-lg text-gray-300">Expertise across the full technology stack</p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30, rotateX: -10 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03, y: -5 }}
              className="group perspective-1000"
            >
              <div className="relative bg-white/10 dark:bg-gray-800 p-8 rounded-3xl shadow-2xl border border-white/20 backdrop-blur-md h-full overflow-hidden hover:shadow-3xl transition-all">
                {/* Animated Gradient Blob */}
                <motion.div
                  className={`absolute top-0 right-0 w-48 h-48 bg-gradient-to-br ${category.gradient} opacity-30 rounded-bl-full blur-3xl`}
                  animate={{ rotate: [0, 45, 0], scale: [1, 1.15, 1] }}
                  transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                />

                {/* Icon + Title */}
                <div className="flex items-center gap-4 mb-6 relative z-10">
                  <span className="text-4xl">{category.icon}</span>
                  <div>
                    <h3 className="text-2xl font-semibold text-white group-hover:text-pink-400 transition-colors">{category.title}</h3>
                    <div className={`h-1 w-16 bg-gradient-to-r ${category.gradient} rounded-full mt-2`} />
                  </div>
                </div>

                {/* Skills Badges */}
                <div className="flex flex-wrap gap-3 relative z-10">
                  {category.skills.map((skill, sIdx) => (
                    <motion.div
                      key={sIdx}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: idx * 0.1 + sIdx * 0.05 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.15, y: -3, boxShadow: "0 0 15px rgba(255,0,150,0.5)" }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Badge
                        variant="secondary"
                        className="bg-gradient-to-r from-pink-100 via-purple-100 to-blue-100 dark:from-pink-900/20 dark:via-purple-900/20 dark:to-blue-900/20 text-pink-700 dark:text-pink-300 border border-white/20 px-4 py-2 text-sm font-medium transition-shadow"
                      >
                        {skill}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
