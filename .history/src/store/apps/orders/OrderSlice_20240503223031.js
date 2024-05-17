import axios from 'axios';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  orders: [],
  orderContent: 1,
  orderSearch: '',
  editOrder: false,
};

export const OrderSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    getOrders: (state, action) => {
      state.orders = action.payload;
    },
    SearchOrder: (state, action) => {
      state.offerSearch = action.payload;
    },
    SelectOrder: (state, action) => {
      state.offerContent = action.payload;
    },
    DeleteOrder: (state, action) => {
      const index = state.orders.findIndex((offer) => offer.id === action.payload);
      state.orders.splice(index, 1);
    },
    isEdit: (state) => {
      state.editOrder = !state.editOrder;
    },
    setVisibilityFilter: (state, action) => {
      state.currentFilter = action.payload;
    },
    UpdateOrder: {
      reducer: (state, action) => {
        state.orders = state.orders.map((offer) =>
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
    addOrder: {
      reducer: (state, action) => {
        console.log(action.payload)
        state.orders.push(action.payload);
      },
      prepare: (
        provider,
        orderDate,
        deliveryDate,
        realDeliveryDate,
        color,
        note,
      ) => {
        return {
          payload: {
            provider,
            orderDate,
            deliveryDate,
            realDeliveryDate,
            color,
            note,
          },
        };
      },
    },
  },
});

export const {
  getOrders,
  SearchOrder,
  isEdit,
  SelectOrder,
  DeleteOrder,
  UpdateOrder,
  addOrder,
  setVisibilityFilter,
} = OrderSlice.actions;

export const fetchOrders = () => async (dispatch) => {
  try {
    const response = await axios.get('http://awtapi.softwarehouseparma.net/api/order_products');
    dispatch(getOrders(response.data['hydra:member']));
  } catch (err) {
    throw new Error(err);
  }
};

export default OrderSlice.reducer;
