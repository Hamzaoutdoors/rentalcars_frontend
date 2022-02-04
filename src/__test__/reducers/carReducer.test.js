import carsReducer from '../../redux/cars/carsSlice';
// import car from './carMock';

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
});
