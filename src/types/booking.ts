// src/types/booking.ts

export interface BookingPayload {
  fullName: string;
  email: string;
  phone: string;
  selectedDay: string; // exact string like "Thu Dec 11 2025"
  time: string;
  mainOption: string;
  subOption: string | null;
  description?: string;
}

export interface BookingFromDB {
  _id: string;
  selectedDay: string;
}
