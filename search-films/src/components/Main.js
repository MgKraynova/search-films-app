import searchIcon from '../images/search-icon.svg';
import Card from "./Card";
import Info from "./Info";
import {useState} from "react";
import {Route, Routes} from "react-router-dom";
import SearchForm from "./SearchForm";
import {useNavigate} from "react-router-dom";

function Main() {

    const [inputValue, setInputValue] = useState('');

    const [data, setData] = useState(null);

    let navigate = useNavigate();

    // const [isLoading, setIsLoading] = useState(false);


    function handleApiError(err) {
        console.log('Запрос не выполнен: ', err);
    }

    function search(e) {
        e.preventDefault();

        return fetch(`http://www.omdbapi.com/?t=${inputValue}&plot=full&apikey=9b9c63d2`)
            .then((res) => {
                if (res.ok) {
                    return res.json();
                } else {
                    return Promise.reject(`Ошибка: ${res.status}`);
                }
            })
            .then((res) => {
                console.log(res);

                setData(res);
                navigate("/card");
            })
            .catch((err) => {
                handleApiError(err);
            });
        // .finally(() => {
        //     setIsLoading(false);
        // }); //todo добавить лоадер
    }

    return (
        <main className="main">
            <SearchForm handleChange={setInputValue} handleSubmit={search}/>
            <div className="main__content">
                <Routes>
                    <Route path="/card" element={<Card data={data}/>}/>
                    <Route path="/info" element={<Info data={data}/>} />
                    {/*//todo сделать роут "инфа не найдена"*/}
                </Routes>
            </div>
        </main>
    )
}

export default Main;