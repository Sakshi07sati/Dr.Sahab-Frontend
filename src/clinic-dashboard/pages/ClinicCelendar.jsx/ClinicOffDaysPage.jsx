// ClinicOffDaysPage.jsx
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useCalendar } from "./components/useCalendar";
import CalendarHeader from "./components/CalendarHeader";
import DayCell from "./components/DayCell";

import {
  createClinicOffDay,
  deleteClinicOffDay,
  fetchClinicOffDays,
  fetchWeeklyOffDays,
} from "../../../global_redux/features/clinicOffDays/clinicOffDaysThunk";

import OffDayModal from "./components/OffDayModel";

const ClinicOffDaysPage = () => {
  const dispatch = useDispatch();

  // UI States
  const [modalOpen, setModalOpen] = React.useState(false);
  const [selectedDate, setSelectedDate] = React.useState(null);
  const [reasonInput, setReasonInput] = React.useState("");
  const [canDelete, setCanDelete] = React.useState(false);
  const [selectedOffDayId, setSelectedOffDayId] = React.useState(null);

  // Global Redux Data
  const { offDays, weeklyOff, loading, error } = useSelector(
    (state) => state.clinicOffDays
  );

  const { monthLabel, weeks, goPrevMonth, goNextMonth } = useCalendar();

  const today = new Date();

  // 🔵 Fetch both daily & weekly off days on mount
  useEffect(() => {
    dispatch(fetchClinicOffDays());
    dispatch(fetchWeeklyOffDays());
  }, [dispatch]);

  // Helper: Compare dates
  const isSameDate = (d1, d2) =>
    d1.getFullYear() === d2.getFullYear() &&
    d1.getMonth() === d2.getMonth() &&
    d1.getDate() === d2.getDate();

  // Helper: Check if specific date is a daily off
  const findOffDayByDate = (dateObj) => {
    const dateStr = dateObj.toISOString().slice(0, 10);
    return offDays.find((d) => d.date?.startsWith(dateStr)) || null;
  };

  const isOffDay = (dateObj) => !!findOffDayByDate(dateObj);

  const getOffDayReason = (dateObj) => {
    const found = findOffDayByDate(dateObj);
    return found?.reason || "";
  };

  // ⭐ Weekly Off Checker
  const isWeeklyOff = (dateObj) => {
    const dayName = dateObj.toLocaleDateString("en-IN", { weekday: "long" });
    return weeklyOff.includes(dayName);
  };

  // 🟢 Handle click on date cell
  const handleDayClick = (dateObj) => {
  if (!dateObj) return;

  // If weekly off → do NOT open modal
  if (isWeeklyOff(dateObj)) {
    console.log("This is a weekly off.");
    return;
  }

  const off = findOffDayByDate(dateObj);

  setSelectedDate(dateObj);
  setReasonInput(off?.reason || "");
  setCanDelete(!!off);
  setSelectedOffDayId(off?._id || null);

  setModalOpen(true);
};


  // 🔴 Delete handler
  const handleDeleteOffDay = () => {
    if (!selectedOffDayId) return;

    dispatch(deleteClinicOffDay(selectedOffDayId)).then((res) => {
      if (res.meta.requestStatus === "fulfilled") {
        dispatch(fetchClinicOffDays());
        setModalOpen(false);
      }
    });
  };

  // 🟢 Save handler
  const handleSaveOffDay = () => {
    if (!selectedDate) return;

    dispatch(
      createClinicOffDay({
        date: selectedDate.toISOString().slice(0, 10),
        reason: reasonInput,
      })
    ).then((res) => {
      if (res.meta.requestStatus === "fulfilled") {
        dispatch(fetchClinicOffDays());
        setModalOpen(false);
      }
    });
  };

  return (
    <div className="p-6">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow border p-6">

        {/* Error Message */}
        {error && (
          <div className="mb-4 p-4 bg-red-50 border-l-4 border-red-500 rounded">
            <h3 className="text-sm font-medium text-red-800">
              Failed to load off days
            </h3>
            <p className="text-sm text-red-700">{error}</p>
            <button
              onClick={() => dispatch(fetchClinicOffDays())}
              className="mt-2 px-3 py-1 text-sm bg-red-100 hover:bg-red-200 text-red-800 rounded"
            >
              Retry
            </button>
          </div>
        )}

        {/* Calendar Header */}
        <CalendarHeader
          monthLabel={monthLabel}
          onPrev={goPrevMonth}
          onNext={goNextMonth}
        />

        {/* Weekday Row */}
        <div className="grid grid-cols-7 text-center text-xs font-semibold text-gray-500 mb-2">
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
            <div key={d} className="py-1">{d}</div>
          ))}
        </div>

        {/* Calendar Grid */}
        <div className="grid grid-cols-7 gap-1 text-sm">
          {weeks.map((week, wi) =>
            week.map((dateObj, di) => (
              <DayCell
                key={dateObj ? dateObj.toISOString() : `empty-${wi}-${di}`}
                dateObj={dateObj}
                isToday={dateObj ? isSameDate(dateObj, today) : false}
                isOff={
                  dateObj
                    ? isOffDay(dateObj) || isWeeklyOff(dateObj)
                    : false
                }
                reason={dateObj ? getOffDayReason(dateObj) : ""}
                onClick={handleDayClick}
              />
            ))
          )}
        </div>

        {/* Modal */}
        <OffDayModal
          open={modalOpen}
          loading={loading}
          selectedDate={selectedDate}
          reason={reasonInput}
          onReasonChange={setReasonInput}
          onClose={() => setModalOpen(false)}
          onSave={handleSaveOffDay}
          canDelete={canDelete}
          onDelete={handleDeleteOffDay}
        />

        {/* Loading Spinner */}
        {loading && (
          <div className="mt-4 flex flex-col items-center text-center text-gray-500">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
            <p className="mt-2 text-sm">Loading off days...</p>
          </div>
        )}

        {/* Empty State */}
        {!loading && !error && offDays.length === 0 && (
          <div className="mt-8 text-center text-gray-500">
            <p className="text-sm">No off days marked yet</p>
            <p className="text-xs mt-1">Click on any date to mark it</p>
          </div>
        )}

        {/* Count */}
        {!loading && offDays.length > 0 && (
          <div className="mt-4 text-center text-sm text-gray-600">
            Total Off Days: <span className="font-semibold">{offDays.length}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default ClinicOffDaysPage;
