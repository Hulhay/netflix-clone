import WatchingItem from '../WatchingItem';

const ContinueWatching = () => {
  const movies = [
    {
      id: 1,
      imgUrl: 'https://picsum.photos/200/300',
    },
    {
      id: 2,
      imgUrl: 'https://picsum.photos/200/300',
    },
    {
      id: 3,
      imgUrl: 'https://picsum.photos/200/300',
    },
    {
      id: 4,
      imgUrl: 'https://picsum.photos/200/300',
    },
    {
      id: 5,
      imgUrl: 'https://picsum.photos/200/300',
    },
    {
      id: 6,
      imgUrl: 'https://picsum.photos/200/300',
    },
    {
      id: 7,
      imgUrl: 'https://picsum.photos/200/300',
    },
    {
      id: 8,
      imgUrl: 'https://picsum.photos/200/300',
    },
    {
      id: 9,
      imgUrl: 'https://picsum.photos/200/300',
    },
    {
      id: 10,
      imgUrl: 'https://picsum.photos/200/300',
    },
  ];
  return (
    <div className="pt-7">
      <p className="px-2 pb-2 text-white text-lg font-semibold">
        Continue Watching
      </p>
      <ul className="flex overflow-x-auto scrollbar-hide">
        {movies.map((item) => (
          <li
            key={item.id}
            className="px-1"
          >
            <WatchingItem imgUrl={item.imgUrl} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContinueWatching;
