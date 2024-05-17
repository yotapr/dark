import axios from 'axios';
import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  salesAgents: [],
  salesAgentContent: 1,
  salesAgentSearch: '',
  editSalesAgent: false,
  currentFilter: 'show_all',
  totalPage: 1,
  currentPage: 1,
  lastPage: 1
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
      state.salesAgents.splice(action.payload, 1);
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
      reducer: (state, action) => {
        console.log(action.payload.id)
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
        console.log(action.payload)
        state.salesAgents.push(action.payload);
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
    setPageData: {
      reducer: (state, action) => {
        console.log(action.payload.pageData)
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
  getSalesAgents,
  SearchSalesAgent,
  isEdit,
  SelectSalesAgent,
  DeleteSalesAgent,
  toggleStarredSalesAgent,
  SetSalesAgent,
  addSalesAgent,
  setVisibilityFilter,
  setPageData
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
    dispatch(SetSalesAgent(payload.id,payload.name,payload.clients,payload.offers,payload.remoteId));
  } catch (err) {
    throw new Error(err);
  }
};

export const AddSalesAgentsItem = (payload) => async (dispatch) => {
  try {
    const value = await axios.post('http://awtapi.softwarehouseparma.net/api/sales_agentss', payload, {
      headers: {
        'Content-Type': 'application/ld+json',
      }
    })
    console.log(value.data['@id'])
    //const response = await axios.get('http://awtapi.softwarehouseparma.net/api/sales_agentss');
    dispatch(addSalesAgent(payload.id,payload.name,payload.clients,payload.offers,value.data['@id']));
  } catch (err) {
    throw new Error(err);
  }
};

export const fetchSalesAgents = () => async (dispatch) => {
  try {
    const response = await axios.get('http://awtapi.softwarehouseparma.net/api/sales_agentss');
    dispatch(getSalesAgents(response.data['hydra:member']));
    response.data['hydra:view'] && setPageData(response.data['hydra:view'])
    console.log(responde.data)
  } catch (err) {
    throw new Error(err);
  }
};

export const deleteSalesAgentsItem = (remoteId,index) => async (dispatch) => {
  try {
    const response = await axios.delete('http://awtapi.softwarehouseparma.net' + remoteId);
    dispatch(DeleteSalesAgent(index));
  } catch (err) {
    throw new Error(err);
  }
};

export default SalesAgentsSlice.reducer;
