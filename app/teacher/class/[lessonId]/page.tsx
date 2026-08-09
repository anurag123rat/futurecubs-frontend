
"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import api from "@/lib/axios";

interface ActivityTemplate {
  _id: string;
  title: string;
  activityType: string;
}

interface Lesson {
  _id: string;
  title: string;
  slidesUrl?: string;
  activityTemplateIds: ActivityTemplate[];
}

interface Student {
  _id: string;
  firstName: string;
  lastName?: string;
  age: number;
}

export default function StartClassPage() {
  const { lessonId } = useParams();
  const router = useRouter();

  const [lesson, setLesson] = useState<Lesson | null>(null);
  const [students, setStudents] = useState<Student[]>([]);
  const [selectedStudentId, setSelectedStudentId] = useState("");
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [startingActivity, setStartingActivity] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetchData();
  }, [lessonId]);

  const fetchData = async () => {
    try {
      const [lessonRes, studentsRes] = await Promise.all([
        api.get(`/lessons/${lessonId}`),
        api.get(`/students/teacher`),
      ]);
      setLesson(lessonRes.data.lesson);
      setStudents(studentsRes.data.students);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleStartCurrentActivity = async () => {
    if (!selectedStudentId || !lesson) return;

    const template = lesson.activityTemplateIds[currentIndex];
    setStartingActivity(true);
    setMessage("");

    try {
      await api.post("/activities/start", {
        studentId: selectedStudentId,
        templateId: template._id,
      });
      setMessage(`"${template.title}" start ho gayi — parent ke portal pe live hai.`);
    } catch (error: any) {
      setMessage(error.response?.data?.message || "Activity start nahi ho payi");
    } finally {
      setStartingActivity(false);
    }
  };

  const handleNext = () => {
    if (!lesson) return;
    if (currentIndex < lesson.activityTemplateIds.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setMessage("");
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setMessage("");
    }
  };

  if (loading) return <div className="p-6">Loading...</div>;
  if (!lesson) return <div className="p-6">Lesson not found.</div>;

  const currentTemplate = lesson.activityTemplateIds[currentIndex];

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-slate-800">{lesson.title}</h1>
        {lesson.slidesUrl && (
          
            <a href={lesson.slidesUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 text-sm underline mt-1 inline-block"
          >
            Open Slides (Google Drive)
          </a>
        )}
      </div>

      {/* Student selection */}
      <div className="bg-white border rounded-2xl p-5">
        <label className="block text-sm font-medium text-slate-700 mb-2">
          Student
        </label>
        <select
          value={selectedStudentId}
          onChange={(e) => setSelectedStudentId(e.target.value)}
          className="w-full border rounded-lg px-3 py-2"
        >
          <option value="">-- Select Student --</option>
          {students.map((s) => (
            <option key={s._id} value={s._id}>
              {s.firstName} {s.lastName} ({s.age} yrs)
            </option>
          ))}
        </select>
      </div>

      {/* Activity queue */}
      {lesson.activityTemplateIds.length === 0 ? (
        <div className="bg-white rounded-2xl border p-10 text-center text-slate-500">
          Is lesson mein koi activity attach nahi hai.
        </div>
      ) : (
        <div className="bg-white border rounded-2xl p-6 space-y-5">
          <div className="flex items-center justify-between">
            <p className="text-sm text-slate-500">
              Activity {currentIndex + 1} of {lesson.activityTemplateIds.length}
            </p>
            <div className="flex gap-1">
              {lesson.activityTemplateIds.map((_, i) => (
                <div
                  key={i}
                  className={`w-2.5 h-2.5 rounded-full ${
                    i === currentIndex
                      ? "bg-blue-600"
                      : i < currentIndex
                      ? "bg-green-500"
                      : "bg-slate-200"
                  }`}
                />
              ))}
            </div>
          </div>

          <h2 className="text-2xl font-semibold text-slate-800">
            {currentTemplate.title}
          </h2>
          <p className="text-slate-500">{currentTemplate.activityType}</p>

          {message && (
            <div className="p-3 rounded-lg bg-blue-50 text-blue-700 text-sm">
              {message}
            </div>
          )}

          <button
            onClick={handleStartCurrentActivity}
            disabled={!selectedStudentId || startingActivity}
            className="w-full bg-green-600 text-white py-3 rounded-xl font-semibold disabled:opacity-40"
          >
            {startingActivity ? "Starting..." : `Start "${currentTemplate.title}"`}
          </button>

          <div className="flex justify-between pt-2">
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className="px-5 py-2 rounded-lg border hover:bg-slate-100 disabled:opacity-40"
            >
              ← Previous
            </button>

            {currentIndex < lesson.activityTemplateIds.length - 1 ? (
              <button
                onClick={handleNext}
                className="px-5 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
              >
                Next Activity →
              </button>
            ) : (
              <button
                onClick={() => router.push("/teacher/lessons")}
                className="px-5 py-2 rounded-lg bg-slate-800 text-white hover:bg-slate-900"
              >
                Finish Class
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}