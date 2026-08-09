export default function LoginBanner() {
  return (
    <div className="hidden lg:flex flex-col justify-center bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-700 text-white p-16">
      <div className="max-w-md">

        <span className="inline-block px-4 py-2 rounded-full bg-white/20 text-sm">
          FutureCubs
        </span>

        <h1 className="text-5xl font-bold mt-8 leading-tight">
          Welcome Back 👋
        </h1>

        <p className="mt-6 text-lg text-blue-100 leading-8">
          One login for every role.
          Whether you're a Super Admin, Admin, Teacher or Parent,
          securely access your dashboard from one place.
        </p>

        <div className="mt-12 space-y-4">

          <div className="flex items-center gap-3">
            <span>✅</span>
            <p>Role Based Dashboard</p>
          </div>

          <div className="flex items-center gap-3">
            <span>✅</span>
            <p>Secure Authentication</p>
          </div>

          <div className="flex items-center gap-3">
            <span>✅</span>
            <p>Realtime Learning Platform</p>
          </div>

        </div>

      </div>
    </div>
  );
}