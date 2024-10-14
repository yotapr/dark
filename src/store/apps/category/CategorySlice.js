import axios from 'axios';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [],
  categoryContent: 1,
  categorySearch: '',
  editCategory: false,
  totalPage: 1
};

export const CategorySlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    getCategories: (state, action) => {
      state.categories = action.payload;
    },
    SearchCategory: (state, action) => {
      state.categorySearch = action.payload;
    },
    SelectCategory: (state, action) => {
      state.categoryContent = action.payload;
    },
    DeleteCategory: (state, action) => {
      const index = state.categories.findIndex((category) => category.id === action.payload);
      state.categories.splice(index, 1);
    },
    isEdit: (state) => {
      state.editCategory = !state.editCategory;
    },
    setVisibilityFilter: (state, action) => {
      state.currentFilter = action.payload;
    },
    UpdateCategory: {
      reducer: (state, action) => {
        state.categories = state.categories.map((category) =>
          category.id === action.payload.id
            ? { ...category, [action.payload.field]: action.payload.value }
            : category,
        );
      },
      prepare: (id, field, value) => {
        return {
          payload: { id, field, value },
        };
      },
    },
    addCategory: {
      reducer: (state, action) => {
        console.log(action.payload)
        state.categories.push(action.payload);
      },
      prepare: (
        id,
        name,
      ) => {
        return {
          payload: {
            id,
            name,
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
  getCategories,
  SearchCategory,
  isEdit,
  SelectCategory,
  DeleteCategory,
  UpdateCategory,
  addCategory,
  setVisibilityFilter,
} = CategorySlice.actions;

export const fetchCategories = () => async (dispatch) => {
  try {
    const response = await axios.get('https://awtapi.softwarehouseparma.net/api/product_categories');
    dispatch(getCategories(response.data['hydra:member']));
  } catch (err) {
    throw new Error(err);
  }
};

export const UpdateCategoryItem = (payload) => async (dispatch) => {
  try {
    await axios.patch('https://awtapi.softwarehouseparma.net' + payload.remoteId, payload, {
      headers: {
        'Content-Type': 'application/merge-patch+json',
      }
    })
    const response = await axios.get('https://awtapi.softwarehouseparma.net/api/product_categories');
    dispatch(getCategories(response.data['hydra:member']));
  } catch (err) {
    throw new Error(err);
  }
};

export const AddCategoryItem = (payload) => async (dispatch) => {
  try {
    await axios.post('https://awtapi.softwarehouseparma.net/api/product_categories', payload, {
      headers: {
        'Content-Type': 'application/ld+json',
      }
    })
    const response = await axios.get('https://awtapi.softwarehouseparma.net/api/product_categories');
    dispatch(getCategories(response.data['hydra:member']));
  } catch (err) {
    throw new Error(err);
  }
};

export const DeleteCategoryItem = (remoteId,index) => async (dispatch) => {
  try {
    await axios.delete('https://awtapi.softwarehouseparma.net' + remoteId);
    const response = await axios.get('https://awtapi.softwarehouseparma.net/api/product_categories');
    dispatch(getCategories(response.data['hydra:member']));
  } catch (err) {
    throw new Error(err);
  }
};

export default CategorySlice.reducer;
