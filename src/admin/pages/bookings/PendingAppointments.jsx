import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getPendingBookings,
  getAvailableClinics,
  assignClinicToBooking
} from "../../../global_redux/features/booking/bookingThunk";
import toast from "react-hot-toast";

const PendingAppointments = () => {
  const dispatch = useDispatch();
  const {
    pendingBookings,
    loading,
    availableClinics,
    availableLoading
  } = useSelector((state) => state.booking);

  const [showAssignModal, setShowAssignModal] = useState(false);
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [selectedClinic, setSelectedClinic] = useState("");

  useEffect(() => {
    dispatch(getPendingBookings());
    // dispatch(getAvailableClinics());
  }, [dispatch]);

  const handleAssignClick = (booking) => {
  setSelectedBooking(booking);
  setSelectedClinic("");
  setShowAssignModal(true);

  const date = booking.bookingDate?.split("T")[0]; // format YYYY-MM-DD
  dispatch(getAvailableClinics(date));
};

  const handleAssignSubmit = async () => {
  if (!selectedClinic) {
    toast.error("Please select a clinic");
    return;
  }

  try {
    await dispatch(
      assignClinicToBooking({
        bookingId: selectedBooking._id,
        clinicId: selectedClinic,
      })
    ).unwrap();

    // 🔥 REFRESH pending list immediately
    dispatch(getPendingBookings());

    setShowAssignModal(false);
    setSelectedBooking(null);
    setSelectedClinic("");

    toast.success("Clinic Assigned!");
  } catch (error) {
    console.log(error);
  }
};

  const formatDate = (dateString) => {
    if (!dateString) return "N/A";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">
        Pending Bookings
      </h2>

      {/* Loading */}
      {loading && (
        <div className="text-center py-6">
          <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-2 text-gray-600">Loading pending bookings...</p>
        </div>
      )}

      {/* No Pending */}
      {!loading && pendingBookings.length === 0 && (
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-8 text-center">
          <p className="text-gray-600 text-lg">No pending appointments 🎉</p>
        </div>
      )}

      {/* Table */}
      {!loading && pendingBookings.length > 0 && (
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <table className="min-w-full divide-y divide-gray-300">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Patient</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Phone</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Booking Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Location</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Message</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Action</th>
              </tr>
            </thead>

            <tbody className="bg-white divide-y divide-gray-200">
              {pendingBookings.map((booking) => (
                <tr key={booking._id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-semibold">{booking.name}</div>
                    <div className="text-xs text-gray-500">ID: {booking._id.slice(-8)}</div>
                  </td>

                  <td className="px-6 py-4 whitespace-nowrap text-sm">{booking.phone}</td>

                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    {formatDate(booking.bookingDate)}
                  </td>

                  <td className="px-6 py-4 text-sm">{booking.location}</td>

                  <td className="px-6 py-4 text-sm">{booking.message || "No message"}</td>

                  <td className="px-6 py-4 whitespace-nowrap">
                    <button
                      onClick={() => handleAssignClick(booking)}
                      className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm"
                    >
                      Assign Clinic
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Assign Clinic Modal */}
      {showAssignModal && selectedBooking && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl p-6 shadow-xl max-w-md w-full">
            <h3 className="text-xl font-bold mb-4">Assign Clinic</h3>

            {availableLoading ? (
  <div className="py-6 text-center">
    <div className="animate-spin h-8 w-8 border-2 border-blue-600 border-t-transparent rounded-full mx-auto"></div>
    <p className="text-sm text-gray-600 mt-2">Fetching available clinics...</p>
  </div>
) : (
  <select
    value={selectedClinic}
    onChange={(e) => setSelectedClinic(e.target.value)}
    className="w-full border p-2 rounded-lg mb-4"
  >
    <option value="">-- Select Clinic --</option>

    {availableClinics?.length > 0 ? (
      availableClinics.map((clinic) => (
        <option key={clinic._id} value={clinic._id}>
          {clinic.clinic_name} - {clinic.location}
        </option>
      ))
    ) : (
      <option value="">No clinics available</option>
    )}
  </select>
)}


            <div className="flex justify-end gap-3">
              <button
                onClick={() => setShowAssignModal(false)}
                className="px-4 py-2 bg-gray-200 rounded-lg"
              >
                Cancel
              </button>

              <button
                onClick={handleAssignSubmit}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg"
              >
                Assign
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default PendingAppointments;
