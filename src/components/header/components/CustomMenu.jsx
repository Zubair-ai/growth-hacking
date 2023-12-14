import React, { useState } from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Button } from "@mui/material";
import Fade from "@mui/material/Fade";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const CustomMenu = ({ name, type1, type2 }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="fade-button"
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon />}
        sx={{
          color: "#181D23",
          fontSize: "18px",
          fontWeight: "500",
          textTransform: "none",
          "&:hover": {
            backgroundColor: "transparent",
            color: "#0058E6",
            "& .MuiSvgIcon-root": {
              fill: "#0058E6",
            },
          },
        }}
      >
        {name}
      </Button>
      <Menu
        id="fade-menu"
        MenuListProps={{
          "aria-labelledby": "fade-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem onClick={handleClose}>{type1}</MenuItem>
        <MenuItem onClick={handleClose}>{type2}</MenuItem>
      </Menu>
    </div>
  );
};

export default CustomMenu;
