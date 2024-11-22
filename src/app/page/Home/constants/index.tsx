import React from "react";

import {
  Email,
  Facebook,
  Instagram,
  LinkedIn,
  WhatsApp,
} from "@mui/icons-material";
import TelegramIcon from "@mui/icons-material/Telegram";

export type LinkType = {
  homeIcon: any;
  link: string;
};

const links: LinkType[] = [
  {
    link: "https://t.me/+998884848833",
    homeIcon: <TelegramIcon />,
  },
  {
    link: "https://t.me/+998884848833",
    homeIcon: <Instagram />,
  },
  {
    link: "https://www.linkedin.com/feed/",
    homeIcon: <LinkedIn />,
  },
  {
    link: "https://web.whatsapp.com/",
    homeIcon: <WhatsApp />,
  },
  {
    link: "https://www.facebook.com/",
    homeIcon: <Facebook />,
  },
  {
    link: "https://mail.google.com/",
    homeIcon: <Email />,
  },
];

export default links;
