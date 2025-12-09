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

import { useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { Calendar } from "lucide-react";

export default function BookingPage() {
  const [selectedDay, setSelectedDay] = useState<Date | undefined>(undefined);
  const [bookedDays, setBookedDays] = useState<Date[]>([]);
  const [mainOption, setMainOption] = useState("1");
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [description, setDescription] = useState("");

  const [showPopup, setShowPopup] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Handle date selection
  const handleDaySelect = (day?: Date) => {
    if (!day) return;

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (day < today) return;

    const isBooked = bookedDays.some(
      (d) => d.toDateString() === day.toDateString()
    );

    if (isBooked) return;

    setSelectedDay(day);
  };

  const validateForm = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{7,15}$/;

    if (!firstName.trim()) return "Full name is required.";
    if (!selectedDay) return "Please select a date.";
    if (!email.trim()) return "Email is required.";
    if (!emailRegex.test(email)) return "Enter a valid email address.";
    if (!phone.trim()) return "Phone number is required.";
    if (!phoneRegex.test(phone))
      return "Phone must be 7–15 digits and numbers only.";

    return null;
  };

  // Handle confirm button (open popup)
  const handleConfirm = () => {
    const errorMessage = validateForm();
    if (errorMessage) {
      setError(errorMessage);
      return;
    }

    setError(null);
    setShowPopup(true);
  };

  // Final booking
  const finalizeBooking = () => {
    if (!selectedDay) return;

    setBookedDays([...bookedDays, selectedDay]);
    setShowPopup(false);

    // Reset all fields
    setFirstName("");
    setEmail("");
    setPhone("");
    setDescription("");
    setMainOption("1");
    setSelectedDay(undefined);

    alert("Appointment booked successfully!");
  };

  return (
    <div className="min-h-screen w-full bg-[#fbf6f2] px-6 py-10 flex flex-col lg:flex-row gap-10 pt-24 font-Raleway">
      {/* LEFT SIDE — Calendar */}
      <div className="w-full lg:w-1/2 bg-white p-6 rounded-2xl shadow">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Calendar /> Select a Date
        </h2>

        <DayPicker
          mode="single"
          selected={selectedDay}
          onSelect={handleDaySelect}
          disabled={{ before: new Date() }}
          modifiers={{ booked: bookedDays }}
          modifiersStyles={{
            booked: {
              textDecoration: "line-through",
              color: "red",
            },
          }}
        />

        <p className="mt-6 font-semibold">Time: 9:00 AM - 7:00 PM</p>
      </div>

      {/* RIGHT SIDE — FORM */}
      <div className="w-full lg:w-1/2 bg-white p-6 rounded-2xl shadow">
        <h2 className="text-2xl font-bold mb-4">Fill Your Details</h2>

        {error && (
          <div className="mb-3 p-3 bg-red-100 text-red-700 rounded">
            {error}
          </div>
        )}

        <form className="flex flex-col gap-4">
          <input
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            type="text"
            placeholder="Full name"
            className="border p-3 rounded w-full"
          />

          <input
            type="text"
            value={selectedDay ? selectedDay.toDateString() : "No date selected"}
            readOnly
            className="border p-3 rounded w-full bg-gray-100 text-gray-700"
          />

          <input
            type="text"
            value="9:00 AM - 7:00 PM"
            readOnly
            className="border p-3 rounded w-full bg-gray-100 text-gray-700"
          />

          {/* Improved Dropdown */}
          <select
            value={mainOption}
            onChange={(e) => setMainOption(e.target.value)}
            className="border p-3 rounded w-full bg-white shadow-sm"
          >
            <option value="1">3D Designs (Using Clo 3D)</option>
            <option value="2">Digital Illustrated Designs</option>
          </select>

          {mainOption === "2" && (
            <select className="border p-3 rounded w-full bg-white shadow-sm">
              <option value="A">Designs</option>
              <option value="B">Illustration</option>
            </select>
          )}

          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email address"
            className="border p-3 rounded w-full"
          />

          <input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            type="text"
            placeholder="Phone number"
            className="border p-3 rounded w-full"
          />

          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Describe your illustration request (optional)"
            className="border p-3 rounded w-full h-32 resize-none"
          />

          <button
            type="button"
            onClick={handleConfirm}
            className="mt-4 bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition w-full"
          >
            Confirm Appointment
          </button>
        </form>
      </div>

      {/* POPUP */}
      {showPopup && (
        <div className="fixed inset-0 bg-[#fbf6f2] bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-2xl w-[90%] max-w-md shadow-lg">
            <h2 className="text-xl font-bold mb-4">Confirm Your Booking</h2>

            <p>
              <strong>Name:</strong> {firstName}
            </p>
            <p>
              <strong>Date:</strong> {selectedDay?.toDateString()}
            </p>
            <p>
              <strong>Time:</strong> 9:00 AM - 7:00 PM
            </p>
            <p>
              <strong>Email:</strong> {email}
            </p>
            <p>
              <strong>Phone:</strong> {phone}
            </p>
            {description && (
              <p>
                <strong>Description:</strong> {description}
              </p>
            )}

            <div className="flex gap-4 mt-6">
              <button
                onClick={() => setShowPopup(false)}
                className="w-full py-2 rounded-lg border border-gray-400"
              >
                Cancel
              </button>

              <button
                onClick={finalizeBooking}
                className="w-full py-2 rounded-lg bg-black text-white"
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
