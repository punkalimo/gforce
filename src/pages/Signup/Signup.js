import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../../components/Buttons/Button';
import styles from './Signup.module.scss';

const Signup = () => {
    // State to hold form input values
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Create the payload to send to the backend
        const userData = {
            firstName,
            lastName,
            phoneNumber,
            email,
            password,
        };

        try {
            // POST request to your backend API (assuming /api/signup is your route)
            const response = await fetch('http://localhost:5000/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),
            });

            const data = await response.json();

            if (response.ok) {
                // Navigate to login page or a success page after signup
                navigate('/login');
            } else {
                // Handle error (e.g., display error message)
                console.error(data.message);
            }
        } catch (error) {
            console.error('Error signing up:', error);
        }
    };

    return (
        <div className={styles.container}>
            <h2>G-FORCE VEHICLE BOOKING</h2>
            <div className={styles.card}>
                <h3>Create account</h3>
                <p>No credit card required</p>
                
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="First Name"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Last Name"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                    <input
                        type="number"
                        placeholder="Phone Number"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <Button type="submit" name="Create Account" />
                </form>
                
                <p>OR SIGN UP WITH</p>
                <section>
                    <p>Already have an account?</p>
                    <Link to="/login" className={styles.link}>
                        Log in
                    </Link>
                </section>
            </div>
        </div>
    );
};

export default Signup;
