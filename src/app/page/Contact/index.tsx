import { Box, Tooltip, Typography } from "@mui/material";
import { ContactStyle } from "./Contact.style";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { CONTACTS } from "./constants";

const Contact = () => {
  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
    } catch (err) {
      console.error("Failed to copy!", err);
    }
  };

  return (
    <ContactStyle>
      <Box>
        <Box className="contact__wrapper">
          {CONTACTS.map(({ title, text, icon }, index) => (
            <Box className="contact__box" key={index}>
              <Box className="contact__text-box">
                <Box>{icon}</Box>
                <Box className="contact__text-wrapper">
                  <Typography>{title}</Typography>
                  <Typography>{text}</Typography>
                </Box>
              </Box>
              <Tooltip title="Copy" placement="top">
                <Box
                  onClick={() => copyToClipboard(text)}
                  style={{ cursor: "pointer" }}
                  aria-label={`Copy ${title} to clipboard`}
                >
                  <ContentCopyIcon />
                </Box>
              </Tooltip>
            </Box>
          ))}
        </Box>
      </Box>
    </ContactStyle>
  );
};

export default Contact;
