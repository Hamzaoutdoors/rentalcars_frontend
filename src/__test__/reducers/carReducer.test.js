import carsReducer from '../../redux/cars/carsSlice';

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
