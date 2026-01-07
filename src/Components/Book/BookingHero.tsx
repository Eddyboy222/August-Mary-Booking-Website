// import { useState } from "react";
// import { DayPicker } from "react-day-picker";
// import "react-day-picker/dist/style.css";
// import { Calendar } from "lucide-react";

// export default function BookingPage() {
//   // Selected date
//   const [selectedDay, setSelectedDay] = useState<Date | undefined>();

//   // Booked dates
//   const [bookedDays, setBookedDays] = useState<Date[]>([]);

//   // Dropdown logic
//   const [mainOption, setMainOption] = useState("1");

//   // Form fields
//   const [firstName, setFirstName] = useState("");
//   // const [lastName, setLastName] = useState("");
//   const [email, setEmail] = useState("");
//   const [phone, setPhone] = useState("");
//   const [description, setDescription] = useState("");

//   // HANDLE DAY SELECT — Prevent past days & booked days
//   const handleDaySelect = (day?: Date) => {
//     if (!day) return;

//     const today = new Date();
//     today.setHours(0, 0, 0, 0);

//     // Prevent selecting past dates
//     if (day < today) return;

//     // Prevent selecting booked dates
//     const isBooked = bookedDays.some(
//       (d) => d.toDateString() === day.toDateString()
//     );
//     if (isBooked) return;

//     setSelectedDay(day);
//   };

//   // CLEAR FORM
//   const resetForm = () => {
//     setSelectedDay(undefined);
//     setFirstName("");
//     // setLastName("");
//     setEmail("");
//     setPhone("");
//     setDescription("");
//     setMainOption("1");
//   };

//   // CONFIRM BOOKING
//   const handleConfirm = () => {
//     if (!selectedDay) return alert("Please select a date before confirming.");

//     // Add selected day to booked list
//     setBookedDays([...bookedDays, selectedDay]);

//     alert("Appointment booked successfully!");

//     // Clear everything
//     resetForm();
//   };

//   return (
//     <div className="min-h-screen w-full bg-[#fbf6f2] px-6 py-10 flex flex-col lg:flex-row gap-10 pt-24">

//       {/* LEFT SIDE — Calendar */}
//       <div className="w-full lg:w-1/2 bg-white p-6 rounded-2xl shadow font-Raleway">
//         <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
//           <Calendar /> Select a Date
//         </h2>

//         <DayPicker
//           mode="single"
//           selected={selectedDay}
//           onSelect={handleDaySelect}

//           // Disable past dates
//           disabled={{ before: new Date() }}

//           // Mark booked days
//           modifiers={{ booked: bookedDays }}
//           modifiersStyles={{
//             booked: {
//               textDecoration: "line-through",
//               color: "red",
//             },
//           }}
//         />

//         <div className="mt-6">
//           <p className="font-semibold">Time: 9:00 AM - 7:00 PM</p>
//         </div>
//       </div>

//       {/* RIGHT SIDE — FORM */}
//       <div className="w-full lg:w-1/2 bg-white p-6 rounded-2xl shadow font-Raleway">
//         <h2 className="text-2xl font-bold mb-4">Fill Your Details</h2>

//         <form className="flex flex-col gap-4">

//           {/* First + Last Name */}
//           <div className="flex gap-4">
//             <input
//               value={firstName}
//               onChange={(e) => setFirstName(e.target.value)}
//               type="text"
//               placeholder="Full name"
//               className="border p-3 rounded w-full"
//             />
//             {/* <input
//               value={lastName}
//               onChange={(e) => setLastName(e.target.value)}
//               type="text"
//               placeholder="Last Name"
//               className="border p-3 rounded w-full"
//             /> */}
//           </div>

//           {/* Date field */}
//           <input
//             type="text"
//             value={selectedDay ? selectedDay.toDateString() : "No date selected"}
//             readOnly
//             className="border p-3 rounded w-full bg-gray-100 text-gray-700"
//           />

//           {/* Time Selection */}
//           {/* Time (Fixed 9 AM – 7 PM) */}
//           <input
//             type="text"
//             value="9:00 AM - 7:00 PM"
//             readOnly
//             className="border p-3 rounded w-full bg-gray-100 text-gray-700"
//           />

//           {/* Main Dropdown */}
//           <select
//             value={mainOption}
//             onChange={(e) => setMainOption(e.target.value)}
//             className="border p-3 rounded w-full bg-white font-Raleway"
//           >
//             <option value="1">3D Designs {`(Using Clo 3D)`}</option>
//             <option value="2">Digital Illustrated Designs</option>
//           </select>

