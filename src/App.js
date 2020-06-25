import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Main from "./components/Main";
import About from "./components/About";
import Particles from 'react-particles-js'
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
    return (
        <div className="App">
            <Main />
            
            <Particles style={{position:"relative"}}
                params={{
                    "particles": {
                        "number": {
                            "value": 200,
                            "density":{
                                enable: true,
                                value_area: 5000,
                            }
                        },
                        "size": {
                            "value": 3
                        }
                    },
                    "interactivity": {
                        "events": {
                            "onhover": {
                                "enable": true,
                                "mode": "repulse"
                            }
                        }
                    }
                }} 
                width='1900px'
                height='880px'
            />
        </div>
    );
}

export default App;
