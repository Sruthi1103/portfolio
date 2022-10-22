import React from "react";
import "./Education.css";

const Education = () => {
  return (
    <section id="Experience" className="clean-block features dark">
      <div class="container">
        <div className="block-heading">
          <h2 className="expname">Work Experience</h2>
        </div>
        <div
          className="row justify-content-center"
          style={{ marginRight: "0px" }}
        >
          <div className="feature-box">
            <div className="row">
              <div className="col-md-8 col-xl-9">
                <h4>Programmer Analyst</h4>
                <br></br>
              </div>
              <div className="col">
                <h5 className="text-start" style={{ textAlign: "right" }}>
                  August 2022 - Present
                </h5>
                <br></br>
              </div>
            </div>
            <h5>
              Cognizant Technology Solutions , Chennai<br></br>
            </h5>
            <p style={{ color: "#636D76", textAlign: "justify" }}>
              I have been working on developing streaming platform for
              integrating data from a banking and financial application to
              generate reports for analytics purposes.
              <br></br>
            </p>
          </div>
          <div className="feature-box">
            <div className="row">
              <div className="col-md-8 col-xl-9">
                <h4>Programmer Analyst Trainee</h4>
                <br></br>
              </div>
              <div className="col">
                <h5 className="text-start" style={{ textAlign: "right" }}>
                  August 2021 - July 2021
                </h5>
                <br></br>
              </div>
            </div>
            <h5>
              Cognizant Technology Solutions , Chennai<br></br>
            </h5>
            <p style={{ color: "#636D76", textAlign: "justify" }}>
              Developed java components that can transform data from third party
              vendor and integrate into core banking application. Creating CI/CD
              pipelines for automating the devlopment and deployment process.
              <br></br>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
