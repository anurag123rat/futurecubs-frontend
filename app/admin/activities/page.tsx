"use client";

import { useMemo, useState } from "react";
import {
  Puzzle,
  Library,
  GraduationCap,
  Layers3,
} from "lucide-react";

import DataTable from "@/components/DataTable";
import PageHeader from "@/components/ui/PageHeader";
import SearchBar from "@/components/ui/SearchBar";
import StatCard from "@/components/ui/StatCard";
import StatusBadge from "@/components/ui/StatusBadge";
import ActionsButton from "@/components/ui/ActionsButton";

export default function ActivitiesPage() {
  const [search, setSearch] = useState("");

  const activities = [
    {
      id: 1,
      code: "ACT-001",
      name: "Color Matching",
      type: "Matching",
      lesson: "Colors Learning",
      ageGroup: "2-4 Years",
      difficulty: "Easy",
      status: "Published",
    },
    {
      id: 2,
      code: "ACT-002",
      name: "Shape Puzzle",
      type: "Puzzle",
      lesson: "Shapes Learning",
      ageGroup: "4-6 Years",
      difficulty: "Medium",
      status: "Draft",
    },
    {
      id: 3,
      code: "ACT-003",
      name: "Number Drag Drop",
      type: "Drag & Drop",
      lesson: "Numbers Learning",
      ageGroup: "6-8 Years",
      difficulty: "Hard",
      status: "Published",
    },
  ];

  const filteredActivities = useMemo(() => {
    return activities.filter(
      (activity) =>
        activity.name
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        activity.code
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        activity.lesson
          .toLowerCase()
          .includes(search.toLowerCase())
    );
  }, [search]);

  return (
    <div className="space-y-6">

      <PageHeader
        title="Activities"
        description="Manage activity templates and assignments."
        buttonText="+ Create Activity"
        buttonHref="/admin/activities/create"
      />

      {/* Stats */}

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">

        <StatCard
          title="Total Activities"
          value={activities.length}
          icon={Puzzle}
          color="blue"
        />

        <StatCard
          title="Published"
          value={
            activities.filter(
              (a) => a.status === "Published"
            ).length
          }
          icon={GraduationCap}
          color="green"
        />

        <StatCard
          title="Templates"
          value={12}
          icon={Library}
          color="purple"
        />

        <StatCard
          title="Categories"
          value={8}
          icon={Layers3}
          color="orange"
        />

      </div>

      {/* Search */}

      <div className="flex justify-end">

        <SearchBar
          value={search}
          onChange={setSearch}
          placeholder="Search activity..."
        />

      </div>

      {/* Table */}

      <DataTable
        title="Activities"
        data={filteredActivities}
        columns={[
          {
            key: "code",
            header: "Activity Code",
          },
          {
            key: "name",
            header: "Activity Name",
          },
          {
            key: "type",
            header: "Type",
          },
          {
            key: "lesson",
            header: "Lesson",
          },
          {
            key: "ageGroup",
            header: "Age Group",
          },
          {
            key: "difficulty",
            header: "Difficulty",
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
                viewHref={`/admin/activities/${row.id}`}
                editHref={`/admin/activities/${row.id}/edit`}
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