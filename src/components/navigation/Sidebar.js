import { React, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
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

const handleAuthentication = (path, navigate, logged) => {
  if (!logged) {
    if ((path === '/login') || (path === '/sign_up')) return;

    navigate('/login', { replace: true });
  }
};

const Sidebar = () => {
  const { mobile } = useSelector((state) => state.utils.navBar);
  const { isAuthenticated } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    handleResize();
    if (!isAuthenticated) {
      handleAuthentication(location.pathname, navigate, isAuthenticated);
    }

    window.addEventListener('resize', () => {
      handleResize();
    });

    return () => {
      setDefaultWhenUnmount();
    };
  }, [location.pathname]);

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
