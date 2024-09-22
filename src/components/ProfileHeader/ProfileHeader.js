import React from 'react';
import styles from './ProfileHeader.module.scss';

const ProfileHeader = ({ userDetails }) => {
  const user = {
    name: `${userDetails.FirstName} ${userDetails.LastName}`, // Combine first and last name
    profilePicture: 'https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?t=st=1727013357~exp=1727016957~hmac=0fd17d42ec46adf41f03cc3dd9e3cc3658c3c652ea193ebce0e6a5e25788d475&w=740', // Placeholder image for now
  };

  return (
    <div className={styles.header}>
      <img src={user.profilePicture} alt={`${user.name}'s Profile`} className={styles.profilePicture} />
      <h1>{user.name}</h1>
    </div>
  );
};

export default ProfileHeader;