//           {/* Conditional Dropdown */}
//           {mainOption === "2" && (
//             <select className="border p-3 rounded w-full bg-white font-Raleway">
//               <option value="A">Designs</option>
//               <option value="B">Illustration</option>
//             </select>
//           )}

//           {/* Email */}
//           <input
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             type="email"
//             placeholder="Email"
//             className="border p-3 rounded w-full"
//           />

//           {/* Phone */}
//           <input
//             value={phone}
//             onChange={(e) => setPhone(e.target.value)}
//             type="text"
//             placeholder="Phone"
//             className="border p-3 rounded w-full"
//           />

//           {/* Description */}
//           <textarea
//             value={description}
//             onChange={(e) => setDescription(e.target.value)}
//             placeholder="Describe your illustration request"
//             className="border p-3 rounded w-full h-32 resize-none"
//             rows={4}
//           />

//           {/* Submit Button */}
//           <button
//             className="mt-4 bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition w-full"
//             type="button"
//             onClick={handleConfirm}
//           >
//             Confirm Appointment
//           </button>

//         </form>
//       </div>
//     </div>
//   );
// }

import { useState, useEffect } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { Calendar } from "lucide-react";
import { createBooking, getBookings } from "../../lib/api";
import type { BookingFromDB, BookingPayload } from "../../types/booking";

