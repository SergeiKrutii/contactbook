import ContactCard from "components/ContactCard";
import { useGetContactsQuery } from "../../redux/contacts/contactsApiSlice";
import { StyledContactList } from "./StyledContactList";

const ContactList = (props) => {
  const { data } = useGetContactsQuery();

  const filteredData = data?.resources.filter((contact) => {
    if (
      !contact?.fields["first name"] ||
      !contact?.fields["last name"] ||
      !contact?.fields.email
    ) {
      return false;
    }
    return contact;
  });

  return (
    <StyledContactList>
      <h2>Contacts</h2>
      {filteredData?.map((contact) => {
        return (
          <ContactCard
            key={`${contact?.id}`}
            fields={contact?.fields}
            avatar={contact?.avatar_url}
            tags={contact?.tags}
            contactId={contact?.id}
          />
        );
      })}
    </StyledContactList>
  );
};

export default ContactList;
