"use client";

import { useState } from "react";
import Link from "next/link";

export default function EditAgeGroupPage() {
  const [form, setForm] = useState({
    name: "2-4 Years",
    minAge: "24",
    maxAge: "47",
    description:
      "This age group focuses on cognitive development, colors, shapes, language skills and fun learning activities.",
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
    alert("Age Group Updated Successfully");
  };

  return (
    <div className="max-w-5xl mx-auto space-y-6">

      {/* Header */}

      <div className="flex items-center justify-between">

        <div>

          <h1 className="text-3xl font-bold text-slate-800">
            Edit Age Group
          </h1>

          <p className="text-slate-500 mt-2">
            Update learning age group details.
          </p>

        </div>

        <Link
          href="/admin/age-groups"
          className="px-5 py-3 border rounded-xl hover:bg-slate-100"
        >
          Back
        </Link>

      </div>

      {/* Form */}

      <div className="bg-white rounded-2xl border shadow-sm p-8">

        <div className="grid md:grid-cols-2 gap-6">

          {/* Age Group Name */}

          <div>
            <label className="block font-medium mb-2">
              Age Group Name
            </label>

            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full border rounded-xl p-3"
            />
          </div>

          {/* Status */}

          <div>
            <label className="block font-medium mb-2">
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

          {/* Min Age */}

          <div>
            <label className="block font-medium mb-2">
              Minimum Age (Months)
            </label>

            <input
              type="number"
              name="minAge"
              value={form.minAge}
              onChange={handleChange}
              className="w-full border rounded-xl p-3"
            />
          </div>

          {/* Max Age */}

          <div>
            <label className="block font-medium mb-2">
              Maximum Age (Months)
            </label>

            <input
              type="number"
              name="maxAge"
              value={form.maxAge}
              onChange={handleChange}
              className="w-full border rounded-xl p-3"
            />
          </div>

          {/* Description */}

          <div className="md:col-span-2">

            <label className="block font-medium mb-2">
              Description
            </label>

            <textarea
              rows={5}
              name="description"
              value={form.description}
              onChange={handleChange}
              className="w-full border rounded-xl p-3"
            />

          </div>

        </div>

        {/* Summary */}

        <div className="mt-8 rounded-xl bg-slate-50 border p-5">

          <h3 className="font-semibold text-lg mb-3">
            Preview
          </h3>

          <div className="grid md:grid-cols-2 gap-4">

            <div>

              <p className="text-slate-500 text-sm">
                Age Group
              </p>

              <p className="font-semibold">
                {form.name}
              </p>

            </div>

            <div>

              <p className="text-slate-500 text-sm">
                Age Range
              </p>

              <p className="font-semibold">
                {form.minAge} - {form.maxAge} Months
              </p>

            </div>

            <div>

              <p className="text-slate-500 text-sm">
                Status
              </p>

              <p className="font-semibold">
                {form.status}
              </p>

            </div>

          </div>

        </div>

        {/* Footer */}

        <div className="flex justify-end gap-4 mt-8">

          <Link
            href="/admin/age-groups"
            className="px-6 py-3 border rounded-xl hover:bg-slate-100"
          >
            Cancel
          </Link>

          <button
            onClick={handleSubmit}
            className="px-8 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white"
          >
            Update Age Group
          </button>

        </div>

      </div>

    </div>
  );
}