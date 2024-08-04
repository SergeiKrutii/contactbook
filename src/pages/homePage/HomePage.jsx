import AddContactForm from "components/AddContactForm/AddContactForm";
import ContactList from "components/ContactList/ContactList";
import { useMatchMedia } from "helpers/mediaQuery";
import { StyledHomePageWrapper } from "./StyledHomePage";

const HomePage = (props) => {
  const { isDesktop, isTablet } = useMatchMedia();
  const devSize = isDesktop || isTablet;
  return devSize ? (
    <StyledHomePageWrapper>
      <AddContactForm />
      <ContactList />
    </StyledHomePageWrapper>
  ) : (
    <>
      <AddContactForm />
      <ContactList />
    </>
  );
};

export default HomePage;
