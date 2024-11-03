import React from "react";
import { HomeStyle } from "./Home.style";
import { Box, Typography } from "@mui/material";

import Me from "./assets/photo_2024-05-30_00-30-13.jpg";

import TelegramIcon from "@mui/icons-material/Telegram";
import { Facebook, Instagram, LinkedIn, WhatsApp } from "@mui/icons-material";
import { Link } from "react-router-dom";

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
            <Box className="home__me-links-wrapper">
              <Link target="_blank" to={"https://t.me/+998884848833"}>
                <TelegramIcon />
              </Link>
            </Box>
            <Box className="home__me-links-wrapper">
              <Link target="_blank" to={"https://www.instagram.com/"}>
                <Instagram />
              </Link>
            </Box>
            <Box className="home__me-links-wrapper">
              <Link target="_blank" to={"https://www.linkedin.com/feed/"}>
                <LinkedIn />
              </Link>
            </Box>
            <Box className="home__me-links-wrapper">
              <Link target="_blank" to={"https://web.whatsapp.com/"}>
                <WhatsApp />
              </Link>
            </Box>
            <Box className="home__me-links-wrapper">
              <Link target="_blank" to={"https://www.facebook.com/"}>
                <Facebook />
              </Link>
            </Box>
          </Box>
        </Box>
        <Box className="home__img-wrapper">
          <img src={Me} alt="me-img" />
        </Box>
      </Box>
    </HomeStyle>
  );
};

export default Home;
