"use client";

import { useState } from "react";
import Link from "next/link";

export default function EditTeacherPage() {
  const [teacher, setTeacher] = useState({
    name: "Priya Sharma",
    email: "priya@gmail.com",
    phone: "9876543210",
    qualification: "M.Ed",
    experience: "5 Years",
    specialization: "Early Childhood Education",
    ageGroup: "2-4 Years",
    status: "Active",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setTeacher({
      ...teacher,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    alert("Teacher Updated Successfully");
    console.log(teacher);
  };

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      {/* Header */}

      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-800">
            Edit Teacher
          </h1>

          <p className="text-slate-500 mt-1">
            Update teacher information.
          </p>
        </div>

        <Link
          href="/admin/teachers"
          className="px-5 py-3 border rounded-xl hover:bg-slate-100"
        >
          Back
        </Link>
      </div>

      {/* Form */}

      <div className="bg-white rounded-2xl border shadow-sm p-6">

        <div className="grid md:grid-cols-2 gap-5">

          <div>
            <label className="block mb-2 font-medium">
              Teacher Name
            </label>

            <input
              name="name"
              value={teacher.name}
              onChange={handleChange}
              className="w-full border rounded-xl p-3"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Email
            </label>

            <input
              type="email"
              name="email"
              value={teacher.email}
              onChange={handleChange}
              className="w-full border rounded-xl p-3"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Phone
            </label>

            <input
              name="phone"
              value={teacher.phone}
              onChange={handleChange}
              className="w-full border rounded-xl p-3"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Qualification
            </label>

            <input
              name="qualification"
              value={teacher.qualification}
              onChange={handleChange}
              className="w-full border rounded-xl p-3"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Experience
            </label>

            <input
              name="experience"
              value={teacher.experience}
              onChange={handleChange}
              className="w-full border rounded-xl p-3"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Specialization
            </label>

            <input
              name="specialization"
              value={teacher.specialization}
              onChange={handleChange}
              className="w-full border rounded-xl p-3"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Age Group
            </label>

            <select
              name="ageGroup"
              value={teacher.ageGroup}
              onChange={handleChange}
              className="w-full border rounded-xl p-3"
            >
              <option>2-4 Years</option>
              <option>4-6 Years</option>
              <option>6-8 Years</option>
            </select>
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Status
            </label>

            <select
              name="status"
              value={teacher.status}
              onChange={handleChange}
              className="w-full border rounded-xl p-3"
            >
              <option>Active</option>
              <option>Inactive</option>
            </select>
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Profile Photo
            </label>

            <input
              type="file"
              className="w-full border rounded-xl p-3"
            />
          </div>

        </div>

        {/* Footer */}

        <div className="flex justify-end gap-4 mt-8">

          <Link
            href="/admin/teachers"
            className="px-6 py-3 border rounded-xl hover:bg-slate-100"
          >
            Cancel
          </Link>

          <button
            onClick={handleSubmit}
            className="px-8 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white"
          >
            Update Teacher
          </button>

        </div>

      </div>
    </div>
  );
}