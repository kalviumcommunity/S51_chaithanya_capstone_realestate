import React from 'react';
import { useNavigate } from 'react-router-dom';

const LogoutConfirmationModal = ({ handleLogout, closeModal }) => {
  const navigate = useNavigate();

  const handleLogoutClick = () => {
    handleLogout();
    closeModal();
    navigate('/Home'); // Navigate to Home
  };

  const handleCloseClick = () => {
    closeModal(); // Close the modal
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <p>Are you sure you want to logout?</p>
        <div className="modal-buttons">
          <button onClick={handleLogoutClick}>Logout</button>
          <button onClick={handleCloseClick}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default LogoutConfirmationModal;
