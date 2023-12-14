import { Button } from "@mui/material";
import React from "react";
import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-container">
        <div className="logo">LOGO</div>
        <Button
          variant="contained"
          sx={{
            bgcolor: "#6f9a37",
            color: "white",
            "&:hover": {
              bgcolor: "#6f9a37",
            },
          }}
        >
          Buy now
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
