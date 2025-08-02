import styled from "styled-components";

export const Header1 = styled.div`
  width: 100%;
  height: 10vh;
  background-color: #b7c0cbad;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  /* opacity: 0.5; */
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
`;
export const HeaderText = styled.p`
  margin: 0 15px 0 5px;
  font-size: 16px;
  font: Inter;
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
`;

export const Transparentheader = styled.div`
  background: #00000096;
  width: 100%;
  height: 12vh;
  display: flex;
  opacity: 1;
`;

export const LogoSection = styled.div`
  width: auto;
  padding: 0 2.5%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const Logo = styled.div`
  width: 60px;
  height: 60px;
  top: 96px;
  left: 64px;
  opacity: 1;

  background-image: url("/Static/Logo.png");
  border-radius: 50%;
  background-position: center center;
  background-size: contain;
`;
export const BrandText = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  padding: 0 15px;
  font-size: 25px;
  font-weight: 400;
`;

export const BrandName = styled.text`
  color: white;
`;
export const Slogan = styled.text`
  color: #ada9a9;
  font-size: 15px;
  font: Inria Serif;
`;
export const Navigationsection = styled.div`
  width: 40%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Navigation = styled.ul`
  display: flex;
  align-items: center;
  column-gap: 80px;
  list-style: none;
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

`
export const RegisterButton = styled.button`
  width: 175px;
  height: 45px;
  opacity: 1;
  border-radius: 5px;
  background: #6F8295;
  border: none;
  color: white;
 font-family: Inria Serif;
font-weight: 400;
font-style: Regular;
font-size: 20px;
line-height: 100%;
letter-spacing: 0%;
text-transform: uppercase;
`;
