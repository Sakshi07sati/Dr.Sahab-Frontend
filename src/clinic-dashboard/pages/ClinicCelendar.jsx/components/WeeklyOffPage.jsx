import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { fetchWeeklyOffDays, saveWeeklyOffDays } from "../../../../global_redux/features/clinicOffDays/clinicOffDaysThunk";

const WEEK_DAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const WeeklyOffPage = () => {
  const dispatch = useDispatch();
  const [tempWeeklyOff, setTempWeeklyOff] = useState([]);
  const [hasChanges, setHasChanges] = useState(false);

  const { weeklyOff, loading, error } = useSelector((state) => state.clinicOffDays);

  useEffect(() => {
    dispatch(fetchWeeklyOffDays());
  }, [dispatch]);

  useEffect(() => {
    setTempWeeklyOff(weeklyOff);
  }, [weeklyOff]);

  useEffect(() => {
    const hasChanged = JSON.stringify([...tempWeeklyOff].sort()) !== JSON.stringify([...weeklyOff].sort());
    setHasChanges(hasChanged);
  }, [tempWeeklyOff, weeklyOff]);

  const toggleDay = (day) => {
    if (tempWeeklyOff.includes(day)) {
      setTempWeeklyOff(tempWeeklyOff.filter((d) => d !== day));
      toast.success(`${day} removed from weekly off`);
    } else {
      setTempWeeklyOff([...tempWeeklyOff, day]);
      toast.success(`${day} added to weekly off`);
    }
  };

  const handleSave = async () => {
    try {
      await dispatch(saveWeeklyOffDays(tempWeeklyOff)).unwrap();
      toast.success("Weekly off days saved successfully!");
      setHasChanges(false);
    } catch (err) {
      toast.error("Failed to save weekly off days");
    }
  };

  return (
    <div className="p-6 bg-gradient-to-br from-blue-50 to-indigo-100 min-h-full">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-4">
          <h2 className="text-xl font-bold text-white">Weekly Off Settings</h2>
          <p className="text-blue-100 text-sm mt-0.5">Select the days when your clinic will be closed</p>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Days Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
            {WEEK_DAYS.map((day) => (
              <div
                key={day}
                className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-all duration-200 border border-gray-200"
              >
                <div className="flex items-center space-x-2.5">
                  <div className={`w-9 h-9 rounded-full flex items-center justify-center font-semibold text-sm ${
                    tempWeeklyOff.includes(day) 
                      ? "bg-red-100 text-red-600" 
                      : "bg-green-100 text-green-600"
                  }`}>
                    {day.charAt(0)}
                  </div>
                  <div>
                    <span className="text-base font-medium text-gray-800">{day}</span>
                    <p className="text-xs text-gray-500">
                      {tempWeeklyOff.includes(day) ? "Closed" : "Open"}
                    </p>
                  </div>
                </div>

                {/* Toggle Switch */}
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={tempWeeklyOff.includes(day)}
                    onChange={() => toggleDay(day)}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-red-500"></div>
                </label>
              </div>
            ))}
          </div>

          {/* Summary */}
          <div className="mb-4 p-3 bg-blue-50 rounded-lg border border-blue-200">
            <p className="text-sm text-gray-700">
              <span className="font-semibold">Selected off days:</span>{" "}
              {tempWeeklyOff.length > 0 ? (
                <span className="text-blue-700 font-medium">{tempWeeklyOff.join(", ")}</span>
              ) : (
                <span className="text-gray-500">No days selected</span>
              )}
            </p>
          </div>

          {/* Save Button */}
          <button
            onClick={handleSave}
            disabled={!hasChanges || loading}
            className={`w-full py-2.5 px-6 rounded-lg font-semibold transition-all duration-200 ${
              hasChanges && !loading
                ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700 shadow-md hover:shadow-lg"
                : "bg-gray-200 text-gray-400 cursor-not-allowed"
            }`}
          >
            {loading ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin h-5 w-5 mr-2" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Saving...
              </span>
            ) : (
              "Save Changes"
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default WeeklyOffPage;