import styled from "styled-components";

export const Header1 = styled.div`
  width: 100%;
  height: 10vh;
  background-color: #b7c0cbad;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  /* opacity: 0.5; */
   @media(min-width:769px) and (max-width:1085px){
    height: 10vh;
  }
   @media(min-width:590px) and (max-width:768px){
    height: 8vh;
  }
  @media(max-width:589px){
    height: 6vh;
  }
   
`;

export const HeaderContact = styled.div`
  width: 50%;
  height: 10vh;
  display: flex;
  align-items: center;
  padding-left: 25px;

  span {
    width: 27;
    height: 39;
    top: 24px;
    left: 257px;
    opacity: 1;
  }
@media(min-width:769px) and (max-width:1085px){
   width: 70%;
      padding-left: 23px;
  }
  

   @media(min-width:590px) and (max-width:768px){
    width: 60%;
      padding-left: 18px;
  }
     @media(max-width:589px){
    width: 72%;
      padding-left: 15px;
    
  }
      @media(max-width:360px){
    width: 73%;
      padding-left: 10px;
    
  }
      
`;
export const HeaderText = styled.p`
  margin: 0 15px 0 5px;
  font-size: 16px;
  font: Inter;



  @media(min-width:769px) and (max-width:1085px){
   font-size: 15px;
    margin: 0 5px 0px 0px;
  }
   @media(min-width:590px) and (max-width:768px){
   font-size: 10px;
    margin: 0 3px 0px 0px;
  }
   @media(max-width:589px){
   font-size: 8px;
    margin: 0 3px 0px 0px;
  }
    @media(max-width:360px){
   font-size: 6px;
    margin: 0 3px 0px 0px;
    
  }
    
`;

export const HeaderSocial = styled.div`
  width: 50%;
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 100px;

  span {
    width: 36.824249267578125px;
    height: 36.999996185302734;
    color: #313d4a;
    top: 22px;
    left: 1098px;
    opacity: 1;
  }
      


  @media(min-width:769px) and (max-width:1085px){
    width: 30%;
      padding-right: 70px;
      svg {
      width: 22px;
      height: 22px;
    }
  }

       @media(min-width:590px) and (max-width:768px){
    width: 40%;
      padding-right: 1px;
      svg {
      width: 20px;
      height: 20px;
    }
  }

  @media (max-width:589px){
    width: 28%;
      padding-right: 15px;
      svg {
      width: 20px;
      height: 20px;
    }
  }
     @media(max-width:360px){
   width: 25%;
      padding-right: 15px;
      svg {
      width: 12px;
      height: 12px;
    }
    
  }
    
`;

interface MobileProps {
  isOpen: boolean;
}

export const Transparentheader = styled.div`
  background: #00000096;
  width: 100%;
  height: 12vh;
  display: flex;
  opacity: 1;
  position: relative;
  
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
  opacity: 1;
  border-radius: 5px;
  background: #6F8295;
  border: none;
  color: white;
  font-family: 'Inria Serif', serif;
  font-weight: 400;
  font-style: normal;
  font-size: 20px;
  line-height: 100%;
  letter-spacing: 0%;
  text-transform: uppercase;
  cursor: pointer;
  
  &:hover {
    opacity: 0.9;
  }
  
  @media (max-width: 589px) {
    width: 150px;
    height: 40px;
    font-size: 18px;
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