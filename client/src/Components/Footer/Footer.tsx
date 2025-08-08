import React from 'react';
import {
    FooterContainer,
    FooterTop,
    FooterMain,
    FooterColumn,
    FooterTitle,
    FooterLink,
    FooterDesc,
    FooterBottom,
    Copyright,
    FooterLogo,
    FooterBtns,
    FooterBtn,
    LogoText,
    LogoImage,
    FooterLinks
} from './Footer.style';
import { FaArrowCircleUp, FaGlobe, FaRegCopyright } from 'react-icons/fa';

const Footer: React.FC = () => {
    return (
        <FooterContainer>
            <FooterTop>
                <FooterLogo>
                    <LogoText>
                        <LogoImage src="./Static/Logo.png" alt="logo" />
                        <div>
                            <h3>Made for easy</h3>
                            <p>make peoples life easy</p>
                        </div>
                    </LogoText>
                </FooterLogo>
                <FooterBtns>
                    <FooterBtn><FaArrowCircleUp /> Back to Top</FooterBtn>
                    <FooterBtn><FaGlobe /> English</FooterBtn>
                </FooterBtns>
            </FooterTop>

            <FooterMain>
                <FooterDesc>
                    Our medical website offers a seamless digital platform connecting hospitals,
                    labs, pharmacies, and patients. It simplifies healthcare through smart
                    bookings, real-time availability, and secure digital records.
                </FooterDesc>
                
                <FooterColumn>
                    <FooterTitle>About Us</FooterTitle>
                    <FooterLink>Our Team</FooterLink>
                    <FooterLink>Our Mission</FooterLink>
                    <FooterLink>Careers</FooterLink>
                </FooterColumn>
                
                <FooterColumn>
                    <FooterTitle>Connect with Us</FooterTitle>
                    <FooterLink>WhatsApp Us</FooterLink>
                    <FooterLink>LinkedIn</FooterLink>
                    <FooterLink>Instagram</FooterLink>
                    <FooterLink>Facebook</FooterLink>
                </FooterColumn>
                
                <FooterColumn>
                    <FooterTitle>Let Us help you</FooterTitle>
                    <FooterLink>Download App (iOS/Android)</FooterLink>
                    <FooterLink>FAQs</FooterLink>
                </FooterColumn>
            </FooterMain>

            <FooterBottom>
                <Copyright>
                    <FaRegCopyright /> 2025 Made For Easy all rights reserved
                </Copyright>
                <FooterLinks>
                    <FooterLink>Terms of Service</FooterLink>
                    <FooterLink>Privacy Policy</FooterLink>
                </FooterLinks>
            </FooterBottom>
        </FooterContainer>
    );
};

export default Footer;