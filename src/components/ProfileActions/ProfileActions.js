// ProfileActions.js
import React, { useState } from 'react';
import EditProfileModal from '../EditProfileModal/EditProfileModal';
import styles from './ProfileActions.module.scss';

const ProfileActions = ({ userDetails, onSave }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEditClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={styles.profileActions}>
      <button onClick={handleEditClick}>Edit Profile</button>
      <EditProfileModal 
        isOpen={isModalOpen} 
        onClose={handleCloseModal} 
        userDetails={userDetails}
        onSave={onSave}
      />
    </div>
  );
};

export default ProfileActions;
