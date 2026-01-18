import { motion } from "motion/react";
import { Mail, MapPin, Phone, Send, Sparkles } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Textarea } from "@/app/components/ui/textarea";
import { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock form submission
    console.log("Form submitted:", formData);
    alert("Thank you for your message! I'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "emnamannai244@gmail.com",
      href: "mailto:emnamannai244@gmail.com",
      gradient: "from-pink-500 to-rose-500"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+216 28 143 306",
      href: "tel:+21628143306",
      gradient: "from-rose-500 to-pink-500"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Tunisia",
      href: null,
      gradient: "from-pink-600 to-rose-600"
    }
  ];

  return (
    <section id="contact" className="py-24 px-4 bg-gradient-to-br from-gray-50 via-pink-50/30 to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <motion.div
        className="absolute bottom-0 left-0 w-96 h-96 bg-pink-300 dark:bg-pink-900 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-30 dark:opacity-20"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, 50, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute top-0 right-0 w-80 h-80 bg-rose-200 dark:bg-rose-900 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-20 dark:opacity-10"
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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            className="inline-block mb-4"
            whileInView={{ scale: [0.9, 1] }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center gap-2 mb-2">
              <Sparkles className="h-6 w-6 text-pink-500" />
              <span className="text-sm font-medium text-pink-600 dark:text-pink-400 uppercase tracking-wider">Get In Touch</span>
              <Sparkles className="h-6 w-6 text-pink-500" />
            </div>
          </motion.div>
          <motion.h2
            className="mb-6 text-4xl md:text-5xl bg-gradient-to-r from-pink-600 via-rose-600 to-pink-700 dark:from-pink-400 dark:via-rose-400 dark:to-pink-500 bg-clip-text text-transparent font-bold"
            whileInView={{ scale: [0.9, 1] }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Let's Connect
          </motion.h2>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Have a project in mind? Let's discuss how we can work together
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl border border-pink-100 dark:border-gray-700 p-8 h-full">
              <h3 className="text-2xl mb-8 text-gray-900 dark:text-white font-semibold">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  const content = (
                    <motion.div
                      className="flex items-start gap-4 p-4 rounded-2xl hover:bg-gradient-to-r hover:from-pink-50 hover:to-rose-50 dark:hover:from-pink-950/30 dark:hover:to-rose-950/30 transition-all"
                      whileHover={{ x: 5 }}
                    >
                      <motion.div
                        className={`flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br ${info.gradient} text-white flex items-center justify-center shadow-lg`}
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                      >
                        <Icon className="h-6 w-6" />
                      </motion.div>
                      <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-1 font-medium">{info.label}</p>
                        <p className="text-gray-900 dark:text-white font-medium">{info.value}</p>
                      </div>
                    </motion.div>
                  );

                  return info.href ? (
                    <a key={index} href={info.href}>
                      {content}
                    </a>
                  ) : (
                    <div key={index}>
                      {content}
                    </div>
                  );
                })}
              </div>
              
              {/* Decorative element */}
              <motion.div
                className="mt-8 p-6 bg-gradient-to-br from-pink-100 to-rose-100 dark:from-pink-900/30 dark:to-rose-900/30 rounded-2xl border border-pink-200 dark:border-pink-800"
                whileHover={{ scale: 1.02 }}
              >
                <h4 className="text-lg mb-2 text-gray-900 dark:text-white font-semibold flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-pink-500" />
                  Response Time
                </h4>
                <p className="text-gray-600 dark:text-gray-400">Usually within 24 hours</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <motion.form
              onSubmit={handleSubmit}
              className="space-y-6 bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-xl border border-pink-100 dark:border-gray-700"
              whileHover={{ boxShadow: "0 25px 50px rgba(236, 72, 153, 0.15)" }}
            >
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Your Name
                  </label>
                  <Input
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="border-2 border-gray-200 dark:border-gray-600 focus:border-pink-500 dark:focus:border-pink-400 bg-white dark:bg-gray-700 rounded-xl"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Your Email
                  </label>
                  <Input
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="border-2 border-gray-200 dark:border-gray-600 focus:border-pink-500 dark:focus:border-pink-400 bg-white dark:bg-gray-700 rounded-xl"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Your Message
                </label>
                <Textarea
                  placeholder="Tell me about your project..."
                  rows={8}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  className="border-2 border-gray-200 dark:border-gray-600 focus:border-pink-500 dark:focus:border-pink-400 bg-white dark:bg-gray-700 resize-none rounded-xl"
                />
              </div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-700 hover:to-rose-700 text-white shadow-lg shadow-pink-500/30 border-0 rounded-xl"
                >
                  <Send className="mr-2 h-5 w-5" />
                  Send Message
                </Button>
              </motion.div>
            </motion.form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
