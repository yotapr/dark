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
import { AddSalesAgentsItem, fetchSalesAgents, UpdateSalesAgents, deleteSalesAgentsItem } from "@/store/apps/salesAgents/SalesAgentsSlice";

const CustomReactTable = () => {
  const [modal, setModal] = useState(false);
  const [modalDelete, setModalDelete] = useState(false);
  const [obj, setObj] = useState({});
  const [jsonData, setJsonData] = useState(data.dataTable);
  const [selectedClients, setSelectedClients] = useState([])
  const [selectedOffers, setSelectedOffers] = useState([])
  const [loading,setLoading] = useState(false)
  const [page,setPage] = useState(1)
  const toggle = () => {
    setModal(!modal);
  };
  
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchOffers());
    dispatch(fetchContacts());
  }, [dispatch]);
  
  const clients = useSelector((state) => state.contactsReducer.contacts)

  const clientOptions = useSelector((state) => {
    const arrayClients = state.contactsReducer.contacts
    let options = []
    return options = arrayClients.map((singleClient) => { const newObj = {value: singleClient['@id'], label: singleClient.companyName}; return newObj; })
  });
  
  const salesAgents = useSelector((state) => state.salesAgentsReducer.salesAgents);
  const totalPage = useSelector((state) => state.salesAgentsReducer.totalPage);
  const offers = useSelector((state) => state.offersReducer.offers);

  const offersOptions = useSelector((state) => {
    const arrayOffers = state.offersReducer.offers
    let options = []
    return options = arrayOffers.map((singleOffer) => { const newObj = {value: singleOffer['@id'], label: singleOffer.name}; return newObj; })
  });

  const handleSubmit = (event) => {
    event.preventDefault()
    if (event.target.id.value !== undefined) {
      const remoteId = event.target.remoteId.value;
      const name = event.target.name.value;
      const id = event.target.id.value;
      const offers = selectedOffers.map((singleOffer) => singleOffer.value);
      const clients = selectedClients.map((singleClient) => singleClient.value);
      dispatch(UpdateSalesAgents({id, name, clients, offers, remoteId }))
    } else {
      const name = event.target.name.value;
      const offers = selectedOffers.map((singleOffer) => singleOffer.value);
      const clients = selectedClients.map((singleClient) => singleClient.value);
      const id = salesAgents.length + 1;
      dispatch(AddSalesAgentsItem({id, name, clients, offers}))
      //setJsonData(newObj);
    }
    setModal(!modal);
  };

  const data2 = salesAgents && salesAgents.map((prop, key) => {
    let clientText = ""
    let offerText = ""
    let offersArray = []
    let clientsArray = []
    prop.clients.length > 0 && prop.clients.map((singleClient) => { clientText += clients.find((singleContact) => singleContact['@id'] === singleClient) && clients.find((singleContact) => singleContact['@id'] === singleClient).companyName + " " })
    prop.offers.length > 0 && prop.offers.map((singleOffer) => { offerText += offers.find((singleTotalOffer) => singleTotalOffer['@id'] === singleOffer) && offers.find((singleTotalOffer) => singleTotalOffer['@id'] === singleOffer).name + " " })
    prop.clients.length > 0 && prop.clients.map((singleClient) => { clientsArray.push(clientOptions.find((singleContact) => singleContact.value === singleClient))})
    prop.offers.length > 0 && prop.offers.map((singleOffer) => { offersArray.push(singleOffer['@id'] !== undefined ? offersOptions.find((singleTotalOffer) => singleTotalOffer.value === singleOffer['@id']) : offersOptions.find((singleTotalOffer) => singleTotalOffer.value === singleOffer))})
    let remoteIdItem = ""
    prop['@id'] ? remoteIdItem = prop['@id'] : remoteIdItem = prop.remoteId
    return {
      id: key,
      name: prop.name,
      clients: clientText,
      clientsArray: clientsArray,
      offers: offerText,
      offersArray: offersArray,
      remoteId: remoteIdItem,
      actions: (
        // we've added some custom button actions
        <div className="text-center">
          {/* use this button to add a edit kind of action */}
          <Button
            onClick={() => {
              const sobj = data2.find((o) => o.id === key);
              setModal(!modal);
              setObj(sobj);
              setSelectedClients(sobj.clientsArray);
              setSelectedOffers(sobj.offersArray)
            }}
            color="primary"
            size="sm"
            round="true"
            icon="true"
            style={{margin: "5px"}}
          >
            <i className="fa fa-edit" />
            MODIFICA
          </Button>
          {/* use this button to remove the data row */}
          <Button
							onClick={() => {
                const sobj = data2.find((o) => o.id === key);
                console.log(sobj)
                setModalDelete(!modalDelete);
                setObj(sobj);
                /*let newdata = data2;
								newdata.find((o, i) => {
									if (o.id === key) {
										newdata.splice(i, 1);
										console.log(newdata);
										return true;
									}
									return false;
								});*/
							}}
							className="ml-1"
							color="danger"
							size="sm"
							round="true"
							icon="true"
						>
							<i className="fa fa-times" />
              CANCELLA
						</Button>
        </div>
      ),
    };
  });
  return (
    <div>
      <BreadCrumbs />
      <Modal isOpen={modalDelete} toggle={() => setModalDelete(!modalDelete)}>
        <ModalHeader toggle={() => setModalDelete(!modalDelete)}>Confermi di voler cancellare?</ModalHeader>
        <ModalBody>
          <Button color="danger" onClick={() => {console.log(obj.remoteId); dispatch(deleteSalesAgentsItem(obj.remoteId)); 
          setModalDelete(!modalDelete)}}>
            Rimuovi
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
      <Modal isOpen={modal} toggle={toggle.bind(null)}>
        <ModalHeader toggle={toggle.bind(null)}>Nuovo agente</ModalHeader>
        <ModalBody>
          <Form onSubmit={(event) => handleSubmit(event)}>
            {obj !== null && <Input type="hidden" name="id" id="id" defaultValue={obj.id} />}
            {obj !== null && <Input type="hidden" name="remoteId" id="remoteId" defaultValue={obj.remoteId} />}
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
                defaultValue={obj !== null ? obj.clientsArray : []}
              />
            </FormGroup>
            <FormGroup>
              <Label for="offer">Offer</Label>
              <Select
                closeMenuOnSelect={false}
                isMulti
                options={offersOptions}
                name="offer"
                id="offer"
                onChange={setSelectedOffers}
                defaultValue={obj !== null ? obj.offersArray : []}
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
          Aggiungi un agente
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
          pages={totalPage}
          loading={loading}
          showPaginationBottom
          showPageSizeOptions={false}
          className="-striped -highlight"
          data={data2}
          manual
          showPageJump= {true}
          onFetchData={async () => {
            setLoading(true)
            await dispatch(fetchSalesAgents(page + 1));
            setLoading(false)
          }}
          onPageChange={async (pageIndex) => {
            setPage(pageIndex + 1)
          }}
        />
      </ComponentCard>
      {/*--------------------------------------------------------------------------------*/}
      {/* End Action table*/}
      {/*--------------------------------------------------------------------------------*/}
    </div>
  );
};

export default CustomReactTable;
