/* eslint-disable max-len */
import { React, useState, useEffect } from 'react';

// import { NavLink } from 'react-router-dom';
// import styled from 'styled-components';
import DesktopBar from './desktop/DesktopBar';
import MobileBar from './mobile/MobileBar';

const handleResize = () => {
  if (window.innerWidth > 1150) {
    return false;
  }

  return true;
};

const Sidebar = () => {
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    setMobile(handleResize());
    window.addEventListener('resize', () => {
      setMobile(handleResize());
    });
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
