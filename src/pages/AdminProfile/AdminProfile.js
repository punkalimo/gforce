// src/pages/AdminProfile/AdminProfile.js
import React, { useState, useEffect } from 'react';
import ProfileHeader from '../../components/ProfileHeader/ProfileHeader';
import ProfileInfo from '../../components/ProfileInfo/ProfileInfo';
import ProfileActions from '../../components/ProfileActions/ProfileActions';
import styles from './AdminProfile.module.scss';

const AdminProfile = () => {
  const [userDetails, setUserDetails] = useState({
    FirstName: '',
    LastName: '',
    Email: '',
    PhoneNumber: '',
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const token = localStorage.getItem('accessToken');
        if (!token) {
          throw new Error('No access token found');
        }

        const response = await fetch('http://localhost:5000/admin/profile', {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error(`Failed with status ${response.status}: ${response.statusText}`);
        }

        const data = await response.json();
        setUserDetails(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching user details:', error);
        setError(error.message);
        setLoading(false);
      }
    };

    fetchUserDetails();
  }, []);

  const handleSave = async (updatedDetails) => {
    setUserDetails(updatedDetails);

    try {
      const response = await fetch('http://localhost:5000/admin/profile', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
        body: JSON.stringify(updatedDetails),
      });

      if (!response.ok) {
        throw new Error('Failed to save user details');
      }

      const data = await response.json();
      setUserDetails(data); // Update the UI with the saved details
    } catch (error) {
      console.error('Error saving user details:', error);
    }
  };

  if (loading) {
    return <p>Loading admin profile...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className={styles.container}>
      <ProfileHeader userDetails={userDetails} />
      <ProfileInfo userDetails={userDetails} />
      <ProfileActions userDetails={userDetails} onSave={handleSave} />
    </div>
  );
};

export default AdminProfile;
