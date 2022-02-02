import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const CAR_API_ENDPOINT = 'http://127.0.0.1:4000/api/v1/cars';

const initialState = {
  isFetching: false,
  data: [],
  error: {},
};

// eslint-disable-next-line no-unused-vars
const jsonTypeConfig = (token) => ({
  headers: {
    'Content-Type': 'application/json',
    Authorization: token,
  },
});

export const getCars = createAsyncThunk(
  'redux/cars/getCars.js',
  async (payload, { rejectWithValue }) => {
    const token = localStorage.getItem('rcars_jwt');
    try {
      const response = await axios
        .get(CAR_API_ENDPOINT, jsonTypeConfig(token));
      return response.data;
    } catch (err) {
      return rejectWithValue({ ...err.response.data });
    }
  },
);

export const addCar = createAsyncThunk(
  'redux/cars/addCar.js',
  async () => {
    // should be like this axios.post(CAR_API_ENDPOINT, addCarParams, addCarHeaders)
    const response = await axios.post(CAR_API_ENDPOINT)
      .catch((error) => error);
    return response.data;
  },
);

const deleteOptions = {
  headers: {
    something: '',
  },
};

export const removeCar = createAsyncThunk(
  'redux/cars/removeCar.js',
  async (id) => {
    const response = await axios
      .delete(`${CAR_API_ENDPOINT}/${id}`, deleteOptions)
      .catch((error) => error);
    return response.data;
  },
);

const carsSlicer = createSlice({
  name: 'cars',
  initialState,
  reducers: {
  },
  extraReducers: {
    [getCars.pending.type]: (state) => ({ ...state, isFetching: true, error: {} }),
    [getCars.fulfilled.type]: (state, action) => (
      {
        ...state, isFetching: false, data: action.payload, error: {},
      }),
    [getCars.rejected.type]: (state, action) => (
      { ...state, isFetching: false, error: action.payload }
    ),
    // [addCar.pending.type]: (state) => ({ ...state, isFetching: true, error: {} }),
    // eslint-disable-next-line max-len
    // [addCar.fulfilled.type]: (state, action) => ({ ...state, isFetching: false, data: [ ...state.data, action.payload ] }),
    // eslint-disable-next-line max-len
    // [addCar.rejected.type]: (state, action) => ({ ...state, isFetching: false, error: { ...action.payload } }),
    // [removeCar.pending.type]: (state) => ({ ...state, isFetching: true, error: {} }),
    // [removeCar.fulfilled.type]: (state, action) => ({ ...state, isFetching: false,
    //   data: state.data.filter((car) => car.id !== action.payload.data.id)
    // }),
    // eslint-disable-next-line max-len
    // [removeCar.rejected.type]: (state, action) => ({ ...state, isFetching: false, error: { ...action.payload } }),
  },
});

export default carsSlicer.reducer;
