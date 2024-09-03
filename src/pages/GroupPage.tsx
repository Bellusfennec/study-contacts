import { observer } from "mobx-react-lite";
import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { ContactCard } from "src/components/ContactCard";
import { Empty } from "src/components/Empty";
import { GroupContactsCard } from "src/components/GroupContactsCard";
import { contactStore } from "src/mobx/contact";
import { groupContactStore } from "src/mobx/groupContact";
import { ContactDto } from "src/types/dto/ContactDto";
import { GroupContactsDto } from "src/types/dto/GroupContactsDto";

export const GroupPage = observer(() => {
  const contactsState = contactStore.contact;
  const groupContactsState = groupContactStore.groupContact;
  const { groupId } = useParams<{ groupId: string }>();
  const [contacts, setContacts] = useState<ContactDto[]>([]);
  const [groupContacts, setGroupContacts] = useState<GroupContactsDto>();

  useEffect(() => {
    const findGroup = groupContactsState?.find(({ id }) => id === groupId);
    setGroupContacts(findGroup);
    setContacts(() => {
      if (findGroup) {
        return contactsState?.filter(({ id }) => findGroup.contactIds.includes(id)) || [];
      }
      return [];
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [groupId]);

  return (
    <Row className="g-4">
      {groupContacts ? (
        <>
          <Col xxl={12}>
            <Row xxl={3}>
              <Col className="mx-auto">
                <GroupContactsCard groupContacts={groupContacts} />
              </Col>
            </Row>
          </Col>
          <Col>
            <Row xxl={4} className="g-4">
              {contacts.map((contact) => (
                <Col key={contact.id}>
                  <ContactCard contact={contact} withLink />
                </Col>
              ))}
            </Row>
          </Col>
        </>
      ) : (
        <Empty />
      )}
    </Row>
  );
});
