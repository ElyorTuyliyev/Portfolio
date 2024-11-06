import styled from "@emotion/styled";
import { colors } from "@mui/material";

export const ContactStyle = styled.div`
  .contact__title {
    color: ${colors.grey[50]};
    font-weight: 600;

    padding: 10px 0 20px 0;
  }

  .contact__wrapper {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 32px;
  }

  .contact__box {
    padding: 16px;
    border: 1px solid ${colors.blue[400]};
    border-radius: 8px;
    color: ${colors.grey[50]};
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
  }

  .contact__text-box {
    display: flex;
    gap: 8px;
    align-items: center;
    justify-content: center;
  }

  .conatct__text-wrapper {
    display: flex;
    gap: 8px;
  }
`;
