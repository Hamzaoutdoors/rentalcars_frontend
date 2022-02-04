import reservationsReducer from '../../redux/reservations/reservationsSlice';

describe('reservations reducers working as expected', () => {
  it('should return the initial state', () => {
    expect(reservationsReducer(undefined, {})).toEqual(
      {
        data: [],
        cities: [],
        error: {},
        isFetching: false,
        utils: {
          openModal: false,
        },
      },
    );
  });
});
