import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import NavBar from '../NavBar';
import { store } from '../../Redux/configureStore';
import { BrowserRouter } from 'react-router-dom';

describe('NavBar test', () => {
  test('should render NavBar properly', () => {
    const component = render(
      <Provider store={store}>
        <BrowserRouter>
          <NavBar />
        </BrowserRouter>
      </Provider>
    );
    expect(component).toMatchSnapshot();
  });
});
