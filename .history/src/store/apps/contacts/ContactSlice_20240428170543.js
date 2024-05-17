import axios from 'axios';
import { createSlice } from '@reduxjs/toolkit';

const API_URL = '/api/data/contacts/ContactsData';

const initialState = {
  contacts: [],
  contactContent: 1,
  contactSearch: '',
  editContact: false,
  currentFilter: 'show_all',
  totalPage: 1
};

export const ContactSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    getContacts: (state, action) => {
      state.contacts = action.payload;
    },
    SearchContact: (state, action) => {
      state.contactSearch = action.payload;
    },
    SelectContact: (state, action) => {
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
    SetContact: {
      reducer: (state, action) => {
        state.contacts[parseInt(action.payload.id)] = action.payload
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
        clientCode,
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
            clientCode,
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
    addContact: {
      reducer: (state, action) => {
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
        clientCode,
        startDate,
        dossier,
        creditLimit,
        sdiCode,
        invoiceCode,
        website,
        note,
        remoteId
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
            clientCode,
            startDate,
            dossier,
            creditLimit,
            sdiCode,
            invoiceCode,
            website,
            note,
            remoteId,
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
  addContact,
  setVisibilityFilter,
} = ContactSlice.actions;

export const UpdateContact = (payload) => async (dispatch) => {
  try {
    const value = await axios.patch('http://awtapi.softwarehouseparma.net' + payload.remoteId, payload, {
      headers: {
        'Content-Type': 'application/merge-patch+json',
      }
    })
    //const response = await axios.get('http://awtapi.softwarehouseparma.net/api/sales_agentss');
    dispatch(SetContact(payload.id,payload.companyName,payload.address,payload.image,payload.taxCode,payload.vatNumber,payload.phoneNumber,payload.email,payload.contactName,payload.contactPhone,payload.contactEmail,payload.clientCode,payload.startDate,payload.dossier,payload.creditLimit,payload.sdiCode,payload.invoiceCode,payload.website,payload.note));
  } catch (err) {
    throw new Error(err);
  }
};

export const AddContactItem = (payload) => async (dispatch) => {
  try {
    const value = await axios.post('http://awtapi.softwarehouseparma.net/api/clientss', payload, {
      headers: {
        'Content-Type': 'application/ld+json',
      }
    })
    dispatch(addContact(payload.id,payload.companyName,payload.address,payload.image,payload.taxCode,payload.vatNumber,payload.phoneNumber,payload.email,payload.contactName,payload.contactPhone,payload.contactEmail,payload.clientCode,payload.startDate,payload.dossier,payload.creditLimit,payload.sdiCode,payload.invoiceCode,payload.website,payload.note,value['@id']));
  } catch (err) {
    throw new Error(err);
  }
};

export const fetchContacts = () => async (dispatch) => {
  try {
    const response = await axios.get('http://awtapi.softwarehouseparma.net/api/clientss');
    dispatch(getContacts(response.data['hydra:member']));
  } catch (err) {
    throw new Error(err);
  }
};
export const deleteContactItem = (remoteId,index) => async (dispatch) => {
  try {
    const response = await axios.delete('http://awtapi.softwarehouseparma.net' + remoteId);
    dispatch(DeleteContact(index));
  } catch (err) {
    throw new Error(err);
  }
};
export default ContactSlice.reducer;
