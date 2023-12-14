import { Typography } from '@mui/material'
import React from 'react';
import "./ourvalues.scss";
import { MdOutlinePersonalInjury } from "react-icons/md";
import { AiOutlineLike } from "react-icons/ai";
import { SlStar } from "react-icons/sl";

const OurValues = () => {
  return (
    <div className="ourcorevalue">
      <div className="container">
        <Typography variant="body" textAlign={"center"} color={" #0058E6"}>
          OUR CORE VALUE
        </Typography>
        <Typography variant="h3" textAlign={"center"}>
          Top-Notch Marketing Agency
        </Typography>
        <div style={{ display: "flex" }}>
          <div className="cardd">
            <div style={{ height: "6px", backgroundColor: " #96989B" }}></div>
            <div className="value-card">
              <div className="value-icon">
                <MdOutlinePersonalInjury size={35} />
              </div>
              <Typography variant="h5" textAlign={"center"}>
                Integrity
              </Typography>
              <Typography variant="body" textAlign={"center"}>
                Aenean massa. Cum sociis natoque penatibus et magnis dis
                parturient montes, nascetur ridiculus mus.
              </Typography>
              <div></div>
            </div>
          </div>
          <div className="cardd" style={{ marginTop: "2rem" }}>
            <div style={{ height: "6px", backgroundColor: "#0058E6" }}></div>
            <div className="value-card">
              <div className="value-icon">
                <AiOutlineLike size={35} />
              </div>
              <Typography variant="h5" textAlign={"center"}>
                Integrity
              </Typography>
              <Typography variant="body" textAlign={"center"}>
                Aenean massa. Cum sociis natoque penatibus et magnis dis
                parturient montes, nascetur ridiculus mus.
              </Typography>
              <div></div>
            </div>
          </div>
          <div className="cardd">
            <div style={{ height: "6px", backgroundColor: " #96989B" }}></div>
            <div className="value-card">
              <div className="value-icon">
                <SlStar size={35} />
              </div>
              <Typography variant="h5" textAlign={"center"}>
                Integrity
              </Typography>
              <Typography variant="body" textAlign={"center"}>
                Aenean massa. Cum sociis natoque penatibus et magnis dis
                parturient montes, nascetur ridiculus mus.
              </Typography>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurValues