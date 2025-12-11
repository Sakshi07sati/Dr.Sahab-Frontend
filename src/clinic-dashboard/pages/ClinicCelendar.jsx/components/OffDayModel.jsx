// components/clinic/OffDayModal.jsx
import React from "react";

const OffDayModal = ({
  open,
  loading,
  selectedDate,
  reason,
  onReasonChange,
  onClose,
  onSave,
  canDelete = false,
  onDelete,
}) => {
  if (!open || !selectedDate) return null;

  const formattedDate = selectedDate.toLocaleDateString("en-IN", {
    weekday: "long",
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-md p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          {canDelete ? "Manage Off Day" : "Mark Off Day"}
        </h3>
        <p className="text-sm text-gray-600 mb-4">
          Date: <b>{formattedDate}</b>
        </p>

        {!canDelete && (
  <>
    <label className="block text-sm font-medium text-gray-700 mb-1">
      Reason (optional)
    </label>
    <textarea
      value={reason}
      onChange={(e) => onReasonChange(e.target.value)}
      rows={3}
      className="w-full border border-gray-300 rounded-lg p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      placeholder="e.g. Doctor on leave, Holiday, Maintenance..."
      required
    />
  </>
)}


        <div className="flex justify-between items-center mt-4 gap-2">
          {/* Left side: Delete button (only if canDelete) */}
          {canDelete && (
            <button
              onClick={onDelete}
              className="px-4 py-2 rounded-lg text-sm bg-red-100 text-red-700 hover:bg-red-200"
              disabled={loading}
            >
              Delete Off Day
            </button>
          )}

          {/* Right side: Cancel + Save */}
          <div className="ml-auto flex gap-2">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-lg text-sm bg-gray-100 hover:bg-gray-200"
              disabled={loading}
            >
              Cancel
            </button>
           {!canDelete && (
  <button
    onClick={onSave}
    className="px-4 py-2 rounded-lg text-sm bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-60"
    disabled={loading}
  >
    {loading ? "Saving..." : "Save Off Day"}
  </button>
)}

          </div>
        </div>
      </div>
    </div>
  );
};

export default OffDayModal;
