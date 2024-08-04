import PropTypes from "prop-types";
import { StyledContactCardContainer } from "./StyledContactCard";
import ContactInfo from "components/common/ContactInfo";
import DeleteContactButton from "components/common/DeleteContactButton";
import { extractValues } from "helpers/extractValues";

const ContactCard = ({ fields, avatar, tags, contactId }) => {
  const { firstName, lastName, email } = extractValues(fields);

  return (
    <StyledContactCardContainer>
      <ContactInfo
        contactId={contactId}
        avatar={avatar}
        firstName={firstName}
        lastName={lastName}
        email={email}
        tags={tags}
      />
      <DeleteContactButton contactId={contactId} />
    </StyledContactCardContainer>
  );
};

ContactCard.propTypes = {
  avatar: PropTypes.string.isRequired,
  contactId: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      tag: PropTypes.string.isRequired,
    })
  ),
  fields: PropTypes.shape({
    email: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string.isRequired,
        modifier: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired,
        is_primary: PropTypes.bool.isRequired,
      })
    ),
  }),
};

export default ContactCard;
