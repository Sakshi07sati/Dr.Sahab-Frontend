import React from "react";

const DayCell = ({ dateObj, isToday, isOff, reason, onClick }) => {
  if (!dateObj) {
    return <div className="h-16 border border-transparent" />;
  }

  const dayNumber = dateObj.toLocaleDateString("en-IN", { day: "2-digit" });

  // 🎨 Styling Logic
  let cellStyle = "bg-white border-gray-200 hover:bg-blue-50";

  if (isOff && reason) {
    // DAILY OFF
    cellStyle = "bg-red-50 border-red-300 text-red-700";
  }
  if (isOff && !reason) {
    // WEEKLY OFF
    cellStyle = "bg-gray-100 cursor-not-allowed border-gray-300 text-gray-500";
  }

  return (
    <button
      onClick={() => onClick(dateObj)}
      className={`h-16 w-full rounded-lg border flex flex-col items-center justify-center transition ${cellStyle}
        ${isToday ? "ring-2 ring-blue-500" : ""}`}
    >
      <span className="text-base font-semibold">{dayNumber}</span>

      {/* WEEKLY OFF */}
      {isOff && !reason && (
        <span className="mt-1 text-[10px] px-2 py-0.5 rounded-full bg-gray-200 text-gray-800">
          Week Off
        </span>
      )}

      {/* DAILY OFF */}
      {isOff && reason && (
        <span className="mt-1 text-[10px] px-2 py-0.5 rounded-full bg-red-200 text-red-800">
          Off Day
        </span>
      )}

      {/* TODAY MARKER */}
      {!isOff && isToday && (
        <span className="mt-1 text-[10px] text-blue-600">Today</span>
      )}
    </button>
  );
};

export default DayCell;
