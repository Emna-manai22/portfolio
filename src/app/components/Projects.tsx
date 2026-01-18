import { motion } from "framer-motion";
import { ExternalLink, Github, Sparkles, Star } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { Badge } from "@/app/components/ui/badge";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";

export function Projects() {
  const projects = [
    {
      title: "Job Matcher AI",
      description:
        "Job Matcher is a smart platform that matches job seekers with relevant job opportunities. It uses AI to improve accuracy.",
      image:
        "https://images.unsplash.com/photo-1625314887424-9f190599bd56?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      tags: ["Python", "Machine Learning", "React", "NLP", "MongoDB", "FastAPI"],
      github: "https://github.com/Emna-manai22/jobmatcher.git",
      demo: "https://example.com",
      featured: true,
      gradient: "from-pink-500 via-purple-500 to-blue-500",
    },
    {
      title: "Stress Prediction System",
      description:
        "Predicts stress levels using user data and machine learning to identify risks early.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      tags: ["TensorFlow", "Python", "Data Science", "React", "PostgreSQL", "Docker"],
      github: "https://github.com/Emna-manai22/Stress-Detector.git",
      demo: "https://example.com",
      featured: true,
      gradient: "from-rose-500 via-pink-500 to-purple-500",
    },
    {
      title: "Stock Management System",
      description:
        "Tracks and controls product inventory at Topnet. Ensures accurate stock monitoring and request handling.",
      image:
        "https://images.unsplash.com/photo-1740914994657-f1cdffdc418e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      tags: ["Django", "SQL", "Git", "HTML/CSS", "JavaScript"],
      github: "https://github.com",
      demo: "https://example.com",
      featured: false,
      gradient: "from-blue-500 via-purple-500 to-pink-500",
    },
  ];

  return (
    <section className="relative py-28 px-4 bg-gradient-to-b from-[#0f0c29] via-[#1a183c] to-[#24243e] text-white overflow-hidden min-h-screen">
      {/* Floating Stars Background */}
      <div className="absolute inset-0 -z-20">
        <div className="w-full h-full bg-[radial-gradient(rgba(255,255,255,0.02),transparent)] bg-[length:40px_40px] animate-spin-slow" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10 text-center mb-16">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Sparkles className="h-6 w-6 text-pink-400" />
          <span className="text-sm font-medium uppercase tracking-wider text-pink-400">
            Portfolio
          </span>
          <Sparkles className="h-6 w-6 text-pink-400" />
        </div>
        <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
          Featured Projects
        </h2>
        <p className="text-gray-300 max-w-3xl mx-auto text-lg md:text-xl">
          Innovative solutions built with modern technologies and clean, elegant design.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.15 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03, rotateX: -2, rotateY: 2 }}
            className="group perspective-1000"
          >
            <motion.div
              className="relative bg-white/5 dark:bg-gray-800/50 rounded-3xl shadow-lg border border-white/10 overflow-hidden flex flex-col h-full transition-all hover:shadow-2xl"
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              {/* Project Image */}
              <div className="relative aspect-video overflow-hidden">
                {project.featured && (
                  <Badge
                    className={`absolute top-4 right-4 z-10 bg-gradient-to-r ${project.gradient} text-white border-0 shadow-lg flex items-center gap-1`}
                  >
                    <Star className="h-3 w-3 fill-current" />
                    Featured
                  </Badge>
                )}
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  className="h-full"
                >
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent" />
              </div>

              {/* Project Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl mb-3 text-white group-hover:text-pink-400 transition-colors font-semibold">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4 flex-grow leading-relaxed">{project.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tIdx) => (
                    <motion.div key={tIdx} whileHover={{ scale: 1.1 }}>
                      <Badge
                        variant="outline"
                        className="border-pink-400 text-pink-400 dark:border-pink-600 dark:text-pink-300 bg-white/5 dark:bg-gray-800/20 hover:bg-white/10 dark:hover:bg-gray-700/30 transition-all"
                      >
                        {tag}
                      </Badge>
                    </motion.div>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-3">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex-1">
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full border-2 border-pink-400 text-pink-400 dark:border-pink-600 dark:text-pink-300 hover:bg-white/10 transition-all"
                      asChild
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" /> Code
                      </a>
                    </Button>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex-1">
                    <Button
                      size="sm"
                      className={`w-full bg-gradient-to-r ${project.gradient} text-white shadow-lg hover:opacity-90 border-0`}
                      asChild
                    >
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" /> Demo
                      </a>
                    </Button>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
