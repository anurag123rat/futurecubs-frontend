export default function ActivityDetailPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">
        Color Matching Activity
      </h1>

      <div className="bg-white rounded-2xl border p-6">
        <p>
          Match fruits with their correct colors.
        </p>

        <div className="mt-6">
          <h3 className="font-semibold mb-3">
            Preview
          </h3>

          <div className="space-y-3">
            <div>🍎 Apple → Red</div>
            <div>🍌 Banana → Yellow</div>
          </div>
        </div>
      </div>
    </div>
  );
}