import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../redux/configureStore';
import Sidebar from '../../components/navigation/Sidebar';

it('Sidebar component renders correctly', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <Router>
          <Sidebar />
        </Router>
      </Provider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
