import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const CAR_API_ENDPOINT = 'https://hanjelscars.herokuapp.com/api/v1/cars';

const initialState = {
  isFetching: false,
  data: [],
  error: {},
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

const bodyOptions = (formElem) => {
  const data = new FormData(formElem);
  const entries = [...data.entries()];
  const carEntries = entries.slice(0, 3);
  const descEntries = entries.slice(3);

  const body = {
    car: {
    },
    description: {
    },
  };

  carEntries.forEach((pair) => {
    const [key, value] = pair;
    body.car[key] = value;
  });

  descEntries.forEach((pair) => {
    const [key, value] = pair;
    body.description[key] = value;
  });

  return body;
};

const filterDeleted = (data, id) => data.filter((carObj) => carObj.id !== parseInt(id, 10));

export const getCars = createAsyncThunk(
  'redux/cars/getCars.js',
  async (payload, { rejectWithValue }) => {
    try {
      const response = await axios
        .get(CAR_API_ENDPOINT, jsonTypeConfig(false));
      return response.data;
    } catch (err) {
      return rejectWithValue({ ...err.response.data });
    }
  },
);

export const addCar = createAsyncThunk(
  'redux/cars/addCar.js',
  async (payload, { rejectWithValue }) => {
    const rcarsJwt = JSON.parse(localStorage.getItem('rcars_jwt'));
    const token = (rcarsJwt) ? rcarsJwt.token : null;
    const data = bodyOptions(payload);
    const config = jsonTypeConfig(token);

    try {
      const response = await axios
        .post(CAR_API_ENDPOINT, data, config);
      return response.data;
    } catch (error) {
      return rejectWithValue({ ...error.response.data });
    }
  },
);

export const removeCar = createAsyncThunk(
  'redux/cars/removeCar.js',
  async (payload, { rejectWithValue }) => {
    const rcarsJwt = JSON.parse(localStorage.getItem('rcars_jwt'));
    const token = (rcarsJwt) ? rcarsJwt.token : null;
    const config = jsonTypeConfig(token);

    try {
      const response = await axios
        .delete(`${CAR_API_ENDPOINT}/${payload}`, config);
      return response.data;
    } catch (error) {
      return rejectWithValue({ ...error.response.data });
    }
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
    [addCar.pending.type]: (state) => (
      { ...state, isFetching: true, error: {} }
    ),
    [addCar.fulfilled.type]: (state, action) => (
      { ...state, isFetching: false, data: [...state.data, action.payload] }
    ),
    [addCar.rejected.type]: (state, action) => (
      { ...state, isFetching: false, error: { ...action.payload } }
    ),
    [removeCar.pending.type]: (state) => (
      { ...state, isFetching: true, error: {} }
    ),
    [removeCar.fulfilled.type]: (state, action) => (
      {
        ...state,
        isFetching: false,
        data: filterDeleted(state.data, action.payload.id),
      }
    ),
    [removeCar.rejected.type]: (state, action) => (
      { ...state, isFetching: false, error: { ...action.payload } }
    ),
  },
});

export default carsSlicer.reducer;
