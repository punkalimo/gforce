// Profile.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import ProfileHeader from '../../components/ProfileHeader/ProfileHeader';
import ProfileInfo from '../../components/ProfileInfo/ProfileInfo';
import ProfileActions from '../../components/ProfileActions/ProfileActions';
import BookedVehiclesInfo from '../../components/BookedVehiclesInfo/BookedVehiclesInfo';
import styles from './Profile.module.scss';
import { jwtDecode } from 'jwt-decode';


const Profile = () => {
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState({
    FirstName: '',
    LastName: '',
    Email: '',
    PhoneNumber: '',
    role: '',
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    if (!token) {
      navigate('/login'); // Redirect if no token
      return;
    }

    // Decode the token to check role
    const decoded = jwtDecode(token);
    console.log('Decoded token:', decoded);

    // Redirect based on role
    if (decoded.role === 'admin') {
      navigate('/admin/profile'); // Redirect to admin profile
      return; // Stop further execution
    } else if (decoded.role !== 'customer') {
      navigate('/login'); // Redirect if not a valid role
      return; // Stop further execution
    }

    // If the role is customer, fetch user details
    const fetchUserDetails = async () => {
      try {
        const response = await fetch('http://localhost:5000/profile', {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          const errorMessage = `Failed with status ${response.status}: ${response.statusText}`;
          throw new Error(errorMessage);
        }

        const data = await response.json();
        setUserDetails({
          FirstName: data.FirstName,
          LastName: data.LastName,
          Email: data.Email,
          PhoneNumber: data.PhoneNumber,
          role: data.role,
        });
        setLoading(false);
      } catch (error) {
        console.error('Error fetching user details:', error);
        setError(error.message);
        setLoading(false);
      }
    };

    fetchUserDetails();
  }, [navigate]); // Add navigate as a dependency

  const handleSave = async (updatedDetails) => {
    setUserDetails(updatedDetails);

    try {
      const response = await fetch('http://localhost:5000/profile', {
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
      setUserDetails(data);
    } catch (error) {
      console.error('Error saving user details:', error);
    }
  };

  if (loading) {
    return <p>Loading profile...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.profileSection}>
        <ProfileHeader userDetails={userDetails} />
        <ProfileInfo userDetails={userDetails} />
        <ProfileActions userDetails={userDetails} onSave={handleSave} />
      </div>
      <div className={styles.bookedVehiclesSection}>
        <BookedVehiclesInfo />
      </div>
    </div>
  );
};

export default Profile;
