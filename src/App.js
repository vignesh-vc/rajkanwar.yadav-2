import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Loader from "./ui/Loader";

// Pages
import Home from "./pages/Home";
import Treatments from "./pages/Treatments";
import About from "./pages/About";
import Blogs from "./pages/Blogs";
import BlogDetail from "./pages/BlogDetail";  // ✅ Import Single Blog Detail page
import TreatmentDetail from "./pages/TreatmentDetail";
import Articles from "./pages/Articles";
import AppointmentPage from "./pages/AppointmentPage";
import ThankYou from "./components/ThankYou";
import CalendarView from "./components/CalendarView";

//admin
import AdminLayout from "./pages/AdminLayout";
import AdminDashboard from './admin/AdminDashboard';
import ViewAppointments from './admin/ViewAppointments';
import AddSlots from './admin/AddSlots';
import DoctorAvailability from './admin/DoctorAvailability';
import ReviewsSection from './admin/ReviewsSection';
import Sidebar from './admin/Sidebar';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Public routes */}
        {/* <Route path="/" element={loading ? <Loader /> : <Home />} /> */}
        <Route path="/treatments" element={loading ? <Loader /> : <Treatments />} />
        <Route path="/treatment/:id" element={loading ? <Loader /> : <TreatmentDetail />} />
        <Route path="/" element={loading ? <Loader /> : <About />} />
        <Route path="/blogs" element={loading ? <Loader /> : <Blogs />} />
        <Route path="/blog/:id" element={loading ? <Loader /> : <BlogDetail />} />
        <Route path="/articles" element={loading ? <Loader /> : <Articles />} />
        <Route path="/booking" element={loading ? <Loader /> : <AppointmentPage />} />
        <Route path="/thank-you" element={<ThankYou />} />
        <Route path="/calendar" element={<CalendarView />} />

        {/* Admin layout and nested admin routes */}
        {/* <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
          <Route path="DoctorAvailability" element={<DoctorAvailability />} />
          <Route path="add-slot" element={<AddSlots />} />
          <Route path="view-appointments" element={<ViewAppointments />} />
          <Route path="reviews" element={<ReviewsSection />} />
        </Route> */}

      </Routes>

{/* 
      <Footer /> */}
    </Router>
  );
}

export default App;
