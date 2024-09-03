import { observer } from "mobx-react-lite";
import { Col, Row } from "react-bootstrap";
import { ContactCard } from "src/components/ContactCard";
import { contactStore } from "src/mobx/contact";
import { favoriteContactStore } from "src/mobx/favoriteContact";

export const FavoriteListPage = observer(() => {
  const contacts = contactStore.contact;
  const favoriteContacts = favoriteContactStore.favoriteContact;
  const list = contacts?.filter(({ id }) => favoriteContacts.includes(id));

  return (
    <Row xxl={4} className="g-4">
      {list?.map((contact) => (
        <Col key={contact.id}>
          <ContactCard contact={contact} withLink />
        </Col>
      ))}
    </Row>
  );
});
