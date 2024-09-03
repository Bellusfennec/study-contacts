import { observer } from "mobx-react-lite";
import { Col, Row } from "react-bootstrap";
import { GroupContactsCard } from "src/components/GroupContactsCard";
import { groupContactStore } from "src/mobx/groupContact";

export const GroupListPage = observer(() => {
  const groupContactsState = groupContactStore.groupContact;

  return (
    <Row xxl={4}>
      {groupContactsState?.map((groupContacts) => (
        <Col key={groupContacts.id}>
          <GroupContactsCard groupContacts={groupContacts} withLink />
        </Col>
      ))}
    </Row>
  );
});
