import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { IoMdClose } from 'react-icons/io';

const SearchBar = () => {
  const [search, setSearch] = useState('');
  return (
    <div className="p-4">
      <div className="flex items-center justify-between h-12 w-full bg-dark-charcoal p-4 rounded-md">
        <div className="flex justify-center items-center ">
          <FiSearch className="text-white text-xl opacity-70 h-5 w-5 mr-3" />
          <input
            type="text"
            className="w-72 outline-none bg-dark-charcoal text-white"
            placeholder="Search for something"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onFocus={(e) => (e.target.placeholder = '')}
            onBlur={(e) => (e.target.placeholder = 'Search for something')}
          />
        </div>
        <button
          className={search ? '' : 'hidden'}
          onClick={() => setSearch('')}
        >
          <IoMdClose className="flex justify-center items-center text-white text-xl opacity-70 h-5 w-5" />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
