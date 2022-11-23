import SearchBar from '../components/SearchBar';
import Navbar from '../components/Navbar';
import { useState } from 'react';
import MoviewCardLandscape from '../components/MoiveCardLandscape';

const Search = () => {
  const [isSearch, setIsSearch] = useState(false);
  const [searchResult, setSearchResult] = useState([]);
  return (
    <div
      className={`bg-black pb-14 ${
        searchResult.length > 6 ? 'h-full' : 'h-screen'
      }`}
    >
      <SearchBar
        setIsSearch={setIsSearch}
        setSearchResult={setSearchResult}
      />
      {searchResult &&
        searchResult.map((movieData) => (
          <MoviewCardLandscape movieData={movieData} />
        ))}
      {/*<MoviewCardLandscape />
      <MoviewCardLandscape />
      <MoviewCardLandscape />
      <MoviewCardLandscape />
      <MoviewCardLandscape />
      <MoviewCardLandscape />
      <MoviewCardLandscape />
      <MoviewCardLandscape />
      <MoviewCardLandscape /> */}
      {!isSearch && <Navbar page="search" />}
    </div>
  );
};

export default Search;
