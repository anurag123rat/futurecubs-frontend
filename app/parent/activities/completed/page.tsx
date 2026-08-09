import Link from "next/link";

export default function ActivityCompletedPage() {
  return (
    <div className="max-w-4xl mx-auto py-10">
      <div className="bg-white border rounded-3xl p-10 shadow-sm text-center">
        <div className="text-7xl mb-4">
          🎉
        </div>

        <h1 className="text-4xl font-bold text-slate-800">
          Great Job Aarav!
        </h1>

        <p className="text-slate-500 mt-3 text-lg">
          You have successfully completed this activity.
        </p>

        {/* Score Card */}

        <div className="grid md:grid-cols-3 gap-5 mt-10">
          <div className="bg-green-50 border border-green-200 rounded-2xl p-5">
            <h3 className="text-slate-500 text-sm">
              Score
            </h3>

            <p className="text-3xl font-bold text-green-600 mt-2">
              10 / 10
            </p>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-2xl p-5">
            <h3 className="text-slate-500 text-sm">
              Lesson
            </h3>

            <p className="text-xl font-semibold mt-2">
              Colors Learning
            </p>
          </div>

          <div className="bg-purple-50 border border-purple-200 rounded-2xl p-5">
            <h3 className="text-slate-500 text-sm">
              Progress
            </h3>

            <p className="text-3xl font-bold text-purple-600 mt-2">
              80%
            </p>
          </div>
        </div>

        {/* Achievement */}

        <div className="mt-10 bg-yellow-50 border border-yellow-200 rounded-2xl p-6">
          <h2 className="font-semibold text-xl">
            ⭐ Achievement Unlocked
          </h2>

          <p className="text-slate-600 mt-2">
            Color Explorer Badge Earned
          </p>
        </div>

        {/* Buttons */}

        <div className="flex flex-col md:flex-row gap-4 justify-center mt-10">
          <Link
            href="/parent/activities"
            className="px-6 py-3 border rounded-xl hover:bg-slate-100"
          >
            Back To Activities
          </Link>

          <Link
            href="/parent/activities/2"
            className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700"
          >
            Next Activity →
          </Link>
        </div>
      </div>
    </div>
  );
}
