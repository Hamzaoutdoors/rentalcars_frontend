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
      return {
        ...state,
        slider: {
          ...state.slider,
          itemsSize: action.payload,
        },
      };
    }
    case SET_SLIDER_INDEX: {
      return {
        ...state,
        slider: {
          ...state.slider,
          slideIndex: action.payload,
        },
      };
    }
    default:
      return state;
  }
};

export default utilReducer;
