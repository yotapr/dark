import axios from 'axios';
import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  orders: [],
  orderContent: 1,
  orderSearch: '',
  editOrder: false,
  totalPage: 1
};

export const OrderSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    getOrders: (state, action) => {
      state.orders = action.payload;
    },
    SearchOrder: (state, action) => {
      state.orderSearch = action.payload;
    },
    SelectOrder: (state, action) => {
      state.orderContent = action.payload;
    },
    DeleteOrder: (state, action) => {
      state.orders.splice(action.payload, 1);
    },
    isEdit: (state) => {
      state.order = !state.order;
    },
    setVisibilityFilter: (state, action) => {
      state.order = action.payload;
    },
    DeliveredOrder: {
      reducer: (state, action) => {
        state.orders[parseInt(action.payload.id)] = action.payload
        //state.salesAgents = action.payload
      },
    },
    SetOrder: {
      reducer: (state, action) => {
        state.orders[parseInt(action.payload.id)] = action.payload
        //state.salesAgents = action.payload
      },
      prepare: (
        provider,
        orderDate,
        deliveryDate,
        realDeliveryDate,
        color,
        note,
        productElements,
        productsKits,
        totalCost,
        id,
        remoteId
      ) => {
        return {
          payload: {
            provider,
            orderDate,
            deliveryDate,
            realDeliveryDate,
            color,
            note,
            productElements,
            productsKits,
            totalCost,
            id,
            remoteId
          },
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
        productElements,
        productsKits,
        totalCost,
        remoteId
      ) => {
        return {
          payload: {
            provider,
            orderDate,
            deliveryDate,
            realDeliveryDate,
            color,
            note,
            productElements,
            productsKits,
            totalCost,
            remoteId
          },
        };
      },
    },
    setPageData: {
      reducer: (state, action) => {
        action.payload.pageData["hydra:last"] ? state.totalPage = action.payload.pageData["hydra:last"].match(/(\d+)/)[0] : state.totalPage = 1
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
  getOrders,
  SearchOrder,
  isEdit,
  SelectOrder,
  DeleteOrder,
  DeliveredOrder,
  SetOrder,
  addOrder,
  setPageData
} = OrderSlice.actions;

export const UpdateOrder = (payload) => async (dispatch) => {
  try {
    const value = await axios.patch('https://awtapi.softwarehouseparma.net' + payload.remoteId, payload, {
      headers: {
        'Content-Type': 'application/merge-patch+json',
      }
    })
    console.log(payload)
    //const response = await axios.get('https://awtapi.softwarehouseparma.net/api/sales_agentss');
    dispatch(SetOrder(payload.provider,payload.orderDate,payload.deliveryDate,payload.realDeliveryDate,payload.color,payload.note,payload.productElements,payload.productsKits,payload.totalCost,payload.id,payload.remoteId));
  } catch (err) {
    throw new Error(err);
  }
};

export const AddOrdersItem = (payload) => async (dispatch) => {
  payload.delivered = false;
  try {
    const value = await axios.post('https://awtapi.softwarehouseparma.net/api/order_products', payload, {
      headers: {
        'Content-Type': 'application/ld+json',
      }
    })
    console.log(value.data['@id'])
    //const response = await axios.get('https://awtapi.softwarehouseparma.net/api/sales_agentss');
    dispatch(addOrder(payload.provider,payload.orderDate,payload.deliveryDate,payload.realDeliveryDate,payload.color,payload.note,payload.productElements,payload.productsKits,payload.totalCost,value.data['@id']));
  } catch (err) {
    throw new Error(err);
  }
};

export const fetchOrders = (page) => async (dispatch) => {
  try {
    const response = await axios.get('https://awtapi.softwarehouseparma.net/api/order_products?page=' + page  + '&delivered=false' );
    dispatch(getOrders(response.data['hydra:member']));
    response.data['hydra:view'] && dispatch(setPageData(response.data['hydra:view']))
  } catch (err) {
    throw new Error(err);
  }
};

export const fetchOrdersDelivered = (page) => async (dispatch) => {
  try {
    const response = await axios.get('https://awtapi.softwarehouseparma.net/api/order_products?page=' + page  + '&delivered=true');
    dispatch(getOrders(response.data['hydra:member']));
    response.data['hydra:view'] && dispatch(setPageData(response.data['hydra:view']))
  } catch (err) {
    throw new Error(err);
  }
};

export const deliveredOrder = (payload) => async (dispatch) => {
  try {
    const response = await axios.post('https://awtapi.softwarehouseparma.net/api/ordersyncro', payload, {
      headers: {
        'Content-Type': 'application/ld+json',
      }
    })
    .catch((error) => console.log(error))
    console.log(response.data.productElements);
    response.data.id = payload.id
    dispatch(DeliveredOrder(response.data));
    //dispatch(DeliveredOrder(response.data.provider,response.data.orderDate,response.data.deliveryDate,response.data.realDeliveryDate,response.data.color,response.data.note,response.data.productElements,response.data.productsKitValue,response.data.totalProduct,payload.id,response.data.remoteId,response.data.delivered));
    //response.data['hydra:view'] && dispatch(setPageData(response.data['hydra:view']))
  } catch (err) {
    throw new Error(err);
  }
};

export const deleteOrderItem = (remoteId,index) => async (dispatch) => {
  try {
    const response = await axios.delete('https://awtapi.softwarehouseparma.net' + remoteId);
    dispatch(DeleteOrder(index));
  } catch (err) {
    throw new Error(err);
  }
};

export default OrderSlice.reducer;

