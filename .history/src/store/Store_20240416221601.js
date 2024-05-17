import { configureStore } from '@reduxjs/toolkit';
import NotesReducer from './apps/notes/NotesSlice';
import CustomizerReducer from './customizer/CustomizerSlice';
import ChatsReducer from './apps/chat/ChatSlice';
import ContactsReducer from './apps/contacts/ContactSlice';
import OffersReducer from './apps/offers/OfferSlice';
import EmailReducer from './apps/email/EmailSlice';
import TicketReducer from './apps/ticket/TicketSlice';
import SalesAgentsReducer from './apps/ticket/SalesAgentsSlice';

export const store = configureStore({
  reducer: {
    customizer: CustomizerReducer,
    notesReducer: NotesReducer,
    chatReducer: ChatsReducer,
    contactsReducer: ContactsReducer,
    offersReducer: OffersReducer,
    emailReducer: EmailReducer,
    ticketReducer: TicketReducer,
    salesAgentsReducer: SalesAgentsReducer,
  },
});

export default store;
