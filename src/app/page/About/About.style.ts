import styled from "@emotion/styled";
import { colors } from "@mui/material";

export const AboutStyle = styled.div`
  .about__wrapper {
    width: 1005;
    display: flex;
    gap: 18px;
    align-items: center;
    justify-content: space-between;
  }

  .about__img-wrapper {
    flex: 1;
    img {
      max-width:400px;
      width: 100%;
      border-radius: 50%;
      border-radius: 50%;
      box-shadow: 0 0 500px ${colors.blue[500]};
    }
  }

  .about__text-wrapper {
    flex: 1;
  }
  

  .about__text {
    line-height: 30px;
    color: ${colors.grey[50]};
    font-size: 18px;
  }

  @media screen and (max-width:1000px) {
    .about__wrapper   {
      flex-direction: column;
    }
  }
`;
