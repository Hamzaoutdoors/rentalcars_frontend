import { React, useEffect } from 'react';
import { useSelector } from 'react-redux';
import DesktopBar from './desktop/DesktopBar';
import MobileBar from './mobile/MobileBar';

const handleResize = () => {
  if (window.innerWidth > 1150) {
    return false;
  }

  return true;
};

const Sidebar = () => {
  const { isMobile } = useSelector((state) => state.utils.navbar);

  useEffect(() => {
    setMobile(handleResize());
    window.addEventListener('resize', () => {
      setMobile(handleResize());
    });
  }, []);

  // useEffect(() => {
  //   first;

  //   return () => {
  //     second;
  //   };
  // }, [third]);

  if (isMobile) {
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
