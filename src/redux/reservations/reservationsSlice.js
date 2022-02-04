import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const RESERVATIONS_API_ENDPOINT = 'http://127.0.0.1:4000/api/v1/reservations';
const CITIES_API_ENDPOINT = 'http://127.0.0.1:4000/cities';

const initialState = {
  isFetching: false,
  data: [],
  cities: [],
  error: {},
  utils: {
    openModal: false,
  },
};

// eslint-disable-next-line no-unused-vars
const jsonTypeConfig = (token) => {
  if (token) {
    return {
      headers: {
        'Content-Type': 'application/json',
        Authorization: token,
      },
    };
  }

  return {
    headers: {
      'Content-Type': 'application/json',
    },
  };
};

const bodyCreator = (formElem) => {
  const body = {
    reservation: {
      ...formElem,
    },
  };

  return body;
};

export const getReservations = createAsyncThunk(
  'redux/cars/getReservations.js',
  async (payload, { rejectWithValue }) => {
    const token = localStorage.getItem('rcars_jwt');
    const config = jsonTypeConfig(token);
    try {
      const res = await axios.get(RESERVATIONS_API_ENDPOINT, config);
      return res.data;
    } catch (error) {
      return rejectWithValue({ ...error.response.data });
    }
  },
);

export const getCities = createAsyncThunk(
  'redux/cars/getCities.js',
  async (payload, { rejectWithValue }) => {
    const token = localStorage.getItem('rcars_jwt');
    const config = jsonTypeConfig(token);
    try {
      const res = await axios.get(CITIES_API_ENDPOINT, config);
      return res.data;
    } catch (error) {
      return rejectWithValue({ ...error.response.data });
    }
  },
);

export const addReservation = createAsyncThunk(
  'redux/cars/addReservation.js',
  async (payload, { rejectWithValue }) => {
    const token = localStorage.getItem('rcars_jwt');
    const config = jsonTypeConfig(token);
    const body = bodyCreator(payload);
    try {
      const res = await axios.post(RESERVATIONS_API_ENDPOINT, body, config);
      return res.data;
    } catch (error) {
      return rejectWithValue({ ...error.response.data });
    }
  },
);

const filterDeleted = (data, id) => data.filter(
  (reservationObj) => reservationObj.id !== parseInt(id, 10),
);

export const cancelReservation = createAsyncThunk(
  'redux/cars/removeReservation.js',
  async (payload, { rejectWithValue }) => {
    const token = localStorage.getItem('rcars_jwt');
    const config = jsonTypeConfig(token);
    try {
      const res = await axios.delete(`${RESERVATIONS_API_ENDPOINT}/${payload}`, config);
      return res.data;
    } catch (error) {
      return rejectWithValue({ ...error.response.data });
    }
  },
);

const reservationsSlicer = createSlice({
  name: 'reservations',
  initialState,
  reducers: {
    expandModal: (state, action) => {
      const reservations = state;
      reservations.utils.openModal = action.payload;
      return reservations;
    },
  },
  extraReducers: {
    [getReservations.pending.type]: (state) => ({ ...state, isFetching: true, error: {} }),
    [getReservations.fulfilled.type]: (state, action) => (
      {
        ...state, isFetching: false, data: action.payload, error: {},
      }),
    [getReservations.rejected.type]: (state, action) => (
      { ...state, isFetching: false, error: action.payload }
    ),
    [getCities.pending.type]: (state) => ({ ...state, isFetching: true, error: {} }),
    [getCities.fulfilled.type]: (state, action) => (
      {
        ...state, isFetching: false, cities: action.payload, error: {},
      }),
    [getCities.rejected.type]: (state, action) => (
      { ...state, isFetching: false, error: action.payload }
    ),
    [addReservation.fulfilled.type]: (state, action) => (
      { ...state, isFetching: false, data: [...state.data, action.payload] }
    ),
    [addReservation.rejected.type]: (state, action) => (
      { ...state, isFetching: false, error: { ...action.payload } }
    ),
    [cancelReservation.pending.type]: (state) => (
      { ...state, isFetching: true, error: {} }
    ),
    [cancelReservation.fulfilled.type]: (state, action) => (
      {
        ...state,
        isFetching: false,
        data: filterDeleted(state.data, action.payload.id),
      }
    ),
    [cancelReservation.rejected.type]: (state, action) => (
      { ...state, isFetching: false, error: { ...action.payload } }
    ),
  },
});

export const { expandModal } = reservationsSlicer.actions;
export default reservationsSlicer.reducer;
