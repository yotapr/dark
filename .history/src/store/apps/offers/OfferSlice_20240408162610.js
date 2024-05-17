import axios from 'axios';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  offers: [],
  offerContent: 1,
  offerSearch: '',
  editOffer: false,
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
      const index = state.offers.findIndex((offer) => offer.id === action.payload);
      state.offers.splice(index, 1);
    },
    isEdit: (state) => {
      state.editOffer = !state.editOffer;
    },
    setVisibilityFilter: (state, action) => {
      state.currentFilter = action.payload;
    },
    UpdateOffer: {
      reducer: (state, action) => {
        state.offers = state.offers.map((offer) =>
          offer.id === action.payload.id
            ? { ...offer, [action.payload.field]: action.payload.value }
            : offer,
        );
      },
      prepare: (id, field, value) => {
        return {
          payload: { id, field, value },
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
        name
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
  getOffers,
  SearchOffer,
  isEdit,
  SelectOffer,
  DeleteOffer,
  UpdateOffer,
  addOffer,
  setVisibilityFilter,
} = OfferSlice.actions;

export const fetchOffers = () => async (dispatch) => {
  try {
    const response = await axios.get('http://awtapi.softwarehouseparma.net/api/offerss');
    dispatch(getOffers(response.data['hydra:member']));
  } catch (err) {
    throw new Error(err);
  }
};

export default OfferSlice.reducer;
