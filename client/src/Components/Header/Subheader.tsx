import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Transparentheader, 
  LogoSection, 
  Logo, 
  BrandName, 
  BrandText, 
  Slogan, 
  Navigation, 
  NavElement, 
  Navigationsection, 
  RegisterButton, 
  ContactSection,
  MobileMenuButton,
  MobileMenuIcon,
  MobileNavigation
} from './Header.styles';

const Subheader: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate=useNavigate()
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Transparentheader>
      <LogoSection>
        <Logo />
        <BrandText>
          <BrandName>Made For Easy</BrandName>
          <Slogan>Making People's life Easy</Slogan>
        </BrandText>
      </LogoSection>
      
      {/* Desktop Navigation */}
      <Navigationsection>
        <Navigation>
        <NavElement onClick={() => { 
 
  navigate('/'); 
}}>
  Home
</NavElement>

          <NavElement>About</NavElement>
          <NavElement>Service</NavElement>
          <NavElement>Career</NavElement>
          <NavElement>Team</NavElement>
          <NavElement>Contact</NavElement>
        </Navigation>
      </Navigationsection>
      
      {/* Mobile Menu Button - only visible on small screens */}
      <MobileMenuButton onClick={toggleMenu} aria-label="Toggle menu">
        <MobileMenuIcon isOpen={isMenuOpen}>
          <span></span>
          <span></span>
          <span></span>
        </MobileMenuIcon>
      </MobileMenuButton>
      
      {/* Mobile Navigation - only visible when menu is open */}
      <MobileNavigation isOpen={isMenuOpen}>
<NavElement onClick={() => { 
  toggleMenu(); 
  navigate('/'); 
}}>
  Home
</NavElement>
        <NavElement onClick={toggleMenu}>About</NavElement>
        <NavElement onClick={toggleMenu}>Service</NavElement>
        <NavElement onClick={toggleMenu}>Career</NavElement>
        <NavElement onClick={toggleMenu}>Team</NavElement>
        <NavElement onClick={toggleMenu}>Contact</NavElement>
        <RegisterButton onClick={()=>navigate('/register')}>Register</RegisterButton>
      </MobileNavigation>
      
      {/* Desktop Contact Section - hidden on mobile */}
      <ContactSection>
        <RegisterButton onClick={()=>navigate('/register')}>Register</RegisterButton>
      </ContactSection>
    </Transparentheader>
  );
};

export default Subheader;