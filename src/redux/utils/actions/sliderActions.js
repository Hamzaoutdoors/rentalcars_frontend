const SET_ITEM_SIZE = 'utils/slider/setItemSize';
const SET_SLIDER_INDEX = 'utils/slider/setSliderIndex';

const setItemSize = (size) => ({
  type: SET_ITEM_SIZE,
  payload: size,
});

const setSliderIndex = (index) => ({
  type: SET_SLIDER_INDEX,
  payload: index,
});

export {
  setItemSize, setSliderIndex, SET_ITEM_SIZE, SET_SLIDER_INDEX,
};
