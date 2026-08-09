export default function ParentDashboardPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-slate-800">
          Parent Dashboard
        </h1>

        <p className="text-slate-500 mt-1">
          Track your child's learning journey and activities.
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
        <div className="bg-white rounded-2xl p-5 border shadow-sm">
          <h3 className="text-slate-500">
            Today's Class
          </h3>

          <p className="text-3xl font-bold mt-2">
            1
          </p>
        </div>

        <div className="bg-white rounded-2xl p-5 border shadow-sm">
          <h3 className="text-slate-500">
            Pending Activities
          </h3>

          <p className="text-3xl font-bold mt-2">
            2
          </p>
        </div>

        <div className="bg-white rounded-2xl p-5 border shadow-sm">
          <h3 className="text-slate-500">
            Completed Activities
          </h3>

          <p className="text-3xl font-bold mt-2">
            15
          </p>
        </div>

        <div className="bg-white rounded-2xl p-5 border shadow-sm">
          <h3 className="text-slate-500">
            Learning Progress
          </h3>

          <p className="text-3xl font-bold mt-2">
            72%
          </p>
        </div>
      </div>

      {/* Child Profile */}
      <div className="bg-white rounded-2xl p-6 border shadow-sm">
        <h2 className="text-xl font-semibold mb-4">
          My Child
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="text-slate-500">
              Child Name
            </p>
            <p className="font-semibold">
              Aarav Sharma
            </p>
          </div>

          <div>
            <p className="text-slate-500">
              Age Group
            </p>
            <p className="font-semibold">
              2 - 4 Years
            </p>
          </div>

          <div>
            <p className="text-slate-500">
              Teacher
            </p>
            <p className="font-semibold">
              Priya Ma'am
            </p>
          </div>

          <div>
            <p className="text-slate-500">
              Enrollment Date
            </p>
            <p className="font-semibold">
              01 June 2026
            </p>
          </div>
        </div>
      </div>

      {/* Upcoming Class */}
      <div className="bg-white rounded-2xl p-6 border shadow-sm">
        <h2 className="text-xl font-semibold mb-4">
          Upcoming Class
        </h2>

        <div className="flex items-center justify-between">
          <div>
            <p className="font-semibold">
              Colors Learning
            </p>

            <p className="text-slate-500">
              Tomorrow • 10:00 AM
            </p>
          </div>

          <button className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Join Class
          </button>
        </div>
      </div>

      {/* Recent Activities */}
      <div className="bg-white rounded-2xl p-6 border shadow-sm">
        <h2 className="text-xl font-semibold mb-4">
          Recent Activities
        </h2>

        <div className="space-y-3">
          <div className="flex items-center justify-between border-b pb-3">
            <span>Color Matching Activity</span>
            <span className="text-green-600 font-medium">
              Completed
            </span>
          </div>

          <div className="flex items-center justify-between border-b pb-3">
            <span>Shapes Matching Activity</span>
            <span className="text-yellow-600 font-medium">
              Pending
            </span>
          </div>

          <div className="flex items-center justify-between">
            <span>Number Counting Activity</span>
            <span className="text-green-600 font-medium">
              Completed
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}