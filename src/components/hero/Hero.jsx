import React from "react";
import bgImage from "../../assets/bgimage.jpg";
import Form from "./components/Form";
import { Typography } from "@mui/material";
import { FaPlay } from "react-icons/fa";
import "./hero.scss"

const Hero = () => {
  return (
    <div
      className="hero"
      style={{
        position: "relative",
        height: "700px",
        overflow: "hidden",
      }}
    >
      <img
        src={bgImage}
        alt="Background"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.7)",
        }}
      ></div>
      <div
        className="overlay-content"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          color: "white",
          zIndex: 1,
          width: "80%",
          margin: "0 auto",
        }}
      >
        <div className="content">
          <div className="left-content">
            <Typography variant="h3">
              Growth Hacking for Exponential Success
            </Typography>
            <Typography variant="h5">
              Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum.
              Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur
              ullamcorper ultricies nisi.
            </Typography>
            <div className="video" style={{ marginTop: "3rem" }}>
              <div className="pulse">
                <div className="behind"></div>
                <div className="button">
                  <FaPlay />
                </div>
              </div>
              <div>
                {" "}
                <Typography>Your business is not growing enough?</Typography>
                <Typography>Watch video to learn more</Typography>
              </div>
            </div>
          </div>
          <div className="right-content">
            <Form />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
