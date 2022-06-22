import { filter } from '../__mocks__/filter';
jest.mock('../filter');
test('test the filter function', () => {
  expect(filter('Bitcoin')).toBe(2000);
});
