import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaChevronDown, FaDownload } from 'react-icons/fa';
import { profile } from '../../data/profile';
import { socialPlatforms } from '../../data/socials';
import Button from '../ui/Button';
import { getIcon } from '../../utils/iconMap';
import { floatingAnimation } from '../../animations/variants';
import { scrollToSection } from '../../utils/scrollTo';

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = profile.typingRoles[roleIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentRole.slice(0, displayText.length + 1));
        if (displayText.length === currentRole.length) {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        setDisplayText(currentRole.slice(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % profile.typingRoles.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center section-padding pt-32 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-light-gray via-white to-sky/10 dark:from-[#0f172a] dark:via-[#1e293b] dark:to-navy/30 -z-10" />
      <div className="absolute top-20 right-0 w-96 h-96 bg-sky/20 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-navy/10 rounded-full blur-3xl -z-10" />

      <div className="container-custom grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-sky font-semibold mb-3">Hello, I&apos;m</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-navy dark:text-white mb-4">
            {profile.name}
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-2">
            {profile.title}
          </p>
          <p className="text-lg text-sky font-medium mb-6 h-8">
            {displayText}
            <span className="animate-pulse">|</span>
          </p>
          <p className="text-gray-600 dark:text-gray-300 max-w-xl mb-8 leading-relaxed">
            {profile.shortBio}
          </p>

          <div className="flex flex-wrap gap-4 mb-8">
            <Button href={profile.resume} download variant="primary">
              <FaDownload /> Download Resume
            </Button>
            <Button onClick={() => scrollToSection('#contact')} variant="secondary">
              Contact Me
            </Button>
            <Button onClick={() => scrollToSection('#projects')} variant="outline">
              View Projects
            </Button>
          </div>

          <div className="flex flex-wrap gap-3">
            {socialPlatforms.map((social) => (
              <a
                key={social.id}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 rounded-xl glass text-navy dark:text-white transition-all hover:-translate-y-1 ${social.color}`}
                aria-label={social.name}
              >
                {getIcon(social.icon, 'text-xl')}
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="flex justify-center"
          variants={floatingAnimation}
          animate="animate"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-sky to-navy rounded-full blur-2xl opacity-30 scale-110" />
            <img
              src={profile.profileImage}
              alt={profile.name}
              className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full object-cover border-4 border-white dark:border-navy shadow-2xl"
              loading="eager"
            />
          </div>
        </motion.div>
      </div>

      <motion.button
        type="button"
        onClick={() => scrollToSection('#about')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-navy dark:text-white"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        aria-label="Scroll to about section"
      >
        <FaChevronDown className="text-2xl" />
      </motion.button>
    </section>
  );
};

export default Hero;
