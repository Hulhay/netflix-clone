const More = ({ isClicked }) => {
  return (
    <div>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 50 38"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          width="50"
          height="5"
          fill="white"
          opacity={isClicked ? '1' : '0.5'}
        />
        <rect
          y="17"
          width="50"
          height="5"
          fill="white"
          opacity={isClicked ? '1' : '0.5'}
        />
        <rect
          y="33"
          width="50"
          height="5"
          fill="white"
          opacity={isClicked ? '1' : '0.5'}
        />
      </svg>
    </div>
  );
};

export default More;
