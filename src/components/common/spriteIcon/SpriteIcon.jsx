import PropTypes from "prop-types";
import sprite from "images/sprite-icon.svg";
import { StyledSvg } from "./StyledSpriteIcon";
import { useMatchMedia } from "helpers/mediaQuery";

const SpriteIcon = ({ name, ...props }) => {
  let iconStyles = {};
  const { isTablet, isDesktop } = useMatchMedia();
  const devSize = isTablet || isDesktop;

  switch (name) {
    case "icon-AccountImg":
      iconStyles = {
        height: "49px",
        width: "49px",
        marginRight: "12px",
      };
      break;
    case "icon-DeleteImg":
      iconStyles = {
        height: devSize ? "35px" : "24px",
        width: devSize ? "35px" : "24px",
      };
      break;
    case "icon-arrow_back":
      iconStyles = {
        height: "20px",
        width: "20px",
      };
      break;

    default:
      break;
  }

  return (
    <StyledSvg style={{ ...iconStyles }} {...props}>
      <use xlinkHref={`${sprite}#${name}`} />
    </StyledSvg>
  );
};

SpriteIcon.propTypes = {
  name: PropTypes.string.isRequired,
};

export default SpriteIcon;
