import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import data from './helpers/data';

const RESERVATIONS_API_ENDPOINT = 'https://something/api/v1/:user_id/reservations';
const CITIES_API_ENDPOINT = 'https://something/api/v1/cities';

const initialState = {
  isFetching: false,
  data: [...data.reservations],
  cities: [...data.cities],
  error: {},
  utils: {
    openModal: false,
  },
};

export const getReservations = createAsyncThunk(
  'redux/cars/getReservations.js',
  async () => {
    const response = await axios.get(RESERVATIONS_API_ENDPOINT).catch((error) => error);
    return response.data;
  },
);

export const getCities = createAsyncThunk(
  'redux/cars/getCities.js',
  async () => {
    const response = await axios.get(CITIES_API_ENDPOINT).catch((error) => error);
    return response.data;
  },
);

export const addReservation = createAsyncThunk(
  'redux/cars/addReservation.js',
  async () => {
    // should be like this axios.post(url, addReservationParams, addReservationHeaders)
    const response = await axios.post(RESERVATIONS_API_ENDPOINT)
      .catch((error) => error);
    return response.data;
  },
);

const deleteOptions = {
  headers: {
    something: '',
  },
};

export const cancelReservation = createAsyncThunk(
  'redux/cars/removeReservation.js',
  async (id) => {
    const response = await axios
      .delete(`${RESERVATIONS_API_ENDPOINT}/${id}`, deleteOptions)
      .catch((error) => error);
    return response.data;
  },
);

export const editReservation = createAsyncThunk(
  'redux/cars/updateReservation.js',
  async (id) => {
    // should be .put(url, update_options)
    const response = await axios
      .put(`${RESERVATIONS_API_ENDPOINT}/${id}`)
      .catch((error) => error);
    return response.data;
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
  },
});

export const { expandModal } = reservationsSlicer.actions;
export default reservationsSlicer.reducer;
