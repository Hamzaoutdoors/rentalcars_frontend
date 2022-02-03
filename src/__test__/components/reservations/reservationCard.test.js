import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../../redux/ConfigureStore';
import ReservationCard from '../../../components/reservations/ReservationCard';

it('ReservationCard component renders correctly', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <Router>
          <ReservationCard />
        </Router>
      </Provider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
