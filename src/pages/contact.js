import React from "react";
import { Link } from "react-router-dom";

function Portfolio() {
  return (
    <main className="container-fluid" id="contactMe">
      <h1>My Contact Info</h1>
      <Link to="https://www.github.com/V1brance">
        My Github
        <br />
      </Link>
      <Link to="https://www.linkedIn.com">
        My LinkedIn
        <br />
      </Link>
      <Link to="#">
        My Email: sbrookshire99@gmail.com
        <br />
      </Link>
      <Link to="/">
        My Portfolio Page
        <br />
      </Link>
    </main>
  );
}

export default Portfolio;
