import axios from 'axios';
import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  productsKits: [],
  productKitContent: 1,
  productKitSearch: '',
  editProductKit: false,
  totalPage: 1
};

export const ProductKitSlice = createSlice({
  name: 'productsKits',
  initialState,
  reducers: {
    getProductsKits: (state, action) => {
      state.productsKits = action.payload;
    },
    SearchProductsKit: (state, action) => {
      state.productKitSearch = action.payload;
    },
    SelectProductsKit: (state, action) => {
      state.productKitContent = action.payload;
    },
    DeleteProductsKit: (state, action) => {
      state.productsKits.splice(action.payload, 1);
    },
    isEdit: (state) => {
      state.productsKit = !state.product;
    },
    setVisibilityFilter: (state, action) => {
      state.productsKit = action.payload;
    },
    SetProductsKit: {
      reducer: (state, action) => {
        console.log(action.payload)
        state.productsKits[parseInt(action.payload.id)] = action.payload
        //state.salesAgents = action.payload
      },
      prepare: (
        id,
        name,
        products,
        remoteId
      ) => {
        return {
          payload: {
            id,
            name,
            products,
            remoteId
          },
        };
      },
    },
    addProductsKit: {
      reducer: (state, action) => {
        console.log(action.payload)
        state.productsKits.push(action.payload);
      },
      prepare: (
        name,
        products,
        remoteId
      ) => {
        return {
          payload: {
            name,
            products,
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
  getProductsKits,
  SearchProductsKit,
  isEdit,
  SelectProductsKit,
  DeleteProductsKit,
  SetProductsKit,
  addProductsKit,
  setPageData
} = ProductKitSlice.actions;

export const UpdateProductsKit = (payload) => async (dispatch) => {
  try {
    console.log(payload)
    const value = await axios.patch('http://awtapi.softwarehouseparma.net' + payload.remoteId, payload, {
      headers: {
        'Content-Type': 'application/merge-patch+json',
      }
    })
    //const response = await axios.get('http://awtapi.softwarehouseparma.net/api/sales_agentss');
    dispatch(SetProductsKit(payload.name,payload.products,value.data['@id']));
  } catch (err) {
    throw new Error(err);
  }
};

export const AddProductsKitItem = (payload) => async (dispatch) => {
  try {
    const value = await axios.post('http://awtapi.softwarehouseparma.net/api/kit_products', payload, {
      headers: {
        'Content-Type': 'application/ld+json',
      }
    })
    console.log(value)
    //const response = await axios.get('http://awtapi.softwarehouseparma.net/api/sales_agentss');
    dispatch(addProductsKit(payload.name,payload.products,value.data['@id']));
  } catch (err) {
    throw new Error(err);
  }
};

export const fetchProductsKits = (page) => async (dispatch) => {
  try {
    const response = await axios.get('http://awtapi.softwarehouseparma.net/api/kit_products?page=' + page);
    dispatch(getProductsKits(response.data['hydra:member']));
    response.data['hydra:view'] && dispatch(setPageData(response.data['hydra:view']))
  } catch (err) {
    throw new Error(err);
  }
};

export const deleteProductsKitItem = (remoteId,index) => async (dispatch) => {
  try {
    const response = await axios.delete('http://awtapi.softwarehouseparma.net' + remoteId);
    dispatch(DeleteProductsKit(index));
  } catch (err) {
    throw new Error(err);
  }
};

export default ProductKitSlice.reducer;

