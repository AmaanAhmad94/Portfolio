import { useState } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { useDarkMode } from './hooks/useDarkMode';
import Layout from './components/layout/Layout';
import LoadingScreen from './components/layout/LoadingScreen';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import { pageTransition } from './animations/variants';

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div key={location.pathname} {...pageTransition}>
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
};

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const { isDark, toggleDarkMode } = useDarkMode();

  return (
    <>
      <AnimatePresence>
        {isLoading && (
          <LoadingScreen onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      {!isLoading && (
        <BrowserRouter>
          <Layout isDark={isDark} toggleDarkMode={toggleDarkMode}>
            <AnimatedRoutes />
          </Layout>
        </BrowserRouter>
      )}
    </>
  );
}

export default App;
