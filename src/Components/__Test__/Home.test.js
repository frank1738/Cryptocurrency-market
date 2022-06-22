import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import Home from '../Home';
import { store } from '../../Redux/configureStore';

describe('Home page test', () => {
  test('should render home page properly', () => {
    const component = render(
      <Provider store={store}>
        <Home />
      </Provider>
    );
    expect(component).toMatchSnapshot();
  });
});
