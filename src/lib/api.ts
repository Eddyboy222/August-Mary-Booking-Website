import type { BookingPayload } from "../types/booking";

const API_BASE_URL =
  import.meta.env.PROD
    ? "https://august-mary-backend.onrender.com"
    : "http://localhost:5000";

/* ================= CREATE BOOKING ================= */
export async function createBooking(payload: BookingPayload) {
  const res = await fetch(`${API_BASE_URL}/api/bookings`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.message || "Failed to create booking");
  }

  return res.json();
}

/* ================= GET BOOKINGS ================= */
export async function getBookings() {
  const res = await fetch(`${API_BASE_URL}/api/bookings`);

  if (!res.ok) {
    throw new Error("Failed to fetch bookings");
  }

  return res.json();
}
