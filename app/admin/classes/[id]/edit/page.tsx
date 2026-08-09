"use client";

import { useState } from "react";
import Link from "next/link";

export default function EditClassPage() {
  const [form, setForm] = useState({
    classCode: "CL-0001",
    className: "Sunshine A",
    teacher: "Priya Sharma",
    ageGroup: "2-4 Years",
    lesson: "Colors Learning",
    maxStudents: "15",
    startDate: "2026-06-10",
    startTime: "10:00",
    duration: "45",
    meetingLink: "https://meet.google.com/demo",
    status: "Active",
    schedule: ["Monday", "Wednesday", "Friday"],
  });

  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const toggleDay = (day: string) => {
    if (form.schedule.includes(day)) {
      setForm({
        ...form,
        schedule: form.schedule.filter((d) => d !== day),
      });
    } else {
      setForm({
        ...form,
        schedule: [...form.schedule, day],
      });
    }
  };

  const handleSubmit = () => {
    alert("Class Updated Successfully");
    console.log(form);
  };

  return (
    <div className="max-w-6xl mx-auto space-y-6">

      <div className="flex justify-between items-center">

        <div>
          <h1 className="text-3xl font-bold">
            Edit Class
          </h1>

          <p className="text-slate-500 mt-2">
            Update class information.
          </p>
        </div>

        <Link
          href="/admin/classes"
          className="border px-5 py-3 rounded-xl hover:bg-slate-100"
        >
          Back
        </Link>

      </div>

      <div className="bg-white rounded-2xl border shadow-sm p-8">

        <div className="grid md:grid-cols-2 gap-6">

          <div>
            <label className="block mb-2 font-medium">
              Class Code
            </label>

            <input
              value={form.classCode}
              readOnly
              className="w-full rounded-xl border bg-slate-100 p-3"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Status
            </label>

            <select
              name="status"
              value={form.status}
              onChange={handleChange}
              className="w-full rounded-xl border p-3"
            >
              <option>Active</option>
              <option>Inactive</option>
            </select>
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Class Name
            </label>

            <input
              name="className"
              value={form.className}
              onChange={handleChange}
              className="w-full rounded-xl border p-3"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Teacher
            </label>

            <select
              name="teacher"
              value={form.teacher}
              onChange={handleChange}
              className="w-full rounded-xl border p-3"
            >
              <option>Priya Sharma</option>
              <option>Amit Verma</option>
              <option>Neha Singh</option>
            </select>
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Age Group
            </label>

            <select
              name="ageGroup"
              value={form.ageGroup}
              onChange={handleChange}
              className="w-full rounded-xl border p-3"
            >
              <option>2-4 Years</option>
              <option>4-6 Years</option>
              <option>6-8 Years</option>
            </select>
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Lesson
            </label>

            <select
              name="lesson"
              value={form.lesson}
              onChange={handleChange}
              className="w-full rounded-xl border p-3"
            >
              <option>Colors Learning</option>
              <option>Shapes Learning</option>
              <option>Numbers Learning</option>
            </select>
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Maximum Students
            </label>

            <input
              type="number"
              name="maxStudents"
              value={form.maxStudents}
              onChange={handleChange}
              className="w-full rounded-xl border p-3"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Duration
            </label>

            <input
              type="number"
              name="duration"
              value={form.duration}
              onChange={handleChange}
              className="w-full rounded-xl border p-3"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Start Date
            </label>

            <input
              type="date"
              name="startDate"
              value={form.startDate}
              onChange={handleChange}
              className="w-full rounded-xl border p-3"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Start Time
            </label>

            <input
              type="time"
              name="startTime"
              value={form.startTime}
              onChange={handleChange}
              className="w-full rounded-xl border p-3"
            />
          </div>

          <div className="md:col-span-2">
            <label className="block mb-2 font-medium">
              Meeting Link
            </label>

            <input
              name="meetingLink"
              value={form.meetingLink}
              onChange={handleChange}
              className="w-full rounded-xl border p-3"
            />
          </div>

        </div>

        <div className="mt-8">

          <h3 className="font-semibold mb-4">
            Weekly Schedule
          </h3>

          <div className="flex flex-wrap gap-3">

            {days.map((day) => (
              <button
                type="button"
                key={day}
                onClick={() => toggleDay(day)}
                className={`px-5 py-2 rounded-xl border ${
                  form.schedule.includes(day)
                    ? "bg-blue-600 text-white"
                    : "bg-white"
                }`}
              >
                {day}
              </button>
            ))}

          </div>

        </div>

        <div className="flex justify-end gap-4 mt-10">

          <Link
            href="/admin/classes"
            className="border px-6 py-3 rounded-xl"
          >
            Cancel
          </Link>

          <button
            onClick={handleSubmit}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl"
          >
            Update Class
          </button>

        </div>

      </div>

    </div>
  );
}