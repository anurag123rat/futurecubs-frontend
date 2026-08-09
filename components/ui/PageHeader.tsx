import Link from "next/link";

interface PageHeaderProps {
  title: string;
  description?: string;
  buttonText?: string;
  buttonHref?: string;
}

export default function PageHeader({
  title,
  description,
  buttonText,
  buttonHref,
}: PageHeaderProps) {
  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
      <div>
        <h1 className="text-3xl font-bold text-slate-800">
          {title}
        </h1>

        {description && (
          <p className="text-slate-500 mt-1">
            {description}
          </p>
        )}
      </div>

      {buttonText && buttonHref && (
        <Link
          href={buttonHref}
          className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition"
        >
          {buttonText}
        </Link>
      )}
    </div>
  );
}