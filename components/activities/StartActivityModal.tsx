// components/activities/StartActivityModal.tsx
"use client";

import { useEffect, useState } from "react";
import api from "../../lib/axios"; 

interface Template {
  _id: string;
  title: string;
  ageGroupMin: number;
  ageGroupMax: number;
}

interface StartActivityModalProps {
  studentId: string;
  studentAge: number;
  onClose: () => void;
  onSuccess: () => void;
}

export default function StartActivityModal({
  studentId,
  studentAge,
  onClose,
  onSuccess,
}: StartActivityModalProps) {
  const [templates, setTemplates] = useState<Template[]>([]);
  const [selectedTemplateId, setSelectedTemplateId] = useState("");
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    api
      .get(`/activity-templates?age=${studentAge}`)
      .then((res) => setTemplates(res.data.templates))
      .catch(() => setError("Templates load nahi ho paye"))
      .finally(() => setLoading(false));
  }, [studentAge]);

  const handleStart = async () => {
    if (!selectedTemplateId) {
      setError("Pehle ek activity select karo");
      return;
    }
    setSubmitting(true);
    setError("");
    try {
      await api.post("/activities/start", {
        studentId,
        templateId: selectedTemplateId,
      });
      onSuccess();
      onClose();
    } catch (err: any) {
      setError(err.response?.data?.message || "Activity start nahi ho payi");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl p-6 w-full max-w-md shadow-lg">
        <h2 className="text-lg font-semibold mb-4">Start Activity</h2>

        {loading ? (
          <p className="text-slate-500 text-sm">Loading templates...</p>
        ) : templates.length === 0 ? (
          <p className="text-slate-500 text-sm">
            Is age group ke liye koi active template nahi mila.
          </p>
        ) : (
          <select
            className="w-full border rounded-lg px-3 py-2 mb-4"
            value={selectedTemplateId}
            onChange={(e) => setSelectedTemplateId(e.target.value)}
          >
            <option value="">-- Select Activity --</option>
            {templates.map((t) => (
              <option key={t._id} value={t._id}>
                {t.title}
              </option>
            ))}
          </select>
        )}

        {error && <p className="text-red-600 text-sm mb-3">{error}</p>}

        <div className="flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg border hover:bg-slate-100"
          >
            Cancel
          </button>
          <button
            onClick={handleStart}
            disabled={submitting || templates.length === 0}
            className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50"
          >
            {submitting ? "Starting..." : "Start"}
          </button>
        </div>
      </div>
    </div>
  );
}