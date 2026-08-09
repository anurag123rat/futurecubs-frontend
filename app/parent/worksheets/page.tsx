import Link from "next/link";

export default function ParentActivitiesPage() {
  const activities = [
    {
      id: 1,
      title: "Color Matching Activity",
      lesson: "Colors Learning",
      status: "Pending",
    },
    {
      id: 2,
      title: "Shapes Matching Activity",
      lesson: "Shapes Learning",
      status: "Completed",
    },
    {
      id: 3,
      title: "Number Counting Activity",
      lesson: "Numbers Learning",
      status: "Pending",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-slate-800">
          Activities
        </h1>

        <p className="text-slate-500 mt-1">
          Complete activities assigned by your teacher.
        </p>
      </div>

      {/* Activity Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {activities.map((activity) => (
          <div
            key={activity.id}
            className="bg-white border rounded-2xl p-5 shadow-sm"
          >
            <div className="flex justify-between items-start">
              <h2 className="font-semibold text-lg">
                {activity.title}
              </h2>

              <span
                className={`px-3 py-1 rounded-full text-xs font-medium ${
                  activity.status === "Completed"
                    ? "bg-green-100 text-green-700"
                    : "bg-yellow-100 text-yellow-700"
                }`}
              >
                {activity.status}
              </span>
            </div>

            <p className="text-slate-500 mt-3">
              Lesson: {activity.lesson}
            </p>

            <Link
              href={`/parent/activities/${activity.id}`}
              className="block mt-5 text-center bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
            >
              {activity.status === "Completed"
                ? "View Activity"
                : "Start Activity"}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}