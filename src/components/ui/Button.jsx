import { motion } from 'framer-motion';

const Button = ({
  children,
  variant = 'primary',
  href,
  download,
  onClick,
  className = '',
  type = 'button',
  ...props
}) => {
  const baseStyles =
    'inline-flex items-center justify-center gap-2 px-6 py-3 rounded-2xl font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-sky/50';

  const variants = {
    primary:
      'bg-gradient-to-r from-sky to-navy text-white shadow-lg shadow-sky/25 hover:shadow-xl hover:shadow-sky/30',
    secondary:
      'glass text-navy dark:text-white hover:bg-white/90 dark:hover:bg-navy/80',
    outline:
      'border-2 border-navy/20 dark:border-white/20 text-navy dark:text-white hover:border-sky hover:text-sky',
  };

  const classes = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <motion.a
        href={href}
        download={download}
        target={download ? undefined : '_blank'}
        rel={download ? undefined : 'noopener noreferrer'}
        className={classes}
        whileHover={{ scale: 1.03, y: -2 }}
        whileTap={{ scale: 0.98 }}
        onClick={onClick}
        {...props}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      className={classes}
      whileHover={{ scale: 1.03, y: -2 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;
