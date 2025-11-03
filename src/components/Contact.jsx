import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 bg-gradient-to-br from-cream to-peach">
  <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-light bg-gradient-to-r from-terracotta via-coral to-rust bg-clip-text text-transparent mb-4">
            Get in Touch
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-coral to-terracotta mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-600 font-light max-w-2xl mx-auto">
            Connect with me through email or Instagram
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto space-y-8"
        >
          <div className="flex items-center justify-center space-x-4 p-6 bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-coral/20 to-terracotta/10 flex items-center justify-center flex-shrink-0">
              <span className="text-3xl">📧</span>
            </div>
            <div className="flex-1">
              <h4 className="font-normal text-gray-800 mb-1 text-lg">Email</h4>
              <a
                href="mailto:neetuchhajer@gmail.com"
                className="text-coral hover:text-terracotta transition-colors font-light text-lg"
              >
                neetuchhajer@gmail.com
              </a>
            </div>
          </div>

          <a
            href="https://www.instagram.com/nituchhajersart?igsh=MW9jbXdocmdmZWtybw=="
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center space-x-4 p-6 bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group"
          >
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-coral/20 to-terracotta/10 flex items-center justify-center flex-shrink-0">
              <span className="text-3xl">📷</span>
            </div>
            <div className="flex-1">
              <h4 className="font-normal text-gray-800 mb-1 text-lg">Instagram</h4>
              <span className="text-coral group-hover:text-terracotta transition-colors font-light text-lg">
                @nituchhajersart
              </span>
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
