"use client"
import React, { useEffect,useState } from "react";
import { 
  Nav,
  Modal,
  ModalHeader,
  ModalBody,
  Button,
  NavItem
} from "reactstrap";
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

  const [contactDelete, setContactDelete] = useState(false);

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
          <Button style={{margin: "5px"}} color="danger" onClick={() => {dispatch(deleteContactItem((contactDelete['@id'] ? contactDelete['@id'] : contactDelete.remoteId),contactDelete.id)); setModalDelete(!modalDelete)}}>       Rimuovi
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
          onDeleteClick={() => { setContactDelete(contact); setModalDelete(!modalDelete)}}
          onStarredClick={() => dispatch(toggleStarredContact(contact.id))}
        />
      ))}
      <NavItem
        className={`w-100}`}
      >
        <div
          className="d-flex align-items-center p-3 mb-1 mx-2"
        >
          <Button className="d-lg-none d-md-block openCloseBtn" color="danger">
            <i className={`bi}`} />
          </Button>
        </div>
      </NavItem>
    </Nav>
  );
};

export default ContactList;
