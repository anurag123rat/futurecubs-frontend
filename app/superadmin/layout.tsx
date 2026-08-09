import DashboardLayout from "@/layouts/DashboardLayout";

export default function SuperAdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <DashboardLayout role="superadmin">
      {children}
    </DashboardLayout>
  );
}