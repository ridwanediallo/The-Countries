import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../redux/store';
import Search from '../Search';

describe('Testing Search component', () => {});
it('should render correctly Search component', () => {
  const tree = render(
    <Provider store={store}>
      <Search />
    </Provider>
  );
  expect(tree).toMatchSnapshot();
});
