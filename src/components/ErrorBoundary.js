import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import Error from "./Error";
import SearchForm from "./SearchForm";
// import {Route, Routes} from "react-router-dom";
// import SearchForm from "./SearchForm";
// import {useNavigate} from "react-router-dom";
// import NotFound from "./NotFound";
// import Error from "./Error";

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        // Обновить состояние с тем, чтобы следующий рендер показал запасной UI.
        return { hasError: true };
    }

    // componentDidCatch(error, errorInfo) {
    //     // Можно также сохранить информацию об ошибке в соответствующую службу журнала ошибок
    //     logErrorToMyService(error, errorInfo);
    // }

    render() {
        if (this.state.hasError) {
            // Можно отрендерить запасной UI произвольного вида
            // let navigate = useNavigate();
            // navigate("/error");
            // return <h1>Что-то пошло не так.</h1>;
            return (
            <>
                <Header />
                <SearchForm />
                    <Error/>
                <Footer/>
            </>

            )
        }

        return this.props.children;
    }
}

export default ErrorBoundary;