import React from 'react';
import './LogoutConfirmationModal.css';

const LogoutConfirmationModal = ({ handleLogout }) => {
  const handleLogoutClick = () => {
    handleLogout();
  };

  const handleCloseClick = () => {
    // Close the modal
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <p>Are you sure you want to logout?</p>
        <div className="modal-buttons">
      <Link to="/Home">
          <button onClick={handleLogoutClick}>Logout</button>
      </Link>
      
          <button onClick={handleCloseClick}>Cancel</button>
       
        </div>
      </div>
    </div>
  );
};

export default LogoutConfirmationModal;
