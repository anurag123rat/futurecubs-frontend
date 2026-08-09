import Link from "next/link";

interface ActionButtonsProps {
  viewHref?: string;
  editHref?: string;
  onDelete?: () => void;
}

export default function ActionButtons({
  viewHref,
  editHref,
  onDelete,
}: ActionButtonsProps) {
  return (
    <div className="flex items-center gap-2">
      {viewHref && (
        <Link
          href={viewHref}
          className="px-3 py-2 rounded-lg border border-slate-300 hover:bg-slate-100 transition text-sm"
        >
          View
        </Link>
      )}

      {editHref && (
        <Link
          href={editHref}
          className="px-3 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white transition text-sm"
        >
          Edit
        </Link>
      )}

      {onDelete && (
        <button
          onClick={onDelete}
          className="px-3 py-2 rounded-lg bg-red-600 hover:bg-red-700 text-white transition text-sm"
        >
          Delete
        </button>
      )}
    </div>
  );
}