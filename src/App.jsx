import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import DoctorProfile from "./components/Doctorprofile/Doctorprofile";
import BookAppointment from "./components/BookingForm/BookingForm"; 

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/doctor/:id" element={<DoctorProfile />} />
        <Route path="/book/:id" element={<BookAppointment />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
