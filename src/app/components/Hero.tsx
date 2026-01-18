import { motion, useAnimation } from "motion/react";
import { useEffect } from "react";
import emnaPhoto from "../../assets/emna.jpg";
import { Button } from "./ui/button";
import { Github, Linkedin, Mail, ArrowDown, Download } from "lucide-react";

export function Hero() {
  const spinControls = useAnimation();

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    // Spin smooth loop
    spinControls
      .start({ rotateY: [0, 360], transition: { duration: 25, ease: "linear", repeat: Infinity } });
  }, [spinControls]);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden bg-gradient-to-b from-[#0f0c29] via-[#302b63] to-[#24243e] text-white">
      
      {/* Animated Stars Background */}
      <div id="stars" className="absolute inset-0 -z-10" />

      {/* Glowing Circles */}
      <div id="glow" className="absolute w-full h-full -z-20">
        <div className="circle absolute top-1/4 left-1/3 w-80 h-80 rounded-full bg-pink-500/40 blur-3xl animate-pulse"></div>
        <div className="circle absolute top-1/2 left-2/3 w-96 h-96 rounded-full bg-purple-500/40 blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Avatar */}
          <motion.div
            animate={spinControls}
            className="w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-white/50 shadow-2xl bg-white/10 backdrop-blur-md"
            style={{ transformStyle: "preserve-3d" }}
          >
            <img
              src={emnaPhoto}
              alt="Emna Manai"
              className="w-full h-full object-cover rounded-full"
            />
          </motion.div>

          {/* Name */}
          <h1 className="text-5xl md:text-7xl mt-6 font-extrabold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
            Emna Manai
          </h1>

          {/* Title */}
          <div className="inline-block px-6 py-2 rounded-full bg-white/20 border border-white/30 backdrop-blur-md mt-4 mb-6">
            <p className="text-lg font-medium">AI & Application Development Specialist</p>
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Passionate about <span className="text-pink-500 font-semibold">artificial intelligence</span> and building <span className="text-purple-500 font-semibold">intelligent, scalable applications</span>.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <Button
              size="lg"
              onClick={() => scrollToSection("contact")}
              className="btn relative px-8"
            >
              <Mail className="mr-2 h-5 w-5" />
              Get In Touch
            </Button>

            <a href="guidelines/public/cv.pdf" download="Emna_Manai_CV.pdf">
              <Button size="lg" className="btn outline relative px-8">
                <Download className="mr-2 h-5 w-5" />
                Download CV
              </Button>
            </a>
          </div>

          {/* Social */}
          <div className="flex gap-6 justify-center text-pink-500">
            <a href="https://github.com/Emna-manai22" target="_blank">
              <Github className="hover:scale-110 transition" />
            </a>
            <a href="https://www.linkedin.com/in/emna-manai" target="_blank">
              <Linkedin className="hover:scale-110 transition" />
            </a>
            <a href="mailto:emnamannai244@gmail.com">
              <Mail className="hover:scale-110 transition" />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Down */}
      <div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 cursor-pointer animate-bounce"
        onClick={() => scrollToSection("about")}
      >
        <ArrowDown className="text-pink-500 h-8 w-8" />
      </div>
    </section>
  );
}
