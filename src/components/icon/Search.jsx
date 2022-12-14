const Search = ({ isClicked }) => {
  return (
    <div>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 49 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M41 22C41 32.4934 32.4934 41 22 41C11.5066 41 3 32.4934 3 22C3 11.5066 11.5066 3 22 3C32.4934 3 41 11.5066 41 22ZM35.5246 39.3531C31.7937 42.265 27.0995 44 22 44C9.84974 44 0 34.1503 0 22C0 9.84974 9.84974 0 22 0C34.1503 0 44 9.84974 44 22C44 27.6099 41.9003 32.7294 38.4438 36.6154L48.4142 46.5858L45.5858 49.4142L35.5246 39.3531Z"
          fill="white"
          opacity={isClicked ? '1' : '0.5'}
        />
      </svg>
    </div>
  );
};

export default Search;
