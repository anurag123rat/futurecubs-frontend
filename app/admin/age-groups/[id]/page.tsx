import Link from "next/link";
import {
  Users,
  GraduationCap,
  BookOpen,
  Puzzle,
  Calendar,
} from "lucide-react";

export default function AgeGroupDetailsPage() {
  const ageGroup = {
    id: 1,
    name: "2-4 Years",
    minAge: 24,
    maxAge: 47,
    description:
      "This age group focuses on cognitive development, colors, shapes, numbers, language skills and fun learning activities.",
    students: 32,
    teachers: 3,
    lessons: 12,
    activities: 120,
    status: "Active",
  };

  const assignedTeachers = [
    "Priya Sharma",
    "Amit Verma",
    "Neha Singh",
  ];

  const assignedLessons = [
    "Colors Learning",
    "Shapes Learning",
    "Numbers Learning",
    "Animals Learning",
    "Fruits Learning",
  ];

  const recentStudents = [
    "Aarav Sharma",
    "Siya Verma",
    "Kabir Singh",
    "Myra Patel",
    "Rohan Gupta",
  ];

  return (
    <div className="space-y-6">

      {/* Header */}

      <div className="flex flex-col lg:flex-row justify-between lg:items-center gap-5">

        <div>

          <h1 className="text-3xl font-bold">
            {ageGroup.name}
          </h1>

          <p className="text-slate-500 mt-2">
            {ageGroup.minAge} - {ageGroup.maxAge} Months
          </p>

          <span
            className={`inline-block mt-3 px-4 py-1 rounded-full text-sm ${
              ageGroup.status === "Active"
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {ageGroup.status}
          </span>

        </div>

        <Link
          href={`/admin/age-groups/${ageGroup.id}/edit`}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl"
        >
          Edit Age Group
        </Link>

      </div>

      {/* Stats */}

      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5">

        <div className="bg-white rounded-2xl border p-5">
          <Users className="text-blue-600 mb-3" />
          <p className="text-slate-500">
            Students
          </p>

          <h2 className="text-3xl font-bold mt-2">
            {ageGroup.students}
          </h2>
        </div>

        <div className="bg-white rounded-2xl border p-5">
          <GraduationCap className="text-green-600 mb-3" />
          <p className="text-slate-500">
            Teachers
          </p>

          <h2 className="text-3xl font-bold mt-2">
            {ageGroup.teachers}
          </h2>
        </div>

        <div className="bg-white rounded-2xl border p-5">
          <BookOpen className="text-purple-600 mb-3" />
          <p className="text-slate-500">
            Lessons
          </p>

          <h2 className="text-3xl font-bold mt-2">
            {ageGroup.lessons}
          </h2>
        </div>

        <div className="bg-white rounded-2xl border p-5">
          <Puzzle className="text-orange-500 mb-3" />
          <p className="text-slate-500">
            Activities
          </p>

          <h2 className="text-3xl font-bold mt-2">
            {ageGroup.activities}
          </h2>
        </div>

      </div>

      {/* Details */}

      <div className="grid lg:grid-cols-2 gap-6">

        {/* Information */}

        <div className="bg-white rounded-2xl border p-6">

          <h2 className="text-xl font-semibold mb-5">
            Age Group Information
          </h2>

          <div className="space-y-4">

            <Info
              label="Age Group"
              value={ageGroup.name}
            />

            <Info
              label="Minimum Age"
              value={`${ageGroup.minAge} Months`}
            />

            <Info
              label="Maximum Age"
              value={`${ageGroup.maxAge} Months`}
            />

            <Info
              label="Status"
              value={ageGroup.status}
            />

          </div>

        </div>

        {/* Description */}

        <div className="bg-white rounded-2xl border p-6">

          <h2 className="text-xl font-semibold mb-5">
            Description
          </h2>

          <p className="text-slate-600 leading-7">
            {ageGroup.description}
          </p>

        </div>

      </div>

      {/* Assigned Teachers */}

      <div className="bg-white rounded-2xl border p-6">

        <h2 className="text-xl font-semibold mb-5">
          Assigned Teachers
        </h2>

        <div className="grid md:grid-cols-3 gap-4">

          {assignedTeachers.map((teacher) => (
            <div
              key={teacher}
              className="border rounded-xl p-4"
            >
              👩‍🏫 {teacher}
            </div>
          ))}

        </div>

      </div>

      {/* Lessons */}

      <div className="bg-white rounded-2xl border p-6">

        <h2 className="text-xl font-semibold mb-5">
          Assigned Lessons
        </h2>

        <div className="grid md:grid-cols-2 gap-4">

          {assignedLessons.map((lesson) => (
            <div
              key={lesson}
              className="flex items-center gap-3 border rounded-xl p-4"
            >
              <BookOpen size={18} />

              {lesson}
            </div>
          ))}

        </div>

      </div>

      {/* Students */}

      <div className="bg-white rounded-2xl border p-6">

        <h2 className="text-xl font-semibold mb-5">
          Recent Students
        </h2>

        <div className="space-y-3">

          {recentStudents.map((student) => (
            <div
              key={student}
              className="flex items-center justify-between border-b pb-3"
            >
              <span>{student}</span>

              <Calendar
                size={18}
                className="text-slate-400"
              />
            </div>
          ))}

        </div>

      </div>

    </div>
  );
}

function Info({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="flex justify-between border-b pb-3">
      <span className="text-slate-500">
        {label}
      </span>

      <span className="font-medium">
        {value}
      </span>
    </div>
  );
}