import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 80%;
  margin: 2rem auto;
  background: #f2f2f2;
  border-radius: 8px;
  overflow: hidden;
`;

export const LeftSection = styled.div`
  flex: 1;
  background: #fff;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.5rem;
`;

export const FeatureItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
`;

export const FeatureIcon = styled.div`
  margin-top: 15px;
  color: #374151;
`;

export const FeatureText = styled.div`
  strong {
    font-size: 1.25rem;
    color: #000;
  }

  p {
    font-size: 0.9rem;
    color: #555;
    margin: 0.3rem 0 0;
  }
`;

export const RightSection = styled.div`
  /* flex: 1; */
  background: #e5e5e5;
  padding: 2rem;
  height: 80vh;
  width: 40%;
`;

export const Title = styled.h2`
  margin-bottom: 0.5rem;
  font-size: 2rem;
  color: #111827;
  text-align: center;
  font-weight: 700;
`;

export const Subtitle = styled.p`
  margin-bottom: 1.5rem;
  font-size: 1rem;
  color: #6b7280;
  text-align: center;
  margin-bottom: 50px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Input = styled.input`
  padding: 0.75rem 1rem;
  border: 2px solid #3b4464ff;
  background: #fff;
  font-size: 0.95rem;
  margin-bottom: 15px;
`;

export const SubmitButton = styled.button`
  padding: 0.75rem 1rem;
  background: #2d3b4fff;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    background: #111827;
  }
`;
