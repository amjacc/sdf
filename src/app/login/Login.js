import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

const Login = props => {
  return (
    <>
      <h1>Login</h1>
      <Link to="/home">
        <Button color="primary" variant="contained">
          Login
        </Button>
      </Link>
    </>
  );
};

export default Login;
