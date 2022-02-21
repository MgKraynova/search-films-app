import searchIcon from '../images/search-icon.svg'

function Main() {
    return (
        <main>
            <form className="search">
                <input className="search__input" placeholder="Please enter film name"/>
                <img className="search__icon" src={searchIcon} alt="search icon" />
                <button className="search__button">Search</button>
            </form>
        </main>
    )
}

export default Main;