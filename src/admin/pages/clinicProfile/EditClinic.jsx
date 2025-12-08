import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { updateClinic, getAllClinics } from "../../../global_redux/features/clinic/clinicThunk";
import toast from "react-hot-toast";

const EditClinic = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { clinics, loading } = useSelector((state) => state.clinic);

  const [formData, setFormData] = useState({
    clinic_name: "",
    dentist_name: "",
    number: "",
    location: "",
    address: "",
    clinic_email: "",
    password: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  // Get current clinic data
  useEffect(() => {
    dispatch(getAllClinics());
  }, [dispatch]);

  useEffect(() => {
    const clinic = clinics?.find((c) => c._id === id);
    if (clinic) {
      setFormData({
        clinic_name: clinic.clinic_name,
        dentist_name: clinic.dentist_name,
        number: clinic.number,
        location: clinic.location,
        address: clinic.address,
        clinic_email: clinic.clinic_email,
        password: "",
      });
    }
  }, [clinics, id]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Prepare data - remove password if empty
    const dataToSubmit = { ...formData };
    if (!dataToSubmit.password || dataToSubmit.password.trim() === "") {
      delete dataToSubmit.password;
    }

    // Validate before sending
    if (dataToSubmit.clinic_name && dataToSubmit.clinic_name.length < 3) {
      toast.error("Clinic name must be at least 3 characters");
      setIsSubmitting(false);
      return;
    }

    if (dataToSubmit.number && dataToSubmit.number.length !== 10) {
      toast.error("Phone number must be exactly 10 digits");
      setIsSubmitting(false);
      return;
    }

    if (dataToSubmit.address && dataToSubmit.address.length < 5) {
      toast.error("Address must be at least 5 characters");
      setIsSubmitting(false);
      return;
    }

    const res = await dispatch(updateClinic({ id, updatedData: dataToSubmit }));

    if (res.meta.requestStatus === "fulfilled") {
      navigate("/admin/all-clinics");
    }
    setIsSubmitting(false);
  };

  const handleCancel = () => {
    navigate("/admin/clinics");
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <button
            onClick={handleCancel}
            className="flex items-center text-gray-600 hover:text-gray-900 mb-4 transition"
          >
            <svg
              className="h-5 w-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Back to Clinics
          </button>
          <h2 className="text-3xl font-bold text-gray-900">Update Clinic</h2>
          <p className="text-gray-600 mt-1">Edit clinic information</p>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          {loading ? (
            <div className="p-12 text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
              <p className="text-gray-700">Loading clinic data...</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="p-6 md:p-8">
              <div className="space-y-6">
                {/* Clinic Name */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Clinic Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="clinic_name"
                    value={formData.clinic_name}
                    onChange={handleChange}
                    placeholder="Enter clinic name"
                    minLength="3"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                    required
                  />
                  <p className="text-xs text-gray-500 mt-1">Minimum 3 characters</p>
                </div>

                {/* Dentist Name */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Dentist Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="dentist_name"
                    value={formData.dentist_name}
                    onChange={handleChange}
                    placeholder="Enter dentist name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                    required
                  />
                </div>

                {/* Phone and Email Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="number"
                      value={formData.number}
                      onChange={handleChange}
                      placeholder="Enter 10 digit phone number"
                      maxLength="10"
                      pattern="[0-9]{10}"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                      required
                    />
                    <p className="text-xs text-gray-500 mt-1">Must be exactly 10 digits</p>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Clinic Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="clinic_email"
                      value={formData.clinic_email}
                      onChange={handleChange}
                      placeholder="Enter clinic email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                      required
                    />
                  </div>
                </div>

                {/* Location */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Location <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    placeholder="Enter location (e.g., City name)"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                    required
                  />
                </div>

                {/* Address */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Address <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="Enter complete address"
                    rows="3"
                    minLength="5"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition resize-none"
                    required
                  />
                  <p className="text-xs text-gray-500 mt-1">Minimum 5 characters</p>
                </div>

                {/* Password - Optional */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    New Password
                    <span className="text-gray-500 font-normal ml-2">(Optional - leave blank to keep current)</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Enter new password"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  />
                </div>

                {/* Info Note */}
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <div className="flex">
                    <svg
                      className="h-5 w-5 text-blue-600 mr-3 flex-shrink-0 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <div>
                      <p className="text-sm font-semibold text-blue-900 mb-1">
                        Important Information
                      </p>
                      <p className="text-sm text-blue-800">
                        Fields marked with <span className="text-red-500">*</span> are required. 
                        Only enter a new password if you want to change it.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 mt-8 pt-6 border-t border-gray-200">
                <button
                  type="button"
                  onClick={handleCancel}
                  className="flex-1 px-6 py-3 border border-gray-300 rounded-lg text-gray-700 font-semibold hover:bg-gray-50 transition-colors duration-200"
                  disabled={isSubmitting}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      Updating...
                    </>
                  ) : (
                    <>
                      <svg
                        className="h-5 w-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      Update Clinic
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default EditClinic;