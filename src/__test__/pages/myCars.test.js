import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import MyCars from '../../pages/MyCars';
import store from '../../redux/configureStore';

it('render the cars list page correctly', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <Router>
          <MyCars />
        </Router>
      </Provider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
