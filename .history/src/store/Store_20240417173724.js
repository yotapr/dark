import { configureStore } from '@reduxjs/toolkit';
import NotesReducer from './apps/notes/NotesSlice';
import CustomizerReducer from './customizer/CustomizerSlice';
import ChatsReducer from './apps/chat/ChatSlice';
import ContactsReducer from './apps/contacts/ContactSlice';
import OffersReducer from './apps/offers/OfferSlice';
import OrdersReducer from './apps/orders/OrderSlice';
import EmailReducer from './apps/email/EmailSlice';
import TicketReducer from './apps/ticket/TicketSlice';
import ProvidersReducer from './apps/ticket/ProviderSlice';
import SalesAgentsReducer from './apps/salesAgents/SalesAgentsSlice';

export const store = configureStore({
  reducer: {
    customizer: CustomizerReducer,
    notesReducer: NotesReducer,
    chatReducer: ChatsReducer,
    contactsReducer: ContactsReducer,
    offersReducer: OffersReducer,
    ordersReducer: OrdersReducer,
    providersReducer: ProvidersReducer,
    emailReducer: EmailReducer,
    ticketReducer: TicketReducer,
    salesAgentsReducer: SalesAgentsReducer,
  },
});

export default store;
