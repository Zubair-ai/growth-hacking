import {Button, Divider, Typography } from '@mui/material';
import React from 'react';
import EastIcon from "@mui/icons-material/East";
import "./aboutus.scss"
import pic1 from "../../assets/picture 1.jpg";
import pic2 from "../../assets/picture 2.jpg";
import { TbTargetArrow } from "react-icons/tb";
import { HiOutlineLightBulb } from "react-icons/hi";
import { BsBarChart } from "react-icons/bs";
import { IoDiamondOutline } from "react-icons/io5";

const AboutUs = () => {
  return (
    <div className="aboutus">
      <div className="container">
        <div className="first">
          <div className="first-left">
            <div className="first"></div>
            <Typography variant="h5" color={"#0058E6"}>
              About Us
            </Typography>
            <Typography variant="h3" color="#181D23">
              We are a collective of growth hacker that bring values to global
              companies
            </Typography>
            <div>
              <Button
                fullWidth={false}
                variant="contained"
                size="large"
                endIcon={<EastIcon />}
              >
                Learn More
              </Button>
            </div>
          </div>
          <div className="first-right">
            <Typography variant="body" color={"#96989B"}>
              Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante.
              Etiam sit amet orci eget eros faucibus tincidunt. Nullam dictum
              felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.
              Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.{" "}
            </Typography>
            <Typography variant="body" color="#181D23">
              CEO of Growthy
            </Typography>
            <Typography variant="body" color={"#96989B"}>
              Donald Chavez Brown, MBA
            </Typography>
            <div style={{ width: "200px", height: "80px" }}>
              <img
                width={"100%"}
                height={"100%"}
                src={
                  "https://tse1.mm.bing.net/th?id=OIP.4vzRILL4FqKb8r7LX5Gn9gAAAA&pid=Api&P=0&h=220"
                }
                alt="sign"
              />
            </div>
          </div>
        </div>
        <div className="divider">
          <Divider />
        </div>
        <div className="second">
          <div className="second-1">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
              }}
              className="1-text-1"
            >
              <TbTargetArrow size={35} color="#96989B" />
              <Typography variant="body">Planing & Strategy</Typography>
              <Typography variant="body" color="#96989B">
                Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien
                ut libero venenatis.
              </Typography>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
              }}
              className="1-text-2"
            >
              <HiOutlineLightBulb size={35} color="#96989B" />
              <Typography variant="body">Planing & Strategy</Typography>
              <Typography variant="body" color="#96989B">
                Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien
                ut libero venenatis.
              </Typography>
            </div>
          </div>
          <div className="second-2">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
              }}
              className="2-text-1"
            >
              <BsBarChart size={35} color="#96989B" />
              <Typography variant="body">Planing & Strategy</Typography>
              <Typography variant="body" color="#96989B">
                Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien
                ut libero venenatis.
              </Typography>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
              }}
              className="2-text-2"
            >
              <IoDiamondOutline size={35} color="#96989B" />
              <Typography variant="body">Planing & Strategy</Typography>
              <Typography variant="body" color="#96989B">
                Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien
                ut libero venenatis.
              </Typography>
            </div>
          </div>
          <div className="second-3">
            <div className="image-1">
              <img
                width={"100%"}
                height={"100%"}
                style={{ objectFit: "cover" }}
                src={pic1}
                alt="pic"
              />
            </div>
            <div className="image-2">
              <img
                width={"100%"}
                height={"100%"}
                style={{ objectFit: "cover" }}
                src={pic2}
                alt="pic"
              />
            </div>
          </div>
        </div>
        <div style={{marginTop:"2rem"}}>
          <Divider />
        </div>
      </div>
    </div>
  );
}

export default AboutUs