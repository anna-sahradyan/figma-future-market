import React from 'react';
import Header from "./components/header/Header";
import Home from "./components/main/Home";

const App = () => {

    return (
        <>

        <div className={'container'}>
            <Header/>
            <Home/>
        </div>
        </>
    );
};

export default App;