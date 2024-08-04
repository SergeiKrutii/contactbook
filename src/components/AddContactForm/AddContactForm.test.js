import { render, screen } from "@testing-library/react";
import AddContactForm from "./AddContactForm";

test("render add contact form", () => {
  render(AddContactForm);

  const firstNameInput = screen.getByLabelText(/firstName/i);
});
