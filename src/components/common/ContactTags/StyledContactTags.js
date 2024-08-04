import styled from "styled-components";

const StyledContactCardTagsContainer = styled.div`
  display: grid;
  min-width: 150px;
  max-width: ${(props) => (props.$page === "contact" ? "300px" : "180px")};
  grid-template-columns: ${(props) =>
    props.$page === "contact" ? "1fr  1fr 1fr 1fr " : "1fr 1fr 1fr"};
  grid-row-gap: 5px;
  grid-column-gap: 5px;
  font-weight: 500;
  font-size: 13px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(5, 1fr);
    margin-top: 20px;
    font-size: 14px;
    max-width: ${(props) => (props.$page === "contact" ? "550px" : "auto")};
  }
  @media (min-width: 1000px) {
    grid-template-columns: repeat(7, 1fr);
  }
`;

const StyledContactCardTags = styled.p`
  text-align: center;
  background-color: rgba(166, 166, 166, 1);
  border-radius: 4px;
  cursor: pointer;
`;

export { StyledContactCardTags, StyledContactCardTagsContainer };
