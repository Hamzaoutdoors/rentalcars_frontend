import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import LifeStyle from '../../pages/LifeStyle';
import store from '../../redux/ConfigureStore';

it('render the lifestyle page correctly', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <Router>
          <LifeStyle />
        </Router>
      </Provider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
