import React from "react";
import "./Skills.css";
import java from "../images/java.png";
import c from "../images/c.png";
import python from "../images/python.png";
import html from "../images/html.png";
import css from "../images/css.png";
import node from "../images/node-js.png";
import atom from "../images/atom.png";
import docker from "../images/docker.png";
import kube from "../images/kube.png";
import jen from "../images/jen.png";
import git from "../images/git.png";
import ansible from "../images/ansible.png";
import pandas from "../images/pandas.png";
import nginx from "../images/nginx.png";
import azure from "../images/azure.png";
import aws from "../images/aws.png";
import numpy from "../images/numpy.png";
import mysql from "../images/mysql.png";
import mongo from "../images/mongo.png";
const Skills = () => {
  return (
    <section id="Skills" className="clean-block features">
      <div className="container">
        <div className="block-heading">
          <h2 className="expname">Technical Skills</h2>
          <div>
            <h4
              class="text-msg"
              style={{
                color: "black",
                paddingBottom: "0.5em",
                fontWeight: "300",
                paddingTop: "2rem",
              }}
            >
              Programming Languages
            </h4>
            <div style={{ textAlign: "center" }}>
              <img
                className="tag-icons"
                src={java}
                title="java"
                alt="lang"
              ></img>
              &nbsp;
              <img className="tag-icons" src={c} title="c++" alt="lang"></img>
              &nbsp;
              <img
                className="tag-icons"
                src={python}
                title="python"
                alt="lang"
              ></img>
              &nbsp;
              <img
                className="tag-icons"
                src={html}
                title="html"
                alt="lang"
              ></img>
              &nbsp;
              <img
                className="tag-icons"
                src={css}
                title="css"
                alt="lang"
              ></img>{" "}
              &nbsp;
              <img
                className="tag-icons"
                src={node}
                title="nodejs"
                alt="lang"
              ></img>
              &nbsp;
              <img
                className="tag-icons"
                src={atom}
                title="reactjs"
                alt="lang"
              ></img>
              &nbsp;
            </div>
          </div>
          <div>
            <h4
              class="text-msg"
              style={{
                color: "black",
                paddingBottom: "0.5em",
                fontWeight: "300",
                paddingTop: "2rem",
              }}
            >
              Tools , Frameworks , Libraries , Services
            </h4>
            <div style={{ textAlign: "center" }}>
              <img
                className="tag-icons"
                src={docker}
                title="docker"
                alt="lang"
              ></img>
              &nbsp;
              <img className="tag-icons" src={c} title="c++" alt="lang"></img>
              &nbsp;
              <img className="tag-icons" src={git} title="git" alt="lang"></img>
              &nbsp;
              <img
                className="tag-icons"
                src={jen}
                title="jenkins"
                alt="lang"
              ></img>
              &nbsp;
              <img
                className="tag-icons"
                src={ansible}
                title="ansible"
                alt="lang"
              ></img>
              &nbsp;
              <img
                className="tag-icons"
                src={kube}
                title="kubernetes"
                alt="lang"
              ></img>{" "}
              &nbsp;
              <img
                className="tag-icons"
                src={pandas}
                title="pandas"
                alt="lang"
              ></img>
              &nbsp;
              <img className="tag-icons" src={aws} title="aws" alt="lang"></img>
              &nbsp;
              <img
                className="tag-icons"
                src={azure}
                title="azure"
                alt="lang"
              ></img>
              &nbsp;
              <img
                className="tag-icons"
                src={nginx}
                title="nginx"
                alt="lang"
              ></img>
              &nbsp;
              <img
                className="tag-icons"
                src={numpy}
                title="numpy"
                alt="lang"
              ></img>
              &nbsp;
            </div>
          </div>
          <div>
            <h4
              class="text-msg"
              style={{
                color: "black",
                paddingBottom: "0.5em",
                fontWeight: "300",
                paddingTop: "2rem",
              }}
            >
              Databases
            </h4>
            <div style={{ textAlign: "center" }}>
              <img
                className="tag-icons"
                src={mysql}
                title="mysql"
                alt="lang"
              ></img>
              &nbsp;
              <img
                className="tag-icons"
                src={mongo}
                title="mongodb"
                alt="lang"
              ></img>
              &nbsp;
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
