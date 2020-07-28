import React from "react";
import "../static/styling/main.css";
import profilepicture from "../static/img/profilepicture.JPG";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import pdf from "../static/pdf/angelosolitarioresume.pdf";
import {
    faGithub,
    faLinkedin,
    faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import "react-tabs/style/react-tabs.scss";
import Particles from "react-particles-js";

const Main = () => {
    return (
        <div className="main-container">
            <Particles
                id="particles"
                params={{
                    particles: {
                        number: {
                            value: 100,
                            density: {
                                enable: true,
                                value_area: 5000,
                            },
                        },
                        size: {
                            value: 7,
                        },
                    },
                    interactivity: {
                        events: {
                            onhover: {
                                enable: true,
                                mode: ["grab","repulse"]
                            },
                        },
                    },
                }}
            />
            <div id="social-media">
                <a href="https://angelosolitario.github.io/portfolio/">
                    <img
                        className="profile-picture"
                        src={profilepicture}
                        alt="angelo-solitario"
                    ></img>
                </a>

                <br />

                <a
                    href="https://github.com/angelosolitario"
                    target="_blank"
                    rel="noopener noreferrer"
                    id="github"
                >
                    <FontAwesomeIcon icon={faGithub} size="2x" />
                </a>

                <a
                    href="https://linkedin.com/in/angelosolitario"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FontAwesomeIcon icon={faLinkedin} size="2x" />
                </a>

                <a
                    href="https://instagram.com/angelosolitario"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FontAwesomeIcon icon={faInstagram} size="2x" />
                </a>
                <h1 id="profile-name">ANGELO SOLITARIO</h1>
                <div className="tabs">
                    <button><a href="#about" >About</a></button>
                    <button><a href="#projects">Projects</a></button>
                    <button><a href={pdf} target = "_blank" rel="noopener noreferrer">Resumé</a></button>
                </div>
            </div>
        </div>
    );
};

export default Main;
