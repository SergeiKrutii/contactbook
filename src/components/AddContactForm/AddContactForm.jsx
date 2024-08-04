import { useFormik } from "formik";
import * as Yup from "yup";
import { useAddContactMutation } from "../../redux/contacts/contactsApiSlice";
import {
  StyledContactForm,
  StyledContactInput,
  StyledContactLabel,
  StyledContactInputContainer,
  StyledFormikError,
  StyledContactFormContainer,
  StyledContactButton,
  StyledContactFormWrapper,
} from "./StyledAddContactForm";

const AddContactForm = (props) => {
  const [addContact] = useAddContactMutation();

  const CreateContactschema = Yup.object().shape({
    firstName: Yup.string()
      .max(10, "Ім'я повинно бути не більше 10 символів")
      .required("Обов'язкове поле"),
    lastName: Yup.string()
      .max(10, "Фамілія повинна бути не більше 10 символів")
      .required("Обов'язкове поле"),
    email: Yup.string()
      .email("Не корректна почтова адресса")
      .matches(/(\.com|\.net)$/, "Обов'язково має бути .com або .net")
      .required("Обов'язкове поле"),
  });
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
    validationSchema: CreateContactschema,
    onSubmit: async (values) => {
      const contactData = {
        fields: {
          "first name": [
            { value: values.firstName, modifier: "", label: "first name" },
          ],
          "last name": [
            { value: values.lastName, modifier: "", label: "last name" },
          ],
          email: [{ value: values.email, modifier: "", label: "email" }],
        },
      };

      try {
        await addContact(contactData);
      } catch (error) {
        console.log(error);
      }

      formik.resetForm();
    },
  });

  return (
    <StyledContactFormWrapper>
      <StyledContactFormContainer>
        <h2>Create Contact</h2>
        <StyledContactForm
          data-testid={"contactform"}
          onSubmit={formik.handleSubmit}
        >
          <StyledContactInputContainer>
            <StyledContactLabel htmlFor="firstName">
              First Name
            </StyledContactLabel>
            <StyledContactInput
              data-testid={"firstName"}
              type="text"
              id="firstName"
              name="firstName"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.firstName}
            />
            {formik.touched.firstName && formik.errors.firstName ? (
              <StyledFormikError>{formik.errors.firstName}</StyledFormikError>
            ) : null}
          </StyledContactInputContainer>
          <StyledContactInputContainer>
            <StyledContactLabel htmlFor="lastName">
              Last Name
            </StyledContactLabel>
            <StyledContactInput
              type="text"
              id="lastName"
              name="lastName"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.lastName}
            />
            {formik.touched.lastName && formik.errors.lastName ? (
              <StyledFormikError>{formik.errors.lastName}</StyledFormikError>
            ) : null}
          </StyledContactInputContainer>
          <StyledContactInputContainer>
            <StyledContactLabel htmlFor="email">Email</StyledContactLabel>
            <StyledContactInput
              type="email"
              id="email"
              name="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
              <StyledFormikError>{formik.errors.email}</StyledFormikError>
            ) : null}
          </StyledContactInputContainer>
          <StyledContactButton
            type="submit"
            disabled={!(formik.isValid && formik.dirty)}
          >
            Add Contact
          </StyledContactButton>
        </StyledContactForm>
      </StyledContactFormContainer>
    </StyledContactFormWrapper>
  );
};

export default AddContactForm;
