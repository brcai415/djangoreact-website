import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import Home from './components/Home/Home';
import About from './components/About/about';
import SongSuggestion from './components/songSuggestion/songSuggestion';
import reportWebVitals from './reportWebVitals';
import Test from './components/Test Page/test';
import{
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";

ReactDOM.render(
  <Router>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/test" element={<Test />} />
        <Route path="/songsuggestion" element={<SongSuggestion />} />
    </Routes>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
