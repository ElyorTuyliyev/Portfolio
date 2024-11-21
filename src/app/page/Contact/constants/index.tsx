import {
  Email,
  GitHub,
  Instagram,
  LinkedIn,
  Phone,
  Telegram,
  WhatsApp,
} from "@mui/icons-material";

export interface ContactsType {
  title: string;
  text: string;
  icon: JSX.Element;
}

export const CONTACTS: ContactsType[] = [
  {
    title: "Tel:",
    text: "+998884838833 +998884848833",
    icon: <Phone />,
  },
  {
    title: "Linkedin:",
    text: "www.linkedin.com/in/elyor-tuyliev-614a512a4",
    icon: <LinkedIn />,
  },
  {
    title: "Telegram:",
    text: "https://t.me/Elyor_web_developer",
    icon: <Telegram />,
  },
  {
    title: "Gmail:",
    text: "tuyliyevelyor@gmail.com",
    icon: <Email />,
  },
  {
    title: "Instagram:",
    text: "frontend_developer0207",
    icon: <Instagram />,
  },
  {
    title: "GitHub:",
    text: "ElyorTuyliyev",
    icon: <GitHub />,
  },
  {
    title: "WhatsAp:",
    text: "+998884848833",
    icon: <WhatsApp />,
  },
];
