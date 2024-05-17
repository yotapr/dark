import axios from 'axios';
import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  products: [],
  productContent: 1,
  productSearch: '',
  editProduct: false,
  totalPage: 1
};

export const ProductSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    getProducts: (state, action) => {
      state.products = action.payload;
    },
    SearchProduct: (state, action) => {
      state.productSearch = action.payload;
    },
    SelectProduct: (state, action) => {
      state.productContent = action.payload;
    },
    DeleteProduct: (state, action) => {
      state.products.splice(action.payload, 1);
    },
    isEdit: (state) => {
      state.product = !state.product;
    },
    setVisibilityFilter: (state, action) => {
      state.product = action.payload;
    },
    SetProduct: {
      reducer: (state, action) => {
        state.products[parseInt(action.payload.id)] = action.payload
        //state.salesAgents = action.payload
      },
      prepare: (
        id,
        productId,
        name,
        category,
        description,
        stockQuantity,
        lowLevel,
        availableQuantity,
        allocatedQuantity,
        restockDate,
        lastRestockQuantity,
        purchasePrice,
        sellPrice,
        weight,
        dimensions,
        provider,
        note,
        remoteId
      ) => {
        return {
          payload: {
            id,
            productId,
            name,
            category,
            description,
            stockQuantity,
            lowLevel,
            availableQuantity,
            allocatedQuantity,
            restockDate,
            lastRestockQuantity,
            purchasePrice,
            sellPrice,
            weight,
            dimensions,
            provider,
            note,
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
        id,
        productId,
        name,
        category,
        description,
        stockQuantity,
        lowLevel,
        availableQuantity,
        allocatedQuantity,
        restockDate,
        lastRestockQuantity,
        purchasePrice,
        sellPrice,
        weight,
        dimensions,
        provider,
        note,
        remoteId
      ) => {
        return {
          payload: {
            id,
            productId,
            name,
            category,
            description,
            stockQuantity,
            lowLevel,
            availableQuantity,
            allocatedQuantity,
            restockDate,
            lastRestockQuantity,
            purchasePrice,
            sellPrice,
            weight,
            dimensions,
            provider,
            note,
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
  getProducts,
  SearchProduct,
  isEdit,
  SelectProduct,
  DeleteProduct,
  SetProduct,
  addProduct,
  setPageData
} = ProductSlice.actions;

export const UpdateProduct = (payload) => async (dispatch) => {
  try {
    const value = await axios.patch('http://awtapi.softwarehouseparma.net' + payload.remoteId, payload, {
      headers: {
        'Content-Type': 'application/merge-patch+json',
      }
    })
    //const response = await axios.get('http://awtapi.softwarehouseparma.net/api/sales_agentss');
    dispatch(SetProduct(payload.provider,payload.orderDate,payload.deliveryDate,payload.realDeliveryDate,payload.color,payload.note,payload.id,payload.remoteId));
  } catch (err) {
    throw new Error(err);
  }
};

export const AddProductsItem = (payload) => async (dispatch) => {
  try {
    const value = await axios.post('http://awtapi.softwarehouseparma.net/api/product_stocks', payload, {
      headers: {
        'Content-Type': 'application/ld+json',
      }
    })
    console.log(value.data['@id'])
    //const response = await axios.get('http://awtapi.softwarehouseparma.net/api/sales_agentss');
    dispatch(addProduct(payload.id,payload.name,payload.category,payload.description,payload.stockQuantity,payload.lowLevel,payload.availableQuantity,payload.allocatedQuantity,payload.restockDate,payload.lastRestockQuantity,payload.purchasePrice,payload.sellPrice,payload.weight,payload.dimension,payload.provider,payload.note,value.data['@id']));
  } catch (err) {
    throw new Error(err);
  }
};

export const fetchOrders = (page) => async (dispatch) => {
  try {
    const response = await axios.get('http://awtapi.softwarehouseparma.net/api/order_products?page=' + page);
    dispatch(getOrders(response.data['hydra:member']));
    response.data['hydra:view'] && dispatch(setPageData(response.data['hydra:view']))
  } catch (err) {
    throw new Error(err);
  }
};

export const deleteOrderItem = (remoteId,index) => async (dispatch) => {
  try {
    const response = await axios.delete('http://awtapi.softwarehouseparma.net' + remoteId);
    dispatch(DeleteOrder(index));
  } catch (err) {
    throw new Error(err);
  }
};

export default ProductSlice.reducer;


import axios from 'axios';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
  productContent: 1,
  productSearch: '',
  editProduct: false,
};

export const ProductSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    getProducts: (state, action) => {
      state.products = action.payload;
    },
    SearchProduct: (state, action) => {
      state.productSearch = action.payload;
    },
    SelectProduct: (state, action) => {
      state.productContent = action.payload;
    },
    DeleteProduct: (state, action) => {
      const index = state.products.findIndex((product) => product.id === action.payload);
      state.products.splice(index, 1);
    },
    isEdit: (state) => {
      state.editProduct = !state.editProduct;
    },
    setVisibilityFilter: (state, action) => {
      state.currentFilter = action.payload;
    },
    UpdateProduct: {
        reducer: (state, action) => {
          state.products[parseInt(action.payload.id)] = action.payload
        },
        prepare: (
          id,
          productId,
          name,
          category,
          description,
          stockQuantity,
          lowLevel,
          availableQuantity,
          allocatedQuantity,
          restockDate,
          lastRestockQuantity,
          purchasePrice,
          sellPrice,
          weight,
          dimensions,
          provider,
          note,
        ) => {
          return {
            payload: {
              id,
              productId,
              name,
              category,
              description,
              stockQuantity,
              lowLevel,
              availableQuantity,
              allocatedQuantity,
              restockDate,
              lastRestockQuantity,
              purchasePrice,
              sellPrice,
              weight,
              dimensions,
              provider,
              note,
            },
          };
        },
    },
    addProduct: {
      reducer: (state, action) => {
        console.log(action.payload)
        state.products.push(action.payload);
      },
      prepare: (
        productId,
        name,
        category,
        description,
        stockQuantity,
        lowLevel,
        availableQuantity,
        allocatedQuantity,
        restockDate,
        lastRestockQuantity,
        purchasePrice,
        sellPrice,
        weight,
        dimensions,
        provider,
        note,
      ) => {
        return {
          payload: {
            productId,
            name,
            category,
            description,
            stockQuantity,
            lowLevel,
            availableQuantity,
            allocatedQuantity,
            restockDate,
            lastRestockQuantity,
            purchasePrice,
            sellPrice,
            weight,
            dimensions,
            provider,
            note,
          },
        };
      },
    },
  },
});

export const {
  getProducts,
  SearchProduct,
  isEdit,
  SelectProduct,
  DeleteProduct,
  UpdateProduct,
  addProduct,
  setVisibilityFilter,
} = ProductSlice.actions;

export const fetchProducts = () => async (dispatch) => {
  try {
    const response = await axios.get('http://awtapi.softwarehouseparma.net/api/product_stocks');
    dispatch(getProducts(response.data['hydra:member']));
  } catch (err) {
    throw new Error(err);
  }
};

export default ProductSlice.reducer;
