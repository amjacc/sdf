import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

const Login = props => {
  return (
    <center>
      <h1>Login</h1>
      <Link to="/home">
        <Button color="primary" variant="contained">
          Login
        </Button>
      </Link>
    </center>
  );
};

export default Login;
