import React from 'react';
import "./getintuch.scss";
import { Button, Typography } from '@mui/material';
import EastIcon from "@mui/icons-material/East";

const GetInTuch = () => {
  return (
    <div className="getintuch">
      <div className="intuch-text">
        <Typography variant="h2" color={"white"} textAlign={"center"}>
          Are You Ready To Growth Hack Your Business?
        </Typography>
        <Typography textAlign={"center"} variant="h5">
          Get a top-notch certified professional consultation today!
        </Typography>
      </div>
      <div className="intuch-button">
        <Button
          sx={{
            color: "#0058E6",
            fontWeight:"500",
            bgcolor: "white",
            "&:hover": {
              color: "black", 
              bgcolor: "white", 
              "& .MuiSvgIcon-root": {
                color: "black", 
              },
            },
          }}
          size="large"
          endIcon={<EastIcon />}
        >
          Schedule it today
        </Button>
      </div>
    </div>
  );
}

export default GetInTuch