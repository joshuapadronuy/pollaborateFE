import styled from "styled-components";

export const StyledMenuItemContainer = styled.div`
  padding: 10px;
  margin: 10px;
  color: white;
  background-color: ${({ isSelected }) =>
    isSelected ? "var(--accent100)" : "var(--accent300)"};
  box-shadow: ${({ isSelected }) =>
    isSelected ? "5px 5px var(--dark100)" : "5px 10px var(--dark100)"};
  cursor: pointer;
  font-size: ${({ fontSize }) => fontSize};

  &:hover {
    background-color: ${({ isSelected }) =>
      isSelected ? "var(--accent100)" : "var(--accent400)"};
  }
`;
