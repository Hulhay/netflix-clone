import SearchBar from '../components/SearchBar';
import Navbar from '../components/Navbar';
import { useState } from 'react';

const Search = () => {
  const [isSearch, setIsSearch] = useState(false);
  return (
    <div className="bg-black h-screen">
      <SearchBar setIsSearch={setIsSearch} />
      {!isSearch && <Navbar page="search" />}
    </div>
  );
};

export default Search;
