import { configureStore } from '@reduxjs/toolkit';
import NotesReducer from './apps/notes/NotesSlice';
import CustomizerReducer from './customizer/CustomizerSlice';
import ChatsReducer from './apps/chat/ChatSlice';
import ContactsReducer from './apps/contacts/ContactSlice';
import OffersReducer from './apps/offers/OfferSlice';
import OrdersReducer from './apps/orders/OrderSlice';
import EmailReducer from './apps/email/EmailSlice';
import TicketReducer from './apps/ticket/TicketSlice';
import CategoryReducer from './apps/category/CategorySlice';
import ProvidersReducer from './apps/providers/ProviderSlice';
import ProductsReducer from './apps/products/ProductSlice';
import SalesAgentsReducer from './apps/salesAgents/SalesAgentsSlice';
import AppointmentReducer from './apps/sppointment/AppointmentSlice';

export const store = configureStore({
  reducer: {
    customizer: CustomizerReducer,
    notesReducer: NotesReducer,
    chatReducer: ChatsReducer,
    contactsReducer: ContactsReducer,
    offersReducer: OffersReducer,
    ordersReducer: OrdersReducer,
    providersReducer: ProvidersReducer,
    productsReducer: ProductsReducer,
    emailReducer: EmailReducer,
    ticketReducer: TicketReducer,
    categoryReducer: CategoryReducer,
    salesAgentsReducer: SalesAgentsReducer,
    appointmentReducer: AppointmentReducer,
  },
});

export default store;
