import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import DetailsPage from '../../pages/DetailsPage';
import store from '../../redux/configureStore';

it('render the car detail page correctly', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <Router>
          <DetailsPage />
        </Router>
      </Provider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
