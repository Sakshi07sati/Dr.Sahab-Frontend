import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  completeClinicBooking,
  getAcceptedClinicBookings
} from "../../../global_redux/features/clinicBooking/clinicBookingThunk";

import { Calendar, MapPin, Phone, MessageCircle, CheckCircle } from "lucide-react";

const AcceptedAppointments = () => {
  const dispatch = useDispatch();
  const { bookings, loading } = useSelector((state) => state.clinicBookings);

  const [showModal, setShowModal] = useState(false);
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [amount, setAmount] = useState("");

  useEffect(() => {
    dispatch(getAcceptedClinicBookings()); // ✅ fetch only accepted bookings
  }, [dispatch]);

  const openCompleteModal = (booking) => {
    setSelectedBooking(booking);
    setAmount("");
    setShowModal(true);
  };

  const handleComplete = () => {
    dispatch(
      completeClinicBooking({
        bookingId: selectedBooking._id,
        amount,
      })
    ).then(() => {
      setShowModal(false);
    });
  };

  return (
    <div className="p-6">
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-3xl font-bold text-gray-900">Accepted Appointments</h2>
        <p className="text-gray-600 mt-1">Appointments assigned and accepted by your clinic</p>
      </div>

      {/* Loading */}
      {loading && (
        <div className="text-center py-10">
          <div className="animate-spin h-10 w-10 border-b-2 border-blue-600 mx-auto rounded-full"></div>
        </div>
      )}

      {/* Empty */}
      {!loading && bookings.length === 0 && (
        <div className="bg-white p-8 text-center rounded-xl shadow border">
          <p className="text-gray-600 text-lg">No accepted appointments found.</p>
        </div>
      )}

      {/* Booking Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {bookings.map((b) => (
          <div
            key={b._id}
            className="bg-white rounded-xl border shadow hover:shadow-lg transition p-6 flex flex-col justify-between"
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{b.name}</h3>

            <div className="space-y-3">
              <div className="flex items-center gap-2 text-gray-700">
                <Phone size={18} /> {b.phone}
              </div>

              <div className="flex items-center gap-2 text-gray-700">
                <Calendar size={18} />
                {new Date(b.bookingDate).toLocaleDateString("en-IN")}
              </div>

              {b.location && (
                <div className="flex items-center gap-2 text-gray-700">
                  <MapPin size={18} /> {b.location}
                </div>
              )}

              {b.message && (
                <div className="flex items-start gap-2 text-gray-700">
                  <MessageCircle size={18} /> {b.message}
                </div>
              )}
            </div>

            <div className="mt-5">
              {b.status !== "complete" ? (
                <button
                  onClick={() => openCompleteModal(b)}
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-2 rounded-lg flex items-center justify-center gap-2"
                >
                  <CheckCircle size={18} />
                  Mark as Completed
                </button>
              ) : (
                <p className="text-green-700 font-semibold text-center">
                  ✔ Completed (₹{b.amount})
                </p>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-xl w-[350px] shadow-xl">
            <h3 className="text-xl font-semibold mb-4 text-gray-900">
              Enter Treatment Amount
            </h3>

            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Enter amount (₹)"
              className="w-full border p-2 rounded mb-4"
            />

            <div className="flex justify-end gap-2">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 bg-gray-300 rounded-lg"
              >
                Cancel
              </button>
              <button
                onClick={handleComplete}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AcceptedAppointments;
