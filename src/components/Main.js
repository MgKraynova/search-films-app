import Info from "./Info";
import {useState} from "react";
import {Route, Routes} from "react-router-dom";
import SearchForm from "./SearchForm";
import {useNavigate} from "react-router-dom";
import NotFound from "./NotFound";
import Error from "./Error";
import Cards from "./Cards";

function Main() {

    const [inputValue, setInputValue] = useState('');

    const [cards, setCards] = useState(null);

    const [currentCard, setCurrentCard] = useState(null);

    let navigate = useNavigate();

    const [isLoading, setIsLoading] = useState(false);

    const [filmRating, setFilmRating] = useState('');


    function handleApiError(err) {
        console.log('Запрос не выполнен: ', err);
    }

    function search(e) {
        e.preventDefault();

        navigate("/");

        setIsLoading(true);

        // return fetch(`http://www.omdbapi.com/?t=${inputValue}&plot=full&apikey=9b9c63d2`) // возвращает 1 фильм
        return fetch(`http://www.omdbapi.com/?s=${inputValue}&plot=full&apikey=9b9c63d2&`)
            .then((res) => {
                if (res.ok) {
                    return res.json();
                } else {
                    return Promise.reject(`Ошибка: ${res.status}`);
                }
            })
            .then((res) => {
                if (res.Error) {
                    navigate("/not-found");
                } else {
                    setCards(res.Search);
                    navigate("/cards");
                }

            })
            .catch((err) => {
                handleApiError(err);
                navigate("/error");
            })
        .finally(() => {
            setIsLoading(false);
        });
    }

    function showCardDetails(filmId) {

        navigate("/");

        setIsLoading(true);

        return fetch(`http://www.omdbapi.com/?i=${filmId}&plot=full&apikey=9b9c63d2`)
            .then((res) => {
                if (res.ok) {
                    return res.json();
                } else {
                    return Promise.reject(`Ошибка: ${res.status}`);
                }
            })
            .then((res) => {
                setCurrentCard(res);

                res.Ratings.forEach((rating) => {
                    if (rating.Source === 'Internet Movie Database') {
                        setFilmRating(rating.Value);
                    }
                })

                navigate("/info");
            })
            .catch((err) => {
                handleApiError(err);
                navigate("/error");
            })
            .finally(() => {
                setIsLoading(false);
            });
    }

    return (
        <main className="main">
            <SearchForm handleChange={setInputValue} handleSubmit={search}/>
            <div className="main__content">
                {isLoading ? <div className="loader">
                </div> : ''}
                <Routes>
                    <Route exact path="/" element={null} />
                    <Route path="/cards" element={<Cards cards={cards} showCardDetails={showCardDetails} />}/>
                    <Route path="/info" element={currentCard && <Info data={currentCard} rating={filmRating}/>}/>
                    <Route path="not-found" element={<NotFound/>} />
                    <Route path="error" element={<Error/>} />
                    <Route path="*" element={<Error />} />
                </Routes>
            </div>
        </main>
    )
}

export default Main;