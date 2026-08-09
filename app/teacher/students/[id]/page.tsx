export default function StudentDetailPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-slate-800">
          Student Details
        </h1>

        <p className="text-slate-500 mt-1">
          Track learning progress and activities.
        </p>
      </div>

      {/* Student Profile */}
      <div className="bg-white rounded-2xl border p-6 shadow-sm">
        <div className="flex items-center gap-5">
          <div className="w-20 h-20 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center text-3xl font-bold">
            A
          </div>

          <div>
            <h2 className="text-2xl font-bold">
              Aarav Sharma
            </h2>

            <p className="text-slate-500">
              Age: 2 Years 4 Months
            </p>

            <p className="text-slate-500">
              Age Group: 2 - 4 Years
            </p>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid md:grid-cols-3 gap-5">
        <div className="bg-white rounded-2xl border p-5 shadow-sm">
          <h3 className="text-slate-500">
            Current Lesson
          </h3>

          <p className="text-xl font-bold mt-2">
            Colors Learning
          </p>
        </div>

        <div className="bg-white rounded-2xl border p-5 shadow-sm">
          <h3 className="text-slate-500">
            Completed Activities
          </h3>

          <p className="text-xl font-bold mt-2">
            7 / 10
          </p>
        </div>

        <div className="bg-white rounded-2xl border p-5 shadow-sm">
          <h3 className="text-slate-500">
            Overall Progress
          </h3>

          <p className="text-xl font-bold mt-2">
            70%
          </p>
        </div>
      </div>

      {/* Progress */}
      <div className="bg-white rounded-2xl border p-6 shadow-sm">
        <h2 className="text-xl font-semibold mb-5">
          Activity Progress
        </h2>

        <div className="space-y-4">
          <div className="flex justify-between">
            <span>Activity 1</span>
            <span className="text-green-600">
              ✓ Completed
            </span>
          </div>

          <div className="flex justify-between">
            <span>Activity 2</span>
            <span className="text-green-600">
              ✓ Completed
            </span>
          </div>

          <div className="flex justify-between">
            <span>Activity 3</span>
            <span className="text-green-600">
              ✓ Completed
            </span>
          </div>

          <div className="flex justify-between">
            <span>Activity 4</span>
            <span className="text-green-600">
              ✓ Completed
            </span>
          </div>

          <div className="flex justify-between">
            <span>Activity 5</span>
            <span className="text-green-600">
              ✓ Completed
            </span>
          </div>

          <div className="flex justify-between">
            <span>Activity 6</span>
            <span className="text-green-600">
              ✓ Completed
            </span>
          </div>

          <div className="flex justify-between">
            <span>Activity 7</span>
            <span className="text-green-600">
              ✓ Completed
            </span>
          </div>

          <div className="flex justify-between">
            <span>Activity 8</span>
            <span className="text-yellow-600">
              ⏳ In Progress
            </span>
          </div>

          <div className="flex justify-between">
            <span>Activity 9</span>
            <span className="text-slate-400">
              🔒 Locked
            </span>
          </div>

          <div className="flex justify-between">
            <span>Activity 10</span>
            <span className="text-slate-400">
              🔒 Locked
            </span>
          </div>
        </div>
      </div>

      {/* Next Lesson */}
      <div className="bg-white rounded-2xl border p-6 shadow-sm">
        <h2 className="text-xl font-semibold mb-3">
          Next Lesson
        </h2>

        <p className="font-medium">
          Shapes Learning
        </p>

        <p className="text-slate-500 mt-1">
          Will unlock after Colors Learning is completed.
        </p>
      </div>

      {/* Actions */}
      <div className="flex gap-4">
        <button className="px-5 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700">
          Start Class
        </button>

        <button className="px-5 py-3 border rounded-xl hover:bg-slate-100">
          View Report
        </button>
      </div>
    </div>
  );
}