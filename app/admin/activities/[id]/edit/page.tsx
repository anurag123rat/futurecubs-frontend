"use client";

import { useState } from "react";
import Link from "next/link";

interface ActivityForm {
  code: string;
  name: string;
  type: string;
  lesson: string;
  ageGroup: string;
  difficulty: string;
  instructions: string;
  status: string;
  version: string;
}

export default function EditActivityPage() {
  const [form, setForm] = useState<ActivityForm>({
    code: "ACT-001",
    name: "Color Matching",
    type: "Matching",
    lesson: "Colors Learning",
    ageGroup: "2-4 Years",
    difficulty: "Easy",
    instructions:
      "Match each object with the correct colour.",
    status: "Published",
    version: "v1.0",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement |
      HTMLTextAreaElement |
      HTMLSelectElement
    >
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    console.log(form);
    alert("Activity Updated Successfully");
  };

  return (
    <div className="max-w-6xl mx-auto space-y-6">

      <div className="flex justify-between items-center">

        <div>
          <h1 className="text-3xl font-bold">
            Edit Activity
          </h1>

          <p className="text-slate-500 mt-2">
            Update activity information.
          </p>
        </div>

        <Link
          href="/admin/activities"
          className="border rounded-xl px-5 py-3 hover:bg-slate-100"
        >
          Back
        </Link>

      </div>

      <div className="bg-white rounded-2xl border p-8 shadow-sm">

        <div className="grid md:grid-cols-2 gap-6">

          <div>
            <label className="block mb-2 font-medium">
              Activity Code
            </label>

            <input
              value={form.code}
              readOnly
              className="w-full border rounded-xl bg-slate-100 p-3"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Version
            </label>

            <input
              name="version"
              value={form.version}
              onChange={handleChange}
              className="w-full border rounded-xl p-3"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Activity Name
            </label>

            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full border rounded-xl p-3"
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
              className="w-full border rounded-xl p-3"
            >
              <option>Draft</option>
              <option>Published</option>
              <option>Archived</option>
            </select>
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Activity Type
            </label>

            <select
              name="type"
              value={form.type}
              onChange={handleChange}
              className="w-full border rounded-xl p-3"
            >
              <option>Matching</option>
              <option>Drag & Drop</option>
              <option>Quiz</option>
              <option>Flash Card</option>
              <option>Puzzle</option>
              <option>Tracing</option>
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
              className="w-full border rounded-xl p-3"
            >
              <option>Colors Learning</option>
              <option>Shapes Learning</option>
              <option>Numbers Learning</option>
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
              className="w-full border rounded-xl p-3"
            >
              <option>2-4 Years</option>
              <option>4-6 Years</option>
              <option>6-8 Years</option>
            </select>
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Difficulty
            </label>

            <select
              name="difficulty"
              value={form.difficulty}
              onChange={handleChange}
              className="w-full border rounded-xl p-3"
            >
              <option>Easy</option>
              <option>Medium</option>
              <option>Hard</option>
            </select>
          </div>

        </div>

        <div className="mt-8">

          <label className="block mb-2 font-medium">
            Instructions
          </label>

          <textarea
            rows={5}
            name="instructions"
            value={form.instructions}
            onChange={handleChange}
            className="w-full border rounded-xl p-3"
          />

        </div>

        {/* Existing Resources */}

        <div className="grid md:grid-cols-2 gap-6 mt-8">

          <div className="border rounded-xl p-5">

            <h3 className="font-semibold mb-3">
              Images
            </h3>

            <p className="text-slate-500 mb-4">
              4 Images Uploaded
            </p>

            <input
              type="file"
              multiple
              accept="image/*"
            />

          </div>

          <div className="border rounded-xl p-5">

            <h3 className="font-semibold mb-3">
              Audio Files
            </h3>

            <p className="text-slate-500 mb-4">
              2 Audio Uploaded
            </p>

            <input
              type="file"
              multiple
              accept="audio/*"
            />

          </div>

        </div>

        {/* Builder */}

        <div className="mt-8 rounded-xl border bg-slate-50 p-6">

          <h2 className="text-xl font-semibold mb-6">
            Activity Builder
          </h2>

          {form.type === "Matching" && (

            <div className="space-y-4">

              <input
                placeholder="Apple → Red"
                className="w-full border rounded-xl p-3"
              />

              <input
                placeholder="Banana → Yellow"
                className="w-full border rounded-xl p-3"
              />

              <input
                placeholder="Sky → Blue"
                className="w-full border rounded-xl p-3"
              />

            </div>

          )}

          {form.type === "Drag & Drop" && (

            <div className="grid md:grid-cols-2 gap-6">

              <textarea
                rows={6}
                placeholder="Left Items"
                className="border rounded-xl p-3"
              />

              <textarea
                rows={6}
                placeholder="Right Items"
                className="border rounded-xl p-3"
              />

            </div>

          )}

        </div>

        {/* Footer */}

        <div className="flex justify-between mt-10">

          <button className="bg-red-600 text-white px-6 py-3 rounded-xl hover:bg-red-700">
            Archive Activity
          </button>

          <div className="flex gap-4">

            <Link
              href="/admin/activities"
              className="border px-6 py-3 rounded-xl"
            >
              Cancel
            </Link>

            <button
              onClick={handleSubmit}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl"
            >
              Update Activity
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}