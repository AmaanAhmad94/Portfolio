import { FaSearch } from 'react-icons/fa';

const SearchInput = ({ value, onChange, placeholder = 'Search...' }) => (
  <div className="relative w-full max-w-md">
    <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
    <input
      type="search"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="w-full pl-11 pr-4 py-3 rounded-2xl glass border border-white/30 dark:border-white/10 outline-none focus:ring-2 focus:ring-sky/40 text-dark-text dark:text-white placeholder:text-gray-400"
      aria-label={placeholder}
    />
  </div>
);

export default SearchInput;
