import React from "react";
import { Box, Typography } from "@mui/material";

import Me from "../../assets/imgs/photo_2024-05-30_00-30-13.jpg";
import { AboutStyle } from "./About.style";

const About = () => {
  return (
    <AboutStyle>
      <Box className="about__wrapper">
        <Box className="about__img-wrapper">
          <img className="about__img" src={Me} alt="me-img" />
        </Box>
        <Box className="about__text-wrapper">
          <Typography className="about__text">
            I am a motivated and detail-oriented Junior Frontend Developer with
            hands-on experience in building responsive, high-performance, and
            user-friendly web applications. I have strong skills in HTML, CSS,
            SASS, JavaScript, TypeScript, React, Next.js, Redux Toolkit, and
            version control with Git and GitHub, with a solid understanding of
            component-based architecture, state management, and adaptive UI
            design. My focus is on writing clean, scalable, and maintainable
            code that delivers seamless user experiences.
          </Typography>
        </Box>
      </Box>
    </AboutStyle>
  );
};

export default About;
