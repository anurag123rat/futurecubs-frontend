"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import { setAccessToken } from "@/lib/axios";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

export default function DashboardLayout({
  children,
  role,
}: {
  children: React.ReactNode;
  role: "superadmin" | "admin" | "teacher" | "parent";
}) {
  const router = useRouter();
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    const verifyAuth = async () => {
      try {
        // Refresh cookie se naya access token lo (page refresh pe memory token chala jata hai)
        

        const res = await axios.post(
        `${API_BASE_URL}/api/auth/refresh`,
        {},
        { withCredentials: true }
      );

        setAccessToken(res.data.accessToken);

        // localStorage se user info nikaalo role-check ke liye
        const userStr = localStorage.getItem("user");
        if (!userStr) {
          router.push("/login");
          return;
        }

        const user = JSON.parse(userStr);

        if (user.role !== role) {
          // Galat role — sahi dashboard pe bhej do
          router.push(`/${user.role}/dashboard`);
          return;
        }

        setChecking(false);

      } catch (error) {
        // Refresh fail hua matlab login nahi hai ya session expire ho gaya
        localStorage.removeItem("user");
        router.push("/login");
      }
    };

    verifyAuth();
  }, [role, router]);

  if (checking) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-slate-500">Loading...</p>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen">
      <Sidebar role={role} />

      <div className="flex-1">
        <Header />

        <main className="p-6">
          {children}
        </main>
      </div>
    </div>
  );
}