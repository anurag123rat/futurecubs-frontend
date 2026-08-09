"use client";

import Link from "next/link";
import {
  Grip,
  Puzzle,
  Brain,
  BookOpen,
  Image,
  Shapes,
  Copy,
  Eye,
} from "lucide-react";

const templates = [
  {
    id: 1,
    title: "Drag & Drop",
    icon: Grip,
    description: "Drag objects into the correct target.",
    difficulty: "Easy",
    color: "bg-blue-100 text-blue-600",
  },
  {
    id: 2,
    title: "Matching",
    icon: Puzzle,
    description: "Match left and right items.",
    difficulty: "Easy",
    color: "bg-green-100 text-green-600",
  },
  {
    id: 3,
    title: "Quiz",
    icon: Brain,
    description: "Multiple choice questions.",
    difficulty: "Medium",
    color: "bg-purple-100 text-purple-600",
  },
  {
    id: 4,
    title: "Flash Cards",
    icon: BookOpen,
    description: "Interactive flash cards.",
    difficulty: "Easy",
    color: "bg-orange-100 text-orange-600",
  },
  {
    id: 5,
    title: "Memory Game",
    icon: Image,
    description: "Find matching cards.",
    difficulty: "Hard",
    color: "bg-pink-100 text-pink-600",
  },
  {
    id: 6,
    title: "Puzzle",
    icon: Shapes,
    description: "Solve image puzzles.",
    difficulty: "Medium",
    color: "bg-cyan-100 text-cyan-600",
  },
];

export default function ActivityLibraryPage() {
  return (
    <div className="space-y-6">

      <div className="flex justify-between items-center">

        <div>

          <h1 className="text-3xl font-bold">
            Activity Library
          </h1>

          <p className="text-slate-500 mt-2">
            Choose a template to create activities faster.
          </p>

        </div>

        <Link
          href="/admin/activities"
          className="border rounded-xl px-5 py-3 hover:bg-slate-100"
        >
          Back
        </Link>

      </div>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">

        {templates.map((template) => {

          const Icon = template.icon;

          return (
            <div
              key={template.id}
              className="bg-white rounded-2xl border p-6 shadow-sm hover:shadow-md transition"
            >

              <div
                className={`w-16 h-16 rounded-2xl flex items-center justify-center ${template.color}`}
              >
                <Icon size={30} />
              </div>

              <h2 className="text-xl font-semibold mt-5">
                {template.title}
              </h2>

              <p className="text-slate-500 mt-2">
                {template.description}
              </p>

              <div className="mt-4">

                <span className="px-3 py-1 rounded-full bg-slate-100 text-sm">
                  {template.difficulty}
                </span>

              </div>

              <div className="grid grid-cols-2 gap-3 mt-6">

                <button className="border rounded-xl py-3 hover:bg-slate-50 flex items-center justify-center gap-2">
                  <Eye size={18} />
                  Preview
                </button>

                <button className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl py-3 flex items-center justify-center gap-2">
                  <Copy size={18} />
                  Use Template
                </button>

              </div>

            </div>
          );

        })}

      </div>

    </div>
  );
}