import DashboardLayout from "../../components/DashboardLayout";

import parent from "../../components/Sidebar";

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