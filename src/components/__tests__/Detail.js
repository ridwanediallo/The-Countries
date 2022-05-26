import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../redux/store';
import Detail from '../Detail';

describe('Testing Detail component', () => {

  it('should render correctly Detail component', () => {
    const tree = render(
      <Provider store={store}>
        <Detail />
      </Provider>
    );
    expect(tree).toMatchSnapshot();
  });
});
