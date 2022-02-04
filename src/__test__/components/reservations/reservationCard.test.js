import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../../redux/configureStore';
import CarCard from '../../../components/cars/CarDetails';

it('reservation Card component renders correctly', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <Router>
          <CarCard />
        </Router>
      </Provider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
