"use client";

import { useMemo, useState } from "react";
import {
  GraduationCap,
  Users,
  UserCheck,
  BookOpen,
} from "lucide-react";

import DataTable from "@/components/DataTable";

import PageHeader from "@/components/ui/PageHeader";
import SearchBar from "@/components/ui/SearchBar";
import StatCard from "@/components/ui/StatCard";
import StatusBadge from "@/components/ui/StatusBadge";
import ActionsButton from "@/components/ui/ActionsButton";

export default function StudentsPage() {
  const [search, setSearch] = useState("");

  const students = [
    {
      id: 1,
      studentCode: "EC-0001",
      name: "Aarav Sharma",
      age: "2y 4m",
      parent: "Rahul Sharma",
      teacher: "Priya Sharma",
      ageGroup: "2-4 Years",
      lesson: "Colors Learning",
      progress: 82,
      status: "Active",
    },
    {
      id: 2,
      studentCode: "EC-0002",
      name: "Siya Verma",
      age: "3y 6m",
      parent: "Neha Verma",
      teacher: "Priya Sharma",
      ageGroup: "2-4 Years",
      lesson: "Shapes Learning",
      progress: 64,
      status: "Active",
    },
    {
      id: 3,
      studentCode: "EC-0003",
      name: "Kabir Singh",
      age: "5y 2m",
      parent: "Amit Singh",
      teacher: "Amit Verma",
      ageGroup: "4-6 Years",
      lesson: "Numbers Learning",
      progress: 38,
      status: "Inactive",
    },
  ];

  const filteredStudents = useMemo(() => {
    return students.filter(
      (student) =>
        student.name
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        student.studentCode
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        student.parent
          .toLowerCase()
          .includes(search.toLowerCase())
    );
  }, [search]);

  return (
    <div className="space-y-6">
      <PageHeader
        title="Students"
        description="Manage all students enrolled in FutureCubs."
        buttonText="+ Add Student"
        buttonHref="/admin/students/create"
      />

      {/* Stats */}

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
        <StatCard
          title="Total Students"
          value={students.length}
          icon={Users}
          color="blue"
        />

        <StatCard
          title="Active Students"
          value={
            students.filter(
              (student) => student.status === "Active"
            ).length
          }
          icon={UserCheck}
          color="green"
        />

        <StatCard
          title="Teachers"
          value={2}
          icon={GraduationCap}
          color="purple"
        />

        <StatCard
          title="Lessons"
          value={12}
          icon={BookOpen}
          color="orange"
        />
      </div>

      {/* Search */}

      <div className="flex justify-end">
        <SearchBar
          value={search}
          onChange={setSearch}
          placeholder="Search student..."
        />
      </div>

      {/* Table */}

      <DataTable
        title="Students List"
        data={filteredStudents}
        columns={[
          {
            key: "studentCode",
            header: "Student ID",
          },

          {
            key: "name",
            header: "Student",
            render: (value: string) => (
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-semibold">
                  {value.charAt(0)}
                </div>

                <span className="font-medium">
                  {value}
                </span>
              </div>
            ),
          },

          {
            key: "age",
            header: "Age",
          },

          {
            key: "parent",
            header: "Parent",
          },

          {
            key: "teacher",
            header: "Teacher",
          },

          {
            key: "ageGroup",
            header: "Age Group",
          },

          {
            key: "lesson",
            header: "Current Lesson",
          },

          {
            key: "progress",
            header: "Progress",
            render: (value: number) => (
              <div className="flex items-center gap-3">
                <div className="w-28 h-2 rounded-full bg-slate-200">
                  <div
                    className={`h-2 rounded-full ${
                      value >= 80
                        ? "bg-green-500"
                        : value >= 50
                        ? "bg-yellow-500"
                        : "bg-red-500"
                    }`}
                    style={{
                      width: `${value}%`,
                    }}
                  />
                </div>

                <span className="font-medium">
                  {value}%
                </span>
              </div>
            ),
          },

          {
            key: "status",
            header: "Status",
            render: (value: any) => (
              <StatusBadge status={value} />
            ),
          },

          {
            key: "name",
            header: "Action",
            render: (_: any, row: any) => (
              <ActionsButton
                viewHref={`/admin/students/${row.id}`}
                editHref={`/admin/students/${row.id}/edit`}
                onDelete={() =>
                  alert(`Delete ${row.name}`)
                }
              />
            ),
          },
        ]}
      />
    </div>
  );
}