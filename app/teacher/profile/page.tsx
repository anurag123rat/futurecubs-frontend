export default function ProfilePage() {
  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-slate-800">
          Profile Settings
        </h1>
        <p className="text-slate-500 mt-1">
          Manage your Profile information, change password and update
          notification preferences.
        </p>
      </div>

      {/* Profile Information */}
      <div className="bg-white rounded-2xl border shadow-sm p-6">
        <h2 className="text-xl font-semibold mb-6">
          Personal Information
        </h2>

        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-2">
              Profile Picture
            </label>

            <input
              type="file"
              accept="image/*"
              className="w-full px-4 py-3 border rounded-xl"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-medium mb-2">
                Full Name
              </label>

              <input
                type="text"
                placeholder="Enter full name"
                className="w-full px-4 py-3 border rounded-xl"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Email Address
              </label>

              <input
                type="email"
                placeholder="Enter email address"
                className="w-full px-4 py-3 border rounded-xl"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Phone Number
              </label>

              <input
                type="tel"
                placeholder="Enter phone number"
                className="w-full px-4 py-3 border rounded-xl"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Experience (Years)
              </label>

              <input
                type="number"
                placeholder="Enter experience"
                className="w-full px-4 py-3 border rounded-xl"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Qualification
              </label>

              <input
                type="text"
                placeholder="B.Ed, M.Ed, etc."
                className="w-full px-4 py-3 border rounded-xl"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Specialization
              </label>

              <input
                type="text"
                placeholder="Early Childhood Education"
                className="w-full px-4 py-3 border rounded-xl"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Bio
            </label>

            <textarea
              rows={4}
              placeholder="Tell us about yourself..."
              className="w-full px-4 py-3 border rounded-xl"
            />
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="px-6 py-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700"
            >
              Save Profile
            </button>
          </div>
        </form>
      </div>

      {/* Change Password */}
      <div className="bg-white rounded-2xl border shadow-sm p-6">
        <h2 className="text-xl font-semibold mb-6">
          Change Password
        </h2>

        <div className="space-y-4">
          <input
            type="password"
            placeholder="Current Password"
            className="w-full px-4 py-3 border rounded-xl"
          />

          <input
            type="password"
            placeholder="New Password"
            className="w-full px-4 py-3 border rounded-xl"
          />

          <input
            type="password"
            placeholder="Confirm New Password"
            className="w-full px-4 py-3 border rounded-xl"
          />

          <button className="px-5 py-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700">
            Update Password
          </button>
        </div>
      </div>

      {/* Notification Settings */}
      <div className="bg-white rounded-2xl border shadow-sm p-6">
        <h2 className="text-xl font-semibold mb-6">
          Notification Settings
        </h2>

        <div className="space-y-5">
          <label className="flex items-center justify-between">
            <span>Email Notifications</span>
            <input type="checkbox" />
          </label>

          <label className="flex items-center justify-between">
            <span>Class Reminders</span>
            <input type="checkbox" />
          </label>

          <label className="flex items-center justify-between">
            <span>Worksheet Submissions</span>
            <input type="checkbox" />
          </label>
        </div>
      </div>

      {/* Danger Zone */}
      <div className="bg-white rounded-2xl border shadow-sm p-6">
        <h2 className="text-xl font-semibold text-red-600 mb-4">
          Danger Zone
        </h2>

        <div className="flex gap-4">
          <button className="px-5 py-3 border rounded-xl">
            Logout
          </button>

          <button className="px-5 py-3 bg-red-600 text-white rounded-xl hover:bg-red-700">
            Delete Account
          </button>
        </div>
      </div>
    </div>
  );
}