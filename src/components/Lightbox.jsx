import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

export default function Lightbox({ image, onClose }) {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const fullscreenContainerRef = useRef(null);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        if (isFullscreen) {
          handleExitFullscreen();
        } else {
          onClose();
        }
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [onClose, isFullscreen]);

  const handleFullscreen = async () => {
    try {
      if (!isFullscreen) {
        if (fullscreenContainerRef.current?.requestFullscreen) {
          await fullscreenContainerRef.current.requestFullscreen();
          setIsFullscreen(true);
        } else if (fullscreenContainerRef.current?.webkitRequestFullscreen) {
          await fullscreenContainerRef.current.webkitRequestFullscreen();
          setIsFullscreen(true);
        }
      } else {
        handleExitFullscreen();
      }
    } catch (err) {
      console.error(`Error attempting to enable fullscreen: ${err.message}`);
    }
  };

  const handleExitFullscreen = () => {
    if (document.fullscreenElement || document.webkitFullscreenElement) {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      }
    }
    setIsFullscreen(false);
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!(document.fullscreenElement || document.webkitFullscreenElement));
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
      document.removeEventListener('webkitfullscreenchange', handleFullscreenChange);
    };
  }, []);

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
          

          <motion.div
            ref={fullscreenContainerRef}
            initial={{ scale: 0.8, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 50 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
            className={`relative w-full max-w-7xl max-h-[90vh] cursor-default ${
              isFullscreen ? 'fixed inset-0 max-w-full max-h-screen rounded-none' : ''
            }`}
          >
            {/* Toolbar inside modal to avoid overlay click bubbling and to show in fullscreen */}
            <div className="absolute top-6 right-6 flex gap-3 z-10" onClick={(e) => e.stopPropagation()}>
              <button
                onClick={(e) => { e.stopPropagation(); handleFullscreen(); }}
                className="text-coral hover:text-terracotta hover:scale-110 transition-all duration-300 p-2 hover:bg-coral/10 rounded-full text-2xl"
                aria-label={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
                title={isFullscreen ? "Exit fullscreen (Esc)" : "Enter fullscreen"}
              >
                {isFullscreen ? (
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 4a1 1 0 011-1h4a1 1 0 010 2H6.414l2.293 2.293a1 1 0 11-1.414 1.414L5 6.414V8a1 1 0 01-2 0V4zm14 0a1 1 0 00-1-1h-4a1 1 0 000 2h2.586l-2.293 2.293a1 1 0 101.414 1.414L17 6.414V8a1 1 0 002 0V4zM3 16a1 1 0 001 1h4a1 1 0 010-2H6.414l2.293-2.293a1 1 0 10-1.414-1.414L5 13.586V12a1 1 0 10-2 0v4zm14 0a1 1 0 01-1 1h-4a1 1 0 010-2h2.586l-2.293-2.293a1 1 0 101.414-1.414L17 13.586V12a1 1 0 102 0v4z" clipRule="evenodd" />
                  </svg>
                ) : (
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M4 4a2 2 0 012-2h4a1 1 0 010 2H6v4a1 1 0 01-2 0V4zm12 0a2 2 0 00-2-2h-4a1 1 0 000 2h4v4a1 1 0 002 0V4zM4 16a2 2 0 002 2h4a1 1 0 000-2H6v-4a1 1 0 00-2 0v4zm12 0a2 2 0 01-2 2h-4a1 1 0 010-2h4v-4a1 1 0 012 0v4z" />
                  </svg>
                )}
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); onClose(); }}
                className="text-coral hover:text-terracotta hover:scale-110 transition-all duration-300 text-4xl"
                aria-label="Close lightbox"
              >
                &times;
              </button>
            </div>
            <div className={`flex flex-col lg:flex-row bg-white rounded-2xl shadow-2xl overflow-hidden h-full max-h-[90vh] ${
              isFullscreen ? 'rounded-none max-h-screen' : ''
            }`}>
              <div className={`${isFullscreen ? 'w-full' : 'lg:w-1/2'} flex items-center justify-center bg-gradient-to-br from-peach/20 to-sand/20 p-8 overflow-hidden group ${
                isFullscreen ? 'h-full' : ''
              }`}>
                <img
                  src={image.src}
                  alt={image.title}
                  className="max-w-full max-h-full object-contain rounded-lg transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {!isFullscreen && (
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
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
