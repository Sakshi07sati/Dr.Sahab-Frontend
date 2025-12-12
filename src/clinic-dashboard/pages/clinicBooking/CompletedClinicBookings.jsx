import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCompletedClinicBookings } from "../../../global_redux/features/clinicBooking/clinicBookingThunk";

const CompletedClinicBookings = () => {
  const dispatch = useDispatch();
  const { completedBookings, loading } = useSelector((state) => state.clinicBookings);

  // Pagination Controls
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  useEffect(() => {
    dispatch(getCompletedClinicBookings());
  }, [dispatch]);

  const formatDate = (date) =>
    new Date(date).toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });

  const formatDateTime = (date) =>
    new Date(date).toLocaleString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });

  // Pagination Logic
  const totalPages = Math.ceil((completedBookings?.length || 0) / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const visibleData = completedBookings.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="p-6">
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-3xl font-bold text-gray-900">Completed Appointments</h2>
        <p className="text-gray-600 mt-1">All successfully completed treatments</p>
      </div>

      {/* Loader */}
      {loading && (
        <div className="text-center py-10">
          <div className="animate-spin h-10 w-10 border-b-2 border-blue-600 mx-auto rounded-full"></div>
        </div>
      )}

      {/* Empty State */}
      {!loading && completedBookings.length === 0 && (
        <div className="bg-white p-10 rounded-xl text-center shadow border">
          <p className="text-gray-600 text-lg">No completed appointments yet.</p>
        </div>
      )}

      {/* Table */}
      {!loading && completedBookings.length > 0 && (
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <table className="min-w-full divide-y divide-gray-300">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-semibold uppercase text-gray-600">
                  Patient
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold uppercase text-gray-600">
                  Phone
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold uppercase text-gray-600">
                  Booking Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold uppercase text-gray-600">
                  Location
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold uppercase text-gray-600">
                  Amount (₹)
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold uppercase text-gray-600">
                  Completed At
                </th>
              </tr>
            </thead>

            <tbody className="bg-white divide-y divide-gray-200">
              {visibleData.map((item) => (
                <tr key={item._id} className="hover:bg-gray-50">
                  {/* Patient Info */}
                  <td className="px-6 py-4">
                    <div className="font-semibold">{item.name}</div>
                    <div className="text-xs text-gray-500">
                      ID: {item._id.slice(-8)}
                    </div>
                  </td>

                  {/* Phone */}
                  <td className="px-6 py-4">{item.phone}</td>

                  {/* Booking Date */}
                  <td className="px-6 py-4">{formatDate(item.bookingDate)}</td>

                  {/* Location */}
                  <td className="px-6 py-4">{item.location ?? "—"}</td>

                  {/* Amount */}
                  <td className="px-6 py-4 font-medium text-green-700">₹{item.amount}</td>

                  {/* Completed At */}
                  <td className="px-6 py-4">{formatDateTime(item.updatedAt)}</td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Pagination */}
          <div className="flex items-center justify-between px-6 py-4 bg-gray-50 border-t">
            <button
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
            >
              Previous
            </button>

            <span className="text-sm text-gray-700">
              Page <b>{currentPage}</b> of <b>{totalPages}</b>
            </span>

            <button
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CompletedClinicBookings;
