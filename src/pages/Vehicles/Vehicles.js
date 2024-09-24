import React, { useState, useEffect } from 'react';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import Box from '@mui/material/Box';
import Input from '../../components/Input/Input';
import Dropdown from './components/DropDown';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import { jwtDecode } from 'jwt-decode'; // Corrected import
import styles from './infoAboutVehicle/InfoAboutVehicle.module.scss';
import modalStyles from './VehicleModal.module.scss'; // Import custom styles for modal
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
const Vehicles = () => {
  const [isAdmin, setIsAdmin] = useState(false); // State to hold admin status
  const [openModal, setOpenModal] = useState(false); // Modal open state
  const [vehicleDetails, setVehicleDetails] = useState({
    VehiclePicture: null, // Update to hold the file
    VehicleName: '',
    Model: '',
    Year: '',
    Transmission: '',
    FuelType: '',
    LicensePlate: '',
    Status: '',
    Description: '',
    PricePerDay: '',
    Location: '',
    Mileage: '',
    LastMaintenanceDate: '',
    NextMaintenanceDate: '',
  });

  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      try {
        const decodedToken = jwtDecode(token);
        setIsAdmin(decodedToken.role === 'admin'); // Set isAdmin based on role
      } catch (error) {
        console.error('Token decoding error:', error);
      }
    }
  }, []);

  // Handle input changes for text fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setVehicleDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
  };

  const handleFileChange = (e) => {
	const file = e.target.files[0];
	setVehicleDetails((prevDetails) => ({ ...prevDetails, VehiclePicture: file }));
  };
  // Handle modal form submission
  const handleSubmit = (e) => {
	e.preventDefault();
  
	const formData = new FormData();
	Object.keys(vehicleDetails).forEach((key) => {
	  formData.append(key === 'VehiclePicture' ? 'Picture' : key, vehicleDetails[key]); // Change VehiclePicture to Picture
	});
  
	const token = localStorage.getItem('accessToken'); // Get the token from localStorage
  
	axios.post('http://localhost:5000/admin/vehicles', formData, {
	  headers: {
		'Content-Type': 'multipart/form-data',
		'Authorization': `Bearer ${token}`, // Include the token in the Authorization header
	  },
	})
	.then(response => {
	  toast.success(response.data.message); // Show success message
	  console.log(response.data);
	  setOpenModal(false); // Close the modal after submission
	})
	.catch(error => {
	  if (error.response && error.response.data) {
		toast.error(error.response.data.message || 'Error uploading vehicle'); // Show error message
	  } else {
		toast.error('Error uploading vehicle'); // Generic error message
	  }
	});
  };
  

  return (
    <div className={styles.container}>
      <h2 className="text-gray-400">Search Vehicles</h2>
      <Input placeholder="search for car or vehicle make..." className={styles.input} />

      {isAdmin && (
        <button className={styles.searchButton} onClick={() => setOpenModal(true)}>
          Add Vehicle
        </button> // Render Add Vehicle button if admin
      )}

      <section>
        <Dropdown />
      </section>
      <p>
        Press the <StarOutlineIcon sx={{ color: '#89B93F', marginX: 1 }} /> to add to favorites
      </p>

      {/* Add Vehicle Modal */}
      <Modal open={openModal} onClose={() => setOpenModal(false)}>
        <Box className={modalStyles.modalBox}>
          <h2 className={modalStyles.modalTitle}>Add Vehicle Details</h2>
          <form onSubmit={handleSubmit} className={modalStyles.form}>
            {/* File input for picture */}
            <div className={modalStyles.formGroup}>
              <label className={modalStyles.inputLabel} htmlFor="VehiclePicture">
                Upload Vehicle Picture
              </label>
              <input
                type="file"
                id="VehiclePicture"
                name="VehiclePicture"
                accept="image/*"
                onChange={handleFileChange}
                required
                className={modalStyles.inputField}
              />
            </div>

            <input
              type="text"
              name="VehicleName"
              placeholder="Vehicle Name"
              value={vehicleDetails.VehicleName}
              onChange={handleInputChange}
              required
              className={modalStyles.inputField}
            />
            <input
              type="text"
              name="Model"
              placeholder="Model"
              value={vehicleDetails.Model}
              onChange={handleInputChange}
              required
              className={modalStyles.inputField}
            />
            <input
              type="number"
              name="Year"
              placeholder="Year"
              value={vehicleDetails.Year}
              onChange={handleInputChange}
              required
              className={modalStyles.inputField}
            />
            <input
              type="text"
              name="Transmission"
              placeholder="Transmission"
              value={vehicleDetails.Transmission}
              onChange={handleInputChange}
              required
              className={modalStyles.inputField}
            />
            <input
              type="text"
              name="FuelType"
              placeholder="Fuel Type"
              value={vehicleDetails.FuelType}
              onChange={handleInputChange}
              required
              className={modalStyles.inputField}
            />
            <input
              type="text"
              name="LicensePlate"
              placeholder="License Plate"
              value={vehicleDetails.LicensePlate}
              onChange={handleInputChange}
              required
              className={modalStyles.inputField}
            />
            <input
              type="text"
              name="Status"
              placeholder="Status"
              value={vehicleDetails.Status}
              onChange={handleInputChange}
              required
              className={modalStyles.inputField}
            />
            <input
              type="text"
              name="Description"
              placeholder="Description"
              value={vehicleDetails.Description}
              onChange={handleInputChange}
              required
              className={modalStyles.inputField}
            />
            <input
              type="number"
              name="PricePerDay"
              placeholder="Price Per Day"
              value={vehicleDetails.PricePerDay}
              onChange={handleInputChange}
              required
              className={modalStyles.inputField}
            />
            <input
              type="text"
              name="Location"
              placeholder="Location"
              value={vehicleDetails.Location}
              onChange={handleInputChange}
              required
              className={modalStyles.inputField}
            />
            <input
              type="number"
              name="Mileage"
              placeholder="Mileage"
              value={vehicleDetails.Mileage}
              onChange={handleInputChange}
              required
              className={modalStyles.inputField}
            />
            <div className={modalStyles.formGroup}>
              <label className={modalStyles.inputLabel} htmlFor="LastMaintenanceDate">
                Last Maintenance Date
              </label>
              <input
                type="date"
                id="LastMaintenanceDate"
                name="LastMaintenanceDate"
                value={vehicleDetails.LastMaintenanceDate}
                onChange={handleInputChange}
                required
                className={modalStyles.inputField}
              />
            </div>

            <div className={modalStyles.formGroup}>
              <label className={modalStyles.inputLabel} htmlFor="NextMaintenanceDate">
                Next Maintenance Date
              </label>
              <input
                type="date"
                id="NextMaintenanceDate"
                name="NextMaintenanceDate"
                value={vehicleDetails.NextMaintenanceDate}
                onChange={handleInputChange}
                required
                className={modalStyles.inputField}
              />
            </div>

            <Button type="submit" variant="contained" className={modalStyles.submitButton}>
              Add Vehicle
            </Button>
          </form>
        </Box>
      </Modal>
    </div>
  );
};

export default Vehicles;
