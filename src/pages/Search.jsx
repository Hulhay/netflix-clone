import SearchBar from '../components/SearchBar';
import Navbar from '../components/Navbar';

const Search = () => {
  return (
    <div className="bg-black h-screen">
      <SearchBar />
      <Navbar page="search" />
    </div>
  );
};

export default Search;
