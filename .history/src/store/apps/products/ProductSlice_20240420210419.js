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
          const stateArray = [...state.products]
          stateArray[action.payload.id] = action.payload
          return state.products
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
