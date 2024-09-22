import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../../components/Buttons/Button';
import styles from './Login.module.scss';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        const userData = { Email: email, Password: password };

        try {
            const response = await fetch('http://localhost:5000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),
            });

            const data = await response.json();

            if (response.ok) {
                // Handle successful login
                localStorage.setItem('accessToken', data.accessToken);
                navigate('/dashboard'); // Change this to your desired route
            } else {
                // Show error message as toast
                toast.error(data.message || 'Login failed. Please try again.');
            }
        } catch (error) {
            console.error('Error logging in:', error);
            toast.error('An error occurred. Please try again later.');
        }
    };

    return (
        <div className={styles.container}>
            <h2>G-FORCE VEHICLE BOOKING</h2>
            <div className={styles.card}>
                <h3>Welcome</h3>
                <p>Sign in to your account</p>
                <form onSubmit={handleLogin}>
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
                    <Button type="submit" name="Login" />
                </form>
                <p>OR SIGN IN WITH</p>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    {/* Add social login options here */}
                </div>

                <Link to="/forgot-password" className={styles.forgotPassword}>
                    Forgot Password?
                </Link>
                <section>
                    <p>Don’t have an account?</p>
                    <Link to="/sign-up" className={styles.link}>
                        Sign up here
                    </Link>
                </section>
            </div>
            <ToastContainer /> {/* Add ToastContainer to render toasts */}
        </div>
    );
};

export default Login;
