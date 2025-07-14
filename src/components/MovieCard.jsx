import { IMG_CDN_URL } from "../utils/constants";
const MovieCard = ({ posterPath }) => {
  return (
    <div className="pr-4 w-48">
      <img alt="Movie Card" src={IMG_CDN_URL+ posterPath} className=""/>
    </div>
  );
};

export default MovieCard;
