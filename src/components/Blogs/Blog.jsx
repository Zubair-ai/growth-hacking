import React from 'react';
import "./blogs.scss"
import { Typography } from '@mui/material';
import pic1 from "../../assets/picture 1.jpg";
import { IoMdTime } from "react-icons/io";

const Blog = () => {
  return (
    <div className="blog">
      <div className="container">
        <Typography variant="body" textAlign={"center"} color=" #0058E6">
          Blogs
        </Typography>
        <Typography variant="h4" textAlign={"center"}>
          Lastest News
        </Typography>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "4.5rem" }}>
          {[1, 2, 3, 4].map(() => {
            return (
              <div className="blog-card">
                <div className="image">
                  <img
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                    src={pic1}
                    alt="hello"
                  />
                </div>
                <div className="card-detail">
                  <Typography sx={{ fontSize: "25px", fontWeight: "550" }}>
                    What Is Thought Leadership? And When You Should Use It?
                  </Typography>
                  <div
                    className="date-icon"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "5px",
                    }}
                  >
                    <IoMdTime color="#96989B" />
                    <Typography variant="body" color="#96989B">
                      JUNE 16, 2021
                    </Typography>
                  </div>
                  <Typography variant="body">
                    Maecenas tempus, tellus eget condimentum rhoncus, sem quam
                    semper libero, sit amet adipiscing sem neque sed ipsum. Nam
                    quam nunc,...
                  </Typography>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Blog