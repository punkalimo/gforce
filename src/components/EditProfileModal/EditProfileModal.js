// EditProfileModal.js
import React, { useState } from 'react';
import styles from './EditProfileModal.module.scss';

const EditProfileModal = ({ isOpen, onClose, userDetails, onSave }) => {
  const [formData, setFormData] = useState(userDetails);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <h2>Edit Profile</h2>
        <form onSubmit={handleSubmit}>
          <label>First Name</label>
          <input
            type="text"
            name="FirstName"
            value={formData.FirstName}
            onChange={handleInputChange}
          />
          <label>Last Name</label>
          <input
            type="text"
            name="LastName"
            value={formData.LastName}
            onChange={handleInputChange}
          />
          <label>Email</label>
          <input
            type="email"
            name="Email"
            value={formData.Email}
            onChange={handleInputChange}
          />
          <label>Phone Number</label>
          <input
            type="text"
            name="PhoneNumber"
            value={formData.PhoneNumber}
            onChange={handleInputChange}
          />
          <div className={styles.buttonContainer}>
            <button type="submit">Save</button>
            <button type="button" className={styles.cancelButton} onClick={onClose}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProfileModal;
