"use client";

import DataTable from "../../../components/DataTable";
import Link from "next/link";
import { useEffect, useState } from "react";
import api from "@/lib/axios";
import StartActivityModal from "@/components/activities/StartActivityModal";

interface Student {
  _id: string;
  firstName: string;
  lastName?: string;
  age: number;
  parentId: {
    firstName: string;
    lastName: string;
  };
}

export default function StudentsPage() {
  const [students, setStudents] = useState<Student[]>([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");
  const [modalStudent, setModalStudent] = useState<Student | null>(null);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const res = await api.get("/students/teacher");
      setStudents(res.data.students);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div className="p-6">Loading students...</div>;
  }

  return (
    <div className="p-6">
      {message && (
        <div className="mb-4 p-3 rounded-lg bg-blue-50 text-blue-700 text-sm">
          {message}
        </div>
      )}

      <DataTable
        title="Students List"
        data={students}
        columns={[
          {
            key: "firstName",
            header: "Student Name",
            render: (value, row) => (
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center font-semibold">
                  {value.charAt(0)}
                </div>

                <span className="font-medium">
                  {row.firstName} {row.lastName}
                </span>
              </div>
            ),
          },
          {
            key: "age",
            header: "Age",
            render: (value) => `${value} Years`,
          },
          {
            key: "parentId",
            header: "Parent Name",
            render: (value) =>
              value ? `${value.firstName} ${value.lastName}` : "-",
          },
          {
            key: "_id",
            header: "Action",
            render: (_, row) => (
              <div className="flex gap-2">
                <Link
                  href={`/teacher/students/${row._id}`}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg"
                >
                  View
                </Link>

                <button
                  onClick={() => setModalStudent(row)}
                  className="px-4 py-2 bg-green-600 text-white rounded-lg"
                >
                  Start Activity
                </button>
              </div>
            ),
          },
        ]}
      />

      {modalStudent && (
        <StartActivityModal
          studentId={modalStudent._id}
          studentAge={modalStudent.age}
          onClose={() => setModalStudent(null)}
          onSuccess={() => {
            setMessage("Activity started successfully!");
            fetchStudents();
          }}
        />
      )}
    </div>
  );
}