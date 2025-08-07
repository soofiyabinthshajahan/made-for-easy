import styled from "styled-components";

export const HomePage = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  background-image: url("/Static/HomePage.jpg");
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  overflow: visible;   // This is critical
  z-index: 1;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #0000005e;
    z-index: 2;
  }

  > * {
    position: relative;
    z-index: 3;
  }
`;



export const Intro = styled.div`
  width:100%;
  height:35vh;
  padding: 3%;

`
export const IntroHeading = styled.h1`
  color: white ;
  font-size: 30px;
  font-family: Kaisei Decol;
font-weight: lighter;
font-size: 50px;
line-height: 60px;
letter-spacing: 0%;

`


export const Introtext = styled.p`
  color: white;
  letter-spacing: 1.5px;
 
  font-weight: 400;
  font-style: normal;
  font-size: 18px;
  line-height: 25px;
  white-space: pre-line;
  overflow: hidden;
  display: inline-block;
  width: 70vw;           
  min-width: 70vw;      
`;


export const ExploreButton = styled.div`
  width: 450px;
  height: 80px;
  opacity: 1;
  background-color: #00000091;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute; 
  top: 75%;           
  left: 50%;          
  transform: translate(-50%, -50%); 
  z-index: 3; 
border: 4px solid white;
  font-family: Kanit;
font-weight: 400;
font-style: Regular;
font-size: 20.8px;
line-height: 100%;
letter-spacing: 0%;
text-transform: uppercase;

`;


export const IntroVideoButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
margin-left: 83%;
  padding: 8px;
  border: 2px solid white;
  border-radius: 50px;
  background-color: transparent;
  color: white;
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;

  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

export const PlayCircle = styled.div`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  border: 2px solid white;
  display: flex;
  align-items: center;
  justify-content: center;
`;
