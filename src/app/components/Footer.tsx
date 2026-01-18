import { Github, Linkedin, Mail, Heart } from "lucide-react";
import { motion } from "motion/react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-pink-900/30 dark:from-black dark:via-gray-900 dark:to-pink-950/50 text-gray-100 py-12 px-4 relative overflow-hidden border-t border-gray-700 dark:border-gray-800">
      {/* Animated background elements */}
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 bg-pink-600 rounded-full mix-blend-screen filter blur-3xl opacity-10"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
          <div className="text-center md:text-left">
            <motion.h3
              className="text-2xl mb-2 bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent font-bold"
              whileHover={{ scale: 1.05 }}
            >
              Emna Manai
            </motion.h3>
            <p className="text-gray-400">
              AI & Application Development Specialist
            </p>
          </div>

          <div className="flex gap-4">
            <motion.a
              href="https://github.com/Emna-manai22"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-gradient-to-br from-gray-800 to-gray-900 dark:from-gray-900 dark:to-black hover:from-pink-600 hover:to-rose-600 flex items-center justify-center transition-all border border-gray-700 dark:border-gray-800 shadow-lg"
              aria-label="GitHub"
              whileHover={{ scale: 1.2, rotate: 5, y: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <Github className="h-5 w-5" />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/emna-manai"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-gradient-to-br from-gray-800 to-gray-900 dark:from-gray-900 dark:to-black hover:from-pink-600 hover:to-rose-600 flex items-center justify-center transition-all border border-gray-700 dark:border-gray-800 shadow-lg"
              aria-label="LinkedIn"
              whileHover={{ scale: 1.2, rotate: 5, y: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <Linkedin className="h-5 w-5" />
            </motion.a>
            <motion.a
              href="mailto:emnamannai244@gmail.com"
              className="w-12 h-12 rounded-full bg-gradient-to-br from-gray-800 to-gray-900 dark:from-gray-900 dark:to-black hover:from-pink-600 hover:to-rose-600 flex items-center justify-center transition-all border border-gray-700 dark:border-gray-800 shadow-lg"
              aria-label="Email"
              whileHover={{ scale: 1.2, rotate: 5, y: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <Mail className="h-5 w-5" />
            </motion.a>
          </div>
        </div>
        
        <div className="border-t border-gray-700 dark:border-gray-800 pt-8 text-center">
          <motion.p
            className="text-gray-400 flex items-center justify-center gap-2"
            whileHover={{ scale: 1.05 }}
          >
            © {currentYear} Emna Manai. Crafted with{" "}
            <motion.span
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
              }}
            >
              <Heart className="h-4 w-4 text-pink-500" fill="currentColor" />
            </motion.span>
            {" "}and code.
          </motion.p>
        </div>
      </div>
    </footer>
  );
}
