import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import HomePage from '../../pages/HomePage';
import store from '../../redux/configureStore';

it('render the Home page correctly', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <Router>
          <HomePage />
        </Router>
      </Provider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
