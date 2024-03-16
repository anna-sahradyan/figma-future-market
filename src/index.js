import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {Provider} from "react-redux";
import rootReducer from "./redux/store";
import {configureStore} from "@reduxjs/toolkit";
import {StateProvider} from "./components/provider/StateProvider";
import {BrowserRouter} from "react-router-dom";

const store = configureStore({
    reducer: rootReducer
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Provider store={store}>
            <StateProvider>
                <App/>
            </StateProvider>
        </Provider>
    </BrowserRouter>
);

