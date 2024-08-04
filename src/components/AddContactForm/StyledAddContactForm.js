import styled from "styled-components";

const StyledContactFormWrapper = styled.div`
  @media (min-width: 768px) {
    margin-right: 40px;
  }
`;
const StyledContactFormContainer = styled.div`
  padding: 35px 0px 35px 0px;

  @media (min-width: 768px) {
    padding: 0;
    position: sticky;
    top: 15px;
  }

  @media (min-width: 768px) {
    padding: 0;
    position: sticky;
    top: 15px;
  }
`;

const StyledContactForm = styled.form`
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  justify-content: center;
`;

const StyledContactInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

const StyledContactLabel = styled.label`
  padding: 0px 6px 0px 6px;
`;

const StyledContactInput = styled.input`
  width: 303px;
  border-radius: 8px;
  margin-top: 6px;
  padding: 14px 12px 14px 12px;

  @media (min-width: 768px) {
    width: 230px;
  }
  @media (min-width: 1000px) {
    width: 330px;
  }
  @media (min-width: 1280px) {
    width: 380px;
  }
`;

const StyledContactButton = styled.button`
  width: 330px;
  text-align: center;
  padding: 10px 89px 10px 88px;
  margin-top: 20px;
  border: 1px solid black;
  border-radius: 8px;
  cursor: pointer;
  font-family: Poppins;

  &:hover,
  :focus {
    background-color: #cfcecc;
  }

  @media (min-width: 768px) {
    width: 260px;
    font-size: 14px;
    padding: 10px 0px;
  }
  @media (min-width: 1000px) {
    width: 357px;
    font-size: 16px;
    font-weight: 500;
  }
  @media (min-width: 1280px) {
    width: 408px;
  }
`;

const StyledFormikError = styled.div`
  color: red;
  font-size: 14px;
  font-weight: 600;
`;

export {
  StyledContactForm,
  StyledContactInput,
  StyledContactLabel,
  StyledContactInputContainer,
  StyledFormikError,
  StyledContactFormContainer,
  StyledContactButton,
  StyledContactFormWrapper,
};
