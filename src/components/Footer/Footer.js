import React from "react";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillRedditCircle,
  AiFillCustomerService,
} from "react-icons/ai";

import { SocialIcons } from "../Header/HeaderStyles";
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from "./FooterStyles";

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:0539-980-47-25">0539-980-47-25</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:myyilmaz97@gmail.com">
            myyilmaz97@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Getting better every day!</Slogan>
        </CompanyContainer>
        <SocialIcons>
          <SocialIcons href="https://github.com/merttyilmaz/">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.linkedin.com/in/mert-y%C4%B1lmaz-37356a13a/">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.instagram.com/mert.yilmazz00/">
            <AiFillInstagram size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.reddit.com/user/RigorMortis00/">
            <AiFillRedditCircle size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://open.spotify.com/user/11132579546">
            <AiFillCustomerService size="3rem" />
          </SocialIcons>
        </SocialIcons>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
