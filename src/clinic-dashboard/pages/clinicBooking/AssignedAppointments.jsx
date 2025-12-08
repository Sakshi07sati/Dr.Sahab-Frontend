import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAssignedBookings,
  acceptClinicBooking,
  rejectClinicBooking,
} from "../../../global_redux/features/clinicBooking/clinicBookingThunk";

import { Calendar, MapPin, Phone, MessageCircle } from "lucide-react";

const AssignedAppointments = () => {
  const dispatch = useDispatch();

  const { assignedBookings, assignedCount, loading } = useSelector(
    (state) => state.clinicBookings
  );

  useEffect(() => {
    dispatch(getAssignedBookings());
  }, [dispatch]);

  const handleAccept = (id) => {
    dispatch(acceptClinicBooking(id));
  };

  const handleReject = (id) => {
    if (window.confirm("Are you sure you want to reject this appointment?")) {
      dispatch(rejectClinicBooking(id));
    }
  };

  return (
    <div className="p-6">
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-3xl font-bold text-gray-900">Assigned Appointments</h2>
        <p className="text-gray-600 mt-1">
          You have <b>{assignedCount}</b> new assigned appointments.
        </p>
      </div>

      {/* Loading */}
      {loading && (
        <div className="flex justify-center py-10">
          <div className="animate-spin w-10 h-10 border-b-2 border-blue-600 rounded-full"></div>
        </div>
      )}

      {/* Empty State */}
      {!loading && assignedBookings.length === 0 && (
        <div className="bg-white p-10 text-center rounded-xl shadow border">
          <p className="text-gray-600 text-lg">No assigned appointments.</p>
        </div>
      )}

      {/* Assigned Appointments List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {assignedBookings.map((book) => (
          <div
            key={book._id}
            className="bg-white rounded-xl border shadow hover:shadow-lg transition p-6 flex flex-col justify-between"
          >
            {/* Title */}
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{book.name}</h3>

            {/* Details */}
            <div className="space-y-3">
              {/* Phone */}
              <div className="flex items-center gap-2 text-gray-700">
                <Phone size={18} className="text-gray-500" />
                <span className="font-medium">{book.phone}</span>
              </div>

              {/* Booking Date */}
              <div className="flex items-center gap-2 text-gray-700">
                <Calendar size={18} className="text-gray-500" />
                <span className="font-medium">
                  {new Date(book.bookingDate).toLocaleDateString("en-IN")}
                </span>
              </div>

              {/* Location */}
              {book.location && (
                <div className="flex items-center gap-2 text-gray-700">
                  <MapPin size={18} className="text-gray-500" />
                  <span className="font-medium">{book.location}</span>
                </div>
              )}

              {/* Message */}
              {book.message && (
                <div className="flex items-start gap-2 text-gray-700">
                  <MessageCircle size={18} className="text-gray-500 mt-1" />
                  <p className="text-sm leading-snug">{book.message}</p>
                </div>
              )}

              {/* Assigned Time */}
              <p className="text-xs text-gray-500 mt-2">
                Assigned At:{" "}
                {new Date(book.createdAt).toLocaleString("en-IN")}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 pt-4">
              <button
                onClick={() => handleAccept(book._id)}
                className="flex-1 px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold transition"
                disabled={loading}
              >
                Accept
              </button>
              <button
                onClick={() => handleReject(book._id)}
                className="flex-1 px-4 py-2 rounded-lg bg-red-600 hover:bg-red-700 text-white text-sm font-semibold transition"
                disabled={loading}
              >
                Reject
              </button>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default AssignedAppointments;
