// Toast.js
import React from 'react';

const Toast = ({ message }) => {
  return (
    <div className="toast toast-top toast-end">
      <div className="alert alert-info">
        <span>{message}</span>
      </div>
    </div>
    
  );
};

export default Toast;
