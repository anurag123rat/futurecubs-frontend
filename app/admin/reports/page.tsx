"use client";

import Link from "next/link";
import {
  Users,
  GraduationCap,
  CalendarCheck,
  BarChart3,
  ArrowRight,
  BookOpenCheck,
} from "lucide-react";

import StatCard from "@/components/ui/StatCard";

const reportCards = [
  {
    title: "Student Reports",
    description: "View student progress and performance.",
    href: "/admin/reports/students",
    icon: Users,
  },
  {
    title: "Teacher Reports",
    description: "Track teacher performance.",
    href: "/admin/reports/teachers",
    icon: GraduationCap,
  },
  {
    title: "Attendance Reports",
    description: "Daily and monthly attendance.",
    href: "/admin/reports/attendance",
    icon: CalendarCheck,
  },
  {
    title: "Analytics",
    description: "Platform analytics dashboard.",
    href: "/admin/reports/analytics",
    icon: BarChart3,
  },
];

export default function ReportsPage() {
  return (
    <div className="space-y-6">

      {/* Header */}

      <div>

        <h1 className="text-3xl font-bold">
          Reports Dashboard
        </h1>

        <p className="text-slate-500 mt-2">
          Monitor students, teachers and learning progress.
        </p>

      </div>

      {/* Stats */}

      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5">

        <StatCard
          title="Students"
          value={258}
          icon={Users}
          color="blue"
        />

        <StatCard
          title="Teachers"
          value={18}
          icon={GraduationCap}
          color="green"
        />

        <StatCard
          title="Attendance"
          value="94%"
          icon={CalendarCheck}
          color="orange"
        />

        <StatCard
          title="Completion"
          value="87%"
          icon={BookOpenCheck}
          color="purple"
        />

      </div>

      {/* Report Cards */}

      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">

        {reportCards.map((item) => {

          const Icon = item.icon;

          return (

            <Link
              key={item.title}
              href={item.href}
              className="bg-white border rounded-2xl p-6 hover:shadow-md transition"
            >

              <Icon
                size={34}
                className="text-blue-600"
              />

              <h2 className="text-xl font-semibold mt-5">
                {item.title}
              </h2>

              <p className="text-slate-500 mt-2">
                {item.description}
              </p>

              <div className="flex items-center gap-2 mt-6 text-blue-600">

                <span>Open Report</span>

                <ArrowRight size={18} />

              </div>

            </Link>

          );

        })}

      </div>

      {/* Quick Summary */}

      <div className="bg-white rounded-2xl border p-6">

        <h2 className="text-xl font-semibold mb-6">
          Quick Summary
        </h2>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5">

          <SummaryCard
            title="Today's Attendance"
            value="238 / 258"
          />

          <SummaryCard
            title="Lessons Completed"
            value="124"
          />

          <SummaryCard
            title="Activities Completed"
            value="458"
          />

          <SummaryCard
            title="Average Score"
            value="91%"
          />

        </div>

      </div>

      {/* Recent Reports */}

      <div className="bg-white rounded-2xl border p-6">

        <h2 className="text-xl font-semibold mb-6">
          Recent Reports
        </h2>

        <div className="space-y-4">

          {[
            "Student Progress Report",
            "Teacher Performance Report",
            "Attendance Report",
            "Lesson Completion Report",
          ].map((item) => (

            <div
              key={item}
              className="flex justify-between items-center border rounded-xl p-4"
            >

              <span>{item}</span>

              <button className="text-blue-600">
                View
              </button>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
}

function SummaryCard({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div className="rounded-xl border p-5">

      <p className="text-slate-500">
        {title}
      </p>

      <h3 className="text-2xl font-bold mt-2">
        {value}
      </h3>

    </div>
  );
}