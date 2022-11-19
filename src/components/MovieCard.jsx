const MovieCard = ({ imgUrl, alt }) => {
  return (
    <div className="w-32">
      <img
        className="rounded-md"
        src={imgUrl}
        alt={alt}
      />
    </div>
  );
};

export default MovieCard;
