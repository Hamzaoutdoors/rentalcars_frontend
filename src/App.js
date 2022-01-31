import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import styled from 'styled-components';
// import { getCars } from './redux/cars/carsSlice';
// import { getCities, getReservations } from './redux/reservations/reservationsSlice';
// import Announcement from './components/Announcement';
import Sidebar from './components/navigation/Sidebar';
import Announcement from './components/Announcement';
import HomePage from './pages/HomePage';
import AddCar from './pages/AddCar';
import LifeStyle from './pages/LifeStyle';
import CarsHome from './components/cars/CarsHome';
import MyReservations from './pages/MyReservations';
import DetailsPage from './pages/DetailsPage';

import './App.css';

const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  max-width: 100vw;
`;

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
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
      <AppContainer>
        <Announcement />
        <PageContainer>
          <Sidebar />
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route path="/cars/:car_id/details" element={<DetailsPage />} />
            <Route path="/cars/new" element={<AddCar />} />
            <Route path="/cars" element={<CarsHome />} />
            <Route path="/myreservations" element={<MyReservations />} />
            <Route path="/lifestyle" element={<LifeStyle />} />
          </Routes>
        </PageContainer>
      </AppContainer>
    </Router>
  );

export default App;
