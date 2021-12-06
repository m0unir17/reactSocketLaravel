// /**
//  * First we will load all of this project's JavaScript dependencies which
//  * includes React and other helpers. It's a great starting point while
//  * building robust, powerful web applications using React + Laravel.
//  */
//
 require('./bootstrap');
//
// /**
//  * Next, we will create a fresh React component instance and attach it to
//  * the page. Then, you may begin adding components to this application
//  * or customize the JavaScript scaffolding to fit your unique needs.
//  */
//
// require('./components/Example');
// require('./components/Bouton');
// require('./components/Testcomponent');
// require('./components/Responder');


import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter,Routes, Route } from "react-router-dom";
import Home from "./views/Home"
import Receiver from "./views/Receiver";
import Example from "./components/Example";
// import {Index} from './views/index'

export default function App() {
    return (
            <BrowserRouter>
                <div className="App">
                    <h1>Welcome to React Router!</h1>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/receiver" element={<Receiver />} />
                        <Route path={"/home"} element={<Example/>} />
                    </Routes>
                </div>
            </BrowserRouter>
    );
}



if (document.getElementById('root')) {
    ReactDOM.render(<App />, document.getElementById('root'));
}
