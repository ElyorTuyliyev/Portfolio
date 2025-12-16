import { Box, Typography } from "@mui/material";
import { SkillStyle } from "./skill.style";
import Card from "./components/Card";
import { CARD_TYPE } from "./constants";

const Skills = () => {
  return (
    <SkillStyle>
      <Box className="skill__wrapper">
        <Box className="skill__img-wrapper">
          {CARD_TYPE.map(({ alt, img, link }) => (
            <Card alt={alt} img={img} link={link} />
          ))}
        </Box>
      </Box>
    </SkillStyle>
  );
};

export default Skills;
