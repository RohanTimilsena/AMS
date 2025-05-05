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
            className="bg-violet-600 hover:bg-violet-700 text-white px-6 py-2 rounded-md transition-all duration-200 cursor-pointer"
          >
            Create Attendance
          </button>
        </div>
      </form>

      {/* Attendance List */}
      <div className="max-w-2xl mx-auto mt-10 bg-white border border-gray-200 rounded-lg shadow-md p-6">
        <h2 className="text-lg font-semibold text-gray-700 mb-4">Attendance Records</h2>
        {attendances?.length > 0 ? (
          attendances.map((eachAttendance, index) => (
            <div
              key={eachAttendance._id}
              className="flex items-center justify-between border-b border-gray-100 py-3"
            >
              <div className="flex items-center space-x-8 text-gray-700">
                <span className="font-medium">{index + 1}.</span>
                <span>{eachAttendance.fullName}</span>
                <span className="text-sm text-gray-500">{eachAttendance.time}</span>
              </div>

              <button
                onClick={() => deleteAttendance(eachAttendance._id)}
                className="bg-red-500 hover:bg-red-600 cursor-pointer text-white text-xs px-3 py-1 rounded-md transition-all duration-200"
              >
                Delete
              </button>
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-sm">No attendance records found.</p>
        )}
      </div>
    </div>
  );
}
