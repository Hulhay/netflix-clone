import { Link } from 'react-router-dom';

const MovieCard = ({ imgUrl, alt }) => {
  return (
    <div className="w-32">
      <Link to={'/now-watching'}>
        <img
          className="rounded-md"
          src={imgUrl}
          alt={alt}
        />
      </Link>
    </div>
  );
};

export default MovieCard;
