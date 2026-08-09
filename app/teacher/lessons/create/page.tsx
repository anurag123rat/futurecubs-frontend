// app/teacher/lessons/create/page.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import api from "@/lib/axios";

export default function CreateLessonPage() {
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [ageGroupMin, setAgeGroupMin] = useState(2);
  const [ageGroupMax, setAgeGroupMax] = useState(4);
  const [slidesUrl, setSlidesUrl] = useState("");
  const [status, setStatus] = useState<"active" | "draft">("draft");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!title.trim()) {
      setError("Title zaroori hai");
      return;
    }
    if (ageGroupMin > ageGroupMax) {
      setError("Min age, max age se zyada nahi ho sakti");
      return;
    }

    setSubmitting(true);
    try {
      const res = await api.post("/lessons", {
        title,
        description,
        ageGroupMin,
        ageGroupMax,
        slidesUrl,
        status,
      });

      const newLessonId = res.data.lesson._id;
      // Lesson bante hi seedha activities attach karne wale page pe le jao
      router.push(`/teacher/lessons/${newLessonId}/activities`);
    } catch (err: any) {
      setError(err.response?.data?.message || "Lesson create nahi ho paya");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-slate-800">Create Lesson</h1>
        <p className="text-slate-500 mt-1">
          Naya lesson plan banao — baad mein isme activities jodo.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="bg-white border rounded-2xl p-6 space-y-5"
      >
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">
            Lesson Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="e.g. Colors Learning"
            className="w-full border rounded-lg px-3 py-2"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">
            Description
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Short description (optional)"
            className="w-full border rounded-lg px-3 py-2"
            rows={2}
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Age Group Min
            </label>
            <input
              type="number"
              value={ageGroupMin}
              onChange={(e) => setAgeGroupMin(Number(e.target.value))}
              min={2}
              max={8}
              className="w-full border rounded-lg px-3 py-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Age Group Max
            </label>
            <input
              type="number"
              value={ageGroupMax}
              onChange={(e) => setAgeGroupMax(Number(e.target.value))}
              min={2}
              max={8}
              className="w-full border rounded-lg px-3 py-2"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">
            Slides Link (Google Drive)
          </label>
          <input
            type="url"
            value={slidesUrl}
            onChange={(e) => setSlidesUrl(e.target.value)}
            placeholder="https://drive.google.com/..."
            className="w-full border rounded-lg px-3 py-2"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">
            Status
          </label>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value as "active" | "draft")}
            className="w-full border rounded-lg px-3 py-2"
          >
            <option value="draft">Draft</option>
            <option value="active">Ready (Published)</option>
          </select>
        </div>

        {error && <p className="text-red-600 text-sm">{error}</p>}

        <div className="flex justify-end gap-3 pt-2">
          <button
            type="button"
            onClick={() => router.back()}
            className="px-5 py-2 rounded-lg border hover:bg-slate-100"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={submitting}
            className="px-5 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50"
          >
            {submitting ? "Creating..." : "Create Lesson"}
          </button>
        </div>
      </form>
    </div>
  );
}