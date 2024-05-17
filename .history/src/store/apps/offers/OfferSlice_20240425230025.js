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
        price,
        materialCost,
        mechanicalDesignCost,
        electricalDesignCost,
        electricalWiringOnBoardTheMachine,
        panelWiringCost,
        mechanicalAssembly,
        preparationCost,
        revenuePercentage,
        name,
        client,
        salesAgent,
      ) => {
        return {
          payload: {
            price,
            materialCost,
            mechanicalDesignCost,
            electricalDesignCost,
            electricalWiringOnBoardTheMachine,
            panelWiringCost,
            mechanicalAssembly,
            preparationCost,
            revenuePercentage,
            name,        
            client,
            salesAgent,
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
        price,
        materialCost,
        mechanicalDesignCost,
        electricalDesignCost,
        electricalWiringOnBoardTheMachine,
        panelWiringCost,
        mechanicalAssembly,
        preparationCost,
        revenuePercentage,
        name,
        client,
        salesAgent,
      ) => {
        return {
          payload: {
            price,
            materialCost,
            mechanicalDesignCost,
            electricalDesignCost,
            electricalWiringOnBoardTheMachine,
            panelWiringCost,
            mechanicalAssembly,
            preparationCost,
            revenuePercentage,
            name,        
            client,
            salesAgent,
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
  console.log(payload)  
  try {
    const value = await axios.patch('http://awtapi.softwarehouseparma.net' + payload.remoteId, payload, {
      headers: {
        'Content-Type': 'application/merge-patch+json',
      }
    })
        
    //const response = await axios.get('http://awtapi.softwarehouseparma.net/api/sales_agentss');
    dispatch(SetOffer(payload.id,payload.name,payload.clients,payload.offers,payload.remoteId));
  } catch (err) {
    throw new Error(err);
  }
};

export const AddOffersItem = (payload) => async (dispatch) => {
  try {
    const value = await axios.post('http://awtapi.softwarehouseparma.net/api/offerss', payload, {
      headers: {
        'Content-Type': 'application/ld+json',
      }
    })
    console.log(value.data['@id'])
    //const response = await axios.get('http://awtapi.softwarehouseparma.net/api/sales_agentss');
    dispatch(addOffer(payload.id,payload.name,payload.clients,payload.offers,value.data['@id']));
  } catch (err) {
    throw new Error(err);
  }
};

export const fetchOffers = (page) => async (dispatch) => {
  try {
    const response = await axios.get('http://awtapi.softwarehouseparma.net/api/offerss?page=' + page);
    dispatch(getOffers(response.data['hydra:member']));
    response.data['hydra:view'] && dispatch(setPageData(response.data['hydra:view']))
  } catch (err) {
    throw new Error(err);
  }
};

export const deleteOfferItem = (remoteId,index) => async (dispatch) => {
  try {
    const response = await axios.delete('http://awtapi.softwarehouseparma.net' + remoteId);
    dispatch(DeleteOffer(index));
  } catch (err) {
    throw new Error(err);
  }
};

export default OfferSlice.reducer;