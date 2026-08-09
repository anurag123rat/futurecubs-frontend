"use client";

import { useMemo, useState } from "react";
import { GraduationCap, Users, UserCheck, UserX } from "lucide-react";

import DataTable from "@/components/DataTable";
import PageHeader from "@/components/ui/PageHeader";
import SearchBar from "@/components/ui/SearchBar";
import StatCard from "@/components/ui/StatCard";
import StatusBadge from "@/components/ui/StatusBadge";
import ActionsButton from "@/components/ui/ActionsButton";

export default function TeachersPage() {
  const [search, setSearch] = useState("");

  const teachers = [
    {
      id: 1,
      name: "Priya Sharma",
      email: "priya@gmail.com",
      phone: "9876543210",
      experience: "5 Years",
      ageGroup: "2-4 Years",
      students: 24,
      status: "Active",
    },
    {
      id: 2,
      name: "Amit Verma",
      email: "amit@gmail.com",
      phone: "9988776655",
      experience: "7 Years",
      ageGroup: "4-6 Years",
      students: 18,
      status: "Active",
    },
    {
      id: 3,
      name: "Neha Singh",
      email: "neha@gmail.com",
      phone: "9988123456",
      experience: "3 Years",
      ageGroup: "6-8 Years",
      students: 12,
      status: "Inactive",
    },
  ];

  const filteredTeachers = useMemo(() => {
    return teachers.filter(
      (teacher) =>
        teacher.name
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        teacher.email
          .toLowerCase()
          .includes(search.toLowerCase())
    );
  }, [search]);

  return (
    <div className="space-y-6">

      <PageHeader
        title="Teachers"
        description="Manage all teachers in your institute."
        buttonText="+ Add Teacher"
        buttonHref="/admin/teachers/create"
      />

      {/* Stats */}

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">

        <StatCard
          title="Total Teachers"
          value={teachers.length}
          icon={GraduationCap}
          color="blue"
        />

        <StatCard
          title="Active Teachers"
          value={
            teachers.filter(
              (teacher) => teacher.status === "Active"
            ).length
          }
          icon={UserCheck}
          color="green"
        />

        <StatCard
          title="Inactive Teachers"
          value={
            teachers.filter(
              (teacher) =>
                teacher.status === "Inactive"
            ).length
          }
          icon={UserX}
          color="red"
        />

        <StatCard
          title="Assigned Students"
          value={teachers.reduce(
            (sum, teacher) => sum + teacher.students,
            0
          )}
          icon={Users}
          color="purple"
        />

      </div>

      {/* Search */}

      <div className="flex justify-end">
        <SearchBar
          value={search}
          onChange={setSearch}
          placeholder="Search teacher..."
        />
      </div>

      {/* Table */}

      <DataTable
        title="Teachers List"
        data={filteredTeachers}
        columns={[
          {
            key: "name",
            header: "Teacher",
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
            key: "email",
            header: "Email",
          },

          {
            key: "phone",
            header: "Phone",
          },

          {
            key: "experience",
            header: "Experience",
          },

          {
            key: "ageGroup",
            header: "Age Group",
          },

          {
            key: "students",
            header: "Students",
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
                viewHref={`/admin/teachers/${row.id}`}
                editHref={`/admin/teachers/${row.id}/edit`}
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