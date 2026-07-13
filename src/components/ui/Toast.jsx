import { motion, AnimatePresence } from 'framer-motion';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

const Toast = ({ message, type = 'success', onClose }) => (
  <AnimatePresence>
    {message && (
      <motion.div
        initial={{ opacity: 0, y: 50, x: '-50%' }}
        animate={{ opacity: 1, y: 0, x: '-50%' }}
        exit={{ opacity: 0, y: 50, x: '-50%' }}
        className="fixed bottom-8 left-1/2 z-[100] flex items-center gap-3 px-6 py-4 rounded-2xl glass shadow-2xl"
        role="alert"
      >
        {type === 'success' ? (
          <FaCheckCircle className="text-green-500 text-xl" />
        ) : (
          <FaTimesCircle className="text-red-500 text-xl" />
        )}
        <span className="text-navy dark:text-white font-medium">{message}</span>
        <button
          type="button"
          onClick={onClose}
          className="ml-2 text-gray-500 hover:text-navy dark:hover:text-white"
          aria-label="Close notification"
        >
          ×
        </button>
      </motion.div>
    )}
  </AnimatePresence>
);

export default Toast;
