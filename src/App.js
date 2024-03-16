import React from 'react';
import Header from "./components/header/Header";
import Home from "./components/main/Home";
import {Toaster} from "react-hot-toast";



const App = () => {

    return (
        <>
            <Toaster/>
            <div className={'container'}>
                <Header/>
                <Home/>
            </div>
        </>
    );
};

export default App;