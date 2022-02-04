import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import styled from 'styled-components';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import Sidebar from './components/navigation/Sidebar';
import Announcement from './components/Announcement';
import HomePage from './pages/HomePage';
import AddCar from './pages/AddCar';
import LifeStyle from './pages/LifeStyle';
import CarsHome from './components/cars/CarsHome';
import MyReservations from './pages/MyReservations';
import MyCars from './pages/MyCars';
import DetailsPage from './pages/DetailsPage';
import Login from './pages/Login';
import Register from './pages/Register';
import { authenticateToken } from './redux/auth/authSlice';
import { getCars } from './redux/cars/carsSlice';
import { getCities, getReservations } from './redux/reservations/reservationsSlice';

const loggedRoutes = Object.entries({
  '/login': <Login />,
  '/sign_up': <Register />,
  '/cars/:car_id/details': <DetailsPage />,
  '/cars/new': <AddCar />,
  '/cars': <CarsHome />,
  '/myreservations': <MyReservations />,
  '/lifestyle': <LifeStyle />,
});

const unLoggedRoutes = Object.entries({
  '/sign_up': <Register />,
  '/lifestyle': <LifeStyle />,
  '/cars/:car_id/details': <DetailsPage />,
  '/cars': <CarsHome />,
  '/mycars': <MyCars />,
});

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

const handleTokenAuthentication = (dispatch) => {
  const rcarsJwt = JSON.parse(localStorage.getItem('rcars_jwt'));
  const token = (rcarsJwt) ? rcarsJwt.token : null;

  if (token) {
    dispatch(authenticateToken(rcarsJwt));
  }
};

const App = () => {
  const { isAuthenticated } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    handleTokenAuthentication(dispatch);
    dispatch(getCars());
    dispatch(getReservations());
    dispatch(getCities());
  }, [isAuthenticated]);

  return (
    <Router>
      <AppContainer>
        <Announcement />
        <PageContainer>
          <Sidebar />
          <Routes>
            { isAuthenticated
              ? loggedRoutes.map((route) => (
                <Route key={uuidv4()} path={route[0]} element={route[1]} />
              ))
              : unLoggedRoutes.map((route) => (
                <Route key={uuidv4()} path={route[0]} element={route[1]} />
              ))}
            { isAuthenticated
              ? <Route exact path="/" element={<HomePage />} />
              : <Route path="/*" element={<Login />} /> }
          </Routes>
        </PageContainer>
      </AppContainer>
    </Router>
  );
};

export default App;
