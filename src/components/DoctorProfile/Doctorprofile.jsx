import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import './DoctorProfile.css';
import doctorData from '../../data/doctors.json'

const DoctorProfile = () => {
  const { id } = useParams();
  const [doctor, setDoctor] = useState(null);

  const navigate = useNavigate(); 

  useEffect(() => {
    const foundDoctor = doctorData.find(doc => doc.id === Number(id));
    console.log(foundDoctor)
    setDoctor(foundDoctor);
  }, [id]);

  if (!doctor) {
    return <div className="profile-container">Doctor not found</div>;
  }

  return (
    <div className="profile-container">
      <div className="profile-card">
        <img src={doctor.image} alt={doctor.name} className="profile-img" />
        <div className="profile-details">
          <h2>{doctor.name}</h2>
          <p><strong>Specialization:</strong> {doctor.specialization}</p>
          <p><strong>Availability:<i className={doctor.available ? "available":"unavailable"}>{doctor.available?"Available":"Not Available"}</i></strong></p>
          {doctor.available&&<button className="book-now-btn" onClick={() => navigate(`/book/${id}`)}>Book Now</button>}
          
        </div>
      </div>
    </div>
  );
};

export default DoctorProfile;
