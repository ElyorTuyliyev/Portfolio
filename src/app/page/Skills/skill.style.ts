import styled from "@emotion/styled";
import { colors } from "@mui/material";

export const SkillStyle = styled.main`
  .skill__title {
    color: ${colors.grey[100]};
    font-weight: 500;
    font-size: 50px;
    padding: 10px 0;
  }

  .skill__img-wrapper {
    display: flex;
  }

  .skill__img-box {
    max-width: 200px;
    box-shadow: 0 0 10px ${colors.blue[400]};
    border-radius: 10px;
    padding: 16px 8px;
    img {
      width: 100%;
    }
  }
`;
