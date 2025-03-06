import React, { useEffect, useState } from 'react';
import Header from '../header/Header';
import SideNavigation from '../../side-navigation/SideNavigation';
import { IconButton } from '@mui/material';
import ChatIcon from '@mui/icons-material/Chat';
import './layout.css';

const Layout = props => {
  const [displaySidenav, setdisplaySidenav] = useState(false);

  const handleDisplaySidenav = () => {
    localStorage.setItem('displaySidenav', !displaySidenav);
    setdisplaySidenav(!displaySidenav);
  };

  const closeSideNav = () => {
    localStorage.setItem('displaySidenav', false);
    setdisplaySidenav(false);
  };

  useEffect(() => {
    localStorage.setItem('displaySidenav', false);
  }, []);

  return (
    <>
      <Header displaySidenav={displaySidenav} handleDisplaySidenav={handleDisplaySidenav} />
      <SideNavigation displaySidenav={displaySidenav} closeSideNav={closeSideNav} />
      <div className="chatbot">
        <IconButton>
          <ChatIcon />
        </IconButton>
      </div>
    </>
  );
};

export default Layout;
