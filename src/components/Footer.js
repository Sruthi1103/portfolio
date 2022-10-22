import React from "react";
import heart from "../images/heart.png";

const Footer = () => {
  return (
    <section id="Footer" className="bg-dark text-light">
      <div className="row">
        <center>
          <p>
            Made with &nbsp;
            <img
              src={heart}
              alt="heart"
              style={{ width: "18px", height: "18px" }}
            ></img>{" "}
            &nbsp; by Sruthi Sunil
          </p>
        </center>
      </div>
    </section>
  );
};

export default Footer;
