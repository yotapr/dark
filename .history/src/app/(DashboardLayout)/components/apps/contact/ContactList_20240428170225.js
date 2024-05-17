"use client"
import React, { useEffect } from "react";
import { Nav } from "reactstrap";
import { useDispatch, useSelector } from "@/store/hooks";
import {
  SelectContact,
  fetchContacts,
  DeleteContact,
  toggleStarredContact,
} from "@/store/apps/contacts/ContactSlice";
import ContactListItem from "./ContactListItem";

const ContactList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

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
      console.log(contacts))
      {contacts.map((contact) => (
        <ContactListItem
          key={contact.id}
          active={active}
          {...contact}
          onContactClick={() => alert(contact.id)//dispatch(SelectContact(contact.id))
          }
          onDeleteClick={() => dispatch(DeleteContact(contact.id))}
          onStarredClick={() => dispatch(toggleStarredContact(contact.id))}
        />
      ))}
    </Nav>
  );
};

export default ContactList;
