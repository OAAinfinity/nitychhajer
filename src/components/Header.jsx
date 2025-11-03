import { motion } from 'framer-motion';

export default function Header({ onNavigate }) {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-cream/90 via-peach/85 to-sand/90 backdrop-blur-md shadow-md border-b border-coral/20"
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl md:text-3xl font-light bg-gradient-to-r from-terracotta to-rust bg-clip-text text-transparent">
            Nitu Chhajer's Art
          </h1>
          <nav className="hidden md:flex space-x-8 text-sm font-light text-gray-700">
            <a
              href="#gallery"
              onClick={(e) => { e.preventDefault(); onNavigate?.('gallery'); }}
              className="hover:text-coral transition-colors duration-300 hover:scale-105 inline-block"
            >
              Gallery
            </a>
            <a
              href="#about"
              onClick={(e) => { e.preventDefault(); onNavigate?.('about'); }}
              className="hover:text-coral transition-colors duration-300 hover:scale-105 inline-block"
            >
              About
            </a>
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); onNavigate?.('contact'); }}
              className="hover:text-coral transition-colors duration-300 hover:scale-105 inline-block"
            >
              Contact
            </a>
          </nav>
        </div>
      </div>
    </motion.header>
  );
}
