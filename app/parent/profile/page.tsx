export default function ParentProfilePage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-slate-800">
          Profile
        </h1>

        <p className="text-slate-500 mt-1">
          Manage your account and child information.
        </p>
      </div>

      {/* Parent Information */}
      <div className="bg-white rounded-2xl p-6 border shadow-sm">
        <h2 className="text-xl font-semibold mb-5">
          Parent Information
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm text-slate-500 mb-2">
              Full Name
            </label>

            <input
              type="text"
              defaultValue="Anurag Yadav"
              className="w-full border rounded-lg p-3"
            />
          </div>

          <div>
            <label className="block text-sm text-slate-500 mb-2">
              Email Address
            </label>

            <input
              type="email"
              defaultValue="parent@example.com"
              className="w-full border rounded-lg p-3"
            />
          </div>

          <div>
            <label className="block text-sm text-slate-500 mb-2">
              Phone Number
            </label>

            <input
              type="text"
              defaultValue="+91 9876543210"
              className="w-full border rounded-lg p-3"
            />
          </div>

          <div>
            <label className="block text-sm text-slate-500 mb-2">
              Relationship
            </label>

            <input
              type="text"
              defaultValue="Father"
              className="w-full border rounded-lg p-3"
            />
          </div>
        </div>
      </div>

      {/* Child Information */}
      <div className="bg-white rounded-2xl p-6 border shadow-sm">
        <h2 className="text-xl font-semibold mb-5">
          Child Information
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm text-slate-500 mb-2">
              Child Name
            </label>

            <input
              type="text"
              defaultValue="Aarav"
              className="w-full border rounded-lg p-3"
            />
          </div>

          <div>
            <label className="block text-sm text-slate-500 mb-2">
              Age Group
            </label>

            <input
              type="text"
              defaultValue="2 - 4 Years"
              className="w-full border rounded-lg p-3"
            />
          </div>

          <div>
            <label className="block text-sm text-slate-500 mb-2">
              Assigned Teacher
            </label>

            <input
              type="text"
              defaultValue="Priya Ma'am"
              className="w-full border rounded-lg p-3"
            />
          </div>

          <div>
            <label className="block text-sm text-slate-500 mb-2">
              Enrollment Date
            </label>

            <input
              type="text"
              defaultValue="01 June 2026"
              className="w-full border rounded-lg p-3"
            />
          </div>
        </div>
      </div>

      {/* Security */}
      <div className="bg-white rounded-2xl p-6 border shadow-sm">
        <h2 className="text-xl font-semibold mb-5">
          Security Settings
        </h2>

        <div className="space-y-4">
          <button className="px-5 py-3 bg-slate-100 rounded-lg hover:bg-slate-200">
            Change Password
          </button>

          <button className="px-5 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 ml-3">
            Logout
          </button>
        </div>
      </div>

      {/* Save Button */}
      <div>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
          Save Changes
        </button>
      </div>
    </div>
  );
}