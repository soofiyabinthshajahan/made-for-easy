import styled from "styled-components";

export const CEOSection = styled.section`
  background-color: #6f7d8bff;
  padding: 4rem 2rem;
  display: flex;
  justify-content: center;
`;

export const CEOContainer = styled.div`
  max-width: 1200px;
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 2rem;
  position: relative;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const CEOImageWrapper = styled.div`
  position: relative;
  width: 40%;
  min-width: 250px;
  display: flex;
  justify-content: center;
  padding-top: 125px;

  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
    margin-bottom: 2rem;
  }
`;

export const CEOImage = styled.img`
  width: 220px;
  height: 220px;
  border-radius: 4px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.2);
`;

export const CEOContent = styled.div`
  width: 60%;
  color: white;
  font-family: "Segoe UI", sans-serif;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const CEOTitle = styled.h2`
  font-size: 34px;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

export const CEOText = styled.p`
  font-size: 18px;
  line-height: 1.6;
  margin-bottom: 1rem;
`;

export const CEOSignature = styled.p`
  margin-top: 2rem;
  font-size: 25px;
  font-weight: 500;

  span {
    font-size: 20px;
    font-weight: 400;
    color: "#646264OEF";
    margin-left: 15px;
  }
`;
