import styled from "@emotion/styled";
import { colors } from "@mui/material";

const HeaderStyle = styled.header`
  .header__wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px 0;
  }

  .header__title {
    /* color: ${colors.grey[50]}; */
    font-size: 24px;
    font-weight: 600;
  }

  .header__links-wrapper {
    display: flex;
    gap: 32px;
  }

  .header__links {
    /* color: ${colors.grey[50]}; */
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    text-decoration: none;
  }
`;

export default HeaderStyle;
