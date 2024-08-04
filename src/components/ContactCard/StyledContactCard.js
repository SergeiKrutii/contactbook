import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledContactCardLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

const StyledContactCardContainer = styled.li`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  background-color: #f0f0f0;
  width: 100%;
  min-height: 97px;

  padding: 11px 11px 18px 8px;
  margin-bottom: 14px;

  &:last-child {
    margin-bottom: 0;
  }

  @media (min-width: 768px) {
    flex-wrap: nowrap;
    width: auto;
    justify-content: space-between;
  }
  @media (min-width: 1000px) {
    width: auto;
  }
`;

export { StyledContactCardLink, StyledContactCardContainer };
