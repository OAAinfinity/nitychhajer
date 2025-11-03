import { motion, AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';

export default function Lightbox({ image, onClose }) {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  return (
    <AnimatePresence>
      {image && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/60 backdrop-blur-md z-[100] flex items-center justify-center p-4 cursor-pointer"
        >
          <button
            onClick={onClose}
            className="absolute top-6 right-6 text-white text-4xl hover:text-coral hover:scale-110 transition-all duration-300 z-10"
            aria-label="Close lightbox"
          >
            &times;
          </button>

          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 50 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-7xl max-h-[90vh] cursor-default"
          >
            <div className="flex flex-col lg:flex-row bg-white rounded-2xl shadow-2xl overflow-hidden h-full max-h-[90vh]">
              <div className="lg:w-1/2 flex items-center justify-center bg-gradient-to-br from-peach/20 to-sand/20 p-8 overflow-hidden group">
                <img
                  src={image.src}
                  alt={image.title}
                  className="max-w-full max-h-full object-contain rounded-lg transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="lg:w-1/2 flex flex-col p-8 lg:p-12 overflow-y-auto">
                <div className="flex-1">
                  <h3 className="text-3xl lg:text-4xl font-normal text-gray-800 mb-6 bg-gradient-to-r from-terracotta to-coral bg-clip-text text-transparent">
                    {image.title}
                  </h3>
                  <p className="text-gray-600 text-base lg:text-lg leading-relaxed font-light">
                    {image.description}
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-200">
                  <button
                    onClick={onClose}
                    className="w-full lg:w-auto px-8 py-3 bg-gradient-to-r from-coral to-terracotta text-white rounded-full font-light tracking-wide hover:from-terracotta hover:to-rust transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
