import axios from 'axios';
import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  salesAgents: [],
  salesAgentContent: 1,
  salesAgentSearch: '',
  editSalesAgent: false,
  currentFilter: 'show_all',
};

export const SalesAgentsSlice = createSlice({
  name: 'salesAgents',
  initialState,
  reducers: {
    getSalesAgents: (state, action) => {
      state.salesAgents = action.payload;
    },
    SearchSalesAgent: (state, action) => {
      state.salesAgentSearch = action.payload;
    },
    SelectSalesAgent: (state, action) => {
      state.salesAgentContent = action.payload;
    },
    DeleteSalesAgent: (state, action) => {
      const index = state.salesAgents.findIndex((salesAgent) => salesAgent.id === action.payload);
      state.salesAgents.splice(index, 1);
    },
    toggleStarredContact: (state, action) => {
      state.salesAgents = state.salesAgents.map((salesAgent) =>
      salesAgent.id === action.payload ? { ...salesAgent, starred: !salesAgent.starred } : salesAgent,
      );
    },
    isEdit: (state) => {
      state.salesAgent = !state.salesAgent;
    },
    setVisibilityFilter: (state, action) => {
      state.salesAgent = action.payload;
    },
    SetSalesAgent: {
      reducer: async (state, action) => {
        state.salesAgents[parseInt(action.payload.id)] = action.payload
        //state.salesAgents = action.payload
      },
      prepare: (
        id,
        name,
        clients,
        offers, 
        remoteId
      ) => {
        return {
          payload: { 
            id,
            name,
            clients,
            offers,
            remoteId
          },
        };
      },
    },
    addSalesAgent: {
      reducer: (state, action) => {
        let payload = action.payload
        //payload['@id'] = 
        state.salesAgents.push(action.payload);
      },
      prepare: (
        id,
        name,
        clients,
        offers,
      ) => {
        return {
          payload: {
            id,
            name,
            clients,
            offers
          },
        };
      },
    },
  },
});

export const {
  getSalesAgents,
  SearchSalesAgent,
  isEdit,
  SelectSalesAgent,
  DeleteSalesAgent,
  toggleStarredSalesAgent,
  SetSalesAgent,
  addSalesAgent,
  setVisibilityFilter,
} = SalesAgentsSlice.actions;

export const UpdateSalesAgents = (payload) => async (dispatch) => {
  console.log(payload)  
  try {
    const value = await axios.patch('http://awtapi.softwarehouseparma.net' + payload.remoteId, payload, {
      headers: {
        'Content-Type': 'application/merge-patch+json',
      }
    })
        
    //const response = await axios.get('http://awtapi.softwarehouseparma.net/api/sales_agentss');
    dispatch(SetSalesAgent(payload));
  } catch (err) {
    throw new Error(err);
  }
};

export const fetchSalesAgents = () => async (dispatch) => {
  try {
    const response = await axios.get('http://awtapi.softwarehouseparma.net/api/sales_agentss');
    dispatch(getSalesAgents(response.data['hydra:member']));
  } catch (err) {
    throw new Error(err);
  }
};

export default SalesAgentsSlice.reducer;
