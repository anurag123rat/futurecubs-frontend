"use client";

import { useState } from "react";

export default function CreateTeacherPage() {
  const [teacher, setTeacher] = useState({
    name: "",
    email: "",
    phone: "",
    qualification: "",
    experience: "",
    specialization: "",
    ageGroup: "",
    password: "",
    confirmPassword: "",
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
    console.log(teacher);
    alert("Teacher Created Successfully");
  };

  return (
    <div className="max-w-5xl mx-auto space-y-6">

      <div>
        <h1 className="text-3xl font-bold text-slate-800">
          Create Teacher
        </h1>

        <p className="text-slate-500 mt-1">
          Add a new teacher to your institute.
        </p>
      </div>

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
              placeholder="Enter teacher name"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Email Address
            </label>

            <input
              type="email"
              name="email"
              value={teacher.email}
              onChange={handleChange}
              className="w-full border rounded-xl p-3"
              placeholder="teacher@email.com"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Phone Number
            </label>

            <input
              name="phone"
              value={teacher.phone}
              onChange={handleChange}
              className="w-full border rounded-xl p-3"
              placeholder="+91 9876543210"
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
              placeholder="B.Ed / M.Ed"
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
              placeholder="5 Years"
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
              placeholder="Early Childhood Education"
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
              <option value="">
                Select Age Group
              </option>

              <option>2-4 Years</option>

              <option>4-6 Years</option>

              <option>6-8 Years</option>
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

          <div>
            <label className="block mb-2 font-medium">
              Password
            </label>

            <input
              type="password"
              name="password"
              value={teacher.password}
              onChange={handleChange}
              className="w-full border rounded-xl p-3"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Confirm Password
            </label>

            <input
              type="password"
              name="confirmPassword"
              value={teacher.confirmPassword}
              onChange={handleChange}
              className="w-full border rounded-xl p-3"
            />
          </div>

        </div>

        <div className="flex justify-end mt-8 gap-4">

          <button
            className="px-6 py-3 border rounded-xl hover:bg-slate-100"
          >
            Cancel
          </button>

          <button
            onClick={handleSubmit}
            className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl"
          >
            Create Teacher
          </button>

        </div>

      </div>

    </div>
  );
}