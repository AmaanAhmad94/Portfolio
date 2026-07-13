import { motion } from 'framer-motion';

const Card = ({ children, className = '', hover = true, ...props }) => (
  <motion.div
    className={`glass rounded-3xl p-6 ${className}`}
    whileHover={hover ? { y: -6, boxShadow: '0 20px 40px rgba(30, 58, 95, 0.12)' } : undefined}
    transition={{ duration: 0.3 }}
    {...props}
  >
    {children}
  </motion.div>
);

export default Card;
