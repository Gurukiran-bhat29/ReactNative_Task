const { fetchData } = require('../src/utils/api');
import { ANIME_DATA } from '../src/mocks/mockData';

test('fetchData should return data from the API', async () => {
  // Mocking the fetch function
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve(ANIME_DATA),
    })
  );

  // Storing the value of the Api function
  const data = await fetchData();

  // Assertion
  expect(data).toEqual(ANIME_DATA);

  // Cleanup mock
  global.fetch.mockClear();
  delete global.fetch;
});
