import React, { useEffect, useState } from "react";
import { FaCalendarAlt, FaClock, FaHome } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";
import docter from "../assests/R.png";
import axios from "axios";

const AppointmentPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const selectedDate = location.state?.date || localStorage.getItem("appointmentDate") || "";
  const selectedTime = location.state?.time || localStorage.getItem("appointmentTime") || "";

  const [appointmentDate, setAppointmentDate] = useState(selectedDate);
  const [appointmentTime, setAppointmentTime] = useState(selectedTime);
  const [formData, setFormData] = useState({
    name: "",
    dob: "",
    mobile: "",
    email: "",
    address: "",
  });

  useEffect(() => {
    setAppointmentDate(selectedDate);
    setAppointmentTime(selectedTime);
  }, [selectedDate, selectedTime]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const appointmentData = {
      name: formData.name,
      dob: formData.dob,
      mobile: formData.mobile,
      email: formData.email,
      address: formData.address,
      appointmentDate: appointmentDate,
      appointmentTime: appointmentTime,
    };

    try {
      await axios.post('http://localhost:5000/api/appointments', appointmentData);

      // Email to doctor using FormSubmit
      const formDataEmail = new FormData();
      formDataEmail.append("Name", formData.name);
      formDataEmail.append("Date of Birth", formData.dob);
      formDataEmail.append("Mobile", formData.mobile);
      formDataEmail.append("Email", formData.email);
      formDataEmail.append("Address", formData.address);
      formDataEmail.append("Appointment Date", appointmentDate);
      formDataEmail.append("Appointment Time", appointmentTime);
      formDataEmail.append("Doctor Name", "Dr. Wayne R. Kotzker");
      formDataEmail.append("Specialization", "NEPHROLOGIST");
      formDataEmail.append("Clinic Address", "Apollo Clinic, Bangalore");
      formDataEmail.append("_captcha", "false");
      formDataEmail.append("_next", "http://localhost:3000/thank-you");

      await fetch("https://formsubmit.co/ceit58vignesh24@gmail.com", {
        method: "POST",
        body: formDataEmail,
      });

      navigate("/thank-you");
    } catch (err) {
      if (err.response && err.response.status === 409) {
        alert("This appointment slot is already booked. Please choose a different time.");
      } else {
        alert("Failed to book appointment. Please try again.");
      }
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen bg-white px-4 py-8">
      {/* Appointment Summary */}
      <div className="mt-8">
        <div className="flex items-center gap-4">
          <img src={docter} alt="Dr. Wayne" className="w-24 h-24 rounded-full border-4 border-green-500" />
          <div>
            <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
              Dr. Wayne R. Kotzker <span className="text-green-600">✔</span>
            </h2>
            <p className="text-sm text-gray-600">NEPHROLOGIST</p>
            <button className="mt-1 text-blue-600 text-sm underline">VIEW PROFILE</button>
          </div>
        </div>
        <h3 className="text-lg font-semibold mb-4 mt-4">Appointment Summary</h3>
        <div className="flex flex-col md:flex-row justify-between gap-6">
          <div className="flex items-center gap-3 text-green-700 font-medium">
            <FaHome className="text-xl" />
            <div>
              <p>In-Clinic Consultation</p>
              <p className="text-sm text-green-600">Fees : Pay at clinic</p>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-6 text-gray-700 text-sm">
            <div className="flex items-center gap-2">
              <FaClock />
              <span>{appointmentTime}</span>
            </div>
            <div className="flex items-center gap-2">
              <FaCalendarAlt />
              <span>{appointmentDate}</span>
            </div>
            <button onClick={() => navigate("/calendar")} className="text-blue-600 underline">
              Change Date & Time
            </button>
          </div>
        </div>
      </div>

      {/* Booking Form */}
      <div className="mt-10 max-w-xl mx-auto">
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-6 text-center">Book Appointment</h2>

          <input required name="name" onChange={handleChange} placeholder="Full Name *" className="mb-3 w-full border px-3 py-2 rounded" />
          <input required name="dob" onChange={handleChange} type="date" className="mb-3 w-full border px-3 py-2 rounded" />
          <input required name="mobile" onChange={handleChange} type="tel" placeholder="Mobile No *" className="mb-3 w-full border px-3 py-2 rounded" />
          <input required name="email" onChange={handleChange} type="email" placeholder="Email *" className="mb-3 w-full border px-3 py-2 rounded" />
          <input required name="address" onChange={handleChange} placeholder="Address *" className="mb-3 w-full border px-3 py-2 rounded" />
          <input required name="appointmentDate" type="date" value={appointmentDate} onChange={(e) => setAppointmentDate(e.target.value)} className="mb-3 w-full border px-3 py-2 rounded" />
          <input required name="appointmentTime" type="time" value={appointmentTime} onChange={(e) => setAppointmentTime(e.target.value)} className="mb-6 w-full border px-3 py-2 rounded" />

          <button type="submit" className="w-full bg-green-600 text-white font-bold py-2 rounded hover:bg-green-700 transition">
            Confirm Appointment
          </button>
        </form>
      </div>
    </div>
  );
};

export default AppointmentPage;
