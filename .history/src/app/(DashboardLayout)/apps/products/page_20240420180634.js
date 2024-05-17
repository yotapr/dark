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
} from "@/store/apps/providers/ProviderSlice";
import {
  SelectCategory,
  fetchCategories,
  DeleteCategory,
} from "@/store/apps/category/CategorySlice";

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
    dispatch(fetchCategories());
  }, [dispatch]);
  
  const products = useSelector((state) => state.productsReducer.products);
  
  const providers = useSelector((state) => state.providersReducer.contacts);

  const categories = useSelector((state) => state.categoryReducer.categories);

  console.log(categories)
  console.log(products)
  const handleSubmit = (event) => {
    event.preventDefault()
    if (event.target.id.value !== undefined) {
      const id = event.target.id.value;
      const productId = event.target.productId.value;
      const name = event.target.name.value;
      const category = event.target.category.value;
      const description = event.target.description.value;
      const stockQuantity = event.target.stockQuantity.value;
      const lowLevel = event.target.lowLevel.value;
      const availableQuantity = event.target.availableQuantity.value;
      const allocatedQuantity = event.target.allocatedQuantity.value;
      const restockDate = event.target.restockDate.value;
      const lastRestockQuantity = event.target.lastRestockQuantity.value;
      const purchasePrice = event.target.purchasePrice.value;
      const sellPrice = event.target.sellPrice.value;
      const weight = event.target.weight.value;
      const dimensions = event.target.dimensions.value;
      const providers = event.target.providers.value;
      const note = event.target.note.value;
      const newObj = JSON.parse(JSON.stringify(jsonData));
      newObj[event.target.id.value] = {"id": id, "productId" : productId, "name": name, "category": category, "description": description, "stockQuantity": stockQuantity, "lowLevel": lowLevel, "availableQuantity": availableQuantity, "allocatedQuantity": allocatedQuantity, "restockDate": restockDate, "lastRestockQuantity": lastRestockQuantity, "purchasePrice": purchasePrice, "sellPrice": sellPrice, "weight": weight, "dimensions": dimensions, "providers": providers, "note": note};
      dispatch(UpdateProduct(id,productId,name,category,description,stockQuantity,lowLevel,availableQuantity,allocatedQuantity,restockDate,lastRestockQuantity,purchasePrice,sellPrice,weight,dimensions,providers,note))
      dispatch(isEdit())
    } else {
      const productId = event.target.productId.value;
      const name = event.target.name.value;
      const category = event.target.category.value;
      const description = event.target.description.value;
      const stockQuantity = event.target.stockQuantity.value;
      const lowLevel = event.target.lowLevel.value;
      const availableQuantity = event.target.availableQuantity.value;
      const allocatedQuantity = event.target.allocatedQuantity.value;
      const restockDate = event.target.restockDate.value;
      const lastRestockQuantity = event.target.lastRestockQuantity.value;
      const purchasePrice = event.target.purchasePrice.value;
      const sellPrice = event.target.sellPrice.value;
      const weight = event.target.weight.value;
      const dimensions = event.target.dimensions.value;
      const providers = event.target.providers.value;
      const note = event.target.note.value;
      const newObj = JSON.parse(JSON.stringify(jsonData));
      newObj.push({"productId" : productId, "name": name, "category": category, "description": description, "stockQuantity": stockQuantity, "lowLevel": lowLevel, "availableQuantity": availableQuantity, "allocatedQuantity": allocatedQuantity, "restockDate": restockDate, "lastRestockQuantity": lastRestockQuantity, "purchasePrice": purchasePrice, "sellPrice": sellPrice, "weight": weight, "dimensions": dimensions, "providers": providers, "note": note});
      console.log(newObj)
      dispatch(addProduct(productId, name, category, description, stockQuantity, lowLevel, availableQuantity, allocatedQuantity, restockDate, lastRestockQuantity, purchasePrice, sellPrice, weight, dimensions, providers, note))
      setJsonData(newObj);
    }
    setModal(!modal);
  };
  const data2 = products.map((prop, key) => {
    return {
      id: key,
      productId: prop.productId,
      name: prop.name,
      description: prop.description,
      stockQuantity: prop.stockQuantity,
      lowLevel: prop.lowLevel,
      availableQuantity: prop.availableQuantity,
      allocatedQuantity: prop.allocatedQuantity,
      restockDate: prop.restockDate,
      lastRestockQuantity: prop.lastRestockQuantity,
      purchasePrice: prop.purchasePrice,
      sellPrice: prop.sellPrice,
      weight: prop.weight,
      dimensions: prop.dimensions,
      note: prop.note,
      categoryId: categories.find((singleCategory) => singleCategory['@id'] === prop.category) && categories.find((singleCategory) => singleCategory['@id'] === prop.category)['@id'],
      providerId: providers.find((singleProvider) => singleProvider['@id'] === prop.provider) && providers.find((singleProvider) => singleProvider['@id'] === prop.provider)['@id'],
      category: categories.find((singleCategory) => singleCategory['@id'] === prop.category) && categories.find((singleCategory) => singleCategory['@id'] === prop.category).name,
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
              <Label for="category">categories</Label>
              <Input
                id="category"
                name="category"
                type="select"
              >
                <option>Scegli una categoria...</option>
                {categories.map((singleCategory => obj !== null && obj.categoryId !== undefined && singleCategory['@id'] === obj.categoryId ? <option key={singleCategory['@id']} value={singleCategory['@id']} selected>{singleCategory.name}</option> : <option key={singleCategory['@id']} value={singleCategory['@id']}>{singleCategory.name}</option>))}
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
                {providers.map((singleProvider => obj !== null && obj.providerId !== undefined && singleProvider['@id'] === obj.providerId ? <option selected key={singleProvider['@id']} value={singleProvider['@id']}>{singleProvider.companyName}</option> : <option key={singleProvider['@id']} value={singleProvider['@id']}>{singleProvider.companyName}</option>))}
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
              Header: "Product Id",
              accessor: "productId",
            },
            {
              Header: "Name",
              accessor: "name",
            },
            {
              Header: "Category",
              accessor: "category",
            },
            {
              Header: "Available Quantity",
              accessor: "availableQuantity",
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
