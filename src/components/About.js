import React from "react";
import "../static/styling/about.css";
import StarRatings from "react-star-ratings";
import skills from './skills-data.js'
const About = () => {

    return (
        <div className="container" id = "main-container">
            <div className="about-me">
                <p>
                    Hello! My name is Angelo Solitario. I am a recent graduate
                    of Computer Science from San Francisco State University. I
                    enjoy programming and gaining knowledge on new things during
                    my free time.
                </p>
            </div>

            <div className="row">
                <div className="col education">
                    <h1>Education</h1>
                    {/*This will be the education part */}
                    <h4>San Francisco State University</h4>
                    <p className="tab">
                        Bachelor of Science in Computer Science{" "}
                        <span className="date">Aug 2017 - Dec 2019</span>
                    </p>

                    <h4>Skyline College</h4>
                    <p className="tab">
                        Transfer Program{" "}
                        <span className="date">Aug 2014 - May 2017</span>
                    </p>
                </div>

                <div className="col skills">
                    <h1>Skills</h1>

                    <h5>Languages</h5>
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
                    <h5>Technologies</h5>
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
    );
};

export default About;
