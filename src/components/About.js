import React from "react";
import "../static/css/about.css";
import profilepicture from "../static/img/profilepicture.JPG";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGithub,
    faLinkedin,
    faInstagram
} from "@fortawesome/free-brands-svg-icons";

const About = () => {
    return (
        <div>
            <div className="container">
                {/* This will be the profile(picture) */}
                <img
                    className="profile-picture"
                    src={profilepicture}
                    alt="angelo-solitario"
                ></img>

                <a href="https://github.com/angelosolitario">
                    <FontAwesomeIcon icon={faGithub} size="2x" />
                </a>

                <a href="https://linkedin.com/in/angelosolitario">
                    <FontAwesomeIcon icon={faLinkedin} size="2x" />
                </a>

                <a href="https://instagram.com/angelosolitario">
                    <FontAwesomeIcon icon={faInstagram} size="2x" />
                </a>

                <h1>Angelo Solitario</h1>
            </div>
            <div className ="row">
                <div className = "col">
                    <h1>Education</h1>
                    {/* This will be the education part */}
                </div>

                <div className = "col">
                    <h1>Skills</h1>
                    {/* This will be the skills part */}
                </div>
            </div>
        </div>
    );
};

export default About;
