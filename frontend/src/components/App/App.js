import React, { Component } from "react";
import{
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";
import Home from "../Home/Home";
import About from "../About/about"
import songSuggestion from "../songSuggestion/songSuggestion"

export default function App() {
    return(
        <Router>
            <Routes>
                <Route path="/" component={Home} />
                <Route path="/about" component={About}/>
                <Router path="/songsuggestion" component={songSuggestion}/>
            </Routes>
        </Router>
    );
}