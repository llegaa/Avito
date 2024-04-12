import * as style from "./App.module.scss";
import {BrowserRouter as Router, Routes, Route, useParams} from "react-router-dom";
import {MainPage} from "./page/MainPage/MainPage";
import {Movie} from "./page/Movie/Movie";
import {Header} from "./components/Header/Header";

export const App = () => {
    return (
        <div className={style.container}>
            <Router>
                <Header/>
                <Routes>
                    <Route path="/" element={<MainPage/>}/>
                    <Route path="/movie/:id" element={<Movie/>}/>
                </Routes>
            </Router>
        </div>
    );
};