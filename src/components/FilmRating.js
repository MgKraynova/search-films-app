import imdbIcon from "../images/imdb-icon.svg";

function FilmRating(props) {

    return (
        <div className="info__rating">
            <img className="info__icon" src={imdbIcon} alt="imdb icon"/>
            <p className="info__rating-number">{props}</p>
        </div>
    );

}

export default FilmRating;