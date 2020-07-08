import React from "react";
import "../static/styling/about.css";
import StarRatings from "react-star-ratings";
import skills from "./skills-data.js";
const About = () => {
    return (
        <div id="about" className="container">
            <div className="contain">
                <div className="about-me">
                    <h1>About</h1>
                    <p>
                        Hello! My name is Angelo Solitario. I am a recent
                        graduate of Computer Science from San Francisco State
                        University. I enjoy programming and gaining knowledge on
                        new things during my free time.
                    </p>
                </div>

                <div className="row">
                    <div className="col col-sm-12 col-xl-6 education">
                        <h1>Education</h1>
                        {/*This will be the education part */}
                        <h3>San Francisco State University</h3>
                        <p className="tab">
                            <strong>
                                Bachelor of Science in Computer Science
                            </strong>
                            <br />
                            <span className="date">Aug 2017 - Dec 2019</span>
                        </p>

                        <h3>Skyline College</h3>
                        <p className="tab">
                            <strong>Transfer Program</strong>
                            <span className="date">Aug 2014 - May 2017</span>
                        </p>
                    </div>

                    <div className="col col-sm-12 col-xl-6 skills">
                        <h1>Skills</h1>

                        <h3>Languages</h3>
                        <ul>
                            {skills.languages.map((lang) => (
                                <div className="stars">
                                    <li>
                                        <p>
                                            {lang.name}
                                            <span>
                                                <StarRatings
                                                    rating={lang.score}
                                                    starRatedColor="red"
                                                    starDimension="20px"
                                                    starSpacing="5px"
                                                />
                                            </span>
                                        </p>
                                    </li>
                                </div>
                            ))}
                        </ul>
                        <br />
                        <h3>Technologies</h3>
                        <ul>
                            {skills.technologies.map((tech) => (
                                <div className="stars">
                                    <li>
                                        <p>
                                            {tech.name}
                                            <span>
                                                <StarRatings
                                                    rating={tech.score}
                                                    starRatedColor="blue"
                                                    starDimension="20px"
                                                    starSpacing="5px"
                                                />
                                            </span>
                                        </p>
                                    </li>
                                </div>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
