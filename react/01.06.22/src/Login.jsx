import React from 'react';

// in: obj (onLogin: callBack)
// output: jsx
const Login = ({ onLogin }) => (
  <button onClick={onLogin} className="login btn">
    Login
  </button>
);

export default Login;
