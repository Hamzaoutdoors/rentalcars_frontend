const TOGGLE_MODAL = 'utils/navbar/toggleModal';
const SET_ACTIVE_LINK = 'utils/navbar/setActiveLink';
const SET_DASHBOARD_CHILD_LINK = 'utils/navbar/setDashboardChildLink';

const toggleMobileModal = (bool) => ({
  type: TOGGLE_MODAL,
  payload: bool,
});

const setActiveLink = (path) => ({
  type: SET_ACTIVE_LINK,
  payload: path,
});

const setActiveDashLink = (option) => ({
  type: SET_DASHBOARD_CHILD_LINK,
  payload: option,
});

export {
  setActiveDashLink,
  setActiveLink,
  toggleMobileModal,
  TOGGLE_MODAL,
  SET_ACTIVE_LINK,
  SET_DASHBOARD_CHILD_LINK,
};
