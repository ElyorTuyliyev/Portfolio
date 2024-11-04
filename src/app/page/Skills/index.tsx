import { Box, Typography } from "@mui/material";
import React from "react";
import { SkillStyle } from "./skill.style";

import htmlImg from "./assets/html-img.png";
import { Link } from "react-router-dom";

const Skills = () => {
  return (
    <SkillStyle>
      <Box className="skill__wrapper">
        <Typography variant="h2" className="skill__title">
          Skills
        </Typography>

        <Box className="skill__img-wrapper">
          <Link
            to={"https://www.w3schools.com/html/default.asp"}
            className="skill__img-box"
          >
            <img src={htmlImg} alt="html-img" />
          </Link>
        </Box>
      </Box>
    </SkillStyle>
  );
};

export default Skills;
