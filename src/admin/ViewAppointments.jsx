import { useEffect, useState } from 'react';
import axios from 'axios';

const ViewAppointments = () => {
  const [appointments, setAppointments] = useState([]);
  const [filteredAppointments, setFilteredAppointments] = useState([]);
  const [searchName, setSearchName] = useState('');
  const [searchDate, setSearchDate] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const appointmentsPerPage = 5;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('http://localhost:5000/api/appointments')
      .then(res => {
        const data = res.data || [];
        setAppointments(data);
        setFilteredAppointments(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  useEffect(() => {
    const filtered = appointments.filter((a) =>
      a.name.toLowerCase().includes(searchName.toLowerCase()) &&
      (!searchDate || a.appointmentDate === searchDate)
    );
    setFilteredAppointments(filtered);
    setCurrentPage(1); // reset to page 1 when filtering
  }, [searchName, searchDate, appointments]);

  const handleDelete = async (id) => {
    if (window.confirm('Delete appointment?')) {
      try {
        await axios.delete(`http://localhost:5000/api/appointments/${id}`);
        const updated = appointments.filter(a => a._id !== id);
        setAppointments(updated);
      } catch (err) {
        alert('Delete failed');
      }
    }
  };

  const handleEdit = async (id, currentName) => {
    const newName = prompt('Edit name:', currentName);
    if (newName && newName !== currentName) {
      try {
        await axios.put(`http://localhost:5000/api/appointments/${id}`, { name: newName });
        const updated = appointments.map(a =>
          a._id === id ? { ...a, name: newName } : a
        );
        setAppointments(updated);
      } catch (err) {
        alert('Update failed');
      }
    }
  };

  // Pagination logic
  const totalPages = Math.ceil(filteredAppointments.length / appointmentsPerPage);
  const indexOfLast = currentPage * appointmentsPerPage;
  const indexOfFirst = indexOfLast - appointmentsPerPage;
  const currentAppointments = filteredAppointments.slice(indexOfFirst, indexOfLast);

  return (
    <div className="p-4 sm:p-6 bg-gray-50 min-h-screen">
      <h2 className="text-2xl font-bold text-center mb-6">View Appointments</h2>

      {/* Search Section */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
        <input
          type="text"
          placeholder="Search by name"
          value={searchName}
          onChange={(e) => setSearchName(e.target.value)}
          className="border px-4 py-2 rounded w-full sm:w-64"
        />
        <input
          type="date"
          value={searchDate}
          onChange={(e) => setSearchDate(e.target.value)}
          className="border px-4 py-2 rounded w-full sm:w-64"
        />
      </div>

      {/* Appointments List */}
      {loading ? (
        <p className="text-center">Loading...</p>
      ) : currentAppointments.length === 0 ? (
        <p className="text-center text-gray-500">No appointments found.</p>
      ) : (
        <div className="max-w-4xl mx-auto space-y-4">
          {currentAppointments.map((appt) => (
            <div key={appt._id} className="bg-white p-4 rounded shadow">
              <div className="grid sm:grid-cols-2 gap-2 text-sm">
                <p><strong>Name:</strong> {appt.name}</p>
                <p><strong>DOB:</strong> {appt.dob}</p>
                <p><strong>Email:</strong> {appt.email}</p>
                <p><strong>Mobile:</strong> {appt.mobile}</p>
                <p><strong>Address:</strong> {appt.address}</p>
                <p><strong>Date:</strong> {appt.appointmentDate}</p>
                <p><strong>Time:</strong> {appt.appointmentTime}</p>
              </div>
              <div className="mt-4 flex gap-2">
                <button
                  onClick={() => handleEdit(appt._id, appt.name)}
                  className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(appt._id)}
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-6 flex-wrap gap-2">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="px-3 py-1 rounded bg-gray-300 disabled:opacity-50"
          >
            Prev
          </button>

          {[...Array(totalPages)].map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentPage(idx + 1)}
              className={`px-3 py-1 rounded ${
                currentPage === idx + 1
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200 text-black'
              }`}
            >
              {idx + 1}
            </button>
          ))}

          <button
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="px-3 py-1 rounded bg-gray-300"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default ViewAppointments;
