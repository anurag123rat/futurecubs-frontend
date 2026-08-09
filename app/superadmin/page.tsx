import Link from "next/link";

export default function SuperAdminPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-slate-800">
          Super Admin Dashboard
        </h1>

        <p className="text-slate-500 mt-1">
          Welcome to the FutureCubs platform management dashboard.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
        <div className="bg-white rounded-2xl border p-5 shadow-sm">
          <h3 className="text-slate-500">Admins</h3>
          <p className="text-3xl font-bold mt-2">5</p>
        </div>

        <div className="bg-white rounded-2xl border p-5 shadow-sm">
          <h3 className="text-slate-500">Teachers</h3>
          <p className="text-3xl font-bold mt-2">24</p>
        </div>

        <div className="bg-white rounded-2xl border p-5 shadow-sm">
          <h3 className="text-slate-500">Students</h3>
          <p className="text-3xl font-bold mt-2">320</p>
        </div>

        <div className="bg-white rounded-2xl border p-5 shadow-sm">
          <h3 className="text-slate-500">Parents</h3>
          <p className="text-3xl font-bold mt-2">310</p>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-2xl border p-6 shadow-sm">
        <h2 className="text-xl font-semibold mb-5">
          Quick Actions
        </h2>

        <div className="grid md:grid-cols-4 gap-4">
          <Link
            href="/superadmin/admins"
            className="bg-blue-600 text-white rounded-xl py-3 text-center"
          >
            Manage Admins
          </Link>

          <Link
            href="/superadmin/teachers"
            className="bg-green-600 text-white rounded-xl py-3 text-center"
          >
            Manage Teachers
          </Link>

          <Link
            href="/superadmin/students"
            className="bg-purple-600 text-white rounded-xl py-3 text-center"
          >
            Manage Students
          </Link>

          <Link
            href="/superadmin/reports"
            className="bg-orange-600 text-white rounded-xl py-3 text-center"
          >
            View Reports
          </Link>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-2xl border p-6 shadow-sm">
        <h2 className="text-xl font-semibold mb-5">
          Recent Platform Activity
        </h2>

        <div className="space-y-4">
          <div className="flex justify-between border-b pb-3">
            <span>New Admin Added</span>
            <span className="text-slate-500">Today</span>
          </div>

          <div className="flex justify-between border-b pb-3">
            <span>Teacher Created 3 New Lessons</span>
            <span className="text-slate-500">Today</span>
          </div>

          <div className="flex justify-between border-b pb-3">
            <span>28 Activities Completed</span>
            <span className="text-slate-500">Yesterday</span>
          </div>

          <div className="flex justify-between">
            <span>5 New Students Registered</span>
            <span className="text-slate-500">Yesterday</span>
          </div>
        </div>
      </div>
    </div>
  );
}