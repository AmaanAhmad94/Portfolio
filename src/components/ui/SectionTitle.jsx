const SectionTitle = ({ eyebrow, title, subtitle, align = 'center' }) => {
  const alignment =
    align === 'left' ? 'text-left items-start' : 'text-center items-center';

  return (
    <div className={`flex flex-col gap-3 mb-12 md:mb-16 ${alignment}`}>
      {eyebrow && (
        <span className="text-sm font-semibold uppercase tracking-widest text-sky">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy dark:text-white">
        {title}
      </h2>
      {subtitle && (
        <p className="max-w-2xl text-gray-600 dark:text-gray-300 text-base md:text-lg">
          {subtitle}
        </p>
      )}
      <div className="w-16 h-1 rounded-full bg-gradient-to-r from-sky to-navy" />
    </div>
  );
};

export default SectionTitle;
