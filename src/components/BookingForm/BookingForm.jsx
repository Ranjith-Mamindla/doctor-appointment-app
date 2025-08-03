import { useState } from 'react';
import { useParams } from 'react-router-dom';
import doctorData from '../../data/doctors.json'
import './BookingForm.css';

const BookAppointment = () => {
  const { id } = useParams();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const foundDoctor = doctorData.find(doc => doc.id === Number(id));

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);

    setTimeout(() => {
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <div className="book-container">
      <h2>Book Appointment for Doctor {foundDoctor.name}</h2>
      {isSubmitted ? (
        <div className="success-animation">
          <div className="checkmark">&#10003;</div>
          <p>Appointment confirmed!</p>
        </div>
      ) : (
        <form className="booking-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Patient Name:</label>
            <input type="text" name="name" required />
          </div>

          <div className="form-group">
            <label>Email:</label>
            <input type="email" name="email" required />
          </div>

          <div className="form-group">
            <label>Date:</label>
            <input type="date" name="date" required />
          </div>

          <div className="form-group">
            <label>Time:</label>
            <input type="time" name="time" required />
          </div>

          <div className="form-submit">
            <button type="submit">Confirm Booking</button>
          </div>
        </form>
      )}
    </div>
  );
};

export default BookAppointment;
