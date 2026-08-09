export default function ParentProgressPage() {
  const completedLessons = [
    "Colors Learning",
    "Shapes Learning",
    "Animals Learning",
    "Fruits Learning",
  ];

  const completedActivities = 15;
  const totalActivities = 20;
  const progressPercentage = 75;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-slate-800">
          Learning Progress
        </h1>

        <p className="text-slate-500 mt-1">
          Track your child's learning journey and achievements.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="bg-white rounded-2xl p-5 border shadow-sm">
          <h3 className="text-slate-500">
            Completed Lessons
          </h3>

          <p className="text-3xl font-bold mt-2">
            {completedLessons.length}
          </p>
        </div>

        <div className="bg-white rounded-2xl p-5 border shadow-sm">
          <h3 className="text-slate-500">
            Completed Activities
          </h3>

          <p className="text-3xl font-bold mt-2">
            {completedActivities}
          </p>
        </div>

        <div className="bg-white rounded-2xl p-5 border shadow-sm">
          <h3 className="text-slate-500">
            Overall Progress
          </h3>

          <p className="text-3xl font-bold mt-2">
            {progressPercentage}%
          </p>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="bg-white rounded-2xl p-6 border shadow-sm">
        <div className="flex justify-between mb-3">
          <span className="font-medium">
            Learning Completion
          </span>

          <span className="font-semibold">
            {progressPercentage}%
          </span>
        </div>

        <div className="w-full bg-slate-200 rounded-full h-4">
          <div
            className="bg-green-500 h-4 rounded-full"
            style={{
              width: `${progressPercentage}%`,
            }}
          />
        </div>
      </div>

      {/* Completed Lessons */}
      <div className="bg-white rounded-2xl p-6 border shadow-sm">
        <h2 className="text-xl font-semibold mb-4">
          Completed Lessons
        </h2>

        <div className="space-y-3">
          {completedLessons.map((lesson) => (
            <div
              key={lesson}
              className="flex justify-between items-center border-b pb-3"
            >
              <span>{lesson}</span>

              <span className="text-green-600 font-medium">
                ✓ Completed
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Activity Summary */}
      <div className="bg-white rounded-2xl p-6 border shadow-sm">
        <h2 className="text-xl font-semibold mb-4">
          Activity Summary
        </h2>

        <div className="space-y-3">
          <div className="flex justify-between">
            <span>Total Activities</span>
            <span>{totalActivities}</span>
          </div>

          <div className="flex justify-between">
            <span>Completed Activities</span>
            <span>{completedActivities}</span>
          </div>

          <div className="flex justify-between">
            <span>Pending Activities</span>
            <span>
              {totalActivities - completedActivities}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}