import React from "react";
import "./About.css";
import { Button } from "react-bootstrap";
import pdf from "../resume/SRUTHI.pdf";
import pic from "../images/sruthis.png";
const About = () => {
  return (
    <section className="clean-block features bg-dark text-light " id="About">
      <div className="i-left">
        <div className="i-name">
          <span>Hy! I am</span>
          <span>Sruthi Sunil</span>
          <span>
            An Enthusiastic Software engineer with good experience in Devops
            concepts and application development. I love experimenting with
            various technologies.
          </span>
        </div>
        <a href={pdf}>
          <Button variant="primary">Resume</Button>
        </a>
      </div>
      <div className="i-right">
        <img src={pic} style={{ maxHeight: "450px", width: "300px" }}></img>
      </div>
    </section>
  );
};

export default About;
