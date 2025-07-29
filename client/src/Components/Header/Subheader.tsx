import React from 'react'
import { Transparentheader, LogoSection, Logo, BrandName, BrandText, Slogan, Navigation, NavElement, Navigationsection, RegisterButton, ContactSection } from './Header.styles'

function Subheader() {
    return (
        <Transparentheader>
            <LogoSection>
                <Logo />
                <BrandText>
                    <BrandName>Made For Easy</BrandName>
                    <Slogan>Making People's life Easy</Slogan>

                </BrandText>
            </LogoSection>
            <Navigationsection>
                <Navigation>
                    <NavElement> Home</NavElement>
                    <NavElement>About</NavElement>
                    <NavElement>Service</NavElement>
                    <NavElement>Team</NavElement>
                    <NavElement>Contact</NavElement>
                </Navigation>
            </Navigationsection>
            <ContactSection>
                <RegisterButton>Register</RegisterButton>

            </ContactSection>
        </Transparentheader>
    )
}

export default Subheader
