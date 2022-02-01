import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const LOGIN_ENDPOINT = 'http://localhost:4000/login';
export const SIGNUP_ENDPOINT = 'http://localhost:4000/signup';

const initialState = {
  isFetching: false,
  isAuthenticated: false,
  user: null,
  error: {},
};

const authenticateBodyOptions = (formElem) => {
  const data = new FormData(formElem);
  const keys = [...data.keys()];
  const values = [...data.values()];

  const body = {
    user: {
    },
  };

  keys.forEach((key, index) => {
    body.user[key] = values[index];
  });

  return body;
};

const authenticateBodyConfig = () => ({
  headers: {
    'Content-Type': 'application/json',
  },
});

export const authenticateUser = createAsyncThunk(
  'redux/cars/login',
  async (payload) => {
    const data = authenticateBodyOptions(payload.form);
    const config = authenticateBodyConfig();

    const response = await axios
      .post(payload.url, data, config)
      .catch((error) => error);

    localStorage.setItem('rcars_jwt', JSON.stringify(response.data.token));
    return response.data;
  },
);

const authSLice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logOutUser: () => ({
      isFetching: false,
      isAuthenticated: false,
      user: null,
      error: {},
    }),
  },
  extraReducers: {
    [authenticateUser.pending.type]: (state) => ({
      ...state, isFetching: true, isAuthenticated: false, user: null, error: {},
    }),
    [authenticateUser.fulfilled.type]: (state, action) => (
      {
        ...state,
        isFetching: false,
        isAuthenticated: true,
        user: { ...action.payload.user },
        error: {},
      }),
    [authenticateUser.rejected.type]: (state, action) => (
      {
        ...state, isFetching: false, isAuthenticated: false, error: { ...action.payload },
      }),
  },
});

export const { logOutUser } = authSLice.actions;
export default authSLice.reducer;