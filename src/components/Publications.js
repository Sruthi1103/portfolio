import React from "react";

const Publications = () => {
  return (
    <section id="Publication" className="clean-block feature dark">
      <div class="container">
        <div className="block-heading">
          <h2 className="name">Publications</h2>
        </div>
        <div
          className="row justify-content-center"
          style={{ marginRight: "0px" }}
        >
          <div className="feature-box">
            <div className="row">
              <div className="col-md-8 col-xl-9 ">
                <h4>Blockchain Based Land Record Storage</h4>
                <br></br>
              </div>
              <div className="col">
                <h5
                  className="text-start"
                  style={{ textAlign: "right", fontWeight: "900" }}
                >
                  July 2021
                </h5>
                <br></br>
              </div>
            </div>
            <h5>
              International Journal of Innovative Research in Computer and
              Communication Engineering (IJIRCCE)<br></br>
              <br></br>
            </h5>
            <p style={{ color: "#636D76", textAlign: "justify" }}>
              Abirami K , Monika G , Monisha B ( Volume 9 Issue 7). Blockchain
              based land record storage{" "}
              <b>DOI: 10.15680/IJIRCCE.2021.0907170</b>
              <br></br>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Publications;
