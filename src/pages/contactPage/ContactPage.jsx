import { useParams } from "react-router-dom";
import { useGetContactInfoQuery } from "../../redux/contacts/contactsApiSlice";
import ContactInfo from "components/common/ContactInfo";
import ContactTags from "components/common/ContactTags";
import { extractValues } from "helpers/extractValues";
import GetBackButton from "components/common/GetBackButton";
import AddTagForm from "components/AddTagForm";
import {
  StytledContactPageWrapper,
  StytledContactPageH2,
} from "./StyledContactPage";

const ContactPage = (props) => {
  const { contactId } = useParams();

  const { data, isFetching, refetch } = useGetContactInfoQuery(contactId);

  const filteredData = data?.resources.filter((contact) => {
    if (
      contact.fields["first name"] === undefined ||
      contact.fields["last name"] === undefined ||
      contact.fields.email === undefined
    ) {
      return false;
    }
    return contact;
  });

  if (isFetching || !filteredData) {
    return <div>Loading...</div>;
  }

  const {
    firstName = "",
    lastName = "",
    email = "",
  } = extractValues(filteredData[0]?.fields);

  return (
    <StytledContactPageWrapper>
      <div style={{ display: "flex" }}>
        <GetBackButton />
        <ContactInfo
          contactId={contactId}
          avatar={filteredData[0]?.avatar_url}
          firstName={firstName}
          lastName={lastName}
          email={email}
        />
      </div>
      <StytledContactPageH2>Tags</StytledContactPageH2>
      <ContactTags tags={data?.resources[0].tags} />
      <AddTagForm
        contactId={contactId}
        tags={data?.resources[0].tags2}
        handleRefetch={refetch}
      />
    </StytledContactPageWrapper>
  );
};

export default ContactPage;
