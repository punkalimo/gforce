import React, { useState, useEffect } from 'react';
import styles from './BookedVehiclesInfo.module.scss';

const BookedVehiclesInfo = () => {
  // Dummy data for booked vehicles
  const dummyBookedVehicles = [
    {
      id: 1,
      vehicleName: 'Toyota Corolla',
      returnDate: '2024-09-30',
      mileage: 15234,
      nextServiceDate: '2025-01-15',
      rate: 'K850.00',
      licensePlate: 'BAD 4105',
      imageUrl: 'https://hagerty-media-prod.imgix.net/2021/12/2021-Toyota-Corolla-Hatchback-SE-Nightshade-3-scaled.jpg?auto=format%2Ccompress&ixlib=php-3.3.0', // Vehicle image
    },
    {
      id: 2,
      vehicleName: 'Ford Transit',
      returnDate: '2024-10-05',
      mileage: 58490,
      nextServiceDate: '2025-02-20',
      rate: 'K950.00',
      licensePlate: 'BAD 3705',
      imageUrl: 'https://example.com/ford-transit.jpg',
    },
    // Additional vehicles
  ];

  const [bookedVehicles, setBookedVehicles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const vehiclesPerPage = 2; // Number of vehicles to display per page

  useEffect(() => {
    const fetchBookedVehicles = () => {
      setTimeout(() => {
        setBookedVehicles(dummyBookedVehicles);
      }, 500);
    };
  
    fetchBookedVehicles();
  }, [dummyBookedVehicles]);
  
  // Calculate the index range for the current page
  const indexOfLastVehicle = currentPage * vehiclesPerPage;
  const indexOfFirstVehicle = indexOfLastVehicle - vehiclesPerPage;
  const currentVehicles = bookedVehicles.slice(indexOfFirstVehicle, indexOfLastVehicle);

  const totalPages = Math.ceil(bookedVehicles.length / vehiclesPerPage);

  // Pagination Handlers
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  if (bookedVehicles.length === 0) {
    return <p className={styles.noBookings}>No booked vehicles found.</p>;
  }

  return (
    <div className={styles.bookedVehiclesContainer}>
      <h3>Booked Vehicles</h3>
      {currentVehicles.map((vehicle) => (
        <div key={vehicle.id} className={styles.vehicleCard}>
          <div className={styles.vehicleInfo}>
            <h4>{vehicle.vehicleName}</h4>
            <ul>
              <li><strong>Return Date:</strong> {vehicle.returnDate}</li>
              <li><strong>Mileage:</strong> {vehicle.mileage} km</li>
              <li><strong>Next Service Date:</strong> {vehicle.nextServiceDate}</li>
              <li><strong>Rate Per Day:</strong> {vehicle.rate}</li>
              <li><strong>License Plate:</strong> {vehicle.licensePlate}</li>
            </ul>
          </div>
          <img src={vehicle.imageUrl} alt={vehicle.vehicleName} className={styles.vehicleImage} />
        </div>
      ))}
      <div className={styles.pagination}>
        <button onClick={handlePrevPage} disabled={currentPage === 1}>
          Previous
        </button>
        <span>{`Page ${currentPage} of ${totalPages}`}</span>
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
};

export default BookedVehiclesInfo;
