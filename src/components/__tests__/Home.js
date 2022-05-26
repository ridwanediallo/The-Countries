import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../redux/store'
import Home from '../Home'

describe('Testing Home component', () => {});
it('should render correctly Home component', () => {
  const tree = render(
    <Provider store={store}>
      <Home />
    </Provider>
  );
  expect(tree).toMatchSnapshot();
});
