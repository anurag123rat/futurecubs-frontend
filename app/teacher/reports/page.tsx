export default function ReportsPage() {
  return (
    <div className="p-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-800">
          Reports
        </h1>
        <p className="text-slate-500 mt-2">
          View detailed reports on student performance,
          attendance, worksheets, and class progress.
        </p>
      </div>

      {/* Report Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        <div className="bg-white rounded-2xl border p-6 shadow-sm">
          <p className="text-sm text-slate-500">
            Total Students
          </p>
          <h2 className="text-4xl font-bold mt-3">
            42
          </h2>
        </div>

        <div className="bg-white rounded-2xl border p-6 shadow-sm">
          <p className="text-sm text-slate-500">
            Attendance Report
          </p>
          <h2 className="text-4xl font-bold mt-3">
            92%
          </h2>
        </div>

        <div className="bg-white rounded-2xl border p-6 shadow-sm">
          <p className="text-sm text-slate-500">
            Worksheet Performance
          </p>
          <h2 className="text-4xl font-bold mt-3">
            85%
          </h2>
        </div>

        <div className="bg-white rounded-2xl border p-6 shadow-sm">
          <p className="text-sm text-slate-500">
            Class Completion Rate
          </p>
          <h2 className="text-4xl font-bold mt-3">
            96%
          </h2>
        </div>
      </div>

      {/* Detailed Report Section */}
      <div className="mt-8 bg-white rounded-2xl border shadow-sm p-6">
        <h3 className="text-xl font-semibold mb-4">
          Report Summary
        </h3>

        <div className="space-y-4">
          <div className="flex justify-between border-b pb-3">
            <span>Total Classes Conducted</span>
            <span className="font-semibold">120</span>
          </div>

          <div className="flex justify-between border-b pb-3">
            <span>Total Worksheets Assigned</span>
            <span className="font-semibold">78</span>
          </div>

          <div className="flex justify-between border-b pb-3">
            <span>Total Worksheets Submitted</span>
            <span className="font-semibold">65</span>
          </div>

          <div className="flex justify-between">
            <span>Average Student Progress</span>
            <span className="font-semibold">88%</span>
          </div>
        </div>
      </div>
    </div>
  );
}