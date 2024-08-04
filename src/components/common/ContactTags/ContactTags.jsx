import PropTypes from "prop-types";
import {
  StyledContactCardTags,
  StyledContactCardTagsContainer,
} from "./StyledContactTags";
import { useLocation } from "react-router-dom";

const ContactTags = ({ tags }) => {
  const { pathname } = useLocation();
  const pathSegment = pathname.split("/")[1];
  return (
    <StyledContactCardTagsContainer $page={pathSegment}>
      {tags?.map((elem, idx) => (
        <StyledContactCardTags key={`${elem?.tag}${idx}`}>
          {elem?.tag}
        </StyledContactCardTags>
      ))}
    </StyledContactCardTagsContainer>
  );
};

ContactTags.propTypes = {
  tags: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      tag: PropTypes.string.isRequired,
    })
  ),
};

export default ContactTags;
