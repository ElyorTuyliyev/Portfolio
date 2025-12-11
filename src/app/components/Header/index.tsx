import { Box, Container } from "@mui/material";
import HeaderStyle from "./Header.style";
import { HEADER_LINKS } from "./constants";
import { Link } from "react-router-dom";
import { HeaderProps } from "../../types";
import { ROUTE_PATHS } from "../../routes/path";
import GradientText from "../../Animation/Gradiant-text";

const Header = ({}: HeaderProps) => {
  return (
    <Container maxWidth="lg">
      <HeaderStyle>
        <Box className="header__wrapper">
          <Link className="header__title" to={ROUTE_PATHS.HOME}>
            <GradientText
              colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
              animationSpeed={3}
              showBorder={false}
              className="custom-class"
            >
              Portfolio
            </GradientText>
          </Link>
          <Box className="header__links-wrapper">
            {HEADER_LINKS.map(({ title, path }) => (
              <Link to={path} className="header__links  header__link-active">
                {title}
              </Link>
            ))}
          </Box>
        </Box>
      </HeaderStyle>
    </Container>
  );
};

export default Header;
