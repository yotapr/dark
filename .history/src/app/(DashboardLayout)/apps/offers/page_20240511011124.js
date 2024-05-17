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
  AddOffersItem,
  deleteOfferItem
} from "@/store/apps/offers/OfferSlice";
import {
  SelectContact,
  fetchContacts,
  DeleteContact,
  toggleStarredContact,
} from "@/store/apps/contacts/ContactSlice";
import axios from "axios";
import { fetchSalesAgents } from "@/store/apps/salesAgents/SalesAgentsSlice";

const CustomReactTable = () => {
  const [modal, setModal] = useState(false);
  const [obj, setObj] = useState({});
  const [jsonData, setJsonData] = useState(data.dataTable);
  const [loading,setLoading] = useState(false)
  const [modalDelete, setModalDelete] = useState(false);

  const toggle = () => {
    setModal(!modal);
  };
  
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchOffers(1));
    dispatch(fetchContacts(1));
    dispatch(fetchSalesAgents(1));
  }, [dispatch]);
  
  const clients = useSelector((state) => state.contactsReducer.contacts);
  
  const salesAgents = useSelector((state) => state.salesAgentsReducer.salesAgents);

  const offers = useSelector((state) => state.offersReducer.offers);

  const totalPage = useSelector((state) => state.offersReducer.totalPage);

  const handleSubmit = (event) => {
    event.preventDefault()
    if (event.target.id.value !== undefined) {
      const id = event.target.id.value;
      const name = event.target.name.value;
      const materialCost = event.target.materialCost.value;
      const mechanicalDesignCost = event.target.mechanicalDesignCost.value;
      const electricalDesignCost = event.target.electricalDesignCost.value;
      const electricalWiringOnBoardTheMachine = event.target.electricalWiringOnBoardTheMachine.value;
      const panelWiringCost = event.target.panelWiringCost.value;
      const mechanicalAssembly = event.target.mechanicalAssembly.value;
      const preparationCost = event.target.preparationCost.value;
      const revenuePercentage = event.target.revenuePercentage.value;
      const price = event.target.price.value;
      const client = event.target.client.value;
      const salesAgent = event.target.salesAgent.value;
      const remoteId = event.target.remoteId.value;
      dispatch(UpdateOffer({name, materialCost, mechanicalDesignCost, electricalDesignCost, electricalWiringOnBoardTheMachine, panelWiringCost, mechanicalAssembly, mechanicalDesignCost, preparationCost, revenuePercentage, price, client, salesAgent, remoteId, id}))
    } else {
      const id = event.target.id.value;
      const name = event.target.name.value;
      const materialCost = event.target.materialCost.value;
      const mechanicalDesignCost = event.target.mechanicalDesignCost.value;
      const electricalDesignCost = event.target.electricalDesignCost.value;
      const electricalWiringOnBoardTheMachine = event.target.electricalWiringOnBoardTheMachine.value;
      const panelWiringCost = event.target.panelWiringCost.value;
      const mechanicalAssembly = event.target.mechanicalAssembly.value;
      const preparationCost = event.target.preparationCost.value;
      const revenuePercentage = event.target.revenuePercentage.value;
      const price = event.target.price.value;
      const client = event.target.client.value;
      const salesAgent = event.target.salesAgent.value;
      //const newObj = JSON.parse(JSON.stringify(jsonData));
      //newObj.push({name, materialCost, mechanicalDesignCost, electricalDesignCost, electricalWiringOnBoardTheMachine, panelWiringCost, mechanicalAssembly, mechanicalDesignCost, preparationCost, revenuePercentage, price, client, salesAgent});
      dispatch(AddOffersItem({name, materialCost, mechanicalDesignCost, electricalDesignCost, electricalWiringOnBoardTheMachine, panelWiringCost, mechanicalAssembly, mechanicalDesignCost, preparationCost, revenuePercentage, price, client, salesAgent}))
      //setJsonData(newObj);
    }
    setModal(!modal);
  };

  const data2 = offers.map((prop, key) => {
    let clientText = ""
    clientText = clients.length > 0 && clients.map((singleClient) => { clientText += clients.find((singleContact) => singleContact['@id'] === singleClient) && clients.find((singleContact) => singleContact['@id'] === singleClient).companyName + " " })
    return {
      id: key,
      name: prop.name,
      clientId: prop.client,
      client: clients.find((singleContact) => singleContact['@id'] === prop.client) && clients.find((singleContact) => singleContact['@id'] === prop.client).companyName,
      salesAgent: salesAgents.find((singleAgent) => singleAgent['@id'] === prop.salesAgent) && salesAgents.find((singleAgent) => singleAgent['@id'] === prop.salesAgent).name,
      salesAgentId: prop.salesAgent,
      price: prop.price,
      materialCost: prop.materialCost,
      mechanicalDesignCost: prop.mechanicalDesignCost,
      electricalDesignCost: prop.electricalDesignCost,
      electricalWiringOnBoardTheMachine: prop.electricalWiringOnBoardTheMachine,
      panelWiringCost: prop.panelWiringCost,
      mechanicalAssembly: prop.mechanicalAssembly,
      preparationCost: prop.preparationCost,
      revenuePercentage: prop.preparationCost,
      remoteId: prop.remoteId ? prop.remoteId : prop['@id'],
      actions: (
        // we've added some custom button actions
        <div className="text-center">
          {/* use this button to add a edit kind of action */}
          <Button
            onClick={() => {
              const sobj = data2.find((o) => o.id === key);
              console.log(sobj)
              setModal(!modal);
              setObj(sobj);
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
          <Button
							onClick={() => {
                const sobj = data2.find((o) => o.id === key);
                console.log(sobj)
                setModalDelete(!modalDelete);
                setObj(sobj);
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
      <Modal isOpen={modal} toggle={toggle.bind(null)}>
        <ModalHeader toggle={toggle.bind(null)}>Nuovo preventivo</ModalHeader>
        <ModalBody>
          <Form onSubmit={(event) => handleSubmit(event)}>
            {console.log("remoteId")}
            {obj !== null && console.log(obj.remoteId)}
            {obj !== null && <Input type="hidden" name="id" id="id" defaultValue={obj.id} />}
            {obj !== null && <Input type="hidden" name="remoteId" id="remoteId" defaultValue={obj.remoteId} />}            
            <FormGroup>
              <Label for="name">Nome</Label>
              <Input
                type="text"
                name="name"
                id="name"
                defaultValue={obj !== null ? obj.name : ""}
              />
            </FormGroup>
            <FormGroup>
              <Label for="client">Cliente</Label>
              <Input
                id="client"
                name="client"
                type="select"
              >
                <option>Scegli un cliente...</option>
                {clients.map((singleClient => obj !== null && obj.clientId === singleClient['@id'] ? <option selected key={singleClient['@id']} value={singleClient['@id']}>{singleClient.companyName}</option> : <option key={singleClient['@id']} value={singleClient['@id']}>{singleClient.companyName}</option>))}
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="salesAgent">Agente di vendita</Label>
              <Input
                id="salesAgent"
                name="salesAgent"
                type="select"
              >
                <option>Scegli un agente...</option>
                {salesAgents.map((singleSalesAgent => obj !== null && obj.salesAgentId === singleSalesAgent['@id'] ? <option selected key={singleSalesAgent['@id']} value={singleSalesAgent['@id']}>{singleSalesAgent.name}</option> :  <option key={singleSalesAgent['@id']} value={singleSalesAgent['@id']}>{singleSalesAgent.name}</option>))}
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="materialCost">Costo del materiale</Label>
              <Input
                type="text"
                name="materialCost"
                id="materialCost"
                defaultValue={obj !== null ? obj.materialCost : ""}
              />
            </FormGroup>
            <FormGroup>
              <Label for="mechanicalDesignCost">Costo disegno meccanico</Label>
              <Input
                type="text"
                name="mechanicalDesignCost"
                id="mechanicalDesignCost"
                defaultValue={obj !== null ? obj.mechanicalDesignCost : ""}
              />
            </FormGroup>
            <FormGroup>
              <Label for="electricalDesignCost">Costo disegno elettronico</Label>
              <Input type="text" name="electricalDesignCost" id="electricalDesignCost" defaultValue={obj !== null ? obj.electricalDesignCost : ""} />
            </FormGroup>
            <FormGroup>
              <Label for="electricalWiringOnBoardTheMachine">Cablaggio elettrico a bordo macchina</Label>
              <Input type="text" name="electricalWiringOnBoardTheMachine" id="electricalWiringOnBoardTheMachine" defaultValue={obj !== null ? obj.electricalWiringOnBoardTheMachine : ""} />
            </FormGroup>
            <FormGroup>
              <Label for="panelWiringCost">Costo cavi pannello</Label>
              <Input type="text" name="panelWiringCost" id="panelWiringCost" defaultValue={obj !== null ? obj.panelWiringCost : ""} />
            </FormGroup>
            <FormGroup>
              <Label for="mechanicalAssembly">Assemblaggio meccanico</Label>
              <Input type="text" name="mechanicalAssembly" id="mechanicalAssembly" defaultValue={obj !== null ? obj.mechanicalAssembly : ""} />
            </FormGroup>
            <FormGroup>
              <Label for="preparationCost">Costo preparazione</Label>
              <Input type="text" name="preparationCost" id="preparationCost" defaultValue={obj !== null ? obj.preparationCost : ""} />
            </FormGroup>
            <FormGroup>
              <Label for="revenuePercentage">Percentuale sconto</Label>
              <Input type="text" name="revenuePercentage" id="revenuePercentage" defaultValue={obj !== null ? obj.revenuePercentage : ""} />
            </FormGroup>
            <FormGroup>
              <Label for="price">Prezzo</Label>
              <Input type="text" name="price" id="price" defaultValue={obj !== null ? obj.price : ""} />
            </FormGroup>
            <FormGroup>
              <Button color="primary" type="submit">
                Salva
              </Button>
              <Button
                color="secondary"
                className="ml-1"
                onClick={toggle.bind(null)}
              >
                Annulla
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
      <ComponentCard title="Offerte">
        <ReactTable
          columns={[
            {
              Header: "Nome",
              accessor: "name",
            },
            {
              Header: "Cliente",
              accessor: "client",
            },
            {
              Header: "Agente",
              accessor: "salesAgent",
            },
            {
              Header: "Prezzo",
              accessor: "price",
            },
            {
              Header: "Azioni",
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
          /*onFetchData={async () => {
            setLoading(true)
            alert(page + 1)
            await dispatch(fetchSalesAgents(page + 1));
            setLoading(false)
          }}*/
          onPageChange={async (pageIndex) => {
            await dispatch(fetchOffers(pageIndex + 1));
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
