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
  SelectOrder,
  fetchOrders,
  DeleteOrder,
  isEdit,
  UpdateOrder,
  addOrder
} from "@/store/apps/orders/OrderSlice";
import {
  SelectContact,
  fetchContacts,
  DeleteContact,
  toggleStarredContact,
} from "@/store/apps/providers/ProviderSlice";
import axios from "axios";

const CustomReactTable = () => {
  const [modal, setModal] = useState(false);
  const [obj, setObj] = useState({});
  const [jsonData, setJsonData] = useState(useSelector((state) => state.ordersReducer.orders));

  const toggle = () => {
    setModal(!modal);
  };
  
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchOrders());
    dispatch(fetchContacts());
  }, [dispatch]);
  
  const providers = useSelector((state) => state.providersReducer.contacts);
  
  const orders = useSelector((state) => state.ordersReducer.orders);

  const handleSubmit = (event) => {
    event.preventDefault()
    if (event.target.id.value !== undefined) {
      const id = event.target.id.value;
      const name = event.target.name.value;
      const designation = event.target.designation.value;
      const location = event.target.location.value;
      const age = event.target.age.value;
      const newObj = JSON.parse(JSON.stringify(jsonData));
      newObj[id] = [name, designation, location, age];
      dispatch(UpdateOrder())
      setJsonData(newObj);
    } else {
      const provider = event.target.provider.value;
      const orderDate = event.target.orderDate.value;
      const deliveryDate = event.target.deliveryDate.value;
      const realDeliveryDate = event.target.realDeliveryDate.value;
      const color = event.target.color.value;
      const note = event.target.note.value;
      const newObj = JSON.parse(JSON.stringify(jsonData));
      newObj.push([provider,orderDate,deliveryDate,realDeliveryDate,color,note]);
      console.log(newObj)
      dispatch(addOrder(provider,orderDate,deliveryDate,realDeliveryDate,color,note))
      setJsonData(newObj);
    }
    setModal(!modal);
  };

  const data2 = jsonData.map((prop, key) => {
    return {
      id: key,
      providerId: providers.find((singleProvider) => singleProvider['@id'] === prop[0]) && providers.find((singleProvider) => singleProvider['@id'] === prop[0])['@id'],
      provider: providers.find((singleProvider) => singleProvider['@id'] === prop[0]) && providers.find((singleProvider) => singleProvider['@id'] === prop[0]).companyName,
      orderDate: prop[1],
      deliveryDate: prop[2],
      realDeliveryDate: prop[3],
      note: prop[5],
      actions: (
        // we've added some custom button actions
        <div className="text-center">
          {/* use this button to add a edit kind of action */}
          <Button
            onClick={() => {
              const sobj = data2.find((o) => o.id === key);
              setModal(!modal);
              setObj(sobj);
              console.log(data2)
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
        <ModalHeader toggle={toggle.bind(null)}>Nuovo ordine</ModalHeader>
        <ModalBody>
          <Form onSubmit={(event) => handleSubmit(event)}>
            {obj !== null && <Input type="hidden" name="id" id="id" defaultValue={obj.id} />}
            <FormGroup>
              <Label for="provider">Provider</Label>
              <Input
                id="provider"
                name="provider"
                type="select"
              >
                <option>Scegli un fornitore...</option>
                {providers.map((singleProvider => obj !== null ? obj.providerId === singleProvider['@id'] && <option key={singleProvider['@id']} value={singleProvider['@id']} selected>{singleProvider.companyName}</option> : <option key={singleProvider['@id']} value={singleProvider['@id']}>{singleProvider.companyName}</option>))}
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="orderDate">Order date</Label>
              <Input
                type="date"
                name="orderDate"
                id="orderDate"
                defaultValue={obj !== null ? obj.orderDate : ""}
              />
            </FormGroup>
            <FormGroup>
              <Label for="deliveryDate">Delivery Date</Label>
              <Input
                type="date"
                name="deliveryDate"
                id="deliveryDate"
                defaultValue={obj !== null ? obj.deliveryDate : ""}
              />
            </FormGroup>
            <FormGroup>
              <Label for="realDeliveryDate">Real Delivery Date</Label>
              <Input
                type="date"
                name="realDeliveryDate"
                id="realDeliveryDate"
                defaultValue={obj !== null ? obj.realDeliveryDate : ""}
              />
            </FormGroup>
            <FormGroup>
              <Label for="color">Color</Label>
              <Input type="text" name="color" id="color" defaultValue={obj !== null ? obj.color : ""} />
            </FormGroup>
            <FormGroup>
              <Label for="note">Note</Label>
              <Input type="text" name="note" id="note" defaultValue={obj !== null ? obj.note : ""} />
            </FormGroup>
      {/*      <FormGroup>
              <Label for="client">Client</Label>
              <Input
                id="client"
                name="client"
                type="select"
              >
                <option>Scegli un cliente...</option>
                {clients.map((singleClient => <option key={singleClient['@id']} value={singleClient['@id']}>{singleClient.companyName}</option>))}
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="salesAgent">SalesAgent</Label>
              <Input
                id="salesAgent"
                name="salesAgent"
                type="select"
              >
                <option>Scegli un agente...</option>
                {salesAgents.map((singleSalesAgent => <option key={singleSalesAgent['@id']} value={singleSalesAgent['@id']}>{singleSalesAgent.name}</option>))}
              </Input>
            </FormGroup> */}
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
              Header: "Provider",
              accessor: "provider",
            },
            {
              Header: "orderDate",
              accessor: "orderDate",
            },
            {
              Header: "deliveryDate",
              accessor: "deliveryDate",
            },
            {
              Header: "realDeliveryDate",
              accessor: "realDeliveryDate",
            },
            {
              Header: "note",
              accessor: "note",
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
