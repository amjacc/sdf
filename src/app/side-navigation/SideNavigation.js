import React, { useState, useEffect } from 'react';
import './side-navigation.css';
import { IconButton } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import BackupTableIcon from '@mui/icons-material/BackupTable';
import CloseIcon from '@mui/icons-material/Close';
import { CONST } from '../constants/Const';

const SideNavigation = props => {
  const { displaySidenav, closeSideNav } = props;

  return (
    <>
      {displaySidenav ? (
        <div className="container">
          <div className="sidenav">
            <div className="close-icon">
              <IconButton onClick={closeSideNav}>
                <CloseIcon />
              </IconButton>
            </div>
            <div className="sidenav-options">
              <IconButton>
                <HomeIcon />
              </IconButton>
              <div className="sidenav-label">{CONST.SIDE_NAVIGATION.HOME}</div>
            </div>
            <div className="sidenav-options">
              <IconButton>
                <BackupTableIcon />
              </IconButton>
              <div className="sidenav-label">{CONST.SIDE_NAVIGATION.INGESTION_SCHEDULE}</div>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default SideNavigation;
