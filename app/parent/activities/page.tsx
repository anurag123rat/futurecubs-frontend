"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import api from "@/lib/axios";

interface Activity {
  _id: string;
  status: string;
  templateId: {
    _id: string;
    title: string;
    activityType: string;
  };
  studentId: {
    _id: string;
    firstName: string;
    lastName?: string;
    age: number;
  };
}

export default function ParentActivitiesPage() {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchActivities();
  }, []);

  const fetchActivities = async () => {
    try {
      const res = await api.get("/activities/parent");
      setActivities(res.data.activities);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div className="p-6">Loading activities...</div>;
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-slate-800">Activities</h1>
        <p className="text-slate-500 mt-1">
          Complete teacher assigned activities and worksheets.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="bg-white rounded-2xl p-5 border shadow-sm">
          <h3 className="text-slate-500">Total Pending</h3>
          <p className="text-3xl font-bold mt-2">{activities.length}</p>
        </div>
      </div>

      {activities.length === 0 ? (
        <div className="bg-white rounded-2xl border p-10 text-center text-slate-500">
          No pending activities right now. 🎉
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {activities.map((activity) => (
            <div
              key={activity._id}
              className="bg-white rounded-2xl border p-5 shadow-sm hover:shadow-md transition"
            >
              <div className="flex justify-between items-start">
                <h2 className="text-lg font-semibold">
                  {activity.templateId?.title || "Activity"}
                </h2>

                <span className="px-3 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-700">
                  Pending
                </span>
              </div>

              <p className="text-slate-500 mt-3">
                For: {activity.studentId.firstName} ({activity.studentId.age} yrs)
              </p>

              <Link
                href={`/parent/activities/${activity._id}`}
                className="block text-center mt-5 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
              >
                Start Activity
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}