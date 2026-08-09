export default function ClassPage() {
  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-slate-800">
          Class Details
        </h1>
        <p className="text-slate-500 mt-1">
          Manage class schedule, students and meeting links.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
        <div className="bg-white border rounded-2xl p-5 shadow-sm">
          <p className="text-sm text-slate-500">
            Class Name
          </p>
          <h2 className="text-xl font-semibold mt-2">
            Color Matching
          </h2>
        </div>

        <div className="bg-white border rounded-2xl p-5 shadow-sm">
          <p className="text-sm text-slate-500">
            Students Enrolled
          </p>
          <h2 className="text-3xl font-bold mt-2">
            12
          </h2>
        </div>

        <div className="bg-white border rounded-2xl p-5 shadow-sm">
          <p className="text-sm text-slate-500">
            Class Time
          </p>
          <h2 className="text-xl font-semibold mt-2">
            09:00 AM
          </h2>
        </div>

        <div className="bg-white border rounded-2xl p-5 shadow-sm">
          <p className="text-sm text-slate-500">
            Status
          </p>
          <h2 className="text-xl font-semibold mt-2 text-green-600">
            Upcoming
          </h2>
        </div>
      </div>

      {/* Meet Link */}
      <div className="bg-white border rounded-2xl p-6 shadow-sm">
        <h2 className="text-xl font-semibold mb-4">
          Meeting Link
        </h2>

        <div className="flex flex-col md:flex-row gap-4">
          <input
            type="text"
            value="https://meet.google.com/abc-xyz"
            readOnly
            className="flex-1 border rounded-xl px-4 py-3 bg-slate-50"
          />

          <button className="bg-green-600 text-white px-5 py-3 rounded-xl hover:bg-green-700">
            Generate New Link
          </button>
        </div>
      </div>

      {/* Students */}
      <div className="bg-white border rounded-2xl p-6 shadow-sm">
        <h2 className="text-xl font-semibold mb-4">
          Enrolled Students
        </h2>

        <div className="space-y-3">
          {["Aarav", "Siya", "Kabir", "Vivaan"].map(
            (student) => (
              <div
                key={student}
                className="flex items-center justify-between p-4 bg-slate-50 rounded-xl"
              >
                <span>{student}</span>

                <button className="text-indigo-600 font-medium">
                  View Profile
                </button>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}