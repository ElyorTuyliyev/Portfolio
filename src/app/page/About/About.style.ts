import styled from "@emotion/styled";
import { colors } from "@mui/material";

export const AboutStyle = styled.div`
  .about__wrapper {
    display: flex;
    gap: 18px;
    align-items: center;
    justify-content: space-between;
  }

  .about__img {
    border-radius: 8px;
  }

  .about__text {
    line-height: 30px;
    color: ${colors.grey[50]};
    font-size: 18px;
  }
`;
