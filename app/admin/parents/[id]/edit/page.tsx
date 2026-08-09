"use client";

import { useState } from "react";
import Link from "next/link";

export default function EditParentPage() {
  const [parent, setParent] = useState({
    parentId: "EP-0001",

    fatherName: "Rahul Sharma",
    motherName: "Priya Sharma",

    guardianName: "",

    relationship: "Father",

    phone: "9876543210",

    email: "rahul@gmail.com",

    occupation: "Software Engineer",

    address: "Sector 56, Gurgaon",

    emergencyContact: "9999999999",

    student: "Aarav Sharma",

    canPickup: "Yes",

    status: "Active",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setParent({
      ...parent,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    console.log(parent);

    alert("Parent Updated Successfully");
  };

  return (
    <div className="max-w-6xl mx-auto space-y-6">

      {/* Header */}

      <div className="flex justify-between items-center">

        <div>

          <h1 className="text-3xl font-bold">
            Edit Parent
          </h1>

          <p className="text-slate-500 mt-2">
            Update parent information.
          </p>

        </div>

        <Link
          href="/admin/parents"
          className="px-5 py-3 border rounded-xl hover:bg-slate-100"
        >
          Back
        </Link>

      </div>

      {/* Form */}

      <div className="bg-white rounded-2xl border shadow-sm p-8">

        <div className="grid md:grid-cols-2 gap-6">

          {/* Parent ID */}

          <div>

            <label className="block mb-2 font-medium">
              Parent ID
            </label>

            <input
              value={parent.parentId}
              readOnly
              className="w-full rounded-xl border bg-slate-100 p-3 cursor-not-allowed"
            />

          </div>

          {/* Status */}

          <div>

            <label className="block mb-2 font-medium">
              Status
            </label>

            <select
              name="status"
              value={parent.status}
              onChange={handleChange}
              className="w-full rounded-xl border p-3"
            >
              <option>Active</option>
              <option>Inactive</option>
            </select>

          </div>

          {/* Father */}

          <div>

            <label className="block mb-2 font-medium">
              Father Name
            </label>

            <input
              name="fatherName"
              value={parent.fatherName}
              onChange={handleChange}
              className="w-full rounded-xl border p-3"
            />

          </div>

          {/* Mother */}

          <div>

            <label className="block mb-2 font-medium">
              Mother Name
            </label>

            <input
              name="motherName"
              value={parent.motherName}
              onChange={handleChange}
              className="w-full rounded-xl border p-3"
            />

          </div>

          {/* Guardian */}

          <div>

            <label className="block mb-2 font-medium">
              Guardian Name
            </label>

            <input
              name="guardianName"
              value={parent.guardianName}
              onChange={handleChange}
              className="w-full rounded-xl border p-3"
            />

          </div>

          {/* Relationship */}

          <div>

            <label className="block mb-2 font-medium">
              Relationship
            </label>

            <select
              name="relationship"
              value={parent.relationship}
              onChange={handleChange}
              className="w-full rounded-xl border p-3"
            >
              <option>Father</option>
              <option>Mother</option>
              <option>Guardian</option>
            </select>

          </div>

          {/* Phone */}

          <div>

            <label className="block mb-2 font-medium">
              Phone
            </label>

            <input
              name="phone"
              value={parent.phone}
              onChange={handleChange}
              className="w-full rounded-xl border p-3"
            />

          </div>

          {/* Email */}

          <div>

            <label className="block mb-2 font-medium">
              Email
            </label>

            <input
              type="email"
              name="email"
              value={parent.email}
              onChange={handleChange}
              className="w-full rounded-xl border p-3"
            />

          </div>

          {/* Occupation */}

          <div>

            <label className="block mb-2 font-medium">
              Occupation
            </label>

            <input
              name="occupation"
              value={parent.occupation}
              onChange={handleChange}
              className="w-full rounded-xl border p-3"
            />

          </div>

          {/* Student */}

          <div>

            <label className="block mb-2 font-medium">
              Linked Student
            </label>

            <select
              name="student"
              value={parent.student}
              onChange={handleChange}
              className="w-full rounded-xl border p-3"
            >
              <option>Aarav Sharma</option>
              <option>Siya Verma</option>
              <option>Kabir Singh</option>
            </select>

          </div>

          {/* Emergency */}

          <div>

            <label className="block mb-2 font-medium">
              Emergency Contact
            </label>

            <input
              name="emergencyContact"
              value={parent.emergencyContact}
              onChange={handleChange}
              className="w-full rounded-xl border p-3"
            />

          </div>

          {/* Pickup */}

          <div>

            <label className="block mb-2 font-medium">
              Can Pickup Child?
            </label>

            <select
              name="canPickup"
              value={parent.canPickup}
              onChange={handleChange}
              className="w-full rounded-xl border p-3"
            >
              <option>Yes</option>
              <option>No</option>
            </select>

          </div>

          {/* Address */}

          <div className="md:col-span-2">

            <label className="block mb-2 font-medium">
              Address
            </label>

            <textarea
              rows={4}
              name="address"
              value={parent.address}
              onChange={handleChange}
              className="w-full rounded-xl border p-3"
            />

          </div>

        </div>

        {/* Footer */}

        <div className="flex justify-end gap-4 mt-8">

          <Link
            href="/admin/parents"
            className="px-6 py-3 border rounded-xl hover:bg-slate-100"
          >
            Cancel
          </Link>

          <button
            onClick={handleSubmit}
            className="px-8 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white"
          >
            Update Parent
          </button>

        </div>

      </div>

    </div>
  );
}   