import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCompletedBookings } from "../../../global_redux/features/booking/bookingThunk";
import { getClinicById } from "../../../global_redux/features/clinic/clinicThunk";

const CompletedAppointments = () => {
  const dispatch = useDispatch();

  const { completedBookings, completedLoading } = useSelector(
    (state) => state.booking
  );

  const { clinicDetails } = useSelector((state) => state.clinic);

  const [selectedClinicId, setSelectedClinicId] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    dispatch(getCompletedBookings());
  }, [dispatch]);

  const handleViewClinic = (clinicId) => {
    setSelectedClinicId(clinicId);
    setModalOpen(true);

    if (!clinicDetails[clinicId]) {
      dispatch(getClinicById(clinicId));
    }
  };

  const closeModal = () => {
    setSelectedClinicId(null);
    setModalOpen(false);
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

  const currentClinic =
    selectedClinicId ? clinicDetails[selectedClinicId] : null;

  return (
    <div className="p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900">
          Completed Appointments
        </h2>
        <p className="text-gray-600 mt-1">All successfully completed bookings</p>
      </div>

      {/* Loading */}
      {completedLoading && (
        <div className="bg-white p-8 rounded-lg shadow text-center">
          <div className="animate-spin h-10 w-10 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-3 text-gray-600">Loading completed bookings...</p>
        </div>
      )}

      {/* No Data */}
      {!completedLoading && completedBookings.length === 0 && (
        <div className="bg-white p-12 rounded-lg shadow text-center">
          <p className="text-gray-600 text-lg">No completed appointments yet</p>
        </div>
      )}

      {/* Table */}
      {!completedLoading && completedBookings.length > 0 && (
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Patient Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Phone
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Booking Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Location
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Action
                </th>
              </tr>
            </thead>

            <tbody className="bg-white divide-y divide-gray-200">
              {completedBookings.map((booking) => (
                <tr key={booking._id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div className="font-semibold">{booking.name}</div>
                    <div className="text-xs text-gray-500">
                      ID: {booking._id.slice(-8)}
                    </div>
                  </td>

                  <td className="px-6 py-4">{booking.phone}</td>
                  <td className="px-6 py-4">{formatDate(booking.bookingDate)}</td>
                  <td className="px-6 py-4">{booking.location}</td>

                  <td className="px-6 py-4">
                    <span className="bg-green-200 text-green-800 px-3 py-1 rounded-full text-xs">
                      {booking.status}
                    </span>
                  </td>

                  <td className="px-6 py-4">
                    <button
                      onClick={() => handleViewClinic(booking.clinicId)}
                      className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm"
                    >
                      View Clinic
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Clinic Modal */}
      {modalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl max-w-lg w-full shadow-xl">
            {/* Header */}
            <div className="bg-blue-600 text-white px-6 py-4 rounded-t-xl">
              <h3 className="text-xl font-bold">Clinic Details</h3>
            </div>

            {/* Body */}
            <div className="p-6">
              {!currentClinic ? (
                <div className="text-center py-8">
                  <div className="animate-spin h-10 w-10 border-b-2 border-blue-600 mx-auto"></div>
                  <p className="mt-3 text-gray-600">Loading clinic...</p>
                </div>
              ) : (
                <div className="space-y-4">
                  <p>
                    <strong>Clinic Name:</strong> {currentClinic.clinic_name}
                  </p>
                  <p>
                    <strong>Dentist:</strong> {currentClinic.dentist_name}
                  </p>
                  <p>
                    <strong>Phone:</strong> {currentClinic.number}
                  </p>
                  <p>
                    <strong>Location:</strong> {currentClinic.location}
                  </p>
                  <p>
                    <strong>Address:</strong> {currentClinic.address}
                  </p>
                  {/*   */}
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="p-4 bg-gray-50 rounded-b-xl flex justify-end">
              <button
                onClick={closeModal}
                className="px-6 py-2 bg-gray-700 text-white rounded-lg"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CompletedAppointments;
