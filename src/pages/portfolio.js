import React from "react";
import cardImg from "../assets/cardImg.jpg";
import { Link } from "react-router-dom";

function Portfolio() {
  return (
    <main class="container-fluid">
      <h1 className="m-3 text-center">My Portfolio</h1>
      <div className="d-flex justify-content-evenly flex-wrap">
        <Link to="/project">
          <div className="card projectCard">
            <img src={cardImg} class="card-img-top" alt="My First Project" />
            <div className="card-body">
              <h5 className="card-title">My Project</h5>
              <p className="card-text">
                My project I am proud of! This is placeholder text for now!
                Thanks for checking it out. Unfortunately, I do not have
                anything to put here.
              </p>
            </div>
          </div>
        </Link>
        <Link to="/project">
          <div className="card projectCard">
            <img src={cardImg} class="card-img-top" alt="My First Project" />
            <div className="card-body">
              <h5 className="card-title">My Project</h5>
              <p className="card-text">
                My project I am proud of! This is placeholder text for now!
                Thanks for checking it out. Unfortunately, I do not have
                anything to put here.
              </p>
            </div>
          </div>
        </Link>
        <Link to="/project">
          <div className="card projectCard">
            <img src={cardImg} class="card-img-top" alt="My First Project" />
            <div className="card-body">
              <h5 className="card-title">My Project</h5>
              <p className="card-text">
                My project I am proud of! This is placeholder text for now!
                Thanks for checking it out. Unfortunately, I do not have
                anything to put here.
              </p>
            </div>
          </div>
        </Link>
        <Link to="/project">
          <div className="card projectCard">
            <img src={cardImg} class="card-img-top" alt="My First Project" />
            <div className="card-body">
              <h5 className="card-title">My Project</h5>
              <p className="card-text">
                My project I am proud of! This is placeholder text for now!
                Thanks for checking it out. Unfortunately, I do not have
                anything to put here.
              </p>
            </div>
          </div>
        </Link>
        <Link to="/project">
          <div className="card projectCard">
            <img src={cardImg} class="card-img-top" alt="My First Project" />
            <div className="card-body">
              <h5 className="card-title">My Project</h5>
              <p className="card-text">
                My project I am proud of! This is placeholder text for now!
                Thanks for checking it out. Unfortunately, I do not have
                anything to put here.
              </p>
            </div>
          </div>
        </Link>
        <Link to="/project">
          <div className="card projectCard">
            <img src={cardImg} class="card-img-top" alt="My First Project" />
            <div className="card-body">
              <h5 className="card-title">My Project</h5>
              <p className="card-text">
                My project I am proud of! This is placeholder text for now!
                Thanks for checking it out. Unfortunately, I do not have
                anything to put here.
              </p>
            </div>
          </div>
        </Link>
      </div>
    </main>
  );
}

export default Portfolio;
