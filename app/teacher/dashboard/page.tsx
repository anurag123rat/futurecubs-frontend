import {
  CalendarDays,
  Users,
  FileClock,
  CheckCircle,
  Clock3,
} from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-slate-50 p-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-800">
          Teacher Dashboard 👩‍🏫
        </h1>
        <p className="text-slate-500 mt-1">
          Welcome back! Here's today's overview.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 mb-8">
        <div className="bg-white rounded-2xl p-5 shadow-sm border">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-slate-500 text-sm">Today's Classes</p>
              <h2 className="text-3xl font-bold mt-2">8</h2>
            </div>
            <CalendarDays className="text-indigo-600" size={34} />
          </div>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow-sm border">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-slate-500 text-sm">Total Students</p>
              <h2 className="text-3xl font-bold mt-2">42</h2>
            </div>
            <Users className="text-green-600" size={34} />
          </div>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow-sm border">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-slate-500 text-sm">
                Pending Worksheets
              </p>
              <h2 className="text-3xl font-bold mt-2">12</h2>
            </div>
            <FileClock className="text-orange-500" size={34} />
          </div>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow-sm border">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-slate-500 text-sm">
                Completed Worksheets
              </p>
              <h2 className="text-3xl font-bold mt-2">78</h2>
            </div>
            <CheckCircle className="text-blue-600" size={34} />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Upcoming Classes */}
        <div className="bg-white rounded-2xl shadow-sm border p-6">
          <h2 className="text-xl font-semibold mb-5">
            Upcoming Classes
          </h2>

          <div className="space-y-4">
            {[
              { time: "09:00 AM", name: "Aarav" },
              { time: "10:00 AM", name: "Siya" },
              { time: "11:00 AM", name: "Kabir" },
            ].map((item) => (
              <div
                key={item.name}
                className="flex items-center justify-between p-4 bg-slate-50 rounded-xl"
              >
                <div className="flex items-center gap-3">
                  <Clock3 size={18} className="text-indigo-600" />
                  <span className="font-medium">{item.time}</span>
                </div>

                <span className="font-semibold text-slate-700">
                  {item.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Pending Reviews */}
        <div className="bg-white rounded-2xl shadow-sm border p-6">
          <h2 className="text-xl font-semibold mb-5">
            Pending Worksheet Reviews
          </h2>

          <div className="space-y-3">
            {["Aarav", "Kabir", "Vivaan"].map((student) => (
              <div
                key={student}
                className="flex items-center justify-between p-4 bg-orange-50 rounded-xl"
              >
                <span className="font-medium">{student}</span>

                <button className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition">
                  Review
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-2xl shadow-sm border p-6 lg:col-span-2">
          <h2 className="text-xl font-semibold mb-5">
            Recent Student Activity
          </h2>

          <div className="space-y-4">
            <div className="flex items-center gap-3 p-4 bg-green-50 rounded-xl">
              <CheckCircle
                size={18}
                className="text-green-600 shrink-0"
              />
              <p>
                <span className="font-semibold">Aarav</span> completed
                Color Matching Worksheet
              </p>
            </div>

            <div className="flex items-center gap-3 p-4 bg-green-50 rounded-xl">
              <CheckCircle
                size={18}
                className="text-green-600 shrink-0"
              />
              <p>
                <span className="font-semibold">Siya</span> completed
                Number Recognition Worksheet
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}