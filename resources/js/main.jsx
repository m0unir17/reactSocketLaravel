import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App2 from "./App";

const rootElement = document.getElementById("root");
render(
    <BrowserRouter>
        <Routes>
            <Route />
        </Routes>
        <App2 />
    </BrowserRouter>,
    rootElement

);
