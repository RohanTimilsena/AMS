import express, { json } from "express";
import mongoose from "mongoose";
import cors from "cors";

// 1. configure server
const app = express();

// 2. middleare
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

// 3. Db connection
try {
  mongoose.connect(
    "mongodb+srv://rohantimilsena11:yc7tKHnQRAIYDVOX@cluster0.hidgidi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  );
  console.log("Database connected succussfully");
} catch (error) {
  console.log("could not connect to the database", error);
}

// 5. Make the attendance schema
const attendanceSchema = mongoose.Schema({
  fullName: { type: String, required: true },
  time: { type: String, required: true },
});

// 6.Make a table
const Attendance = mongoose.model("Attendance", attendanceSchema);

// 7.creat attendance
app.post("/create-attendance", async (req, res) => {
  try {
    const newlyCreatedAttendance = await Attendance.create(req.body);
    return res.status(201).json({
      success: true,
      msg: "Your attendance has been recorded",
      data: newlyCreatedAttendance,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      msg: "Something went wrong",
      data: null,
      error: error,
    });
  }
});

// 8.get-all attendance
app.get("/get-all-attendance", async (req, res) => {
  try {
    const allAttendance = await Attendance.find();
    return res.status(200).json({
      success: true,
      msg: "All attendance fetched auccessfully",
      data: allAttendance,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      msg: "Something went wrong",
      data: null,
      error: error,
    });
  }
});

// 9.get-single attendance
app.get("/get-single-attendance/:id", async (req, res) => {
  try {
    const singleAttendance = await Attendance.findById(req.params.id);

    if (!singleAttendance) {
      return res.status(404).json({
        success: false,
        msg: " The attendance you arelooking does not exist",
        data: null,
      });
    }
    return res.status(200).json({
      success: true,
      msg: "Single attendance fetched auccessfully",
      data: singleAttendance,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      msg: "Something went wrong",
      data: null,
      error: error,
    });
  }
});

// 10. update-single attendance
app.patch("/update-single-attendance/:id", async (req, res) => {
  try {
    const updateAttendance = await Attendance.findByIdAndUpdate(req.params.id, req.body, {new: true});
    return res.status(200).json({
      success: true,
      msg: " Your attendance has been Update",
      data: updateAttendance,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      msg: "Something went wrong",
      data: null,
      error: error,
    });
  }
});

// 11. delete single attendance
app.delete("/delete-single-attendance/:id", async (req, res) => {
  try {
    const deleteAttendance = await Attendance.findByIdAndDelete(req.params.id);

    if (!deleteAttendance) {
      return res.status(404).json({
        success: false,
        msg: " The attendance you are trying to delete does not exist",
        data: null,
      });
    }

    return res.status(200).json({
      success: true,
      msg: "Your attendance has been delete",
      data: deleteAttendance,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      msg: "Something went wrong",
      data: null,
      error: error,
    });
  }
});

// 4. Expose the post
app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
