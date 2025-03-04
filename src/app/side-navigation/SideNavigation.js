import React from 'react';
import './side-navigation.css';
import { IconButton } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import BackupTableIcon from '@mui/icons-material/BackupTable';

const SideNavigation = props => {
  return (
    <div className="container">
      <div className="sidenav">
        <div className="sidenav-options">
          <IconButton>
            <HomeIcon />
          </IconButton>
          <span className="sidenav-label">Home</span>
        </div>
        <div className="sidenav-options">
          <IconButton>
            <BackupTableIcon />
          </IconButton>
          <span className="sidenav-label">Ingestion Schedule</span>
        </div>
      </div>
    </div>
  );
};

export default SideNavigation;
