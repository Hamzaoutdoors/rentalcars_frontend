const initialState = {
  navBar: {
    expandMobile: false,
    activeLink: '/',
    activeDashboardLink: 'cars',
  },
  slider: {
    slideIndex: 0,
    itemsSize: 3,
  },
};

const utilReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default utilReducer;
