"use client";

import { useState } from "react";
import Link from "next/link";

interface LessonForm {
  lessonCode: string;
  title: string;
  description: string;
  ageGroup: string;
  teacher: string;
  duration: string;
  difficulty: string;
  status: string;
  version: string;
  tags: string;
}

export default function EditLessonPage() {
  const [form, setForm] = useState<LessonForm>({
    lessonCode: "LES-0001",
    title: "Colors Learning",
    description:
      "Children learn basic colors using PPT and activities.",
    ageGroup: "2-4 Years",
    teacher: "Priya Sharma",
    duration: "30",
    difficulty: "Easy",
    status: "Published",
    version: "v1.0",
    tags: "colors,preschool,matching",
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
    alert("Lesson Updated Successfully");
  };

  return (
    <div className="max-w-6xl mx-auto space-y-6">

      <div className="flex justify-between items-center">

        <div>

          <h1 className="text-3xl font-bold">
            Edit Lesson
          </h1>

          <p className="text-slate-500 mt-2">
            Update lesson information.
          </p>

        </div>

        <Link
          href="/admin/lessons"
          className="border rounded-xl px-5 py-3 hover:bg-slate-100"
        >
          Back
        </Link>

      </div>

      <div className="bg-white rounded-2xl border shadow-sm p-8">

        <div className="grid md:grid-cols-2 gap-6">

          <div>
            <label className="block mb-2 font-medium">
              Lesson Code
            </label>

            <input
              readOnly
              value={form.lessonCode}
              className="w-full rounded-xl border bg-slate-100 p-3"
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
              className="w-full rounded-xl border p-3"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Lesson Name
            </label>

            <input
              name="title"
              value={form.title}
              onChange={handleChange}
              className="w-full rounded-xl border p-3"
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
              <option>Draft</option>
              <option>Published</option>
              <option>Archived</option>
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
              Duration
            </label>

            <input
              name="duration"
              value={form.duration}
              onChange={handleChange}
              className="w-full rounded-xl border p-3"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Difficulty
            </label>

            <select
              name="difficulty"
              value={form.difficulty}
              onChange={handleChange}
              className="w-full rounded-xl border p-3"
            >
              <option>Easy</option>
              <option>Medium</option>
              <option>Hard</option>
            </select>
          </div>

          <div className="md:col-span-2">

            <label className="block mb-2 font-medium">
              Tags
            </label>

            <input
              name="tags"
              value={form.tags}
              onChange={handleChange}
              className="w-full rounded-xl border p-3"
            />

          </div>

          <div className="md:col-span-2">

            <label className="block mb-2 font-medium">
              Description
            </label>

            <textarea
              rows={5}
              name="description"
              value={form.description}
              onChange={handleChange}
              className="w-full rounded-xl border p-3"
            />

          </div>

        </div>

        {/* Resources */}

        <div className="grid md:grid-cols-2 gap-6 mt-10">

          <div className="border rounded-xl p-5">

            <h3 className="font-semibold mb-4">
              Cover Image
            </h3>

            <img
              src="https://placehold.co/600x300"
              alt="cover"
              className="rounded-lg mb-4"
            />

            <input
              type="file"
              accept="image/*"
              className="w-full"
            />

          </div>

          <div className="border rounded-xl p-5">

            <h3 className="font-semibold mb-4">
              PPT File
            </h3>

            <p className="text-slate-500 mb-4">
              colors-learning.pptx
            </p>

            <input
              type="file"
              accept=".ppt,.pptx"
              className="w-full"
            />

          </div>

        </div>

        {/* Footer */}

        <div className="flex justify-between mt-10">

          <button className="px-6 py-3 rounded-xl bg-red-600 text-white hover:bg-red-700">
            Archive Lesson
          </button>

          <div className="flex gap-4">

            <Link
              href="/admin/lessons"
              className="border rounded-xl px-6 py-3"
            >
              Cancel
            </Link>

            <button
              onClick={handleSubmit}
              className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl px-8 py-3"
            >
              Update Lesson
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}