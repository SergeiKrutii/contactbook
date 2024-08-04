import PropTypes from "prop-types";
import {
  StyledContactCardInfo,
  StyledContactCardContacts,
  StyledContactCardLink,
  StyledAvatar,
  StyledContactCardNames,
  StyledContactCardEmail,
} from "./StyledContactInfo";
import { useLocation } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import ContactTags from "../ContactTags";

const ContactInfo = ({
  avatar,
  firstName,
  lastName,
  email,
  contactId,
  tags,
}) => {
  const { pathname } = useLocation();
  const pathSegment = pathname.split("/")[1];

  return (
    <ThemeProvider theme={{ page: pathSegment }}>
      <StyledContactCardLink to={`/contact/${contactId}`}>
        <StyledContactCardInfo>
          <StyledAvatar src={avatar} alt="avatar" />
          <StyledContactCardContacts>
            <StyledContactCardNames>{`${firstName} ${lastName}`}</StyledContactCardNames>
            <StyledContactCardEmail>{email}</StyledContactCardEmail>
            <ContactTags tags={tags} />
          </StyledContactCardContacts>
        </StyledContactCardInfo>
      </StyledContactCardLink>
    </ThemeProvider>
  );
};

ContactInfo.propTypes = {
  avatar: PropTypes.string.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  contactId: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      tag: PropTypes.string.isRequired,
    })
  ),
};

export default ContactInfo;
