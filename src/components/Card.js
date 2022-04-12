import {useNavigate, Navigate} from "react-router-dom";
import notFoundImage from '../images/image-not-found.png';

function Card({card, showCardDetails}) {

    let navigate = useNavigate();

    function handleDetailsClick() {
        //console.log('this v card', card);
        showCardDetails(card.imdbID);
    }

    // function handleDataRatings() {
    //     console.log('data.Ratings[0].Source', data.Ratings[0].Source);
    //     if (data.Ratings[0]) {
    //         console.log('data.Ratings[0].Source', data.Ratings[0].Source);
    //        if (data.Ratings[0].Source === 'Internet Movie Database') {
    //            return <p className="card__rating">{data.Ratings[0].Value}</p>
    //        }
    //     }
    // }

    return (
        <div className="card">
            <img className="card__image" src={card.Poster === 'N/A' ? notFoundImage : card.Poster} alt={card.Title}/>
            {/*<div className="card__rating-wrapper">*/}
            {/*    {*/}
            {/*    ((data.Ratings.length > 0) || (data.Ratings[0].Source === 'Internet Movie Database')) ?*/}
            {/*    <p className="card__rating">{data.Ratings[0].Value}</p> : ''*/}
            {/*    }*/}
            {/*</div>*/}
            <h2 className="card__title">{card.Title}</h2>
            <a href="#" className="card__details link" onClick={handleDetailsClick}>Show details</a>
        </div>
    )
}

export default Card;