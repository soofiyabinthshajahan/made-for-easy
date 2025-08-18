import styled from "styled-components";

export const FooterContainer = styled.footer`
  background: #2c3e50;
  color: #fff;
  font-family: "Segoe UI", sans-serif;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const FooterTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
  flex-wrap: wrap;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center; /* 👈 center looks cleaner */
    text-align: center;
  }
`;

export const LogoText = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
  text-align: left;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

export const LogoImage = styled.img`
  height: 70px;
  width: 70px;
  border-radius: 50%;
  object-fit: cover;

  @media (max-width: 480px) {
    height: 60px;
    width: 60px;
  }
`;

export const FooterLogo = styled.div`
  h3 {
    margin: 0;
    font-size: clamp(1rem, 2vw, 1.4rem);
    font-weight: 500;
    color: #fff;
  }

  p {
    font-size: clamp(0.8rem, 1.5vw, 0.95rem);
    color: #ccc;
    margin-top: 0.2rem;
  }
`;

export const FooterDesc = styled.p`
  font-size: clamp(0.8rem, 1.5vw, 0.95rem);
  color: #aab1b8;
  max-width: 350px;
  line-height: 1.6;
  margin: 0;

  @media (max-width: 768px) {
    max-width: 100%;
    margin-bottom: 1.5rem;
    text-align: center;
  }
`;

export const FooterBtns = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;

  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
    margin-top: 1rem;
    flex-wrap: wrap;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 0.75rem;
  }
`;

export const FooterBtn = styled.button`
  background: #7f8c8d;
  border: none;
  padding: 0.7rem 1.4rem;
  color: #fff;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: background 0.3s, transform 0.2s;
  border-radius: 6px;
  font-size: clamp(0.8rem, 1.6vw, 0.9rem);

  &:hover {
    background: #95a5a6;
    transform: translateY(-2px);
  }

  @media (max-width: 480px) {
    width: 100%;
    justify-content: center;
  }
`;

export const FooterMain = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 2rem 2rem;
  gap: 2rem;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 1.5rem;
  }
`;

export const FooterColumn = styled.div`
  flex: 1;
  min-width: 200px;

  @media (max-width: 768px) {
    min-width: 100%;
  }
`;

export const FooterTitle = styled.h4`
  font-size: clamp(0.9rem, 1.6vw, 1rem);
  margin-bottom: 1rem;
  color: #fff;
  font-weight: 600;
`;

export const FooterLink = styled.p`
  font-size: clamp(0.8rem, 1.5vw, 0.9rem);
  margin: 0.5rem 0;
  cursor: pointer;
  color: #bdc3c7;
  transition: all 0.3s;

  &:hover {
    color: #fff;
    text-decoration: underline;
    transform: translateX(3px);
  }
`;

export const FooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  border-top: 1px solid #444;
  margin-top: 1rem;
  padding: 1.5rem 2rem;
  font-size: clamp(0.75rem, 1.4vw, 0.85rem);
  color: #aaa;
  background-color: #1f2429;
  align-items: center;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

export const Copyright = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

export const FooterLinks = styled.div`
  display: flex;
  gap: 1.5rem;

  @media (max-width: 480px) {
    justify-content: center;
    gap: 1rem;
    width: 100%;
  }
`;
