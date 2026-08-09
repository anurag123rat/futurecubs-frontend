"use client";

import { useMemo, useState } from "react";
import {
  Users,
  BookOpen,
  Puzzle,
  Layers3,
} from "lucide-react";

import DataTable from "@/components/DataTable";

import PageHeader from "@/components/ui/PageHeader";
import SearchBar from "@/components/ui/SearchBar";
import StatCard from "@/components/ui/StatCard";
import StatusBadge from "@/components/ui/StatusBadge";
import ActionsButton from "@/components/ui/ActionsButton";

export default function AgeGroupsPage() {
  const [search, setSearch] = useState("");

  const ageGroups = [
    {
      id: 1,
      name: "2-4 Years",
      minAge: "24 Months",
      maxAge: "47 Months",
      students: 32,
      teachers: 3,
      lessons: 12,
      activities: 120,
      status: "Active",
    },
    {
      id: 2,
      name: "4-6 Years",
      minAge: "48 Months",
      maxAge: "71 Months",
      students: 40,
      teachers: 4,
      lessons: 14,
      activities: 140,
      status: "Active",
    },
    {
      id: 3,
      name: "6-8 Years",
      minAge: "72 Months",
      maxAge: "95 Months",
      students: 18,
      teachers: 2,
      lessons: 10,
      activities: 100,
      status: "Inactive",
    },
  ];

  const filteredGroups = useMemo(() => {
    return ageGroups.filter((group) =>
      group.name
        .toLowerCase()
        .includes(search.toLowerCase())
    );
  }, [search]);

  return (
    <div className="space-y-6">

      <PageHeader
        title="Age Groups"
        description="Manage learning age groups."
        buttonText="+ Add Age Group"
        buttonHref="/admin/age-groups/create"
      />

      {/* Stats */}

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">

        <StatCard
          title="Age Groups"
          value={ageGroups.length}
          icon={Layers3}
          color="blue"
        />

        <StatCard
          title="Students"
          value={90}
          icon={Users}
          color="green"
        />

        <StatCard
          title="Lessons"
          value={36}
          icon={BookOpen}
          color="purple"
        />

        <StatCard
          title="Activities"
          value={360}
          icon={Puzzle}
          color="orange"
        />

      </div>

      {/* Search */}

      <div className="flex justify-end">
        <SearchBar
          value={search}
          onChange={setSearch}
          placeholder="Search age group..."
        />
      </div>

      {/* Table */}

      <DataTable
        title="Age Groups"
        data={filteredGroups}
        columns={[
          {
            key: "name",
            header: "Age Group",
          },

          {
            key: "minAge",
            header: "Minimum Age",
          },

          {
            key: "maxAge",
            header: "Maximum Age",
          },

          {
            key: "students",
            header: "Students",
          },

          {
            key: "teachers",
            header: "Teachers",
          },

          {
            key: "lessons",
            header: "Lessons",
          },

          {
            key: "activities",
            header: "Activities",
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
                viewHref={`/admin/age-groups/${row.id}`}
                editHref={`/admin/age-groups/${row.id}/edit`}
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