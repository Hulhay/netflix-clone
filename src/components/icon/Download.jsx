const Download = ({ isClicked }) => {
  return (
    <div>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 44 54"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M22 0V43M22 43L8.5 32.5M22 43L35 32.5"
          stroke="white"
          strokeWidth="5"
          opacity={isClicked ? '1' : '0.5'}
        />
        <rect
          y="49"
          width="44"
          height="5"
          fill="white"
          opacity={isClicked ? '1' : '0.5'}
        />
      </svg>
    </div>
  );
};

export default Download;
