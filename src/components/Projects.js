  
import React from "react";
import projects from "./projects-data";
import "../static/styling/projects.css";

const Projects = () => {
    return (
        <div className = "row projects-container">
            <h1>Projects</h1>

            <div className="row cards">
                {projects.map((proj) => (
                    <div className="col col-sm-10 col-lg-10 col-xl card-wrapper">
                        <div className="row">
                            <img className = "col" src={proj.image} alt="" />
                            <div className="col description">
                                <h1 className = "project-title">{proj.title}</h1>
                                <p>{proj.desc}</p>
                                <p>
                                    <span className="stack">Frontend: </span>{" "}
                                    {proj.tech.frontend}
                                </p>
                                <p>
                                    <span className="stack">Backend: </span>{" "}
                                    {proj.tech.backend}
                                </p>
                                <p><a href = {proj.link} target="_blank" rel = "noopener noreferrer"> Check it out! </a> </p>
                            </div>
                        </div>
                    </div>

                ))}
            </div>
        </div>
    );
};

export default Projects;