// app/teacher/lessons/[id]/activities/page.tsx
"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import api from "@/lib/axios";

interface ActivityTemplate {
  _id: string;
  title: string;
  activityType: string;
  ageGroupMin: number;
  ageGroupMax: number;
}

interface Lesson {
  _id: string;
  title: string;
  ageGroupMin: number;
  ageGroupMax: number;
  activityTemplateIds: ActivityTemplate[];
}

export default function LessonActivitiesPage() {
  const { id: lessonId } = useParams();
  const router = useRouter();

  const [lesson, setLesson] = useState<Lesson | null>(null);
  const [allTemplates, setAllTemplates] = useState<ActivityTemplate[]>([]);
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetchData();
  }, [lessonId]);

  const fetchData = async () => {
    try {
      const [lessonRes, templatesRes] = await Promise.all([
        api.get(`/lessons/${lessonId}`),
        api.get(`/activity-templates`),
      ]);

      const fetchedLesson = lessonRes.data.lesson;
      setLesson(fetchedLesson);
      setAllTemplates(templatesRes.data.templates);
      setSelectedIds(fetchedLesson.activityTemplateIds.map((t: ActivityTemplate) => t._id));
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const toggleTemplate = (templateId: string) => {
    setSelectedIds((prev) =>
      prev.includes(templateId)
        ? prev.filter((id) => id !== templateId)
        : [...prev, templateId]
    );
  };

  const handleSave = async () => {
    setSaving(true);
    setMessage("");
    try {
      await api.patch(`/lessons/${lessonId}/activities`, {
        activityTemplateIds: selectedIds,
      });
      setMessage("Activities saved successfully!");
    } catch (error) {
      console.error(error);
      setMessage("Save failed, please try again.");
    } finally {
      setSaving(false);
    }
  };

  if (loading) return <div className="p-6">Loading...</div>;
  if (!lesson) return <div className="p-6">Lesson not found.</div>;

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-slate-800">
          {lesson.title} — Activities
        </h1>
        <p className="text-slate-500 mt-1">
          Is lesson ke liye jitni activities chalengi unko select karo (age
          group {lesson.ageGroupMin}-{lesson.ageGroupMax} years).
        </p>
      </div>

      {message && (
        <div className="p-3 rounded-lg bg-blue-50 text-blue-700 text-sm">
          {message}
        </div>
      )}

      {allTemplates.length === 0 ? (
        <div className="bg-white rounded-2xl border p-10 text-center text-slate-500">
          Koi activity template maujood nahi. Pehle templates banao.
        </div>
      ) : (
        <div className="bg-white border rounded-2xl divide-y">
          {allTemplates.map((template) => (
            <label
              key={template._id}
              className="flex items-center gap-4 p-4 cursor-pointer hover:bg-slate-50"
            >
              <input
                type="checkbox"
                checked={selectedIds.includes(template._id)}
                onChange={() => toggleTemplate(template._id)}
                className="w-5 h-5"
              />
              <div className="flex-1">
                <p className="font-medium text-slate-800">{template.title}</p>
                <p className="text-sm text-slate-500">
                  {template.activityType} • {template.ageGroupMin}-
                  {template.ageGroupMax} years
                </p>
              </div>
            </label>
          ))}
        </div>
      )}

      <div className="flex justify-between items-center">
        <p className="text-slate-600">
          {selectedIds.length} activities selected
        </p>
        <div className="flex gap-3">
          <button
            onClick={() => router.push("/teacher/lessons")}
            className="px-5 py-2 rounded-lg border hover:bg-slate-100"
          >
            Back to Lessons
          </button>
          <button
            onClick={handleSave}
            disabled={saving}
            className="px-5 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50"
          >
            {saving ? "Saving..." : "Save Activities"}
          </button>
        </div>
      </div>
    </div>
  );
}