import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const LOGIN_ENDPOINT = 'http://localhost:4000/login';
const SIGNUP_ENDPOINT = 'http://localhost:4000/signup';

const initialState = {
  isFetching: false,
  isAuthenticated: false,
  token: null,
  user: null,
  error: {},
};

const authenticateBodyOptions = (formData) => {
  const keys = [...formData.keys()];
  const values = [...formData.values()];

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

const addAuthenticateBodyOptions = (formData) => {
  const keys = [...formData.keys()];
  const values = [...formData.values()];

  const body = {
    user: {
    },
  };

  keys.forEach((key, index) => {
    body.user[key] = values[index];
  });

  return body;
};

const addAuthenticateBodyConfig = () => ({
  headers: {
    'Content-Type': 'application/json',
  },
});

export const authenticateUser = createAsyncThunk(
  'redux/cars/login',
  async (payload) => {
    const data = authenticateBodyOptions(payload);
    const config = authenticateBodyConfig();

    const response = await axios
      .post(LOGIN_ENDPOINT, data, config)
      .catch((error) => error);
    return response.data;
  },
);

export const addAuthenticateUser = createAsyncThunk(
  'redux/auth/signup',
  async (payload) => {
    const data = addAuthenticateBodyOptions(payload);
    const config = addAuthenticateBodyConfig();

    const response = await axios
      .post(SIGNUP_ENDPOINT, data, config)
      .catch((error) => error);
    return response.data;
  },
);
