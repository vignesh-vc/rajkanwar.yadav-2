import { useEffect, useState } from 'react';
import axios from 'axios';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell
} from 'recharts';
// Add Heroicons (outline) for card icons
import { UserGroupIcon, CalendarDaysIcon, CalendarIcon, ChartBarIcon, CurrencyDollarIcon, UserIcon, TruckIcon } from '@heroicons/react/24/outline';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const AdminDashboard = () => {
  const [stats, setStats] = useState({
    total: 0,
    today: 0,
    week: 0,
    month: 0,
    revenue: 2164,
    staff: 112,
    vehicles: 16
  });

  useEffect(() => {
    axios.get('http://localhost:5000/api/admin/appointment-stats')
      .then(res => setStats(res.data))
      .catch(err => console.error(err));
  }, []);

  const cardData = [
    { label: 'Total Patients', value: stats.total, icon: UserGroupIcon, color: 'text-blue-600', bgColor: 'bg-blue-100' },
    { label: 'Today\'s Patients', value: stats.today, icon: CalendarDaysIcon, color: 'text-green-600', bgColor: 'bg-green-100' },
    { label: 'Staff Members', value: stats.staff, icon: UserIcon, color: 'text-yellow-600', bgColor: 'bg-yellow-100' },
    { label: 'Vehicles', value: stats.vehicles, icon: TruckIcon, color: 'text-purple-600', bgColor: 'bg-purple-100' },
    { label: 'Avg. Revenue', value: `$${stats.revenue}`, icon: CurrencyDollarIcon, color: 'text-pink-600', bgColor: 'bg-pink-100' },
    { label: 'Appointments', value: stats.month, icon: CalendarIcon, color: 'text-indigo-600', bgColor: 'bg-indigo-100' },
  ];

  const genderData = [
    { name: 'Male', value: 65 },
    { name: 'Female', value: 35 }
  ];

  return (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cardData.map((card, idx) => (
          <div
            key={card.label}
            className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">{card.label}</p>
                <p className={`text-2xl font-bold ${card.color} mt-1`}>
                  {card.value}
                </p>
              </div>
              <div className={`${card.bgColor} p-3 rounded-lg`}>
                <card.icon className={`h-6 w-6 ${card.color}`} />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Appointments Chart */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Appointment Statistics</h3>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={[
                { name: 'Today', value: stats.today },
                { name: 'This Week', value: stats.week },
                { name: 'This Month', value: stats.month },
                { name: 'Total', value: stats.total },
              ]}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" fill="#6366f1" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Gender Distribution */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Patient Gender Distribution</h3>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={genderData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  fill="#8884d8"
                  paddingAngle={5}
                  dataKey="value"
                >
                  {genderData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
