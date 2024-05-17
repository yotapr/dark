import axios from 'axios';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  appointments: [],
  appointmentContent: '',
  appointmentSearch: '',
  editAppointment: false,
  users: [],
  calendars: []
};

export const AppointmentSlice = createSlice({
  name: 'appointments',
  initialState,
  reducers: {
    getUsers: (state, action) => {
      state.users = action.payload;
    },
    getCalendars: (state, action) => {
      state.calendars = action.payload;
    },
    getAppointments: (state, action) => {
      state.appointments = action.payload;
    },
    SearchAppointments: (state, action) => {
      state.appointmentSearch = action.payload;
    },
    SelectAppointment: (state, action) => {
      state.appointmentContent = action.payload;
    },
    DeleteAppointment: (state, action) => {
      const index = state.appointments.findIndex((appointment) => appointment.id === action.payload);
      state.appointments.splice(index, 1);
    },
    isEdit: (state) => {
      state.editAppointment = !state.editAppointment;
    },
    UpdateAppointment: {
      reducer: (state, action) => {
        state.appointments = state.appointments.map((appointment) =>
		  appointment.id === action.payload.id
            ? { id: action.payload.id, title: action.payload.title, start: action.payload.appointmentStart, end: action.payload.appointmentEnd, color: action.payload.color }
            : appointment,
        );
      },
      prepare: (
        title,
        appointmentStart,
        appointmentEnd,
        color
		  ) => {
        return {
          payload: {
            title,
            appointmentStart,
            appointmentEnd,
            color
		      },
        };
      },
    },
    addAppointment: {
      reducer: (state, action) => {
        state.appointments.push(action.payload);
      },
      prepare: (
        title,
        appointmentStart,
        appointmentEnd,
        color
		  ) => {
        return {
          payload: {
            title,
            appointmentStart,
            appointmentEnd,
            color
		      },
        };
      },
    },
  },
});

export const {
  getAppointments,
  SearchAppointment,
  isEdit,
  SelectAppointment,
  DeleteAppointment,
  UpdateAppointment,
  addAppointment,
  getUsers,
  getCalendars
} = AppointmentSlice.actions;

export const fetchAppointments = () => async (dispatch) => {
  try {
    const response = await axios.get('http://awtapi.softwarehouseparma.net/api/appointments');
    dispatch(getAppointments(response.data['hydra:member']));
  } catch (err) {
    throw new Error(err);
  }
};

export const addNewAppointment = (payload) => async (dispatch) => {
  try {
    const response = await axios.post('http://awtapi.softwarehouseparma.net/api/appointments',payload, {
      headers: {
        'Content-Type': 'application/ld+json',
      }
    });
    dispatch(addAppointment(response.data.title, response.data.appointmentStart, response.data.appointmentEnd, response.data.color));
  } catch (err) {
    throw new Error(err);
  }
};

export const editAppointment = (payload) => async (dispatch) => {
  try {
    const response = await axios.put('http://awtapi.softwarehouseparma.net' + payload.id,payload, {
      headers: {
        'Content-Type': 'application/ld+json',
      }
    });
    //dispatch(UpdateAppointment(response.data.title, response.data.appointmentStart, response.data.appointmentEnd, response.data.color));
  } catch (err) {
    throw new Error(err);
  }
};

export const removeAppointment = (payload) => (dispatch) => {
  try {
    axios.delete('http://awtapi.softwarehouseparma.net' + payload.id);
    //dispatch(UpdateAppointment(response.data.title, response.data.appointmentStart, response.data.appointmentEnd, response.data.color));
  } catch (err) {
    throw new Error(err);
  }
};

export const fetchUsers = () => async (dispatch) => {
  try {
    const response = await axios.get('http://awtapi.softwarehouseparma.net/api/users');
    dispatch(getUsers(response.data['hydra:member']));
  } catch (err) {
    throw new Error(err);
  }
};

export const fetchCalendars = () => async (dispatch) => {
  try {
    const response = await axios.get('http://awtapi.softwarehouseparma.net/api/calendars');
    dispatch(getCalendars(response.data['hydra:member']));
  } catch (err) {
    throw new Error(err);
  }
};

export default AppointmentSlice.reducer;
