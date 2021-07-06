import React from "react";
import cardImg from "../assets/cardImg.jpg";
import { Link } from "react-router-dom";

function Project() {
  return (
    <main className="container-fluid d-flex">
      <img src={cardImg} alt="A placeholder image" id="projectImg"></img>
      <div>
        <h1>A Sample Project</h1>
        <p>Created On: 01/01/21</p>
        <p>Project Type: Full Stack Web App</p>
        <p>
          Project Description: An example of what a fully finalized full stack
          web app would look like
        </p>
        <p>
          Link to App: <Link to="https://www.github.com/V1brance">Github</Link>
        </p>
      </div>
    </main>
  );
}

export default Project;
