import axios from 'axios';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  appointments: [],
  appointmentContent: '',
  appointmentSearch: '',
  editAppointment: false,
};

export const AppointmentSlice = createSlice({
  name: 'appointments',
  initialState,
  reducers: {
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
            ? { ...appointment, [action.payload.field]: action.payload.value }
            : appointment,
        );
      },
      prepare: (id, field, value) => {
        return {
          payload: { id, field, value },
        };
      },
    },
    addAppointment: {
      reducer: (state, action) => {
        console.log(action.payload)
        state.appointments.push(action.payload);
      },
      prepare: (
        title,
        appointmentStart,
        appointmentEnd
		  ) => {
        return {
          payload: {
            title,
            appointmentStart,
            appointmentEnd
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
    dispatch(addAppointment(response.data));
  } catch (err) {
    throw new Error(err);
  }
};

export default AppointmentSlice.reducer;
