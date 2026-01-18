import { motion } from "framer-motion";
import { Brain, Code2, Rocket, Award, Sparkles } from "lucide-react";

export function About() {
  const highlights = [
    {
      icon: Brain,
      title: "AI Expertise",
      description:
        "Deep learning, NLP, and ML algorithms for intelligent solutions.",
      gradient: "from-pink-400 via-purple-400 to-blue-400",
    },
    {
      icon: Code2,
      title: "Full Stack Dev",
      description: "Building scalable, maintainable, and elegant applications.",
      gradient: "from-purple-400 via-pink-400 to-rose-400",
    },
    {
      icon: Rocket,
      title: "Innovation Driven",
      description:
        "Exploring cutting-edge technologies to deliver smarter solutions.",
      gradient: "from-blue-400 via-purple-400 to-pink-400",
    },
    {
      icon: Award,
      title: "Results Focused",
      description:
        "Delivering high-quality solutions that exceed expectations.",
      gradient: "from-rose-400 via-pink-400 to-purple-400",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#0f0c29] via-[#1a183c] to-[#24243e] py-28 px-4 text-white min-h-screen">
      {/* Subtle stars in background */}
      <div className="absolute inset-0 -z-20">
        <div className="w-full h-full bg-[radial-gradient(rgba(255,255,255,0.03),transparent)] bg-[length:40px_40px] animate-spin-slow" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="h-6 w-6 text-pink-300" />
            <span className="text-sm font-medium uppercase tracking-wider text-pink-400">
              About Me
            </span>
            <Sparkles className="h-6 w-6 text-pink-300" />
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
            Crafting Elegant Digital Solutions
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed">
            Passionate about{" "}
            <span className="text-pink-400 font-semibold">
              AI & modern web development
            </span>
            , I build
            <span className="text-pink-400 font-semibold">
              {" "}
              scalable, intelligent applications
            </span>{" "}
            with elegance and precision. Focused on delivering solutions that
            are functional, beautiful, and user-centric.
          </p>
        </motion.div>

        {/* Highlights Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((highlight, idx) => {
            const Icon = highlight.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                viewport={{ once: true }}
                whileHover={{ rotateY: 6, rotateX: -3, scale: 1.05 }}
                className="group"
              >
                <motion.div
                  className="relative bg-gradient-to-br from-white/5 to-white/10 p-8 rounded-3xl shadow-lg border border-white/20 backdrop-blur-md h-full overflow-hidden transition-all hover:shadow-2xl"
                  animate={{ y: [0, -4, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  {/* Icon with subtle halo */}
                  <div
                    className={`mx-auto w-16 h-16 rounded-xl flex items-center justify-center text-white mb-6 bg-gradient-to-br ${highlight.gradient} shadow-xl`}
                  >
                    <Icon className="h-8 w-8" />
                  </div>

                  <h3 className="text-xl mb-2 text-white font-semibold">
                    {highlight.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {highlight.description}
                  </p>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
