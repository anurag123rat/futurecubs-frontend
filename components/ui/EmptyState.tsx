import Link from "next/link";
import { Inbox } from "lucide-react";

interface EmptyStateProps {
  title: string;
  description: string;
  buttonText?: string;
  buttonHref?: string;
}

export default function EmptyState({
  title,
  description,
  buttonText,
  buttonHref,
}: EmptyStateProps) {
  return (
    <div className="bg-white border rounded-2xl p-12 text-center">
      <div className="w-20 h-20 rounded-full bg-slate-100 flex items-center justify-center mx-auto">
        <Inbox
          size={40}
          className="text-slate-400"
        />
      </div>

      <h2 className="text-2xl font-semibold mt-6">
        {title}
      </h2>

      <p className="text-slate-500 mt-2 max-w-md mx-auto">
        {description}
      </p>

      {buttonText && buttonHref && (
        <Link
          href={buttonHref}
          className="inline-block mt-8 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl"
        >
          {buttonText}
        </Link>
      )}
    </div>
  );
}