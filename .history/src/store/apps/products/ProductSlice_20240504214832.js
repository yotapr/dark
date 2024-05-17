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
    addProduct: {
      reducer: (state, action) => {
        console.log(action.payload)
        state.products.push(action.payload);
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
    dispatch(SetProduct(addProduct(payload.id,payload.name,payload.category,payload.description,parseInt(payload.stockQuantity),parseInt(payload.lowLevel),parseInt(payload.availableQuantity),parseInt(payload.allocatedQuantity),parseInt(payload.restockDate),parseInt(payload.lastRestockQuantity),parseInt(payload.purchasePrice),parseInt(payload.sellPrice),parseInt(payload.weight),parseInt(payload.dimension),payload.provider,payload.note,payload.remoteId)));
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

export const fetchProducts = (page) => async (dispatch) => {
  try {
    const response = await axios.get('http://awtapi.softwarehouseparma.net/api/product_stocks?page=' + page);
    dispatch(getProducts(response.data['hydra:member']));
    response.data['hydra:view'] && dispatch(setPageData(response.data['hydra:view']))
  } catch (err) {
    throw new Error(err);
  }
};

export const deleteProductItem = (remoteId,index) => async (dispatch) => {
  try {
    const response = await axios.delete('http://awtapi.softwarehouseparma.net' + remoteId);
    dispatch(DeleteProduct(index));
  } catch (err) {
    throw new Error(err);
  }
};

export default ProductSlice.reducer;

