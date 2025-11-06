import { motion, useReducedMotion } from 'framer-motion';
import { useState } from 'react';
import Lightbox from './Lightbox';
import { images as buddhaImages } from '../assets/gallery_img/BUDDHA/images';
import { images as ganeshaImages } from '../assets/gallery_img/GANESHA/images';
import { images as mandalaImages } from '../assets/gallery_img/MANDALA/images';
import { images as natureImages } from '../assets/gallery_img/NATURE/images';
import { images as selfLoveImages } from '../assets/gallery_img/SELF_LOVE/images';

const categories = [
  {
    id: 'BUDDHA',
    label: 'BUDDHA',
    images: buddhaImages
  },
  {
    id: 'GANESHA',
    label: 'GANESHA',
    images: ganeshaImages
  },
  {
    id: 'MANDALA',
    label: 'MANDALA',
    images: mandalaImages
  },
  {
    id: 'NATURE',
    label: 'NATURE',
    images: natureImages
  },
  {
    id: 'SELF_LOVE',
    label: 'SELF LOVE',
    images: selfLoveImages
  }
];

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('BUDDHA');
  const [selectedImage, setSelectedImage] = useState(null);
  const reduceMotion = useReducedMotion();

  const currentCategory = categories.find(cat => cat.id === selectedCategory);
  const displayImages = currentCategory?.images || [];

  return (
    <>
      <section id="gallery" className="py-20 px-6 bg-gradient-to-b from-cream to-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-6xl font-light bg-gradient-to-r from-terracotta via-coral to-rust bg-clip-text text-transparent mb-4">
              Gallery – Explore the world of Nitu Chhajer's Art
            </h2>
            <p className="text-gray-700 font-light max-w-2xl mx-auto text-lg">
              {currentCategory?.description}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-full font-light tracking-wide transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-coral to-terracotta text-white shadow-lg'
                    : 'bg-white text-gray-700 border-2 border-gray-300 hover:border-coral hover:text-coral'
                }`}
              >
                {category.label}
              </motion.button>
            ))}
          </motion.div>

          <motion.div
            key={selectedCategory}
            initial={reduceMotion ? {} : { opacity: 0, y: 20 }}
            animate={reduceMotion ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {displayImages.map((artwork, index) => (
              <motion.div
                key={artwork.id}
                initial={reduceMotion ? {} : { opacity: 0, scale: 0.9 }}
                animate={reduceMotion ? {} : { opacity: 1, scale: 1 }}
                transition={{ duration: reduceMotion ? 0 : 0.5, delay: reduceMotion ? 0 : index * 0.1 }}
                whileHover={reduceMotion ? {} : { scale: 1.02, y: -5 }}
                onClick={() => setSelectedImage(artwork)}
                className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-coral/30"
              >
                <div className="w-full bg-gradient-to-br from-peach to-sand flex items-center justify-center">
                  <img
                    src={artwork.src}
                    alt={artwork.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-auto object-contain max-h-[60vh] transition-transform duration-500 group-hover:scale-105"
                    style={artwork.rotation ? { transform: `rotate(${artwork.rotation}deg)` } : {}}
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-terracotta/90 via-coral/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6 w-full">
                    <h3 className="text-white text-xl font-light mb-2">
                      {artwork.title}
                    </h3>
                    <p className="text-gray-200 text-sm font-light">
                      {artwork.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <Lightbox image={selectedImage} onClose={() => setSelectedImage(null)} />
    </>
  );
}
