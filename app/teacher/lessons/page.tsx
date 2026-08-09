// app/teacher/lessons/page.tsx
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import api from "@/lib/axios";

interface ActivityTemplate {
  _id: string;
  title: string;
}

interface Lesson {
  _id: string;
  title: string;
  ageGroupMin: number;
  ageGroupMax: number;
  slidesUrl?: string;
  activityTemplateIds: ActivityTemplate[];
  status: "active" | "draft";
}

export default function LessonsPage() {
  const [lessons, setLessons] = useState<Lesson[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchLessons();
  }, []);

  const fetchLessons = async () => {
    try {
      const res = await api.get("/lessons");
      setLessons(res.data.lessons);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div className="p-6">Loading lessons...</div>;

  const total = lessons.length;
  const published = lessons.filter((l) => l.status === "active").length;
  const drafts = lessons.filter((l) => l.status === "draft").length;

  const ageGroupBadgeClass = (min: number, max: number) => {
    if (min === 2) return "bg-pink-100 text-pink-700";
    if (min === 4) return "bg-blue-100 text-blue-700";
    return "bg-purple-100 text-purple-700";
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-800">Lessons</h1>
          <p className="text-slate-500 mt-1">
            Manage lesson plans, slides and activities.
          </p>
        </div>

        <Link
          href="/teacher/lessons/create"
          className="px-5 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition inline-block"
        >
          + Create Lesson
        </Link>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="bg-white rounded-2xl p-5 shadow-sm border">
          <h3 className="text-slate-500">Total Lessons</h3>
          <p className="text-3xl font-bold mt-2">{total}</p>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow-sm border">
          <h3 className="text-slate-500">Published</h3>
          <p className="text-3xl font-bold mt-2">{published}</p>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow-sm border">
          <h3 className="text-slate-500">Draft Lessons</h3>
          <p className="text-3xl font-bold mt-2">{drafts}</p>
        </div>
      </div>

      {/* Lessons Grid */}
      {lessons.length === 0 ? (
        <div className="bg-white rounded-2xl border p-10 text-center text-slate-500">
          Koi lesson nahi bana abhi tak. "+ Create Lesson" se shuru karo.
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {lessons.map((lesson) => (
            <div
              key={lesson._id}
              className="bg-white border rounded-2xl p-5 shadow-sm hover:shadow-md transition"
            >
              <div className="flex items-start justify-between">
                <h2 className="text-xl font-semibold text-slate-800">
                  {lesson.title}
                </h2>

                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium ${
                    lesson.status === "active"
                      ? "bg-green-100 text-green-700"
                      : "bg-yellow-100 text-yellow-700"
                  }`}
                >
                  {lesson.status === "active" ? "Ready" : "Draft"}
                </span>
              </div>

              <div className="mt-2">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium ${ageGroupBadgeClass(
                    lesson.ageGroupMin,
                    lesson.ageGroupMax
                  )}`}
                >
                  {lesson.ageGroupMin}-{lesson.ageGroupMax} Years
                </span>
              </div>

              <div className="mt-5 space-y-2 text-slate-600">
                <p>🎯 Activities: {lesson.activityTemplateIds.length}</p>
              </div>

              <div className="mt-5">
                <Link
                  href={`/teacher/lessons/${lesson._id}/activities`}
                  className="inline-block bg-purple-600 text-white py-2 px-3 rounded-lg hover:bg-purple-700 text-center"
                >
                  Activities
                </Link>
              </div>

              <div className="flex gap-3 mt-6">
                <Link
                  href={`/teacher/lessons/${lesson._id}/edit`}
                  className="flex-1 border border-slate-300 py-2 rounded-lg hover:bg-slate-100 text-center"
                >
                  Edit
                </Link>

                <Link
                  href={`/teacher/class/${lesson._id}`}
                  className="flex-1 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 text-center"
                >
                  Start Class
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}