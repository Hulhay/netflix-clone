const MovieCard = ({ imgUrl, alt }) => {
    return (
        <div className="w-28 h-44">
            <img src={imgUrl} alt={alt} />
        </div>
    )
}

export default MovieCard