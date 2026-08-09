// app/teacher/activities/page.tsx
"use client";

import { useEffect, useState } from "react";
import DataTable from "../../../components/DataTable";
import Link from "next/link";
import api from "../../../lib/axios"; 

interface Template {
  _id: string;
  title: string;
  description?: string;
  activityType: string;
  ageGroupMin: number;
  ageGroupMax: number;
  status: "active" | "draft";
}

export default function ActivitiesPage() {
  const [templates, setTemplates] = useState<Template[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api
      .get("/activity-templates")
      .then((res) => setTemplates(res.data.templates))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  const total = templates.length;
  const published = templates.filter((t) => t.status === "active").length;
  const drafts = templates.filter((t) => t.status === "draft").length;

  const tableData = templates.map((t) => ({
    id: t._id,
    title: t.title,
    lesson: t.description || "-",
    type: t.activityType,
    ageGroup: `${t.ageGroupMin}-${t.ageGroupMax} Years`,
    status: t.status === "active" ? "Ready" : "Draft",
  }));

  if (loading) return <p className="p-6">Loading...</p>;

  return (
    <div className="p-6">
      {/* Top Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 mb-6">
        <div className="bg-white border rounded-2xl p-5 shadow-sm">
          <h3 className="text-slate-500 text-sm">Total Activities</h3>
          <p className="text-3xl font-bold mt-2">{total}</p>
        </div>
        <div className="bg-white border rounded-2xl p-5 shadow-sm">
          <h3 className="text-slate-500 text-sm">Published Activities</h3>
          <p className="text-3xl font-bold mt-2">{published}</p>
        </div>
        <div className="bg-white border rounded-2xl p-5 shadow-sm">
          <h3 className="text-slate-500 text-sm">Draft Activities</h3>
          <p className="text-3xl font-bold mt-2">{drafts}</p>
        </div>
        <div className="bg-white border rounded-2xl p-5 shadow-sm">
          <Link
            href="/teacher/activities/create"
            className="inline-flex items-center justify-center w-full h-full text-blue-600 font-semibold"
          >
            + Create Activity
          </Link>
        </div>
      </div>

      {/* Table */}
      <DataTable
        title="Activities"
        data={tableData}
        columns={[
          { key: "title", header: "Activity Name" },
          { key: "lesson", header: "Lesson" },
          { key: "type", header: "Type" },
          { key: "ageGroup", header: "Age Group" },
          {
            key: "status",
            header: "Status",
            render: (value) => (
              <span
                className={`px-3 py-1 rounded-full text-xs font-medium ${
                  value === "Ready"
                    ? "bg-green-100 text-green-700"
                    : "bg-yellow-100 text-yellow-700"
                }`}
              >
                {value}
              </span>
            ),
          },
        ]}
      />
    </div>
  );
}