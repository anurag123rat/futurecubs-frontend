export default function EditActivityPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">
        Edit Activity
      </h1>

      <div className="bg-white rounded-2xl border p-6">
        <div className="space-y-5">
          <div>
            <label className="block mb-2 font-medium">
              Activity Title
            </label>

            <input
              defaultValue="Color Matching"
              className="w-full border rounded-lg p-3"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Question
            </label>

            <textarea
              rows={4}
              defaultValue="Match fruits with colors"
              className="w-full border rounded-lg p-3"
            />
          </div>

          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg">
            Update Activity
          </button>
        </div>
      </div>
    </div>
  );
}