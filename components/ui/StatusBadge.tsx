interface StatusBadgeProps {
  status:
    | "Active"
    | "Inactive"
    | "Ready"
    | "Draft"
    | "Published"
    | "Pending"
    | "Completed"
    | "Disabled";
}

const statusStyles = {
  Active: "bg-green-100 text-green-700",
  Inactive: "bg-red-100 text-red-700",
  Ready: "bg-green-100 text-green-700",
  Draft: "bg-yellow-100 text-yellow-700",
  Published: "bg-blue-100 text-blue-700",
  Pending: "bg-orange-100 text-orange-700",
  Completed: "bg-purple-100 text-purple-700",
  Disabled: "bg-gray-200 text-gray-700",
};

export default function StatusBadge({
  status,
}: StatusBadgeProps) {
  return (
    <span
      className={`px-3 py-1 rounded-full text-xs font-semibold ${statusStyles[status]}`}
    >
      {status}
    </span>
  );
}