import { useState } from "react";

interface Booking {
  _id: string;
  fullName: string;
  email: string;
  phone: string;
  selectedDay: string;
  time: string;
  mainOption: string;
  subOption: string;
  description?: string;
}

export default function AdminPage() {
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(false);

  const headers = {
    "Content-Type": "application/json",
    "x-admin-password": password,
  };

  const fetchBookings = async () => {
    setLoading(true);
    const res = await fetch(
      "http://localhost:5000/api/admin/bookings",
      { headers }
    );
    const data = await res.json();
    setBookings(data);
    setLoading(false);
  };

  const deleteBooking = async (id: string) => {
    if (!confirm("Delete this booking?")) return;

    await fetch(
      `http://localhost:5000/api/admin/bookings/${id}`,
      {
        method: "DELETE",
        headers,
      }
    );

    setBookings((prev) => prev.filter((b) => b._id !== id));
  };

  /* 🔐 LOGIN */
  if (!loggedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#fbf6f2] px-4">
        <div className="bg-white w-full max-w-sm p-8 rounded-2xl shadow-lg">
          <h1 className="text-2xl font-bold text-center mb-2">
            Admin Access
          </h1>
          <p className="text-center text-gray-500 mb-6 text-sm">
            Enter admin password to continue
          </p>

          <input
            type="password"
            placeholder="Admin password"
            className="w-full border rounded-lg px-4 py-3 mb-4 focus:outline-none focus:ring-2 focus:ring-black"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            onClick={() => {
              setLoggedIn(true);
              fetchBookings();
            }}
            className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition"
          >
            Login
          </button>
        </div>
      </div>
    );
  }

  /* 📋 BOOKINGS */
  return (
    <div className="min-h-screen bg-[#fbf6f2] p-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-black font-Raleway">Bookings</h1>
          <span className="text-sm text-gray-600">
            Total: {bookings.length}
          </span>
        </div>

        {loading && (
          <p className="text-center text-gray-500">Loading bookings…</p>
        )}

        {!loading && bookings.length === 0 && (
          <div className="text-center bg-white p-10 rounded-xl shadow">
            <p className="text-gray-500">No bookings yet.</p>
          </div>
        )}

        <div className="grid gap-5">
          {bookings.map((b) => (
            <div
              key={b._id}
              className="bg-white rounded-2xl shadow p-6 flex flex-col md:flex-row md:justify-between gap-4"
            >
              <div className="space-y-1">
                <h2 className="font-bold font-Raleway text-lg">
                  {b.fullName}
                </h2>

                <p className="text-sm text-gray-600 font-Raleway">{b.email}</p>
                <p className="text-sm font-Raleway">{b.phone}</p>

                <div className="mt-2 text-sm font-Raleway">
                  <p>
                    <span className="font-medium">Date:</span>{" "}
                    {b.selectedDay}
                  </p>
                  <p>
                    <span className="font-medium">Time:</span>{" "}
                    {b.time}
                  </p>
                  <p>
                    <span className="font-medium">Service:</span>{" "}
                    {b.mainOption} → {b.subOption}
                  </p>
                </div>

                {b.description && (
                  <p className="mt-2 text-sm text-gray-700 font-Raleway">
                    “{b.description}”
                  </p>
                )}
              </div>

              <div className="flex items-start md:items-center">
                <button
                  onClick={() => deleteBooking(b._id)}
                  className=" font-Raleway text-red-600 border border-red-600 px-4 py-2 rounded-lg text-sm hover:bg-red-600 hover:text-white transition"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
