import React from 'react';
import styles from './ProfileInfo.module.scss';

const ProfileInfo = ({ userDetails }) => {
  return (
    <div className={styles.info}>
      <h2>Profile Information</h2>
      <ul>
        <li><strong>First Name:</strong> {userDetails.FirstName}</li>
        <li><strong>Last Name:</strong> {userDetails.LastName}</li>
        <li><strong>Email:</strong> {userDetails.Email}</li>
        <li><strong>Phone:</strong> {userDetails.PhoneNumber}</li>
        {/* You can also add a joined date if you have it in your userDetails */}
        
      </ul>
    </div>
  );
};

export default ProfileInfo;
