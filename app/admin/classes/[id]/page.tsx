import Link from "next/link";
import {
  GraduationCap,
  Users,
  BookOpen,
  CalendarDays,
  Clock3,
  Video,
} from "lucide-react";

export default function ClassDetailsPage() {
  const classData = {
    id: 1,
    classCode: "CL-0001",
    className: "Sunshine A",
    teacher: "Priya Sharma",
    ageGroup: "2-4 Years",
    lesson: "Colors Learning",
    students: 15,
    schedule: "Monday • Wednesday • Friday",
    time: "10:00 AM",
    duration: "45 Minutes",
    meeting: "https://meet.google.com/demo",
    status: "Active",
  };

  const students = [
    {
      id: 1,
      code: "EC-0001",
      name: "Aarav Sharma",
      progress: 82,
    },
    {
      id: 2,
      code: "EC-0002",
      name: "Siya Verma",
      progress: 75,
    },
    {
      id: 3,
      code: "EC-0003",
      name: "Kabir Singh",
      progress: 91,
    },
  ];

  return (
    <div className="space-y-6">

      {/* Header */}

      <div className="flex flex-col lg:flex-row justify-between lg:items-center gap-5">

        <div>

          <h1 className="text-3xl font-bold">
            {classData.className}
          </h1>

          <p className="text-slate-500 mt-2">
            Class Code : {classData.classCode}
          </p>

          <span className="inline-block mt-3 px-4 py-1 rounded-full bg-green-100 text-green-700">
            {classData.status}
          </span>

        </div>

        <div className="flex gap-3">

          <Link
            href={`/admin/classes/${classData.id}/edit`}
            className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700"
          >
            Edit Class
          </Link>

          <button className="border px-6 py-3 rounded-xl hover:bg-slate-100">
            Assign Students
          </button>

        </div>

      </div>

      {/* Stats */}

      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5">

        <StatCard
          icon={<Users size={24} />}
          title="Students"
          value={classData.students.toString()}
        />

        <StatCard
          icon={<GraduationCap size={24} />}
          title="Teacher"
          value={classData.teacher}
        />

        <StatCard
          icon={<BookOpen size={24} />}
          title="Current Lesson"
          value={classData.lesson}
        />

        <StatCard
          icon={<CalendarDays size={24} />}
          title="Age Group"
          value={classData.ageGroup}
        />

      </div>

      {/* Information */}

      <div className="grid lg:grid-cols-2 gap-6">

        <div className="bg-white rounded-2xl border p-6">

          <h2 className="font-semibold text-xl mb-5">
            Class Information
          </h2>

          <Info label="Class Code" value={classData.classCode} />
          <Info label="Teacher" value={classData.teacher} />
          <Info label="Age Group" value={classData.ageGroup} />
          <Info label="Current Lesson" value={classData.lesson} />

        </div>

        <div className="bg-white rounded-2xl border p-6">

          <h2 className="font-semibold text-xl mb-5">
            Schedule
          </h2>

          <Info
            label="Weekly"
            value={classData.schedule}
          />

          <Info
            label="Time"
            value={classData.time}
          />

          <Info
            label="Duration"
            value={classData.duration}
          />

          <div className="flex items-center justify-between border-b py-3">

            <span className="text-slate-500">
              Meeting Link
            </span>

            <a
              href={classData.meeting}
              className="text-blue-600"
            >
              Open Link
            </a>

          </div>

        </div>

      </div>

      {/* Students */}

      <div className="bg-white rounded-2xl border p-6">

        <div className="flex justify-between items-center mb-5">

          <h2 className="text-xl font-semibold">
            Students
          </h2>

          <button className="bg-blue-600 text-white px-5 py-2 rounded-xl">
            + Assign Student
          </button>

        </div>

        <div className="space-y-4">

          {students.map((student) => (

            <div
              key={student.id}
              className="flex justify-between items-center border rounded-xl p-4"
            >

              <div>

                <h3 className="font-semibold">
                  {student.name}
                </h3>

                <p className="text-sm text-slate-500">
                  {student.code}
                </p>

              </div>

              <div className="text-right">

                <p className="font-semibold">
                  {student.progress}%
                </p>

                <p className="text-sm text-slate-500">
                  Progress
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>

      {/* Quick Actions */}

      <div className="bg-white rounded-2xl border p-6">

        <h2 className="text-xl font-semibold mb-5">
          Quick Actions
        </h2>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4">

          <ActionCard
            icon={<BookOpen />}
            title="Assign Lesson"
          />

          <ActionCard
            icon={<Users />}
            title="Manage Students"
          />

          <ActionCard
            icon={<Clock3 />}
            title="Attendance"
          />

          <ActionCard
            icon={<Video />}
            title="Start Live Class"
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
    <div className="flex justify-between border-b py-3">
      <span className="text-slate-500">
        {label}
      </span>

      <span className="font-medium">
        {value}
      </span>
    </div>
  );
}

function StatCard({
  icon,
  title,
  value,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
}) {
  return (
    <div className="bg-white rounded-2xl border p-5">

      <div className="text-blue-600">
        {icon}
      </div>

      <p className="text-slate-500 mt-3">
        {title}
      </p>

      <h3 className="font-bold mt-2 text-lg">
        {value}
      </h3>

    </div>
  );
}

function ActionCard({
  icon,
  title,
}: {
  icon: React.ReactNode;
  title: string;
}) {
  return (
    <button className="border rounded-xl p-6 hover:bg-slate-50 transition">

      <div className="text-blue-600 mb-3">
        {icon}
      </div>

      <h3 className="font-semibold">
        {title}
      </h3>

    </button>
  );
}