// AddVehicleModal.js
import React, { useState } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

const AddVehicleModal = ({ open, handleClose }) => {
    const [vehicleDetails, setVehicleDetails] = useState({
        Picture: '',
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
        NextMaintenanceDate: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setVehicleDetails({ ...vehicleDetails, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Implement the API call to add the vehicle here
        console.log(vehicleDetails);
        // Reset the form and close the modal
        handleClose();
    };

    return (
        <Modal open={open} onClose={handleClose}>
            <Box>
                <form onSubmit={handleSubmit}>
                    <input type="text" name="Picture" placeholder="Picture URL" onChange={handleChange} />
                    <input type="text" name="VehicleName" placeholder="Vehicle Name" onChange={handleChange} />
                    <input type="text" name="Model" placeholder="Model" onChange={handleChange} />
                    <input type="number" name="Year" placeholder="Year" onChange={handleChange} />
                    <input type="text" name="Transmission" placeholder="Transmission" onChange={handleChange} />
                    <input type="text" name="FuelType" placeholder="Fuel Type" onChange={handleChange} />
                    <input type="text" name="LicensePlate" placeholder="License Plate" onChange={handleChange} />
                    <input type="text" name="Status" placeholder="Status" onChange={handleChange} />
                    <input type="text" name="Description" placeholder="Description" onChange={handleChange} />
                    <input type="number" name="PricePerDay" placeholder="Price Per Day" onChange={handleChange} />
                    <input type="text" name="Location" placeholder="Location" onChange={handleChange} />
                    <input type="number" name="Mileage" placeholder="Mileage" onChange={handleChange} />
                    <input type="date" name="LastMaintenanceDate" onChange={handleChange} />
                    <input type="date" name="NextMaintenanceDate" onChange={handleChange} />
                    <Button type="submit">Add Vehicle</Button>
                </form>
            </Box>
        </Modal>
    );
};

export default AddVehicleModal;
