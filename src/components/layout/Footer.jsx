import { FaArrowUp } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { footerLinks } from '../../data/navigation';
import { socialPlatforms } from '../../data/socials';
import { profile } from '../../data/profile';
import { getIcon } from '../../utils/iconMap';
import { scrollToSection, scrollToTop } from '../../utils/scrollTo';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-navy text-white pt-16 pb-8">
      <div className="container-custom section-padding !py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-3">{profile.name}</h3>
            <p className="text-gray-300">{profile.profession}</p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sky">Quick Links</h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.id}>
                  <button
                    type="button"
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-300 hover:text-sky transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sky">Connect</h4>
            <div className="flex flex-wrap gap-3">
              {socialPlatforms.map((social) => (
                <a
                  key={social.id}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-white/10 hover:bg-sky/20 transition-colors"
                  aria-label={social.name}
                >
                  {getIcon(social.icon, 'text-xl')}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-sm">
            © {year} {profile.name}. All rights reserved.
          </p>

          <motion.button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-sky/20 hover:bg-sky/30 transition-colors"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaArrowUp />
            Back to Top
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
