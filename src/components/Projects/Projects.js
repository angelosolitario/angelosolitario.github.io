import React from "react";
import projects from "./projects-data";
import "../../static/styling/projects.css";

const Projects = () => {
    return (
        <div className = "projects-container">
            <h1>Projects</h1>

            <div className="cards">
                {projects.map((proj) => (
                    <div className=" col card-wrapper">
                        <img src={proj.image} alt="" />
                        <div className="description">
                            <p>{proj.desc}</p>
                            <p>
                                <span className="stack">Frontend: </span>{" "}
                                {proj.tech.frontend}
                            </p>
                            <p>
                                <span className="stack">Backend: </span>{" "}
                                {proj.tech.backend}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
