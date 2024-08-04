export const extractValues = (fields) => {
  const firstNameField = fields["first name"]?.[0]?.value;
  const lastNameField = fields["last name"]?.[0]?.value;
  const emailField = fields["email"]?.[0]?.value;

  if (!firstNameField || !lastNameField || !emailField) {
    return false;
  }

  const firstName = firstNameField ? firstNameField : null;
  const lastName = lastNameField ? lastNameField : null;
  const email = emailField ? emailField : null;

  return { firstName, lastName, email };
};
