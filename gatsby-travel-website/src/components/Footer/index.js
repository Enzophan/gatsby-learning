import React from 'react'
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaLinkedin } from 'react-icons/fa'
import { FooterContainer, SocialMedia, SocialMediaWrap, SocialLogo, WebsiteRights, SocialIcon, SocialIcons, SocialIconLink } from './FooterElements'


const Footer = () => {
    return (
        <FooterContainer>
            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo>
                        <SocialIcon />
                        EXPLOR
                    </SocialLogo>
                    <WebsiteRights>
                        EXPLOR {new Date().getFullYear()}
                    </WebsiteRights>
                    <SocialIcons>
                        <SocialIconLink
                            href="/"
                            target="_blank"
                            aria-label="Facebook"
                        >
                            <FaFacebook />
                        </SocialIconLink>
                        <SocialIconLink
                            href="/"
                            target="_blank"
                            aria-label="Instagram"
                        >
                            <FaInstagram />
                        </SocialIconLink>
                        <SocialIconLink
                            href="/"
                            target="_blank"
                            aria-label="Youtube"
                            rel="noopener noreferrer"
                        >
                            <FaYoutube />
                        </SocialIconLink>
                        <SocialIconLink
                            href="/"
                            target="_blank"
                            aria-label="Twitter"
                        >
                            <FaTwitter />
                        </SocialIconLink>
                        <SocialIconLink
                            href="/"
                            target="_blank"
                            aria-label="LinkedIn"
                        >
                            <FaLinkedin />
                        </SocialIconLink>
                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterContainer>
    )
}

export default Footer