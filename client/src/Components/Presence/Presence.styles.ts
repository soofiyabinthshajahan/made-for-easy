import styled from "styled-components";
export const PanelWrapper = styled.div`
  background-color: #fff;
  border-top: 3px solid #1F488A;
  padding: 2.5rem 1rem;
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  margin-top: -10vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 10px 25px rgba(0, 0, 0, 0.15);
  position: relative; 
  z-index: 10;
  gap: 1.5rem;

  @media (max-width: 768px) {
    width: 95%;
    padding: 1.5rem 0.5rem;
    margin-top: -5vh;
    gap: 1rem;
  }
`;

export const DateField = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 150px;

  @media (max-width: 480px) {
    min-width: 120px;
  }
`;

export const IconTextWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.1rem;
  font-weight: 500;
  white-space: nowrap;

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
    flex-direction: column;
    gap: 0.2rem;
    white-space: normal;
    text-align: center;
  }
`;

export const DateInput = styled.input.attrs({ type: "date" })`
  margin-top: 0.5rem;
  padding: 0.5rem 0.75rem;
  font-size: 0.9rem;
  border: 1px solid #ccc;
  border-radius: 2px;
  width: 140px;

  @media (max-width: 480px) {
    width: 120px;
    padding: 0.4rem 0.5rem;
  }
`;

export const BookButton = styled.button`
  background-color: #2d3a45;
  color: #fff;
  font-weight: 300;
  padding: 0.75rem 1.5rem;
  border: none;
  cursor: pointer;
  border-radius: 2px;
  letter-spacing: 1px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #1f2a33;
  }

  @media (max-width: 768px) {
    padding: 0.6rem 1.2rem;
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    width: 100%;
    margin-top: 0.5rem;
  }
`;