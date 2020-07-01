import React from "react";
import gatorstore from "../static/img/home-page-gatorstore.png";
import "../static/styling/projects.css";
const Projects = () => {
    return (
        <div className="projects-container">
            <h1>Projects</h1>
            <div className="containerA">
                <div className="rowA">
                    
                    <div className="colA">
                        
                        <h2>Gator Store</h2>
                        <div className="image-container">
                            
                            <img
                                src={gatorstore}
                                className="thumbnail"
                                alt="thumbnail"
                            />
                        </div>
                        <p>
                        
                            A buy and sell website dedicated for San Francisco
                            State University Students. Allows users to
                            login/register and buy/sell items.
                        </p>
                    </div>
                    <div className="colA">
                        {" "}
                        <h2>Todo List</h2>
                        <div className="image-container">
                            
                            <img className="thumbnail" alt="thumbnail" />
                        </div>
                        <p>
                            
                            A full stack todo list that allows users to add and
                            delete todo items.
                        </p>
                    </div>
                </div>
                <div className="rowA">
                    
                    <div className="colA">
                    
                        <h2>Note Taking Application</h2>
                        <div className="image-container">
                            
                            <img className="thumbnail" alt="thumbnail" />
                        </div>
                        <p>
                            
                            Search over 1,000,000 recipes for ingredients,
                            instructions, and full articles.
                        </p>
                    </div>
                    <div className="colA">
                        
                        <h2>Multiplayer Tank Game</h2>
                        <div className="image-container">
                            {
                            <img className="thumbnail" alt="thumbnail" />
                        </div>
                        <p>
                            
                            Reach your fitness goals with the help of Diary Hub.
                            Manage and log your foods, workouts, and
                            measurements.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Projects;
