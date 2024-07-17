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
  fetchOrdersDelivered,
  DeleteOrder,
  isEdit,
  UpdateOrder,
  addOrder,
  AddOrdersItem,
  deleteOrderItem,
  deliveredOrder
} from "@/store/apps/orders/OrderSlice";
import {
  SelectContact,
  fetchContacts,
  DeleteContact,
  toggleStarredContact,
} from "@/store/apps/providers/ProviderSlice";
import axios from "axios";
import {
  SelectProduct,
  fetchProducts,
  deleteProductItem,
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
import Select from 'react-select'

const CustomReactTable = () => {
  const [modal, setModal] = useState(false);
  const [modalDelete, setModalDelete] = useState(false);
  const [modalDelivery, setModalDelivery] = useState(false);
  const [obj, setObj] = useState({});
  const [jsonData, setJsonData] = useState(useSelector((state) => state.ordersReducer.orders));
  const [page, setPage] = useState(1);
  const [productElements, setProductElements] = useState([]);
  const [totalProduct, setTotalProduct] = useState(0);
  const [productsKitValue,setProductsKitValue] = useState(null);
  const products = useSelector((state) => state.productsReducer.products);
  const productsKits = useSelector((state) => state.productsKitsReducer.productsKits);
  const [materialTotalCost, setMaterialTotalCost] = useState(0);
  const [totalCost, setTotalCost] = useState(0);
  const [totalKitPrice, setTotalKitPrice] = useState(0);
  const [totalProductPrice, setTotalProductPrice] = useState(0);

  const toggle = () => {
    setModal(!modal);
  };
  
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchOrdersDelivered(1));
    dispatch(fetchContacts());
    dispatch(fetchProducts(1));
    dispatch(fetchProductsKits(1));
  }, [dispatch]);
  
  const providers = useSelector((state) => state.providersReducer.contacts);
  
  const orders = useSelector((state) => state.ordersReducer.orders);

  const totalPage = useSelector((state) => state.offersReducer.totalPage);

  const handleAddElementProduct = () => {
    setProductElements([...productElements, {
      selectProduct: '',
      elementsQuantity: 0,
    }]);
  };

  const removeElementProduct = async (index) => {
    const newElements = [...productElements];
    newElements.splice(index, 1);
    setProductElements(newElements);
    let sum = 0;
    let totalCostTemp = 0;
    await newElements.map((singleProductElement) => sum = sum + singleProductElement.totalPrice);
    productsKitValue.map((singleProductsKitOption) => productsKits.find((singleProductsKits) => singleProductsKitOption.value === singleProductsKits['@id']).products.map((singleProduct) => totalCostTemp = totalCostTemp + products.find((singleProductFind) => singleProductFind['@id'] === singleProduct.selectProduct).sellPrice * singleProduct.elementsQuantity));
    sum = sum + totalCostTemp;
    setTotalCost(sum);
  };
  const handleChangeKit = async (event) => {
    let totalCostTemp = 0;
    let sum = 0;
    await event.map((singleProductsKitOption) => productsKits.find((singleProductsKits) => singleProductsKitOption.value === singleProductsKits['@id']).products.map((singleProduct) => totalCostTemp = totalCostTemp + products.find((singleProductFind) => singleProductFind['@id'] === singleProduct.selectProduct).sellPrice * singleProduct.elementsQuantity)); 
    await productElements.map((singleProductElement) => sum = sum + singleProductElement.totalPrice);
    setProductsKitValue(event);
    sum = sum + totalCostTemp;
    setTotalCost(sum);
  }

  const handleChangeProducts = async (event, index) => {
    const newElements = [...productElements];
    let newObject = {}
    if (event.target.name === 'selectProduct') {
      newObject.selectProduct = event.target.value;
      newObject.elementsQuantity = newElements[index].elementsQuantity;
    } else {
      newObject.selectProduct = newElements[index].selectProduct;
      newObject.elementsQuantity = parseInt(event.target.value);
    }
    if (newObject.selectProduct && newObject.elementsQuantity) newObject.totalPrice = products.find((singleProduct) => singleProduct['@id'] === newObject.selectProduct).purchasePrice * newObject.elementsQuantity;
    newElements[index] = newObject;
    setProductElements(newElements);
    let sum = 0;
    let totalCostTemp = 0;
    await newElements.map((singleProductElement) => sum = sum + singleProductElement.totalPrice);
    productsKitValue.map((singleProductsKitOption) => productsKits.find((singleProductsKits) => singleProductsKitOption.value === singleProductsKits['@id']).products.map((singleProduct) => totalCostTemp = totalCostTemp + products.find((singleProductFind) => singleProductFind['@id'] === singleProduct.selectProduct).sellPrice * singleProduct.elementsQuantity));
    sum = sum + totalCostTemp;
    setTotalCost(sum);
  };

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log("id");
    console.log(event.target.id)
    console.log("remote id");
    console.log(event.target.remoteId)
    if (event.target.remoteId !== undefined) {
      const id = event.target.id.value;
      const provider = event.target.provider.value;
      const orderDate = event.target.orderDate.value;
      const deliveryDate = event.target.deliveryDate.value;
      const realDeliveryDate = event.target.realDeliveryDate.value !== "" ? event.target.realDeliveryDate.value : null;
      const color = event.target.color.value;
      const note = event.target.note.value;
      const remoteId = event.target.remoteId.value;
      dispatch(UpdateOrder({"provider" : provider, "orderDate": orderDate, "deliveryDate": deliveryDate, "realDeliveryDate": realDeliveryDate, "color": color, "note": note, "id": id, "remoteId": remoteId, totalCost: parseInt(totalCost), productElements: productElements, productsKits: productsKitValue}))
    } else {
      const provider = event.target.provider.value;
      const orderDate = event.target.orderDate.value;
      const deliveryDate = event.target.deliveryDate.value;
      const realDeliveryDate = event.target.realDeliveryDate.value !== "" ? event.target.realDeliveryDate.value : null;
      const color = event.target.color.value;
      const note = event.target.note.value;
      dispatch(AddOrdersItem({"provider" : provider, "orderDate": orderDate, "deliveryDate": deliveryDate, "realDeliveryDate": realDeliveryDate, "color": color, "note": note, totalCost: parseInt(totalCost), productElements: productElements, productsKits: productsKitValue }))
    }
    setModal(!modal);
  };

  useEffect(() => {
    setTotalCost(parseInt(totalKitPrice) + parseInt(totalProductPrice))
    //setMaterialTotalCost(parseInt(materialTotalCost) + parseInt(totalProduct))
  }, [totalKitPrice,totalProductPrice])

  let productsKitsOptions = []
  
  productsKits.map((singleProductsKit) => productsKitsOptions.push({value: singleProductsKit['@id'], label: singleProductsKit.name}))

  const data2 = orders.map((prop, key) => {
    return {
      id: key,
      providerId: providers.find((singleProvider) => singleProvider['@id'] === prop.provider) && providers.find((singleProvider) => singleProvider['@id'] === prop.provider)['@id'],
      provider: providers.find((singleProvider) => singleProvider['@id'] === prop.provider) && providers.find((singleProvider) => singleProvider['@id'] === prop.provider).companyName,
      orderDate: new Date(prop.orderDate).getFullYear() + "-" + (new Date(prop.orderDate).getMonth() < 9 ? ("0" + (new Date(prop.orderDate).getMonth() + 1)) : new Date(prop.orderDate).getMonth() + 1) + "-" + (new Date(prop.orderDate).getDate() < 10 ? "0" + new Date(prop.orderDate).getDate() : new Date(prop.orderDate).getDate()),
      deliveryDate:  new Date(prop.deliveryDate).getFullYear() + "-" + (new Date(prop.deliveryDate).getMonth() < 9 ? ("0" + (new Date(prop.deliveryDate).getMonth() + 1)) : new Date(prop.deliveryDate).getMonth() + 1) + "-" + (new Date(prop.deliveryDate).getDate() < 10 ? "0" + new Date(prop.deliveryDate).getDate() : new Date(prop.deliveryDate).getDate()),
      realDeliveryDate: prop.realDeliveryDate && (new Date(prop.realDeliveryDate).getFullYear() + "-" + (new Date(prop.realDeliveryDate).getMonth() < 9 ? ("0" + (new Date(prop.realDeliveryDate).getMonth() + 1)) : new Date(prop.realDeliveryDate).getMonth() + 1) + "-" + (new Date(prop.realDeliveryDate).getDate() < 10 ? "0" + new Date(prop.realDeliveryDate).getDate() : new Date(prop.realDeliveryDate).getDate())),
      color: prop.color,
      note: prop.note,
      productElements: prop.productElements,
      productsKitValue: prop.productsKits,
      totalProduct: prop.totalCost,
      remoteId: prop.remoteId ? prop.remoteId : prop['@id'],
      orderDateString: new Date(prop.orderDate).getDate() + "-" + (new Date(prop.orderDate).getMonth() < 9 ? ("0" + (new Date(prop.orderDate).getMonth() + 1)) : new Date(prop.orderDate).getMonth() + 1) + "-" + new Date(prop.orderDate).getFullYear(),
      deliveryDateString: new Date(prop.deliveryDate).getDate()  + "-" + (new Date(prop.deliveryDate).getMonth() < 9 ? ("0" + (new Date(prop.deliveryDate).getMonth() + 1)) : new Date(prop.deliveryDate).getMonth() + 1) + "-" + new Date(prop.deliveryDate).getFullYear(),
      realDeliveryDateString: prop.realDeliveryDate && (new Date(prop.realDeliveryDate).getDate() + "-" + (new Date(prop.realDeliveryDate).getMonth() < 9 ? ("0" + (new Date(prop.realDeliveryDate).getMonth() + 1)) : new Date(prop.realDeliveryDate).getMonth() + 1) + "-" + new Date(prop.realDeliveryDate).getFullYear()),
      actions: (
        // we've added some custom button actions
        <div className="text-center">
          {/* use this button to add a edit kind of action */}
          {prop.delivered !== true ?
          <Button 
            onClick={() => {
              const sobj = data2.find((o) => o.id === key);
              console.log(sobj)
              setModalDelivery(!modalDelivery);
              setObj({id: key, delivered: true, remoteId: sobj.remoteId, productElements: sobj.productElements, productsKits: sobj.productsKitValue});
						}}
            className="m-1" 
            color="success"
            size="sm"
            round="true"
            icon="true">
            CONSEGNATO
          </Button>
          :
          <Button 
            onClick={() => {
              const sobj = data2.find((o) => o.id === key);
              console.log(sobj)
              setModalDelivery(!modalDelivery);
              setObj({id: key, delivered: false, remoteId: sobj.remoteId, productElements: sobj.productElements, productsKits: sobj.productsKitValue});
						}}
            className="m-1" 
            color="danger"
            size="sm"
            round="true"
            icon="true">
            ANNULLA CONSEGNA
          </Button>
          }
          <Button
            onClick={() => {
              const sobj = data2.find((o) => o.id === key);
              setModal(!modal);
              setObj(sobj);
              setProductElements(sobj.productElements);
              setProductsKitValue(sobj.productsKitValue);
              setTotalCost(parseInt(sobj.totalProduct))
            }}
            color="primary"
            size="sm"
            round="true"
            icon="true"
            className="m-1"
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
							className="m-1"
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
    <div style={{width: "100%"}}>
      <BreadCrumbs />
      <Modal isOpen={modal} toggle={toggle.bind(null)}>
        <ModalHeader toggle={toggle.bind(null)}>Nuovo ordine</ModalHeader>
        <ModalBody>
          <Form onSubmit={(event) => handleSubmit(event)}>
            {Object.keys(obj).length > 0 && <Input type="hidden" name="id" id="id" defaultValue={obj.id} />}
            {Object.keys(obj).length > 0 && <Input type="hidden" name="remoteId" id="remoteId" defaultValue={obj.remoteId} />}
            <FormGroup>
              <Label for="provider">Fornitore</Label>
              <Input
                id="provider"
                name="provider"
                type="select"
              >
                <option>Scegli un fornitore...</option>
                
                {providers.map((singleProvider => (obj !== null && obj.providerId === singleProvider['@id']) ? 
                <option key={singleProvider['@id']} value={singleProvider['@id']} selected>{singleProvider.companyName}</option> 
                : 
                <option key={singleProvider['@id']} value={singleProvider['@id']}>{singleProvider.companyName}</option>))}
              </Input>
            </FormGroup>
            <Label >Aggiungi materiale</Label>
            <br/>
            <FormGroup>
              <Label >Aggiungi kit</Label>
              <Select
                closeMenuOnSelect={false}
                isMulti
                options={productsKitsOptions}
                name="productsKit"
                id="productsKit"
                value={productsKitValue}
                onChange={(e) => handleChangeKit(e)}
              />
            </FormGroup>
            {productElements && productElements.map((element, index) => (
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
            <Label>Costo totale ordine</Label>
            <Input
              type="number"
              name="totalCost"
              id="totalCost"
              value={totalCost}
            />
            <br/>
            <FormGroup>
              <Label for="orderDate">Data ordine</Label>
              <Input
                type="date"
                name="orderDate"
                id="orderDate"
                defaultValue={obj !== null ? obj.orderDate : ""}
              />
            </FormGroup>
            <FormGroup>
              <Label for="deliveryDate">Data di consegna</Label>
              <Input
                type="date"
                name="deliveryDate"
                id="deliveryDate"
                defaultValue={obj !== null ? obj.deliveryDate : ""}
              />
            </FormGroup>
            <FormGroup>
              <Label for="realDeliveryDate">Data di consegna reale</Label>
              <Input
                type="date"
                name="realDeliveryDate"
                id="realDeliveryDate"
                defaultValue={obj !== null ? obj.realDeliveryDate : ""}
              />
            </FormGroup>
            <FormGroup>
              <Label for="color">Colore</Label>
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
                Salva
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
      <Modal isOpen={modalDelete} toggle={() => setModalDelete(!modalDelete)}>
        <ModalHeader toggle={() => setModalDelete(!modalDelete)}>Confermi di voler cancellare?</ModalHeader>
        <ModalBody>
          <Button style={{margin: "5px"}} color="danger" onClick={() => {console.log(obj.remoteId); dispatch(deleteOrderItem(obj.remoteId,obj.id)); setModalDelete(!modalDelete)}}>       Rimuovi
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
      <Modal isOpen={modalDelivery} toggle={() => setModalDelivery(!modalDelivery)}>
        <ModalHeader toggle={() => setModalDelivery(!modalDelivery)}>{obj.delivered !== true ? "Cancelli la consegna dell'ordine?" : "Confermi la consegna dell'ordine?" }</ModalHeader>
        <ModalBody>
          <Button style={{margin: "5px"}} color="danger" onClick={() => { dispatch(deliveredOrder(obj)); setModalDelivery(!modalDelivery)}}> Ordine {obj.delivered !== true && "non"} consegnato
          </Button>
          <Button
            color="secondary"
            className="ml-1"
            onClick={() => setModalDelivery(!modalDelivery)}
          >
            Annulla
          </Button>
        </ModalBody>
      </Modal>
      {/*--------------------------------------------------------------------------------*/}
      {/* Start Action table*/}
      {/*--------------------------------------------------------------------------------*/}
      <ComponentCard title="Storico Ordini">
        <ReactTable
          columns={[
            {
              Header: "Fornitore",
              accessor: "provider",
            },
            {
              Header: "Data ordine",
              accessor: "orderDateString",
            },
            {
              Header: "Data consegna",
              accessor: "deliveryDateString",
            },
            {
              Header: "Data consegna reale",
              accessor: "realDeliveryDateString",
            },
            {
              Header: "Azioni",
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
            if (rowInfo !== undefined)
              return {
                style: {
                  background: rowInfo.row['_original'].color !== undefined ? rowInfo.row['_original'].color : "green"
                }
              };
              else return {}
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
