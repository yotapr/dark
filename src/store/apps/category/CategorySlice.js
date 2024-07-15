import axios from 'axios';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [],
  categoryContent: 1,
  categorySearch: '',
  editCategory: false,
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

export default CategorySlice.reducer;
