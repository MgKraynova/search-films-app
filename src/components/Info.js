import imdbIcon from "../images/imdb-icon.svg";
import {Link} from "react-router-dom";
import FilmRating from "./FilmRating";

function Info(props) {

    // function showRatings() {
    //     props.data.Ratings.forEach((rating) => {
    //         if (rating.Source === 'Internet Movie Database') {
    //             return (<div className="info__rating">
    //                 <img className="info__icon" src={imdbIcon} alt="imdb icon"/>
    //                 <p className="info__rating-number">{rating.Value}</p>
    //             </div>);
    //         }
    //     })
    // }

    return (
        <div className="info">
            <Link to="/cards" className="link info__return">Return</Link>
            <div className="info__content" >
                <img className="info__image" src={props.data.Poster} alt={props.data.Title}/>
                <div className="info__wrapper" >
                    <h2 className="info__title">{props.data.Title}</h2>
                    <div className="info__stickers">
                        <div className="info__container" >
                            <p className="info__text">{props.data.Year}</p>
                        </div>
                        <div className="info__container" >
                            <p className="info__text">{props.data.Genre}</p>
                        </div>
                        <div className="info__container" >
                            <p className="info__text">{props.data.Runtime}</p>
                        </div>
                    </div>
                    {
                    //     (props.Ratings[0].Source === 'Internet Movie Database') ?
                    // <div className="info__rating">
                    //     <img className="info__icon" src={imdbIcon} alt="imdb icon"/>
                    //     <p className="info__rating-number">{props.Ratings[0].Value}</p>
                    // </div> : ''
                    //
                    //     console.log(props.data.Ratings)
                    //     <FilmRating ratings={props.data.Ratings} />
                        <FilmRating rating={props.data.Ratings[0].Value} />

                        // props.data.Ratings.some(function (rating) {
                        //     if (rating.Source === 'Internet Movie Database') {
                        //         console.log('Internet Movie Database', rating);
                        //         return (<FilmRating rating={rating.Value} />);
                        //     }
                        // })
                    }
                    <p className="info__description" >{props.data.Plot}</p>
                    <p className="info__actors" ><span className="accent" >Actors: </span>
                        {props.data.Actors}</p>
                </div>
            </div>
        </div>
    )
}

export default Info;