import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import carsReducer from './cars/carsSlice';
import reservationsReducer from './reservations/reservationsSlice';
import utilReducer from './utils/utilsReducer';

const reducer = combineReducers({
  cars: carsReducer,
  reservations: reservationsReducer,
  utils: utilReducer,
  // additional reducers could be added here
});

const store = createStore(
  reducer,
  applyMiddleware(thunk, logger),
);

export default store;
