"use client";

import api, { setAccessToken } from "@/lib/axios";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Eye, EyeOff } from "lucide-react";

export default function LoginForm() {

  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [form, setForm] = useState({
    email: "",
    password: "",
    remember: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {

    const { name, value, checked, type } = e.target;

    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });

  };

 const handleSubmit = async (e: React.FormEvent) => {

  e.preventDefault();
  setError("");
  setLoading(true);

  try {

    const res = await api.post("/auth/login", {
      email: form.email,
      password: form.password,
    });

    const { accessToken, user } = res.data;

    setAccessToken(accessToken);
    localStorage.setItem("user", JSON.stringify(user));

    const roleRoutes: Record<string, string> = {
      superadmin: "/superadmin/dashboard",
      admin: "/admin/dashboard",
      teacher: "/teacher/dashboard",
      parent: "/parent/dashboard",
    };

    router.push(roleRoutes[user.role] || "/");

  } catch (err: any) {
    console.error(err);
    setError(err.response?.data?.message || "Something went wrong. Please try again.");
  } finally {
    setLoading(false);
  }

};

  return (

    <div className="flex items-center justify-center p-8">

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white rounded-3xl shadow-lg border p-10"
      >

        <h2 className="text-3xl font-bold text-black">
          Login
        </h2>

        <p className="text-slate-500 mt-2 mb-8">
          Enter your credentials to continue.
        </p>

        {error && (
          <div className="mb-5 p-3 rounded-xl bg-red-50 text-red-600 text-sm">
            {error}
          </div>
        )}

        {/* Email */}

        <div className="mb-5">

          <label className="block mb-2 font-medium text-black">
            Email
          </label>

          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="admin@futurecubs.com"
            className="w-full border text-gray-800 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

        </div>

        {/* Password */}

        <div className="mb-5">

          <label className="block mb-2 font-medium text-black">
            Password
          </label>

          <div className="relative">

            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="********"
              className="w-full border text-gray-800 rounded-xl p-3 pr-12 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-3.5"
            >
              {
                showPassword
                  ? <EyeOff size={20} className="text-gray-700" />
                  : <Eye size={20} className="text-gray-700" />
              }
            </button>

          </div>

        </div>

        {/* Remember */}

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3 mb-4">

          <label className="flex items-center gap-2 text-black">

            <input
              type="checkbox"
              name="remember"
              checked={form.remember}
              onChange={handleChange}
            />

            Remember me

          </label>

          <button
            type="button"
            className="text-blue-600 hover:underline"
          >
            Forgot Password?
          </button>

        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-xl py-3 font-semibold disabled:opacity-60"
        >
          {loading ? "Logging in..." : "Login"}
        </button>

      </form>

    </div>

  );
}