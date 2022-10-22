import React from "react";
import py from "../images/az-1.PNG";
import az from "../images/az-2.PNG";
const Certi = () => {
  return (
    <section className="clean-block features dark bg-dark" id="Certification">
      <div className="container">
        <div className="block-heading">
          <h2 className="expname">Certifications</h2>
        </div>
      </div>

      <div className="i-left">
        <div className="i-name">
          <img
            src={az}
            alt="azure"
            style={{ width: "500px", height: "300px" }}
          ></img>
        </div>
      </div>
      <div className="i-right" style={{ marginTop: "7rem" }}>
        <img
          src={az}
          alt="azure"
          style={{ width: "500px", height: "300px" }}
        ></img>
      </div>
    </section>
  );
};

export default Certi;
