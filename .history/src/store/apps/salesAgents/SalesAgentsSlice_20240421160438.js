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
    UpdateSalesAgent: {
      reducer: (state, action) => {
        state.salesAgents = state.salesAgents.map((salesAgent) =>
          salesAgent.id === action.payload.id
            ? { ...salesAgent, [action.payload.field]: action.payload.value }
            : salesAgent,
        );
      },
      prepare: (id, field, value) => {
        return {
          payload: { id, field, value },
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
      ) => {
        return {
          payload: {
            id,
            name,
            clients,
            offers,
            frequentlycontacted: false,
            starred: false,
            deleted: false,
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
  UpdateSalesAgent,
  addSalesAgent,
  setVisibilityFilter,
} = SalesAgentSlice.actions;

export const fetchSalesAgents = () => async (dispatch) => {
  try {
    const response = await axios.get('http://awtapi.softwarehouseparma.net/api/sales_agents');
    dispatch(getSalesAgents(response.data['hydra:member']));
  } catch (err) {
    throw new Error(err);
  }
};

export default SalesAgentsSlice.reducer;
