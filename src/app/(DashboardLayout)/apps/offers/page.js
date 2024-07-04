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

import { fetchSalesAgents } from "@/store/apps/salesAgents/SalesAgentsSlice";
import Select from 'react-select'

const CustomReactTable = () => {
  const [modal, setModal] = useState(false);
  const [obj, setObj] = useState({});
  const [jsonData, setJsonData] = useState(data.dataTable);
  const [loading,setLoading] = useState(false)
  const [modalDelete, setModalDelete] = useState(false);
  const [productElements, setProductElements] = useState([]);
  const [materialTotalCost, setMaterialTotalCost] = useState(0);
  const [customTotalCost, setCustomTotalCost] = useState(0);
  const [totalProduct, setTotalProduct] = useState(0);
  const [mechanicalDesignTimeCost, setMechanicalDesignTimeCost] = useState(0);
  const [mechanicalDesignTime, setMechanicalDesignTime] = useState(0);
  const [mechanicalDesignCost, setMechanicalDesignCost] = useState(0);
  const [electricalDesignTimeCost, setElectricalDesignTimeCost] = useState(0);
  const [electricalDesignTime, setElectricalDesignTime] = useState(0);
  const [electricalDesignCost, setElectricalDesignCost] = useState(0);
  const [mechanicalAssemblyTimeCost, setMechanicalAssemblyTimeCost] = useState(0);
  const [mechanicalAssemblyTime, setMechanicalAssemblyTime] = useState(0);
  const [mechanicalAssemblyCost, setMechanicalAssemblyCost] = useState(0);
  const [electricalWiringOnBoardTheMachine, setElectricalWiringOnBoardTheMachine] = useState(0);
  const [preparationCost,setPreparationCost] = useState(0);
  const [panelWiringCost,setPanelWiringCost] = useState(0);
  const [revenuePercentage,setRevenuePercentage] = useState(0);
  const [rechargePercentage,setRechargePercentage] = useState(0);
  const [calculatedPrice,setCalculatedPrice] = useState(0);
  const [productsKitValue,setProductsKitValue] = useState(null);
  
  const toggle = () => {
    setModal(!modal);
  };
  
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchProducts(1));
    dispatch(fetchProductsKits(1));
    dispatch(fetchOffers(1));
    dispatch(fetchContacts(1));
    dispatch(fetchSalesAgents(1));
  }, [dispatch]);
  
  const clients = useSelector((state) => state.contactsReducer.contacts);

  const products = useSelector((state) => state.productsReducer.products);
  
  const productsKits = useSelector((state) => state.productsKitsReducer.productsKits);

  const salesAgents = useSelector((state) => state.salesAgentsReducer.salesAgents);

  const offers = useSelector((state) => state.offersReducer.offers);

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
    await newElements.map((singleProductElement) => sum = sum + singleProductElement.totalPrice);
    setTotalProduct(sum);
  };

  const handleChangeProducts = async (event, index) => {
    const newElements = [...productElements];
    if (event.target.name === 'selectProduct') {
      newElements[index].selectProduct = event.target.value;
    } else {
      newElements[index].elementsQuantity = parseInt(event.target.value);
    }
    if (newElements[index].selectProduct && newElements[index].elementsQuantity) newElements[index].totalPrice = products.find((singleProduct) => singleProduct['@id'] === newElements[index].selectProduct).sellPrice * newElements[index].elementsQuantity;
    setProductElements(newElements);
    let sum = 0;
    await productElements.map((singleProductElement) => sum = sum + singleProductElement.totalPrice);
    setTotalProduct(sum);
  };

  useEffect(() => {
    setMechanicalDesignCost(parseInt(mechanicalDesignTimeCost) * parseInt(mechanicalDesignTime))
  }, [mechanicalDesignTimeCost,mechanicalDesignTime]);
  
  useEffect(() => {
    setElectricalDesignCost(parseInt(electricalDesignTimeCost) * parseInt(electricalDesignTime))
  }, [electricalDesignTimeCost,electricalDesignTime]);
  
  useEffect(() => {
    console.log(parseInt(mechanicalAssemblyTimeCost))
    console.log(parseInt(mechanicalAssemblyTime))
    setMechanicalAssemblyCost(parseInt(mechanicalAssemblyTimeCost) * parseInt(mechanicalAssemblyTime))
  }, [mechanicalAssemblyTimeCost,mechanicalAssemblyTime]);

  useEffect(() => {
    let priceToAdd = (customTotalCost !== "" ? parseInt(materialTotalCost) + parseInt(customTotalCost) : parseInt(materialTotalCost)) + (parseInt(totalProduct))
    if (priceToAdd === NaN) priceToAdd = 0;
    console.log(priceToAdd)
    priceToAdd = priceToAdd + parseInt(preparationCost) + parseInt(mechanicalAssemblyCost) + parseInt(electricalDesignCost) + parseInt(mechanicalDesignCost) + parseInt(panelWiringCost) + parseInt(electricalWiringOnBoardTheMachine);
    priceToAdd = priceToAdd + (priceToAdd / 100 * parseInt(rechargePercentage));
    priceToAdd = priceToAdd - (priceToAdd / 100 * parseInt(revenuePercentage));
    setCalculatedPrice(priceToAdd); 
  }, [totalProduct,materialTotalCost,customTotalCost,revenuePercentage,rechargePercentage,preparationCost,mechanicalAssemblyCost,panelWiringCost,electricalWiringOnBoardTheMachine,electricalDesignCost,mechanicalDesignCost]);
  
  let productsOptions = []

  products.map((singleProduct) => productsOptions.push({value: singleProduct['@id'], label: singleProduct.name}))
  
  let productsKitsOptions = []
  
  productsKits.map((singleProductsKit) => productsKitsOptions.push({value: singleProductsKit['@id'], label: singleProductsKit.name}))
  
  const handleSubmit = async (event) => {
    event.preventDefault()
    if (event.target.id.value !== undefined) {
      const objToSend = {
        "id": event.target.id.value,
        "name": event.target.name.value,
        "client": event.target.client.value,
        "salesAgent": event.target.salesAgent.value,
        "customTotalCost": event.target.customTotalCost.value,
        "productElements": productElements,
        "materialTotalCost": event.target.materialTotalCost.value,
        "mechanicalDesignCost": event.target.mechanicalDesignCost.value,
        "mechanicalDesignTimeCost": event.target.mechanicalDesignTimeCost.value,
        "mechanicalDesignTime": event.target.mechanicalDesignTime.value,
        "mechanicalDesignCost": event.target.mechanicalDesignCost.value,
        "electricalDesignTimeCost": event.target.electricalDesignTimeCost.value,
        "electricalDesignTime": event.target.electricalDesignTime.value,
        "electricalDesignCost": event.target.electricalDesignCost.value,
        "electricalWiringOnBoardTheMachine": event.target.electricalWiringOnBoardTheMachine.value,
        "panelWiringCost": event.target.panelWiringCost.value,
        "mechanicalAssemblyCost": event.target.mechanicalAssemblyCost.value,
        "mechanicalAssemblyTimeCost": event.target.mechanicalAssemblyTimeCost.value,
        "mechanicalAssemblyTime": event.target.mechanicalAssemblyTime.value,
        "mechanicalAssemblyCost": event.target.mechanicalAssemblyCost.value,
        "preparationCost": event.target.preparationCost.value,
        "productsKit": productsKitValue,
        "rechargePercentage": event.target.rechargePercentage.value,
        "revenuePercentage": event.target.revenuePercentage.value,
        "calculatedPrice": event.target.calculatedPrice.value,
        "price": event.target.price.value,
        "remoteId": event.target.remoteId.value};
      await dispatch(UpdateOffer(objToSend))
      dispatch(fetchOffers(1));
    } else {
      const objToSend = {
        "name": event.target.name.value,
        "client": event.target.client.value,
        "salesAgent": event.target.salesAgent.value,
        "customTotalCost": event.target.customTotalCost.value,
        "productElements": productElements,
        "materialTotalCost": event.target.materialTotalCost.value,
        "mechanicalDesignCost": event.target.mechanicalDesignCost.value,
        "mechanicalDesignTimeCost": event.target.mechanicalDesignTimeCost.value,
        "mechanicalDesignTime": event.target.mechanicalDesignTime.value,
        "mechanicalDesignCost": event.target.mechanicalDesignCost.value,
        "electricalDesignTimeCost": event.target.electricalDesignTimeCost.value,
        "electricalDesignTime": event.target.electricalDesignTime.value,
        "electricalDesignCost": event.target.electricalDesignCost.value,
        "electricalWiringOnBoardTheMachine": event.target.electricalWiringOnBoardTheMachine.value,
        "panelWiringCost": event.target.panelWiringCost.value,
        "mechanicalAssemblyCost": event.target.mechanicalAssemblyCost.value,
        "mechanicalAssemblyTimeCost": event.target.mechanicalAssemblyTimeCost.value,
        "mechanicalAssemblyTime": event.target.mechanicalAssemblyTime.value,
        "mechanicalAssemblyCost": event.target.mechanicalAssemblyCost.value,
        "preparationCost": event.target.preparationCost.value,
        "productsKit": productsKitValue,
        "rechargePercentage": event.target.rechargePercentage.value,
        "revenuePercentage": event.target.revenuePercentage.value,
        "calculatedPrice": event.target.calculatedPrice.value,
        "price": event.target.price.value};
      //const newObj = JSON.parse(JSON.stringify(jsonData));
      //newObj.push({name, materialCost, mechanicalDesignCost, electricalDesignCost, electricalWiringOnBoardTheMachine, panelWiringCost, mechanicalAssembly, mechanicalDesignCost, preparationCost, revenuePercentage, price, client, salesAgent});
      await dispatch(AddOffersItem(objToSend))
      dispatch(fetchOffers(1));
      //setJsonData(newObj);
    }
    setModal(!modal);
  };

  const data2 = offers.map((prop, key) => {
    console.log(prop.productsKitValue)
    let clientText = ""
    clientText = clients.length > 0 && clients.map((singleClient) => { clientText += clients.find((singleContact) => singleContact['@id'] === singleClient) && clients.find((singleContact) => singleContact['@id'] === singleClient).companyName + " " })
    return {

      /*
 		{
			"materialTotalCost": "59",
			"mechanicalDesignCost": "10",
			"electricalDesignCost": "10",
			"electricalWiringOnBoardTheMachine": "10",
			"panelWiringCost": "1",
			"preparationCost": "10",
			"revenuePercentage": "10",
			"name": "nome",
			"salesAgent": "/api/sales_agents/1",
			"productElements": [
				{
					"totalPrice": 1,
					"selectProduct": "/api/product_stocks/2",
					"elementsQuantity": 1
				}
			],
			"mechanicalDesignTimeCost": "10",
			"mechanicalDesignTime": "1",
			"electricalDesignTimeCost": "10",
			"electricalDesignTime": "1",
			"mechanicalAssemblyTimeCost": "10",
			"mechanicalAssemblyTime": "1",
			"rechargePercentage": "10",
			"calculatedPrice": "100",
			"customTotalCost": "10"
		}

      */


      id: key,
      name: prop.name,
      clientId: prop.client,
      client: clients.find((singleContact) => singleContact['@id'] === prop.client) && clients.find((singleContact) => singleContact['@id'] === prop.client).companyName,
      salesAgent: salesAgents.find((singleAgent) => singleAgent['@id'] === prop.salesAgent) && salesAgents.find((singleAgent) => singleAgent['@id'] === prop.salesAgent).name,
      salesAgentId: prop.salesAgent,
      price: prop.price,
      productElements: prop.productElements,
      customTotalCost: prop.customTotalCost,
      productsKits: prop.productsKitsOptions,
      materialCost: prop.materialCost,
      mechanicalDesignCost: prop.mechanicalDesignCost,
      mechanicalDesignTimeCost: prop.mechanicalDesignTimeCost,
      mechanicalDesignTime: prop.mechanicalDesignTime,
      electricalDesignTime: prop.electricalDesignTime,
      electricalDesignTimeCost: prop.electricalDesignCost,
      electricalDesignCost: prop.electricalDesignCost,
      electricalWiringOnBoardTheMachine: prop.electricalWiringOnBoardTheMachine,
      panelWiringCost: prop.panelWiringCost,
      mechanicalAssemblyCost: prop.mechanicalAssemblyCost,
      mechanicalAssemblyTime: prop.mechanicalAssemblyTime,
      mechanicalAssemblyTimeCost: prop.mechanicalAssemblyTimeCost,
      preparationCost: prop.preparationCost,
      revenuePercentage: prop.preparationCost,
      rechargePercentage: prop.rechargePercentage,
      calculatedPrice: prop.calculatedPrice,
      remoteId: prop.remoteId ? prop.remoteId : prop['@id'],
      productsKitValue: prop.productsKit,
      actions: (
        // we've added some custom button actions
        <div className="text-center">
          {/* use this button to add a edit kind of action */}
          <Button
            onClick={() => {
              const sobj = data2.find((o) => o.id === key);
              setModal(!modal);
              setObj(sobj);
              setMechanicalDesignCost(sobj.mechanicalDesignCost);
              setMechanicalDesignTimeCost(sobj.mechanicalDesignCost);
              setMechanicalDesignTime(sobj.mechanicalDesignCost);
              setCustomTotalCost(sobj.customTotalCost);
              setProductElements(sobj.productElements);
              setElectricalDesignCost(sobj.electricalDesignCost);
              setElectricalDesignTime(sobj.electricalDesignTime);
              setElectricalDesignTimeCost(sobj.electricalDesignTimeCost);
              setMechanicalAssemblyCost(sobj.mechanicalAssemblyCost);
              setMechanicalAssemblyTime(sobj.mechanicalAssemblyTime);
              setMechanicalAssemblyTimeCost(sobj.mechanicalAssemblyTimeCost);
              setElectricalWiringOnBoardTheMachine(sobj.electricalWiringOnBoardTheMachine);
              setPanelWiringCost(sobj.panelWiringCost);
              setRevenuePercentage(sobj.revenuePercentage);
              setPreparationCost(sobj.preparationCost);
              setRechargePercentage(sobj.rechargePercentage);
              setCalculatedPrice(sobj.calculatedPrice);
              setProductsKitValue(sobj.productsKitValue);
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
                setModalDelete(!modalDelete);
                setObj(sobj);
                setMaterialTotalCost(0);
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
                name="customTotalCost"
                id="customTotalCost"
                value={customTotalCost}
                onChange={(e) => setCustomTotalCost(e.target.value)}
                defaultValue={obj !== null ? obj.materialCost : ""}
              />
            </FormGroup>
            <FormGroup>
              <Label >Aggiungi kit</Label>
              <Select
                closeMenuOnSelect={false}
                isMulti
                options={productsKitsOptions}
                name="productsKit"
                id="productsKit"
                value={productsKitValue}
                onChange={(e) => { let totalCost = 0; e.map((singleProductsKitOption) => productsKits.find((singleProductsKits) => singleProductsKitOption.value === singleProductsKits['@id']).products.map((singleProduct) => totalCost = totalCost + products.find((singleProductFind) => singleProductFind['@id'] === singleProduct.selectProduct).sellPrice * singleProduct.elementsQuantity)); setMaterialTotalCost(totalCost); setProductsKitValue(e)}}
              />
            </FormGroup>
            <Label >Aggiungi materiale</Label>
            <br/>
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
              <Label for="materialTotalCost">Costo totale materiale</Label>
              <Input type="number" name="materialTotalCost" id="materialTotalCost" value={(customTotalCost !== "" ? parseInt(materialTotalCost) + parseInt(customTotalCost) : parseInt(materialTotalCost)) + (parseInt(totalProduct))} />
            </FormGroup>
            <FormGroup>
              <Label for="mechanicalDesignCost">Costo disegno meccanico</Label>
            </FormGroup>
            <FormGroup>
              <Label for="mechanicalDesignTimeCost">Costo orario</Label>
              <Input
                type="number"
                name="mechanicalDesignTimeCost"
                id="mechanicalDesignTimeCost"
                value={mechanicalDesignTimeCost}
                onChange={(e) => e.target.value !== "" ? setMechanicalDesignTimeCost(e.target.value) : setMechanicalDesignTimeCost(0)}
                defaultValue={obj !== null ? obj.mechanicalDesignTimeCost : ""}
              />
            </FormGroup>
            <FormGroup>
              <Label for="mechanicalDesignTime">Numero di ore</Label>
              <Input
                type="text"
                name="mechanicalDesignTime"
                id="mechanicalDesignTime"
                value={mechanicalDesignTime}
                onChange={(e) => e.target.value !== "" ? setMechanicalDesignTime(e.target.value) : setMechanicalDesignTime(0)}
                defaultValue={obj !== null ? obj.mechanicalDesignTime : ""}
              />
            </FormGroup>
            <FormGroup>
              <Label for="mechanicalDesignCost">Costo totale disegno meccanico</Label>
              <Input
                type="text"
                name="mechanicalDesignCost"
                id="mechanicalDesignCost"
                value={mechanicalDesignCost}
              />
            </FormGroup>
            <FormGroup>
              <Label for="electricalDesignCost">Costo disegno elettronico</Label>
            </FormGroup>
            <FormGroup>
              <Label for="electricalDesignTimeCost">Costo orario</Label>
              <Input
                type="number"
                name="electricalDesignTimeCost"
                id="electricalDesignTimeCost"
                value={electricalDesignTimeCost}
                onChange={(e) => e.target.value !== "" ? setElectricalDesignTimeCost(e.target.value) : setElectricalDesignTimeCost(0)}
                defaultValue={obj !== null ? obj.electricalDesignTimeCost : ""}
              />
            </FormGroup>
            <FormGroup>
              <Label for="electricalDesignTime">Numero di ore</Label>
              <Input
                type="number"
                name="electricalDesignTime"
                id="electricalDesignTime"
                value={electricalDesignTime}
                onChange={(e) => e.target.value !== "" ? setElectricalDesignTime(e.target.value) : setElectricalDesignTime(0)}
                defaultValue={obj !== null ? obj.electricalDesignTime : ""}
              />
            </FormGroup>
            <FormGroup>
              <Label for="electricalDesignCost">Costo totale disegno elettronico</Label>
              <Input type="text" value={electricalDesignCost} name="electricalDesignCost" id="electricalDesignCost" defaultValue={obj !== null ? obj.electricalDesignCost : ""} />
            </FormGroup>
            <FormGroup>
              <Label for="electricalWiringOnBoardTheMachine">Cablaggio elettrico a bordo macchina</Label>
              <Input onChange={(e) => setElectricalWiringOnBoardTheMachine(e.target.value)} value={electricalWiringOnBoardTheMachine} type="text" name="electricalWiringOnBoardTheMachine" id="electricalWiringOnBoardTheMachine" defaultValue={obj !== null ? obj.electricalWiringOnBoardTheMachine : ""} />
            </FormGroup>
            <FormGroup>
              <Label for="panelWiringCost">Costo cavi pannello</Label>
              <Input onChange={(e) => setPanelWiringCost(e.target.value)} value={panelWiringCost} type="text" name="panelWiringCost" id="panelWiringCost" defaultValue={obj !== null ? obj.panelWiringCost : ""} />
            </FormGroup>
            <FormGroup>
              <Label for="mechanicalAssemblyCost">Costo assemblaggio meccanico</Label>
            </FormGroup>
            <FormGroup>
              <Label for="mechanicalAssemblyTimeCost">Costo orario</Label>
              <Input
                type="number"
                name="mechanicalAssemblyTimeCost"
                id="mechanicalAssemblyTimeCost"
                value={mechanicalAssemblyTimeCost}
                onChange={(e) => e.target.value !== "" ? setMechanicalAssemblyTimeCost(e.target.value) : setMechanicalAssemblyTimeCost(0)}
                defaultValue={obj !== null ? obj.mechanicalAssemblyTimeCost : ""}
              />
            </FormGroup>
            <FormGroup>
              <Label for="mechanicalAssemblyTime">Numero di ore</Label>
              <Input
                type="number"
                name="mechanicalAssemblyTime"
                id="mechanicalAssemblyTime"
                value={mechanicalAssemblyTime}
                onChange={(e) => e.target.value !== "" ? setMechanicalAssemblyTime(e.target.value) : setMechanicalAssemblyTime(0)}
                defaultValue={obj !== null ? obj.mechanicalAssemblyTime : ""}
              />
            </FormGroup>
            <FormGroup>
              <Label for="mechanicalAssembly">Costo totale assemblaggio meccanico</Label>
              <Input type="number" value={mechanicalAssemblyCost} name="mechanicalAssemblyCost" id="mechanicalAssemblyCost" defaultValue={obj !== null ? obj.mechanicalAssembly : ""} />
            </FormGroup>
            <FormGroup>
              <Label for="preparationCost">Costo preparazione</Label>
              <Input type="number" onChange={(e) => setPreparationCost(e.target.value)} value={preparationCost} name="preparationCost" id="preparationCost" defaultValue={obj !== null ? obj.preparationCost : ""} />
            </FormGroup>
            <FormGroup>
              <Label for="rechargePercentage">Percentuale ricarico</Label>
              <Input value={rechargePercentage} onChange={(e) => setRechargePercentage(e.target.value)} type="number" name="rechargePercentage" id="rechargePercentage" defaultValue={obj !== null ? obj.rechargePercentage : ""} />
            </FormGroup>
            <FormGroup>
              <Label for="revenuePercentage">Percentuale sconto</Label>
              <Input value={revenuePercentage} onChange={(e) => setRevenuePercentage(e.target.value)} type="number" name="revenuePercentage" id="revenuePercentage" defaultValue={obj !== null ? obj.revenuePercentage : ""} />
            </FormGroup>
            <FormGroup>
              <Label for="calculatedPrice">Prezzo calcolato</Label>
              <Input value={calculatedPrice} type="text" name="calculatedPrice" id="calculatedPrice" defaultValue={obj !== null ? obj.calculatedPrice : ""} />
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
        <Button color="danger" block onClick={() => { setMaterialTotalCost(0); setObj(null); toggle() }}>
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
