"use client"
import React from "react";
import { Form, Input, Button, Modal, ModalHeader } from "reactstrap";
import { useDispatch, useSelector } from "@/store/hooks";
import { SearchContact } from "@/store/apps/providers/ProviderSlice";
import ContactAdd from "./ContactAdd";




const ContactSearch = () => {
  const [modal, setModal] = React.useState(false);
  const searchTerm = useSelector(
    (state) => state.contactsReducer.contactSearch
  );
  
  const toggle = () => {
    setModal(!modal);
  };

  const dispatch = useDispatch();

  return (
    <>
    <div className="p-3 border-bottom">
    <Button color="danger" block onClick={toggle}>
      Add New Contact
    </Button>
    </div>
    <div className="p-3 border-bottom d-flex">
      <Form className="flex-grow-1">
        <Input
          className="form-control mb-2"
          id="searchUser"
          name="searchUser"
          type="text"
          onChange={(e) => dispatch(SearchContact(e.target.value))}
          value={searchTerm}
          placeholder="Search Contact..."
        />
      </Form>
    </div>
    {/***********Contact Add Box**************/}
    <Modal isOpen={modal} toggle={toggle} size="md">
        <ModalHeader toggle={toggle}>Add Contact</ModalHeader>
        <ContactAdd click={toggle} />
      </Modal>
      {/***********Contact Add Box End**************/}
    </>
  );
};

export default ContactSearch;
