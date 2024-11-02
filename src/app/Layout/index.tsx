import Header from "../components/Header";
import { Box } from "@mui/material";
import { LayouteStyle } from "./Layoute.style";
import { LayoutProps } from "../types";
import { HEADER_LINKS } from "../components/Header/constants";

const Layoute = ({ children }: LayoutProps) => {
  return (
    <LayouteStyle>
      <Header links={HEADER_LINKS} />
      <Box className="main">{children}</Box>
    </LayouteStyle>
  );
};

export default Layoute;
