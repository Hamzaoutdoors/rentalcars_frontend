import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import styled from 'styled-components';
// import { getCars } from './redux/cars/carsSlice';
// import { getCities, getReservations } from './redux/reservations/reservationsSlice';
import Announcement from './components/Announcement';
import Sidebar from './components/Sidebar';
import HomePage from './pages/HomePage';
import links from './navigation';

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
      <Announcement />
      <Container>
        <Sidebar />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          {links.map((link) => (
            <Route key={link.id} path={link.path} element={link.element} />
          ))}
        </Routes>
      </Container>
    </Router>
  );

export default App;
