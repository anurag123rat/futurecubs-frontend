"use client";

import { useMemo, useState } from "react";
import {
  GraduationCap,
  Users,
  BookOpen,
  CalendarDays,
} from "lucide-react";

import DataTable from "@/components/DataTable";

import PageHeader from "@/components/ui/PageHeader";
import SearchBar from "@/components/ui/SearchBar";
import StatCard from "@/components/ui/StatCard";
import StatusBadge from "@/components/ui/StatusBadge";
import ActionButtons from "@/components/ui/ActionsButton";

export default function ClassesPage() {
  const [search, setSearch] = useState("");

  const classes = [
    {
      id: 1,
      classCode: "CL-0001",
      className: "Sunshine A",
      teacher: "Priya Sharma",
      ageGroup: "2-4 Years",
      lesson: "Colors Learning",
      students: 15,
      schedule: "Mon • Wed • Fri",
      time: "10:00 AM",
      status: "Active",
    },
    {
      id: 2,
      classCode: "CL-0002",
      className: "Rainbow B",
      teacher: "Amit Verma",
      ageGroup: "4-6 Years",
      lesson: "Shapes Learning",
      students: 18,
      schedule: "Tue • Thu",
      time: "11:30 AM",
      status: "Active",
    },
    {
      id: 3,
      classCode: "CL-0003",
      className: "Stars C",
      teacher: "Neha Singh",
      ageGroup: "6-8 Years",
      lesson: "Numbers Learning",
      students: 12,
      schedule: "Saturday",
      time: "09:30 AM",
      status: "Inactive",
    },
  ];

  const filteredClasses = useMemo(() => {
    return classes.filter(
      (item) =>
        item.className
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        item.classCode
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        item.teacher
          .toLowerCase()
          .includes(search.toLowerCase())
    );
  }, [search]);

  return (
    <div className="space-y-6">
      <PageHeader
        title="Classes"
        description="Manage all learning classes."
        buttonText="+ Create Class"
        buttonHref="/admin/classes/create"
      />

      {/* Stats */}

      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5">
        <StatCard
          title="Total Classes"
          value={classes.length}
          icon={BookOpen}
          color="blue"
        />

        <StatCard
          title="Teachers"
          value={3}
          icon={GraduationCap}
          color="green"
        />

        <StatCard
          title="Students"
          value={45}
          icon={Users}
          color="purple"
        />

        <StatCard
          title="Today's Classes"
          value={2}
          icon={CalendarDays}
          color="orange"
        />
      </div>

      {/* Search */}

      <div className="flex justify-end">
        <SearchBar
          value={search}
          onChange={setSearch}
          placeholder="Search class..."
        />
      </div>

      {/* Table */}

      <DataTable
        title="Classes"
        data={filteredClasses}
        columns={[
          {
            key: "classCode",
            header: "Class Code",
          },

          {
            key: "className",
            header: "Class Name",
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
            key: "students",
            header: "Students",
          },

          {
            key: "schedule",
            header: "Schedule",
          },

          {
            key: "time",
            header: "Time",
          },

          {
            key: "status",
            header: "Status",
            render: (value: any) => (
              <StatusBadge status={value} />
            ),
          },

          {
            key: "className",
            header: "Action",
            render: (_: any, row: any) => (
              <ActionButtons
                viewHref={`/admin/classes/${row.id}`}
                editHref={`/admin/classes/${row.id}/edit`}
                onDelete={() =>
                  alert(`Delete ${row.className}`)
                }
              />
            ),
          },
        ]}
      />
    </div>
  );
}