import React, { useState } from 'react';
import LogoutConfirmationModal from './components/LogoutConfirmationModal';
import Home from "./components/Home"; // Make sure you have this component

const Parent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleLogout = () => {
    // Perform logout logic here
    console.log("Logged out");
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <button onClick={openModal}>Open Logout Modal</button>
      {isModalOpen && (
        <LogoutConfirmationModal 
          handleLogout={handleLogout}
          closeModal={closeModal}
        />
      )}
    </div>
  );
};

export default Parent;
