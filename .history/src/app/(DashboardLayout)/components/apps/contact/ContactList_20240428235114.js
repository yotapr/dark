"use client"
import React, { useEffect } from "react";
import { Nav } from "reactstrap";
import { useDispatch, useSelector } from "@/store/hooks";
import {
  SelectContact,
  fetchContacts,
  deleteContactItem,
  toggleStarredContact,
} from "@/store/apps/contacts/ContactSlice";
import ContactListItem from "./ContactListItem";

const ContactList = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const [modalDelete, setModalDelete] = useState(false);

  const getVisibleContacts = (contacts, filter, contactSearch) => {
    switch (filter) {
      case "show_all":
        return contacts.filter(
          (c) =>
            !c.deleted &&
            c.companyName.toLocaleLowerCase().includes(contactSearch)
        );

      case "frequent_contact":
        return contacts.filter(
          (c) =>
            !c.deleted &&
            c.frequentlycontacted &&
            c.companyName.toLocaleLowerCase().includes(contactSearch)
        );

      case "starred_contact":
        return contacts.filter(
          (c) =>
            !c.deleted &&
            c.starred &&
            c.companyName.toLocaleLowerCase().includes(contactSearch)
        );

      case "engineering_department":
        return contacts.filter(
          (c) =>
            !c.deleted &&
            c.taxCode === "Engineering" &&
            c.companyName.toLocaleLowerCase().includes(contactSearch)
        );

      case "support_department":
        return contacts.filter(
          (c) =>
            !c.deleted &&
            c.taxCode === "Support" &&
            c.companyName.toLocaleLowerCase().includes(contactSearch)
        );

      case "sales_department":
        return contacts.filter(
          (c) =>
            !c.deleted &&
            c.taxCode === "Sales" &&
            c.companyName.toLocaleLowerCase().includes(contactSearch)
        );

      default:
        throw new Error(`Unknown filter: ${filter}`);
    }
  };
  const contacts = useSelector((state) =>
    getVisibleContacts(
      state.contactsReducer.contacts,
      state.contactsReducer.currentFilter,
      state.contactsReducer.contactSearch
    )
  );
  const active = useSelector((state) => state.contactsReducer.contactContent);
  return (
    <Nav>
      <Modal isOpen={modalDelete} toggle={() => setModalDelete(!modalDelete)}>
        <ModalHeader toggle={() => setModalDelete(!modalDelete)}>Confermi di voler cancellare?</ModalHeader>
        <ModalBody>
          <Button style={{margin: "5px"}} color="danger" onClick={() => {console.log(obj.remoteId); dispatch(deleteOfferItem(obj.remoteId,obj.id)); setModalDelete(!modalDelete)}}>       Rimuovi
          </Button>
          <Button
            color="secondary"
            className="ml-1"
            onClick={() => setModalDelete(!modalDelete)}
          >
            Annulla
          </Button>
        </ModalBody>
      </Modal>
      {contacts.map((contact,index) => (
        <ContactListItem
          key={contact.id}
          active={active}
          {...contact}
          onContactClick={() => dispatch(SelectContact(index))}
          onDeleteClick={() => dispatch(deleteContactItem((contact['@id'] ? contact['@id'] : contact.remoteId),contact.id))}
          onStarredClick={() => dispatch(toggleStarredContact(contact.id))}
        />
      ))}
    </Nav>
  );
};

export default ContactList;
