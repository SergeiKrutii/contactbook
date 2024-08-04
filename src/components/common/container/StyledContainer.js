import styled from "styled-components";

export const StyledContainer = styled.div((props) => ({
  display: props.$devise ? "flex" : "block",
  flexWrap: props.$devise && "wrap",
  justifyContent: props.$devise && "center",
  fontFamily: "Poppins",
  color: "black",
  minHeight: 648,
  margin: "0 auto",
  maxWidth: 330,
  paddingLeft: 35,
  paddingRight: 35,
  background: "#f6f7fb",

  "@media screen  and (min-width: 768px)": {
    maxWidth: 768,
    paddingLeft: 45,
    paddingRight: 45,
    paddngTop: 40,
    minHeight: 1025,
  },

  "@media screen  and (min-width: 1000px)": {
    maxWidth: 930,
    minHeight: 790,
    padding: "0px 35px",
  },
  "@media screen  and (min-width: 1280px)": {
    maxWidth: 1210,
    minHeight: 790,
    padding: "0px 35px",
  },
}));
