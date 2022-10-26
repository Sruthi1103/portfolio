import React from "react";
import { Row } from "react-bootstrap";
import weather from "../images/weather.PNG";
import youtube from "../images/youtube.png";
import ems from "../images/ems.png";
import hint from "../images/hint.PNG";
import dapp from "../images/dapp.PNG";
const Projects = () => {
  return (
    <section id="Projects" className="clean-block about-us ">
      <div class="container">
        <div className="block-heading">
          <h2 className="expname">Projects</h2>
          <br></br>
          <h6 style={{ fontSize: "1rem", color: "#636d76" }}>
            For source code of projects refer{" "}
            <a href="https://github.com/Sruthi1103">GitHub Link</a>
          </h6>
        </div>

        <div
          className="row justify-content-center"
          style={{
            paddingBottom: "1em",
          }}
        >
          <div className="col-sm-6 col-lg-4">
            <div className="card clean-card">
              <img
                class="card-img-top w-100 d-block"
                src={youtube}
                alt="azure"
              ></img>
              <div className="card-body info">
                <h4 className="card-title" style={{ fontWeight: "10" }}>
                  <strong>Youtube Data Analysis</strong>
                </h4>
                <br></br>
                <p class="card-text" style={{ textAlign: "justify" }}>
                  Built an data analysis workflow , right from cleaning of raw
                  data to designing dashboard with insights on the data.
                  <br></br>
                  <b>Stack: </b> Aws glue , Aws athena , Aws quickSight , Aws s3
                  , Aws lambda
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-4">
            <div className="card clean-card">
              <img
                class="card-img-top w-100 d-block"
                src={weather}
                alt="azure"
              ></img>
              <div className="card-body info">
                <h4 className="card-title" style={{ fontWeight: "10" }}>
                  Weather Forecast Webapp
                </h4>
                <br></br>
                <p class="card-text" style={{ textAlign: "justify" }}>
                  Built a webapp to forecast weather of different countries and
                  cities by fecthing data from REST API.
                  <br></br>
                  <b>Stack: </b> Python flask , html ,css
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-4">
            <div className="card clean-card">
              <img
                class="card-img-top w-100 d-block"
                src={ems}
                alt="azure"
              ></img>
              <div className="card-body info">
                <h4 className="card-title" style={{ fontWeight: "10" }}>
                  <strong>EMS Devops Archietecture</strong>
                </h4>
                <br></br>
                <p class="card-text" style={{ textAlign: "justify" }}>
                  Built a webapp to manage events which include bulk mailing and
                  cost calculation. End to end automation for application
                  deployment using CI/CD pipleines has been implemented
                  <br></br>
                  <b>Stack: </b> html , css , Reactjs ,express , nodejs ,
                  mongodb express
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-4">
            <div className="card clean-card">
              <img
                class="card-img-top w-100 d-block"
                src={dapp}
                alt="azure"
              ></img>
              <div className="card-body info">
                <h4 className="card-title" style={{ fontWeight: "10" }}>
                  <strong>Dapp Voting System</strong>
                </h4>
                <br></br>
                <p class="card-text" style={{ textAlign: "justify" }}>
                  Decentralised voting application using the principles for
                  blockchain. Ganache is used as a local blockchain and solidity
                  is the language used to design smart contracts
                  <br></br>
                  <b>Stack: </b> html , css , solidity , ganache , metamask
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
