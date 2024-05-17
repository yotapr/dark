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
        id,
        title,
		description
      ) => {
        return {
          payload: {
            id,
            title,
			description
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
    axios.get('http://awtapi.softwarehouseparma.net/api/product_categories')
		.then((response)=> {
			dispatch(getAppointments(response.data['hydra:member'].map((singleAppointment) => {
				return {
					start: singleAppointment.appointmentStart,
					end: singleAppointment.appointmentEnd
				}
			})));
		})
  } catch (err) {
    throw new Error(err);
  }
};

export default AppointmentSlice.reducer;
