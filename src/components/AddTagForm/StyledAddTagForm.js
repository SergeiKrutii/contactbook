import styled from "styled-components";

const StyledAddTagForm = styled.form`
  display: flex;
  flex-direction: column;

  margin-top: 40px;
`;

const StyledAddTagInput = styled.input`
  border: 1px solid rgba(170, 170, 170, 1);
  border-radius: 8px;
  padding: 14px 12px;

  @media (min-width: 768px) {
    width: 400px;

    margin-right: auto;
    margin-left: auto;
  }

  @media (min-width: 1000px) {
    width: 524px;

    font-size: 14px;
    font-weight: 500;
    font-family: Poppins;
  }
`;

const StyledAddTagButton = styled.button`
  background-color: transparent;
  border: 1px solid rgba(170, 170, 170, 1);
  border-radius: 4px;
  padding: 10px 88px;
  margin-top: 24px;
  cursor: pointer;

  &:hover,
  :focus {
    background-color: #cfcecc;
  }

  @media (min-width: 768px) {
    width: 425px;

    margin-right: auto;
    margin-left: auto;
  }

  @media (min-width: 1000px) {
    width: 550px;

    font-size: 14px;
    font-family: Poppins;
    font-weight: 500;
  }
`;

export { StyledAddTagForm, StyledAddTagInput, StyledAddTagButton };
