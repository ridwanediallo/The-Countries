import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../redux/store';
import navBar from '../NavBar';

describe('Testing navBar component', () => {
  it('should render correctly navBar component', () => {
    const tree = render(
      <Provider store={store}>
        <navBar />
      </Provider>
    );
    expect(tree).toMatchSnapshot();
  });
});
