import React from "react";
import {
  Calendar,
  User,
  ClipboardList,
  Activity,
  CheckCircle2,
} from "lucide-react";
import Notifications from "../clinicBooking/Notifications";
// import PendingAppointments from "../bookings/PendingAppointments";

const ClinicDashboard = () => {
  return (
    <div className="p-6">

      {/* Page Title */}
      <h1 className="text-3xl font-bold text-gray-800 mb-8">
        Admin Dashboard
      </h1>

      {/* STATS CARDS */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        
        <div className="bg-white shadow rounded-xl p-5 flex items-center gap-4">
          <div className="p-3 bg-blue-100 rounded-lg">
            <Calendar className="w-6 h-6 text-blue-600" />
          </div>
          <div>
            <p className="text-gray-500 text-sm">Today Appointments</p>
            <h2 className="text-2xl font-bold">12</h2>
          </div>
        </div>

        <div className="bg-white shadow rounded-xl p-5 flex items-center gap-4">
          <div className="p-3 bg-green-100 rounded-lg">
            <User className="w-6 h-6 text-green-600" />
          </div>
          <div>
            <p className="text-gray-500 text-sm">Total Patients</p>
            <h2 className="text-2xl font-bold">248</h2>
          </div>
        </div>

        <div className="bg-white shadow rounded-xl p-5 flex items-center gap-4">
          <div className="p-3 bg-purple-100 rounded-lg">
            <ClipboardList className="w-6 h-6 text-purple-600" />
          </div>
          <div>
            <p className="text-gray-500 text-sm">Pending Appointments</p>
            <h2 className="text-2xl font-bold">5</h2>
          </div>
        </div>

        <div className="bg-white shadow rounded-xl p-5 flex items-center gap-4">
          <div className="p-3 bg-orange-100 rounded-lg">
            <Activity className="w-6 h-6 text-orange-600" />
          </div>
          <div>
            <p className="text-gray-500 text-sm">Clinic Status</p>
            <h2 className="text-2xl font-bold">Open</h2>
          </div>
        </div>

      </div>

      {/* RECENT APPOINTMENTS */}
      {/* <div className="bg-white shadow rounded-xl p-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">
          Recent Appointments
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full text-left min-w-[600px]">
            <thead>
              <tr className="border-b bg-gray-50">
                <th className="py-3 px-4 text-gray-600 font-semibold">Patient</th>
                <th className="py-3 px-4 text-gray-600 font-semibold">Date</th>
                <th className="py-3 px-4 text-gray-600 font-semibold">Time</th>
                <th className="py-3 px-4 text-gray-600 font-semibold">Status</th>
              </tr>
            </thead>

            <tbody>
              {[1, 2, 3, 4, 5].map((i) => (
                <tr key={i} className="border-b last:border-none">
                  <td className="py-3 px-4">John Doe</td>
                  <td className="py-3 px-4">Feb 12, 2025</td>
                  <td className="py-3 px-4">10:30 AM</td>
                  <td className="py-3 px-4">
                    <span className="flex items-center gap-2 text-green-600">
                      <CheckCircle2 className="w-4 h-4" />
                      Confirmed
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div> */}
      <div>
        <Notifications/>
      </div>

    </div>
  );
};

export default ClinicDashboard;
