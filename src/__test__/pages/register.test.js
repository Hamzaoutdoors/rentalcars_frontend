import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import Register from '../../pages/Register';
import store from '../../redux/configureStore';

it('render the registration page correctly', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <Router>
          <Register />
        </Router>
      </Provider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
