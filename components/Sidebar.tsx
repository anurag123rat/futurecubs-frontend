"use client";

import { BarChart3, UserCheck, FileText, GraduationCap, LayoutDashboard, Users, BookOpen,
  UserCircle,FileBarChart, CalendarCheck } from "lucide-react";
import Link from "next/link";

const menuConfig = {
  superadmin: [
  {
    name: "Dashboard",
    icon: LayoutDashboard,
    href: "/superadmin/dashboard",
  },
  {
    name: "Admins",
    icon: UserCheck,
    href: "/superadmin/admins",
  },
  {
    name: "Academics",
    icon: UserCheck,
    href: "/superadmin/academics",
  },
  {
    name: "Teachers",
    icon: GraduationCap,
    href: "/superadmin/teachers",
  },
  {
    name: "Students",
    icon: Users,
    href: "/superadmin/students",
  },
   {
    name: "AgeGroups",
    icon: Users,
    href: "/superadmin/agegroups",
  },
  {
    name: "Classes",
    icon: GraduationCap,
    href: "/superadmin/classes",
  },
  {
    name: "Parents",
    icon: Users,
    href: "/superadmin/parents",
  },
   {
    name: "Lessons",
    icon: FileText,
    href: "/superadmin/lessons",
  },
  {
    name: "Worksheets",
    icon: FileText,
    href: "/superadmin/worksheets",
  },
   {
    name: "Activities",
    icon: FileText,
    href: "/superadmin/activities",
  },
  {
    name: "Settings",
    icon: FileText,
    href: "/superadmin/settings",
  },
  {
    name: "Reports",
    icon: BarChart3,
    href: "/superadmin/reports",
  },
  {
    name: "Profile",
    icon: FileText,
    href: "/superadmin/profile",
  },
],
admin: [
  {
    name: "Dashboard",
    icon: LayoutDashboard,
    href: "/admin",
  },
  {
    name: "Teachers",
    icon: GraduationCap,
    href: "/admin/teachers",
  },
  {
    name: "Parents",
    icon: Users,
    href: "/admin/parents",
  },
  {
    name: "Students",
    icon: Users,
    href: "/admin/students",
  },
  {
    name: "Age Groups",
    icon: BookOpen,
    href: "/admin/age-groups",
  },
  {
    name: "Lessons",
    icon: FileText,
    href: "/admin/lessons",
  },
  {
    name: "Activities",
    icon: FileText,
    href: "/admin/activities",
  },
 
  {
    name: "Classes",
    icon: CalendarCheck,
    href: "/admin/classes",
  },
  {
    name: "Reports",
    icon: FileBarChart,
    href: "/admin/reports",
  },
  {
    name: "Settings",
    icon: BarChart3,
    href: "/admin/settings",
  },
  {
    name: "Profile",
    icon: UserCircle,
    href: "/admin/profile",
  },
],

  teacher: [
    { name: "Dashboard",icon: LayoutDashboard, href: "/teacher/dashboard" },
    { name: "Students", icon: Users, href: "/teacher/students" },
    { name: "Class", icon: BookOpen, href: "/teacher/class" },
    { name: "Lessons", icon: FileText, href: "/teacher/lessons" },
    { name: "Activities", icon: FileText, href: "/teacher/activities" },
    { name: "Submissions", icon: CalendarCheck, href: "/teacher/activities/submissions" },
    { name: "Reports", icon: FileBarChart, href: "/teacher/reports" },
    { name: "Attendance", icon: CalendarCheck, href: "/teacher/attendance" },
    { name: "Profile", icon: UserCircle, href: "/teacher/profile" },
    // { name: "Classes", icon: GraduationCap, href: "/teacher/classes" },
  ],
   parent: [
    {
      name: "Dashboard",
      icon: LayoutDashboard,
      href: "/parent",
    },
    {
      name: "My Child",
      icon: Users,
      href: "/parent/mychild",
    },
    {
      name: "Activities",
      icon: FileText,
      href: "/parent/activities",
    },
    {
      name: "Progress",
      icon: BarChart3,
      href: "/parent/progress",
    },
    {
      name: "Profile",
      icon: UserCheck,
      href: "/parent/profile",
    },
  ],
};

export default function Sidebar({
  role,
}: {
  role: "superadmin" | "admin" | "teacher" | "parent";
}) {
  const menuItems = menuConfig[role] || [];

  return (
    <aside className="w-72 min-h-screen bg-slate-900 text-white border-r border-slate-800">
      <div className="h-20 flex items-center px-6 border-b border-slate-800">
        <h1 className="text-2xl font-bold">
          Future<span className="text-blue-400">Cubs</span>
        </h1>
      </div>

      <nav className="p-4">
        {menuItems.map((item : any) => {
          const Icon = item.icon;

          return (
            <Link
              key={item.name}
              href={item.href}
              className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-slate-800 transition-all mb-2"
            >
              <Icon size={20} />
              <span>{item.name}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}