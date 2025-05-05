import React, { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

export default function AttendanceCard() {
  const [fullName, setFullName] = useState("");
  const [time, setTime] = useState("");
  const [attendances, setAttendances] = useState(null);

  const createattendance = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://ams-xhal.onrender.com/create-attendance", {
        fullName: fullName,
        time: time,
      });
      toast.success("Attendance Created Successfully");
      setFullName("");
      setTime("");
      featchAllAttendance();
    } catch (error) {
      console.log("Something went wrong", error);
      toast.error("Failed to take your attendance");
    }
  };

  const featchAllAttendance = async () => {
    try {
      const res = await axios.get("https://ams-xhal.onrender.com/get-all-attendance");
      setAttendances(res.data.data);
    } catch (error) {
      console.log("Something went wrong", error);
      toast.error("Unable to fetch all attendance");
    }
  };

  const deleteAttendance = async (_id) => {
    try {
      await axios.delete(`https://ams-xhal.onrender.com/delete-single-attendance/${_id}`);
      toast.success("Delete Success");
      featchAllAttendance();
    } catch (error) {
      console.log("Something went wrong", error);
      toast.error("Delete Failed");
    }
  };

  useEffect(() => {
    featchAllAttendance();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-20 px-4 mt-40">
      {/* Attendance Form */}
      <form
        onSubmit={createattendance}
        className="max-w-md mx-auto bg-white border border-gray-200 p-6 rounded-lg shadow-md space-y-4"
      >
        <h2 className="text-xl font-semibold text-gray-700 mb-2">Create Attendance</h2>

        <div className="flex flex-col">
          <label htmlFor="full-name" className="text-sm font-medium text-gray-600">
            Full Name
          </label>
          <input
            value={fullName}
            onChange={(event) => setFullName(event.target.value)}
            required
            type="text"
            id="full-name"
            placeholder="Enter your full name"
            className="border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-violet-500"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="time" className="text-sm font-medium text-gray-600">
            Time
          </label>
          <input
            value={time}
            onChange={(event) => setTime(event.target.value)}
            required
            type="text"
            id="time"
            placeholder="Enter your entry time"
            className="border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-violet-500"
          />
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-violet-600 hover:bg-violet-700 text-white px-6 py-2 rounded-md transition-all duration-200 "
          >
            Create Attendance
          </button>
        </div>
      </form>

     

      {/* Attendance List */}
<div className="max-w-3xl mx-auto mt-12 bg-white border border-gray-200 rounded-2xl shadow-lg p-8">
  <h2 className="text-xl font-bold text-gray-800 mb-6">Attendance Records</h2>

  {attendances?.length > 0 ? (
    <div className="overflow-x-auto">
      <table className="min-w-full table-auto border-collapse">
        <thead>
          <tr className="bg-gray-50 text-left text-gray-500 text-sm uppercase tracking-wider">
            <th className="px-4  py-3">#</th>
            <th className="px-4  py-3">Full Name</th>
            <th className="px-4  py-3">Time</th>
            <th className="px-4 py-3 text-center">Actions</th>
          </tr>
        </thead>
        <tbody className="text-gray-700">
          {attendances.map((eachAttendance, index) => (
            <tr
              key={eachAttendance._id}
              className="border-b border-gray-100 hover:bg-gray-50 transition"
            >
              <td className="px-4 py-3 font-medium">{index + 1}</td>
              <td className="px-4 py-3">{eachAttendance.fullName}</td>
              <td className="px-4 py-3">{eachAttendance.time}</td>
              <td className="px-4 py-3 text-center">
                <button
                  onClick={() => deleteAttendance(eachAttendance._id)}
                  className="bg-red-500 hover:bg-red-600 text-white text-sm px-4 py-1.5 rounded-md transition"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  ) : (
    <p className="text-gray-500 text-sm">No attendance records found.</p>
  )}
</div>

    </div>
  );
}
