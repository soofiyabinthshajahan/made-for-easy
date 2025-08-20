import styled from "styled-components";

export const LogoSection = styled.div`
  width: 100%;
  height: auto;
  background: #fff;
  position: relative;
  margin-top:10px;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 0;

  @media (max-width: 768px) {
    padding: 0.5rem 0;
      z-index: 0;

  }

  @media (max-width: 480px) {
    padding: 0.25rem 0;
          z-index: 0;

  }
`;

export const Logo = styled.div`
  width: 62px;
  height: 70px;
  border-radius: 40%;
  background-image: url("/Static/Logo.png");
  background-size: cover;
  background-position: center;

  @media (max-width: 1024px) {
    width: 55px;
    height: 62px;
  }

  @media (max-width: 768px) {
    width: 50px;
    height: 56px;
  }

  @media (max-width: 480px) {
    width: 45px;
    height: 50px;
  }
`;
