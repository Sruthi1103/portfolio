import React from "react";
import "./Education.css";

const Education = () => {
  return (
    <section id="Education" className="clean-block">
      <div class="container">
        <div className="block-heading">
          <h2 className="name">Education</h2>
        </div>
        <div
          className="row justify-content-center"
          style={{ marginRight: "0px" }}
        >
          <div className="feature-box">
            <div className="row">
              <div className="col-md-8 col-xl-9 ">
                <h4>Bachelor Of Information Technology</h4>
                <br></br>
              </div>
              <div className="col">
                <h5
                  className="text-start"
                  style={{ textAlign: "right", fontWeight: "900" }}
                >
                  9.06/10 CGPA | August 2017- July 2021
                </h5>
                <br></br>
              </div>
            </div>
            <h5>
              Anna University, Velammal Engineering College , Chennai<br></br>
              <br></br>
            </h5>
            <p style={{ color: "#636D76", textAlign: "justify" }}>
              Ranked Fourteen among 200 over students in the information
              technology department.This Bachelor's program helped me understand
              the world of computer science and equiped me with skills required
              for application development & application deployment.
              <br></br>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
