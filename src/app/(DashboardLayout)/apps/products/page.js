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
  deleteProductItem,
  isEdit,
  UpdateProduct,
  AddProductsItem
} from "@/store/apps/products/ProductSlice";
import {
  SelectProductKit,
  fetchProductsKits,
  deleteProductsKitItem,
  UpdateProductsKit,
  AddProductsKitItem
} from "@/store/apps/productKit/ProductKitSlice";
import {
  SelectContact,
  fetchContacts,
  DeleteContact,
} from "@/store/apps/providers/ProviderSlice";
import {
  fetchCategories,
  AddCategoryItem,
  UpdateCategoryItem,
  DeleteCategoryItem
} from "@/store/apps/category/CategorySlice";

const CustomReactTable = () => {
  const [modal, setModal] = useState(false);
  const [modalKit, setModalKit] = useState(false);
  const [modalCategory, setModalCategory] = useState(false);
  const [obj, setObj] = useState({});
  const [productElements, setProductElements] = useState([]);

  const toggle = () => {
    setModal(!modal);
  };

  const toggleKit = () => {
    setModalKit(!modalKit);
  };

  const toggleCategory = () => {
    setModalCategory(!modalCategory);
  };
  
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchProducts(1));
    dispatch(fetchProductsKits(1));
    dispatch(fetchContacts());
    dispatch(fetchCategories());
  }, [dispatch]);
  
  const products = useSelector((state) => state.productsReducer.products);

  const productsKits = useSelector((state) => state.productsKitsReducer.productsKits);
  
  const provider = useSelector((state) => state.providersReducer.contacts);

  const categories = useSelector((state) => state.categoryReducer.categories);

  const totalPageCategory = useSelector((state) => state.categoryReducer.totalPage);

  const totalPage = useSelector((state) => state.productsReducer.totalPage);

  const [modalDelete, setModalDelete] = useState(false);

  const [modalDeleteKit, setModalDeleteKit] = useState(false);

  const [modalDeleteCategory, setModalDeleteCategory] = useState(false);

  const handleAddElementProduct = () => {
    setProductElements([...productElements, {
      selectProduct: '',
      elementsQuantity: 0,
    }]);
  };

  const removeElementProduct = (index) => {
    const newElements = [...productElements];
    newElements.splice(index, 1);
    setProductElements(newElements);
  };

  const handleChangeProducts = (event, index) => {
    const newElements = [...productElements];
    const updatedObject = { ...newElements[index] };
    if (event.target.name === 'selectProduct') {
      updatedObject.selectProduct = event.target.value;
    } else {
      updatedObject.elementsQuantity = parseInt(event.target.value);
    }
    newElements[index] = updatedObject;
    setProductElements(newElements);
  };
  
  const handleSubmitCategory = (event) => {
    event.preventDefault()
    console.log(obj)
    console.log(event.target.name.value)
    console.log(event.target.remoteId.value)
    if (event.target.remoteId.value) dispatch(UpdateCategoryItem({"name": event.target.name.value, "remoteId": event.target.remoteId.value}))
      else dispatch(AddCategoryItem({"name": event.target.name.value}))
    setModalCategory(!modalCategory);
  }

  const handleSubmitKit = (event) => {
    event.preventDefault()
    if (event.target.remoteId !== undefined) dispatch(UpdateProductsKit({"name": event.target.name.value, "products": productElements, "remoteId": event.target.remoteId.value, "id": event.target.id.value}))
      else dispatch(AddProductsKitItem({"name": event.target.name.value, "products": productElements, "id": event.target.id.value}))
    setModalKit(!modalKit);
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(event)
    if (event.target.category.value === "Scegli una categoria...") alert("Categoria mancante");
    else if (event.target.id.value !== undefined) {
      const id = event.target.id.value;
      const productId = event.target.productId.value;
      const name = event.target.name.value;
      const category = event.target.category.value;
      const stockQuantity = parseInt(event.target.stockQuantity.value);
      const lowLevel = parseInt(event.target.lowLevel.value);
      const availableQuantity = parseInt(event.target.availableQuantity.value);
      const allocatedQuantity = parseInt(event.target.allocatedQuantity.value);
      const restockDate = parseInt(event.target.restockDate.value);
      const lastRestockQuantity = parseInt(event.target.lastRestockQuantity.value);
      const purchasePrice = parseInt(event.target.purchasePrice.value);
      const sellPrice = parseInt(event.target.sellPrice.value);
      const weight = event.target.weight.value;
      const dimensions = event.target.dimensions.value;
      const provider = event.target.provider.value;
      const note = event.target.note.value;
      const remoteId = event.target.remoteId.value;
      const newObj = {"id": id, "productId" : productId, "name": name, "category": category, "stockQuantity": stockQuantity, "lowLevel": lowLevel, "availableQuantity": availableQuantity, "allocatedQuantity": allocatedQuantity, "restockDate": restockDate, "lastRestockQuantity": lastRestockQuantity, "purchasePrice": purchasePrice, "sellPrice": sellPrice, "weight": weight, "dimensions": dimensions, "provider": provider, "note": note, "remoteId": remoteId};
      dispatch(UpdateProduct(newObj))
    } else {
      const productId = event.target.productId.value;
      const name = event.target.name.value;
      const category = event.target.category.value;
      const stockQuantity = parseInt(event.target.stockQuantity.value);
      const lowLevel = parseInt(event.target.lowLevel.value);
      const availableQuantity = parseInt(event.target.availableQuantity.value);
      const allocatedQuantity = parseInt(event.target.allocatedQuantity.value);
      const restockDate = parseInt(event.target.restockDate.value);
      const lastRestockQuantity = parseInt(event.target.lastRestockQuantity.value);
      const purchasePrice = parseInt(event.target.purchasePrice.value);
      const sellPrice = parseInt(event.target.sellPrice.value);
      const weight = event.target.weight.value;
      const dimensions = event.target.dimensions.value;
      const provider = event.target.provider.value;
      const note = event.target.note.value;
      //const newObj = JSON.parse(JSON.stringify(jsonData));
      //newObj.push({"productId" : productId, "name": name, "category": category, "description": description, "stockQuantity": stockQuantity, "lowLevel": lowLevel, "availableQuantity": availableQuantity, "allocatedQuantity": allocatedQuantity, "restockDate": restockDate, "lastRestockQuantity": lastRestockQuantity, "purchasePrice": purchasePrice, "sellPrice": sellPrice, "weight": weight, "dimensions": dimensions, "provider": provider, "note": note});
      //console.log(newObj)
      dispatch(AddProductsItem({productId, name, category, stockQuantity, lowLevel, availableQuantity, allocatedQuantity, restockDate, lastRestockQuantity, purchasePrice, sellPrice, weight, dimensions, provider, note}))
      //setJsonData(newObj);
    }
    if (event.target.category.value !== "Scegli una categoria...") setModal(!modal);
  };
  const dataCategories = categories.map((prop, key) => {
    return {
      id: key,
      name: prop.name,
      remoteId: prop.remoteId ? prop.remoteId : prop['@id'],
      actions: (
        // we've added some custom button actions
        <div className="text-center">
          {/* use this button to add a edit kind of action */}
          <Button
            onClick={() => {
              const sobj = dataCategories.find((o) => o.id === key);
              setModalCategory(!modalCategory);
              setObj(sobj);
            }}
            color="primary"
            size="sm"
            round="true"
            icon="true"
          >
            MODIFICA
          </Button>
          <Button
							onClick={() => {
                const sobj = dataCategories.find((o) => o.id === key);
                setModalDeleteCategory(!modalDeleteCategory);
                setObj(sobj);
							}}
							className="ml-1"
							color="danger"
							size="sm"
							round="true"
							icon="true"
            >
							CANCELLA
						</Button>
          {/* use this button to remove the data row */}
        </div>
      ),
    };
  })
  const dataKits = productsKits.map((prop, key) => {
    let productString = ""
    productString = productString  + prop.products.map((singleProduct) => products.find(productToFind => singleProduct.selectProduct === productToFind['@id']) && products.find(productToFind => singleProduct.selectProduct === productToFind['@id']).name + " (" + singleProduct.elementsQuantity + ") ")
    return {
      id: key,
      name: prop.name,
      products: productString,
      productsArray: prop.products,
      remoteId: prop.remoteId ? prop.remoteId : prop['@id'],
      actions: (
        // we've added some custom button actions
        <div className="text-center">
          {/* use this button to add a edit kind of action */}
          <Button
            onClick={() => {
              const sobj = dataKits.find((o) => o.id === key);
              setProductElements(sobj.productsArray);
              setModalKit(!modalKit);
              setObj(sobj);
            }}
            color="primary"
            size="sm"
            round="true"
            icon="true"
          >
            MODIFICA
          </Button>
          <Button
							onClick={() => {
                const sobj = dataKits.find((o) => o.id === key);
                setModalDeleteKit(!modalDeleteKit);
                setObj(sobj);
							}}
							className="ml-1"
							color="danger"
							size="sm"
							round="true"
							icon="true"
            >
							CANCELLA
						</Button>
          {/* use this button to remove the data row */}
        </div>
      ),
    };
  })
  const data2 = products.map((prop, key) => {
    return {
      id: key,
      productId: prop.productId,
      name: prop.name,
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
      remoteId: prop.remoteId ? prop.remoteId : prop['@id'],
      categoryId: categories.find((singleCategory) => singleCategory['@id'] === prop.category) && categories.find((singleCategory) => singleCategory['@id'] === prop.category)['@id'],
      providerId: provider.find((singleProvider) => singleProvider['@id'] === prop.provider) && provider.find((singleProvider) => singleProvider['@id'] === prop.provider)['@id'],
      category: categories.find((singleCategory) => singleCategory['@id'] === prop.category) && categories.find((singleCategory) => singleCategory['@id'] === prop.category).name,
      provider: provider.find((singleProvider) => singleProvider['@id'] === prop.provider) && provider.find((singleProvider) => singleProvider['@id'] === prop.provider).companyName,
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
            color="primary"
            size="sm"
            round="true"
            icon="true"
          >
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
          <Button style={{margin: "5px"}} color="danger" onClick={() => {console.log(obj.remoteId); dispatch(deleteProductItem(obj.remoteId,obj.id)); setModalDelete(!modalDelete)}}>       Rimuovi
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
      <Modal isOpen={modalDeleteKit} toggle={() => setModalDeleteKit(!modalDeleteKit)}>
        <ModalHeader toggle={() => setModalDelete(!modalDelete)}>Confermi di voler cancellare?</ModalHeader>
        <ModalBody>
          <Button style={{margin: "5px"}} color="danger" onClick={() => {console.log(obj.remoteId); dispatch(deleteProductsKitItem(obj.remoteId,obj.id)); setModalDeleteKit(!modalDeleteKit)}}>       Rimuovi
          </Button>
          <Button
            color="secondary"
            className="ml-1"
            onClick={() => setModalDeleteKit(!modalDeleteKit)}
          >
            Annulla
          </Button>
        </ModalBody>
      </Modal>
      <Modal isOpen={modalDeleteCategory} toggle={() => setModalDeleteCategory(!modalDeleteCategory)}>
        <ModalHeader toggle={() => setModalDeleteCategory(!modalDeleteCategory)}>Confermi di voler cancellare?</ModalHeader>
        <ModalBody>
          <Button style={{margin: "5px"}} color="danger" onClick={() => {console.log(obj.remoteId); dispatch(DeleteCategoryItem(obj.remoteId,obj.id)); setModalDeleteCategory(!modalDeleteCategory)}}>       Rimuovi
          </Button>
          <Button
            color="secondary"
            className="ml-1"
            onClick={() => setModalDeleteCategory(!modalDeleteCategory)}
          >
            Annulla
          </Button>
        </ModalBody>
      </Modal>
      <Modal isOpen={modal} toggle={toggle.bind(null)}>
        <ModalHeader toggle={toggle.bind(null)}>Nuovo prodotto</ModalHeader>
        <ModalBody>
          <Form onSubmit={(event) => handleSubmit(event)}>
            {obj !== null && <Input type="hidden" name="id" id="id" defaultValue={obj.id} />}
            {obj !== null && <Input type="hidden" name="remoteId" id="remoteId" defaultValue={obj.remoteId} />}
            <FormGroup>
              <Label for="productId">Id Prodotto</Label>
              <Input
                type="text"
                name="productId"
                id="productId"
                required
                defaultValue={obj !== null ? obj.productId : ""}
              />
            </FormGroup>
            <FormGroup>
              <Label for="name">Nome</Label>
              <Input
                type="text"
                name="name"
                id="name"
                defaultValue={obj !== null ? obj.name : ""}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label for="category">Categoria</Label>
              <Input
                id="category"
                name="category"
                type="select"
                required
              >
                <option>Scegli una categoria...</option>
                {categories.map((singleCategory => obj !== null && obj.categoryId !== undefined && singleCategory['@id'] === obj.categoryId ? <option key={singleCategory['@id']} value={singleCategory['@id']} selected>{singleCategory.name}</option> : <option key={singleCategory['@id']} value={singleCategory['@id']}>{singleCategory.name}</option>))}
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="stockQuantity">Quantità in magazzino</Label>
              <Input
                type="text"
                name="stockQuantity"
                id="stockQuantity"
                defaultValue={obj !== null ? obj.stockQuantity : ""}
              />
            </FormGroup>
            <FormGroup>
              <Label for="lowLevel">Soglia minima</Label>
              <Input
                type="text"
                name="lowLevel"
                id="lowLevel"
                defaultValue={obj !== null ? obj.lowLevel : ""}
              />
            </FormGroup>
            <FormGroup>
              <Label for="availableQuantity">Quantità disponibile</Label>
              <Input
                type="text"
                name="availableQuantity"
                id="availableQuantity"
                defaultValue={obj !== null ? obj.availableQuantity : ""}
              />
            </FormGroup>
            <FormGroup>
              <Label for="allocatedQuantity">Quantità allocata</Label>
              <Input
                type="text"
                name="allocatedQuantity"
                id="allocatedQuantity"
                defaultValue={obj !== null ? obj.allocatedQuantity : ""}
              />
            </FormGroup>
            <FormGroup>
              <Label for="restockDate">Date riordino</Label>
              <Input
                type="text"
                name="restockDate"
                id="restockDate"
                defaultValue={obj !== null ? obj.restockDate : ""}
              />
            </FormGroup>
            <FormGroup>
              <Label for="lastRestockQuantity">Quantità ultimo riordino</Label>
              <Input
                type="text"
                name="lastRestockQuantity"
                id="lastRestockQuantity"
                defaultValue={obj !== null ? obj.lastRestockQuantity : ""}
              />
            </FormGroup>
            <FormGroup>
              <Label for="purchasePrice">Prezzo acquisto</Label>
              <Input
                type="text"
                name="purchasePrice"
                id="purchasePrice"
                defaultValue={obj !== null ? obj.purchasePrice : ""}
              />
            </FormGroup>
            <FormGroup>
              <Label for="sellPrice">Prezzo vendita</Label>
              <Input
                type="text"
                name="sellPrice"
                id="sellPrice"
                defaultValue={obj !== null ? obj.sellPrice : ""}
              />
            </FormGroup>
            <FormGroup>
              <Label for="weight">Peso</Label>
              <Input
                type="text"
                name="weight"
                id="weight"
                defaultValue={obj !== null ? obj.weight : ""}
              />
            </FormGroup>
            <FormGroup>
              <Label for="dimensions">Dimensioni</Label>
              <Input
                type="text"
                name="dimensions"
                id="dimensions"
                defaultValue={obj !== null ? obj.dimensions : ""}
              />
            </FormGroup>
            <FormGroup>
              <Label for="provider">Fornitore</Label>
              <Input
                id="provider"
                name="provider"
                type="select"
              >
                <option>Scegli un fornitore...</option>
                {provider.map((singleProvider => obj !== null && obj.providerId !== undefined && singleProvider['@id'] === obj.providerId ? <option selected key={singleProvider['@id']} value={singleProvider['@id']}>{singleProvider.companyName}</option> : <option key={singleProvider['@id']} value={singleProvider['@id']}>{singleProvider.companyName}</option>))}
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="note">Note</Label>
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
                Salva
              </Button>
              <Button
                color="secondary"
                className="ml-1"
                onClick={toggle.bind(null)}
              >
                Cancella
              </Button>
            </FormGroup>
          </Form>
        </ModalBody>
      </Modal>
      <Modal isOpen={modalKit} toggle={toggleKit.bind(null)}>
        <ModalHeader toggle={toggleKit.bind(null)}>Nuovo kit</ModalHeader>
        <ModalBody>
          <Form onSubmit={(event) => handleSubmitKit(event)}>
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
            {productElements.map((element, index) => (
            <FormGroup key={index}>
              <Label for="product">Prodotto</Label>
              <Input
                id="selectProduct"
                name="selectProduct"
                type="select"
                onChange={(event) => handleChangeProducts(event, index)}
              >
                <option>Scegli un prodotto...</option>
                {products.map((singleProduct => element.selectProduct === singleProduct['@id'] ? <option selected key={singleProduct['@id']} value={singleProduct['@id']}>{singleProduct.name}</option> : <option key={singleProduct['@id']} value={singleProduct['@id']}>{singleProduct.name}</option>))}
              </Input>
              <br/>
              <Label for="quantity">Quantità</Label>
              <Input
                type="number"
                name="elementsQuantity"
                id="elementsQuantity"
                value={element.elementsQuantity}
                onChange={(event) => handleChangeProducts(event, index)}
              />
              <br/>
              <Button color="danger" type="button" onClick={removeElementProduct}>Rimuovi elemento</Button>
            </FormGroup>))}
            <Button color="primary" type="button" onClick={handleAddElementProduct}>Aggiungi elemento</Button>
            <br/>
            <br/>
            <FormGroup>
              <Button color="primary" type="submit">
                Salva
              </Button>
              <Button
                color="secondary"
                className="ml-1"
                onClick={toggleKit.bind(null)}
              >
                Cancella
              </Button>
            </FormGroup>
          </Form>
        </ModalBody>
      </Modal>
      <Modal isOpen={modalCategory} toggle={toggleCategory.bind(null)}>
        <ModalHeader toggle={toggleCategory.bind(null)}>Nuova categoria</ModalHeader>
        <ModalBody>
          <Form onSubmit={(event) => handleSubmitCategory(event)}>
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
              <Button color="primary" type="submit">
                Salva
              </Button>
              <Button
                color="secondary"
                className="ml-1"
                onClick={toggleCategory.bind(null)}
              >
                Cancella
              </Button>
            </FormGroup>
          </Form>
        </ModalBody>
      </Modal>
      {/*--------------------------------------------------------------------------------*/}
      {/* Start Action table*/}
      {/*--------------------------------------------------------------------------------*/}
      <div className="p-3 border-bottom">
        <Button color="danger" block onClick={() => { setObj(null); toggleKit() }}>
          Aggiungi kit
        </Button>
      </div>
      <ComponentCard title="Action Table">
        <ReactTable
          columns={[
            {
              Header: "Nome",
              accessor: "name",
            },
            {
              Header: "Elementi",
              accessor: "products",
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
          data={dataKits}
          onPageChange={async (pageIndex) => {
            await dispatch(fetchOrders(pageIndex + 1));
          }}
        />
      </ComponentCard>
      {/*--------------------------------------------------------------------------------*/}
      {/* End Action table*/}
      {/*--------------------------------------------------------------------------------*/}
      {/*--------------------------------------------------------------------------------*/}
      {/* Start Action table*/}
      {/*--------------------------------------------------------------------------------*/}
      <div className="p-3 border-bottom">
        <Button color="danger" block onClick={() => { setObj(null); toggle() }}>
          Aggiungi prodotto
        </Button>
      </div>
      <ComponentCard title="Action Table">
        <ReactTable
          columns={[
            {
              Header: "Id Prodotto",
              accessor: "productId",
            },
            {
              Header: "Nome",
              accessor: "name",
            },
            {
              Header: "Categoria",
              accessor: "category",
            },
            {
              Header: "Quantità disponibile",
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
        />
      </ComponentCard>
      {/*--------------------------------------------------------------------------------*/}
      {/* End Action table*/}
      {/*--------------------------------------------------------------------------------*/}
      {/*--------------------------------------------------------------------------------*/}
      {/* Start Action table*/}
      {/*--------------------------------------------------------------------------------*/}
      <div className="p-3 border-bottom">
        <Button color="danger" block onClick={() => { setObj(null); toggleCategory() }}>
          Aggiungi categoria
        </Button>
      </div>
      <ComponentCard title="Action Table">
        <ReactTable
          columns={[
            {
              Header: "Nome",
              accessor: "name",
            },
            {
              Header: "Actions",
              accessor: "actions",
              sortable: false,
              filterable: false,
            },
          ]}
          pages={totalPageCategory}
          showPaginationBottom
          showPageSizeOptions={false}
          manual
          showPageJump= {true}
          className="-striped -highlight"
          data={dataCategories}
          onPageChange={async (pageIndex) => {
            await dispatch(fetchCategories(pageIndex + 1));
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
