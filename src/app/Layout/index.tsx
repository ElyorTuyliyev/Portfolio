import Header from "../components/Header";
import { Box, Container } from "@mui/material";
import { HEADER_LINKS } from "../components/Header/constants";
import { LayoutProps } from "../types";
import { LayoutStyle } from "./Layoute.style";

const Layout = ({ children }: LayoutProps) => {
  return (
    <LayoutStyle>
      <Header links={HEADER_LINKS} />
      <Container maxWidth="lg">
        <Box className="main">{children}</Box>
      </Container>
    </LayoutStyle>
  );
};

export default Layout;
