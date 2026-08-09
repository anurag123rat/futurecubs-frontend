"use client";

import { useMemo, useState } from "react";
import {
  BookOpen,
  Puzzle,
  GraduationCap,
  Clock3,
} from "lucide-react";

import DataTable from "@/components/DataTable";

import PageHeader from "@/components/ui/PageHeader";
import SearchBar from "@/components/ui/SearchBar";
import StatCard from "@/components/ui/StatCard";
import StatusBadge from "@/components/ui/StatusBadge";
import ActionsButton from "@/components/ui/ActionsButton";

export default function LessonsPage() {
  const [search, setSearch] = useState("");

  const lessons = [
    {
      id: 1,
      code: "LES-001",
      title: "Colors Learning",
      ageGroup: "2-4 Years",
      teacher: "Priya Sharma",
      slides: 8,
      activities: 10,
      duration: "30 Min",
      status: "Published",
    },
    {
      id: 2,
      code: "LES-002",
      title: "Shapes Learning",
      ageGroup: "4-6 Years",
      teacher: "Amit Verma",
      slides: 12,
      activities: 15,
      duration: "40 Min",
      status: "Draft",
    },
    {
      id: 3,
      code: "LES-003",
      title: "Numbers Learning",
      ageGroup: "6-8 Years",
      teacher: "Neha Singh",
      slides: 15,
      activities: 18,
      duration: "45 Min",
      status: "Published",
    },
  ];

  const filteredLessons = useMemo(() => {
    return lessons.filter(
      (lesson) =>
        lesson.title
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        lesson.code
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        lesson.teacher
          .toLowerCase()
          .includes(search.toLowerCase())
    );
  }, [search]);

  return (
    <div className="space-y-6">

      <PageHeader
        title="Lessons"
        description="Manage all learning lessons."
        buttonText="+ Create Lesson"
        buttonHref="/admin/lessons/create"
      />

      {/* Stats */}

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">

        <StatCard
          title="Total Lessons"
          value={lessons.length}
          icon={BookOpen}
          color="blue"
        />

        <StatCard
          title="Published"
          value={
            lessons.filter(
              (l) => l.status === "Published"
            ).length
          }
          icon={GraduationCap}
          color="green"
        />

        <StatCard
          title="Activities"
          value={43}
          icon={Puzzle}
          color="purple"
        />

        <StatCard
          title="Duration"
          value="115 Min"
          icon={Clock3}
          color="orange"
        />

      </div>

      {/* Search */}

      <div className="flex justify-end">

        <SearchBar
          value={search}
          onChange={setSearch}
          placeholder="Search lesson..."
        />

      </div>

      {/* Table */}

      <DataTable
        title="Lessons"
        data={filteredLessons}
        columns={[
          {
            key: "code",
            header: "Lesson Code",
          },
          {
            key: "title",
            header: "Lesson Name",
          },
          {
            key: "ageGroup",
            header: "Age Group",
          },
          {
            key: "teacher",
            header: "Teacher",
          },
          {
            key: "slides",
            header: "Slides",
          },
          {
            key: "activities",
            header: "Activities",
          },
          {
            key: "duration",
            header: "Duration",
          },
          {
            key: "status",
            header: "Status",
            render: (value: any) => (
              <StatusBadge status={value} />
            ),
          },
          {
            key: "title",
            header: "Action",
            render: (_: any, row: any) => (
              <ActionsButton
                viewHref={`/admin/lessons/${row.id}`}
                editHref={`/admin/lessons/${row.id}/edit`}
                onDelete={() =>
                  alert(`Delete ${row.title}`)
                }
              />
            ),
          },
        ]}
      />

    </div>
  );
}