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
  addOrder,
  AddOrdersItem
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
  const [page, setPage] = useState(1);
  
  const toggle = () => {
    setModal(!modal);
  };
  
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchOrders(1));
    dispatch(fetchContacts());
  }, [dispatch]);
  
  const providers = useSelector((state) => state.providersReducer.contacts);
  
  const orders = useSelector((state) => state.ordersReducer.orders);

  const totalPage = useSelector((state) => state.offersReducer.totalPage);

  const handleSubmit = (event) => {
    event.preventDefault()
    if (event.target.id.value !== undefined) {
      const id = event.target.id.value;
      const provider = event.target.provider.value;
      const orderDate = event.target.orderDate.value;
      const deliveryDate = event.target.deliveryDate.value;
      const realDeliveryDate = event.target.realDeliveryDate.value;
      const color = event.target.color.value;
      const note = event.target.note.value;
      const remoteId = event.target.remoteId.value;
      dispatch(UpdateOrder({"provider" : provider, "orderDate": orderDate, "deliveryDate": deliveryDate, "realDeliveryDate": realDeliveryDate, "color": color, "note": note, "id": id, "remoteId": remoteId}))
    } else {
      const provider = event.target.provider.value;
      const orderDate = event.target.orderDate.value;
      const deliveryDate = event.target.deliveryDate.value;
      const realDeliveryDate = event.target.realDeliveryDate.value;
      const color = event.target.color.value;
      const note = event.target.note.value;
      dispatch(AddOrdersItem({"provider" : provider, "orderDate": orderDate, "deliveryDate": deliveryDate, "realDeliveryDate": realDeliveryDate, "color": color, "note": note}))
    }
    setModal(!modal);
  };

  const data2 = orders.map((prop, key) => {
    return {
      id: key,
      providerId: providers.find((singleProvider) => singleProvider['@id'] === prop.provider) && providers.find((singleProvider) => singleProvider['@id'] === prop.provider)['@id'],
      provider: providers.find((singleProvider) => singleProvider['@id'] === prop.provider) && providers.find((singleProvider) => singleProvider['@id'] === prop.provider).companyName,
      orderDate: new Date(prop.orderDate).getFullYear() + "-" + (new Date(prop.orderDate).getMonth() < 9 ? ("0" + (new Date(prop.orderDate).getMonth() + 1)) : new Date(prop.orderDate).getMonth() + 1) + "-" + new Date(prop.orderDate).getDate(),
      deliveryDate:  new Date(prop.deliveryDate).getFullYear() + "-" + (new Date(prop.deliveryDate).getMonth() < 9 ? ("0" + (new Date(prop.deliveryDate).getMonth() + 1)) : new Date(prop.deliveryDate).getMonth() + 1) + "-" + new Date(prop.deliveryDate).getDate(),
      realDeliveryDate:  new Date(prop.realDeliveryDate).getFullYear() + "-" + (new Date(prop.realDeliveryDate).getMonth() < 9 ? ("0" + (new Date(prop.realDeliveryDate).getMonth() + 1)) : new Date(prop.realDeliveryDate).getMonth() + 1) + "-" + new Date(prop.realDeliveryDate).getDate(),
      color: prop.color,
      note: prop.note,
      remoteId: prop.remoteId ? prop.remoteId : prop['@id'],
      orderDateString: new Date(prop.orderDate).getDate() + "-" + (new Date(prop.orderDate).getMonth() < 9 ? ("0" + (new Date(prop.orderDate).getMonth() + 1)) : new Date(prop.orderDate).getMonth() + 1) + "-" + new Date(prop.orderDate).getFullYear(),
      deliveryDateString: new Date(prop.deliveryDate).getDate()  + "-" + (new Date(prop.deliveryDate).getMonth() < 9 ? ("0" + (new Date(prop.deliveryDate).getMonth() + 1)) : new Date(prop.deliveryDate).getMonth() + 1) + "-" + new Date(prop.deliveryDate).getFullYear(),
      realDeliveryDateString: new Date(prop.realDeliveryDate).getDate() + "-" + (new Date(prop.realDeliveryDate).getMonth() < 9 ? ("0" + (new Date(prop.realDeliveryDate).getMonth() + 1)) : new Date(prop.realDeliveryDate).getMonth() + 1) + "-" + new Date(prop.realDeliveryDate).getFullYear(),
      actions: (
        // we've added some custom button actions
        <div className="text-center">
          {/* use this button to add a edit kind of action */}
          <Button
            onClick={() => {
              const sobj = data2.find((o) => o.id === key);
              setModal(!modal);
              setObj(sobj);
              console.log(sobj)
              console.log(new Date(sobj.deliveryDate))
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
            {obj !== null && <Input type="hidden" name="remoteId" id="remoteId" defaultValue={obj.remoteId} />}
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
              <Input type="color" name="color" id="color" defaultValue={obj !== null ? obj.color : ""} />
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
              accessor: "orderDateString",
            },
            {
              Header: "deliveryDate",
              accessor: "deliveryDateString",
            },
            {
              Header: "realDeliveryDate",
              accessor: "realDeliveryDateString",
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
          pages={totalPage}
          showPaginationBottom
          showPageSizeOptions={false}
          manual
          showPageJump= {true}
          className="-striped -highlight"
          data={data2}
          onPageChange={async (pageIndex) => {
            await dispatch(fetchOrders(pageIndex + 1));
          }}
          getTrProps={(state, rowInfo, column) => {
            return {
              style: {
                background: rowInfo.row.note !== "note" ? "green" : "red"
              }
            };
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
