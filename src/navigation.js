import AddCar from './pages/AddCar';
import LifeStyle from './pages/LifeStyle';
import CarsHome from './components/cars/CarsHome';
import MyReservations from './pages/MyReservations';
import DetailsPage from './pages/DetailsPage';

const links = [
  {
    id: 1,
    element: <CarsHome />,
    path: '/cars',
  },
  {
    id: 2,
    element: <DetailsPage />,
    path: '/:car_id/details',
  },
  {
    id: 3,
    element: <MyReservations />,
    path: '/myreservations',
  },
  {
    id: 4,
    element: <LifeStyle />,
    path: '/lifestyle',
  },
  {
    id: 5,
    element: <AddCar />,
    path: '/cars/new',
  },
];

export default links;
