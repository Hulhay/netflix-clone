import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { IoMdClose } from 'react-icons/io';

const SearchBar = ({ setIsSearch }) => {
  const [search, setSearch] = useState('');
  return (
    <div className="p-4">
      <div className="flex items-center justify-between h-12 w-full bg-dark-charcoal p-4 rounded-md">
        <div className="flex justify-start items-center w-full">
          <FiSearch className="text-white text-xl opacity-70 h-5 w-5 mr-3" />
          <input
            type="text"
            className="outline-none bg-dark-charcoal text-white w-full pr-4"
            placeholder="Search for something"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onFocus={(e) => {
              e.target.placeholder = '';
              setIsSearch(true);
            }}
            onBlur={(e) => {
              e.target.placeholder = 'Search for something';
              setIsSearch(false);
            }}
          />
        </div>
        {search && (
          <button onClick={() => setSearch('')}>
            <IoMdClose className="flex justify-center items-center text-white text-xl opacity-70 h-5 w-5" />
          </button>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
