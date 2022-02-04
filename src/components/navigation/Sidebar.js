/* eslint-disable no-unused-vars */
import { React, useEffect } from 'react';
import { useSelector } from 'react-redux';
import DesktopBar from './desktop/DesktopBar';
import MobileBar from './mobile/MobileBar';
import store from '../../redux/configureStore';
import { toggleMobile, toggleMobileModal } from '../../redux/utils/actions/navActions';

const setDefaultWhenUnmount = () => {
  store.dispatch(toggleMobile(false));
  store.dispatch(toggleMobileModal(false));
};

const handleResize = () => {
  if (window.innerWidth > 1150) {
    store.dispatch(toggleMobile(false));
  } else {
    store.dispatch(toggleMobile(true));
  }
};

const Sidebar = () => {
  const { mobile } = useSelector((state) => state.utils.navBar);
  const { isAuthenticated } = useSelector((state) => state.auth);

  useEffect(() => {
    handleResize();

    window.addEventListener('resize', () => {
      handleResize();
    });

    return () => {
      setDefaultWhenUnmount();
    };
  }, []);

  if (mobile) {
    return (
      <>
        <MobileBar />
      </>
    );
  }

  return (
    <>
      <DesktopBar />
    </>
  );
};

export default Sidebar;
