import React from 'react';
import "./footer.scss";
import { Typography } from '@mui/material';
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer-first">
          <div
            className="first-log"
            style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
          >
            <div className="footer-logo">
              <p>LOGO</p>
            </div>
            <div className="footer-text">
              <Typography variant="body" color={"#96989B"}>
                Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum.
                Aenean imperdiet. Etiam ultricies nisi vel augue.
              </Typography>
            </div>
          </div>
          <div className="footer-links">
            <div
              className="comapny"
              style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
            >
              <Typography color={"white"}>COMPANY</Typography>
              <div>
                <Typography
                  variant="body1"
                  color="#96989B"
                  sx={{
                    "&:hover": {
                      color: "white",
                      cursor: "pointer",
                    },
                  }}
                >
                  About Us
                </Typography>
                <Typography
                  variant="body1"
                  color="#96989B"
                  sx={{
                    "&:hover": {
                      color: "white",
                      cursor: "pointer",
                    },
                  }}
                >
                  Our Philoshopy
                </Typography>
                <Typography
                  variant="body1"
                  color="#96989B"
                  sx={{
                    "&:hover": {
                      color: "white",
                      cursor: "pointer",
                    },
                  }}
                >
                  Job Vacancy
                </Typography>
              </div>
            </div>
            <div
              className="servics"
              style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
            >
              <Typography>SERVICES</Typography>
              <div>
                <Typography
                  variant="body1"
                  color="#96989B"
                  sx={{
                    "&:hover": {
                      color: "white",
                      cursor: "pointer",
                    },
                  }}
                >
                  Digital Marketing
                </Typography>
                <Typography
                  variant="body1"
                  color="#96989B"
                  sx={{
                    "&:hover": {
                      color: "white",
                      cursor: "pointer",
                    },
                  }}
                >
                  User Acquisition
                </Typography>
                <Typography
                  variant="body1"
                  color="#96989B"
                  sx={{
                    "&:hover": {
                      color: "white",
                      cursor: "pointer",
                    },
                  }}
                >
                  Brand Activation
                </Typography>
              </div>
            </div>
            <div
              className="followus"
              style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
            >
              <Typography>FOLLOW US</Typography>
              <div style={{ display: "flex", gap: "1rem" }}>
                <FaFacebook
                  color="#0058E6"
                  size={25}
                  style={{ cursor: "pointer" }}
                />
                <FaLinkedin
                  color="#0058E6"
                  size={25}
                  style={{ cursor: "pointer" }}
                />
                <FaSquareInstagram
                  color="#0058E6"
                  size={25}
                  style={{ cursor: "pointer" }}
                />
                <AiFillTwitterCircle
                  color="#0058E6"
                  size={25}
                  style={{ cursor: "pointer" }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="footer-second">
          <div className="fo-1">
            <Typography variant="caption" color={" #96989B"}>
              © 2021 Growthy. All rights reserved.
            </Typography>
          </div>
          <div className="fo-2">
            <Typography variant="caption" color={" #96989B"}>
              Growth Hacking Agency Elementor Template Kit. Created by Baliniz
              in Bali.
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer