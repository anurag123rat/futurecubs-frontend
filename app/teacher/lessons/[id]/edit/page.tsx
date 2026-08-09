interface LessonEditProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function EditLessonPage({
  params,
}: LessonEditProps) {
  const { id } = await params;

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">
        Edit Lesson
      </h1>

      <div className="bg-white rounded-2xl p-6 shadow border">
        <div className="space-y-5">
          <div>
            <label className="block mb-2 font-medium">
              Lesson Title
            </label>

            <input
              defaultValue="Colors Learning"
              className="w-full border rounded-lg p-3"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Description
            </label>

            <textarea
              rows={4}
              defaultValue="Learn primary colors through interactive activities."
              className="w-full border rounded-lg p-3"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Update Slides
            </label>

            <input
              type="file"
              multiple
              className="w-full border rounded-lg p-3"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Worksheet
            </label>

            <select className="w-full border rounded-lg p-3">
              <option>Color Matching</option>
              <option>Shapes Activity</option>
              <option>Number Counting</option>
            </select>
          </div>

          <div className="flex gap-3">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg">
              Update Lesson
            </button>

            <button className="bg-red-600 text-white px-6 py-3 rounded-lg">
              Delete Lesson
            </button>
          </div>

          <p className="text-sm text-gray-500">
            Lesson ID: {id}
          </p>
        </div>
      </div>
    </div>
  );
}