import { SET_ITEM_SIZE, SET_SLIDER_INDEX } from './actions/sliderActions';

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
    case SET_ITEM_SIZE: {
      const newState = { ...state };
      newState.slider.slideIndex = action.payload;
      return { ...newState };
    }
    case SET_SLIDER_INDEX: {
      const newState = { ...state };
      newState.slider.itemsSize = action.payload;
      return { ...newState };
    }
    default:
      return state;
  }
};

export default utilReducer;
