import Card from "./Card";

function Cards({cards, showCardDetails}) {

    return (
        <>
            {
                cards.map((card) => (
                    <Card card={card} showCardDetails={showCardDetails} key={card.imdbID}/>
                ))
            }
        </>
    )
}

export default Cards;