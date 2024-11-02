import { Box, Container, Typography } from "@mui/material";
import React from "react";
import HeaderStyle from "./Hedaer.style";
import { HEADER_LINKS } from "./constants";
import { Link } from "react-router-dom";
import { ROUTE_PATHS } from "../../routes/path";
import { ROUTES } from "../../routes";

const Heder = () => {
  return (
    <Container maxWidth="lg">
      <HeaderStyle>
        <Box className="header__wrapper">
          <Typography className="header__title" variant="subtitle1">
            Portfolio
          </Typography>
          <Box className="header__links-wrapper">
            {HEADER_LINKS.map(({ title, path }) => (
              <Link to={path} className="header__links">
                {title}
              </Link>
            ))}
          </Box>
        </Box>
      </HeaderStyle>
    </Container>
  );
};

export default Heder;
