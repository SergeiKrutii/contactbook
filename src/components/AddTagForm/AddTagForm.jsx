import PropTypes from "prop-types";
import { useFormik } from "formik";
import { useAddTagsMutation } from "../../redux/contacts/contactsApiSlice";
import {
  StyledAddTagForm,
  StyledAddTagInput,
  StyledAddTagButton,
} from "./StyledAddTagForm";

const AddTagForm = ({ contactId, tags, handleRefetch }) => {
  const [addNewTags] = useAddTagsMutation();
  const existTags = tags;

  const formik = useFormik({
    initialValues: {
      tags: [],
    },

    onSubmit: async ({ tags }) => {
      const tagsArray = tags.split(" ");

      const newTags = {
        id: contactId,
        newTag: [...existTags, ...tagsArray],
      };

      try {
        await addNewTags(newTags);
        handleRefetch();
        formik.resetForm();
      } catch (error) {
        console.log(error);
      }
    },
  });
  return (
    <StyledAddTagForm onSubmit={formik.handleSubmit}>
      <StyledAddTagInput
        type="text"
        name="tags"
        id="tags"
        placeholder="Add new Tag"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      <StyledAddTagButton
        type="submit"
        disabled={!(formik.isValid && formik.dirty)}
      >
        Add Tag
      </StyledAddTagButton>
    </StyledAddTagForm>
  );
};

AddTagForm.propTypes = {
  contactId: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      tag: PropTypes.string.isRequired,
    })
  ),
  handleRefetch: PropTypes.func.isRequired,
};

export default AddTagForm;
