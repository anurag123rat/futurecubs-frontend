export default function AttendancePage() {
  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-slate-800">
          Teacher Attendance
        </h1>

        <p className="text-slate-500 mt-1">
          Mark your attendance and view attendance records.
        </p>
      </div>

      {/* Attendance Status Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="bg-white rounded-2xl border shadow-sm p-5">
          <p className="text-sm text-slate-500">
            Present Days
          </p>

          <h2 className="text-3xl font-bold mt-2">
            22
          </h2>
        </div>

        <div className="bg-white rounded-2xl border shadow-sm p-5">
          <p className="text-sm text-slate-500">
            Absent Days
          </p>

          <h2 className="text-3xl font-bold mt-2">
            2
          </h2>
        </div>

        <div className="bg-white rounded-2xl border shadow-sm p-5">
          <p className="text-sm text-slate-500">
            Attendance Rate
          </p>

          <h2 className="text-3xl font-bold mt-2 text-green-600">
            92%
          </h2>
        </div>
      </div>

      {/* Mark Attendance */}
      <div className="bg-white rounded-2xl border shadow-sm p-6">
        <h2 className="text-xl font-semibold mb-4">
          Mark Today's Attendance
        </h2>

        <div className="flex flex-col md:flex-row gap-4 items-center">
          <div className="flex-1">
            <p className="text-slate-600">
              Date: 17 June 2026
            </p>

            <p className="text-slate-500 text-sm mt-1">
              Click the button below to mark your attendance.
            </p>
          </div>

          <button className="px-6 py-3 bg-green-600 text-white rounded-xl hover:bg-green-700">
            Mark Present
          </button>
        </div>
      </div>

      {/* Today's Status */}
      <div className="bg-white rounded-2xl border shadow-sm p-6">
        <h2 className="text-xl font-semibold mb-4">
          Today's Status
        </h2>

        <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-700 rounded-full">
          Present
        </div>
      </div>

      {/* Attendance History */}
      <div className="bg-white rounded-2xl border shadow-sm p-6">
        <h2 className="text-xl font-semibold mb-4">
          Recent Attendance
        </h2>

        <div className="space-y-3">
          <div className="flex justify-between items-center p-4 bg-slate-50 rounded-xl">
            <span>17 Jun 2026</span>
            <span className="text-green-600 font-medium">
              Present
            </span>
          </div>

          <div className="flex justify-between items-center p-4 bg-slate-50 rounded-xl">
            <span>16 Jun 2026</span>
            <span className="text-green-600 font-medium">
              Present
            </span>
          </div>

          <div className="flex justify-between items-center p-4 bg-slate-50 rounded-xl">
            <span>15 Jun 2026</span>
            <span className="text-red-600 font-medium">
              Absent
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}