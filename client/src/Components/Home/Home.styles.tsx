import styled from "styled-components";

export const HomePage = styled.div`
  width: 100%;
  height: 100vh;
  min-height: 600px;
  position: relative;
  background-image: url("/Static/HomePage.jpg");
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  overflow: visible;
  z-index: 1;

  @media (max-width: 768px) {
    height: auto;
    min-height: 60vh;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #0000005e;
    // z-index: 2;
  }

  > * {
    position: relative;
    // z-index: 2;
  }
`;

export const Intro = styled.div`
  width: 100%;
  height: 35vh;
  padding: 3%;
  position: relative;

  @media (max-width: 1024px) {
    height: 40vh;
  }

  @media (max-width: 768px) {
    height: auto;
    min-height: 50vh;
    padding-bottom: 40px;
  }
`;

export const IntroHeading = styled.h1`
  color: white;
  font-family: Kaisei Decol;
  font-weight: lighter;
  font-size: 50px;
  line-height: 60px;
  letter-spacing: 0%;
  margin-bottom: 10px;

  @media (max-width: 1024px) {
    font-size: 40px;
    line-height: 50px;
  }

  @media (max-width: 768px) {
    font-size: 32px;
    line-height: 40px;
    margin-top: 20px;
  }
`;

export const IntroSubheading = styled.h2`
  color: white;
  font-family: Kaisei Decol;
  font-weight: lighter;
  font-size: 30px;
  line-height: 40px;
  letter-spacing: 0%;
  margin-bottom: 20px;

  @media (max-width: 1024px) {
    font-size: 25px;
    line-height: 35px;
  }

  @media (max-width: 768px) {
    font-size: 20px;
    line-height: 30px;
  }
`;

export const Introtext = styled.p`
  color: white;
  letter-spacing: 1.5px;
  font-weight: 400;
  font-style: normal;
  font-size: 18px;
  line-height: 25px;
  white-space: pre-line;
  width: 70%;
  max-width: 800px;
  margin-bottom: 30px;

  @media (max-width: 1024px) {
    width: 80%;
    font-size: 16px;
  }

  @media (max-width: 768px) {
    width: 100%;
    font-size: 15px;
    line-height: 22px;
  }
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

  @media (max-width: 1024px) {
    display: none;
  }
`;

export const IntroVideoButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 8px 20px;
  border: 2px solid white;
  border-radius: 50px;
  background-color: transparent;
  color: white;
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  position: absolute;
  margin-top:50px;
  right: 3%;
  top: 0;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }

  @media (max-width: 1024px) {
    position: relative;
    right: auto;
    top: auto;
    margin-top: 20px;
    align-self: flex-end;
  }

  @media (max-width: 768px) {
    font-size: 16px;
    padding: 6px 16px;
    margin-top: 20px;
    align-self: flex-start;
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

  @media (max-width: 768px) {
    width: 35px;
    height: 35px;
  }
`;