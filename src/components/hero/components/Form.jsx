import { Button, TextField, Typography, Avatar } from "@mui/material";
import React from "react";
import "./form.scss";
import AvatarImage from "../../../assets/profile.jpg"; 
import EastIcon from "@mui/icons-material/East";

const Form = () => {
  return (
    <div className="form" style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}>
      <div
        className="form-container"
        style={{
          width: "90%",
          margin: "0 auto",
          position: "relative",
          marginBottom: "20px",
        }}
      >
        <Avatar
          src={AvatarImage}
          alt="Avatar"
          sx={{
            width: 100,
            height: 100,
            position: "absolute",
            top: "-80px",
            left: "50%",
            transform: "translateX(-50%)",
            border: "6px solid white",
            backgroundColor: "white",
          }}
        />
        <Typography
          textAlign={"center"}
          style={{
            color: "white",
            marginTop: "2rem",
            marginBottom: "1rem",
            fontSize: "24px",
            fontWeight: "600",
          }}
        >
          Get Professional Help for Your Business
        </Typography>
        <TextField
          fullWidth
          InputProps={{
            disableUnderline: true,
            style: {
              borderRadius: 0,
              backgroundColor: "white",
            },
            placeholder: "Your Name",
          }}
          InputLabelProps={{
            style: {
              color: "gray",
            },
          }}
        />
        <div style={{ display: "flex" }}>
          <TextField
            fullWidth
            InputProps={{
              disableUnderline: true,
              style: {
                borderRadius: 0,
                backgroundColor: "white",
              },
              placeholder: "Email",
            }}
            InputLabelProps={{
              style: {
                color: "gray",
              },
            }}
          />
          <TextField
            fullWidth
            InputProps={{
              disableUnderline: true,
              style: {
                borderRadius: 0,
                backgroundColor: "white",
              },
              placeholder: "Phone number",
            }}
            InputLabelProps={{
              style: {
                color: "gray",
              },
            }}
          />
        </div>
        <TextField
          fullWidth
          InputProps={{
            disableUnderline: true,
            style: {
              borderRadius: 0,
              backgroundColor: "white",
            },
            placeholder: "Subject",
          }}
          InputLabelProps={{
            style: {
              color: "gray",
            },
          }}
        />
        <Button variant="contained" size="large" endIcon={<EastIcon />}>
          Send Inquiry
        </Button>
      </div>
    </div>
  );
};

export default Form;
