import SearchBar from '../components/SearchBar';
import Navbar from '../components/Navbar';
import { useState } from 'react';
import MoviewCardLandscape from '../components/MoiveCardLandscape';

const Search = () => {
  const [isSearch, setIsSearch] = useState(false);
  return (
    <div className="bg-black h-full pb-14">
      <SearchBar setIsSearch={setIsSearch} />
      <MoviewCardLandscape />
      <MoviewCardLandscape />
      <MoviewCardLandscape />
      <MoviewCardLandscape />
      <MoviewCardLandscape />
      <MoviewCardLandscape />
      <MoviewCardLandscape />
      <MoviewCardLandscape />
      <MoviewCardLandscape />
      <MoviewCardLandscape />
      {!isSearch && <Navbar page="search" />}
    </div>
  );
};

export default Search;
