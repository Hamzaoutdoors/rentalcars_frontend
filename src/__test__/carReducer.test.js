import carsReducer from '../redux/cars/carsSlice';
import car from './carMock';

describe('reducers working as expected', () => {
  it('should return the initial state', () => {
    expect(carsReducer(undefined, {})).toEqual(
      {
        data: [],
        error: {},
        isFetching: false,
      },
    );
  });

  it('should handle addCar.fulfilled', () => {
    expect(carsReducer({}, { type: 'cars/addCar.fulfilled', payload: car })).toEqual(
      {
        isFetching: false,
        data: [car],
        error: {},
      },
    );
  });
});
