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
  SelectProduct,
  fetchProducts,
  DeleteProduct,
  isEdit,
  UpdateProduct,
  addProduct
} from "@/store/apps/products/ProductSlice";
import {
  SelectContact,
  fetchContacts,
  DeleteContact,
  toggleStarredContact,
} from "@/store/apps/providers/ProviderSlice";

const CustomReactTable = () => {
  const [modal, setModal] = useState(false);
  const [obj, setObj] = useState({});
  const [jsonData, setJsonData] = useState(useSelector((state) => state.productsReducer.products));

  const toggle = () => {
    setModal(!modal);
  };
  
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(fetchContacts());
  }, [dispatch]);
  
  const products = useSelector((state) => state.productsReducer.products);
  
  const providers = useSelector((state) => state.providersReducer.contacts);

  const categories = useSelector((state) => state.categoryReducer.categories);

  console.log(categories)
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
      newObj.push({"provider" : provider, "orderDate": orderDate, "deliveryDate": deliveryDate, "realDeliveryDate": realDeliveryDate, "color": color, "note": note});
      console.log(newObj)
      dispatch(addOrder(provider,orderDate,deliveryDate,realDeliveryDate,color,note))
      setJsonData(newObj);
    }
    setModal(!modal);
  };
  const data2 = jsonData.map((prop, key) => {
    return {
      id: key,
      productId: products.id,
      name: products.name,
      description: products.description,
      stockQuantity: products.stockQuantity,
      lowLevel: products.lowLevel,
      availableQuantity: products.availableQuantity,
      allocatedQuantity: products.allocatedQuantity,
      restockDate: products.restockDate,
      lastRestockQuantity: products.lastRestockQuantity,
      purchasePrice: products.purchasePrice,
      sellPrice: products.sellPrice,
      weight: products.weight,
      dimensions: products.dimensions,
      note: products.note,
      provider: providers.find((singleProvider) => singleProvider['@id'] === prop.provider) && providers.find((singleProvider) => singleProvider['@id'] === prop.provider).companyName,
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
              <Label for="productId">ProductId</Label>
              <Input
                type="text"
                name="productId"
                id="productId"
                defaultValue={obj !== null ? obj.productId : ""}
              />
            </FormGroup>
            <FormGroup>
              <Label for="name">name</Label>
              <Input
                type="text"
                name="name"
                id="name"
                defaultValue={obj !== null ? obj.name : ""}
              />
            </FormGroup>
            <FormGroup>
              <Label for="categories">categories</Label>
              <Input
                id="categories"
                name="categories"
                type="select"
              >
                <option>Scegli una categoria...</option>
                {categories.map((singleCategory => <option key={singleCategory['@id']} value={singleCategory['@id']}>{singleCategory.name}</option>))}
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="description">description</Label>
              <Input
                type="text"
                name="description"
                id="description"
                defaultValue={obj !== null ? obj.description : ""}
              />
            </FormGroup>
            <FormGroup>
              <Label for="stockQuantity">stockQuantity</Label>
              <Input
                type="text"
                name="stockQuantity"
                id="stockQuantity"
                defaultValue={obj !== null ? obj.stockQuantity : ""}
              />
            </FormGroup>
            <FormGroup>
              <Label for="lowLevel">lowLevel</Label>
              <Input
                type="text"
                name="lowLevel"
                id="lowLevel"
                defaultValue={obj !== null ? obj.lowLevel : ""}
              />
            </FormGroup>
            <FormGroup>
              <Label for="availableQuantity">availableQuantity</Label>
              <Input
                type="text"
                name="availableQuantity"
                id="availableQuantity"
                defaultValue={obj !== null ? obj.availableQuantity : ""}
              />
            </FormGroup>
            <FormGroup>
              <Label for="allocatedQuantity">allocatedQuantity</Label>
              <Input
                type="text"
                name="allocatedQuantity"
                id="allocatedQuantity"
                defaultValue={obj !== null ? obj.allocatedQuantity : ""}
              />
            </FormGroup>
            <FormGroup>
              <Label for="restockDate">restockDate</Label>
              <Input
                type="text"
                name="restockDate"
                id="restockDate"
                defaultValue={obj !== null ? obj.restockDate : ""}
              />
            </FormGroup>
            <FormGroup>
              <Label for="lastRestockQuantity">lastRestockQuantity</Label>
              <Input
                type="text"
                name="lastRestockQuantity"
                id="lastRestockQuantity"
                defaultValue={obj !== null ? obj.lastRestockQuantity : ""}
              />
            </FormGroup>
            <FormGroup>
              <Label for="purchasePrice">purchasePrice</Label>
              <Input
                type="text"
                name="purchasePrice"
                id="purchasePrice"
                defaultValue={obj !== null ? obj.purchasePrice : ""}
              />
            </FormGroup>
            <FormGroup>
              <Label for="sellPrice">sellPrice</Label>
              <Input
                type="text"
                name="sellPrice"
                id="sellPrice"
                defaultValue={obj !== null ? obj.sellPrice : ""}
              />
            </FormGroup>
            <FormGroup>
              <Label for="weight">weight</Label>
              <Input
                type="text"
                name="weight"
                id="weight"
                defaultValue={obj !== null ? obj.weight : ""}
              />
            </FormGroup>
            <FormGroup>
              <Label for="dimensions">dimensions</Label>
              <Input
                type="text"
                name="dimensions"
                id="dimensions"
                defaultValue={obj !== null ? obj.dimensions : ""}
              />
            </FormGroup>
            <FormGroup>
              <Label for="providers">providers</Label>
              <Input
                id="providers"
                name="providers"
                type="select"
              >
                <option>Scegli un fornitore...</option>
                {providers.map((singleProvider => <option key={singleProvider['@id']} value={singleProvider['@id']}>{singleProvider.companyName}</option>))}
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="note">note</Label>
              <Input
                type="text"
                name="note"
                id="note"
                defaultValue={obj !== null ? obj.note : ""}
              />
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
