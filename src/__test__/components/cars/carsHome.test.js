import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../../redux/configureStore';
import CarsHome from '../../../components/cars/CarDetails';

it('CarsHome component renders correctly', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <Router>
          <CarsHome />
        </Router>
      </Provider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
