import Link from "next/link";
import {
  BookOpen,
  Trophy,
  User,
  Calendar,
  GraduationCap,
  Phone,
} from "lucide-react";

export default function StudentDetailsPage() {
  const student = {
    id: 1,
    code: "EC-0001",
    name: "Aarav Sharma",
    age: "2 Years 4 Months",
    dob: "12 Feb 2024",
    gender: "Male",
    admissionDate: "10 June 2026",
    ageGroup: "2-4 Years",

    parent: "Rahul Sharma",
    phone: "+91 9876543210",

    teacher: "Priya Sharma",

    currentLesson: "Colors Learning",

    completedLessons: 5,

    completedActivities: 42,

    progress: 82,

    attendance: 96,

    badge: "Color Explorer",

    status: "Active",
  };

  return (
    <div className="space-y-6">

      {/* Header */}

      <div className="flex flex-col lg:flex-row justify-between lg:items-center gap-5">

        <div className="flex items-center gap-5">

          <div className="w-24 h-24 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-4xl font-bold">
            {student.name.charAt(0)}
          </div>

          <div>

            <h1 className="text-3xl font-bold">
              {student.name}
            </h1>

            <p className="text-slate-500 mt-1">
              Student ID : {student.code}
            </p>

            <span className="inline-block mt-3 bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm">
              {student.status}
            </span>

          </div>

        </div>

        <Link
          href={`/admin/students/${student.id}/edit`}
          className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white"
        >
          Edit Student
        </Link>

      </div>

      {/* Stats */}

      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5">

        <div className="bg-white rounded-2xl border p-5">
          <BookOpen className="text-blue-600 mb-3" />
          <p className="text-slate-500">
            Current Lesson
          </p>

          <h2 className="font-bold mt-2">
            {student.currentLesson}
          </h2>
        </div>

        <div className="bg-white rounded-2xl border p-5">
          <GraduationCap className="text-green-600 mb-3" />
          <p className="text-slate-500">
            Completed Lessons
          </p>

          <h2 className="text-3xl font-bold mt-2">
            {student.completedLessons}
          </h2>
        </div>

        <div className="bg-white rounded-2xl border p-5">
          <Trophy className="text-orange-500 mb-3" />
          <p className="text-slate-500">
            Activities Completed
          </p>

          <h2 className="text-3xl font-bold mt-2">
            {student.completedActivities}
          </h2>
        </div>

        <div className="bg-white rounded-2xl border p-5">
          <User className="text-purple-600 mb-3" />
          <p className="text-slate-500">
            Overall Progress
          </p>

          <h2 className="text-3xl font-bold mt-2">
            {student.progress}%
          </h2>
        </div>

      </div>

      {/* Information */}

      <div className="grid lg:grid-cols-2 gap-6">

        {/* Student */}

        <div className="bg-white rounded-2xl border p-6">

          <h2 className="text-xl font-semibold mb-5">
            Student Information
          </h2>

          <div className="space-y-4">

            <Info label="Student Code" value={student.code} />

            <Info label="Student Name" value={student.name} />

            <Info label="Gender" value={student.gender} />

            <Info label="Date of Birth" value={student.dob} />

            <Info label="Age" value={student.age} />

            <Info
              label="Admission Date"
              value={student.admissionDate}
            />

            <Info
              label="Age Group"
              value={student.ageGroup}
            />

          </div>

        </div>

        {/* Parent */}

        <div className="bg-white rounded-2xl border p-6">

          <h2 className="text-xl font-semibold mb-5">
            Parent Information
          </h2>

          <div className="space-y-4">

            <Info label="Parent" value={student.parent} />

            <Info
              label="Phone"
              value={student.phone}
            />

            <Info
              label="Teacher"
              value={student.teacher}
            />

            <Info
              label="Attendance"
              value={`${student.attendance}%`}
            />

            <Info
              label="Achievement"
              value={student.badge}
            />

          </div>

        </div>

      </div>

      {/* Progress */}

      <div className="bg-white rounded-2xl border p-6">

        <h2 className="text-xl font-semibold mb-6">
          Learning Progress
        </h2>

        <div className="space-y-5">

          <div>

            <div className="flex justify-between mb-2">
              <span>Overall Progress</span>

              <span>{student.progress}%</span>
            </div>

            <div className="h-3 bg-slate-200 rounded-full">

              <div
                className="h-3 rounded-full bg-green-500"
                style={{
                  width: `${student.progress}%`,
                }}
              />

            </div>

          </div>

          <div className="grid md:grid-cols-3 gap-5">

            <div className="bg-blue-50 rounded-xl p-5">
              <p className="text-slate-500">
                Current Lesson
              </p>

              <h3 className="font-semibold mt-2">
                {student.currentLesson}
              </h3>
            </div>

            <div className="bg-green-50 rounded-xl p-5">
              <p className="text-slate-500">
                Lessons Completed
              </p>

              <h3 className="font-semibold mt-2">
                {student.completedLessons}
              </h3>
            </div>

            <div className="bg-orange-50 rounded-xl p-5">
              <p className="text-slate-500">
                Activities Completed
              </p>

              <h3 className="font-semibold mt-2">
                {student.completedActivities}
              </h3>
            </div>

          </div>

        </div>

      </div>

      {/* Recent Activities */}

      <div className="bg-white rounded-2xl border p-6">

        <h2 className="text-xl font-semibold mb-5">
          Recent Activities
        </h2>

        <div className="space-y-4">

          <Activity
            title="Color Matching"
            status="Completed"
          />

          <Activity
            title="Shape Identification"
            status="Completed"
          />

          <Activity
            title="Number Recognition"
            status="Pending"
          />

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
    <div className="flex justify-between border-b pb-2">
      <span className="text-slate-500">
        {label}
      </span>

      <span className="font-medium">
        {value}
      </span>
    </div>
  );
}

function Activity({
  title,
  status,
}: {
  title: string;
  status: string;
}) {
  return (
    <div className="flex justify-between border-b pb-3">

      <span>{title}</span>

      <span
        className={`px-3 py-1 rounded-full text-sm ${
          status === "Completed"
            ? "bg-green-100 text-green-700"
            : "bg-yellow-100 text-yellow-700"
        }`}
      >
        {status}
      </span>

    </div>
  );
}