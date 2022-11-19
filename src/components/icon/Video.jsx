const Video = ({ isClicked }) => {
  return (
    <div>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 55 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="17.5"
          y="18"
          width="35"
          height="35"
          rx="3.5"
          stroke="white"
          strokeWidth="5"
          opacity={isClicked ? '1' : '0.5'}
        />
        <path
          d="M39 14L37.3003 5.84155C36.8559 3.70811 34.7854 2.32304 32.6438 2.72653L6.02151 7.74232C3.81548 8.15795 2.38335 10.3072 2.84916 12.5032L8.32758 38.33C8.71961 40.1782 10.3513 41.5 12.2405 41.5H13.5"
          stroke="white"
          strokeWidth="4"
          opacity={isClicked ? '1' : '0.5'}
        />
        <path
          d="M29 42.7839V28.6333C29 28.1448 29.5412 27.8505 29.9513 28.1161L41.6159 35.6703C42.2461 36.0784 42.2185 37.0095 41.5653 37.3797L30.493 43.654C29.8264 44.0317 29 43.5502 29 42.7839Z"
          fill="white"
          opacity={isClicked ? '1' : '0.5'}
        />
      </svg>
    </div>
  );
};

export default Video;
