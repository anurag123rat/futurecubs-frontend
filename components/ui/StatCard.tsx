import { LucideIcon } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  color?:
    | "blue"
    | "green"
    | "purple"
    | "orange"
    | "red";
  subtitle?: string;
}

const colors = {
  blue: "bg-blue-100 text-blue-600",
  green: "bg-green-100 text-green-600",
  purple: "bg-purple-100 text-purple-600",
  orange: "bg-orange-100 text-orange-600",
  red: "bg-red-100 text-red-600",
};

export default function StatCard({
  title,
  value,
  icon: Icon,
  color = "blue",
  subtitle,
}: StatCardProps) {
  return (
    <div className="bg-white rounded-2xl border shadow-sm p-5 hover:shadow-md transition">
      <div className="flex justify-between items-start">
        <div>
          <p className="text-slate-500 text-sm">{title}</p>

          <h2 className="text-3xl font-bold mt-2">
            {value}
          </h2>

          {subtitle && (
            <p className="text-xs text-slate-400 mt-2">
              {subtitle}
            </p>
          )}
        </div>

        <div
          className={`w-12 h-12 rounded-xl flex items-center justify-center ${colors[color]}`}
        >
          <Icon size={24} />
        </div>
      </div>
    </div>
  );
}