import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Main from './components/Main'
import About from "./components/About";
import Projects from "./components/About";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <div className="App">
            <Main />
            <Switch>
                <Route path="/"></Route>
                <Route path="/about" component={About}></Route>
                <Route path="/projects" component={Projects}></Route>
            </Switch>
        </div>
    );
}

export default App;
