import { Box, Button, Tooltip, Typography } from "@mui/material";
import { ContactStyle } from "./Contact.style";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { CONTACTS } from "./constants";
import { useRef, useState } from "react";

const Contact = () => {
  return (
    <ContactStyle>
      <Box>
        <Typography variant="h3" className="contact__title">
          Contacts
        </Typography>
        <Box className="contact__wrapper">
          {CONTACTS.map(({ title, text, icon }) => (
            <Box className="contact__box">
              <Box className="contact__text-box">
                <Box>{icon}</Box>
                <Box className="conatct__text-wrapper">
                  <Typography>{title}</Typography>
                  <Typography>{text}</Typography>
                </Box>
              </Box>
              <Tooltip title="copy" placement="top">
                <ContentCopyIcon />
              </Tooltip>
            </Box>
          ))}
        </Box>
      </Box>
    </ContactStyle>
  );
};

export default Contact;
