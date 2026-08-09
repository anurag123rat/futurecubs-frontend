import Link from "next/link";

export default function TeacherDetailPage() {
  const teacher = {
    id: 1,
    name: "Priya Sharma",
    email: "priya@gmail.com",
    phone: "+91 9876543210",
    qualification: "M.Ed",
    experience: "5 Years",
    specialization: "Early Childhood Education",
    ageGroup: "2-4 Years",
    students: 24,
    lessons: 12,
    activities: 120,
    attendance: "98%",
    status: "Active",
  };

  return (
    <div className="space-y-6">

      {/* Header */}

      <div className="flex items-center justify-between">

        <div className="flex items-center gap-5">

          <div className="w-24 h-24 rounded-full bg-blue-100 flex items-center justify-center text-4xl font-bold text-blue-700">
            {teacher.name.charAt(0)}
          </div>

          <div>
            <h1 className="text-3xl font-bold">
              {teacher.name}
            </h1>

            <p className="text-slate-500">
              {teacher.specialization}
            </p>

            <span className="inline-block mt-3 px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm">
              {teacher.status}
            </span>
          </div>

        </div>

        <Link
          href={`/admin/teachers/${teacher.id}/edit`}
          className="px-5 py-3 rounded-xl bg-blue-600 text-white hover:bg-blue-700"
        >
          Edit Teacher
        </Link>

      </div>

      {/* Stats */}

      <div className="grid md:grid-cols-4 gap-5">

        <div className="bg-white border rounded-2xl p-5">
          <p className="text-slate-500">
            Students
          </p>

          <h2 className="text-3xl font-bold mt-2">
            {teacher.students}
          </h2>
        </div>

        <div className="bg-white border rounded-2xl p-5">
          <p className="text-slate-500">
            Lessons
          </p>

          <h2 className="text-3xl font-bold mt-2">
            {teacher.lessons}
          </h2>
        </div>

        <div className="bg-white border rounded-2xl p-5">
          <p className="text-slate-500">
            Activities
          </p>

          <h2 className="text-3xl font-bold mt-2">
            {teacher.activities}
          </h2>
        </div>

        <div className="bg-white border rounded-2xl p-5">
          <p className="text-slate-500">
            Attendance
          </p>

          <h2 className="text-3xl font-bold mt-2">
            {teacher.attendance}
          </h2>
        </div>

      </div>

      {/* Information */}

      <div className="grid lg:grid-cols-2 gap-6">

        <div className="bg-white border rounded-2xl p-6">

          <h2 className="text-xl font-semibold mb-5">
            Teacher Information
          </h2>

          <div className="space-y-4">

            <div>
              <p className="text-slate-500">Email</p>
              <p>{teacher.email}</p>
            </div>

            <div>
              <p className="text-slate-500">Phone</p>
              <p>{teacher.phone}</p>
            </div>

            <div>
              <p className="text-slate-500">Qualification</p>
              <p>{teacher.qualification}</p>
            </div>

            <div>
              <p className="text-slate-500">Experience</p>
              <p>{teacher.experience}</p>
            </div>

            <div>
              <p className="text-slate-500">Age Group</p>
              <p>{teacher.ageGroup}</p>
            </div>

          </div>

        </div>

        <div className="bg-white border rounded-2xl p-6">

          <h2 className="text-xl font-semibold mb-5">
            Assigned Summary
          </h2>

          <div className="space-y-5">

            <div className="flex justify-between">
              <span>Students</span>
              <strong>{teacher.students}</strong>
            </div>

            <div className="flex justify-between">
              <span>Lessons</span>
              <strong>{teacher.lessons}</strong>
            </div>

            <div className="flex justify-between">
              <span>Activities</span>
              <strong>{teacher.activities}</strong>
            </div>

            <div className="flex justify-between">
              <span>Attendance</span>
              <strong>{teacher.attendance}</strong>
            </div>

          </div>

        </div>

      </div>

      {/* Recent Classes */}

      <div className="bg-white border rounded-2xl p-6">

        <h2 className="text-xl font-semibold mb-5">
          Recent Classes
        </h2>

        <div className="space-y-4">

          <div className="flex justify-between border-b pb-3">
            <span>Colors Learning</span>
            <span>Today 10:00 AM</span>
          </div>

          <div className="flex justify-between border-b pb-3">
            <span>Shapes Learning</span>
            <span>Yesterday</span>
          </div>

          <div className="flex justify-between">
            <span>Numbers Learning</span>
            <span>2 Days Ago</span>
          </div>

        </div>

      </div>

    </div>
  );
}