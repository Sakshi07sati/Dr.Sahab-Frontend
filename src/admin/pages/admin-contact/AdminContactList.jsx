import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getContacts } from "../../../global_redux/features/contact/contactThunk";

const AdminContactList = () => {
  const dispatch = useDispatch();
  const { contacts, loading } = useSelector((state) => state.contact);

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  const filteredContacts = contacts.filter((c) => {
  if (dateFilter === "all") return true;

  const contactDate = new Date(c.createdAt);
  const today = new Date();

  if (dateFilter === "today") {
    return contactDate.toDateString() === today.toDateString();
  }

  if (dateFilter === "7days") {
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(today.getDate() - 7);
    return contactDate >= sevenDaysAgo;
  }

  if (dateFilter === "30days") {
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(today.getDate() - 30);
    return contactDate >= thirtyDaysAgo;
  }

  return true;
});


  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Contact Submissions</h2>

        <select
    value={dateFilter}
    onChange={(e) => setDateFilter(e.target.value)}
    className="border rounded px-3 py-2 text-sm"
  >
    <option value="all">All</option>
    <option value="today">Today</option>
    <option value="7days">Last 7 Days</option>
    <option value="30days">Last 30 Days</option>
  </select>

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
              {filteredContacts.map((c) => (
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
