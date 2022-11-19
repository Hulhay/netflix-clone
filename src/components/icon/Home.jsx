const Home = ({ isClicked }) => {
  return (
    <div>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 57 49"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M29.4047 0.899316L28.1984 2.83718e-05L27 0.909915L-6.91414e-06 21.4099L2.41883 24.5957L7.79042 20.5173L9.71481 46.6497L9.85128 48.5028H11.7094H44.2094H45.9437L46.1893 46.7859L49.8575 21.135L54.5141 24.6063L56.9047 21.3993L29.4047 0.899316ZM46.2061 18.4131L28.2204 5.00559L11.5889 17.6333L13.5675 44.5028H42.4751L46.2061 18.4131Z"
          fill="white"
          opacity={isClicked ? '1' : '0.5'}
        />
      </svg>
    </div>
  );
};

export default Home;
