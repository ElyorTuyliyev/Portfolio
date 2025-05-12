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
  .home__me-dev,
  .home__text-dev {
    font-size: 40px;
    font-weight: 700;
    display: flex;
    gap: 8px;
  }

  .home__text-dev {
    font-weight: 800;
    color: ${colors.blue[500]};
  }
  .home__me-name {
    font-size: 50px;
    font-weight: 900;
  }

  .home__me-about {
    padding: 20px 0 18px 0;
    font-size: 20px;
  }

  .home__links-me {
    display: flex;
    gap: 32px;
    padding: 20px 0 0 0;
    color: ${colors.grey[50]};
    a {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 5px;
      border-radius: 50%;
      border: 3px solid ${colors.blue[300]};
      color: ${colors.blue[400]};
      box-shadow: 0 0 5 px #2196f3;
    }
  }

  .home__img-wrapper {
    width: 400px;
    img {
      box-shadow: 0 0 500px ${colors.blue[500]};
      width: 100%;
      border-radius: 50%;
    }
  }

  .home__btn {
    margin-top: 24px;
    text-transform: capitalize;
    border-radius: 12px;
    box-shadow: 0 0 10px #2196f3;
    a {
      text-decoration: none;
      color: ${colors.grey[50]};
    }
    :hover {
      box-shadow: 0 0 11px #2196f3;
    }
  }
`;
