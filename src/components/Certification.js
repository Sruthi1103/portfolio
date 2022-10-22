import React from "react";
import "./Certification.css";
import az1 from "../images/az-1.PNG";
import az2 from "../images/az-2.PNG";
import hsql from "../images/hsql.PNG";
import hint from "../images/hint.PNG";
import rest from "../images/rest.PNG";
import py from "../images/py.PNG";
const Certification = () => {
  return (
    <section id="Certification" className="clean-block about-us dark">
      <div class="container">
        <div className="block-heading">
          <h2 className="expname">Certifications</h2>
        </div>
        <div
          className="certificate justify-content-center"
          style={{
            paddingBottom: "1em",
          }}
        >
          <center>
            <div className="col-sm-6 col-lg-6">
              <div className="card clean-card text-center">
                <img
                  class="card-img-top w-100 d-block"
                  src={az2}
                  alt="azure"
                ></img>
              </div>
            </div>
            <div className="col-sm-6 col-lg-6">
              <div className="card clean-card text-center">
                <img
                  class="card-img-top w-100 d-block"
                  src={az1}
                  alt="azure"
                ></img>
              </div>
            </div>
            <div className="col-sm-6 col-lg-6">
              <div className="card clean-card text-center">
                <img
                  class="card-img-top w-100 d-block"
                  src={hsql}
                  alt="azure"
                ></img>
              </div>
            </div>
            <div className="col-sm-6 col-lg-6">
              <div className="card clean-card text-center">
                <img
                  class="card-img-top w-100 d-block"
                  src={hint}
                  alt="azure"
                ></img>
              </div>
            </div>
            <div className="col-sm-6 col-lg-6">
              <div className="card clean-card text-center">
                <img
                  class="card-img-top w-100 d-block"
                  src={py}
                  alt="azure"
                ></img>
              </div>
            </div>
            <div className="col-sm-6 col-lg-6">
              <div className="card clean-card text-center">
                <img
                  class="card-img-top w-100 d-block"
                  src={rest}
                  alt="azure"
                ></img>
              </div>
            </div>
          </center>
        </div>
      </div>
    </section>
  );
};

export default Certification;
