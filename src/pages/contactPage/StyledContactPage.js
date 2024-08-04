import styled from "styled-components";

const StytledContactPageWrapper = styled.div`
  width: 100%;
  padding-top: 40px;

  @media (min-width: 768px) {
    margin-left: auto;
    margin-right: auto;

    width: 550px;
  }
  @media (min-width: 1000px) {
    margin-left: auto;
    margin-right: auto;

    width: 550px;
  }
`;

const StytledContactPageH2 = styled.h2`
  font-size: 16px;
  margin-bottom: 12px;

  @media (min-width: 768px) {
  }
`;

export { StytledContactPageWrapper, StytledContactPageH2 };
