import styled from "styled-components";

export const PanelWrapper = styled.div`
  background-color: #fff;
  border-top: 3px solid #1F488A;
  padding: 2.5rem 1rem;
  width: 80%;
  margin: 0 auto;
  margin-top: -10vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  box-shadow: 0px 10px 25px rgba(0, 0, 0, 0.15);
  position: relative; 
  z-index: 10;
  gap: 1rem;
`;



export const DateField = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const IconTextWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.25rem;
  font-weight: 500;
`;

export const DateInput = styled.input.attrs({ type: "date" })`
  margin-top: 0.5rem;
  padding: 0.5rem 0.75rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 2px;
  width: 140px;
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

  &:hover {
    background-color: #1f2a33;
  }
`;