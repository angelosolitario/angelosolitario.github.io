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
    const skills = {
        languages: [
            {
                name: "Java",
                score: 4
            },
            {
                name: "JavaScript",
                score: 4.5
            },
            {
                name: "Python",
                score: 4.5
            }
        ],
        technologies: [
            {
                name: "ReactJS",
                score: 4
            },
            {
                name: "Redux",
                score: 4
            },
            {
                name: "NodeJS",
                score: 4
            },
            {
                name: "ExpressJS",
                score: 4
            },
            {
                name: "MongoDB",
                score: 3.5
            }
        ]
    };
    console.log(skills);
    return (
        <div className="container">
            <div className="profile-header">
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

                <h1>ANGELO SOLITARIO</h1>
            </div>

            <div className="row">
                <div className="col">
                    <h1>Education</h1>
                    {/* This will be the education part */}
                    <p>San Francisco State University</p>
                    <p>Bachelor's of Science in Computer Science</p>

                    <p>Skyline College</p>
                    <p>Associate's of Science in Mathematics</p>
                    <p>Associate's of Science in Natural Sciences</p>
                </div>

                <div className="col">
                    <h1>Skills</h1>

                    <p>Languages</p>
                    <ul className="skills">
                        {skills.languages.map(lang => (
                            <li>{lang.name}</li>
                        ))}
                    </ul>
                    <p>Technologies</p>
                    <ul className="skills">
                        {skills.technologies.map(tech => (
                            <li>{tech.name}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default About;
