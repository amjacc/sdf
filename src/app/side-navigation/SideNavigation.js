import React from 'react';
import './side-navigation.css';
import { IconButton } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import BackupTableIcon from '@mui/icons-material/BackupTable';
import CloseIcon from '@mui/icons-material/Close';

const SideNavigation = props => {
  return (
    <div className="container">
      <div className="sidenav">
        <div className="close-icon">
          <IconButton>
            <CloseIcon />
          </IconButton>
        </div>
        <div className="sidenav-options">
          <IconButton>
            <HomeIcon />
          </IconButton>
          <div className="sidenav-label">Home</div>
        </div>
        <div className="sidenav-options">
          <IconButton>
            <BackupTableIcon />
          </IconButton>
          <div className="sidenav-label">Ingestion Schedule</div>
        </div>
      </div>
    </div>
  );
};

export default SideNavigation;
