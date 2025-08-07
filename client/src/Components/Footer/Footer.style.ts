import styled from "styled-components";

export const FooterContainer = styled.footer`
  background: #2c3e50;
  color: #fff;
  /* padding: 2rem 2rem 0 0rem; */
  font-family: "Segoe UI", sans-serif;
  display: flex;
  flex-direction: column;
`;

export const FooterTop = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center; /* This aligns logo and buttons on same line */
  padding: 1rem;
`;


export const LogoText = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
`;

export const FooterLogo = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  gap: 1rem;

  img {
    height: 90px;
    width: 80px;
    border-radius: 50%;
  }

  h3 {
    margin: 0;
    font-size: 1.4rem;
    font-weight: 300;
    color: #fff;
  }

  p {
    font-size: 0.9rem;
    color: #ccc;
    margin-top: 0.2rem;
  }
`;

export const FooterDesc = styled.p`
  font-size: 0.9rem;
  color: #aab1b8;
  max-width: 350px;
`;

export const FooterBtns = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  align-items: flex-end;
`;

export const FooterBtn = styled.button`
  background: #7f8c8d;
  border: none;
  padding: 1rem 1.75rem;
  color: #fff;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: background 0.3s;

  &:hover {
    background: #95a5a6;
  }
`;

export const FooterMain = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  padding:2rem ;
`;

export const FooterSection = styled.div`
  min-width: 180px;
`;

export const FooterTitle = styled.h4`
  font-size: 1rem;
  margin-bottom: 1rem;
`;

export const FooterLink = styled.p`
  font-size: 0.9rem;
  margin: 0.3rem 0;
  cursor: pointer;
  color: #bdc3c7;

  &:hover {
    color: #fff;
    text-decoration: underline;
  }
`;

export const FooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  border-top: 1px solid #444;
  margin-top: 2rem;
  padding: 1rem 1.5rem;
  font-size: 0.8rem;
  color: #aaa;
  background-color: #1f2429;
`;

export const Copyright = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
`;

export const Servicepolicy = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;
