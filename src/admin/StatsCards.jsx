const StatsCards = ({ users, appointments }) => {
  return (
    <div className="grid grid-cols-2 gap-4">
      {/* <div className="bg-blue-100 p-6 rounded shadow text-center">
        <h2 className="text-lg font-semibold">Total Users</h2>
        <p className="text-2xl">{users}</p>
      </div> */}
      <div className="bg-green-100 p-6 rounded shadow text-center">
        <h2 className="text-lg font-semibold">Appointments</h2>
        <p className="text-2xl">{appointments}</p>
      </div>
    </div>
  );
};

export default StatsCards;
