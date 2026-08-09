"use client";

import { useState } from "react";

export default function CreateAgeGroupPage() {
  const [form, setForm] = useState({
    name: "",
    minAge: "",
    maxAge: "",
    description: "",
    status: "Active",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    console.log(form);
    alert("Age Group Created Successfully");
  };

  return (
    <div className="max-w-5xl mx-auto space-y-6">

      <div>
        <h1 className="text-3xl font-bold">
          Create Age Group
        </h1>

        <p className="text-slate-500 mt-2">
          Create a new learning age group.
        </p>
      </div>

      <div className="bg-white rounded-2xl border p-8 shadow-sm">

        <div className="grid md:grid-cols-2 gap-6">

          <div>
            <label className="font-medium block mb-2">
              Age Group Name
            </label>

            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="2-4 Years"
              className="w-full border rounded-xl p-3"
            />
          </div>

          <div>
            <label className="font-medium block mb-2">
              Status
            </label>

            <select
              name="status"
              value={form.status}
              onChange={handleChange}
              className="w-full border rounded-xl p-3"
            >
              <option>Active</option>
              <option>Inactive</option>
            </select>
          </div>

          <div>
            <label className="font-medium block mb-2">
              Minimum Age (Months)
            </label>

            <input
              type="number"
              name="minAge"
              value={form.minAge}
              onChange={handleChange}
              placeholder="24"
              className="w-full border rounded-xl p-3"
            />
          </div>

          <div>
            <label className="font-medium block mb-2">
              Maximum Age (Months)
            </label>

            <input
              type="number"
              name="maxAge"
              value={form.maxAge}
              onChange={handleChange}
              placeholder="47"
              className="w-full border rounded-xl p-3"
            />
          </div>

          <div className="md:col-span-2">
            <label className="font-medium block mb-2">
              Description
            </label>

            <textarea
              rows={5}
              name="description"
              value={form.description}
              onChange={handleChange}
              placeholder="Write description..."
              className="w-full border rounded-xl p-3"
            />
          </div>

        </div>

        <div className="flex justify-end gap-4 mt-8">

          <button className="border px-6 py-3 rounded-xl">
            Cancel
          </button>

          <button
            onClick={handleSubmit}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl"
          >
            Create Age Group
          </button>

        </div>

      </div>

    </div>
  );
}