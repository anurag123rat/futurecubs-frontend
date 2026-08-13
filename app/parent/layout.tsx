

import DashboardLayout from "@/layouts/DashboardLayout";
import ChatWidget from "@/components/chatbot/ChatWidget";

export default function ParentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <DashboardLayout role="parent">
      {children}
      <ChatWidget />
    </DashboardLayout>  
  );
}