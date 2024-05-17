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
    addContacts: (state, action) => {
      let contactsArray = [...state.contacts];
      contactsArray = contactsArray.concat(action.payload);
      state.contacts = contactsArray;
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
    setPageData: {
      reducer: (state, action) => {
        action.payload.pageData["hydra:last"] !== undefined ? state.totalPage = action.payload.pageData["hydra:last"].match(/(\d+)/)[0] : action.payload.pageData["hydra:last"] = 1
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
  getContacts,
  SearchContact,
  isEdit,
  SelectContact,
  DeleteContact,
  toggleStarredContact,
  addContact,
  setVisibilityFilter,
  SetContact,
  setPageData,
  addContacts
} = ContactSlice.actions;

export const UpdateContact = (payload) => async (dispatch) => {
  try {
    const value = await axios.patch('http://awtapi.softwarehouseparma.net' + payload.remoteId, payload, {
      headers: {
        'Content-Type': 'application/merge-patch+json',
      }
    })
    //const response = await axios.get('http://awtapi.softwarehouseparma.net/api/sales_agentss');
    dispatch(SetContact(payload.id,payload.companyName,payload.address,payload.image,payload.taxCode,payload.vatNumber,payload.phoneNumber,payload.email,payload.contactName,payload.contactPhone,payload.contactEmail,payload.clientCode,payload.startDate,payload.dossier,payload.creditLimit,payload.sdiCode,payload.invoiceCode,payload.website,payload.note,payload.remoteId));
  } catch (err) {
    throw new Error(err);
  }
};

export const AddContactItem = (payload) => async (dispatch) => {
  try {
    const value = await axios.post('http://awtapi.softwarehouseparma.net/api/providerss', payload, {
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
    const response = await axios.get('http://awtapi.softwarehouseparma.net/api/providerss');
    dispatch(getContacts(response.data['hydra:member']));
    response.data['hydra:view'] && dispatch(setPageData(response.data['hydra:view']))
  } catch (err) {
    throw new Error(err);
  }
};
export const addContactsPage = (currentPage,keySearch) => async (dispatch) => {
  try {
    const response = await axios.get('http://awtapi.softwarehouseparma.net/api/providerss?page=' + currentPage + '&companyName=' + keySearch);
    dispatch(addContacts(response.data['hydra:member']));
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
export const searchContacts = (currentPage,keySearch) => async (dispatch) => {
  try {
    const response = await axios.get('http://awtapi.softwarehouseparma.net/api/providerss?page=' + currentPage + '&companyName=' + keySearch);
    dispatch(getContacts(response.data['hydra:member']));
    dispatch(SearchContact(keySearch));
    response.data['hydra:view'] && dispatch(setPageData(response.data['hydra:view']))
  } catch (err) {
    throw new Error(err);
  }
};

export default ContactSlice.reducer;
