import React from "react";
import { HomeStyle } from "./Home.style";
import { Box, Button, Typography } from "@mui/material";

import Me from "./assets/photo_2024-05-30_00-30-13.jpg";

import { Link } from "react-router-dom";
import links from "./constants";

const Home = () => {
  return (
    <HomeStyle>
      <Box className="home__wrapper">
        <Box className="home__text-wrapper">
          <Typography className="home__text-intro">Hello it's me </Typography>
          <Typography className="home__me-name">Elyor To'yliyev</Typography>
          <Typography className="home__me-dev">
            And I am Frontend developer
          </Typography>
          <Typography className="home__me-about">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed,
            veritatis!
          </Typography>
          <Box className="home__links-me">
            {links.map(({ homeIcon, link }) => (
              <Box className="home__me-links-wrapper">
                <Link target="_blank" to={link}>
                  {homeIcon}
                </Link>
              </Box>
            ))}
          </Box>
          <Button className="home__btn" variant="contained">
            Download Pdf
          </Button>
        </Box>
        <Box className="home__img-wrapper">
          <img src={Me} alt="me-img" />
        </Box>
      </Box>
    </HomeStyle>
  );
};

export default Home;
