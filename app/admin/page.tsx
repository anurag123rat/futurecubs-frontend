export default function AdminDashboardPage() {
  return (
    <div className="space-y-6">
      {/* Header */}

      <div>
        <h1 className="text-3xl font-bold text-slate-800">
          Admin Dashboard
        </h1>

        <p className="text-slate-500 mt-1">
          Manage teachers, students, lessons and activities.
        </p>
      </div>

      {/* Stats */}

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
        <div className="bg-white rounded-2xl border p-5 shadow-sm">
          <h3 className="text-slate-500 text-sm">
            Teachers
          </h3>

          <p className="text-3xl font-bold mt-2">
            12
          </p>
        </div>

        <div className="bg-white rounded-2xl border p-5 shadow-sm">
          <h3 className="text-slate-500 text-sm">
            Students
          </h3>

          <p className="text-3xl font-bold mt-2">
            85
          </p>
        </div>

        <div className="bg-white rounded-2xl border p-5 shadow-sm">
          <h3 className="text-slate-500 text-sm">
            Lessons
          </h3>

          <p className="text-3xl font-bold mt-2">
            36
          </p>
        </div>

        <div className="bg-white rounded-2xl border p-5 shadow-sm">
          <h3 className="text-slate-500 text-sm">
            Activities
          </h3>

          <p className="text-3xl font-bold mt-2">
            360
          </p>
        </div>
      </div>

      {/* Quick Actions */}

      <div className="bg-white rounded-2xl border p-6">
        <h2 className="text-xl font-semibold mb-5">
          Quick Actions
        </h2>

        <div className="grid md:grid-cols-3 gap-4">
          <button className="bg-blue-600 text-white rounded-xl py-3">
            + Add Teacher
          </button>

          <button className="bg-green-600 text-white rounded-xl py-3">
            + Add Student
          </button>

          <button className="bg-purple-600 text-white rounded-xl py-3">
            + Create Lesson
          </button>
        </div>
      </div>

      {/* Recent Activities */}

      <div className="bg-white rounded-2xl border p-6">
        <h2 className="text-xl font-semibold mb-5">
          Recent Activities
        </h2>

        <div className="space-y-4">
          <div className="flex justify-between border-b pb-3">
            <span>
              New Teacher Added
            </span>

            <span className="text-slate-500">
              Today
            </span>
          </div>

          <div className="flex justify-between border-b pb-3">
            <span>
              Colors Lesson Published
            </span>

            <span className="text-slate-500">
              Today
            </span>
          </div>

          <div className="flex justify-between">
            <span>
              5 Students Completed Activities
            </span>

            <span className="text-slate-500">
              Yesterday
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}