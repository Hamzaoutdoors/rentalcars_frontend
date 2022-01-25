// import React, { useEffect } from 'react';
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
// import store from './redux/configureStore';
import DetailsPage from './pages/DetailsPage';
// import { getCars } from './redux/cars/carsSlice';
// import { getCities, getReservations } from './redux/reservations/reservationsSlice';
import HomePage from './pages/HomePage';

const App = () =>
  // useEffect(() => {
  //   store.dispatch(getCars());
  //   store.dispatch(getCities());
  //   store.dispatch(getReservations());
  // }, []);
  // eslint-disable-next-line implicit-arrow-linebreak
  (
    <Router>
      {/* <NavBar /> */}
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/:car_id/details" element={<DetailsPage />} />
      </Routes>
    </Router>
  );

export default App;
