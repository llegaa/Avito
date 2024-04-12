import {App} from "./App";
import ReactDOM from "react-dom";
import  './index.module.scss';
import React from "react";
import {store} from "./store/store";
import {Provider} from "react-redux";
const root = document.getElementById('root')
if(!root) {
    throw new Error('root not found')
}

ReactDOM.render(  <Provider store={store}><App/></Provider>, root);
