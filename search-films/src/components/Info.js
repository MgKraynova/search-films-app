import imdbIcon from "../images/imdb-icon.svg";
import {Link} from "react-router-dom";

function Info({data}) {
    return (
        <div className="info">
            <Link to="/card" className="link info__return">Return</Link>
            <div className="info__content" >
                <img className="info__image" src={data.Poster} alt={data.Title}/>
                <div className="info__wrapper" >
                    <h2 className="info__title">{data.Title}</h2>
                    <div className="info__stickers">
                        <div className="info__container" >
                            <p className="info__text">{data.Year}</p>
                        </div>
                        <div className="info__container" >
                            <p className="info__text">{data.Genre}</p>
                        </div>
                        <div className="info__container" >
                            <p className="info__text">{data.Runtime}</p>
                        </div>
                    </div>
                    {(data.Ratings[0].Source === 'Internet Movie Database') &&
                    <div className="info__rating">
                        <img className="info__icon" src={imdbIcon} alt="imdb icon"/>
                        <p className="info__rating-number">{data.Ratings[0].Value}</p>
                    </div>
                    }
                    <p className="info__description" >{data.Plot}</p>
                    <p className="info__actors" ><span className="accent" >Actors: </span>
                        {data.Actors}</p>
                </div>
            </div>
        </div>
    )
}

export default Info;