"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import api from "@/lib/axios";

interface ActivityItem {
  id: string;
  label: string;
  emoji?: string;
  matchId?: string;
  role?: "source" | "target";
}

interface ActivityData {
  _id: string;
  templateId: {
    title: string;
    config: {
      items: ActivityItem[];
      instructions?: string;
    };
  };
}

export default function ActivityPlayPage() {
  const { id: activityId } = useParams();
  const router = useRouter();

  const [activity, setActivity] = useState<ActivityData | null>(null);
  const [loading, setLoading] = useState(true);

  const [placed, setPlaced] = useState<Record<string, string>>({});
  const [draggedId, setDraggedId] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    api
      .get(`/activities/${activityId}`)
      .then((res) => setActivity(res.data.activity))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, [activityId]);

  if (loading) {
    return <div className="p-6">Loading activity...</div>;
  }

  if (!activity) {
    return <div className="p-6">Activity not found.</div>;
  }

  const items = activity.templateId.config.items;
  const sourceItems = items.filter((i) => i.role === "source");
  const targetItems = items.filter((i) => i.role === "target");

  const handleDragStart = (id: string) => {
    setDraggedId(id);
  };

  const handleDrop = (targetId: string) => {
    if (!draggedId) return;
    setPlaced((prev) => ({ ...prev, [targetId]: draggedId }));
    setDraggedId(null);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const isPlaced = (itemId: string) => Object.values(placed).includes(itemId);
  const allPlaced = Object.keys(placed).length === sourceItems.length;

  const handleSubmit = async () => {
    setSubmitting(true);

    let correctCount = 0;
    Object.entries(placed).forEach(([targetId, sourceId]) => {
      const target = targetItems.find((t) => t.id === targetId);
      if (target?.matchId === sourceId) correctCount++;
    });

    try {
      await api.patch(`/activities/${activityId}/submit`, {
        score: correctCount,
        total: sourceItems.length,
        details: { placed },
      });

      setScore(correctCount);
      setSubmitted(true);
    } catch (error) {
      console.error(error);
      alert("Submit failed, please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
        <div className="text-6xl mb-4">🎉</div>
        <h1 className="text-3xl font-bold text-slate-800">Great Job!</h1>
        <p className="text-slate-500 mt-2">
          You matched {score} out of {sourceItems.length} correctly.
        </p>
        <button
          onClick={() => router.push("/parent/activities")}
          className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold"
        >
          Back to Activities
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-800">
          {activity.templateId.title}
        </h1>
        <p className="text-slate-500 mt-1">
          {activity.templateId.config.instructions || "Drag each item to its match."}
        </p>
      </div>

      {/* Draggable source items */}
      <div className="flex flex-wrap gap-6 justify-center bg-white border rounded-2xl p-6">
        {sourceItems.filter((item) => !isPlaced(item.id)).map((item) => (
          <div
            key={item.id}
            draggable
            onDragStart={() => handleDragStart(item.id)}
            className="w-24 h-24 flex items-center justify-center text-5xl bg-slate-50 rounded-2xl border-2 border-slate-200 cursor-grab active:cursor-grabbing hover:scale-105 transition"
          >
            {item.emoji || item.label}
          </div>
        ))}

        {sourceItems.every((item) => isPlaced(item.id)) && (
          <p className="text-slate-400 py-8">All items placed! 🎉</p>
        )}
      </div>

      {/* Drop zones */}
      <div className="flex flex-wrap gap-6 justify-center bg-slate-100 border rounded-2xl p-6">
        {targetItems.map((target) => {
          const placedSourceId = placed[target.id];
          const placedSource = sourceItems.find((s) => s.id === placedSourceId);

          return (
            <div
              key={target.id}
              onDragOver={handleDragOver}
              onDrop={() => handleDrop(target.id)}
              className="w-24 h-24 flex items-center justify-center text-5xl rounded-2xl border-2 border-dashed border-slate-400 bg-white"
            >
              {placedSource ? (
                <span>{placedSource.emoji}</span>
              ) : (
                <span className="opacity-30" style={{ filter: "brightness(0)" }}>
                  {target.emoji}
                </span>
              )}
            </div>
          );
        })}
      </div>

      <div className="flex justify-center">
        <button
          onClick={handleSubmit}
          disabled={!allPlaced || submitting}
          className="px-8 py-3 bg-green-600 text-white rounded-xl font-semibold disabled:opacity-40 disabled:cursor-not-allowed"
        >
          {submitting ? "Submitting..." : "Submit Activity"}
        </button>
      </div>
    </div>
  );
}