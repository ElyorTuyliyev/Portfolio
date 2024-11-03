import Header from "../components/Header";
import { Box, Container } from "@mui/material";
import { LayouteStyle } from "./Layoute.style";
import { LayoutProps } from "../types";
import { HEADER_LINKS } from "../components/Header/constants";

const Layoute = ({ children }: LayoutProps) => {
  return (
    <LayouteStyle>
      <Header links={HEADER_LINKS} />
      <Container maxWidth="lg">
        <Box className="main">{children}</Box>
      </Container>
    </LayouteStyle>
  );
};

export default Layoute;
