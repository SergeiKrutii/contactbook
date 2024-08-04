import PropTypes from "prop-types";
import SpriteIcon from "../spriteIcon/SpriteIcon";
import { StyledContactCardDeleteButton } from "./StyledDeleteContactButton";
import { useDeleteContactMutation } from "../../../redux/contacts/contactsApiSlice";

const DeleteContactButton = ({ contactId }) => {
  const [deleteContact] = useDeleteContactMutation();
  return (
    <StyledContactCardDeleteButton
      type="button"
      onClick={() => deleteContact(contactId)}
    >
      <SpriteIcon name={"icon-DeleteImg"} />
    </StyledContactCardDeleteButton>
  );
};

DeleteContactButton.propTypes = {
  contactId: PropTypes.string.isRequired,
};

export default DeleteContactButton;
