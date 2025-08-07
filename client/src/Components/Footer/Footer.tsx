import React from 'react';
import {
    FooterContainer,
    FooterTop,
    FooterMain,
    FooterSection,
    FooterTitle,
    FooterLink,
    FooterDesc,
    FooterBottom,
    Copyright,
    FooterLogo,
    FooterBtns,
    FooterBtn,
    LogoText,
    Servicepolicy
} from './Footer.style';
import { FaArrowCircleUp, FaGlobe, FaRegCopyright } from 'react-icons/fa';

const Footer: React.FC = () => {
    return (
        <FooterContainer>
            <FooterTop>
                <FooterLogo>
                    <LogoText>
                        <img src="./Static/Logo.png" alt="logo" />
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
                <FooterSection>
                    <FooterTitle>About Us</FooterTitle>
                    <FooterLink>Our Team</FooterLink>
                    <FooterLink>Our Mission</FooterLink>
                    <FooterLink>How It Works</FooterLink>
                    <FooterLink>Careers</FooterLink>
                    <FooterLink>Press & Media</FooterLink>
                </FooterSection>
                <FooterSection>
                    <FooterTitle>Connect with Us</FooterTitle>
                    <FooterLink>Contact Support</FooterLink>
                    <FooterLink>WhatsApp Us</FooterLink>
                    <FooterLink>LinkedIn</FooterLink>
                    <FooterLink>Instagram</FooterLink>
                    <FooterLink>Facebook</FooterLink>
                    <FooterLink>Newsletter Signup</FooterLink>
                </FooterSection>
                <FooterSection>
                    <FooterTitle>Let Us help you</FooterTitle>
                    <FooterLink>Book a Test</FooterLink>
                    <FooterLink>Locate a Lab / Pharmacy</FooterLink>
                    <FooterLink>Download App (iOS/Android)</FooterLink>
                    <FooterLink>FAQs</FooterLink>
                </FooterSection>
            </FooterMain>

            <FooterBottom>
                <Copyright>
                    <FaRegCopyright /> 2025 Made For Easy all rights reserved
                </Copyright>
                <Servicepolicy>
                    <FooterLink>Terms of Service</FooterLink>
                    <FooterLink>Privacy Policy</FooterLink>
                </Servicepolicy>
            </FooterBottom>
        </FooterContainer>
    );
};

export default Footer;
