import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaMoon, FaSun } from 'react-icons/fa';
import { navLinks } from '../../data/navigation';
import { profile } from '../../data/profile';
import { useScrollSpy } from '../../hooks/useScrollSpy';
import { scrollToSection } from '../../utils/scrollTo';

const Navbar = ({ isDark, toggleDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const sectionIds = navLinks.map((link) => link.id);
  const activeSection = useScrollSpy(sectionIds);

  const handleNavClick = (href) => {
    scrollToSection(href);
    setIsOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 pt-4">
      <nav className="container-custom glass rounded-2xl px-4 md:px-6 py-3 flex items-center justify-between">
        <button
          type="button"
          onClick={() => handleNavClick('#home')}
          className="text-xl font-bold gradient-text"
        >
          {profile.name.split(' ')[0]}.
        </button>

        <div className="hidden xl:flex items-center gap-1">
          {navLinks.map((link) => (
            <button
              key={link.id}
              type="button"
              onClick={() => handleNavClick(link.href)}
              className={`px-3 py-2 rounded-xl text-sm font-medium transition-colors ${
                activeSection === link.id
                  ? 'text-sky bg-sky/10'
                  : 'text-navy dark:text-gray-200 hover:text-sky'
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleDarkMode}
            className="p-2.5 rounded-xl glass hover:bg-white/80 dark:hover:bg-navy/70 transition-colors"
            aria-label="Toggle dark mode"
          >
            {isDark ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-navy" />}
          </button>

          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="xl:hidden p-2.5 rounded-xl glass"
            aria-label="Toggle menu"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="xl:hidden container-custom mt-2 glass rounded-2xl p-4"
          >
            {navLinks.map((link) => (
              <button
                key={link.id}
                type="button"
                onClick={() => handleNavClick(link.href)}
                className={`block w-full text-left px-4 py-3 rounded-xl font-medium ${
                  activeSection === link.id
                    ? 'text-sky bg-sky/10'
                    : 'text-navy dark:text-gray-200'
                }`}
              >
                {link.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
