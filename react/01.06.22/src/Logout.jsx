import React from 'react';

// in: obj (onLogout: callBack)
// output: jsx
const Logout = ({ onLogout }) => (
  <button onClick={onLogout} className="logout btn">
    Logout
  </button>
);

export default Logout;
