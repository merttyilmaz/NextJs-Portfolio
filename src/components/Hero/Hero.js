import React from "react";
import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        I am Mert Yılmaz <br />
      </SectionTitle>
      <SectionText>
        I am a Full Stack Web Developer. I like dabbling in frontend and backend
        development and like to learn new technologies, play games and listen to
        music in my free time.
      </SectionText>
      <Button
        onClick={() =>
          (window.location =
            "https://drive.google.com/file/d/1jFMqxrVjGzCKYFGaZAA0y2sJ72UvvlZk/view?usp=sharing")
        }
      >
        View CV
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
