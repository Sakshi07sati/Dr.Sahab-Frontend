import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getClinicBookings } from "../../../global_redux/features/clinicBooking/clinicBookingThunk";
import { Calendar, MapPin, Phone, MessageCircle } from "lucide-react";

const ClinicBookings = () => {
  const dispatch = useDispatch();
  const { bookings, loading } = useSelector((state) => state.clinicBookings);

  useEffect(() => {
    dispatch(getClinicBookings());
  }, [dispatch]);

  return (
    <div className="p-6">
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-3xl font-bold text-gray-900">My Appointments</h2>
        <p className="text-gray-600 mt-1">Bookings assigned to your clinic</p>
      </div>

      {/* Loading State */}
      {loading && (
        <div className="flex justify-center items-center py-10">
          <div className="animate-spin h-10 w-10 border-b-2 border-blue-600 rounded-full"></div>
        </div>
      )}

      {/* No Bookings */}
      {!loading && bookings.length === 0 && (
        <div className="bg-white p-10 rounded-xl shadow text-center border">
          <p className="text-gray-600 text-lg">No assigned bookings yet.</p>
        </div>
      )}

      {/* Bookings List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {bookings.map((b) => (
          <div
            key={b._id}
            className="bg-white rounded-xl border shadow hover:shadow-lg transition p-6 flex flex-col justify-between"
          >
            {/* Name */}
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {b.name}
            </h3>

            {/* Booking Details */}
            <div className="space-y-3">

              {/* Phone */}
              <div className="flex items-center gap-2 text-gray-700">
                <Phone size={18} className="text-gray-500" />
                <span className="font-medium">{b.phone}</span>
              </div>

              {/* Booking Date */}
              <div className="flex items-center gap-2 text-gray-700">
                <Calendar size={18} className="text-gray-500" />
                <span className="font-medium">
                  {new Date(b.bookingDate).toLocaleDateString("en-IN")}
                </span>
              </div>

              {/* Location */}
              {b.location && (
                <div className="flex items-center gap-2 text-gray-700">
                  <MapPin size={18} className="text-gray-500" />
                  <span className="font-medium">{b.location}</span>
                </div>
              )}

              {/* Message */}
              {b.message && (
                <div className="flex items-start gap-2 text-gray-700">
                  <MessageCircle size={18} className="text-gray-500 mt-1" />
                  <p className="text-sm leading-snug">{b.message}</p>
                </div>
              )}

              {/* Created At */}
              <p className="text-xs text-gray-500 mt-2">
                Assigned At:{" "}
                {new Date(b.createdAt).toLocaleString("en-IN")}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClinicBookings;
