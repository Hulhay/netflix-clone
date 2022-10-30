import { useState } from 'react';

const Navbar = () => {
  const [navIcon, setNavIcon] = useState('home');

  return (
    <div className="bg-chinese-black w-full h-14 absolute bottom-0">
      <div className="flex justify-evenly items-center">
        <button
          className="h-14 w-6"
          onClick={() => {
            setNavIcon('home');
          }}
        >
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 57 49"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M29.4047 0.899316L28.1984 2.83718e-05L27 0.909915L-6.91414e-06 21.4099L2.41883 24.5957L7.79042 20.5173L9.71481 46.6497L9.85128 48.5028H11.7094H44.2094H45.9437L46.1893 46.7859L49.8575 21.135L54.5141 24.6063L56.9047 21.3993L29.4047 0.899316ZM46.2061 18.4131L28.2204 5.00559L11.5889 17.6333L13.5675 44.5028H42.4751L46.2061 18.4131Z"
              fill="white"
              opacity={navIcon == 'home' ? '1' : '0.5'}
            />
          </svg>
        </button>
        <button
          className="h-10 w-6"
          onClick={() => {
            setNavIcon('search');
          }}
        >
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 49 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M41 22C41 32.4934 32.4934 41 22 41C11.5066 41 3 32.4934 3 22C3 11.5066 11.5066 3 22 3C32.4934 3 41 11.5066 41 22ZM35.5246 39.3531C31.7937 42.265 27.0995 44 22 44C9.84974 44 0 34.1503 0 22C0 9.84974 9.84974 0 22 0C34.1503 0 44 9.84974 44 22C44 27.6099 41.9003 32.7294 38.4438 36.6154L48.4142 46.5858L45.5858 49.4142L35.5246 39.3531Z"
              fill="white"
              opacity={navIcon == 'search' ? '1' : '0.5'}
            />
          </svg>
        </button>
        <button
          className="h-10 w-6"
          onClick={() => {
            setNavIcon('comingSoon');
          }}
        >
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
              stroke-width="5"
              opacity={navIcon == 'comingSoon' ? '1' : '0.5'}
            />
            <path
              d="M39 14L37.3003 5.84155C36.8559 3.70811 34.7854 2.32304 32.6438 2.72653L6.02151 7.74232C3.81548 8.15795 2.38335 10.3072 2.84916 12.5032L8.32758 38.33C8.71961 40.1782 10.3513 41.5 12.2405 41.5H13.5"
              stroke="white"
              stroke-width="4"
              opacity={navIcon == 'comingSoon' ? '1' : '0.5'}
            />
            <path
              d="M29 42.7839V28.6333C29 28.1448 29.5412 27.8505 29.9513 28.1161L41.6159 35.6703C42.2461 36.0784 42.2185 37.0095 41.5653 37.3797L30.493 43.654C29.8264 44.0317 29 43.5502 29 42.7839Z"
              fill="white"
              opacity={navIcon == 'comingSoon' ? '1' : '0.5'}
            />
          </svg>
        </button>
        <button
          className="h-10 w-6"
          onClick={() => {
            setNavIcon('download');
          }}
        >
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
              stroke-width="5"
              opacity={navIcon == 'download' ? '1' : '0.5'}
            />
            <rect
              y="49"
              width="44"
              height="5"
              fill="white"
              opacity={navIcon == 'download' ? '1' : '0.5'}
            />
          </svg>
        </button>
        <button
          className="h-10 w-6"
          onClick={() => {
            setNavIcon('more');
          }}
        >
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
              opacity={navIcon == 'more' ? '1' : '0.5'}
            />
            <rect
              y="17"
              width="50"
              height="5"
              fill="white"
              opacity={navIcon == 'more' ? '1' : '0.5'}
            />
            <rect
              y="33"
              width="50"
              height="5"
              fill="white"
              opacity={navIcon == 'more' ? '1' : '0.5'}
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
