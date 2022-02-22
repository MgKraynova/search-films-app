function Card() {
    return (
        <div className="card">
            <img className="card__image"/>
            <div className="card__rating-wrapper">
                <p className="card__rating">7,1</p>
            </div>
            <h2 className="card__title">title</h2>
            <p className="card__details">Show details</p>
        </div>
    )
}

export default Card;