import {createRoot} from "react-dom/client";
import {App} from "./App";
import { MainPage } from "./page/MainPage/MainPage";
import { Element } from "./page/Element/Element";
const root = document.getElementById('root')
import ReactDOM from "react-dom";
if(!root) {
    throw new Error('root not found')
}

ReactDOM.render(<App />, document.getElementById("root"));
