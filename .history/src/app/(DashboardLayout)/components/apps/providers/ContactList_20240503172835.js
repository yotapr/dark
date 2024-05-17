"use client"
import React, { useEffect,useState } from "react";
import { 
  Nav,
  Modal,
  ModalHeader,
  ModalBody,
  Button,
  NavItem,
  Input
} from "reactstrap";
import { useDispatch, useSelector } from "@/store/hooks";
import {
  SelectContact,
  fetchContacts,
  deleteContactItem,
  toggleStarredContact,
  addContactsPage,
  searchContacts
} from "@/store/apps/providers/ProviderSlice";
import ContactListItem from "./ContactListItem";
import ContactAdd from "./ContactAdd";

const ContactList = () => {
  const dispatch = useDispatch();
  
  const [modalAdd, setModalAdd] = React.useState(false);
  
  const toggleAdd = () => {
    setModalAdd(!modalAdd);
  };

  const [modalDelete, setModalDelete] = useState(false);

  const [contactDelete, setContactDelete] = useState(false);

  const [page, setPage] = useState(1);

  const searchTerm = useSelector(
    (state) => state.contactsReducer.contactSearch
  );

  useEffect(() => {
    if (page === 1) dispatch(searchContacts(page,searchTerm))
      else dispatch(addContactsPage(page,searchTerm));
  }, [page]);

  /*const getVisibleContacts = (contacts, filter, contactSearch) => {
    console.log(contacts)
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
  };*/
  const contacts = useSelector((state) => state.contactsReducer.contacts)
  /*const contacts = useSelector((state) =>
    getVisibleContacts(
      state.contactsReducer.contacts,
      state.contactsReducer.currentFilter,
      state.contactsReducer.contactSearch
    )
  );*/
  const active = useSelector((state) => state.contactsReducer.contactContent);
  const totalPage = useSelector((state) => state.contactsReducer.totalPage);
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
      <Modal isOpen={modalAdd} toggle={toggleAdd} size="md">
          <ModalHeader toggle={toggleAdd}>Add Contact</ModalHeader>
          <ContactAdd click={toggleAdd} />
        </Modal>
      <NavItem
        className={`w-100}`}
      >
        <div
          className="d-flex align-items-center p-3 mb-1 mx-2"
        >
          <Input
            className="form-control mb-2"
            id="searchUser"
            name="searchUser"
            type="text"
            onChange={(e) => {dispatch(searchContacts(page,e.target.value)); setPage(1);}}
            value={searchTerm}
            placeholder="Search Contact..."
          />
        </div>
        <div className="p-3 border-bottom">
          <Button color="danger" block onClick={toggleAdd}>
            Add New Provider
          </Button>
        </div>
      </NavItem>
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
        { page < totalPage &&
          <Button color="primary" onClick={() => {page < totalPage && alert(page + 1); page < totalPage && setPage(page + 1)}}>
            Vedi altri...
          </Button> }
        </div>
      </NavItem>
    </Nav>
  );
};

export default ContactList;
