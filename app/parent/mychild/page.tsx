export default function MyChildPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-slate-800">
          My Child
        </h1>

        <p className="text-slate-500 mt-1">
          View your child's learning information.
        </p>
      </div>

      <div className="bg-white rounded-2xl border p-6 shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <p className="text-slate-500 text-sm">
              Child Name
            </p>
            <p className="font-semibold text-lg">
              Aarav Sharma
            </p>
          </div>

          <div>
            <p className="text-slate-500 text-sm">
              Age Group
            </p>
            <p className="font-semibold text-lg">
              2 - 4 Years
            </p>
          </div>

          <div>
            <p className="text-slate-500 text-sm">
              Assigned Teacher
            </p>
            <p className="font-semibold text-lg">
              Priya Ma'am
            </p>
          </div>

          <div>
            <p className="text-slate-500 text-sm">
              Enrollment Date
            </p>
            <p className="font-semibold text-lg">
              01 June 2026
            </p>
          </div>

          <div>
            <p className="text-slate-500 text-sm">
              Completed Lessons
            </p>
            <p className="font-semibold text-lg">
              12
            </p>
          </div>

          <div>
            <p className="text-slate-500 text-sm">
              Completed Activities
            </p>
            <p className="font-semibold text-lg">
              15
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl border p-6 shadow-sm">
        <h2 className="text-xl font-semibold mb-4">
          Current Learning Path
        </h2>

        <div className="space-y-3">
          <div className="flex justify-between border-b pb-3">
            <span>Colors Learning</span>
            <span className="text-green-600">
              Completed
            </span>
          </div>

          <div className="flex justify-between border-b pb-3">
            <span>Shapes Learning</span>
            <span className="text-green-600">
              Completed
            </span>
          </div>

          <div className="flex justify-between">
            <span>Animals Learning</span>
            <span className="text-yellow-600">
              In Progress
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}