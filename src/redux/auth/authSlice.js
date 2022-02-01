import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const LOGIN_ENDPOINT = 'https://something/api/v1/:user_id/cars';
const SIGNUP_ENDPOINT = 'https://something/api/v1/:user_id/cars';

