// components/calendar/DayCell.jsx
import React from "react";

const DayCell = ({ dateObj, isToday, isOff, reason, onClick }) => {
  if (!dateObj) {
    return <div className="h-16 border border-transparent" />;
  }

  const dayNumber = dateObj.toLocaleDateString("en-IN", { day: "2-digit" });

  return (
    <button
      onClick={() => onClick(dateObj)}
      className={`h-16 w-full rounded-lg border flex flex-col items-center justify-center transition
        ${isOff ? "bg-red-50 border-red-300 text-red-700" : "bg-white border-gray-200 hover:bg-blue-50"}
        ${isToday ? "ring-2 ring-blue-500" : ""}
      `}
    >
      <span className="text-base font-semibold">{dayNumber}</span>

     {isOff && !reason && (
 <span className="mt-1 text-[10px] px-2 py-0.5 rounded-full bg-red-100 text-red-700">
    Week Off
  </span>
)}

{isOff && reason && (
  <span className="mt-1 text-[10px] px-2 py-0.5 rounded-full bg-red-100 text-red-700">
    Off Day
  </span>
)}


      {!isOff && isToday && (
        <span className="mt-1 text-[10px] text-blue-600">Today</span>
      )}

      {isOff && reason && (
        <span className="mt-0.5 text-[9px] text-red-500 truncate px-1">
          {reason}
        </span>
      )}
    </button>
  );
};

export default DayCell;
