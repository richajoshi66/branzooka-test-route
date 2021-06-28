import React, {Component} from "react";
import ReactDOM from 'react-dom';
import "./index.css";
import registerServiceWorker from './registerServiceWorker';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import App from "./App";
import CartContextProvider from "./contexts/CartContext";

ReactDOM.render(
    <CartContextProvider>
        <App/>
    </CartContextProvider>,
    document.getElementById('root')
)
registerServiceWorker();
