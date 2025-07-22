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
import AllPublications from './pages/AllPublications';
import Conference from './pages/Conference';
import AllHonors from './pages/AllHonors';
import Training from "./pages/Training";


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
        <Route path="/about" element={loading ? <Loader /> : <About />} />
        <Route path="/training" element={loading ? <Loader /> :<Training />} />
        <Route path="/blogs" element={loading ? <Loader /> : <Blogs />} />
        <Route path="/blog/:id" element={loading ? <Loader /> : <BlogDetail />} />
        <Route path="/articles" element={loading ? <Loader /> : <Articles />} />
        <Route path="/booking" element={loading ? <Loader /> : <AppointmentPage />} />
        <Route path="/thank-you" element={<ThankYou />} />
        <Route path="/calendar" element={<CalendarView />} />
        <Route path="/publications" element={<AllPublications />} />
        <Route path="/conference" element={<Conference />} />
        <Route path="/honors" element={<AllHonors />} />

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
