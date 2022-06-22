import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import Details from '../Details';
import { store } from '../../Redux/configureStore';

describe('Details page test', () => {
  test('should render Details page properly', () => {
    const component = render(
      <Provider store={store}>
        <Details />
      </Provider>
    );
    expect(component).toMatchSnapshot();
  });
});
