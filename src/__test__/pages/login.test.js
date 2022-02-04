import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import Login from '../../pages/Login';
import store from '../../redux/configureStore';

it('render the Login page correctly', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <Router>
          <Login />
        </Router>
      </Provider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
