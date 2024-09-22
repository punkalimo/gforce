// src/App.js
import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Homepage from './pages/Home/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import Vehicles from './pages/Vehicles/Vehicles';
import Profile from './pages/Profile/Profile';
import AdminProfile from './pages/AdminProfile/AdminProfile'; // Import the AdminProfile
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Router>
      <ToastContainer />
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<Signup />} />
        <Route path="/vehicles" element={<Vehicles />} />
        <Route 
          path="/profile" 
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          } 
        />
        <Route 
          path="/admin/profile" 
          element={
            <PrivateRoute>
              <AdminProfile />
            </PrivateRoute>
          } 
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
