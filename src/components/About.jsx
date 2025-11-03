import { motion } from 'framer-motion';
import aboutImage from '../assets/about_me/WhatsApp Image 2025-10-16 at 10.13.57_e791339e.jpg';

export default function About() {
  return (
    <section id="about" className="py-20 px-6 bg-gradient-to-br from-peach via-cream to-sand">
  <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-light bg-gradient-to-r from-terracotta via-coral to-rust bg-clip-text text-transparent mb-4">
            About the Artist
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-coral to-terracotta mx-auto mb-8 rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl ring-4 ring-coral/20 hover:ring-coral/40 transition-all duration-300">
                <img
                  src={aboutImage}
                  alt="Nitu Chhajer - Artist"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-4"
          >
            <p className="text-base text-gray-700 font-light leading-relaxed">
              Nitu Chhajer is a self-taught artist. Her artistic journey began a few years ago when she started working on herself spiritually. Eventually, this led her to develop an interest in painting. Nitu's paintings reflect her thoughts, imagination, and inner world.
            </p>

            <p className="text-base text-gray-700 font-light leading-relaxed">
              Nitu Chhajer's painting style is often characterized by vibrant colors and intricate details. Her work reflects a deep sensitivity to color and form, creating visual narratives that engage viewers both emotionally and intellectually.
            </p>

            <p className="text-base text-gray-700 font-light leading-relaxed">
              Her use of bold, vibrant colors creates a sense of depth and energy in her paintings. She often combines rich hues with delicate contrasts to draw the eye and evoke feeling.
            </p>

            <p className="text-base text-gray-700 font-light leading-relaxed">
              Nitu's paintings frequently feature detailed patterns and textures, contributing to a rich and immersive visual experience. This attention to detail creates layers of meaning and complexity in her artwork.
            </p>

            <p className="text-base text-gray-700 font-light leading-relaxed">
              Deep down, she believes her paintings are imbued with serenity, love, and strength. She also feels that the secret meaning of her artwork is to share the message of inner transformation through mindfulness across the world.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
