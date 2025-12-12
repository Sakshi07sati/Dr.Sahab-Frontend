import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAssignedBookings,
  acceptClinicBooking,
  rejectClinicBooking,
} from "../../../global_redux/features/clinicBooking/clinicBookingThunk";

const Notifications = () => {
  const dispatch = useDispatch();

  const { assignedBookings, assignedCount, loading } = useSelector(
    (state) => state.clinicBookings
  );

  const [selectedBooking, setSelectedBooking] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    dispatch(getAssignedBookings());
  }, [dispatch]);

  const handleOpenModal = (booking) => {
    setSelectedBooking(booking);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedBooking(null);
    setModalOpen(false);
  };

  const handleAccept = (id) => {
    dispatch(acceptClinicBooking(id));
    handleCloseModal();
  };

  const handleReject = (id) => {
    if (window.confirm("Are you sure you want to reject this appointment?")) {
      dispatch(rejectClinicBooking(id));
      handleCloseModal();
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
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-3xl font-bold text-gray-900">Assigned Appointments</h2>
        <p className="text-gray-600">
          You have <b>{assignedCount}</b> new assigned appointments.
        </p>
      </div>

      {/* Loader */}
      {loading && (
        <div className="text-center py-10">
          <div className="animate-spin h-10 w-10 border-b-2 border-blue-600 mx-auto rounded-full"></div>
        </div>
      )}

      {/* Empty State */}
      {!loading && assignedBookings.length === 0 && (
        <div className="bg-white p-10 rounded-xl text-center shadow border">
          <p className="text-gray-600 text-lg">No assigned appointments.</p>
        </div>
      )}

      {/* Table */}
      {!loading && assignedBookings.length > 0 && (
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <table className="min-w-full divide-y divide-gray-300">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase text-gray-600">
                  Patient
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase text-gray-600">
                  Phone
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase text-gray-600">
                  Booking Date
                </th>
                <th className="px-6 py-3 text-center text-xs font-medium uppercase text-gray-600">
                  Action
                </th>
              </tr>
            </thead>

            <tbody className="bg-white divide-y divide-gray-200">
              {assignedBookings.map((book) => (
                <tr key={book._id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-semibold">{book.name}</td>
                  <td className="px-6 py-4">{book.phone}</td>
                  <td className="px-6 py-4">{formatDate(book.bookingDate)}</td>

                  {/* ACTION BUTTON */}
                  <td className="px-6 py-4 text-center">
                    <button
                      onClick={() => handleOpenModal(book)}
                      className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-semibold"
                    >
                      View Details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Details Modal */}
      {modalOpen && selectedBooking && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl shadow-xl max-w-lg w-full p-6">

            {/* Header */}
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Appointment Details
            </h3>

            {/* Patient Details */}
            <div className="space-y-3">
              <p><b>Name:</b> {selectedBooking.name}</p>
              <p><b>Phone:</b> {selectedBooking.phone}</p>
              <p><b>Booking Date:</b> {formatDate(selectedBooking.bookingDate)}</p>
              <p><b>Location:</b> {selectedBooking.location || "Not Provided"}</p>
              <p><b>Message:</b> {selectedBooking.message || "No message"}</p>
            </div>

            {/* Buttons */}
            <div className="flex justify-end gap-3 mt-6">
              <button
                onClick={handleCloseModal}
                className="px-4 py-2 bg-gray-300 text-gray-800 rounded-lg"
              >
                Close
              </button>

              <button
                onClick={() => handleReject(selectedBooking._id)}
                className="px-4 py-2 bg-red-600 text-white rounded-lg"
              >
                Reject
              </button>

              <button
                onClick={() => handleAccept(selectedBooking._id)}
                className="px-4 py-2 bg-emerald-600 text-white rounded-lg"
              >
                Accept
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default Notifications;
