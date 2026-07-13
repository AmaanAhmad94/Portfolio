const FilterTabs = ({ options, active, onChange }) => (
  <div className="flex flex-wrap gap-2 justify-center">
    {options.map((option) => (
      <button
        key={option}
        type="button"
        onClick={() => onChange(option)}
        className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
          active === option
            ? 'bg-gradient-to-r from-sky to-navy text-white shadow-md'
            : 'glass text-navy dark:text-white hover:bg-white/80 dark:hover:bg-navy/70'
        }`}
      >
        {option}
      </button>
    ))}
  </div>
);

export default FilterTabs;