export default function BookingPage() {
  const [selectedDay, setSelectedDay] = useState<Date | undefined>();
  const [fullyBookedDays, setFullyBookedDays] = useState<Date[]>([]);

  const [mainOption, setMainOption] = useState<"1" | "2">("1");
  const [subOption, setSubOption] = useState<"Design" | "Illustration">(
    "Design"
  );

  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [description, setDescription] = useState("");

  const [showPopup, setShowPopup] = useState(false);
  const [error, setError] = useState<string | null>(null);

  /* ================= BLOCKED DAYS ================= */
  const isBlockedDay = (day: Date) => {
    const d = day.getDay();
    return d === 0 || d === 4 || d === 6; // Sun, Thu, Sat
  };

  /* ================= FETCH BOOKINGS ================= */
  const fetchBookedDates = async () => {
    try {
      const data: BookingFromDB[] = await getBookings();

      const counts: Record<string, number> = {};

      data.forEach((b) => {
        counts[b.selectedDay] = (counts[b.selectedDay] || 0) + 1;
      });

      const fullDays = Object.entries(counts)
        .filter(([, count]) => count >= 2)
        .map(([day]) => new Date(day));

      setFullyBookedDays(fullDays);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchBookedDates();
  }, []);

  /* ================= DATE SELECT ================= */
  const handleDaySelect = (day?: Date) => {
    if (!day) return;

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (day < today) return;
    if (isBlockedDay(day)) return;

    const isFullyBooked = fullyBookedDays.some(
      (d) => d.toDateString() === day.toDateString()
    );

    if (isFullyBooked) return;

    setSelectedDay(day);
  };

  /* ================= VALIDATION ================= */
  const validateForm = () => {
    if (!firstName.trim()) return "Full name is required";
    if (!selectedDay) return "Please select a date";
    if (!email.trim()) return "Email is required";
    if (!phone.trim()) return "Phone is required";
    return null;
  };

  const handleConfirm = () => {
    const err = validateForm();
    if (err) {
      setError(err);
      return;
    }
    setError(null);
    setShowPopup(true);
  };

  /* ================= SEND TO BACKEND ================= */
  const finalizeBooking = async (): Promise<void> => {
    if (!selectedDay) return;

    const payload: BookingPayload = {
      fullName: firstName,
      email,
      phone,
      selectedDay: selectedDay.toDateString(),
      time: "9:00 AM - 7:00 PM",
      mainOption:
        mainOption === "1"
          ? "3D Designs (Using Clo 3D)"
          : "Digital Illustrated Designs",
      subOption: mainOption === "2" ? subOption : null,
      description,
    };

    try {
      await createBooking(payload);

      // 🔥 Refresh fully booked days immediately
      await fetchBookedDates();

      setShowPopup(false);
      setFirstName("");
      setEmail("");
      setPhone("");
      setDescription("");
      setMainOption("1");
      setSubOption("Design");
      setSelectedDay(undefined);

      alert("Appointment booked successfully!");
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      alert("Something went wrong");
    }
  };

  /* ================= JSX ================= */
  return (
    <div className="min-h-screen bg-[#fbf6f2] px-6 py-10 pt-24 font-Raleway">
      {/* PAYMENT / NOTE */}
      <div className="max-w-6xl mx-auto mb-10">
        <div className="bg-white p-6 rounded-2xl shadow">
          <h3 className="text-lg font-bold mb-2">Important Information</h3>
          <p className="text-sm text-gray-700 mb-4">
            After booking your appointment, please complete the payment form to
            confirm your slot.
          </p>

          <a
            href="https://forms.gle/tGaY9oNUFeaA9r6S7"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-black text-white px-6 py-3 rounded-lg text-sm hover:bg-gray-800 transition"
          >
            Proceed to Payment
          </a>

          <p className="text-xs text-gray-500 mt-3">
            ⚠️ Bookings without completed payment may not be confirmed.
          </p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-10 max-w-6xl mx-auto">
        {/* CALENDAR */}
        <div className="w-full lg:w-1/2 bg-white p-6 rounded-2xl shadow">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Calendar /> Select a Date
          </h2>

          <DayPicker
            mode="single"
            selected={selectedDay}
            onSelect={handleDaySelect}
            disabled={[
              { before: new Date() },
              isBlockedDay,
              fullyBookedDays,
            ]}
            modifiers={{ booked: fullyBookedDays }}
            modifiersStyles={{
              booked: {
                textDecoration: "line-through",
                color: "#dc2626",
                fontWeight: "600",
                cursor: "not-allowed",
              },
            }}
          />

          <p className="mt-2 font-semibold">Time: 9:00 AM – 7:00 PM</p>
        </div>

        {/* FORM */}
        <div className="w-full lg:w-1/2 bg-white p-6 rounded-2xl shadow">
          <h2 className="text-2xl font-bold mb-4">Fill Your Details</h2>

          {error && (
            <div className="mb-3 p-3 bg-red-100 text-red-700 rounded">
              {error}
            </div>
          )}

          <input
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="Full name"
            className="border p-3 rounded w-full mb-3"
          />

          <input
            readOnly
            value={
              selectedDay ? selectedDay.toDateString() : "No date selected"
            }
            className="border p-3 rounded w-full mb-3 bg-gray-100"
          />

          <select
            value={mainOption}
            onChange={(e) => setMainOption(e.target.value as "1" | "2")}
            className="border p-3 rounded w-full mb-3"
          >
            <option value="1">3D Designs (Using Clo 3D)</option>
            <option value="2">Digital Illustrated Designs</option>
          </select>

          {mainOption === "2" && (
            <select
              value={subOption}
              onChange={(e) =>
                setSubOption(e.target.value as "Design" | "Illustration")
              }
              className="border p-3 rounded w-full mb-3"
            >
              <option value="Design">Design</option>
              <option value="Illustration">Illustration</option>
            </select>
          )}

          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="border p-3 rounded w-full mb-3"
          />

          <input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Phone"
            className="border p-3 rounded w-full mb-3"
          />

          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Describe your request (optional)"
            className="border p-3 rounded w-full h-32"
          />

          <button
            onClick={handleConfirm}
            className="mt-4 w-full bg-black text-white py-3 rounded-lg"
          >
            Confirm Appointment
          </button>
        </div>
      </div>

      {/* CONFIRM POPUP */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-2xl w-full max-w-md">
            <h2 className="text-xl font-bold mb-4">Confirm Your Booking</h2>

            <p><strong>Name:</strong> {firstName}</p>
            <p><strong>Date:</strong> {selectedDay?.toDateString()}</p>
            <p><strong>Time:</strong> 9:00 AM – 7:00 PM</p>
            <p><strong>Email:</strong> {email}</p>
            <p><strong>Phone:</strong> {phone}</p>
            <p><strong>Service:</strong> {mainOption === "1" ? "3D Designs (Using Clo 3D)" : "Digital Illustrated Designs"}</p>

            {mainOption === "2" && (
              <p><strong>Type:</strong> {subOption}</p>
            )}

            {description && (
              <p><strong>Description:</strong> {description}</p>
            )}

            <div className="flex gap-4 mt-6">
              <button
                onClick={() => setShowPopup(false)}
                className="w-full py-2 border rounded"
              >
                Cancel
              </button>
              <button
                onClick={finalizeBooking}
                className="w-full py-2 bg-black text-white rounded"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

