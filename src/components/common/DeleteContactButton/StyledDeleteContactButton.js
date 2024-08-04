import styled from "styled-components";

const StyledContactCardDeleteButton = styled.button`
  width: 24px;
  height: 24px;
  border: none;
  padding: 0;
  margin-bottom: 22px;
  cursor: pointer;

  &:hover,
  &:focus {
    fill: red;
  }

  @media (min-width: 768px) {
    width: 30px;
    height: 30px;
    margin-bottom: 0px;
  }
  @media (min-width: 1000px) {
    width: 35px;
    height: 35px;
  }
`;

export { StyledContactCardDeleteButton };
