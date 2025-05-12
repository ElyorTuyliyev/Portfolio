import styled from "@emotion/styled";
import { colors } from "@mui/material";

export const CardStyle = styled.div`
  img {
    box-shadow: 0 0 10px ${colors.blue[400]};
    height: 220px;
    width: 100%;
    border-radius: 10px;
    padding: 16px 8px;
    object-fit: contain;
  }
`;
