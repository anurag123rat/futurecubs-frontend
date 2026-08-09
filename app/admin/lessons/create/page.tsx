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
  coverImage: File | null;
  ppt: File | null;
  tags: string;
}

export default function CreateLessonPage() {
  const [form, setForm] = useState<LessonForm>({
    lessonCode: "LES-0004",
    title: "",
    description: "",
    ageGroup: "",
    teacher: "",
    duration: "30",
    difficulty: "Easy",
    status: "Draft",
    coverImage: null,
    ppt: null,
    tags: "",
  });

  const handleInput = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleFile = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0];

    if (!file) return;

    setForm({
      ...form,
      [e.target.name]: file,
    });
  };

  const handleSubmit = () => {
    console.log(form);
    alert("Lesson Created Successfully");
  };

  return (
    <div className="max-w-6xl mx-auto space-y-6">

      <div className="flex justify-between items-center">

        <div>
          <h1 className="text-3xl font-bold">
            Create Lesson
          </h1>

          <p className="text-slate-500 mt-2">
            Create a new lesson for students.
          </p>
        </div>

        <Link
          href="/admin/lessons"
          className="border rounded-xl px-5 py-3 hover:bg-slate-100"
        >
          Back
        </Link>

      </div>

      <div className="bg-white border rounded-2xl shadow-sm p-8">

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
              Status
            </label>

            <select
              name="status"
              value={form.status}
              onChange={handleInput}
              className="w-full rounded-xl border p-3"
            >
              <option>Draft</option>
              <option>Published</option>
            </select>
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Lesson Name
            </label>

            <input
              name="title"
              value={form.title}
              onChange={handleInput}
              className="w-full rounded-xl border p-3"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Age Group
            </label>

            <select
              name="ageGroup"
              value={form.ageGroup}
              onChange={handleInput}
              className="w-full rounded-xl border p-3"
            >
              <option value="">Select</option>
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
              onChange={handleInput}
              className="w-full rounded-xl border p-3"
            >
              <option value="">Select</option>
              <option>Priya Sharma</option>
              <option>Amit Verma</option>
              <option>Neha Singh</option>
            </select>
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Duration (Minutes)
            </label>

            <input
              type="number"
              name="duration"
              value={form.duration}
              onChange={handleInput}
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
              onChange={handleInput}
              className="w-full rounded-xl border p-3"
            >
              <option>Easy</option>
              <option>Medium</option>
              <option>Hard</option>
            </select>
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Tags
            </label>

            <input
              name="tags"
              value={form.tags}
              onChange={handleInput}
              placeholder="colors, matching, preschool"
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
              onChange={handleInput}
              className="w-full rounded-xl border p-3"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Cover Image
            </label>

            <input
              type="file"
              name="coverImage"
              accept="image/*"
              onChange={handleFile}
              className="w-full rounded-xl border p-3"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              PPT Upload
            </label>

            <input
              type="file"
              name="ppt"
              accept=".ppt,.pptx"
              onChange={handleFile}
              className="w-full rounded-xl border p-3"
            />
          </div>

        </div>

        <div className="flex justify-end gap-4 mt-10">

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
            Create Lesson
          </button>

        </div>

      </div>

    </div>
  );
}