import React from "react";
import projects from "./projects-data";
import "../../static/styling/projects.css";

const Projects = () => {
    // moveLeft and moveRight are for goign through the slideshow
    const moveLeft = () => {};

    const moveRight = () => {};

    return (
        <div className="cards">
            {projects.map((proj) => (
                <div className="card-wrapper">
                    <img src={proj.image} alt="" />
                    <div className="description">
                        <p>{proj.desc}</p>
                        <p><span className="stack">Frontend: </span> {proj.tech.frontend}</p>
                        <p><span className="stack">Backend: </span> {proj.tech.backend}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Projects;
