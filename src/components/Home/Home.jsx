import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import doctorsData from "../../data/doctors.json";
import "./Home.css";

const Home = () => {
  const [doctors, setDoctors] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setDoctors(doctorsData);
  }, []);

  const filteredDoctors = doctors.filter((doctor) =>
    doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    doctor.specialization.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="home-container">
      <h1 className="welcome-heading">Welcome to QuickClinic</h1>

      <input
        type="text"
        placeholder="Search by name or specialization"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />

      <div className="doctor-list">
        {filteredDoctors.length > 0 ? (
          filteredDoctors.map((doctor) => (
            <Link to={`/doctor/${doctor.id}`} key={doctor.id} className="doctor-card">
              <img src={doctor.image} alt={doctor.name} />
              <h3>{doctor.name}</h3>
              <p>{doctor.specialization}</p>
              <p className={doctor.available ? "available" : "unavailable"}>
                {doctor.available ? "Available" : "Not Available"}
              </p>
            </Link>
          ))
        ) : (
          <p className="no-results">No doctors found.</p>
        )}
      </div>
    </div>
  );
};

export default Home;
