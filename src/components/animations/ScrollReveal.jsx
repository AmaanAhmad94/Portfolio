import { motion } from 'framer-motion';
import { fadeInUp } from '../../animations/variants';

const ScrollReveal = ({
  children,
  className = '',
  delay = 0,
  as: Component = motion.div,
}) => (
  <Component
    className={className}
    variants={fadeInUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
    custom={delay}
  >
    {children}
  </Component>
);

export default ScrollReveal;
