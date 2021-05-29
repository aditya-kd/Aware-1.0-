import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import {
  FooterContainer,
  FooterWrap,
  SocialIconsLink,
  SocialIcons,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
} from "./FooterElements";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/" style={{fontFamily:'monospace',color:"black"}}>Aware | Personal Wellbeing App</SocialLogo>
            <SocialIcons>
              <SocialIconsLink
                href="https://www.facebook.com/profile.php?id=100043265192641"
                target="_blank"
                aria-label="Facebook"
                rel="noopener noreferrer"
              >
                <FaFacebook style={{color:"white"}}/>
              </SocialIconsLink>
              <SocialIconsLink
                href="linkedin.com/in/shiva-mishra-a802881a2"
                target="_blank"
                aria-label="LinkedIn"
                rel="noopener noreferrer"
              >
                <FaLinkedin style={{color:"white"}} />
              </SocialIconsLink>
              <SocialIconsLink
                href="https://www.instagram.com/shivii340"
                target="_blank"
                aria-label="Instagram"
                rel="noopener noreferrer"
              >
                <FaInstagram style={{color:"white"}} />
              </SocialIconsLink>
              <SocialIconsLink
                href="https://github.com/Shivamishra21"
                target="_blank"
                aria-label="Github"
                rel="noopener noreferrer"
              >
                <FaGithub style={{color:"white"}} />
              </SocialIconsLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
