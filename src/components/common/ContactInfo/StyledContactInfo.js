import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledContactCardLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

const StyledAvatar = styled.img`
  height: ${(props) => (props.theme.page === "contact" ? "83px" : "59px")};
  width: ${(props) => (props.theme.page === "contact" ? "83px" : "59px")};

  border-radius: 50%;
  object-fit: cover;

  margin-right: ${(props) => (props.theme.page === "contact" ? "20px" : "7px")};

  @media (min-width: 768px) {
    margin-left: 13px;
  }
  @media (min-width: 1000px) {
    /* width: 70px;
    height: 70px; */
    margin-right: 20px;
  }
  @media (min-width: 1280px) {
    width: 90px;
    height: 90px;
    margin-right: 20px;
  }
`;

const StyledContactCardInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;

  margin-bottom: ${(props) =>
    props.theme.page === "contact" ? "20px" : "10px"};

  @media (min-width: 1000px) {
    align-items: flex-start;
  }
`;

const StyledContactCardContacts = styled.div`
  min-width: 176px;
  font-family: Poppins;
  font-weight: 400;

  @media (min-width: 768px) {
    min-width: 210px;
  }
  @media (min-width: 1000px) {
    font-size: 18px;
    width: 390px;
    font-weight: 500;
  }
  @media (min-width: 1280px) {
    font-size: 19px;
  }
`;
const StyledContactCardNames = styled.div`
  min-width: 176px;

  overflow-wrap: break-word;

  @media (min-width: 768px) {
    overflow-wrap: normal;
    min-width: 220px;
  }
`;
const StyledContactCardEmail = styled.div`
  width: 176px;

  overflow-wrap: break-word;

  @media (min-width: 768px) {
    width: 100%;
    overflow-wrap: normal;
  }
`;

export {
  StyledAvatar,
  StyledContactCardContacts,
  StyledContactCardInfo,
  StyledContactCardLink,
  StyledContactCardNames,
  StyledContactCardEmail,
};
