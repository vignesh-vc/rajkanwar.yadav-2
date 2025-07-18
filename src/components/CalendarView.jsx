import React, { useState, useEffect } from "react";
import moment from "moment";
import "react-calendar/dist/Calendar.css";
import Calendar from "react-calendar";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CalendarView = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [bookedSlots, setBookedSlots] = useState([]);
  const [selectedTime, setSelectedTime] = useState(localStorage.getItem('appointmentTime') || "");
  const navigate = useNavigate();

  const timeSlots = [
    "09:00", "09:30", "10:00", "10:30",
    "11:00", "11:30", "12:00", "12:30",
    "14:00", "14:30", "15:00", "15:30",
    "16:00", "16:30", "17:00", "17:30"
  ];

  useEffect(() => {
    const fetchBookedSlots = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/appointments/all");
        const filtered = res.data.filter(
          appt => appt.appointmentDate === moment(selectedDate).format("YYYY-MM-DD")
        );
        setBookedSlots(filtered.map(appt => appt.appointmentTime));
      } catch (error) {
        console.error("Error loading slots", error);
      }
    };
    fetchBookedSlots();
  }, [selectedDate]);

  const handleContinue = () => {
    localStorage.setItem("appointmentDate", moment(selectedDate).format("YYYY-MM-DD"));
    localStorage.setItem("appointmentTime", selectedTime);
    navigate("/booking", {
      state: {
        date: moment(selectedDate).format("YYYY-MM-DD"),
        time: selectedTime,
      },
    });
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setSelectedTime(""); // Reset selected time when a new date is selected
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-100 px-4 py-6 sm:px-6 md:px-12">
      <div className="max-w-5xl mx-auto bg-white bg-opacity-80 backdrop-blur rounded-2xl shadow-2xl p-6 md:p-10">
        <h2 className="text-2xl md:text-4xl font-bold text-center text-gray-800 mb-6">
          Book Your Appointment
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Calendar */}
          <div className="bg-white rounded-xl border shadow-sm p-4 md:p-6">
            <Calendar
              onChange={handleDateChange}
              value={selectedDate}
              minDate={new Date()}
              className="w-full"
            />
          </div>

          {/* Time Slots */}
          <div>
            <p className="text-base md:text-lg font-semibold text-gray-700 mb-3">
              Select a time on{" "}
              <span className="text-blue-600 font-bold">
                {moment(selectedDate).format("ddd, MMM D, YYYY")}
              </span>
            </p>
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-3 max-h-[300px] overflow-y-auto pr-2">
              {timeSlots.map((time) => {
                const isBooked = bookedSlots.includes(time);
                const isSelected = time === selectedTime;

                return (
                  <button
                    key={time}
                    onClick={() => setSelectedTime(time)}
                    disabled={isBooked}
                    className={`text-sm px-3 py-2 rounded-lg transition font-medium
                      ${isBooked ? "bg-gray-200 text-gray-400 cursor-not-allowed" :
                        isSelected ? "bg-green-600 text-white shadow-lg" :
                          "bg-white border hover:bg-green-100 hover:shadow"}
                    `}
                  >
                    {time}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Confirm Button */}
        {selectedTime && (
          <div className="text-center mt-8">
            <p className="mb-4 text-base md:text-lg text-gray-700">
              Selected <strong>{moment(selectedDate).format("YYYY-MM-DD")}</strong> at{" "}
              <strong>{selectedTime}</strong>
            </p>
            <button
              onClick={handleContinue}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition shadow-md"
            >
              Continue to Booking
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CalendarView;
