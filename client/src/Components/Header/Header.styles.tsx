import styled from "styled-components";


interface MobileProps {
  isOpen: boolean;
}

export const Transparentheader = styled.div`
  background: #00000096;
  width: 100%;
  height: 12vh;
  display: flex;
  opacity: 1;
  // position: fixed; /* Changed from relative to fixed */
  top: 0; /* Ensure it sticks to the top */
  left: 0; /* Ensure it sticks to the left */
  z-index: 10;

  @media (max-width: 1024px) {
    height: 10vh;
    justify-content: space-between;
  }
`;

export const LogoSection = styled.div`
  width: auto;
  padding: 0 2.5%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  
  @media (max-width: 589px) {
    padding: 0 1.5%;
  }
`;

export const Logo = styled.div`
  width: 60px;
  height: 60px;
  opacity: 1;
  background-image: url("/Static/Logo.png");
  border-radius: 50%;
  background-position: center center;
  background-size: contain;
  
  @media (max-width: 589px) {
    width: 55px;
    height: 55px;
    margin-top: 10px;
  }
`;

export const BrandText = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  padding: 0 15px;
  font-size: 25px;
  font-weight: 400;
  
  @media (max-width: 589px) {
    width: 200px;
    font-size: 20px;
    padding: 1px 10px;
  }
`;

export const BrandName = styled.span`
  color: white;
`;

export const Slogan = styled.span`
  color: #ada9a9;
  font-size: 15px;
  font-family: 'Inria Serif', serif;
  
  @media (max-width: 589px) {
    font-size: 13px;
  }
`;

export const Navigationsection = styled.div`
  width: 40%;
  display: flex;
  align-items: center;
  justify-content: center;
  
  @media (max-width: 1024px) {
    display: none;
  }
`;

export const Navigation = styled.ul`
  display: flex;
  align-items: center;
  column-gap: 80px;
  list-style: none;
  
  @media (max-width: 1200px) {
    column-gap: 40px;
  }
`;

export const NavElement = styled.li`
  color: white;
  font-size: 18px;
  font-weight: lighter;
  cursor: pointer;
  display: inline-block;

  &:hover {
    text-decoration: underline;
  }
`;

export const ContactSection = styled.div`
  width: 30%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 2.5%;
  
  @media (max-width: 1024px) {
    display: none;
  }
`;

export const RegisterButton = styled.button`
  width: 175px;
  height: 45px;
  border-radius: 5px;
  background: #6f8295;
  border: none;
  color: white;
  font-family: "Inria Serif", serif;
  font-weight: 400;
  font-size: 20px;
  line-height: 100%;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    opacity: 0.9;
  }

  /* 📱 Medium screens */
  @media (max-width: 768px) {
    width: 160px;
    height: 42px;
    font-size: 18px;
  }

  /* 📱 Small screens */
  @media (max-width: 589px) {
    width: 140px;
    height: 38px;
    font-size: 16px;
  }

  /* 📱 Very small (mobile portrait) */
  @media (max-width: 400px) {
    width: 120px;
    height: 35px;
    font-size: 14px;
  }
`;

export const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0 20px;
  z-index: 100;
  
  @media (max-width: 1024px) {
    display: block;
  }
`;

export const MobileMenuIcon = styled.div<MobileProps>`
  width: 30px;
  height: 20px;
  position: relative;
  transform: rotate(0deg);
  transition: .5s ease-in-out;
  
  span {
    display: block;
    position: absolute;
    height: 3px;
    width: 100%;
    background: white;
    border-radius: 3px;
    opacity: 1;
    left: 0;
    transform: rotate(0deg);
    transition: .25s ease-in-out;
    
    &:nth-child(1) {
      top: ${props => props.isOpen ? '9px' : '0px'};
      transform: ${props => props.isOpen ? 'rotate(135deg)' : 'none'};
    }
    
    &:nth-child(2) {
      top: 9px;
      opacity: ${props => props.isOpen ? '0' : '1'};
    }
    
    &:nth-child(3) {
      top: ${props => props.isOpen ? '9px' : '18px'};
      transform: ${props => props.isOpen ? 'rotate(-135deg)' : 'none'};
    }
  }
`;

export const MobileNavigation = styled.div<MobileProps>`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 90vh;
    padding-top:45px;

  background: #000000e6;
  flex-direction: column;
  align-items: center;
  // justify-content: center;
  z-index: 99;
  transition: all 0.3s ease;
  transform: ${props => props.isOpen ? 'translateX(0)' : 'translateX(-100%)'};
  
  ${NavElement} {
    margin: 15px 0;
    font-size: 24px;
  }
  
  ${RegisterButton} {
    margin-top: 30px;
  }
  
  @media (max-width: 1024px) {
    display: flex;
  }
`;