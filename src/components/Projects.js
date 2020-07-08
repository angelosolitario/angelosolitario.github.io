import React from "react";

import HomePage from "../static/img/home-page-gatorstore.png";
import TodoPage from "../static/img/todo-list.gif";
import TankGame from "../static/img/tank-game.jpg";
import NoteTaking from "../static/img/note-taking-app.png";

import "../static/styling/projects.css";

const Projects = () => {
    return (
        <div id="projects" className="projects-container">
            <h1>Projects</h1>

            <div className="contain">
                <div className="row">
                    {/* Project 1 */}
                    <div className="col projects">
                        <div className="col image-container">
                            <img
                                className="image image-fluid"
                                src={HomePage}
                                alt="Gator Store"
                            />
                        </div>

                        <div className="col">
                            <h2>Gator Store</h2>
                            <p>
                                Gator Store is a buy/sell website dedicated for
                                San Francisco State University students.
                            </p>
                            <p>
                                <strong>Frontend: </strong> HTML, CSS,
                                JavaScript, BootStrap and EJS templates
                            </p>
                            <p>
                                <strong>Backend: </strong> MySQL, Node.js
                            </p>
                            <p>
                                <a
                                    href="https://gatorstore.duckdns.org/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Check it Out
                                </a>
                            </p>
                        </div>
                    </div>

                    {/* Project 2 */}
                    <div className="col projects">
                        <div className="col image-container">
                            <img
                                className="image"
                                src={TodoPage}
                                alt="Gator Store"
                            />
                        </div>

                        <div className="col">
                            <h2>Todo List</h2>
                            <p>
                                Todo List is an app made so users can add and
                                delete todo items
                            </p>
                            <p>
                                <strong>Frontend: </strong> HTML, CSS, jQuery
                                JavaScript, BootStrap
                            </p>
                            <p>
                                <strong>Backend: </strong> MongoDB, Node.Js.
                                Express
                            </p>
                            <p>
                                <a
                                    href="https://github.com/angelosolitario/Full-Stack-Todo-List"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Check it Out
                                </a>
                            </p>
                        </div>
                    </div>
                </div>

                <div className="row">
                    {/* Project 3 */}
                    <div className="col projects">
                        <div className="col image-container">
                            <img
                                className="image"
                                src={NoteTaking}
                                alt="Gator Store"
                            />
                        </div>

                        <div className="col">
                            <h2>Note Taking App</h2>
                            <p>
                                This application is a Note Taking App that
                                allows users to login/register. It also allows
                                users to add/delete/edit note items.
                            </p>
                            <p>
                                <strong>Frontend: </strong> HTML, CSS,
                                JavaScript, React, and Redux
                            </p>
                            <p>
                                <strong>Backend: </strong> MongoDB, Node.js
                            </p>
                            <p>
                                <a
                                    href="https://github.com/angelosolitario/NoteTakingApp"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Check it Out
                                </a>
                            </p>
                        </div>
                    </div>

                    {/* Project 4 */}
                    <div className="col projects">
                        <div className="col image-container">
                            <img
                                className="image"
                                src={TankGame}
                                alt="Gator Store"
                            />
                        </div>

                        <div className="col">
                            <h2>Multiplayer Tank Game</h2>
                            <p>
                                This game is a Multiplayer Tank Game using Java
                                and Java GUI with fully controllable tanks.
                            </p>
                            <p>
                                <a
                                    href="https://github.com/angelosolitario/Multiplayer-Tank-Game"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Check it Out
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;
