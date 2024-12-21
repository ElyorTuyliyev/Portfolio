import styled from "@emotion/styled";
import { colors } from "@mui/material";

export const SkillStyle = styled.main`
  .skill__title {
    color: ${colors.grey[100]};
    font-weight: 500;
    font-size: 50px;
    padding: 10px 0 20px 0;
  }

  .skill__img-wrapper {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 30px;
  }
`;
