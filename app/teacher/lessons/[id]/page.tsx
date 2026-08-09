interface LessonViewProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function LessonViewPage({
  params,
}: LessonViewProps) {
  const { id } = await params;

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">
          Lesson Details
        </h1>

        <button className="bg-green-600 text-white px-5 py-2 rounded-lg">
          Start Class
        </button>
      </div>

      <div className="bg-white rounded-2xl p-6 border shadow">
        <h2 className="text-2xl font-semibold">
          Colors Learning
        </h2>

        <p className="text-gray-600 mt-2">
          Learn primary colors through
          interactive activities.
        </p>

        <div className="mt-6">
          <h3 className="font-semibold mb-3">
            Slides
          </h3>

          <div className="space-y-2">
            <div>Slide 1</div>
            <div>Slide 2</div>
            <div>Slide 3</div>
            <div>Activity Slide</div>
          </div>
        </div>

        <div className="mt-6">
          <h3 className="font-semibold">
            Worksheet
          </h3>

          <p className="text-gray-600">
            Color Matching Activity
          </p>
        </div>

        <p className="mt-8 text-sm text-gray-500">
          Lesson ID: {id}
        </p>
      </div>
    </div>
  );
}