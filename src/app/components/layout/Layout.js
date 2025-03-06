import React from 'react';
import Header from '../header/Header';
import SideNavigation from '../../side-navigation/SideNavigation';
import { IconButton } from '@mui/material';
import ChatIcon from '@mui/icons-material/Chat';
import './layout.css';

const Layout = props => {
  return (
    <>
      <Header />
      <SideNavigation />
      <div className="chatbot">
        <IconButton>
          <ChatIcon />
        </IconButton>
      </div>
    </>
  );
};

export default Layout;
