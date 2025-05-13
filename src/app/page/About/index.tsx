import React from "react";
import { Box, Typography } from "@mui/material";

import Me from "../../assets/imgs/photo_2024-05-30_00-30-13.jpg";
import { AboutStyle } from "./About.style";

const About = () => {
  return (
    <AboutStyle>
      <Box className="about__wrapper">
        <Box className="about__img-wrapper">
          <img className="about__img" src={Me} alt="me" />
        </Box>
        <Box className="about__text-wrapper">
          <Typography className="about__text">
            Motivated and detail-oriented Frontend Developer at Alitech Website
            Solutions, with hands-on experience in building responsive,
            accessible, and high-performance web applications using modern
            JavaScript technologies such as React.js, Next.js, Redux.js, and
            Webpack. Combining strong technical expertise with a solid academic
            foundation in Accounting and Financial Management, currently being
            pursued at the Samarkand Branch of Tashkent State Agrarian
            University, I offer a unique perspective that bridges technology and
            finance. Passionate about continuous learning and innovation, I
            strive to apply cutting-edge web technologies to develop scalable,
            userfocused digital solutions that solve real-world challenges and
            deliver impactful user experiences
          </Typography>
        </Box>
      </Box>
    </AboutStyle>
  );
};

export default About;
