"use client";
import React, { useState, useEffect } from "react";
import ReactTable from "react-table-v6";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import "react-table-v6/react-table.css";
import * as data from "@/app/api/table/ReacTableData";
import BreadCrumbs from "@/app/(DashboardLayout)/layouts/breadcrumbs/BreadCrumbs";
import ComponentCard from "@/app/(DashboardLayout)/components/ComponentCard";
import { useDispatch, useSelector } from "@/store/hooks";
import {
  SelectOffer,
  fetchOffers,
  DeleteOffer,
  isEdit,
  UpdateOffer,
  addOffer
} from "@/store/apps/offers/OfferSlice";
import {
  SelectContact,
  fetchContacts,
  DeleteContact,
  toggleStarredContact,
} from "@/store/apps/contacts/ContactSlice";
import Select from 'react-select'
import axios from "axios";
import { addSalesAgent, fetchSalesAgents, UpdateSalesAgent } from "@/store/apps/salesAgents/SalesAgentsSlice";

const CustomReactTable = () => {
  const [modal, setModal] = useState(false);
  const [obj, setObj] = useState({});
  const [jsonData, setJsonData] = useState(data.dataTable);
  const [selectedClients, setSelectedClients] = useState([])

  const toggle = () => {
    setModal(!modal);
  };
  
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchOffers());
    dispatch(fetchContacts());
    dispatch(fetchSalesAgents());
  }, [dispatch]);
  
  const clients = useSelector((state) => state.contactsReducer.contacts)

  const clientOptions = useSelector((state) => {
    const arrayClients = state.contactsReducer.contacts
    let options = []
    return options = arrayClients.map((singleClient) => { const newObj = {value: singleClient['@id'], label: singleClient.companyName}; return newObj; })
  });
  
  const salesAgents = useSelector((state) => state.salesAgentsReducer.salesAgents);
  
  const offers = useSelector((state) => state.offersReducer.offers);

  const offersOptions = useSelector((state) => {
    const arrayOffers = state.offersReducer.offers
    let options = []
    return options = arrayOffers.map((singleOffer) => { const newObj = {value: singleOffer['@id'], label: singleOffer.name}; return newObj; })
  });

  const handleSubmit = (event) => {
    event.preventDefault()
    if (event.target.id.value !== undefined) {
      const name = event.target.name.value;
      const id = event.target.id.value;
      const offers = event.target.offer.value;
      const clients = event.target.client.value;
      const newObj = JSON.parse(JSON.stringify(jsonData));
      newObj[parseInt(id)] = [name, offers, clients];
      dispatch(UpdateSalesAgent(id, name, offers, clients))
      setJsonData(newObj);
    } else {
      const name = event.target.name.value;
      const offers = event.target.offer.value;
      const clients = event.target.client.value;
      let newObj = salesAgents;
      console.log(newObj)
      //newObj.push([name, offers, clients]);
      console.log(newObj)
      dispatch(addSalesAgent(salesAgents.length + 1, name, offers, clients))
      //setJsonData(newObj);
    }
    setModal(!modal);
  };

  const data2 = salesAgents.map((prop, key) => {
    let clientText = ""
    let offerText = ""
    selectedClients.map((singleClient) => clientText += clients.find((singleContact) => singleContact['@id'] === singleClient.value) && clients.find((singleContact) => singleContact['@id'] === prop.singleClient.value).companyName) + " "
    return {
      id: key,
      name: prop.name,
      clients: clientText,
      offers: offerText,
      actions: (
        // we've added some custom button actions
        <div className="text-center">
          {/* use this button to add a edit kind of action */}
          <Button
            onClick={() => {
              const sobj = data2.find((o) => o.id === key);
              setModal(!modal);
              setObj(sobj);
            }}
            color="inverse"
            size="sm"
            round="true"
            icon="true"
          >
            <i className="fa fa-edit" />
          </Button>
          {/* use this button to remove the data row */}
          {/* <Button
							onClick={() => {
								let newdata = data2;
								newdata.find((o, i) => {
									if (o.id === key) {
										newdata.splice(i, 1);
										console.log(newdata);
										return true;
									}
									return false;
								});
								this.setState({ jsonData: newdata });
							}}
							className="ml-1"
							color="danger"
							size="sm"
							round="true"
							icon="true"
						>
							<i className="fa fa-times" />
						</Button> */}
        </div>
      ),
    };
  });
  return (
    <div>
      <BreadCrumbs />
      <Modal isOpen={modal} toggle={toggle.bind(null)}>
        <ModalHeader toggle={toggle.bind(null)}>Nuovo preventivo</ModalHeader>
        <ModalBody>
          <Form onSubmit={(event) => handleSubmit(event)}>
            {obj !== null && <Input type="hidden" name="id" id="id" defaultValue={obj.id} />}
            <FormGroup>
              <Label for="name">Name</Label>
              <Input
                type="text"
                name="name"
                id="name"
                defaultValue={obj !== null ? obj.name : ""}
              />
            </FormGroup>
            <FormGroup>
              <Label for="client">Client</Label>
              <Select
                closeMenuOnSelect={false}
                isMulti
                options={clientOptions}
                name="client"
                id="client"
                onChange={setSelectedClients}
              />
            </FormGroup>
            <FormGroup>
              <Label for="offer">Offer</Label>
              <Select
                closeMenuOnSelect={false}
                isMulti
                options={clientOptions}
                name="offer"
                id="offer"
              />
            </FormGroup>
            <FormGroup>
              <Button color="primary" type="submit">
                Save
              </Button>
              <Button
                color="secondary"
                className="ml-1"
                onClick={toggle.bind(null)}
              >
                Cancel
              </Button>
            </FormGroup>
          </Form>
        </ModalBody>
      </Modal>
      {/*--------------------------------------------------------------------------------*/}
      {/* Start Action table*/}
      {/*--------------------------------------------------------------------------------*/}
      <div className="p-3 border-bottom">
        <Button color="danger" block onClick={() => { setObj(null); toggle() }}>
          Crea un nuovo preventivo
        </Button>
      </div>
      <ComponentCard title="Action Table">
        <ReactTable
          columns={[
            {
              Header: "FirstName",
              accessor: "name",
            },
            {
              Header: "Designation",
              accessor: "clients",
            },
            {
              Header: "Location",
              accessor: "offers",
            },
            {
              Header: "Actions",
              accessor: "actions",
              sortable: false,
              filterable: false,
            },
          ]}
          defaultPageSize={10}
          showPaginationBottom
          className="-striped -highlight"
          data={data2}
        />
      </ComponentCard>
      {/*--------------------------------------------------------------------------------*/}
      {/* End Action table*/}
      {/*--------------------------------------------------------------------------------*/}
    </div>
  );
};

export default CustomReactTable;
