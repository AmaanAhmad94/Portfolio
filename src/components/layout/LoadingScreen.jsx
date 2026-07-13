import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { profile } from '../../data/profile';

const LoadingScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 300);
          return 100;
        }
        return prev + 4;
      });
    }, 40);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-gradient-to-br from-navy via-[#2a4a73] to-sky"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="text-center"
      >
        <div className="text-5xl md:text-6xl font-bold text-white mb-2">
          {profile.name.split(' ')[0]}
        </div>
        <p className="text-sky/90 text-lg mb-8">{profile.profession}</p>
        <div className="w-64 h-1.5 bg-white/20 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-white rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="text-white/70 text-sm mt-4">{progress}%</p>
      </motion.div>
    </motion.div>
  );
};

export default LoadingScreen;
