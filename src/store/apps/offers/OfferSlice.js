import axios from 'axios';
import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  offers: [],
  offerContent: 1,
  offerSearch: '',
  editOffer: false,
  currentFilter: 'show_all',
  totalPage: 1
};

export const OfferSlice = createSlice({
  name: 'offers',
  initialState,
  reducers: {
    getOffers: (state, action) => {
      state.offers = action.payload;
    },
    SearchOffer: (state, action) => {
      state.offerSearch = action.payload;
    },
    SelectOffer: (state, action) => {
      state.offerContent = action.payload;
    },
    DeleteOffer: (state, action) => {
      state.offers.splice(action.payload, 1);
    },
    isEdit: (state) => {
      state.offer = !state.offer;
    },
    setVisibilityFilter: (state, action) => {
      state.offer = action.payload;
    },
    SetOffer: {
      reducer: (state, action) => {
        state.offers[parseInt(action.payload.id)] = action.payload
        //state.salesAgents = action.payload
      },
      prepare: (
        name,
        client,
        salesAgent,
        customTotalCost,
        productElements,
        materialTotalCost,
        mechanicalDesignCost,
        mechanicalDesignTimeCost,
        mechanicalDesignTime,
        electricalDesignTimeCost,
        electricalDesignTime,
        electricalDesignCost,
        electricalWiringOnBoardTheMachine,
        panelWiringCost,
        mechanicalAssemblyCost,
        mechanicalAssemblyTimeCost,
        mechanicalAssemblyTime,
        preparationCost,
        productsKit,
        rechargePercentage,
        calculatedPrice,
        price,
        revenuePercentage,
        electricalPanelCost,
        customProduct,
        testingTime,
        testingCost,
        testingTotalCost,
        remoteId
      ) => {
        return {
          payload: {
            name,
            client,
            salesAgent,
            customTotalCost,
            productElements,
            materialTotalCost,
            mechanicalDesignCost,
            mechanicalDesignTimeCost,
            mechanicalDesignTime,
            electricalDesignTimeCost,
            electricalDesignTime,
            electricalDesignCost,
            electricalWiringOnBoardTheMachine,
            panelWiringCost,
            mechanicalAssemblyCost,
            mechanicalAssemblyTimeCost,
            mechanicalAssemblyTime,
            preparationCost,
            productsKit,
            rechargePercentage,
            calculatedPrice,
            price,
            revenuePercentage,
            electricalPanelCost,
            customProduct,
            testingTime,
            testingCost,
            testingTotalCost,
            remoteId
          },
        };
      },
    },
    addOffer: {
      reducer: (state, action) => {
        console.log(action.payload)
        state.offers.push(action.payload);
      },
      prepare: (
        name,
        client,
        salesAgent,
        customTotalCost,
        productElements,
        materialTotalCost,
        mechanicalDesignCost,
        mechanicalDesignTimeCost,
        mechanicalDesignTime,
        electricalDesignTimeCost,
        electricalDesignTime,
        electricalDesignCost,
        electricalWiringOnBoardTheMachine,
        panelWiringCost,
        mechanicalAssemblyCost,
        mechanicalAssemblyTimeCost,
        mechanicalAssemblyTime,
        productsKit,
        rechargePercentage,
        calculatedPrice,
        price,
        preparationCost,
        revenuePercentage,
        electricalPanelCost,
        customProduct,
        testingTime,
        testingCost,
        testingTotalCost,
        remoteId
      ) => {
        return {
          payload: {
            name,
            client,
            salesAgent,
            customTotalCost,
            productElements,
            materialTotalCost,
            mechanicalDesignCost,
            mechanicalDesignTimeCost,
            mechanicalDesignTime,
            electricalDesignTimeCost,
            electricalDesignTime,
            electricalDesignCost,
            electricalWiringOnBoardTheMachine,
            panelWiringCost,
            mechanicalAssemblyCost,
            mechanicalAssemblyTimeCost,
            mechanicalAssemblyTime,
            productsKit,
            rechargePercentage,
            calculatedPrice,
            price,
            preparationCost,
            revenuePercentage,
            electricalPanelCost,
            customProduct,
            testingTime,
            testingCost,
            testingTotalCost,
            remoteId
          },
        };
      },
    },
    setPageData: {
      reducer: (state, action) => {
        state.totalPage = action.payload.pageData["hydra:last"].match(/(\d+)/)[0]
        //state.salesAgents.push(action.payload);
      },
      prepare: (
        pageData
      ) => {
        return {
          payload: {
            pageData
          },
        };
      },
    }
  },
});

