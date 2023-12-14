import React from 'react';
import "./header.scss";
import { Button, Divider, Typography } from '@mui/material';
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FiPhoneCall } from "react-icons/fi";
import CustomMenu from './components/CustomMenu';


const Header = () => {
  
  return (
    <div className="header">
      <div className="header-container">
        <div className="header-left">
          <p>LOGO</p>
        </div>
        <div className="header-right">
          <div className="right-address">
            <div className="address-time">
              <div className="time">
                <AccessTimeIcon
                  sx={{ height: "18px", width: "18px", color: "#575A5F" }}
                />
                <Typography variant="body" color={"#575A5F"}>
                  Monday to Friday 9 a.m. – 5 p.m.
                </Typography>
              </div>
              <div className="address">
                <LocationOnIcon
                  sx={{ height: "18px", width: "18px", color: "#575A5F" }}
                />
                <Typography color={"#575A5F"} variant="body">
                  Sunset Road 88B, Bali – Indonesia
                </Typography>
              </div>
            </div>
            <div className="social-icons">
              <Typography variant="body" color="#575A5F">
                Folow us
              </Typography>
              <FaFacebook
                color="#0058E6"
                size={18}
                style={{ cursor: "pointer" }}
              />
              <FaLinkedin
                color="#0058E6"
                size={18}
                style={{ cursor: "pointer" }}
              />
              <FaSquareInstagram
                color="#0058E6"
                size={18}
                style={{ cursor: "pointer" }}
              />
              <AiFillTwitterCircle
                color="#0058E6"
                size={18}
                style={{ cursor: "pointer" }}
              />
            </div>
          </div>
          <div className="right-divider">
            <Divider />
          </div>
          <div className="right-menu">
            <div className="menu">
              <CustomMenu name="Home" type1="HomePage 1" type2="HomePage 2" />
              <Typography
                sx={{
                  "&:hover": {
                    color: "#0058E6",
                  },
                  color: "#181D23",
                  fontSize: "18px",
                  fontWeight: "500",
                  cursor: "pointer",
                }}
              >
                About
              </Typography>
              <Typography
                sx={{
                  "&:hover": {
                    color: "#0058E6",
                  },
                  color: "#181D23",
                  fontSize: "18px",
                  fontWeight: "500",
                  cursor: "pointer",
                }}
              >
                Services
              </Typography>
              <CustomMenu name="Pages" type1="Team" type2="Clients" />
              <CustomMenu
                name="Case Studies"
                type1="Case Study"
                type2="Case Study Deatils"
              />
              <CustomMenu name="News" type1="News" type2="Single Post" />
              <CustomMenu
                name="Contact Us"
                type1="Contact Us 1"
                type2="Contact Us 2"
              />
            </div>
            <div className="menu-contact">
              <FiPhoneCall size={40} color="#0058E6" />
              <div className="number">
                <p>0361 23456</p>
                <Typography color="#575A5F" variant="body">
                  {" "}
                  Free Consultation
                </Typography>
              </div>
              <Button sx={{ ml: "30px" }} variant="contained">
                Hire US Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header