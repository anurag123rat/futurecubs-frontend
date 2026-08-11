

import DashboardLayout from "@/layouts/DashboardLayout";

export default function ParentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <DashboardLayout role="parent">
      {children}
    </DashboardLayout>
  );
}