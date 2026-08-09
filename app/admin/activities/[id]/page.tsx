import Link from "next/link";
import {
  Puzzle,
  BookOpen,
  Users,
  GraduationCap,
  BarChart3,
  ImageIcon,
  Volume2,
  Eye,
} from "lucide-react";

export default function ActivityDetailsPage() {
  const activity = {
    id: 1,
    code: "ACT-001",
    name: "Color Matching",
    type: "Matching",
    lesson: "Colors Learning",
    ageGroup: "2-4 Years",
    difficulty: "Easy",
    status: "Published",
    instructions:
      "Match every object with its correct color.",
    attempts: 420,
    completion: "89%",
    averageScore: "93%",
  };

  const classes = [
    "Sunshine A",
    "Rainbow B",
    "Stars C",
  ];

  const lessons = [
    "Colors Learning",
    "Fruits Learning",
  ];

  return (
    <div className="space-y-6">

      {/* Header */}

      <div className="flex justify-between items-center">

        <div>

          <h1 className="text-3xl font-bold">
            {activity.name}
          </h1>

          <p className="text-slate-500 mt-2">
            Activity Code : {activity.code}
          </p>

          <span className="inline-block mt-3 px-4 py-1 rounded-full bg-green-100 text-green-700">
            {activity.status}
          </span>

        </div>

        <Link
          href={`/admin/activities/${activity.id}/edit`}
          className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700"
        >
          Edit Activity
        </Link>

      </div>

      {/* Stats */}

      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5">

        <StatCard
          icon={<Users size={22} />}
          title="Attempts"
          value={activity.attempts.toString()}
        />

        <StatCard
          icon={<BarChart3 size={22} />}
          title="Completion"
          value={activity.completion}
        />

        <StatCard
          icon={<GraduationCap size={22} />}
          title="Average Score"
          value={activity.averageScore}
        />

        <StatCard
          icon={<BookOpen size={22} />}
          title="Assigned Lessons"
          value={lessons.length.toString()}
        />

      </div>

      {/* Information */}

      <div className="grid lg:grid-cols-2 gap-6">

        <div className="bg-white border rounded-2xl p-6">

          <h2 className="text-xl font-semibold mb-5">
            Activity Information
          </h2>

          <Info label="Code" value={activity.code}/>
          <Info label="Type" value={activity.type}/>
          <Info label="Lesson" value={activity.lesson}/>
          <Info label="Age Group" value={activity.ageGroup}/>
          <Info label="Difficulty" value={activity.difficulty}/>
          <Info label="Status" value={activity.status}/>

        </div>

        <div className="bg-white border rounded-2xl p-6">

          <h2 className="text-xl font-semibold mb-5">
            Instructions
          </h2>

          <p className="text-slate-600 leading-7">
            {activity.instructions}
          </p>

        </div>

      </div>

      {/* Preview */}

      <div className="bg-white border rounded-2xl p-6">

        <div className="flex justify-between items-center mb-6">

          <h2 className="text-xl font-semibold">
            Activity Preview
          </h2>

          <Link
            href={`/admin/activities/${activity.id}/preview`}
            className="text-blue-600 flex items-center gap-2"
          >
            <Eye size={18}/>
            Open Preview
          </Link>

        </div>

        <div className="rounded-xl border border-dashed h-60 flex items-center justify-center bg-slate-50">

          <div className="text-center">

            <Puzzle
              className="mx-auto text-slate-400"
              size={45}
            />

            <p className="mt-4 text-slate-500">
              Interactive Preview Available
            </p>

          </div>

        </div>

      </div>

      {/* Assigned */}

      <div className="grid lg:grid-cols-2 gap-6">

        <div className="bg-white border rounded-2xl p-6">

          <h2 className="font-semibold text-xl mb-5">
            Assigned Lessons
          </h2>

          <div className="space-y-3">

            {lessons.map((lesson) => (

              <div
                key={lesson}
                className="border rounded-xl p-4"
              >
                {lesson}
              </div>

            ))}

          </div>

        </div>

        <div className="bg-white border rounded-2xl p-6">

          <h2 className="font-semibold text-xl mb-5">
            Assigned Classes
          </h2>

          <div className="space-y-3">

            {classes.map((item) => (

              <div
                key={item}
                className="border rounded-xl p-4"
              >
                {item}
              </div>

            ))}

          </div>

        </div>

      </div>

      {/* Resources */}

      <div className="grid md:grid-cols-2 gap-6">

        <div className="bg-white border rounded-2xl p-6">

          <ImageIcon
            className="text-blue-600 mb-4"
            size={28}
          />

          <h2 className="font-semibold">
            Images
          </h2>

          <p className="text-slate-500 mt-2">
            4 Images Uploaded
          </p>

        </div>

        <div className="bg-white border rounded-2xl p-6">

          <Volume2
            className="text-purple-600 mb-4"
            size={28}
          />

          <h2 className="font-semibold">
            Audio
          </h2>

          <p className="text-slate-500 mt-2">
            2 Audio Files
          </p>

        </div>

      </div>

      {/* Quick Actions */}

      <div className="bg-white border rounded-2xl p-6">

        <h2 className="text-xl font-semibold mb-5">
          Quick Actions
        </h2>

        <div className="flex flex-wrap gap-4">

          <Link
            href={`/admin/activities/${activity.id}/edit`}
            className="bg-blue-600 text-white px-5 py-3 rounded-xl"
          >
            Edit
          </Link>

          <button className="border px-5 py-3 rounded-xl">
            Duplicate
          </button>

          <button className="border px-5 py-3 rounded-xl">
            Archive
          </button>

          <button className="bg-red-600 text-white px-5 py-3 rounded-xl">
            Delete
          </button>

        </div>

      </div>

    </div>
  );
}

function Info({
  label,
  value,
}:{
  label:string;
  value:string;
}) {
  return (
    <div className="flex justify-between border-b py-3">
      <span className="text-slate-500">{label}</span>
      <span className="font-medium">{value}</span>
    </div>
  );
}

function StatCard({
  icon,
  title,
  value,
}:{
  icon:React.ReactNode;
  title:string;
  value:string;
}) {
  return (
    <div className="bg-white border rounded-2xl p-5">

      <div className="text-blue-600">
        {icon}
      </div>

      <p className="text-slate-500 mt-3">
        {title}
      </p>

      <h2 className="text-2xl font-bold mt-2">
        {value}
      </h2>

    </div>
  );
}