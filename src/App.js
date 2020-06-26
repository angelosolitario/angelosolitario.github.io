import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Main from "./components/Main";
import About from "./components/About";
import Projects from "./components/Projects/Projects";

import Particles from 'react-particles-js'
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
    return (
        <div className="App">
            <Main />
        </div>
    );
}

export default App;
