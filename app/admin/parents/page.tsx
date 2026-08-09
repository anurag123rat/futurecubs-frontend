"use client";

import { useMemo, useState } from "react";
import {
  Users,
  UserCheck,
  Baby,
  Phone,
} from "lucide-react";

import DataTable from "@/components/DataTable";

import PageHeader from "@/components/ui/PageHeader";
import SearchBar from "@/components/ui/SearchBar";
import StatCard from "@/components/ui/StatCard";
import StatusBadge from "@/components/ui/StatusBadge";
import ActionsButton from "@/components/ui/ActionsButton";

export default function ParentsPage() {
  const [search, setSearch] = useState("");

  const parents = [
    {
      id: 1,
      parentId: "EP-0001",
      father: "Rahul Sharma",
      mother: "Priya Sharma",
      phone: "9876543210",
      email: "rahul@gmail.com",
      student: "Aarav",
      children: 1,
      status: "Active",
    },
    {
      id: 2,
      parentId: "EP-0002",
      father: "Amit Verma",
      mother: "Neha Verma",
      phone: "9988776655",
      email: "amit@gmail.com",
      student: "Siya",
      children: 1,
      status: "Active",
    },
    {
      id: 3,
      parentId: "EP-0003",
      father: "Rohit Singh",
      mother: "Pooja Singh",
      phone: "9876500000",
      email: "rohit@gmail.com",
      student: "Kabir",
      children: 2,
      status: "Inactive",
    },
  ];

  const filteredParents = useMemo(() => {
    return parents.filter(
      (parent) =>
        parent.father
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        parent.parentId
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        parent.student
          .toLowerCase()
          .includes(search.toLowerCase())
    );
  }, [search]);

  return (
    <div className="space-y-6">

      <PageHeader
        title="Parents"
        description="Manage all parents and guardians."
        buttonText="+ Add Parent"
        buttonHref="/admin/parents/create"
      />

      {/* Stats */}

      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5">

        <StatCard
          title="Total Parents"
          value={parents.length}
          icon={Users}
          color="blue"
        />

        <StatCard
          title="Active Parents"
          value={
            parents.filter(
              (item) => item.status === "Active"
            ).length
          }
          icon={UserCheck}
          color="green"
        />

        <StatCard
          title="Linked Students"
          value={3}
          icon={Baby}
          color="purple"
        />

        <StatCard
          title="Emergency Contacts"
          value={parents.length}
          icon={Phone}
          color="orange"
        />

      </div>

      {/* Search */}

      <div className="flex justify-end">

        <SearchBar
          value={search}
          onChange={setSearch}
          placeholder="Search parent..."
        />

      </div>

      {/* Table */}

      <DataTable
        title="Parents List"
        data={filteredParents}
        columns={[
          {
            key: "parentId",
            header: "Parent ID",
          },

          {
            key: "father",
            header: "Father",
          },

          {
            key: "mother",
            header: "Mother",
          },

          {
            key: "phone",
            header: "Phone",
          },

          {
            key: "email",
            header: "Email",
          },

          {
            key: "student",
            header: "Student",
          },

          {
            key: "children",
            header: "Children",
          },

          {
            key: "status",
            header: "Status",
            render: (value: any) => (
              <StatusBadge status={value} />
            ),
          },

          {
            key: "father",
            header: "Action",
            render: (_: any, row: any) => (
              <ActionsButton
                viewHref={`/admin/parents/${row.id}`}
                editHref={`/admin/parents/${row.id}/edit`}
                onDelete={() =>
                  alert(`Delete ${row.father}`)
                }
              />
            ),
          },
        ]}
      />

    </div>
  );
}