import imdbIcon from "../images/imdb-icon.svg";

function Info() {
    return (
        <div className="info">
            <a className="link info__return">Return</a>
            <div className="info__content" >
                <img className="info__image" />
                <div className="info__wrapper" >
                    <h2 className="info__title">title</h2>
                    <div className="info__stickers">
                        <div className="info__container" >
                            <p className="info__text">25/10/2019</p>
                        </div>
                        <div className="info__container" >
                            <p className="info__text">Drama, Romance</p>
                        </div>
                        <div className="info__container" >
                            <p className="info__text">135 min</p>
                        </div>
                    </div>
                    <div className="info__rating">
                        <img className="info__icon" src={imdbIcon} alt="imdb icon"/>
                        <p className="info__rating-number">7,1</p>
                    </div>
                    <p className="info__description" >Murphy is an American living in Paris who enters a highly sexually
                        and emotionally charged relationship with Electra. Unaware of the
                        effect it will have on their relationship, they invite their pretty
                        neighbor into their bed.</p>
                    <p className="info__actors" ><span className="accent" >Actors: </span>
                        Aomi Muyock, Karl Glusman, Klara Kristin</p>
                </div>
            </div>
        </div>
    )
}

export default Info;