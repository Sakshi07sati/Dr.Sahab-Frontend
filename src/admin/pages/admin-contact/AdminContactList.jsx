import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getContacts } from "../../../global_redux/features/contact/contactThunk";
// import { getContacts } from "../../../global_redux/features/contact/contactThunk";

const AdminContactList = () => {
  const dispatch = useDispatch();
  const { contacts, loading } = useSelector((state) => state.contact);

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Contact Submissions</h2>

      {loading && <p>Loading...</p>}

      {!loading && contacts.length === 0 && (
        <p className="text-gray-600">No contacts found.</p>
      )}

      {!loading && contacts.length > 0 && (
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <table className="min-w-full divide-y divide-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-medium">Name</th>
                <th className="px-4 py-3 text-left text-sm font-medium">Email</th>
                <th className="px-4 py-3 text-left text-sm font-medium">Phone</th>
                <th className="px-4 py-3 text-left text-sm font-medium">Message</th>
                <th className="px-4 py-3 text-left text-sm font-medium">Date</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-200">
              {contacts.map((c) => (
                <tr key={c._id} className="hover:bg-gray-50">
                  <td className="px-4 py-3 font-medium">{c.name}</td>
                  <td className="px-4 py-3">{c.email}</td>
                  <td className="px-4 py-3">{c.phone || "—"}</td>
                  <td className="px-4 py-3">{c.message}</td>
                  <td className="px-4 py-3">
                    {new Date(c.createdAt).toLocaleDateString("en-IN")}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AdminContactList;
