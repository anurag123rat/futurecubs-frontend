import Link from "next/link";
import {
  BookOpen,
  Users,
  Puzzle,
  GraduationCap,
  Clock3,
  Layers3,
  FileText,
  ImageIcon,
} from "lucide-react";

export default function LessonDetailsPage() {
  const lesson = {
    id: 1,
    code: "LES-0001",
    title: "Colors Learning",
    description:
      "Children learn basic colors through PPT, flash cards and interactive activities.",
    ageGroup: "2-4 Years",
    teacher: "Priya Sharma",
    slides: 8,
    activities: 10,
    classes: 4,
    students: 58,
    duration: "30 Minutes",
    difficulty: "Easy",
    version: "v1.0",
    status: "Published",
    completed: 48,
    pending: 10,
    averageScore: "91%",
  };

  const classList = [
    "Sunshine A",
    "Rainbow B",
    "Stars C",
    "Moon A",
  ];

  const activityList = [
    "Color Matching",
    "Drag & Drop Colors",
    "Apple Color",
    "Balloon Matching",
    "Find Correct Color",
  ];

  return (
    <div className="space-y-6">

      {/* Header */}

      <div className="flex justify-between items-center">

        <div>

          <h1 className="text-3xl font-bold">
            {lesson.title}
          </h1>

          <p className="text-slate-500 mt-2">
            Lesson Code : {lesson.code}
          </p>

          <span className="inline-block mt-3 px-4 py-1 rounded-full bg-green-100 text-green-700">
            {lesson.status}
          </span>

        </div>

        <Link
          href={`/admin/lessons/${lesson.id}/edit`}
          className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700"
        >
          Edit Lesson
        </Link>

      </div>

      {/* Stats */}

      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5">

        <StatCard
          icon={<Layers3 size={22} />}
          title="Slides"
          value={lesson.slides.toString()}
        />

        <StatCard
          icon={<Puzzle size={22} />}
          title="Activities"
          value={lesson.activities.toString()}
        />

        <StatCard
          icon={<BookOpen size={22} />}
          title="Assigned Classes"
          value={lesson.classes.toString()}
        />

        <StatCard
          icon={<Users size={22} />}
          title="Students"
          value={lesson.students.toString()}
        />

      </div>

      {/* Information */}

      <div className="grid lg:grid-cols-2 gap-6">

        <div className="bg-white rounded-2xl border p-6">

          <h2 className="font-semibold text-xl mb-5">
            Lesson Information
          </h2>

          <Info label="Lesson Code" value={lesson.code} />
          <Info label="Age Group" value={lesson.ageGroup} />
          <Info label="Teacher" value={lesson.teacher} />
          <Info label="Duration" value={lesson.duration} />
          <Info label="Difficulty" value={lesson.difficulty} />
          <Info label="Version" value={lesson.version} />

        </div>

        <div className="bg-white rounded-2xl border p-6">

          <h2 className="font-semibold text-xl mb-5">
            Description
          </h2>

          <p className="text-slate-600 leading-7">
            {lesson.description}
          </p>

        </div>

      </div>

      {/* Assigned Classes */}

      <div className="bg-white rounded-2xl border p-6">

        <h2 className="text-xl font-semibold mb-5">
          Assigned Classes
        </h2>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4">

          {classList.map((item) => (
            <div
              key={item}
              className="border rounded-xl p-4 flex justify-between"
            >
              <span>{item}</span>

              <BookOpen size={18} />
            </div>
          ))}

        </div>

      </div>

      {/* Activities */}

      <div className="bg-white rounded-2xl border p-6">

        <div className="flex justify-between items-center mb-5">

          <h2 className="text-xl font-semibold">
            Lesson Activities
          </h2>

          <button className="text-blue-600">
            View All
          </button>

        </div>

        <div className="space-y-3">

          {activityList.map((item) => (

            <div
              key={item}
              className="flex justify-between border rounded-xl p-4"
            >

              <span>{item}</span>

              <button className="text-blue-600">
                View
              </button>

            </div>

          ))}

        </div>

      </div>

      {/* Resources */}

      <div className="grid md:grid-cols-2 gap-6">

        <div className="bg-white rounded-2xl border p-6">

          <ImageIcon className="mb-4 text-blue-600" />

          <h2 className="font-semibold">
            Cover Image
          </h2>

          <p className="text-slate-500 mt-2">
            colors-cover.png
          </p>

          <button className="mt-5 border px-5 py-2 rounded-xl">
            Preview
          </button>

        </div>

        <div className="bg-white rounded-2xl border p-6">

          <FileText className="mb-4 text-purple-600" />

          <h2 className="font-semibold">
            Lesson PPT
          </h2>

          <p className="text-slate-500 mt-2">
            colors-learning.pptx
          </p>

          <button className="mt-5 border px-5 py-2 rounded-xl">
            Download
          </button>

        </div>

      </div>

      {/* Analytics */}

      <div className="grid md:grid-cols-3 gap-5">

        <StatCard
          icon={<GraduationCap size={22} />}
          title="Completed"
          value={lesson.completed.toString()}
        />

        <StatCard
          icon={<Users size={22} />}
          title="Pending"
          value={lesson.pending.toString()}
        />

        <StatCard
          icon={<Clock3 size={22} />}
          title="Average Score"
          value={lesson.averageScore}
        />

      </div>

      {/* Quick Actions */}

      <div className="bg-white rounded-2xl border p-6">

        <h2 className="font-semibold text-xl mb-5">
          Quick Actions
        </h2>

        <div className="flex flex-wrap gap-4">

          <button className="bg-blue-600 text-white px-5 py-3 rounded-xl">
            Edit Lesson
          </button>

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
}: {
  label: string;
  value: string;
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
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
}) {
  return (
    <div className="bg-white rounded-2xl border p-5">

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