import React from 'react';
import styles from './Navbar.module.scss';
import { Link,useNavigate } from 'react-router-dom';



const Navbar = () => {
  const navigate = useNavigate();
  
  // Check if the user is authenticated by checking the token in localStorage
  const isAuthenticated = !!localStorage.getItem('accessToken');

  const handleLogout = () => {
    // Clear the token from localStorage
    localStorage.removeItem('accessToken');
    
    // Redirect to the login page
    navigate('/login');
  };

  return (
    <div className={styles.container}>
      <Link to='/'>
        <h2>G-FORCE VEHICLE BOOKING</h2>
      </Link>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/vehicles'>Vehicles</Link>
        </li>
        <li>
          <Link to='/contact'>Contact</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
      </ul>
      <div className={styles.buttonContainer}>
        {/* Conditionally render based on user authentication */}
        {isAuthenticated ? (
          <>
            <Link to="/profile">Profile</Link>
            <button onClick={handleLogout} className={styles.logoutButton}>
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login">Sign in</Link>
            <Link to="/sign-up">
              <button className={styles.button}>Sign up</button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;