import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import AddCar from '../../pages/AddCar';
import store from '../../redux/configureStore';

it('render the Add Car page correctly', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <Router>
          <AddCar />
        </Router>
      </Provider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
