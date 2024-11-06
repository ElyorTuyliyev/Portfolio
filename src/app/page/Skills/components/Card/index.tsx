import React from "react";
import { CardStyle } from "./Card.style";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";

type Props = {
  link: string;
  img: string;
  alt: string;
};

const Card = ({ link, img, alt }: Props) => {
  return (
    <CardStyle>
      <Link to={link} className="skill__img-box">
        <img src={img} alt={alt} />
      </Link>
    </CardStyle>
  );
};

export default Card;
