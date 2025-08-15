import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start; /* align to top instead of center */
  min-height: 100vh;
  background: #f9f9f7;
  padding: 9px 20px; /* more top padding for breathing space */
`;


export const FormWrapper = styled.div`
  background: #e5e7eb;
  padding: 50px;
  border-radius: 12px;
  width: 100%;
  max-width: 700px;
  display: flex;
  flex-direction: column;
  gap: 18px;

  /* Tablet adjustments */
  @media (max-width: 768px) {
    padding: 40px;
    max-width: 500px;
  }

  /* Mobile adjustments */
  @media (max-width: 480px) {
    padding: 20px;
    gap: 14px;
    max-width: 100%;
  }
`;

export const Option = styled.div`
  background: transparent;
  border: 2px solid #5e5b5bff;
  border-radius: 50px;
  padding: 14px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  transition: border 0.2s ease-in-out;

  &:hover {
    border-color: #9ca1a7ff;
  }

  @media (max-width: 480px) {
    padding: 14px 16px; /* smaller tap area for mobile */
  }
`;

export const Label = styled.label`
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 600;
  font-size: 1.04rem;
  text-transform: capitalize;
  cursor: pointer;

  @media (max-width: 480px) {
    font-size: 0.95rem;
  }
`;

export const RadioInput = styled.input`
  accent-color: #1f2937;
  width: 22px;
  height: 22px;
  cursor: pointer;

  @media (max-width: 480px) {
    width: 18px;
    height: 18px;
  }
`;

export const ConfirmButton = styled.button`
  background: #1f2937;
  color: white;
  border: none;
  border-radius: 50px;
  padding: 16px;
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
  margin-top: 14px;
  transition: background 0.2s ease-in-out;

  &:hover {
    background: #111827;
  }

  @media (max-width: 480px) {
    padding: 14px;
    font-size: 16px;
  }
`;
