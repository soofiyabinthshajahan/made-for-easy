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
`;

export const Icon = styled.div`
  font-size: 48px;
  color: #3b414dff;
  margin-bottom: 16px;
`;

export const Title = styled.h3`
  font-family: Inter;
  font-weight: 700;
  /* font-style: Bold; */
  font-size: 22.11px;
  line-height: 100%;
  letter-spacing: 0%;
  color: black;
`;

export const Description = styled.p`
  font-size: 14px;
  color: #4b5563;
  line-height: 1.5;
  margin-bottom: 16px;
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
  }
`;

export const LearnMoreButton = styled.button`
  display: flex;
  align-items: center;
  background-color: #374151;
  color: white;
  border: none;
  padding: 8px 16px;
  font-size: 14px;
  font-weight: 500;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s ease;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  align-self: flex-start;
  margin-left: 55px;

  &:hover {
    background-color: #1f2937;
  }

  svg {
    margin-left: 8px;
    width: 16px;
    height: 16px;
  }
`;

export const SectionWrapper = styled.div`
  position: relative;
  width: 100%;
  /* max-width: 1400px; */
  margin: 0 auto;
  /* padding: 0 16px; */
`;

export const DisplaySection = styled.div`
  position: relative;
  overflow: hidden;
  padding: 32px 0;
`;

export const CardsContainer = styled.div`
  display: flex;
  overflow-x: auto;
  scroll-behavior: smooth;
  padding: 0 48px;
  gap: 0;
  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
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
`;
