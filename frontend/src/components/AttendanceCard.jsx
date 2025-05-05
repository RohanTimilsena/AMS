import React, { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

export default function AttendanceCard() {
  const [fullName, setFullName] = useState("");
  const [time, setTime] = useState("");

  const createattendance = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("https://ams-xhal.onrender.com/create-attendance", {
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

  const [attendances, setAttendances] = useState(null);

  // featch all attendance
  const featchAllAttendance = async () => {
    try {
      const res = await axios.get("https://ams-xhal.onrender.com/get-all-attendance");
      console.log(res.data.data);
      setAttendances(res.data.data);
      // toast.success("Attendance Created Successfully");
    } catch (error) {
      console.log("Something went wrong", error);
      toast.error("Unable to fetch all attendance");
    }
  };

  useEffect(() => {
    featchAllAttendance();
  }, []);

  // delete attendance
  const deleteAttendance = async (_id) => {
    try {
      const res = await axios.delete(
        `https://ams-xhal.onrender.com/delete-single-attendance/${_id}`
      );
      toast.success("Delete Success");
      featchAllAttendance();
    } catch (error) {
      console.log("Something went wrong", error);
      toast.error("Delete Failed");
    }
  };

  return (
    <div>
      {/* Attendance create form */}

      <form
        onSubmit={createattendance}
        className="mt-40 w-4/12 border border-gray-200 p-8 space-y-2 mx-auto shadow-xl"
      >
        <div className="flex flex-col">
          <label htmlFor="full-name">Full Name</label>
          <input
            value={fullName}
            onChange={(event) => setFullName(event.target.value)}
            required
            type="text"
            id="full-name"
            placeholder="Enter youe full name "
            className="border border-gray-200 outline-none px-2"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="time">Time</label>
          <input
            value={time}
            onChange={(event) => setTime(event.target.value)}
            required
            type="text"
            id="time"
            placeholder="Enter youe entry time"
            className="border border-gray-200 outline-none px-2"
          />
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-violet-600 text-white px-6 py-1 rounded-md cursor-pointer"
          >
            Create Attendance
          </button>
        </div>
      </form>

      {/* Attendance table */}

      <div className=" w-6/12 mx-auto mt-4  border border-gray-500 p-8 shadow-md  ">
        {attendances?.map((eachAttendance, index) => (
          <div
            key={index}
            className="flex items-center justify-between shadow-sm  gap-4 border p-4 border-gray-200 mb-4 "
          >
            <div className="flex items-center space-x-12">
              <p>{index  + 1}</p>
              <p>{eachAttendance.fullName}</p>
              <p>{eachAttendance.time}</p>
              {/* <p>{eachAttendance._id}</p> */}
            </div>

            <div>
              <button
                onClick={() => deleteAttendance(eachAttendance._id)}
                className="text-white bg-red-500 text-xs px-2 py-1 rounded-md cursor-pointer   "
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
