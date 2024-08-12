import PropTypes from "prop-types";
import { StyledContainer } from "./StyledContainer";
import { useMatchMedia } from "helpers/mediaQuery";

const Container = ({ children }) => {
  const { isMobile } = useMatchMedia();

  return (
    <>
      <StyledContainer $devise={isMobile}>{children}</StyledContainer>
    </>
  );
};

Container.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Container;
