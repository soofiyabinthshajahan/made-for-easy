import styled from "styled-components";

export const CardContainer = styled.div`
  background-color: #e5e7eb;
  border-radius: 8px;
  padding: 24px;
  width: 360px;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  margin: 0 8px;
  flex-shrink: 0;

  @media (max-width: 768px) {
    width: 300px;
    padding: 20px;
  }

  @media (max-width: 480px) {
     width: 380px;
    padding: 16px;
  }
`;

export const Icon = styled.div`
  font-size: 48px;
  color: #3b414dff;
  margin-bottom: 16px;

  @media (max-width: 768px) {
    font-size: 40px;
  }
`;

export const Title = styled.h3`
  font-family: Inter;
  font-weight: 700;
  font-size: 22.11px;
  line-height: 100%;
  letter-spacing: 0%;
  color: black;
  text-transform: capitalize;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

export const Description = styled.p`
  font-size: 14px;
  color: #4b5563;
  line-height: 1.5;
  margin-bottom: 16px;

  @media (max-width: 768px) {
    font-size: 13px;
  }
`;

export const BulletList = styled.ul`
  list-style: none;
  padding-left: 0;
  margin-bottom: 24px;

  li {
    position: relative;
    padding-left: 20px;
    margin-bottom: 8px;
    font-size: 14px;
    color: #000;
    line-height: 1.4;

    &::before {
      content: "";
      position: absolute;
      left: 0;
      top: 8px;
      width: 8px;
      height: 8px;
      background-color: #6788f3ff;
      border-radius: 50%;
    }

    @media (max-width: 768px) {
      font-size: 13px;
    }
  }
`;

export const LearnMoreButton = styled.button`
  display: flex;
  align-items: center;
  background-color: #374151;
  color: white;
  border: none;
  padding: 10px 16px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s ease;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  align-self: flex-start;
  margin-left: 0;

  &:hover {
    background-color: #1f2937;
  }

  svg {
    margin-left: 8px;
    width: 16px;
    height: 16px;
  }

  @media (max-width: 768px) {
    padding: 8px 12px;
    font-size: 13px;
  }
`;

export const SectionWrapper = styled.div`
  position: relative;
  width: 100%;
  margin: 15px auto;
`;

export const DisplaySection = styled.div`
  position: relative;
  overflow: hidden;
  padding: 32px 0;

  @media (max-width: 768px) {
    padding: 24px 0;
  }
`;

export const CardsContainer = styled.div`
  display: flex;
  overflow-x: auto;
  scroll-behavior: smooth;
  padding: 0 48px;
  gap: 16px;
  scrollbar-width: none;
  -ms-overflow-style: none;
  scroll-snap-type: x mandatory;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 768px) {
    padding: 0 24px;
    gap: 12px;
    scroll-padding: 0 24px;
  }

  @media (max-width: 480px) {
    padding: 0 16px;
    gap: 8px;
    scroll-padding: 0 16px;
  }
`;

export const NavButton = styled.button<{
  direction: "left" | "right";
  disabled?: boolean;
}>`
  position: absolute;
  ${({ direction }) => (direction === "left" ? "left: 0" : "right: 0")};
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: #4b5563;
  border: none;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  transition: all 0.2s ease;

  &:hover {
    background: #374151;
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    background: #9ca3af;
  }

  svg {
    width: 24px;
    height: 24px;
  }

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
    
    svg {
      width: 20px;
      height: 20px;
    }
  }

  @media (max-width: 480px) {
    width: 36px;
    height: 36px;
    display: ${({ disabled }) => (disabled ? 'none' : 'flex')};
  }
`;