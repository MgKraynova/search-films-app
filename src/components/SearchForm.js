import searchIcon from "../images/search-icon.svg";

function SearchForm({handleChange, handleSubmit}) {


    function handleInputValueChange(e) {
        handleChange(e.target.value);
    }

    return(
        <form className="search" onSubmit={handleSubmit}>
            <input className="search__input"
                   placeholder="Please enter film name"
                   onChange={handleInputValueChange}
            />
            <img className="search__icon" src={searchIcon} alt="search icon"/>
            <button type="submit" className="search__button">Search</button>
        </form>
    )
}

export default SearchForm;