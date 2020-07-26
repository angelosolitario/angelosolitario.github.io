import React from "react";
import Main from "./components/Main";
import About from "./components/About";
import Projects from "./components/Projects";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
    return (
        <div className="App">
            <Main />
            <About />
            <Projects />
        </div>
    );
}

export default App;


