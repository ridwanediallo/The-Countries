import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../redux/store';
import Hero from '../Hero';

describe('Testing Hero component', () => {

    it('should render correctly Hero component', () => {
      const tree = render(
        <Provider store={store}>
          <Hero />
        </Provider>
      );
      expect(tree).toMatchSnapshot();
    });

    it('renders learn react link', () => {
      const { getByText } = render(
        <Provider store={store}>
          <Hero />
        </Provider>
      );

      expect(getByText(/The entire world/i)).toBeInTheDocument();
    });
});
