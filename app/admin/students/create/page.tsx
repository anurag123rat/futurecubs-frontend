"use client";

import { useState } from "react";

export default function CreateStudentPage() {
  const [student, setStudent] = useState({
    studentCode: "EC-0001",
    name: "",
    dob: "",
    gender: "",
    parent: "",
    teacher: "",
    ageGroup: "",
    admissionDate: "",
    status: "Active",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement
    >
  ) => {
    setStudent({
      ...student,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    console.log(student);
    alert("Student Created Successfully");
  };

  return (
    <div className="max-w-6xl mx-auto space-y-6">

      {/* Header */}

      <div>
        <h1 className="text-3xl font-bold text-slate-800">
          Create Student
        </h1>

        <p className="text-slate-500 mt-2">
          Add a new student to FutureCubs.
        </p>
      </div>

      {/* Form */}

      <div className="bg-white rounded-2xl border shadow-sm p-8">

        <div className="grid md:grid-cols-2 gap-6">

          {/* Student Code */}

          <div>
            <label className="block mb-2 font-medium">
              Student Code
            </label>

            <input
              value={student.studentCode}
              readOnly
              className="w-full rounded-xl border bg-slate-100 p-3 cursor-not-allowed"
            />
          </div>

          {/* Admission Date */}

          <div>
            <label className="block mb-2 font-medium">
              Admission Date
            </label>

            <input
              type="date"
              name="admissionDate"
              value={student.admissionDate}
              onChange={handleChange}
              className="w-full rounded-xl border p-3"
            />
          </div>

          {/* Name */}

          <div>
            <label className="block mb-2 font-medium">
              Student Name
            </label>

            <input
              name="name"
              value={student.name}
              onChange={handleChange}
              placeholder="Enter Student Name"
              className="w-full rounded-xl border p-3"
            />
          </div>

          {/* DOB */}

          <div>
            <label className="block mb-2 font-medium">
              Date of Birth
            </label>

            <input
              type="date"
              name="dob"
              value={student.dob}
              onChange={handleChange}
              className="w-full rounded-xl border p-3"
            />
          </div>

          {/* Gender */}

          <div>
            <label className="block mb-2 font-medium">
              Gender
            </label>

            <select
              name="gender"
              value={student.gender}
              onChange={handleChange}
              className="w-full rounded-xl border p-3"
            >
              <option value="">
                Select Gender
              </option>

              <option>Male</option>

              <option>Female</option>
            </select>
          </div>

          {/* Age Group */}

          <div>
            <label className="block mb-2 font-medium">
              Age Group
            </label>

            <select
              name="ageGroup"
              value={student.ageGroup}
              onChange={handleChange}
              className="w-full rounded-xl border p-3"
            >
              <option value="">
                Select Age Group
              </option>

              <option>2-4 Years</option>

              <option>4-6 Years</option>

              <option>6-8 Years</option>
            </select>
          </div>

          {/* Parent */}

          <div>
            <label className="block mb-2 font-medium">
              Parent
            </label>

            <select
              name="parent"
              value={student.parent}
              onChange={handleChange}
              className="w-full rounded-xl border p-3"
            >
              <option>Select Parent</option>

              <option>Rahul Sharma</option>

              <option>Neha Verma</option>

              <option>Amit Singh</option>
            </select>
          </div>

          {/* Teacher */}

          <div>
            <label className="block mb-2 font-medium">
              Teacher
            </label>

            <select
              name="teacher"
              value={student.teacher}
              onChange={handleChange}
              className="w-full rounded-xl border p-3"
            >
              <option>Select Teacher</option>

              <option>Priya Sharma</option>

              <option>Amit Verma</option>

              <option>Sonia Gupta</option>
            </select>
          </div>

          {/* Photo */}

          <div>
            <label className="block mb-2 font-medium">
              Student Photo
            </label>

            <input
              type="file"
              className="w-full rounded-xl border p-3"
            />
          </div>

          {/* Status */}

          <div>
            <label className="block mb-2 font-medium">
              Status
            </label>

            <select
              name="status"
              value={student.status}
              onChange={handleChange}
              className="w-full rounded-xl border p-3"
            >
              <option>Active</option>

              <option>Inactive</option>
            </select>
          </div>

        </div>

        {/* Footer */}

        <div className="flex justify-end gap-4 mt-10">

          <button className="px-6 py-3 rounded-xl border hover:bg-slate-100">
            Cancel
          </button>

          <button
            onClick={handleSubmit}
            className="px-8 py-3 rounded-xl bg-blue-600 text-white hover:bg-blue-700"
          >
            Create Student
          </button>

        </div>

      </div>

    </div>
  );
}