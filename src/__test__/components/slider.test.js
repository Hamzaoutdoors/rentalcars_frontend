import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import Slider from '../../components/Slider';
import store from '../../redux/configureStore';

it('Slider component renders correctly', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <Router>
          <Slider />
        </Router>
      </Provider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
