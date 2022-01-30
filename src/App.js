import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import styled from 'styled-components';
import DetailsPage from './pages/DetailsPage';
// import { getCars } from './redux/cars/carsSlice';
// import { getCities, getReservations } from './redux/reservations/reservationsSlice';
// import Announcement from './components/Announcement';
import Sidebar from './components/navigation/Sidebar';
import HomePage from './pages/HomePage';
import AddCar from './pages/AddCar';
import LifeStyle from './pages/LifeStyle';
import CarsHome from './components/cars/CarsHome';
import './App.css';

const Container = styled.div`
  display: flex;
  max-width: 100vw;
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
      {/* <Announcement /> */}
      <Container>
        <Sidebar />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/cars/:car_id/details" element={<DetailsPage />} />
          <Route path="/cars/new" element={<AddCar />} />
          <Route path="/cars" element={<CarsHome />} />
          <Route path="/lifestyle" element={<LifeStyle />} />
        </Routes>
      </Container>
    </Router>
  );

export default App;
