import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import MyReservations from '../../pages/MyReservations';
import store from '../../redux/configureStore';

it('render my reservations page correctly', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <Router>
          <MyReservations />
        </Router>
      </Provider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
