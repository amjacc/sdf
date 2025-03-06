import React from 'react';
import { IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { CONST } from '../../../app/constants/Const';
import accentureGreaterThanLogo from '../../images/accentureGreaterThanLogo.png';
import './header.css';

const Header = props => {
  return (
    <>
      <div className="header-container">
        <div className="header">
          <div className="hamburger-menu">
            <IconButton>
              <MenuIcon />
            </IconButton>
          </div>
          <div className="accenture-logo">
            <img src="" width="30" height="30" />
          </div>
          <div className="vertical"></div>
          <div className="header-title">{CONST.HEADER.SECURE_DATA_FOUNDATION}</div>
        </div>
        <div className="account">
          <div className="username">{CONST.HEADER.USER_NAME}</div>
          <div className="user-icon">
            <IconButton>
              <AccountCircleIcon />
            </IconButton>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
