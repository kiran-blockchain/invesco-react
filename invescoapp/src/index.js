import React from 'react';
import ReactDOM from 'react-dom/client';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import App from './App';
import { BrowserRouter } from "react-router-dom"
import { Provider } from 'react-redux';
import store from './store';
// find the element with the id 'root' in the index.html
// Wrap the entire app inside that Element
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
);



