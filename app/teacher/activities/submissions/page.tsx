"use client";

import { useEffect, useState } from "react";
import DataTable from "../../../../components/DataTable";
import api from "@/lib/axios";

interface Submission {
  _id: string;
  activityType: string;
  status: string;
  result?: {
    score: number;
    total: number;
  };
  studentId: {
    firstName: string;
    lastName?: string;
    age: number;
  };
  parentId: {
    firstName: string;
    lastName?: string;
    email: string;
  };
  startedAt: string;
  submittedAt?: string;
}

const activityTitleMap: Record<string, string> = {
  "animal-shadow-match": "Animal Shadow Matching",
};

export default function SubmissionsPage() {
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchSubmissions();
  }, []);

  const fetchSubmissions = async () => {
    try {
      const res = await api.get("/activities/teacher");
      setSubmissions(res.data.activities);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div className="p-6">Loading submissions...</div>;
  }

  const totalCount = submissions.length;
  const submittedCount = submissions.filter((s) => s.status === "submitted").length;
  const pendingCount = submissions.filter((s) => s.status === "pending").length;

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-800">Activity Submissions</h1>
        <p className="text-slate-500 mt-1">
          Track activities assigned to students and their submission status.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="bg-white border rounded-2xl p-5 shadow-sm">
          <h3 className="text-slate-500 text-sm">Total Assigned</h3>
          <p className="text-3xl font-bold mt-2">{totalCount}</p>
        </div>

        <div className="bg-white border rounded-2xl p-5 shadow-sm">
          <h3 className="text-slate-500 text-sm">Submitted</h3>
          <p className="text-3xl font-bold mt-2 text-green-600">{submittedCount}</p>
        </div>

        <div className="bg-white border rounded-2xl p-5 shadow-sm">
          <h3 className="text-slate-500 text-sm">Pending</h3>
          <p className="text-3xl font-bold mt-2 text-yellow-600">{pendingCount}</p>
        </div>
      </div>

      <DataTable
        title="Submissions"
        data={submissions}
        columns={[
          {
            key: "studentId",
            header: "Student",
            render: (value) => (value ? `${value.firstName} ${value.lastName || ""}` : "-"),
          },
          {
            key: "parentId",
            header: "Parent",
            render: (value) => (value ? `${value.firstName} ${value.lastName || ""}` : "-"),
          },
          {
            key: "activityType",
            header: "Activity",
            render: (value) => activityTitleMap[value] || value,
          },
          {
            key: "status",
            header: "Status",
            render: (value) => (
              <span
                className={`px-3 py-1 rounded-full text-xs font-medium ${
                  value === "submitted"
                    ? "bg-green-100 text-green-700"
                    : "bg-yellow-100 text-yellow-700"
                }`}
              >
                {value === "submitted" ? "Submitted" : "Pending"}
              </span>
            ),
          },
          {
            key: "result",
            header: "Score",
            render: (value) => (value ? `${value.score} / ${value.total}` : "-"),
          },
          {
            key: "submittedAt",
            header: "Submitted At",
            render: (value) =>
              value ? new Date(value).toLocaleString() : "-",
          },
        ]}
      />
    </div>
  );
}