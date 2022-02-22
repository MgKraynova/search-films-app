import searchIcon from '../images/search-icon.svg';
import imdbIcon from '../images/imdb-icon.svg';
import Card from "./Card";
import Info from "./Info";

function Main() {
    return (
        <main className="main" >
            <form className="search">
                <input className="search__input" placeholder="Please enter film name"/>
                <img className="search__icon" src={searchIcon} alt="search icon" />
                <button type="submit" className="search__button">Search</button>
            </form>
            <div className="main__content">
                <Card />
                <Info />
            </div>
            <footer className="footer" >
                <p className="footer__caption" >2022 Kraynova Marina</p>
            </footer>
        </main>
    )
}

export default Main;