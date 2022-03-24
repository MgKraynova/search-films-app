import {useNavigate} from "react-router-dom";

function Card({data}) {

    let navigate = useNavigate();

    function handleDetailsClick() {
        navigate("/info");
    }

    return (
        <div className="card">
            <img className="card__image" src={data.Poster} alt={data.Title}/>
            <div className="card__rating-wrapper">
                {
                    (data.Ratings[0].Source === 'Internet Movie Database') && <p className="card__rating">{data.Ratings[0].Value}</p>
                }
            </div>
            <h2 className="card__title">{data.Title}</h2>
            <a href="#" className="card__details link" onClick={handleDetailsClick}>Show details</a>
        </div>
    )
}

export default Card;