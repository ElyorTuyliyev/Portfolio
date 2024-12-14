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
    color: ${colors.grey[50]};
    font-size: 24px;
    font-weight: 600;
  }

  .header__links-wrapper {
    display: flex;
    gap: 32px;
  }

  .header__links {
    color: ${colors.grey[50]};
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    text-decoration: none;
  }

  .header__link-active {
    border: 2px solid red;
    padding: 5px 10px;
    border-radius: 8px;
  }
`;

export default HeaderStyle;
