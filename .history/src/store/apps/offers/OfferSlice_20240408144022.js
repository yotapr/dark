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
      state.contactContent = action.payload;
    },
    DeleteContact: (state, action) => {
      const index = state.contacts.findIndex((contact) => contact.id === action.payload);
      state.contacts.splice(index, 1);
    },
    toggleStarredContact: (state, action) => {
      state.contacts = state.contacts.map((contact) =>
        contact.id === action.payload ? { ...contact, starred: !contact.starred } : contact,
      );
    },
    isEdit: (state) => {
      state.editContact = !state.editContact;
    },
    setVisibilityFilter: (state, action) => {
      state.currentFilter = action.payload;
    },
    UpdateContact: {
      reducer: (state, action) => {
        state.contacts = state.contacts.map((contact) =>
          contact.id === action.payload.id
            ? { ...contact, [action.payload.field]: action.payload.value }
            : contact,
        );
      },
      prepare: (id, field, value) => {
        return {
          payload: { id, field, value },
        };
      },
    },
    addContact: {
      reducer: (state, action) => {
        console.log(action.payload)
        state.contacts.push(action.payload);
      },
      prepare: (
        id,
        companyName,
        address,
        image,
        taxCode,
        vatNumber,
        phoneNumber,
        email,
        contactName,
        contactPhone,
        contactEmail,
        providerCode,
        startDate,
        dossier,
        creditLimit,
        sdiCode,
        invoiceCode,
        website,
        note,
      ) => {
        return {
          payload: {
            id,
            companyName,
            address,
            image,
            taxCode,
            vatNumber,
            phoneNumber,
            email,
            contactName,
            contactPhone,
            contactEmail,
            providerCode,
            startDate,
            dossier,
            creditLimit,
            sdiCode,
            invoiceCode,
            website,
            note,
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
  getContacts,
  SearchContact,
  isEdit,
  SelectContact,
  DeleteContact,
  toggleStarredContact,
  UpdateContact,
  addContact,
  setVisibilityFilter,
} = ProviderSlice.actions;

export const fetchContacts = () => async (dispatch) => {
  try {
    const response = await axios.get('http://awtapi.softwarehouseparma.net/api/providerss');
    dispatch(getContacts(response.data['hydra:member']));
  } catch (err) {
    throw new Error(err);
  }
};

export default ProviderSlice.reducer;
