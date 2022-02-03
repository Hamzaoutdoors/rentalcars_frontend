import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../../redux/ConfigureStore';
import ReservationDetail from '../../../components/reservations/ReservationDetail';

it('ReservationDetail component renders correctly', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <Router>
          <ReservationDetail />
        </Router>
      </Provider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
