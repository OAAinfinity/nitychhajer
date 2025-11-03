import { motion, AnimatePresence } from 'framer-motion';

export default function PageTransition({ active }) {
  return (
    <AnimatePresence>
      {active && (
        <motion.div
          key="page-transition"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[100] pointer-events-none bg-white"
        />
      )}
    </AnimatePresence>
  );
}
