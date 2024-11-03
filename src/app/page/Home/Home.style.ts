import styled from "@emotion/styled";
import { colors } from "@mui/material";

export const HomeStyle = styled.main`
  height: fit-content;
  .home__wrapper {
    display: flex;
    gap: 8px;
    justify-content: space-between;
    align-items: center;
    height: 89.7vh;
  }

  .home__text-intro,
  .home__me-name,
  .home__me-dev,
  .home__me-about {
    color: ${colors.grey[50]};
  }

  .home__text-intro,
  .home__me-dev {
    font-size: 40px;
    font-weight: 700;
  }

  .home__me-name {
    font-size: 50px;
    font-weight: 900;
  }

  .home__me-about {
    padding: 20px 0 18px 0;
  }

  .home__links-me {
    display: flex;
    gap: 5;
    justify-content: space-between;
    color: ${colors.grey[50]};
  }

  .home__img-wrapper {
    width: 400px;

    img {
      width: 100%;
      border-radius: 50%;
    }
  }
`;
