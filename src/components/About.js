import React from "react";
import "../static/styling/about.css";

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
            },
            {
                name: "C/C++",
                score: 4.5
            },
            
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
            <div className="row">
                <div className="col education">
                    <h1>Education</h1>
                    {/* This will be the education part */}
                    <h5>San Francisco State University</h5>
                    <p>Bachelor's of Science in Computer Science</p>

                    <h5>Skyline College</h5>
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
                    <br />
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
