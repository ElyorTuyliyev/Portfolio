import htmlImg from "../assets/html-img.png";
import cssImg from "../assets/css-img.png";
import sassImg from "../assets/sass-img.png";
import gitHubImg from "../assets/github-img.png";
import jsImg from "../assets/js-img.png";
import reactImg from "../assets/react-img.png";
import typeImg from "../assets/typscript-img.png";

export type Card = {
  img: string;
  alt: string;
  link: string;
};

export const CARD_TYPE: Card[] = [
  {
    img: htmlImg,
    alt: "html",
    link: "https://www.w3schools.com/html/default.asp",
  },
  {
    img: cssImg,
    alt: "css",
    link: "https://www.w3schools.com/css/default.asp",
  },
  {
    img: sassImg,
    alt: "sass",
    link: "https://www.w3schools.com/sass/default.asp",
  },
  {
    img: gitHubImg,
    alt: "html",
    link: "https://github.com/",
  },
  {
    img: jsImg,
    alt: "html",
    link: "https://www.w3schools.com/js/default.asp",
  },
  {
    img: reactImg,
    alt: "html",
    link: "https://www.w3schools.com/react/default.asp",
  },
  {
    img: typeImg,
    alt: "html",
    link: "https://www.w3schools.com/typescript/index.php",
  },
];
