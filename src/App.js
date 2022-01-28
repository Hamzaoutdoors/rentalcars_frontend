// import React, { useEffect } from 'react';
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
// import store from './redux/configureStore';
import styled from 'styled-components';
import DetailsPage from './pages/DetailsPage';
// import { getCars } from './redux/cars/carsSlice';
// import { getCities, getReservations } from './redux/reservations/reservationsSlice';
import Announcement from './components/Announcement';
import Sidebar from './components/Sidebar';
import HomePage from './pages/HomePage';

const Container = styled.div`
  display: flex;
  `;

const App = () =>
  // useEffect(() => {
  //   store.dispatch(getCars());
  //   store.dispatch(getCities());
  //   store.dispatch(getReservations());
  // }, []);
  // eslint-disable-next-line implicit-arrow-linebreak
  (
    <Router>
      <Announcement />
      <Container>
        <Sidebar />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/:car_id/details" element={<DetailsPage />} />
        </Routes>
      </Container>
    </Router>
  );

export default App;
