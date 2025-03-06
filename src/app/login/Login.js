import React from 'react';
import './login.css';
import { Link } from 'react-router-dom';
import { Button, TextField } from '@mui/material';
import logo from '../assets/accenture-logo.svg'
import dataImg from '../assets/data.svg'
import { useNavigate } from 'react-router-dom';

const Login = props => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/home');
  };
  return (
    <div className='container-login'>
      <div className='left'>
        <div className='company-logo'>
          <img src={logo} alt=''></img>
        </div>
        <h1>Secure Data Foundation</h1>
        <h3>Sign in to your account</h3>
        <label>User Name</label>
        <TextField id="outlined-basic" variant="outlined" size="small" placeholder='User Name' />
        <label>Password</label>
        <TextField id="outlined-password-input" variant='outlined' size="small" type="password" autoComplete="current-password"
          placeholder='Password' />
        <Button variant="contained" onClick={handleClick} style={{ background: '#851EC7' }}>
          Login
        </Button>
        <label className='label-copyright'>Copyright Accenture. All rights reserved.</label>
      </div>
      <div className='right'>
        <img src={dataImg} alt=''></img>
      </div>
    </div>
  );
};

export default Login;
