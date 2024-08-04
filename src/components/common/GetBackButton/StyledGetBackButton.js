import styled from "styled-components";

const StyledGetBackButton = styled.button`
  width: 25px;
  height: 25px;

  padding: 0;
  border-radius: 8px;
  margin-right: 25px;

  background-color: transparent;
  border: 1px solid rgba(170, 170, 170, 1);
  cursor: pointer;

  &:hover,
  &:focus {
    fill: red;
  }
`;

export { StyledGetBackButton };