export const {
  getOffers,
  SearchOffer,
  isEdit,
  SelectOffer,
  DeleteOffer,
  SetOffer,
  addOffer,
  setPageData
} = OfferSlice.actions;

export const UpdateOffer = (payload) => async (dispatch) => {
  try {
    const value = await axios.patch('https://awtapi.softwarehouseparma.net' + payload.remoteId, payload, {
      headers: {
        'Content-Type': 'application/merge-patch+json',
      }
    })
    dispatch(addOffer(
      //"panelWiringCost": event.target.panelWiringCost.value,
      payload.name,
      payload.client,
      payload.salesAgent,
      payload.customTotalCost,
      payload.productElements,
      payload.materialTotalCost,
      payload.mechanicalDesignCost,
      payload.mechanicalDesignTimeCost,
      payload.mechanicalDesignTime,
      payload.electricalDesignTimeCost,
      payload.electricalDesignTime,
      payload.electricalDesignCost,
      payload.electricalWiringOnBoardTheMachine,
      payload.panelWiringCost,
      payload.mechanicalAssemblyCost,
      payload.mechanicalAssemblyTimeCost,
      payload.mechanicalAssemblyTime,
      payload.preparationCost,
      payload.productsKit,
      payload.rechargePercentage,
      payload.calculatedPrice,
      payload.price,
      payload.preparationCost,
      payload.revenuePercentage,
      payload.electricalPanelCost,
      payload.customProduct,
      payload.testingTime,
      payload.testingCost,
      payload.testingTotalCost,
      payload.remoteId));
    //const response = await axios.get('https://awtapi.softwarehouseparma.net/api/sales_agentss');
    //dispatch(SetOffer(payload.price,payload.materialCost,payload.mechanicalDesignCost,payload.electricalDesignCost,payload.electricalWiringOnBoardTheMachine,payload.panelWiringCost,payload.mechanicalAssembly,payload.preparationCost,payload.revenuePercentage,payload.name,payload.client,payload.salesAgent,payload.id,payload.remoteId));
  } catch (err) {
    throw new Error(err);
  }
};

export const AddOffersItem = (payload) => async (dispatch) => {
  try {
    const value = await axios.post('https://awtapi.softwarehouseparma.net/api/offers', payload, {
      headers: {
        'Content-Type': 'application/ld+json',
      }
    })/*
    console.log(payload)
    console.log(value.data)
    //const response = await axios.get('https://awtapi.softwarehouseparma.net/api/sales_agentss');
    dispatch(addOffer(
        //"panelWiringCost": event.target.panelWiringCost.value,
        payload.name,
        payload.client,
        payload.salesAgent,
        payload.customTotalCost,
        payload.productElements,
        payload.materialTotalCost,
        payload.mechanicalDesignCost,
        payload.mechanicalDesignTimeCost,
        payload.mechanicalDesignTime,
        payload.electricalDesignTimeCost,
        payload.electricalDesignTime,
        payload.electricalDesignCost,
        payload.electricalWiringOnBoardTheMachine,
        payload.panelWiringCost,
        payload.mechanicalAssemblyCost,
        payload.mechanicalAssemblyTimeCost,
        payload.mechanicalAssemblyTime,
        payload.preparationCost,
        payload.productsKit,
        payload.rechargePercentage,
        payload.calculatedPrice,
        payload.price,
        payload.preparationCost,
        payload.revenuePercentage,
        payload.electricalPanelCost,
        payload.customProduct,
        payload.testingTime,
        payload.testingCost,
        payload.testingTotalCost,
        value.data['@id']));*/
  } catch (err) {
    throw new Error(err);
  }
};

export const fetchOffers = (page) => async (dispatch) => {
  try {
    const response = await axios.get('https://awtapi.softwarehouseparma.net/api/offers?page=' + page);
    dispatch(getOffers(response.data['hydra:member']));
    response.data['hydra:view'] && dispatch(setPageData(response.data['hydra:view']))
  } catch (err) {
    throw new Error(err);
  }
};

export const deleteOfferItem = (remoteId,index) => async (dispatch) => {
  try {
    const response = await axios.delete('https://awtapi.softwarehouseparma.net' + remoteId);
    dispatch(DeleteOffer(index));
  } catch (err) {
    throw new Error(err);
  }
};

export default OfferSlice.reducer;