const getYear = (release_date) => {
  const year = new Date(release_date);
  return year.getFullYear();
};

const getRating = (vote_average) => {
  let rating = Math.round(vote_average * 10) / 10;
  return rating.toFixed(1);
};

const getDuration = (runtime) => {
  const hour = Math.floor(runtime / 60);
  const minute = runtime % 60;
  const duration = minute !== 0 ? `${hour}h${minute}m` : `${hour}h`;
  return duration;
};

export { getYear, getRating, getDuration };
