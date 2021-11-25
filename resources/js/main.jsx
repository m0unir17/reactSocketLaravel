import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";

const rootElement = document.getElementById("root");
render(
    <BrowserRouter>
        <Routes>
            <Route />
        </Routes>
        <App />
    </BrowserRouter>,
    rootElement

);
